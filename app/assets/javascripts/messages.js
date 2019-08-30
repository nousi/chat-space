$(function(){
  var reloadMessages = function(){
    var last_message_id = $('.message:last').data('id');
    $.ajax({
      url: window.location.href + '/api/messages',
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages){
      console.log('success');
      var insetHTML = '';
    })
    .fail(function(){
      console.log('error');
    });
  };
  // var buidMessageHTML = function(message){
  //   if (message.text && message.image.url){
  //     var html =`<div class="message" data-id='${message.id}' >
  //                 <div class="message__info clearfix">
  //                   <p class="message__info_upper_name">
  //                     ${message.user_name}
  //                   </p>
  //                   <p class="message__info_upper_date">
  //                     ${message.created_at}
  //                   </p>
  //                 </div>
  //                 <p class="message__text">
  //                   ${message.text}
  //                 </p>
  //                 <img class="lower-message__image" src="${image}">
  //               </div>`
  //   }
  // }
  
  function buildHTML(message){
    var image = (
      (message.image_url)
      ? (message.image_url)
      : ("")
    );
    var html =(
      (`<div class="message" data-id= "${message.id}" data-user-name= "${message.user.name}" data-image= "${message.image}" data-text="${message.text}" data-created-at= "${message.created_at} >
          <div class="message__info clearfix">
            <p class="message__info_upper_name">
              ${message.user_name}
            </p>
            <p class="message__info_upper_date">
              ${message.created_at}
            </p>
          </div>
          <p class="message__text">
            ${message.text}
          </p>
          <img class="lower-message__image" src="${image}">
        </div>`
      )
    );
    return html;
  }
  $('#new_comment').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    
    $.ajax({
      url: location.href,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data)
      $('.messages').append(html)
      $('#new_comment')[0].reset();
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
  
    })
    .fail(function(){
      alert('送信に失敗しました。');
    })
    .always(function(){
      $(".form__submit").removeAttr("disabled");
      });
  })
  
  setInterval(reloadMessages, 5000);
});
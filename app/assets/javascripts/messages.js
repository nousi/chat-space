$(function(){
  function buildHTML(message){
    if(message.image_url){
      var html = `<div class="message">
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
                    <img class="lower-message__image" src="${message.image_url}">
                  </div>`
      return html;
    } else{
      var html = `<div class="message">
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
                  </div>`
      return html;
    }
  }
  $('#new_comment').on('submit', function(e){
    e.preventDefault();
    console.log(this)
    var formData = new FormData(this);
    // var href = location.href
    // var href = '/groups/${message.}/messages'
    $.ajax({
      url: location.href,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      console.log('Hello World!!')
      var html = buildHTML(data)
      $('.messages').append(html)
      $('.form__message').val('')
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
  
    })
    .fail(function(){
      alert('送信に失敗しました。');
    })
    .always(function(){
      $(".form__submit").removeAttr("disabled");
      });
  })
})
$(function(){
  function buildHTML(message){
    var html =(
      (message.image_url)
      ?(`<div class="message">
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
        )
      :(`<div class="message">
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
})
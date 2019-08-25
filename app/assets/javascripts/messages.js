$(function(){
  function buildHTML(message){
    var html = `.message
                  .message__info.clearfix
                    %p.message__info_upper_name
                      ${message.user_name}
                    %p.message__info_upper_date
                      ${message.created_at}
                  - if ${message.text}.present?
                    %p.message__text
                      ${message.text}
                  = image_tag ${message.image_url},　class: 'lower-message__image' if ${message.image}.present?`
    return html;
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
    })
    .fail(function(){
      alert('送信に失敗しました。');
    })
  })
})
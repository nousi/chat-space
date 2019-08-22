$(function(){
  $('#new_comment').on('submit', function(e){
    e.preventDetafault();
    console.log(this)
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url;
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(funciton(data){
      var html = buildHTML(data);
      $('').append(html)
      $('.form__message').val('')
    })
  })
})
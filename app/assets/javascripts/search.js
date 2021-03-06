$(document).on('turbolinks:load',function(){
  var search_list = $("#user-search-result");
  var group_list = $('.chat-group-users');
  function appendList(user){
    var html = `<div class="chat-group-user clearfix">
    <p class="chat-group-user__name">${user.name}</p>
    <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
    </div>`
    
    search_list.append(html);
  }
  function appendGroupList(user){
    var html = `<div class='chat-group-user'>
    <input name='group[user_ids][]' type='hidden' value='${user["userId"]}'>
    <p class='chat-group-user__name'>${user["userName"]}</p>
    <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
  </div>`
    
    group_list.append(html);
  }

  function appendErrMsgToHTML(msg) {
    var html = `<li>
                  <div class='listview__element--right-icon'>${ msg }</div>
                </li>`
    search_list.append(html);
  }

  $("#user-search-field").on("keyup",function() {
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })

    .done(function(users) {
      $("#user-search-result").empty();
      if (users.length !== 0) {
        users.forEach(function(user){
          appendList(user);
        });
      }
      else {
        appendErrMsgToHTML("一致するユーザーはいません");
      }
      
    })
    
    .fail(function(){
      alert('ユーザー検索に失敗しました')
    })
    
    
  });
  $(document).on('click', ".user-search-add", function(users){
    var user = $(this).data();
    appendGroupList(user)
  })
  $(document).on('click', ".user-search-remove", function(){
    $(this).parent().remove();
  })
});


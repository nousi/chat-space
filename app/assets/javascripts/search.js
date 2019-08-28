$(function() {
  var search_list = $("#user-search-result");
  var preWord;
  function appendList(user){
    var html = `<div class="chat-group-user clearfix">
    <p class="chat-group-user__name">${user.name}</p>
    <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="ユーザーのid" data-user-name="ユーザー名">追加</div>
    </div>`
    
    search_list.append(html);
  }
  function appendErrMsgToHTML(msg) {
    var html = `<li>
                  <div class='listview__element--right-icon'>${ msg }</div>
                </li>`
    search_list.append(html);
  }

  function editElement(element) {
    var result = "^" + element;
    return result;
  }
  $("#user-search-field").on("keyup",function() {
    var input = $("#user-search-field").val();
    var search_wards_split = input.split(" ").filter(function(e) { return e; });
    var search_wards = search_wards_split.map(editElement);
    var word = search_wards.join("|");
    var reg = RegExp(word);
    console.log(input);

    $.ajax({
      type: 'GET',
      url: '/groups/new',
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
        $("#user-search-result").empty();
        appendErrMsgToHTML("一致する映画はありません");
      }
    })
 
    .fail()
    

  });
});


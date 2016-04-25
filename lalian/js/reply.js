$(function(){
  $(".reply_btn").click(function(){
    var content = $(this).siblings("textarea").val();
    console.log("content: ", content);
    var firstItem = $("div .121img").eq(0);
    alert(firstItem);
    console.log("firstItem ==> ", firstItem);
    // $.ajax({
    //   type: 'POST',
    //   url: '',
    //   data: {userId:'xxx', content: content, ...},
    //   success: function(value) {
    //     var userName = value.userName;
    //     var userAvatar = value.userAvatar;
    //     var newReply = "<div class=\"reply_item\">" + userName + "</div>";
    //     $("div.reply_container").append(newReply);
    //   }
    // });
  });
});

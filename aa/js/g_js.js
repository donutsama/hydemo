$(function(){
   $(".GD a").click(function(){
     var index = $(".GD a").index($(this));
     $(".GD a.highlight").removeClass("highlight");
     $(this).addClass("highlight");
     $(".g_index").hide();
     $($(".g_index").get(index)).show();
     $(".g_index").eq(index).find("div.g_item").eq(0).show();
     $("html,body").animate({scrollTop:"0px"},0);
     $(".g_index").eq(index).find(".g_ul li a").removeClass("highlight");
     $(".g_index").eq(index).find(".g_ul li:nth-child(1) a").addClass("highlight");
   });

   $(".g_ul li a").click(function(){
      var index = $(this).parents(".g_ul").find("li").index($(this).parent()); 
      $(".g_ul li a").removeClass("highlight");
      $(this).addClass("highlight");
      $(".g_item").hide();
      var parent = $(this).parents(".g_index");
      parent.find(".g_item").eq(index).show();
   });

   $(".g_two .g_zan a:nth-child(1)").click(function(){
       var num = $(this).text();
       if($(this).hasClass("highlight")){
         $(this).removeClass("highlight");
         num--;
       }else{
         $(this).addClass("highlight");
         num++;
       }
      
       $(this).text(num);
   });

   $(".g_index .g_item").eq(0).nextAll().hide();
   $(".g_index:nth-child(2) .g_item").eq(0).nextAll().hide();

    $(".g_zan a.zan").click(function(){
        var num = $(this).siblings("span").text();
        if ($(this).hasClass("highlight")) {
            $(this).removeClass("highlight");
            num--;
        }else{
            num++;
            $(this).addClass("highlight");
        };
        $(this).siblings("span").text(num);
    });
 
    $("a.g_right").click(function(){
        $(".g_all").show();
        disableScroll();
    });

    $(".g_all").click(function(){
        $(".g_all").hide();
        enableScroll();
    });

    $(".clearfix textarea").focus(function(){
        $(this).animate({height:"80px"},300);
        $(this).siblings(".ct-submit").show();
    });

    // $(".clearfix textarea").blur(function(){
    //     var text = $(this).val();
    //     var num = 150;
    //     if ( text.length == 0) {
    //         $(this).animate({height:"20px"},300);
    //         $(this).siblings(".ct-submit").hide();
    //     }
    // });

    $(".clearfix textarea").blur(function(){
        var textarea = $(this);
        setTimeout(function(){
            var text = textarea.val();
            var num = 150;
            if ( text.length == 0) {
                $(textarea).animate({height:"40px"},300);
                $(textarea).siblings(".ct-submit").hide();
            }
        }, 300);

    });

    // $(".dis-r").on("click",".dis-r .hui a",function(){
    //     var index = $(this).parents(".dis-r").find(".reply_container");
    //     $(".reply_container:visible").slideUp();
    //     if (index.is(":visible")) {
    //         $(this).parents(".dis-r").find(".reply_container").slideUp();
    //     }else{
    //         $(this).parents(".dis-r").find(".reply_container").slideDown();
    //     }
    // });


    $(".no2").on("click", ".dis-r .hui a", function(){
        var index = $(this).parents(".dis-r").find(".reply_container");
        $(".reply_container:visible").slideUp();
        if (index.is(":visible")) {
            $(this).parents(".dis-r").find(".reply_container").slideUp();
        }else{
            $(this).parents(".dis-r").find(".reply_container").slideDown();
        } 
    });

    // $(".dis-r .hui a").on("click",function(){
    //     var index = $(this).parents(".dis-r").find(".reply_container");
    //     $(".reply_container:visible").slideUp();
    //     if (index.is(":visible")) {
    //         $(this).parents(".dis-r").find(".reply_container").slideUp();
    //     }else{
    //         $(this).parents(".dis-r").find(".reply_container").slideDown();
    //     }
    // });

    $(".reply_container textarea").blur(function(){
        var num = $(this).val();
        if (num.length == 0) {
            $(this).siblings(".reply_item").hide();
            $(this).animate({height:"20px"},300);
        };
    });

    $(".reply_container textarea").focus(function(){
        $(this).animate({height:"80px"},300);
        $(this).siblings(".reply_item").show();
    });

    // $(".reply_container textarea , .clearfix textarea").bind('input propertychange', function(){
    $(".no2").on("input propertychange",".reply_container textarea , .clearfix textarea",function(){
        var num = $(this).val().length;
        if (num > 150) {
            $(this).parents(".clearfix").find(".prefix").text("已经超出");
            $(this).parents(".reply_container").find(".prefix").text("已经超出");
            var text = num - 150;
            $(this).parents(".reply_container").find("strong").text(text);
            $(this).parents(".clearfix").find("strong").text(text);
        }else {
            $(this).parents(".clearfix").find(".prefix").text("还能输入");
            $(this).parents(".reply_container").find(".prefix").text("还能输入");
            var text = 150 - num;
            $(this).parents(".reply_container").find("strong").text(text);
            $(this).parents(".clearfix").find("strong").text(text);
        }
    });

    $("div.reply_item .btn[type='submit'], div.clearfix div.ct-submit .btn[type='submit']").click(function(){
            // 输入框里的文本内容
            var content;
            var isReplyToComment; // 是回复别人的回复
            if ($(this).parents("div.reply_container").length > 0) {
                content = $(this).parents("div.reply_container").find("textarea").val();
                isReplyToComment = true;
            } else {
                content = $(this).parents('div.clearfix').find("textarea").val();
                isReplyToComment = false;
            }
            if (content.length <= 0) { // 没有输入回复内容
                return ;
            }
            if (content.length > 150) {
                return ;
            }

            var newDiv = $(".template.hidden div.discussion").clone(true);// 复制一份完整的div作为一会儿要插入的新内容

            $(newDiv).find("div img.avatar").attr("src", "images/cry.gif"); // 修改头像
            $(newDiv).find("div.dis-r div.title a").text("用户123**45"); // 修改新内容里的用户名字为自己的名字
            $(newDiv).find("div.dis-r div.title span").eq(0).text("2016年1月29日"); // 修改新内容里的时间 （需要用一个第三方的时间格式化库）
            $(newDiv).find("div.dis-r div.title span").eq(1).text("17:30:01");// 修改新内容里的时间 （需要用一个第三方的时间格式化库）

            if (isReplyToComment) {
                var originReplyUser = $(this).parents("div.discussion div.dis-r").find("div.title a").text(); // 别人的名字
                var originReplyContent = $(this).parents("div.discussion div.dis-r").find("div.ct").text(); // 别人回复的内容
                $(newDiv).find("div.dis-r div.ut a").eq(0).text("@"+originReplyUser); // 修改新div里的别人的名字
                $(newDiv).find("div.dis-r .qut").text(originReplyContent); // 修改新div里的别人回复的内容
            } else {
                $(newDiv).find("div.dis-cont").hide();
            }
            $(newDiv).find("div.dis-r div.ct").text(content); // 修改新div里的别人回复的内容
            $(newDiv).find("div.reply_container span.ct-count strong").text("150"); // 重置回复框文字字数统计

            $("div.no2 div.discussion").eq(0).before($(newDiv)); // 把新div插入到第一个的位置

          var replyNum = parseInt($("div.no2 p.title span").text()); // 把评论数加1
          replyNum  = replyNum + 1;
          $("div.no2 p.title span").text(replyNum);

          // 把刚刚输入的输入框内容清空，并且隐藏。
          if (isReplyToComment) {
                $(this).parents(".reply_container").find("textarea").val("");
                $(this).parents(".reply_container").find("textarea").blur();
                $(this).parents(".reply_container").hide();
          } else {
                $(this).parents("div.clearfix").find("textarea").val("");
                $(this).parents("div.clearfix").find("textarea").blur();
                $(this).parents("div.clearfix").find("ct-submit").hide();
          }
    });

});

// 阻止事件的默认行为，比如手指滑动时页面默认滚动
function preventDefault(e) {
    e = e || window.event;
    e.preventDefault && e.preventDefault();
    e.returnValue = false;
}

// 阻止事件冒泡
function stopPropagation(e){
    e = e || window.event;
    e.stopPropagation && e.stopPropagation();
    e.cancelBubble = false;
}

// 允许页面滚动
function enableScroll() {
    $(document).off('mousewheel', preventDefault);
    $(document).off('touchmove', preventDefault);
}

// 禁止页面滚动
function disableScroll() {
    $(document).on('mousewheel', preventDefault);
    $(document).on('touchmove', preventDefault);
}

// 允许弹出层滚动
function enablePopupScroll(div) {
    // 移动端touch重写
    var startX, startY;

    $(div).on('touchstart', function(e){
        startX = e.originalEvent.changedTouches[0].pageX;
        startY = e.originalEvent.changedTouches[0].pageY;
    });

    // 仿innerScroll方法
    $(div).on('touchmove', function(e){
        e.stopPropagation();

        var deltaX = e.originalEvent.changedTouches[0].pageX - startX;
        var deltaY = e.originalEvent.changedTouches[0].pageY - startY;

        // 只能纵向滚
        if(Math.abs(deltaY) < Math.abs(deltaX)){
            e.preventDefault();
            return false;
        }

        var box = $(this).get(0);

        if($(box).height() + box.scrollTop >= box.scrollHeight){
            if(deltaY < 0) {
                e.preventDefault();
                return false;
            }
        }
        if(box.scrollTop === 0){
            if(deltaY > 0) {
                e.preventDefault();
                return false;
            }
        }
        // 会阻止原生滚动
        // return false;
    });
}

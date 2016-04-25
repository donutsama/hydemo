$(function(){
	// 导航点击跳转页面
	$(".infor-cont .infor-item").eq(0).nextAll().hide();
	$("ul.filtering a").click(function(){
		var index = $("ul.filtering a").index($(this));
		var num = $(".infor-cont .infor-item");
		$(num).hide();
		$(num.get(index)).show();
		$("ul.filtering a").removeClass("highlight");
		$(this).addClass("highlight");
		$("ul.filtering a.none").removeClass("highlight");

        var color = $(this).css("background-color");
        var text = $(this).text();
		$(num.get(index)).find("a.yuan").children("span").css("background-color",color);
		$(num.get(index)).find("a.yuan").children("span").text(text);
	});

	//点击按钮加入收藏
	$(".source a.span").click(function(){
		var index = $(this).text();
		if (index == '加入收藏') {
			$(this).text('收藏成功');
			$(this).css("color","#ea5514");
			$(".source a.span_h").text('收藏成功');
			$(".source a.span_h").css("color","#ea5514");
			num = num + 1;
		}else{
			$(this).text('加入收藏');
			$(this).css("color","#646464");
			$(".source a.span_h").text('加入收藏');
			$(".source a.span_h").css("color","#646464");
			num = num - 1;
		};
	});

    // 点击图标修改收藏状态
	$(".source a.love").click(function(){
		var num = parseInt($(this).text());
		if ($("a.love1").is(":visible")) {
			num--;
			$(this).text(num);
			$(this).removeClass('love1');
			$(".source a.love_h").text(num);
			$(".source a.love_h").removeClass('love1');
		}else{
			num++;
			$(this).text(num);
			$(this).addClass('love1');
			$(".source a.love_h").text(num);
			$(".source a.love_h").addClass('love1');
		};
	});

	//修改收藏状态
	// $(".love-share a.love-l").click(function(){
	// 	var num = parseInt($(this).text());
	// 	if ($(this).hasClass('love-highlight')){
	// 		num--;
	// 		$(this).text(num);
	// 		$(this).removeClass('love-highlight');
	// 	}else{
	// 		num++;
	// 		$(this).text(num);
	// 		$(this).addClass('love-highlight');
	// 	};
	// });

	//根据div数量添加li 点击li改变显隐内容
	var num = $(".all-num1 .num1").length;
	if ( num > 1) {
		for ( var i = 0; i < num; i++){
			var li = $("<li><a href=\"javascript:;\"</a></li>");
			$(".all-num1 ul").append(li);
		}
		$(".all-num1 li:nth-child(1)").addClass("highlight");
		$(".all-num1 li").click(function(){
			var index = $(".all-num1 li").index($(this));
			$(".all-num1 li.highlight").removeClass('highlight');
			$(this).addClass("highlight");
			$(".all-num1 .num1:visible").fadeOut();
			$($(".all-num1 .num1").get(index)).fadeIn();
		});
	}

	$(".noo span:nth-child(1)").click(function(){
		$(this).parent(".noo").find("a:nth-child(2)").text("ssss");
	});

	// var intervalBanner = setInterval(changeBanner, 4000);
	setInterval(changePic, 5000);

	$(".change1 img").eq(3).nextAll().fadeOut();

	setInterval(changePic1, 5000);

	$(".clearfix textarea").focus(function(){
		$(this).animate({height:"80px"},300);
		$(this).siblings(".ct-submit").show();
	});

	$(".clearfix textarea").blur(function(){
		var text = $(this).val();
		var num = 150;
		if ( text.length == 0) {
			$(this).animate({height:"20px"},300);
			$(this).siblings(".ct-submit").hide();
		}
	});

	$(".dis-r .hui a").click(function(){
		var index = $(this).parents(".dis-r").find(".reply_container");
		$(".reply_container:visible").slideUp();
		if (index.is(":visible")) {
			$(this).parents(".dis-r").find(".reply_container").slideUp();
		}else{
			$(this).parents(".dis-r").find(".reply_container").slideDown();
		}
	});

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

	$(".reply_container textarea , .clearfix textarea").bind('input propertychange', function(){
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
      			$(newDiv).find("div.dis-r div.qut").text(originReplyContent); // 修改新div里的别人回复的内容
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
//图片自己轮播
function changeBanner(){
	if ( $(".all-num1 .num1").length <= 1){
		return;
	};
	var index = $(".all-num1 .num1").index($(".all-num1 .num1:visible"));
	if ( index == $(".all-num1 .num1").length-1 ) {
		index = 0 ;
	} else{
		index++;
	};
	$(".all-num1 li.highlight").removeClass("highlight");
	$($(".all-num1 li").get(index)).addClass("highlight");
	$(".all-num1 .num1:visible").fadeOut();
	$($(".all-num1 .num1").get(index)).fadeIn();
}

function changePic(){
    var itemWidth = $("div.img").outerWidth(); // 每个div的宽度 =  width+border+padding
    var nums = 4; // 一次显示多少个，可以按照需求设这个值
    var marginLeft = -1 * itemWidth * nums; // 移动一次以后，第一个元素应该具有的左边距
    if ($(".num1-pic div.img").length <= nums) {
          // 个数不够，不用跳图
          return;
      }

      var num = $("div.img").length;
      if ( num < nums * 2 ) {
      	$("div.img").clone(true).appendTo(".num1-pic");
      }

      var firstItem = $(".num1-pic div.img").eq(0);
      if (firstItem.css("marginLeft") == marginLeft+"px") {
          // 如果第一个div的marginLeft已经等于刚刚计算的值，说明div已经移动过了，这时将前四个div移到父元素最后
          firstItem.css("marginLeft", 0);

          // for (var i = 0; i < nums; i++) { // for循环将前4个div按顺序移到列表最末尾
          // 	firstItem = $(".num1-pic div.img").eq(0);
          // 	firstItem.parent().append(firstItem);
          // }
          var prev = $("div.img").eq(4).prevAll();
          prev.appendTo(".num1-pic");
          firstItem = $(".num1-pic div.img").eq(0); // 拿到移动完之后的第一个div，也就是页面上能看到的第一个div
      }
	firstItem.animate({marginLeft: marginLeft}, 2000); // 将页面上能看到的第一个div，左移，显示下一批4个div
}

function changePic1(){
    var nums = 4;
    var num = $(".change1 div.cc").length;
    if (num <= nums) {
          return;
    }

    if ( num < nums * 2 ) {
      	$(".change1 div.cc").clone(true).appendTo(".change1");
    }

    var firstItem = $(".change1 div.cc").eq(0);
    var prev = $(".change1 div.cc").eq(4).prevAll();
    prev.appendTo(".change1");
    firstItem = $(".change1 div.cc").eq(0);
}
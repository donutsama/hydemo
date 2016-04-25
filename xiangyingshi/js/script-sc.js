$(function(){
	// 1.21
	$("ul#sc a").click(function(){
		var index = $("ul#sc a").index($(this));
		var cont = $(".all-sc .sc-content");
		$(".all-sc .sc-content:visible").hide();
		$(cont.get(index)).show();
		$("ul#sc a").removeClass("highlight");
		$(this).addClass("highlight");

		$(".sc-content").find("input").hide();
		$(".sc-content").find("input").attr("checked",null);
		$(".sc-r ul li:nth-child(3) a").parents("ul").siblings("span").show();
		$(".sc-r ul li:nth-child(3) a").parents("ul").hide();
	});

	$(".sc-r>span").click(function(){
		$(this).siblings("ul").show();
		$(this).hide();
		$(".sc-content:visible").find("input").show();
	});

	$(".sc-r ul li:nth-child(3) a").click(function(){
		$(this).parents("ul").siblings("span").show();
		$(this).parents("ul").hide();
		$(".sc-content:visible").find("input").hide();
		$(".sc-content:visible").find("input").attr("checked",null);
	});

	$(".sc-r ul li:nth-child(1) a").click(function(){
		var num = $(".sc-content:visible").find("input").length;
		var nums = $(".sc-content:visible").find("input:checked").length;
		if (nums == num) {
			$(".sc-content:visible").find("input").attr("checked",null);
		}else{
			$(".sc-content:visible").find("input").attr("checked","checked");
		};
	});

	$(".sc-r ul li:nth-child(2) a").click(function(){
		var index = $(".sc-content:visible").find("input:checked");
		index.parents(".sc-item").remove();
	});

	$(".sc-row a.zan").click(function(){
		var text = $(this).text();
		if ($(this).hasClass("highlight")) {
			$(this).removeClass("highlight");
			text--;
			$(this).text(text);
		}else{
			$(this).addClass("highlight");
			text++;
			$(this).text(text);
		};
	});

	// 点击回复显示回复框
	$(".tb a").click(function(){
		if($(this).parents(".xx-all").siblings("#form").is(":visible")){
			$(this).parents(".xx-all").siblings("#form").slideUp();
		}else{
			$(this).parents(".xx-all").siblings("#form").slideDown();
		}
	});

	$("button.btn-primary").click(function(){
      var text = $(this).parents("#form").find("textarea").val();
      $(this).parents("#form").slideUp();

      var div = text;
	  $(".xx-all").append(div);
	});


	$(".xx a.zan").click(function(){
		var text = $(this).text();
		if ($(this).hasClass("highlight")) {
			$(this).removeClass("highlight");
			text--;
			$(this).text(text);
		}else{
			$(this).addClass("highlight");
			text++;
			$(this).text(text);
		};
	});

	$("p.matter a.title1").click(function(){
		var text = $(this).text();
		if ($(this).hasClass("highlight")) {
			$(this).removeClass("highlight");
			text--;
			$(this).text(text);
		}else{
			$(this).addClass("highlight");
			text++;
			$(this).text(text);
		};
	});
		showBriefText(".article p",25,true);

		showBriefText("p.num2-item span",100,true);

		showBriefText(".hd-item p",35,true);

		showBriefText(".hd-item a.h5",25,true);

		showBriefText(".information .no1 .border i", 61, false);

});
function getBriefText(text, maxLength) {
	if (!text) { // 文字没有内容，直接返回空文本
		return "";
	}
	if (text.length <= maxLength) { // 文字没有超过最长限制，直接返回全部文字
		return text;
	}
    // 文字超过了最长限制
    var brief = text.substring(0, maxLength); // 截取文本为maxLength个字，
    brief += '...'; // 文本后面加上...表示有省略文字。
    return brief;
}
function getBriefText1(text, maxLength) {
	if (!text) { // 文字没有内容，直接返回空文本
		return "";
	}
	if (text.length <= maxLength) { // 文字没有超过最长限制，直接返回全部文字
		return text;
	}
    // 文字超过了最长限制
    var brief = text.substring(0, maxLength); // 截取文本为maxLength个字，
    return brief;
}

/**
 * 更改某个元素(span)里的文本长度，最长不超过maxLength个。如果超过的话，是否需要用省略号代表超过的文字
 * span: 要更改的元素，比如 $("div span");
 * maxLength: 文字的字数限制，比如 100;
 * suffix: 是否需要用省略号代表超过的文字, true，代表需要省略号，false，代表不需要;
 */
function showBriefText(span, maxLength, suffix) {
	var allSpan = $(span);
	// var allSpan = span;

	for (var i = 0; i < allSpan.length; i++) {

		var spanText = allSpan.eq(i).text();

		if (suffix) {
			allSpan.eq(i).text(getBriefText(spanText, maxLength));
		} else {
			allSpan.eq(i).text(getBriefText1(spanText, maxLength));
		}

	}
}

$(function(){
	$("li.li").hover(function(){     //商品微商移动鼠标事件
		$("div.qrcode").show();
	}, function(){
		$("div.qrcode").hide();
	});

	$(".down").hover(function(){      //我的拉链移动鼠标事件
		$("div.my").show();
		$(this).find("a.name").addClass("highlight");
		$(this).find("img").attr("src","images/icon2.2.png");
	}, function(){
		$("div.my").hide();
		$(this).find("a.name").removeClass("highlight");
		$(this).find("img").attr("src","images/icon2.png");
	});

	$(".la a.shop").hover(function(){      //我的拉链移动鼠标事件
		$(this).addClass("highlight1");
	}, function(){
		$(this).removeClass("highlight1");
	});

	$(".nav li.li1").hover(function(){      //所有商品分类移动鼠标事件
		$("div.position").show();
	}, function(){
		$("div.position").hide();
	});

	$("li.nav-item").hover(function(){                 //鼠标移动加高亮效果
		$("li.nav-item").removeClass("highlight");
		$(this).addClass("highlight");
	}, function(){
		$(this).removeClass("highlight");
		// $($("li.nav-item").get(0)).addClass("highlight");
		$("ul.nav li.default-active").addClass("highlight");
	});


	$(".hot-nav li").hover(function(){                 //鼠标移动加高亮效果
		$(".hot-nav li").removeClass("highlight");
		$(this).addClass("highlight");
		var index =$(".hot-nav li.highlight").data("index");
		$(".hot-content").hide();
		$(".hot-content[data-index='" + index + "']").show();
	});


	$("a.button-r").click(function(){              //点击右侧按钮 切换图片（首页）
		var jump = $(".jumping:visible").data("index");
		if (jump == 3) {
			jump = 1;
		} else {
			jump = jump + 1;
		}

		$(".jumping").hide();
		$(".jumping[data-index='" + jump + "']").show();
	});


	$("a.button-l").click(function(){                 //点击左侧按钮 切换图片（首页）
		var jump =$(".jumping:visible").data("index");
		if (jump ==1){
			jump = 3;
		}else{
			jump--;
		}

		$(".jumping").hide();
		$(".jumping[data-index='" + jump +"']").show();

	});
  
	$(".indicator li").click(function(){               //点击小点 切换图（首页） 12-05
		clearInterval(interval);
		// $(".pic-item").hide();
		// var index =$(this).data("index");
		// $(".pic-item[data-index='" + index + "']").show();
		// $(".indicator li").removeClass("highlight");
		// $(this).addClass("highlight");
		$(".indicator li").removeClass("highlight");
		$(this).addClass("highlight");
		var index = $(".indicator li").index($(this));
		picBannerIndex = index;
		var item = $(".pic-banner .pic-item[data-index='" + (index+1) + "']");
		var prevNums = item.prevAll().length;
		var nextItem = item.next();
		var firstItem = $(".pic-banner .pic-item:nth-child(1)");
		if (nextItem.length == 0) {
			item.after(firstItem);
			firstItem.css("marginLeft", "0px");
			firstItem = $(".pic-banner .pic-item:nth-child(1)");
			prevNums --;
		}
		var firstOffset = -730 * (prevNums);
		firstItem.css("marginLeft", firstOffset+"px");
		interval = setInterval(changePicBanner, 5000);
	});


	$(".item-today").hover(function(){               //鼠标移动上去显示购物车（首页）
		$(this).find("p").slideDown();
		$(this).find("span.title").animate({marginTop: "-3px"}, 300);
		$(this).find("span.price").animate({marginTop: "8px",}, 300);
	}, function(){
		$(this).find("p").slideUp();
		$(this).find("span.title").animate({marginTop: "7px"}, 300);
		$(this).find("span.price").animate({marginTop: "13px",}, 300);
	});

	setInterval(countingDown, 500);         //0.5秒执行一遍这个方法
	var interval = setInterval(changePicBanner, 5000);


	$(".screening li").hover(function(){          //鼠标移动加高亮效果(积分专区-全部商品)
		$(".screening li").removeClass("highlight");
		$(this).addClass("highlight");
	});

	$(".item-cont").hover(function(){               //鼠标移动上去显示购物车（积分专区）
		$(this).find("p.donghua").slideDown();
		$(this).find("a#name").css("color","#ff2d5e");
		$(this).css("box-shadow","0px 2px 5px #ccc");
		$(this).find("a.y-button").animate({bottom: "35px"}, 300);    //改1204
		$(this).find("a#name").animate({marginTop: "4px"}, 300);
		$(this).find("p.yellow-m").animate({marginTop: "10px"}, 300);
	}, function(){
		$(this).find("p.donghua").slideUp();
		$(this).find("a#name").css("color","#646464");
		$(this).css("box-shadow","none");
		$(this).find("a.y-button").animate({bottom: "29px"}, 300);   //改1204
		$(this).find("a#name").animate({marginTop: "15px"}, 300);
		$(this).find("p.yellow-m").animate({marginTop: "15px"}, 300);
	});

	$(".item-r").hover(function(){               //鼠标移动上去显示购物车（积分专区）
		$(this).find("a.x-button").animate({bottom: "40px"}, 300);   
	}, function(){
		$(this).find("a.x-button").animate({bottom: "33px"}, 300);   //改1204
	});


	$(".xuan").hover(function(){               //鼠标移动上去显示购物车（积分专区）
		$(this).children("span").css("border-bottom","solid 1px #fafafa");
		$(this).find("#qq").show();
		$(this).parents(".shaixuan").css("border-bottom","none");
		$(".frame").css("margin-top","30px");
	}, function(){
		$(this).find("ul#qq").hide();
		$(this).children("span").css("border-bottom","solid 1px #d0d0d0");
		$(this).parents(".shaixuan").css("border-bottom","1px solid #000");
		$(".frame").css("margin-top","20px");
	});

	$("#qq>li>a").hover(function(){
		$("#qq>li>a").css("color","#646464");
		$(this).css("color","#ff2d5e");
	});

	$("#qq>li>a").click(function(){
		var tt = $(this).text();
		$(".xuan>span>.jiage").remove();
		$(".xuan>span>img").before("<span class='jiage' style='border:none;font-size:14px;margin-left:0px;'></span>");
		$(".jiage").text(tt);
	});

	$(".intro li").hover(function(){      //鼠标移动上去div切换图片（商品详情页）
		var imgSrc = $(this).children("img").attr("src");
		$(".intro img#q").attr("src", imgSrc);
		$(".intro img#q").attr("jqimg", imgSrc);
	});

	$(".jqzoom").jqueryzoom({
		xzoom: 350,
		yzoom: 348,
		offset: 10,
		position: "left",
		position: "top",
		top: -100,
		// left:1800,
		preload: 1
	});


	$(".trigger-wrap li").click(function(){                 //点击切换内容(商品详情页)
		$(".trigger-wrap li").removeClass("highlight");
		$(this).addClass("highlight");
		var index = $(".trigger-wrap li.highlight:visible").data("index");
		$(".panel").hide();
		$(".panel[data-index='" + index +"']").show();
	});


	 $("a.plus").click(function(){              //点击加号 修改购买数量 （商品详情页/购物车）1202
		var num = parseInt($(this).siblings("span.none").text());
			num = num + 1;
		$(this).siblings("span.none").text(num);
		var price = parseFloat($(this).parents("tr.table-row").find("td:nth-child(4)").text()) // 找到同一个tr里面的第4个td，也就是显示单价的那个td，获取其中的单价价格
		var totalPrice = price * num;
		$(this).parents("tr.table-row").find("td:nth-child(6)").text(totalPrice); // 把单价＊数量的结果放在第6个td，也就是总价的那个td里面。
		$(this).parents("tr.table-row").find("td:nth-child(8) span").text(totalPrice);	

		var input = $(this).parents("tr.table-row").find("input");
		if (!input.is(":checked")) {
			input.attr("checked", "checked");
			input.change();
		}


		calcTotalPrice();
		calcTotalCheckedRow();
	});

	$("a.reduction").click(function(){              //点击减号 修改购买数量 （商品详情页/购物车）
		var num = parseInt($(this).siblings("span.none").text());
			num = num - 1;
		if(num >= 1){
			$(this).siblings("span.none").text(num);
			var price = parseFloat($(this).parents("tr.table-row").find("td:nth-child(4)").text())
			// var totalPrice = Math.round( 1.0*price * num*Math.pow(10, 2))/Math.pow(10, 2);
			var totalPrice = price * num;
			$(this).parents("tr.table-row").find("td:nth-child(6)").text(totalPrice);
			$(this).parents("tr.table-row").find("td:nth-child(8) span").text(totalPrice);
			calcTotalPrice();
			calcTotalCheckedRow();
		}	
	});


	$("div.container tr.table-header input").change(function(){
		if ($(this).is(":checked")) {
			$(this).parents("table.table").find(".table-row input").attr("checked", "checked");
			$(this).parents("table.table").find(".table-row").addClass("highlight");
		}else{
			$(this).parents("table.table").find(".table-row input").attr("checked", null);
			$("table.table-title input").attr("checked",null);
			$(this).parents("table.table").find(".table-row").removeClass("highlight");
		}

		changeTableTitleCheckbox();
		calcTotalPrice();
		calcTotalCheckedRow();
	});

	$("tr.table-row input").change(function(){
		var totalNum = $(this).parents("table.table").find(".table-row input").length;
		var checkedNum = $(this).parents("table.table").find(".table-row input:checked").length;
		if (checkedNum == totalNum) {
			$(this).parents("table.table").find("tr.table-header input").attr("checked","checked");
		}else if (checkedNum < totalNum) {
			$(this).parents("table.table").find("tr.table-header input").attr("checked",null);
		};

		if ($(this).is(":checked")) {
			$(this).parents("tr.table-row").addClass("highlight");
		}else{
			$(this).parents("tr.table-row").removeClass("highlight")
		}

		changeTableTitleCheckbox();

		calcTotalCheckedRow();
		calcTotalPrice();
	});

	$("table.table-title input").change(function(){
		if ($(this).is(":checked")) {
			$("table.table").find("input").attr("checked", "checked");
			$("table.table").find(".table-row").addClass("highlight");
		}else{
			$("table.table").find("input").attr("checked", null);
			$("table.table").find(".table-row").removeClass("highlight");
		}

		calcTotalPrice();
		calcTotalCheckedRow();
	});

	 //如果复选框一个没选中 点击按钮就弹出一个框 如果选中 就不弹出框
	 $("a.jiesuan").click(function(){                 //点击按钮弹出框(购物车)
	 	var checkedNum = $(".table-row input:checked").length;
	 	if (checkedNum <= 0){
	 		$("div.tishi-k").parents(".overlay").show();
	 		$("div.tishi-k").show();
	 	}

	 });

	 $("td.delete-button").click(function(){                 //点击删除(购物车页面)
	 	$(".delete-k").parents(".overlay").show();
	 	$(".delete-k").show();
	 });


	 $("button.no").click(function(){                 //点击删除(购物车页面)
	  	$(".delete-k").parents(".overlay").hide();
	  	$(".delete-k").hide();
	 });

	 $("a.shanchu").click(function(){                 //点击删除(购物车页面)
	   	$(this).parents(".overlay").hide();
	   	$(this).parents(".shan").hide();
	 });


	 var selectedRow = 0;  // 定义一个全局变量，记录每次点删除是点的第几行

	$("td.delete-button").click(function(){ // 点击删除按钮
		var allTableRow = $("tr.table-row"); // 找到所有的table-row
		selectedRow = allTableRow.index($(this).parents(".table-row")); // 找到现在点的这行，是第几个table-row
		//下面是显示弹框div的方法，这里省略
	});

	$("button.yes").click(function(){ // 点击确定按钮
		$($("tr.table-row").get(selectedRow)).remove(); // 将刚刚选中的table-row从页面中删掉
		$(".delete-k").parents(".overlay").hide();
		$(".delete-k").hide();
		calcTotalPrice();
		calcTotalCheckedRow();
	});
   
	$(".like-list").hover(function(){               //鼠标移动上去显示购物车（商品详情）
		$(this).find("p.like-bottom").slideDown();
		$(this).find("a.dian").animate({margin:"0px"}, 300);
	}, function(){
		$(this).find("p.like-bottom").slideUp();
		$(this).find("a.dian").animate({margin:"10px 0 5px 0"}, 300);
	});


	$("div.share-content").hover(function(){
		$("div.fx_st").show();
	}, function(){
		$("div.fx_st").hide();
	});


	$(".love a.collection").click(function(){
	    if($(".love a.collection-p").is(":visible")){
	 		$(this).text("加入收藏");
			$(this).removeClass("collection-p");
		}else{
			$(this).text("收藏成功");
			$(this).addClass("collection-p");
		}
	});


	// $(window).scroll(function(){
	// 	if ($(window).scrollTop() >= 50) {
	// 		$("div.onsale").addClass("fixed-top-bar");
	// 	} else {
	// 		$("div.onsale").removeClass("fixed-top-bar");
	// 	}
	// });


	$(".highlight-xin").hover(function(){               //鼠标移动上去显示编辑删除（立即购买）
		$(this).find(".change").show();
		$(this).addClass("xin");
	}, function(){
		$(this).find(".change").hide();
		$(this).removeClass("xin");
	});

	$(".like-list").eq(4).nextAll().hide();
	var st=0;
	var end=4;
	var ss=$(".like-list").length;
	$(".xingqu a").click(function(){
		if(st>-1){
			st=st+5;
			end=end+5;
			$(".like-list").show()
			$(".like-list").eq(st).prevAll().hide();
			$(".like-list").eq(end).nextAll().hide();
			if(end>ss){
				st=0;
				end=4;
				$(".like-list").eq(4).nextAll().hide();
			}
		}
	});

	// 立即支付1202
	$(".delivery").hover(function(){               //鼠标移动上去编辑删除（立即支付）
		$(this).find(".position-change").show();
		$(this).addClass("highlight-buy");
	}, function(){
		$(this).find(".position-change").hide();
		$(this).removeClass("highlight-buy");
	});

     //点击更多地址 高亮的文字显示默认地址其余的 显示table下td里的名字--王某某地址
	$("a.more-address").click(function(){
		var highlight = $(".buy-address a.highlight");
		var originHighlight = $("div.address-content>.buy-address");
		if (highlight.parents(".hidden").length > 0) {
			$(".hidden").prepend(originHighlight);
			$("div.address-content").prepend(highlight.parent(".buy-address"));
		}

		if($(".hidden").is(":visible")){
			$(this).text("更多地址");
			$(this).removeClass("shouqi");
		}else{
			$(this).text("收起更多地址");
			$(this).addClass("shouqi");
		}

		$(".hidden").toggle();
	});


	// $(".buy-address a.default").click(function(){
	// 	var originHighlight = $(".buy-address a.highlight");    //获取高亮的a
	// 	var name = originHighlight.siblings("div.delivery").find("tr td:nth-child(1)").text();   //获取文字
	// 	var address = originHighlight.siblings("div.delivery").find("tr td:nth-child(2)").text();   //获取文字
	// 	originHighlight.text(name+address);      //转中状态改文字
	// 	originHighlight.removeClass("highlight");   //选中状态 去高亮
	// 	$(this).addClass("highlight");        //加高亮效果
	// 	$(this).text("默认地址");   //改文字
	// });


	$(".buy-address a.default").click(function(){
		var name = $(this).siblings("div.delivery").find("tr td:nth-child(1)").text();   //获取文字
		var address = $(this).siblings("div.delivery").find("tr td:nth-child(2)").text();    //获取文字
		$(".buy-address a").removeClass("highlight");
		$(this).addClass("highlight");        //加高亮效果
		$(this).text(name+address);   //改文字
	});

	$(".fapiao a").click(function(){
		var index = $(".fapiao a").index($(this));
		$(".fapiao .fapiao-content").hide();
		$($(".fapiao .fapiao-content").get(index)).show();

		$(".fapiao a").removeClass("highlight");
		$(this).addClass("highlight");
	});


	$("div.onsale").stickyNavbar();    

	// 12.5

	var num = $("div.pic img.big").length; // 获取banner一共几张图片
	if (num > 1) {

		for (var i = 0; i < num; i ++) { // 循环生成num个li
			var li = $("<li><a href=\"javascript:;\"></a></li>"); // 创建li
			$("div.pic ul").append(li); // 把刚刚创建的li加到banner里的ul里面去。
		}

		$("div.pic ul li:nth-child(1)").addClass("highlight"); // 默认给第一个li加上高亮显示

		$(".pic li").click(function(){
			var index = $(".pic li").index($(this));  //获取当前点击li 
			var img = $(".pic img.big");
			$(".pic img.big").hide();
			$(img.get(index)).show();
			$(".pic li").removeClass("highlight");
			$(this).addClass("highlight");
		});
	}

	var intervalImg = setInterval(changeImgBanner, 4000);


	 $(".payment a").click(function(){ 
		$(".payment a").removeClass("highlight");
		$(this).addClass("highlight");

		$(".payment a").find("img.payment-pic").hide();
		$(this).find("img.payment-pic").show();
		var index = $(".payment a").index($(this));
		if ( index == 1) {
			$(".bank-card").show();
		}else{
			$(".bank-card").hide();
		};
	});


	// $(".intro .item-inner select").change(function(){
 //    	var text = $(this).val();
 //    	if (text == '北京市') {
 //    		$("span.pink-bg").show();
 //   	    } else {
 //     	    $("span.pink-bg").hide();
 //    	}
 //    });

});

//倒计时
var endTime = new Date('2015-11-26T18:00:00+0800').getTime();

function countingDown() {
	var now = new Date().getTime(); // 获取现在时间
	var timeDiff = endTime - now;
	if (timeDiff <= 0) {
		// 倒计时到时间了

		return;
	}
	var hours = parseInt(Math.floor((timeDiff / (60 * 60 * 1000)))); // 倒计时中的小时部分
	var minutesDiff = timeDiff % (60 * 60 * 1000);
	var minutes = parseInt(Math.floor((minutesDiff / (60 * 1000)))); // 倒计时中的分钟部分
	var secondsDiff = minutesDiff % (60 * 1000); // 倒计时中的秒部分
	var seconds = parseInt(Math.floor((secondsDiff / 1000)));
	$("div.timing span.hour").text(paddingZero(hours));
	$("div.timing span.minute").text(paddingZero(minutes));
	$("div.timing span.second").text(paddingZero(seconds));
}

function paddingZero(num) {           //补零的方法
	if (num < 10) {
		return '0' + num;
	} else {
		return num + "";
	}
}

//图片自己跳转 12-05
var picBannerIndex = 0;
function changePicBanner() {
	// var index = $(".pic-item:visible").data("index");
	// 	if (index == 3) {
	// 		index = 1;
	// 	} else {
	// 		index = index + 1;
	// 	}
	var firstItem = $(".pic-banner .pic-item:nth-child(1)");
	if (firstItem.css("marginLeft") == "-730px") {
		$(".pic-banner .pic-item:nth-child(3)").after(firstItem);
		firstItem.css("marginLeft", "0px");
		firstItem = $(".pic-banner .pic-item:nth-child(1)");
		firstItem.css("marginLeft", "0px");
	}
	firstItem.animate({marginLeft:"-730px"}, 1000);
	if (picBannerIndex == $(".pic-banner .pic-item").length - 1) {
		picBannerIndex = 0;
	} else {
		picBannerIndex ++;
	}

	$(".indicator li").removeClass("highlight");
	$($(".indicator li").get(picBannerIndex)).addClass("highlight");

	// $(".indicator li").removeClass("highlight");
	// $(".indicator li[data-index='"+ index + "']").addClass("highlight");

	// $(".pic-item").fadeOut();
	// $(".pic-item[data-index='" + index + "']").fadeIn();
}


// 根据下面input的勾选状态，改变table-title中的勾选框状态 12-02
function changeTableTitleCheckbox() {
	var totalNu = $("table.table").find(".table-row input").length;
	var checkedNu = $("table.table").find(".table-row input:checked").length;
	if (checkedNu == totalNu) {
		$("table.table-title input").attr("checked","checked");
	}else if (checkedNu < totalNu) {
		$("table.table-title input").attr("checked",null);
	}
}

// 计算一共有多少被勾选，并更改文本内容 12-02
function calcTotalCheckedRow() {
	
	var checkedRow = $("tr.table-row.highlight");
	var totalCheckedNum = 0;
	checkedRow.each(function(){
		var num = parseInt($(this).find("span.none").text());
		totalCheckedNum = totalCheckedNum + num;
	});

	$(".submit-l i.selected").text(totalCheckedNum);
}

// 计算现在勾选的总价格，并更改文本内容 12-02
function calcTotalPrice() {
	var checkedRow = $("tr.table-row.highlight");
	var totalPrice = 0;
	checkedRow.each(function(){
		var price = $(this).find("td:nth-child(6)").text();
		totalPrice = totalPrice + parseFloat(price);
	});
	$(".submit-l i.total-price").text(totalPrice);
}


var checkedRow = $("tr.table-row.highlight");
var totalCheckedNum = 0;
checkedRow.each(function(){
	var num = parseInt($(this).find("span.none").text());
	totalCheckedNum = totalCheckedNum + num;
});

$(".submit-l i.selected").text(totalCheckedNum);

//12-5
function changeImgBanner() {
	if ( $(".pic img.big").length <= 1) {
		return;
	};
	var index = $(".pic img.big").index($(".pic img.big:visible"));  // 获取后边的在前边的位置
		if (index == $(".pic img.big").length-1) {
			index = 0;
		} else {
			index = index + 1;
		}
	$(".pic li.highlight").removeClass("highlight");
	$($(".pic li").get(index)).addClass("highlight");

	$(".pic img.big:visible").fadeOut();
	$($(".pic img.big").get(index)).fadeIn();
}


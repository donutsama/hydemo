var www = $(window).width();
if(www<640){
	if(document.getElementById("slide_01")){
		var slide_01 = new ScrollPic();
		slide_01.scrollContId   = "slide_01"; //内容容器ID
		slide_01.dotListId      = "slide_01_dot";//点列表ID
		slide_01.dotOnClassName = "selected";
		slide_01.arrLeftId      = "sl_left"; //左箭头ID
		slide_01.arrRightId     = "sl_right";//右箭头ID
		slide_01.frameWidth     = $(window).width();
		slide_01.pageWidth      = $(window).width();
		slide_01.upright        = false;
		slide_01.speed          = 10;
		slide_01.space          = 30; 
		slide_01.initialize(); //初始化
		$(".slide_01").find("img").width(www);
		$(".scroll").width(www);
	}
}else{
	if(document.getElementById("slide_01")){
		var slide_01 = new ScrollPic();
		slide_01.scrollContId   = "slide_01"; //内容容器ID
		slide_01.dotListId      = "slide_01_dot";//点列表ID
		slide_01.dotOnClassName = "selected";
		slide_01.arrLeftId      = "sl_left"; //左箭头ID
		slide_01.arrRightId     = "sl_right";//右箭头ID
		slide_01.frameWidth     = 640;
		slide_01.pageWidth      = 640;
		slide_01.upright        = false;
		slide_01.speed          = 10;
		slide_01.space          = 30; 
		slide_01.initialize(); //初始化
		$(".slide_01").find("img").width(640);
		$(".scroll").width(640);
	}
	}// JavaScript Document
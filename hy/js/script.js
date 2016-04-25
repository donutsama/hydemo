// $(document).ready(function(){
// 	$(".aside li a").hover(function(){
// 		$(".aside li a").css("background-position-x", "-50px");
// 	},function(){
// 		$(".aside li a").css("background-position-x", "");
// 	})	
// })


$(document).ready(function(){
	$("li.xiong a").hover(function(){
		$("li.xiong a").css("background-position-x", "-50px");
	},function(){
		$("li.xiong a").css("background-position-x", "");
	})	
})

$(document).ready(function(){
	$("li.jia a").hover(function(){
		$("li.jia a").css("background-position-x", "-50px");
	},function(){
		$("li.jia a").css("background-position-x", "");
	})	
})

$(document).ready(function(){
	$("li.cha a").hover(function(){
		$("li.cha a").css("background-position-x", "-50px");
	},function(){
		$("li.cha a").css("background-position-x", "");
	})	
})

$(document).ready(function(){
	$("li.ding a").hover(function(){
		$("li.ding a").css("background-position-x", "-50px");
	},function(){
		$("li.ding a").css("background-position-x", "");
	})	
})



function showTop(name){
	var b= $("html").scrollTop() || $("body").scrollTop();
	if (b>200){
		name.fadeIn();
	}else{
		name.fadeOut();
	}
}

$(document).ready(function(){
	$(window).scroll(function(){
		var a = $("li.ding a");
		showTop(a);
	})
})

function toTop(a,b){
	$("html,body").animate(a,b);
}

var juli = {scrollTop:"0px"};
var sudu =1650;
toTop(juli,sudu)

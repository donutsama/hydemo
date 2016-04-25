$(document).ready(function(){
	$("#button").click(function(){
		if ($(".wirter span.select3").length < 4) {
			$("<span class='select select3'>选项D <input class='text' type='text'></span>").appendTo(".wirter");
		}
	});
});


/*统计分析-tab样式*/
$(document).ready(function(){
	$(".tab li").click(function(){            // 点击.tab下边的li的方法
		$(".beige1>div").hide()               // class叫beige1 里的儿子是div的全部隐藏
		var tab=$(this).attr("class");        // 变量tab是 获取当前点击元素的class（也就是li的名字 点击第一个就是tab-1 第二个 就是tab-2）
		$(".beige1").find("."+tab).show();    // class叫beige1的找到它下边的这个class（上边点第一个 就显示tab-1 这个地方就是找到叫tab-1的）然后显示出来
		$(".tab li input").removeClass("blue")  //找到class下边的input 直接删除他们的blue属性（也就是class叫blue 删除）
		$(this).find("input").addClass("blue");  //找到class下边的input 给他们加blue属性（也就是添加 class叫blue ）
	})
})

/*导览-二级导航*/
$(document).ready(function(){
	$(".xul").click(function(){
		$("#move").slideToggle("slow");   //slideToggle 显示隐藏的时候 有个滑动的效果 slow代表速度慢 fast速度快
	});
});

/*积分管理-二级导航*/
$(document).ready(function(){
	$(".xul-1").click(function(){
		$("#award").toggle();         //省去滑动效果直接显示或隐藏
	});
});


/*展区页面-点击删除出弹出框*/
$(document).ready(function(){
	$("#delete").click(function(){
        $("#box").show(); 
		var layIndex = layer.open({
			type: 1,
			title: false,
			closeBtn: false,
			shadeClose: true,
			area: ['430px', '243px'],  //弹出框的尺寸  宽-高
			skin: 'layui-layer-nobg',  //弹出框背景色为空
			content: $("#box")         //括号里替换需要显示的内容
		});	
	});
});


/*展区页面-点击按钮隐藏弹出框*/
$(document).ready(function(){
	$(".close").click(function(){      //给需要关闭的按钮 添加点击事件
        layer.closeAll();              //关闭所有弹出框
	});
});


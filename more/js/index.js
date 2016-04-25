$(function(){
		var hhh=$(".mainleft").width();
			$(".mainleft").height(hhh);
});
$(function(){
			var imgh=$(".mainleft").height();
		$(".brand")
		$(".brand").height(imgh/10*2.5);
	    for(i=0;i<$(".brand").length;i++){
			$(".brand").eq(i).text($(".brand").eq(i).text().substring(0,17)+"...").css({fontSize:"15px", padding:"0 5px 5px 0",width:"95%", padding:"2.5% 0 0 2.5%"});
			}
		$(".main").css("marginLeft",$(".main").width()*0.035);
		for(y=0;y<$(".slider>ul>li").length;y++){
			$(".bannertext").eq(y).find(".subs").text($(".bannertext").eq(y).find(".subs").text().substring(0,20)+"...");
			}
		});
$(function(){
			var sw=$(".loading").parent(".mainleft").width();
			$(".loading").css({width:sw,height:sw})
            $("[lazyLoadSrc]").YdxLazyLoad({
                onShow: function () {
                    $(this).parent().next().hide()
                }
            });
});
$(function(){
				for(i=0;i<$(".tborder").length;i++){
						if($(".tborder").eq(i).text().length<2){
								$(".tborder").eq(i).css("padding","4px 8px")
							};
				}
})// JavaScript Document
$(function(){
	var dhh = $(".dotModule_new").width()/2;
	if($(window).width()<640){
	$(".dotModule_new").css("left",$(window).width()/2-dhh);
	}
	else{
		$(".dotModule_new").css("left",320-dhh);
		}
})
$(function(){
	var dhh = $(".dotModule_new").width()/2;
	if($(window).width()<640){
	$(".dotModule_newa").css("left",$(window).width()/2-dhh);
	}
	else{
		$(".dotModule_newa").css("left",320-dhh);
		}
})
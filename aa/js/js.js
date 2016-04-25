
$(document).ready(function(e) {	
	b = $(".page").width();
	t = $("#top").offset().top;
	$(window).scroll(function(e){
		
		s = $(document).scrollTop();	
		if(s > t ){
			$("#top").css("position","fixed","top");
			$("#top").css('width',b);
		}else{
			$("#top").css('position','');
		}
	})
});


$(document).ready(function(e) {			
	t = $("#top").offset().top;
	$(window).scroll(function(e){
		s = $(document).scrollTop();	
		if(s > t ){
			$("#top").css("position","fixed","top");
			$("#top").css('width','100%');
		}else{
			$("#top").css('position','');
		}
	})
});
// JavaScript Document
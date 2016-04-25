$(document).ready(function(){
	$(".tab li").click(function(){           
		$(".qh>div").hide()               
		var tab=$(this).attr("class");       
		$(".qh").find("."+tab).show();    
		$(".tab li input").removeClass("blue")  
		$(this).find("input").addClass("blue");  
	})
})



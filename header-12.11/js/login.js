$(function(){

  $(".input_mobile").blur(function(){
  	$(this).removeClass("highlight");
  	if ($(this).val().length == 0) {
  		$(this).removeClass("error");
  		$(this).siblings(".width").hide();
  		return;
  	}
  	var varlidation = isMobile($(this).val());
  	if (varlidation) {
  		$(this).removeClass("error");
  		$(this).siblings(".width").hide();
  	}else{
  		$(this).addClass("error");
  		$(this).siblings(".width").addClass("error_tip").text("请输入正确手机号").show();
  	}
  });

  $(".input_mobile").focus(function(){
  	if ($(this).val().length == 0) {
  		$(this).addClass("hightlight");
  		$(this).siblings(".width").removeClass("error_tip").text("请输入11位有效手机号");
  		$(this).siblings(".width").show();
  	};
  });

  $("#input_repassword").focus(function(){
  	if ($(this).val().length == 0) {
  		$(this).addClass("hightlight");
  		$(this).siblings(".width").removeClass("error_tip").
  	}
  });


});


   // 验证传入的参数mobile是否手机号, 如果是手机号，返回true，如果不是手机号，返回false
   function isMobile (mobile) {
   	if (mobile == null || mobile === undefined || typeof mobile != 'string') {
   		return false;
   	}
   	if (mobile.length != 11) {
   		return false;
   	}
   	var result = /^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/.test(mobile);
   	return result;
   }


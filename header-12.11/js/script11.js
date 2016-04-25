$(function(){
	$(".regpassword").focusout(function(){
		var password = $(".regpassword").val();  
		var num = 0;  
		var shuzi = 0 ;  
		var zimu = 0 ; 

		//对象.search方法判断字符串是否含有正则内容！=-1返回为true
		if (password.search(/[0-9]/) != -1) {  
			num += 1;  
			shuzi =1;  
		}  
		if (password.search(/[A-Za-z]/) != -1) {  
			num += 1;  
			zimu = 1 ;  
		}  
		if (num >= 2 && (password.length >= 6 && password.length <= 16)) {  
			$(".tishi").html("");  
			$(this).removeClass("error"); 
			$(this).siblings(".tishi").removeClass("gary");
		}
		else if(password.length < 6 || password.length > 16 ){  
        	$(".tishi").html("密码由6-16个字母、数字组成"); 
        	$(this).addClass("error"); 
        	$(this).siblings(".tishi").addClass("gary");
    	}
		else if(num == 1){  
			if(shuzi==1){  
				$(".tishi").html("不能全为数字"); 
				$(this).addClass("error"); 
				$(this).siblings(".tishi").addClass("gary"); 
			}  
			if(zimu==1){  
				$(".tishi").html("不能全为字母");  
				$(this).addClass("error"); 
				$(this).siblings(".tishi").addClass("gary");
			}  
    	}  
	});

	$(".regpassword").focus(function(){
		if ($(this).val().length == 0) {
			$(this).siblings(".tishi").show();
			$(this).siblings(".tishi").removeClass("gary");
		}
	});

	$(".regpassword").blur(function(){
          if ($(this).val().length == 0) { 
          	$(this).removeClass("error");
          	$(this).siblings(".tishi").hide();
          	return; 
          }
      });

	$(".input_repassword").focus(function(){
		if ($(this).val().length == 0) {
			$(this).siblings(".tishi").text("请再次输入密码");
			$(this).siblings(".tishi").show();
			$(this).siblings(".tishi").removeClass("gary");
		}
	});

	// $("input").focus(function(){
	// 	var length = $(this).val().length;
	// 	if (length == 0) {
	// 	// 没有内容，显示提示：
	// 	$(this).siblings(".tip").text("请输入内容").show();
	// } else {
	// 	// 有内容，不显示提示:
	// 	$(this).siblings(".tip").hide();
	// } 
 //   });


	$(".input_repassword").blur(function(){
		if ($(this).val().length == 0) { // 如果输入框内没有输入任何东西，则不检验密码
            $(this).removeClass("error");
            $(this).siblings(".tishi").hide();
            return; 
          }
          if ($(this).val() == $(".regpassword").val()) {
          	$(this).removeClass("error");
          	$(this).siblings(".tishi").hide();
          } else {
          	$(this).addClass("error");
          	$(this).siblings(".tishi").addClass("gary").text("两次输入的密码不一致").show();
          }
      });
});
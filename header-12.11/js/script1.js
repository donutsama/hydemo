 $(function(){
        // 手机号验证
        $("#input_mobile").blur(function(){ // 当元素失去焦点时，触发的逻辑，判断输入内容是否有效
          $(this).removeClass("highlight");
          if ($(this).val().length == 0) { // 如果输入框内没有输入任何东西，则不检验手机号
            $(this).removeClass("error");
            $(this).siblings(".tip").hide();
            return; 
          }
          var validation = isMobile($(this).val());
          if (validation) { // 如果手机号正确，那么移除提示错误的样式
            $(this).removeClass("error");
            $(this).siblings(".tip").hide();
            // $(this).siblings(".sure").show();
          } else { // 如果手机号不正确，那么显示提示错误
            $(this).addClass("error");
            $(this).siblings(".tip").addClass("error_tip").text("请输入正确的手机号").show();
            // $(this).siblings(".sure").hide();
          }
        });
        $("#input_mobile").focus(function(){ // 当元素获得焦点时，触发的逻辑
          if($(this).val().length == 0) { // 如果输入框内还没有输入任何东西，则后面显示输入提示信息
            $(this).addClass("highlight");
            $(this).siblings(".tip").removeClass("error_tip").text("请输入11位有效手机号");
            $(this).siblings(".tip").show();
          }
        });

        // 下面是密码的验证
        $("#input_repassword").focus(function(){
          if ($(this).val().length == 0) {
            $(this).addClass("highlight");
            $(this).siblings(".tip").removeClass("error_tip").text("请再次输入上面的密码");
            $(this).siblings(".tip").show();
          }
        });
        $("#input_repassword").blur(function(){
          $(this).removeClass("highlight");
          if ($(this).val().length == 0) { // 如果输入框内没有输入任何东西，则不检验密码
            $(this).removeClass("error");
            $(this).siblings(".tip").hide();
            return; 
          }
          if ($(this).val() == $("#input_password").val()) {
            $(this).removeClass("error");
            $(this).siblings(".tip").hide();
          } else {
            $(this).addClass("error");
            $(this).siblings(".tip").addClass("error_tip").text("两次输入的密码不一致").show();
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

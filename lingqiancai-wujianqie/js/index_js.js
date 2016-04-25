$(function(){
    $("a.tel").html(encrypt($("a.tel").text()));
    $(".anniu").click(function(){
        $(".fixed").show();
        $(".all").show();
        disableScroll();
    });
    $(".close").click(function(){
        $(".fixed").hide();
        $(".all").hide();
        enableScroll();
    });
    $(".all").click(function(){
        $(".fixed").hide();
        $(".all").hide();
        enableScroll();
    });
    $(".fixed").click(function(){
        $(this).hide();
        $(".all").hide();
        enableScroll();
    });

    $(".song").click(function(){
        $(".all-bg").show();
        disableScroll();
    });
    $(".all-bg").click(function(){
        $(".all-bg").hide();
        enableScroll();
    });

    // 手机号验证
    $(".close-btn").click(function(){ 
      var validation = isMobile($("#input_mobile").val());
      if (validation) { // 如果手机号正确，那么跳转页面
         window.location.href="../lingqiancai/fubao.html";
      } else { // 如果手机号不正确，那么显示提示错误
         alert("请输入正确手机号码！");
      }
    });

    $(".close-btn1").click(function(){ 
      var validation = isMobile($("#input_mobile").val());
      if (validation) { // 如果手机号正确，那么跳转页面
         window.location.href="../lingqiancai/index2.html";
      } else { // 如果手机号不正确，那么显示提示错误
         alert("请输入正确手机号码！");
      }
    });

    $("#input_mobile").focus(function(){
       $(".content .fu .input").addClass("highlight");
    });

    $("#input_mobile").blur(function(){
       $(".content .fu .input").removeClass("highlight");
    });

});

function encrypt(mobileno) {
   return mobileno.substring(0, 3) + "****" + mobileno.substring(7);
}
// substring(0, 3),意思就是从字符串的第0个字符开始,一直截到第3个字符为止,不包括这第3个字符。
//比如 "hello".substring(0, 3) 返回的就是 "hel";
// substring(10), 就表示从第10个字符开始，一直截到最后。 比如 "hello".substring(3) 返回的就是 "lo"


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

// 阻止事件的默认行为，比如手指滑动时页面默认滚动
function preventDefault(e) {
    e = e || window.event;
    e.preventDefault && e.preventDefault();
    e.returnValue = false;
}

// 阻止事件冒泡
function stopPropagation(e){
    e = e || window.event;
    e.stopPropagation && e.stopPropagation();
    e.cancelBubble = false;
}

// 允许页面滚动
function enableScroll() {
    $(document).off('mousewheel', preventDefault);
    $(document).off('touchmove', preventDefault);
}

// 禁止页面滚动
function disableScroll() {
    $(document).on('mousewheel', preventDefault);
    $(document).on('touchmove', preventDefault);
}

// 允许弹出层滚动
function enablePopupScroll(div) {
    // 移动端touch重写
    var startX, startY;

    $(div).on('touchstart', function(e){
        startX = e.originalEvent.changedTouches[0].pageX;
        startY = e.originalEvent.changedTouches[0].pageY;
    });

    // 仿innerScroll方法
    $(div).on('touchmove', function(e){
        e.stopPropagation();

        var deltaX = e.originalEvent.changedTouches[0].pageX - startX;
        var deltaY = e.originalEvent.changedTouches[0].pageY - startY;

        // 只能纵向滚
        if(Math.abs(deltaY) < Math.abs(deltaX)){
            e.preventDefault();
            return false;
        }

        var box = $(this).get(0);

        if($(box).height() + box.scrollTop >= box.scrollHeight){
            if(deltaY < 0) {
                e.preventDefault();
                return false;
            }
        }
        if(box.scrollTop === 0){
            if(deltaY > 0) {
                e.preventDefault();
                return false;
            }
        }
        // 会阻止原生滚动
        // return false;
    });
}

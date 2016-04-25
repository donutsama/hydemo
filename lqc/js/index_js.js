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

    $(".song").click(function(e){
        $(".all-bg").show();
        $(".fixed").hide();
        $(".all").hide();
        disableScroll();
        stopPropagation(e);
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

    $("form .price a").click(function(){
      $("form .price a.highlight").removeClass("highlight");
      $(this).addClass("highlight");

      totalPrice();
      twoInput();
    });

    $(".change_input a.jian").click(function(){
        var num = parseInt($(this).siblings("input").val());
        num--;
        if ( num >= 1) {
          $(this).siblings("input").val(num);
        }else{
          alert("至少购买一件商品！");
        };

        $(this).addClass("highlight"); // 把背景改成红色
        var btn = $(this);
        setTimeout(function(){
          btn.removeClass("highlight");
        }, 200); // 0.2秒以后，把颜色变回来

        totalPrice();
        twoInput();
    });

    $(".change_input a.plus").click(function(){
      var num = parseInt($(this).siblings("input").val());
      num++;
      $(this).siblings("input").val(num);

      $(this).addClass("highlight"); // 把背景改成红色
        var btn = $(this);
        setTimeout(function(){
          btn.removeClass("highlight");
        }, 200); // 0.2秒以后，把颜色变回来

      totalPrice();
      twoInput();
    });

    totalPrice();
    twoInput();

    $(".change_input input").blur(function(){
       var num = isNumber($(this).val());
       if (num) {

       }else{
         $(".change_input input").val("1");
       };
       totalPrice();
       twoInput();
    });

});

function twoInput(){
    var highlight = parseFloat($("form .price a.highlight").text());
    $('.input1').val(highlight);
    
    var price = $("i.total-price").text();
    $(".input2").val(price);
}

function onlyNum()
{
  if(!(event.keyCode==46)&&!(event.keyCode==8)&&!(event.keyCode==37)&&!(event.keyCode==39))
  if(!((event.keyCode>=48&&event.keyCode<=57)||(event.keyCode>=96&&event.keyCode<=105)))
  event.returnValue=false;
}

function encrypt(mobileno) {
   return mobileno.substring(0, 3) + "****" + mobileno.substring(7);
}
// substring(0, 3),意思就是从字符串的第0个字符开始,一直截到第3个字符为止,不包括这第3个字符。
// substring(10), 就表示从第10个字符开始，一直截到最后。


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

function totalPrice(){
      var num = parseInt($(".change_input input").val());
      var price = parseFloat($("form .price a.highlight").text());
      var totalPrice = price * num;
      $("i.total-price").text(totalPrice.toFixed(2));
}

function isNumber(str){
     var n = parseInt(str);
     return!isNaN(n);
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

$(function(){
    $("a.tel").html(encrypt($("a.tel").text()));
    $(".anniu").click(function(){      
        //购买金额 
        var price = $("form .price a.highlight i").text();
        //支付金额
        var amount = $("i.total-price").text();
        //购买数量
        var num = $("#num").val();
        //账户总金额
        var totalBalance = $("#balance").text();
        //如果有值，表示是用户分享后购买的福包
        var packshare = $("#packshare").val();
        //订单编号
        var order_no = $("#order_no").val();
        var word = $("#word").val();
        if (word == "") {
          word = "有你的日子，我很快乐！谢谢有你！";
        }
        //账户支付  
        if(parseFloat(totalBalance)>=parseFloat(amount))
        {
          var url = "/h5/reduceamount";
          var data = "num="+num+"&price="+price+"&amount="+amount+"&order_no="+order_no+"&note="+word+"&packshare="+packshare;
          $.ajaxSetup({  
              async : false //取消异步  
          }); 
          $.post(url,data,function(content){
               var obj = eval('(' + content + ')');    
               if(!obj.isError)
               {
                   $(".fixed").show();
                   $(".all").show();
                   //修改可用余额
                   $("#balance").html(obj.balance+"元");
                   disableScroll();
                   wxfenxiang(word);
             }
            else
            {
             alert("购彩失败!");
            }
          });  
        }else{
          window.location.href="/pingpay/pay?num="+num+"&amount="+amount+"&note="+word+"&packshare="+packshare;
        }
        disableScroll();
  });

    // $(".close").click(function(){
    //     // $(".fixed").hide();
    //     // $(".all").hide();
    //     enableScroll();
    // });
    // $(".all").click(function(){
    //     // $(".fixed").hide();
    //     // $(".all").hide();
    //     enableScroll();
    // });
    // $(".fixed").click(function(){
    //     // $(this).hide();
    //     // $(".all").hide();
    //     enableScroll();
    // });

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
      if (num > 100) {
          alert("最大只能输入100");
          num = 100;
      };
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

    $(".change_input input").bind('input propertychange', function(){
       var num = isNumber($(this).val());
       if (num) {
          
       }else{
         $(".change_input input").val("1");
       };
       totalPrice();
       twoInput();
     });
    $(".change_input input").blur(function(){
       var num = isNumber($(this).val());
       if (num) {
          if (parseInt($(this).val()) > 100) {
            alert("最大只能输入100");
            $(".change_input input").val("100");
          }
       }else{
         $(".change_input input").val("1");
       };
       totalPrice();
       twoInput();
    });

    $(".change_input input").focus(function(){
       $(".change_input input").val("");
       $(".four i.total-price").text("0.00");
    });

    $(".change_input input").on("input property change", function(){
       var num = isNumber($(this).val());
       if (num) {
          if (parseInt($(this).val()) > 100) {
            alert("最大只能输入100");
            $(".change_input input").val("100");
          }
       }else{
         $(".change_input input").val("1");
       };
       totalPrice();
       twoInput();
    });

    // $(".nav-item").eq(0).nextAll().hide();
    $(".nav-title a").click(function(){
      var num = $(".nav-title a").index(this);
      $(".nav-title a.highlight").removeClass("highlight");
      $(this).addClass("highlight");
      showTabContent(num, true);
    });

    enableTabScroll($(".nav-content"), $(".nav-item:first-child"));
    $(".right_info a").click(function(){
      $(".right_info a.highlight").removeClass("highlight");
      $(this).addClass("highlight");
    });
    
    $("a.no").click(function(){
        $(".white").show();
        $(".all-b").show();
        disableScroll();
      });

      $(".white .cancel .two-btn a").click(function(){
        $(".white").hide();
        $(".all-b").hide();
        enableScroll();
      });

      $(".white").click(function(){
        $(".white").hide();
        $(".all-b").hide();
        enableScroll();
      });
      
      $("button.bottom").click(function(){
        $(".white").show();
        $(".all-b").show();
        disableScroll();
      });
      $("form#form1").submit(function(){   
        $(".anniu").click();  
        $(".change_input input").blur();
        return false; 
      });
});

function enableTabScroll(div, tabContent) {
    var beginX, beginY;
    var isMoving = false;
    var shouldScrollTab = false;
    $(div).on("touchstart", function(e){
        beginX = e.originalEvent.changedTouches[0].pageX;
        beginY = e.originalEvent.changedTouches[0].pageY;
        isMoving = false;
    });

    $(div).on("touchmove", function(e){
        var moveX = e.originalEvent.changedTouches[0].pageX;
        var moveY = e.originalEvent.changedTouches[0].pageY;
        if (!isMoving) {
            if (Math.abs(moveX - beginX) < Math.abs(moveY - beginY)) {
                shouldScrollTab = false;
            } else {
                shouldScrollTab = true;
            }
            isMoving = true;
        }
        if (shouldScrollTab) {
            stopPropagation(e);
            preventDefault(e);
            var marginLeft = currentTabContent() * $(this).width() * -1;
            $(tabContent).css("marginLeft", moveX - beginX + marginLeft);
        }
    });

    $(div).on("touchend", function(e){
        var endX = e.originalEvent.changedTouches[0].pageX;
        var endY = e.originalEvent.changedTouches[0].pageY;
        if (shouldScrollTab) {
            if (endX - beginX > 100) {
                showLastTabContent();
            } else if (beginX - endX > 100) {
                showNextTabContent();
            } else {
                showTabContent(currentTabContent());
            }
        }
    });
}

function showNextTabContent() {
    if (currentTabContent() < $(".nav-content .nav-item").length - 1) {
        var index = currentTabContent() + 1;
        showTabContent(index);
    } else {
        showTabContent(currentTabContent());
    }
}

function showLastTabContent() {
    if (currentTabContent() > 0) {
        var index = currentTabContent() - 1;
        showTabContent(index);
    } else {
        showTabContent(currentTabContent());
    }
}

function showTabContent(index, withoutAnimate) {
    var marginLeft = -1 * $(".nav-content").width() * index;
    if (withoutAnimate) {
        $(".nav-content .nav-item:first-child").css("marginLeft", marginLeft);
        $(".nav-title a").removeClass("highlight");
        $(".nav-title a").eq(index).addClass("highlight");
    } else {
        $(".nav-content .nav-item:first-child").animate({marginLeft: marginLeft}, function(){
            $(".nav-title a").removeClass("highlight");
            $(".nav-title a").eq(index).addClass("highlight");
        });
    }
}

function currentTabContent() {
    var tabIndex = $(".nav-title a.highlight").index(".nav-title a");
    return tabIndex;
}

function twoInput(){

    var highlight = parseFloat($("form .price a.highlight i").text());
    $('.input1').val(highlight);
    
    var price = $("i.total-price").text();
    $(".input2").val(price);
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
      var price = parseFloat($("form .price a.highlight i").text());
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

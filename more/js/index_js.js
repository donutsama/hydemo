$(function(){
    $("#slider1 .slides").slick({
        autoplay: true,
        arrows: false,
        dots: true,
        dotsClass: 'slider-dots',
    });
    $("#slider2 .slides").slick({
        autoplay: true,
        arrows: false,
        dots: true,
        fade: true,
        cssEase: 'linear',
        dotsClass: 'slider-dots',
    });

    $("a.button-r").click(function(){
        var num = $(".jump").length;
        var jump = $(".jump").index($(".jump:visible"));
        if (jump == num-1) {
            jump = 0;
        }else{
            jump++;
        }

        $(".jump").hide();
        $($(".jump").get(jump)).show();
    });


    $("a.button-l").click(function(){
        var num = $(".jump").length;
        var jump = $(".jump").index($(".jump:visible"));
        if (jump == 0) {
            jump = num-1;
        }else{
            jump--;
        }

        $(".jump").hide();
        $($(".jump").get(jump)).show();
    });

    $(".header>span").click(function(){
        $(".side-menu").toggle();
        if ($(".side-menu").is(":visible")) {
            disableScroll();
            $('.top').show();
            $('.select>a').attr("href","")
        } else {
            enableScroll();
            $('.top').hide();
        }
    });

    $(".side-overlay").click(function(){
        $(".side-menu").hide();
        $(".top").hide();
        enableScroll();
    });

    $(".top").click(function(e){
        $(".side-menu").hide();
        $(this).hide();
        enableScroll();
        stopPropagation(e);
    });

    enablePopupScroll(".side-menu");

    $(".select").click(function(){
        if ($(".top").is(":visible")) {
           return;
        } else {
           window.location.href="{url:site/search}";
        }
    });

    $('.shaixuan>a').click(function(){
        var index = $(this).siblings('.price');
        if((index).is(":visible")){
            index.hide();
        }else{
            index.show();
        }
    });

});

/**
 * 阻止事件的默认行为，比如手指滑动时页面默认滚动
 */
function preventDefault(e) {
    e = e || window.event;
    e.preventDefault && e.preventDefault();
    e.returnValue = false;
}

/**
 * 阻止事件冒泡
 */
function stopPropagation(e){
    e = e || window.event;
    e.stopPropagation && e.stopPropagation();
    e.cancelBubble = false;
}

/**
 * 允许页面滚动
 */
function enableScroll() {
    $(document).off('mousewheel', preventDefault);
    $(document).off('touchmove', preventDefault);
}

/**
 * 禁止页面滚动
 */
function disableScroll() {
    $(document).on('mousewheel', preventDefault);
    $(document).on('touchmove', preventDefault);
}

/**
 * 允许弹出层滚动
 */
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

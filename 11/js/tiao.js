$(function(){
      $("#slider1 .slides").slick({
        autoplay: true,
        arrows: false,
        dots: true,
        dotsClass: 'slider-dots',
        appendDots: 'div.slides-pagination'
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

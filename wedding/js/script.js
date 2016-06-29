$(function(){
    $("#fullpage").fullpage({
        afterLoad: function(anchorLink, index) {
            console.log("[ section-" + index + " ]: " + anchorLink + " has loaded!")
            Album["load" + anchorLink]();
        }
    });
    $(".loading-text").fadeOut(3000, function(){
        $("#fullpage").removeClass("opacity");
        $("#fullpage").hide();
        $("#fullpage").fadeIn(600, function(){
            // snowFlake();
        });
    });

    $(".page.page-cover").load('cover.html');
    $(".page.page-content").load('content.html');
    $(".page.page-map").load('map.html');
    $(".page.page-end").load('end.html');

    $("#mc_play").click(function(){
        if ($('#mc_play').hasClass('on')){
              $('#mc_play audio').get(0).pause();
              $('#mc_play').attr('class','stop');
        }else{
              $('#mc_play audio').get(0).play();
              $('#mc_play').attr('class','on');
        }
    });
});

function just_play(id){
    $('#mc_play audio').get(0).play();
    $('#mc_play').attr('class','on');
    event.stopPropagation(); //阻止冒泡
}
// function is_weixn(){
//     return false;
//     var ua = navigator.userAgent.toLowerCase();
//     if(ua.match(/MicroMessenger/i)=="micromessenger") {
//         return true;
//     } else {
//         return false;
//     }
// }

window.onload=function(){
    // just_play();
}

var flowersImg = ['img/flower1.png', 'img/flower2.png', 'img/flower3.png'];
function snowFlake() {
    var $flakeContainer = $(".snow-flake");
    var visualWidth = $(".landing-page").width();
    var visualHeight = $(".landing-page").height();

    function getImagesName() {
        return flowersImg[[Math.floor(Math.random() * 6)]];
    }
    function createSnowBox() {
        var url = getImagesName();
        return $('<div class="snowbox" />').css({
                'width': 41,
                'height': 41,
                'position': 'absolute',
                'backgroundSize': 'cover',
                'zIndex': 100000,
                'top': '-41px',
                'backgroundImage': 'url(' + url + ')'
            });
    }
    setInterval(function(){
        // 运动的轨迹
        var startPositionLeft = Math.random() * visualWidth - 100,
            startOpacity    = 1,
            endPositionTop  = visualHeight - 40,
            endPositionLeft = startPositionLeft - 100 + Math.random() * 500,
            duration        = visualHeight * 10 + Math.random() * 5000;

        // 随机透明度，不小于0.5
        var randomStart = Math.random();
        randomStart = randomStart < 0.5 ? startOpacity : randomStart;

        // 创建一个雪花
        var $flake = createSnowBox();

        // 设计起点位置
        $flake.css({
            left: startPositionLeft,
            opacity : randomStart
        });

        // 加入到容器
        $flakeContainer.append($flake);

        // 开始执行动画
        $flake.transition({
            top: endPositionTop,
            left: endPositionLeft,
            opacity: 0.7
        }, duration, 'ease-out', function() {
            $(this).remove() //结束后删除
        });
    }, 600);
}

// 每页显示的动画效果
var Album = {
    loadLandingPage: function() { // 首页
        $(".landing-page .bigheart>.heart-loader .heart-loader__heartPath").addClass("svg-stroke-anim");
        $(".landing-page .invite-letter").addClass("fade-in-animation");
        $(".landing-page .banner-badge").fadeIn("slow", function(){
            console.log("banner-badge fadeIn done!");
            $(".landing-page .banner-badge .heart").addClass("scale-up-animation");
        });
    },
    loadAnimationPage: function() { // 小动画页

    },
    loadCoverPage: function() { // 封面

    },
    loadMapPage: function() { // 地图页

    },
    loadContentPage: function() { // 内容页

    },
    loadEndPage: function() { // 结尾页

    }
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

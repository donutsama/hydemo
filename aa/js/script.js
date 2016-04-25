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


     $("a.plus").click(function(){              
        var num = parseInt($(this).siblings("span.none").text());
            num = num + 1;
        $(this).siblings("span.none").text(num);

    });

    $("a.reduction").click(function(){              //点击减号 修改购买数量 （商品详情页/购物车）
        var num = parseInt($(this).siblings("span.none").text());
            num = num - 1;

        if(num >= 1){
            $(this).siblings("span.none").text(num);  
        }
    });
    $('.x_green a').click(function(){
        var num = $('.x_green a').index($(this));
        $('.x_green a.highligh').removeClass('highligh');
        $(this).addClass('highligh');
        $('.all_nr .x_num1').hide();
        $($('.all_nr .x_num1').get(num)).show();
    });

    $('.x_fixed a:nth-child(2)').click(function(){
        if ($('.x_fixed a:nth-child(2).highlight').is(":visible")) {
            $(this).removeClass('highlight');
        }else{
            $(this).addClass('highlight');
        };
    });

    $('.s_fenlei a').click(function(){
        $('.s_fenlei a.highlight').removeClass('highlight');
        $(this).addClass('highlight');
    });

});


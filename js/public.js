       $(function () {
        $('.join').click(function () {
            window.location.href='join.html';
        })
        $('.channel').click(function () {
            window.location.href='channel.html';
        })
        $('.cooperation').click(function () {
            window.location.href = 'service.html'
        })
        var mySwiper = new Swiper ('.swiper-container', { 
            autoplay: true,
            loop : true,
            // 可选选项，自动滑动
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            // 如果需要前进后退按钮
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            }
        }) 
    })
    
    // mySwiper.el.onmouseover = function(){
    //     mySwiper.autoplay.stop();
    //   }
    // mySwiper.el.onmouseleave = function(){
    //     mySwiper.autoplay.start();
    // }

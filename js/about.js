$(function () {
    $('.select').hide()
    $('.nav-link-ablout').hover(function(){
        $('.select').show()
    },function(){
        $('.select').hide()
    })
    $('.select').hover(function (){
        $('.select').show()
    },function(){
        $('.select').hide()
    })
    $('.join').click(function () {
        window.location.href='join.html';
    })
    $('.channel').click(function () {
        window.location.href='channel.html';
    })
    $('.cooperation').click(function () {
        window.location.href = 'service.html'
    })
    $('.index-cooperation').click(function () {
        window.location.href = 'cooperation.html'
    })
    $('.index-about').click(function () {
        window.location.href = 'about.html'
    })
    $('.index-join').click(function () {
        window.location.href = 'join.html'
    })
    $('.index-mdh').click(function () {
        window.location.href = 'MDHcare.html'
    })
    $('.index-product').click(function () {
        window.location.href = 'product.html'
    })
    $('.index-channel').click(function () {
        window.location.href = 'channel.html'
    })
    $('.index-index').click(function () {
        window.location.href = 'index.html'
    })
    $('.swiper-button-prev').hover(function () {
        $(this).css({'background-image':'url(img/imgs/icon_arrow_left.png)'})
    },function () {
        $(this).css({'background-image':'url(img/imgs/icon_left.png)'})
    })
    $('.swiper-button-next').hover(function () {
        $(this).css({'background-image':'url(img/imgs/icon_arrow_left.png)','transform':'rotate(180deg)'})
    },function () {
        $(this).css({'background-image':'url(img/imgs/icon_left.png)'})
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
    $('.swiper-slide').mouseover(function () {
        mySwiper[0].autoplay.stop()
    })
    $('.swiper-slide').mouseout(function () {
        mySwiper[0].autoplay.start();
    })
    $('.swiper-slide').mouseover(function () {
        mySwiper[1].autoplay.stop()
    })
    $('.swiper-slide').mouseout(function () {
        mySwiper[1].autoplay.start();
    })
})
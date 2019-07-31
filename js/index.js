$(function () {
    $('.gene-img1').hover(function () {
        $('.gene-img1').hide()
        $('.hover-img1').show()
    },function() {
        $('.gene-img1').show()
        $('.hover-img1').hide()
    })
    $('.gene-img2').hover(function () {
        $('.gene-img2').hide()
        $('.hover-img2').show()
    },function() {
        $('.gene-img2').show()
        $('.hover-img2').hide()
    })
    $('.gene-img3').hover(function () {
        $('.gene-img3').hide()
        $('.hover-img3').show()
    },function() {
        $('.gene-img3').show()
        $('.hover-img3').hide()
    })
    $('.img-one').css('display','none')
    $('.img-two').css('display','none')
    $('.img-three').css('display','none')
    $('.img-four').css('display','none')
    $('.img-five').css('display','none')
    $('.img-six').css('display','none')
    $('.img-senven').css('display','none')
    $('.img-one').fadeIn(1000)
    $('.img-two').fadeIn(2000)
    $('.img-three').fadeIn(4000)
    $('.img-four').fadeIn(8000)
    $('.img-five').fadeIn(12000)
    $('.img-six').fadeIn(16000)
    $('.img-senven').fadeIn(20000)

})

var userAgentInfo = navigator.userAgent; 
    console.log(userAgentInfo)
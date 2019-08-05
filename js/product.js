var baseURL = 'https://www.mdhcare.cn/mdhcare-backend'
$(function () {
    $('.li-one').hover(function () {
        $('.product-none1').show()
        $('.defult-1').hide()
        $('.icon-1').show()
    },function () {
        $('.product-none1').hide()
        $('.icon-1').hide()
        $('.defult-1').show()
    })
    $('.li-two').hover(function () {
        $('.product-none2').show()
        $('.defult-2').hide()
        $('.icon-2').show()
    },function () {
        $('.product-none2').hide()
        $('.icon-2').hide()
        $('.defult-2').show()
    })
    $('.li-three').hover(function () {
        $('.product-none3').show()
        $('.defult-3').hide()
        $('.icon-3').show()
    },function () {
        $('.product-none3').hide()
        $('.icon-3').hide()
        $('.defult-3').show()
    })
    $('.li-four').hover(function () {
        $('.product-none4').show()
        $('.defult-4').hide()
        $('.icon-4').show()
    },function () {
        $('.product-none4').hide()
        $('.icon-4').hide()
        $('.defult-4').show()
    })
    $('.li-five').hover(function () {
        $('.product-none5').show()
        $('.defult-5').hide()
        $('.icon-5').show()
    },function () {
        $('.product-none5').hide()
        $('.icon-5').hide()
        $('.defult-5').show()
    })
    $('.li1-one').hover(function () {
        $('.product-none6').show()
        $('.defult-6').hide()
        $('.icon-6').show()
    },function () {
        $('.product-none6').hide()
        $('.icon-6').hide()
        $('.defult-6').show()
    })
    $('.li1-two').hover(function () {
        $('.product-none7').show()
        $('.defult-7').hide()
        $('.icon-7').show()
    },function () {
        $('.product-none7').hide()
        $('.icon-7').hide()
        $('.defult-7').show()
    })
    $('.li1-three').hover(function () {
        $('.product-none8').show()
        $('.defult-8').hide()
        $('.icon-8').show()
    },function () {
        $('.product-none8').hide()
        $('.icon-8').hide()
        $('.defult-8').show()
    })
    $('.gif-div2').css('display','none')
    $('.gif-div3').css('display','none')
    $('.gif-div4').css('display','none')
    $('.gif-div2').fadeIn(4000);
    $('.gif-div3').fadeIn(15000);
    $('.gif-div4').fadeIn(20000);
    $('.name').change(function () {
        $('.btn-none').css('display','inline-block')
        $('.btn2-block').css('display','none')
    });
    $('.cellphone').change(function () {
        $('.btn-none').css('display','inline-block')
        $('.btn2-block').css('display','none')
    });
    $('.thinkCity').change(function () {
        $('.btn-none').css('display','inline-block')
        $('.btn2-block').css('display','none')
    });
    $('.currentWork').change(function () {
        $('.btn-none').css('display','inline-block')
        $('.btn2-block').css('display','none')
    });
    $('.btn2-block').click(function () {
        var name = $('.name').val();
        var cellphone = $('.cellphone').val();
        var thinkCity = $('.thinkCity').val();
        var currentWork = $('.currentWork').val();
        var TEL_REGEXP = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
        if(name!=''){
            if(TEL_REGEXP.test(cellphone)){
                $.ajax({
                    type :"POST",
                    url :baseURL + "/city",
                    dataType: 'json',
                    contentType:'application/json',
                    data:JSON.stringify({
                        name,
                        cellphone,
                        thinkCity,
                        currentWork
                    }),
                    success: function(res) {
                        console.log(res)
                        alert('提交成功')
                    },
                    error:function(err){
                        console.log(err)
                    },
                    complete:function (res) {
                        console.log(res)
                        if(res.status === 200){
                            alert('提交成功')
                        }
                    }
                })
            }else{
                alert('请输入正确的手机号')
            }
        }else{
            alert('请输入姓名')
        }
    })
})
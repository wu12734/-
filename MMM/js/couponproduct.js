$(function () {

    var data = get();

    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getcouponproduct',
        data: {
            couponid: data.couponid
        },
        success: function (info) {
            console.log(info);

            $('.cargo ul').html(template('tpl', info));

            $('.cargo a').click(function () {
                $(this).next().fadeIn();
                $('body').css('overflow', 'hidden');
            })

            $('.model').click(function (e) {
                $('.model').fadeOut();
                $('body').css('overflow', '');
            })

            $('.prev-img').click(function(e){
                $(this).parent().fadeOut().parent().prev().children('.model').fadeIn();
                e.stopPropagation();
            })

            $('.next-img').click(function(e){
                $(this).parent().fadeOut().parent().next().children('.model').fadeIn();
                e.stopPropagation();
            })

        }
    })


})
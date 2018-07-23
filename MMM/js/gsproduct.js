$(function(){

    $.ajax({
        url: 'http://127.0.0.1:9090/api/getgsshop',
        success: function (info) {
            console.log(info);
            $('.from1').html(template('tpl', info));
        }
    })


    $.ajax({
        url: 'http://127.0.0.1:9090/api/getgsshoparea',
        success: function (info) {
            console.log(info);
            $('.from2').html(template('tpl1', info));
        }
    })

    $.ajax({
        url: 'http://127.0.0.1:9090/api/getgsproduct',
        data: {
            shopid: 0,
            areaid: 0,
        },
        success: function (info) {
            console.log(info);
            $('.cargo').html(template('tpl2', info));
        }
    })

    $('.order').click(function(){
        $(this).children('span').toggleClass('fa-angle-down').toggleClass('fa-angle-up');
        $(this).children('.from').toggle();
    })

})
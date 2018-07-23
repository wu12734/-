$(function(){

    var data = get();

    $.ajax({
        url: 'http://127.0.0.1:9090/api/getmoneyctrlproduct',
        data: {
            productid: data.productid
        },
        success: function (info) {
            console.log(info);
            $('.main').html(template('tpl', info));
        }
    })

})
$(function () {

    var data = get();
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getproduct',
        data: {
            productid: data.productid
        },
        success: function (info) {
            // console.log(info);

            $.ajax({
                url: 'http://127.0.0.1:9090/api/getcategorybyid',
                data: {
                    categoryid: info.result[0].categoryId
                },
                success: function (info1) {
                    info['result']['cat'] = info1.result[0];
                    // console.log(info);
                    
                    $('.nav').append(template('tpl', info))
                }
            })

            $('.ban').html(template('tpl1', info))
        }
    })

    $.ajax({
        url: 'http://127.0.0.1:9090/api/getproductcom',
        data: {
            productid: data.productid
        },
        success: function (info) {
            console.log(info);
            $('.comment ul').html(template('tpl2', info));
        }
    })

})
$(function () {

    var data = get();
    var obj = {};
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getbrand',
        data: {
            brandtitleid: data.brandtitleid,
        },
        success: function (info) {
            console.log(info);

            $('.menu').html(template('tpl', info));
        }
    })

    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getbrandproductlist',
        data: {
            brandtitleid: data.brandtitleid,
            pagesize: 4,
        },
        success: function (info) {
            console.log(info);

            $('.cargo ul').html(template('tpl1', info));
            obj.name = info.result[0].productName;
            obj.img = info.result[0].productImg;
        }
    })

    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getproductcom',
        data: {
            productid: 1,
        },
        success: function (info) {
            for (var i = 0; i < info.result.length; i++) {
                info.result[i].productName = obj.name;
                info.result[i].productImg = obj.img;
            }

            console.log(info);
            $('.com ul').html(template('tpl2', info));
        }
    })

})
$(function(){

    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getcategorytitle',
        success: function(info){
            // console.log(info);
            
            $('.menu').html(template('tpl', info));
        }
    })

    $('.menu').on('tap', '.list', function(){
        var id = $(this).data('id');
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:9090/api/getcategory',
            data: {
                titleid: id,
            },
            success: function(info){
                // console.log(info);
                id++;
                $('.menu>li:nth-child('+ id +') .second').html(template('tpl1', info));
            }
        })
    })

    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getproductlist',
        data: {
            categoryid: 0,
            pageid: 1
        },
        success: function(info){
            // console.log(info);
        }
    })



})
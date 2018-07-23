$(function(){

    //菜单栏
    $.ajax ({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getindexmenu',
        success: function(info){
            $('.nav').html(template('tpl', info));
            
            $('[data-index="7"]').click(function(){
                $('.nav a:nth-child(n+9)').toggle();
            })
        }
    })

    //商品
    $.ajax ({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getmoneyctrl',
        success: function(info){
            console.log(info);
            
            $('.cargo ul').html(template('tpl1', info));
        }
    })

})
$(function () {

    // mui('.mui-scroll-wrapper').scroll({
    //     deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    //     scrollY: false, //是否竖向滚动
    //     scrollX: true, //是否横向滚动
    //     startX: 0, //初始化时滚动至x
    //     startY: 0, //初始化时滚动至y
    //     indicators: false, //是否显示滚动条
    //     deceleration: 0.0006, //阻尼系数,系数越小滑动越灵敏
    //     bounce: true //是否启用回弹
    // });

    $.ajax ({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getbaicaijiatitle',
        success: function(info){
            console.log(info);
            
            $('.title').html(template('tpl', info));
            
        }
    })

    var data = get();
    render(data.titleid);
    //商品
    function render(titleid) {
        $.ajax ({
                type: 'get',
                url: 'http://127.0.0.1:9090/api/getbaicaijiaproduct',
                data: {
                    titleid: titleid || 0,
                },
                success: function(info){
                    console.log(info);
                    
                    $('.cargo ul').html(template('tpl1', info));
                    
                }
            })
    }






})
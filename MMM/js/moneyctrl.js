$(function(){

    render(0);
    //商品
    function render(pageid) {
        $.ajax ({
                type: 'get',
                url: 'http://127.0.0.1:9090/api/getmoneyctrl',
                data: {
                    pageid: pageid
                },
                success: function(info){
                    console.log(info);
                    
                    $('.cargo ul').html(template('tpl1', info));
                    var i = Math.ceil(info.totalCount / info.pagesize);
                        i = i < 1? 1 : i;
                        var list = [];
                        list.length = i;
                        $('.page-n').html(template('tpl2', {
                            list: list,
                            page: pageid,
                        }));

                        var page = parseInt($('.page-n').val()) - 1;
                        $('.page .prev').off().on('click', function () {
                            if(page == 0){
                                return;
                            }
                            render(--page);
                        })
                        $('.page .next').off().on('click', function () {
                            if(page == i-1){
                                return;
                            }
                            render(++page);
                        })

                }
            })
    }
    
    $('.page-n').on('change', function(){
        var page = parseInt($('.page-n').val());
        render(page-1);
    })

})
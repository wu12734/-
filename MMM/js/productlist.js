$(function () {

    //获取地址栏内容
    var data = get();

    render(data.pageid);
    $('.nav').append(template('tpl', data));

    function render(pageid) {
        $.ajax({
            url: 'http://127.0.0.1:9090/api/getproductlist',
            data: {
                categoryid: data.categoryid,
                pageid: pageid
            },
            success: function (info) {
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

                var page = parseInt($('.page-n').val());
                $('.page .prev').off().on('click', function () {
                    render(--page);
                })
                $('.page .next').off().on('click', function () {
                    render(++page);
                })

            }
        })
    }

    $('.page-n').on('change', function(){
        var page = parseInt($('.page-n').val());
        render(page);
    })




})
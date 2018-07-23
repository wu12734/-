$(function(){

    $.ajax({
        url: 'http://127.0.0.1:9090/api/getsitenav',
        success: function (info) {
            $('.list').html(template('tpl', info));
        }
    })

})

    function get() {
        var data = location.search.slice(1);
        data = decodeURI(data);
        data = data.split('&');
        var obj = {};
        data.forEach(function (v, i) {
            var i = v.split('=');
            obj[i[0]] = i[1];
        });

        return obj;
    }



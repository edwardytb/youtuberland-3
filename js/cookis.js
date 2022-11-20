/**
 * Gets or sets cookies
 * @param name
 * @param value (null to delete or undefined to get)
 * @param options (domain, expire (in days))
 * @return value or true
 */
_.cookie = function(name, value, options)
{
    if (typeof value === "undefined") {
        var n, v,
            cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            n = $.trim(cookies[i].substr(0,cookies[i].indexOf("=")));
            v = cookies[i].substr(cookies[i].indexOf("=")+1);
            if (n === name){
                return unescape(v);
            }
        }
    } else {
        options = options || {};
        if (!value) {
            value = "";
            options.expires = -365;
        } else {
            value = escape(value);
        }
        if (options.expires) {
            var d = new Date();
            d.setDate(d.getDate() + options.expires);
            value += "; expires=" + d.toUTCString();
        }
        if (options.domain) {
            value += "; domain=" + options.domain;
        }
        if (options.path) {
            value += "; path=" + options.path;
        }
        document.cookie = name + "=" + value;
    }
};

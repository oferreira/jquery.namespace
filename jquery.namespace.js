(function ($) {
    $.namespace = function (namespaceName, closures) {

        if ($.fn[namespaceName] === undefined) {
            $.fn[namespaceName] = function executor(context) {
                if (this instanceof executor) {
                    this.__context__ = context;
                }
                else {
                    return new executor(this);
                }
            };
        }

        $.each(closures, function (closureName, closure) {
            $.fn[namespaceName].prototype[closureName] = function () {
                return closure.apply(this.__context__, arguments);
            };
        });

    };
})(jQuery);
/**
 * Created by yhsl on 2017/5/23.
 */
(function (jQuery) {
    jQuery.fn.extend({
        marquee:function (o) {
            var it = this,
                d = o.direction || 'left', //滚动方向 默认向左
                s = o.speed || 30, //速度 默认30毫秒
                mar = jQuery(it),
                mp1 = jQuery(it).children(0).attr({id:"mp1"}),
                marqueeFunc = getMarquee(d),
                marRun = marqueeFunc ? setInterval(marqueeFunc, s) : function () {
                    return false;
                };//开始滚动
            //鼠标悬停事件
            jQuery(it).hover(function () {
                clearInterval(marRun);
            }, function () {
                marRun = setInterval(marqueeFunc, s);
            });
            function getMarquee(d) {
                var marqueeFunc;
                mar.addClass("plus-mar-left");
                var liHeight = mar[0].offsetHeight;
                mar.css({"line-height":liHeight + "px"});
                if (mp1[0].offsetWidth < mar[0].offsetWidth) return false;
                mp1.clone().attr({id:"mp2"}).appendTo(mar);
                marqueeFunc = function () {
                    if (mar[0].scrollLeft >= mp1[0].scrollWidth) {
                        mar[0].scrollLeft = 0;
                    } else {
                        mar[0].scrollLeft++;
                    }
                };
                return marqueeFunc;
            }
        }
    })
})(jQuery);
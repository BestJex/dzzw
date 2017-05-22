/**
 * Created by Administrator on 2017/5/17 0017.
 */
$(function ($) {
    $(window).scroll(function(){
        console.log($(window).scrollTop());
        if($(window).scrollTop()>430){
            $(".jrfw_topnav").show();

        }else{
            $(".jrfw_topnav").hide();
        }
        $(".jrfw_fwjs").click(function () {
            $("body").scrollTop(465);
            $(".jrfw_mainbav  .jrfw_fwjs").addClass("lis").siblings().removeClass("lis");
        });
        $(".jrfw_fwfw").click(function () {
            $("body").scrollTop(650);
            $(".jrfw_mainbav  .jrfw_fwfw").addClass("lis").siblings().removeClass("lis");
        });
        $(".jrfw_fwxy").click(function () {
            $("body").scrollTop(915);
            $(".jrfw_mainbav  .jrfw_fwxy").addClass("lis").siblings().removeClass("lis");
        });
        $(".jrfw_yycj").click(function () {
            $("body").scrollTop(1195);
            $(".jrfw_mainbav  .jrfw_yycj").addClass("lis").siblings().removeClass("lis");
        });
        $(".jrfw_fwlc").click(function () {
            $("body").scrollTop(1623);
            $(".jrfw_mainbav  .jrfw_fwlc").addClass("lis").siblings().removeClass("lis");
        });
        if($(window).scrollTop()>465&&$(window).scrollTop()<650){
            $(".jrfw_mainbav  .jrfw_fwjs").addClass("lis").siblings().removeClass("lis");
        }else if($(window).scrollTop()>650&&$(window).scrollTop()<915){
            $(".jrfw_mainbav  .jrfw_fwfw").addClass("lis").siblings().removeClass("lis");
        }else if($(window).scrollTop()>915&&$(window).scrollTop()<1195){
            $(".jrfw_mainbav  .jrfw_fwxy").addClass("lis").siblings().removeClass("lis");
        }else if($(window).scrollTop()>1195&&$(window).scrollTop()<1623){
            $(".jrfw_mainbav  .jrfw_yycj").addClass("lis").siblings().removeClass("lis");
        }else if($(window).scrollTop()>1528&&$(window).scrollTop()<2080){
            $(".jrfw_mainbav  .jrfw_fwlc").addClass("lis").siblings().removeClass("lis");
        }
    });

    //回到顶部
    var offset = 100,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.cd-top');
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if( $(this).scrollTop() > offset_opacity ) {
            $back_to_top.addClass('cd-fade-out');
        }
    });
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
                scrollTop: 0
            }, scroll_top_duration
        );
    });
});
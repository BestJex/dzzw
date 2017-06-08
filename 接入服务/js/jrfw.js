/**
 * Created by Administrator on 2017/5/17 0017.
 */
$(function ($) {
    $('.jrfw_mainbav  li,.jrfw_topnav .jrfw_mainbav li').each(function() {
        $(this).click(function() {
            var href1=$(this).attr('class');
            console.log(href1);
            var scrollT=$("#"+href1).offset().top-30;
            console.log(scrollT);
            $("body").scrollTop(scrollT);

        })
    });
    $(window).scroll(function(){
        console.log($(window).scrollTop());
        if($(window).scrollTop()>430){
            $(".jrfw_topnav").show();

        }else{
            $(".jrfw_topnav").hide();
        }

        // $(".jrfw_fwfw").click(function () {
        //     $("body").scrollTop(450);
        //     $(".jrfw_mainbav  .jrfw_fwfw").addClass("lis").siblings().removeClass("lis");
        // });
        // $(".jrfw_fwxy").click(function () {
        //     $("body").scrollTop(715);
        //     $(".jrfw_mainbav  .jrfw_fwxy").addClass("lis").siblings().removeClass("lis");
        // });
        // $(".jrfw_yycj").click(function () {
        //     $("body").scrollTop(985);
        //     $(".jrfw_mainbav  .jrfw_yycj").addClass("lis").siblings().removeClass("lis");
        // });
        // $(".jrfw_fwlc").click(function () {
        //     $("body").scrollTop(1438);
        //     $(".jrfw_mainbav  .jrfw_fwlc").addClass("lis").siblings().removeClass("lis");
        // });
        //  if($(window).scrollTop()>450&&$(window).scrollTop()<715){
        //     $(".jrfw_mainbav  .jrfw_fwfw").addClass("lis").siblings().removeClass("lis");
        // }else if($(window).scrollTop()>715&&$(window).scrollTop()<985){
        //     $(".jrfw_mainbav  .jrfw_fwxy").addClass("lis").siblings().removeClass("lis");
        // }else if($(window).scrollTop()>985&&$(window).scrollTop()<1438){
        //     $(".jrfw_mainbav  .jrfw_yycj").addClass("lis").siblings().removeClass("lis");
        // }else if($(window).scrollTop()>1120&&$(window).scrollTop()<2080){
        //     $(".jrfw_mainbav  .jrfw_fwlc").addClass("lis").siblings().removeClass("lis");
        // }
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
/**
 * Created by yhsl on 2017/5/12.
 */
var left=document.getElementById('qkfx_left');
var right=document.getElementById('qkfx_right');
var qkfx_pent=document.getElementById('qkfx_pent');
var qkfx_next=document.getElementById('qkfx_next');
var data=['2002','2004','2005','2006','2007','2008','2009','2010','2011','2012','2014','2015','2016','2017','2018'];
//左边
$(left).bind('click',function(){
    if((qkfx_pent.innerText)>data[1]){
        qkfx_pent.innerText=qkfx_pent.innerText-1;
        qkfx_next.innerText=qkfx_next.innerText-1;
        $('.list_right #qkfx_right img').attr('src','images/qkfx_right.png');
        $('#qkfx_next').css({"background-image":"url(images/qkfx_4.png)",color:'white'});
    }else if((qkfx_pent.innerText)>data[0]){
        qkfx_pent.innerText=qkfx_pent.innerText-1;
        qkfx_next.innerText=qkfx_next.innerText-1;
        $('.list_left #qkfx_left img').attr('src','images/qkfx_left1.png');
        $('#qkfx_pent').css({"background-image":"url(images/qkfx_right_4.png)",color:'#b7b7b7'});
    }
});
//右边
$(right).bind('click',function(){
    if( (qkfx_next.innerText)<data[data.length-2]){
        qkfx_pent.innerText=parseInt(qkfx_pent.innerText)+1;
        qkfx_next.innerText=parseInt(qkfx_next.innerText)+1;
        $('.list_left #qkfx_left img').attr('src','images/qkfx_left.png');
        $('#qkfx_pent').css({"background-image":"url(images/qkfx_4.png)",color:'white'});
    }else if((qkfx_next.innerText)<data[data.length-1]){
        qkfx_pent.innerText=parseInt(qkfx_pent.innerText)+1;
        qkfx_next.innerText=parseInt(qkfx_next.innerText)+1;
        $('.list_right #qkfx_right img').attr('src','images/qkfx_right1.png');
        $('#qkfx_next').css({"background-image":"url(images/qkfx_right_4.png)",color:'#b7b7b7'});
    }
});


var hover = $('.yue .list .hover');
var ysc=$('.yue .list li .ysc');

//添加下载
var str="<div class='yidong_box'><div class='yidong_bg'><img src='images/yidong_xz.png' alt=''> <span>下载</span></div></div>";
for(var i=0,len=hover.length;i<=len;i++){
    hover.eq(i).prepend($(str));
}

var index;
hover.mouseover(function(){
    index =hover.index(this);
    console.log(index);
    $('.qkfxBox_top .yue .list .hover').eq(index).css({paddingTop:'0px'});
    $('.yidong_bg').click(function () {  //点击下载
        var aa='images/qkfx_yxz.png';  //下载完成后图片
        ysc.eq(index).attr('src',aa);
    });
    $(".yidong_box").eq(index).css({display:"block"});
});

hover.mouseout(function(){
    index=hover.index(this);
    $(".yidong_box").eq(index).css({display:"none"});
    $('.qkfxBox_top .yue .list li').css({paddingTop:'49px'});
});

//下标圆点
var myMonth = new Date().getMonth();  //获取当前月份 0代表1月
var marginLeft=myMonth*8.3333+'%';
$(".ydong_box").css({marginLeft:marginLeft});
/*
* @Author: acer
* @Date:   2017-10-19 14:59:16
* @Last Modified by:   acer
* @Last Modified time: 2017-10-19 16:37:54
*/
$(function(){
	///////////餐厅文化效果
	$('.jianjie-huan>li').on('mouseover',function(){
		$('div',this).css({opaity:'1'})
	})
	$('.jianjie-huan>li').on('mouseover',function(){
		$('div',this).animate({height:'100%'})
	})
	///////////新品推荐效果
	$('.new-bottom>li>a').on('mouseover',function(){
		$('.newb-zhe',this).css({opacity:1,transform:'scale(0.8,0.8)'});
	})
	$('.new-bottom>li>a').on('mouseover',function(){
		$('.newb-xian',this).stop();
		$('.newb-xian',this).animate({width:'100%'});
	})
	$('.new-bottom>li>a').on('mouseout',function(){
		$('.newb-zhe',this).css('opacity','0');
	})
	$('.new-bottom>li>a').on('mouseout',function(){
		$('.newb-xian',this).stop();
		$('.newb-xian',this).animate({width:0});
	})
})
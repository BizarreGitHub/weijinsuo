
$(function(){
	//轮播图自动播放
	$('#myCarousel').carousel({
		//3秒自动播放
		interval:3000,
	});
	//轮播图左右按钮垂直居中
//	$('.carousel-control').css('line-height',$('.carousel-inner img') + 'px');
//	$(window).resize(function(){
//		var $height = $('.carousel-inner img').eq(0).height() ||
//					  $('.carousel-inner img').eq(1).height() ||
//					  $('.carousel-inner img').eq(2).height() || 
//					  $('.carousel-inner img').eq(3).height() ;
//		$('.carousel-control').css('line-height',$height + 'px')
//	});
});

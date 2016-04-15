// JavaScript Document

$(function(){ //jquery initialized //

	$('.nav-li li').css('left', '95px');
	function animate_li(i){
		if (i < $('.nav-li li').length){
		$('.nav-li li').eq(i).animate({'left':'0px'}, 500, 'easeOutElastic', 
			function(){
				animate_li(i+1);
			});
		}
	}
	animate_li(0);

	var window_width = $(window).width();
	$('.page').css('width', window_width+'px')
	$('.content').css('width', (window_width * 3)+'px')

		var animation_complete = true;
	$('.nav-li li').click(function(){
		
		var margin_left = $(this).attr('data-page') * -window_width;
			if (animation_complete == true) {
				animation_complete = false;
		$('.content').animate({'margin-left':margin_left+'px'}, 500, 'swing',
				function() {
				animation_complete = true;
				});
			}
	});
});
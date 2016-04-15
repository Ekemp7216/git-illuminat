// JavaScript Document

var cur_slide =1;
var timer = null;

function hide_slides() {
	var i = 1;
	//while loop//
	while(i <= 4) {
	document.getElementById('slide' + i).style.display = 'none';
	document.getElementById('newsheadline' + i).className = ' ';
	i = i + 1;
	}	
}

function show_cur_slide() {
	document.getElementById('slide' + cur_slide).style.display = 'block';
	document.getElementById('newsheadline' + cur_slide).className = 'active';	
}

function display_slide(slide_num) {
	hide_slides();
	cur_slide = slide_num;
	show_cur_slide();
	stop_timer();	
}

function display_next_slide() {
	hide_slides();
	cur_slide = cur_slide + 1;

	if(cur_slide > 4) {
	cur_slide = 1;		
}

	show_cur_slide();		
}

function stop_timer() {
	clearInterval(timer);
}

function play_timer() {
	stop_timer();
	timer = setInterval('display_next_slide()', 4000);	
	
}
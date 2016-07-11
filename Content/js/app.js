$(document).ready(function(){
	
	var w = $.cookie('leftwidth');//current width in cookies
	if(w != null){
		$('#left').css('width', w)
		setLeftRight(parseInt(w));
	} else {
		$('#left').css('width', 200)
		setLeftRight(200);
	}
	setCookies('leftwidth', $('#left').css('width'));
	
	var vm = $.cookie('displaymenu');//current menu visible in cookies
	if(vm != null){
		$('#left').css('display', vm);
		if(vm == 'block'){
			$('#visiblemenu').text('Hide menu');
		} else {
			$('#visiblemenu').text('Show menu');
			setLeftRight(-5);
		}
	} else {
		$('#left').css('display', 'block');
		vm = $('#left').css('display');
		$('#visiblemenu').text('Hide menu');
	}
	setCookies('displaymenu', $('#left').css('display'));
	
	$('#left').resizable({
		handles: 'e',
		minWidth: 150,
		maxWidth: (document.documentElement.clientWidth - 150),
		resize: function( event, ui ) {
			setLeftRight(ui.size.width);
			setCookies('leftwidth', ui.size.width);
		}
	});
	
	$('#navigbar')
	.css('width', function(){ return(document.documentElement.clientWidth - 10); });
	
	$('#left')
	.css('height', function(){ return(document.documentElement.clientHeight - parseInt($('#navigbar').css('height')) - 15); });

	$('#right')
	.css('height', function(){ return(document.documentElement.clientHeight - parseInt($('#navigbar').css('height')) - 15); });
	//setLeftRight(parseInt($('#left').css('width')));

	$('#left').niceScroll({
		cursorcolor: '#C62020',
		cursoropacitymax: 1,
		cursorwidth: '6px',
		cursorborder: '0px',
		cursorborderradius: '3px',
		railalign: 'left'
	});
	$('#right').niceScroll({
		cursorcolor: '#C62020',
		cursoropacitymax: 1,
		cursorwidth: '6px',
		cursorborder: '0px',
		cursorborderradius: '3px'
	});
	$('#visiblemenu').click(function () {
		if(vm == 'none'){
			$('#left').css('display', 'block');
			vm = 'block';
			setLeftRight(parseInt($('#left').css('width')));
			$('#visiblemenu').text('Hide menu');
		} else {
			$('#left').css('display', 'none');
			vm = 'none';
			setLeftRight(-5);
			$('#visiblemenu').text('Show menu');
		}
		setCookies('displaymenu', vm);
	});
});

$( window ).resize(function() {
	
	$('#navigbar')
	.css('width', function(){ return(document.documentElement.clientWidth - 10); });
	
	$('#left')
	.css('height', function(){ return(document.documentElement.clientHeight - parseInt($('#navigbar').css('height')) - 15); });

	$('#right')
	.css('height', function(){ return(document.documentElement.clientHeight - parseInt($('#navigbar').css('height')) - 15); });
	setLeftRight(parseInt($('#left').css('width')));
});

function setLeftRight(leftwidth){
	$('#right')
	.css('margin-left', function(){ return(leftwidth + 10); })
	.css('width', function(){ return(document.documentElement.clientWidth - leftwidth - 15); });
}
function setCookies(prop, val){
	$.cookie(prop, val, {expires: 30, path: './'});
}
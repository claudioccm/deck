$(document).ready(function() {

// $(document).bind('touchmove', function(e) {
//     e.preventDefault();
// });

var current_position = '1-1'; // Sets the current position variable
var total_rows = getTotalRows();
var max_columns = getMaxColumn();

var viewport = {};
var card_move = {};

viewport.height = $(window).height(); // returns height of browser viewport
viewport.width = $(window).width(); // returns width of browser viewport

card_move.vertical = viewport.height + 20;
card_move.horizontal = viewport.width + 20;

$('.viewport').width(viewport.width).height(viewport.height); // Sets the .viewport element dimensions to the device dimensions
$('.b-card').width(viewport.width).height(viewport.height); // Sets the .viewport element dimensions to the device dimensions

// Set the active card
$('.coord-'+current_position).addClass('m-active');

// Set .content width
var deck = $('.content');
deck.width(max_columns * (viewport.width + 20));


// Gets the total number of rows
function getTotalRows() {
	total_rows = $('.row').length;
	return total_rows;
}

// Get the length of the longest row
function getMaxColumn() {
	var max = 0;	

	var content_width = $('.row').each(function() {
		var cur = $(this).children().length;
		if ( cur > max ) {
			max = cur;
		}
	});

	return max;
}

function getCardCoords(coords) {
	var coords = {
		'row': parseInt(coords.slice(0,1)),
		'col': parseInt(coords.slice(-1))
	}
	return coords;
}
//////////////////////////////////////////////////

//////////////////////////////////////////////////
var slide = $$('.m-active');


// Tab to flip function
slide.singleTap(function() {
	$(this).toggleClass('m-flipped');
});


// Sliding Navigation

slide.swipeLeft(function(e) {
  	
	var active_card = $('.m-active');
	var card = getCardCoords(active_card.attr('data-coord'));
	var target_col = card.col + 1;
	var row_len = active_card.parent().children().length;
	var swipe_length = e.iniTouch.x - e.currentTouch.x;

	// console.log(swipe_length);

	$(this).addClass('m-active');

	if ( swipe_length > 215 ) {
		$(this).toggleClass('m-flipped');
	}

	else if ( target_col <= row_len ) {
		var target_card = '.coord-' + card.row + '-' + target_col;
		active_card.removeClass('m-active m-flipped');
		$(target_card).addClass('m-active');

		$('.content').css({'left': '-=' + card_move.horizontal});

	} else {
		console.log('Last Card!')
	}

	// $(this).on('event', console.log(event));

	// console.log('Target Card: ' + target_card);	
});

slide.swipeRight(function(e) {
	var active_card = $('.m-active');
	var card = getCardCoords(active_card.attr('data-coord'));
	var target_col = card.col - 1;
	var row_len = active_card.parent().children().length;
	var swipe_length = e.iniTouch.x - e.currentTouch.x;
	console.log(swipe_length);

	$(this).addClass('m-active');

	if (swipe_length < -215) {
		$(this).toggleClass('m-flipped');
	}

	else if ( target_col >= 1 ) {
		var target_card = '.coord-' + card.row + '-' + target_col;
		active_card.removeClass('m-active m-flipped');
		$(target_card).addClass('m-active');

		$('.content').css({'left': '+=' + card_move.horizontal});	
	} else {
		console.log('First Card!')
	}

	// console.log('Target Card: ' + target_card);	
});

slide.swipeUp(function() {
	var active_card = $('.m-active');
	var card = getCardCoords(active_card.attr('data-coord'));
	var target_row = card.row + 1;

	$(this).addClass('m-active');

	if ( target_row <= total_rows ) {
		var target_card = '.coord-' + target_row + '-1';
		active_card.removeClass('m-active m-flipped');
		$(target_card).addClass('m-active');

		$('.content').css({'top': '-=' + card_move.vertical, 'left':'0'});	
	} else {
		console.log('Last Row!');
	}

	// console.log('Target Card: ' + target_card);
});

slide.swipeDown(function() {
	var active_card = $('.m-active');
	var card = getCardCoords(active_card.attr('data-coord'));
	var target_row = card.row - 1;

	$(this).addClass('m-active');

	if ( target_row >= 1 ) {
		var target_card = '.coord-' + target_row + '-1';
		active_card.removeClass('m-active m-flipped');
		$(target_card).addClass('m-active');

		$('.content').css({'top': '+=' + card_move.vertical, 'left':'0'});	
	} else {
		console.log('First Row!');
	}

	// console.log('Target Card: ' + target_card);
});

// Zoom
// $$('.b-card').doubleTap(function () {
// 	$(this).parent().parent().parent().addClass('m-zoom-out');
// });


// $$('.m-zoom-out .b-card').tap(function() {
// 	var target = $(this);
// 	target.getCardCoords(target.attr('data-coord'));
// 	$('.viewport').removeClass('m-zoom-out');
// 	$('.content').css({'top': target.row * card_move.vertical, 'left': '-' + target.col * card_move.horizontal});
// 	console.log(target);

// });




}); // Closes the Document.ready function

// console.log('ROW LENGTH: ' + row_len);







	

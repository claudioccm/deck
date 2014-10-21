$(document).ready(function() {

var current_position = '1-1'; // Sets the current position variable
var total_rows = getTotalRows();
var max_columns = getMaxColumn();

// Set the active card
$('#'+current_position).addClass('m-active');

// Set .content width
var deck = $('.content');
deck.width(max_columns * 960);


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

function getCardCoords(id) {
	var coords = {
		'row': parseInt(id.slice(0,1)),
		'col': parseInt(id.slice(-1))
	}
	return coords;
}

////////////////////
var slides = $$('.b-card');

slides.swipeLeft(function() {
  	
	var active_card = $('.m-active');
	var card = getCardCoords(active_card.attr('id'));
	var target_col = card.col + 1;
	var row_len = active_card.parent().children().length;

	$(this).addClass('active');

	if ( target_col <= row_len ) {
		var target_card = '#' + card.row + '-' + target_col;
		$('.m-active').removeClass('m-active');
		$(target_card).addClass('m-active');

		$('.content').animate({'left': '-=960px'}, 0);	
	} else {
		console.log('Last Card!')
	}

	console.log('Target Card: ' + target_card);	
})

.swipeRight(function() {
	var active_card = $('.m-active');
	var card = getCardCoords(active_card.attr('id'));
	var target_col = card.col - 1;
	var row_len = active_card.parent().children().length;
	$(this).addClass('active');

	if ( target_col >= 1 ) {
		var target_card = '#' + card.row + '-' + target_col;
		$('.m-active').removeClass('m-active');
		$(target_card).addClass('m-active');

		$('.content').animate({'left': '+=960px'}, 0);	
	} else {
		console.log('First Card!')
	}

	console.log('Target Card: ' + target_card);	
})
.swipeUp(function() {
	$(this).addClass('m-active');
	var active_card = $('.m-active');
	var card = getCardCoords(active_card.attr('id'));
	var target_row = card.row + 1;

	if ( target_row <= total_rows ) {
		var target_card = '#' + target_row + '-1';
		$('.m-active').removeClass('m-active');
		$(target_card).addClass('m-active');

		$('.content').animate({'top': '-=1704px', 'left': '0px'}, 0);	
	} else {
		console.log('Last Row!')
	}

	console.log('Target Card: ' + target_card);
})
.swipeDown(function() {
	var active_card = $('.m-active');
	var card = getCardCoords(active_card.attr('id'));
	var target_row = card.row - 1;

	$(this).addClass('active');
	if ( target_row >= 1 ) {
		var target_card = '#' + target_row + '-1';
		$('.m-active').removeClass('m-active');
		$(target_card).addClass('m-active');

		$('.content').animate({'top': '+=1704px', 'left': '0px'}, 0);	
	} else {
		console.log('First Row!')
	}

	console.log('Target Card: ' + target_card);
});

});

// console.log('ROW LENGTH: ' + row_len);






// $("#swipe").swipe({
//   swipeLeft:function(event, direction, distance, duration, fingerCount) {
//     //This only fires when the user swipes left
//   }
// });



	

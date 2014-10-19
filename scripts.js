$(document).ready(function() {

var current_position = '1-1'; // Sets the current position variable
$('#'+current_position).addClass('m-active');

// Gets the total number of rows
var total_rows = $('.row').length;

// Checks for the Max Length of Rows
// var max = 0;
// var content_width = $('.row').each(function() {
// 	var cur = $(this).children().length;

// 	if ( cur > max ) {
// 		max = cur;
// 	}
// });

// $('.content').width(max * 960);



$('.right').click(function() {
	// Gets the total number of columns in that row
	var total_cols = $('.m-active').parent().children().length;
	console.log('total columns ' + total_cols);

	// Gets the position of the current card and converts them to INT
	current_position = $('.m-active').attr('id');
	var current_row = parseInt(current_position.slice(0,1));
	var current_col = parseInt(current_position.slice(-1));

	// Check if it is the last column
	if (current_col < total_cols) {
		$('#' + current_position).removeClass('m-active');
		var target = '#' + current_row + '-' + (current_col + 1);
		$(this).attr('href', target);
		$(target).addClass('m-active');	
	} else {
		console.log('Last Column!');
	}
});

$('.left').click(function() {
	// Gets the position of the current card and converts them to INT
	current_position = $('.m-active').attr('id');
	var current_row = parseInt(current_position.slice(0,1));
	var current_col = parseInt(current_position.slice(-1));

	// Check if it is the first column
	if (current_col > 1) {
		$('#' + current_position).removeClass('m-active');
		var target = '#' + current_row + '-' + (current_col - 1);
		$(this).attr('href', target);
		$(target).addClass('m-active');
	} else {
		console.log('First Column!');
	}
});

$('.down').click(function() {
	// Gets the position of the current card and converts them to INT
	current_position = $('.m-active').attr('id');
	var current_row = parseInt(current_position.slice(0,1));
	var current_col = parseInt(current_position.slice(-1));

	// Sets the target as the next row
	var target = '#' + (current_row + 1) + '-' + current_col;

	// Checks if it is NOT the last row
	if (current_row < total_rows) {
		$(this).attr('href', target);
		$('#' + current_position).removeClass('m-active');
		$(target).addClass('m-active');	
	} else {
		console.log('Last Row!');
	}
});

$('.up').click(function() {
	// Gets the position of the current card and converts them to INT
	current_position = $('.m-active').attr('id');
	var current_row = parseInt(current_position.slice(0,1));
	var current_col = parseInt(current_position.slice(-1));

	// Sets the target as the previous row
	var target = '#' + (current_row - 1) + '-' + current_col;

	// Checks if it is NOT the first row
	if ( current_row > 1 ) {
		$('#' + current_position).removeClass('m-active');
		$(this).attr('href', target);
		$(target).addClass('m-active');	
	} else {
		console.log('First Row!')
	}


	// Helper logs
	// console.log('current_position: ' + current_position);
	// console.log('target: ' + target);
	// console.log('current_row: ' + current_row + ' current_col: ' + current_col);
});


});

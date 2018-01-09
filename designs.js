// Select size input
function makeGrid() {
	$('#pixel_canvas').html('');
	const height = $('#input_height').val();
	const width = $('#input_width').val();
  	for (i = 0; i < height; i++) {
    	$('#pixel_canvas').append('<tr></tr>');
  			for (j = 0; j < width; j++) {
    			$('#pixel_canvas').children().last().append("<td></td>");
    		}
  		}
	};

// When size is submitted by the user, call makeGrid()
$('form#sizePicker').on('submit', function(evt) {
     evt.preventDefault(); 
     makeGrid();
});

// Select color input
  $("#pixel_canvas").on("click", "td", function() {
  	$(this).css("background-color", $("#colorPicker").val());
  });
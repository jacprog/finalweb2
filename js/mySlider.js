



$(function() {
	$("#sliderVisual" ).slider({
		value: 0,
		min: 1,
		max: 10,
		step: 1,

			slide: function(event, ui) {
				$( "#rating" ).val( ui.value);
			}


		});

		$("#rating").val(" Please move the slider");

});

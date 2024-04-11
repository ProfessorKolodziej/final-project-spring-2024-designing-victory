// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

$(function () {
	var $select = $(".1-100");
	for (i = 1; i <= 100; i++) {
		$select.append($('<option></option>').val(i).html(i))
	}
});

//I think I need more time to figure out the JS part of this coding to finalize the html so this is placeholder
// Event listener for the reset button
$("#reset").on("click", function () {
	// Reset color picker to default value
	$(".color-picker").val("#FF5F5F");

	// Reset font picker to default value (if applicable)
	// Reset font-family of paragraph to default (if applicable)

	// Reset number select to default value
	$(".1-100").val("1");

	// Reset pattern selection to default (if applicable)
	// Reset jersey preview image to default pattern (if applicable)
});

// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

//jersey color picker - functioning
const jerseyColorPicker = document.querySelector('sl-color-picker[label="Color"]');
jerseyColorPicker.addEventListener("sl-change", function () {
	console.log(this.value);
	const base = document.querySelector("#Base");
	console.log(base);
	base.style.fill = this.value;
})


// Piping color pickers - functioning
const PipingColorPicker1 = document.querySelector('sl-color-picker[label="Color2"]');
PipingColorPicker1.addEventListener("sl-change", function () {
	const piping1 = document.querySelector("#Middleout");
	piping1.style.fill = this.value;
});

const PipingColorPicker2 = document.querySelector('sl-color-picker[label="Color2"]');
PipingColorPicker2.addEventListener("sl-change", function () {
	const piping2 = document.querySelector("#Rightout");
	piping2.style.fill = this.value;
});

const PipingColorPicker3 = document.querySelector('sl-color-picker[label="Color2"]');
PipingColorPicker3.addEventListener("sl-change", function () {
	const piping3 = document.querySelector("#Leftout");
	piping3.style.fill = this.value;
});


//font picker basic- functioning
const fontPicker = new FontPicker(
	"AIzaSyDeMLqmgHk4H2Q9TsFzOtQdbevzXDEVDLE", // Google API key
	"Open Sans", // Default font
	{ limit: 100 }, // Additional options
);

//showing typed word on jersey preview - functioning
const editableSpan = document.querySelector('.heading span');
const textElement = document.querySelector('#Text tspan');

editableSpan.addEventListener('input', function () {
	if (this.textContent.trim() === '') {
		textElement.textContent = '..............';
	} else {
		textElement.textContent = this.textContent;
	}
});

editableSpan.addEventListener('focus', function () {
	if (this.textContent.trim() === '..............') {
		this.textContent = '';
	}
});

editableSpan.addEventListener('blur', function () {
	if (this.textContent.trim() === '') {
		this.textContent = '..............';
	}
});

//Font & Number color - functioning
// Select the color picker for font color
const fontColorPicker = document.querySelector('sl-color-picker[label="Color3"]');

// Select the text and number elements in the SVG
const textElement2 = document.querySelector('#Text tspan');
const numberElementSvg2 = document.querySelector('#Number tspan');

// Event listener for font color picker change
fontColorPicker.addEventListener("sl-change", function () {
	const selectedColor = this.value;

	// Update the color of the text element
	textElement2.style.fill = selectedColor;

	// Update the color of the number element
	numberElementSvg2.style.fill = selectedColor;
});


//Number in jersey preview- functioning
const numberInput = document.querySelector('sl-input[type="number"]');
const numberElementSvg = document.querySelector('#Number tspan');

numberInput.addEventListener('input', function () {
	const numberValue = this.value.trim(); // Get the trimmed value of the input

	// Update the content of the SVG element with the selected number
	numberElementSvg.textContent = numberValue !== '' ? numberValue : '0';
});

//reset button
//const resetButton = document.querySelector('#reset');
//resetButton.addEventListener('click', reset)
//function reset() {
//editableSpan.textContent = "";
//textElement.textContent = "";
//}

//home button
document.getElementById("home-link").addEventListener("click", function () {
	window.location.href = "index.html";
});

const homeBtn = document.getElementById("home-link");

if (homeBtn !== null) {
	homeBtn.addEventListener("click", function () {
		window.location.href = "index.html";
	});
}


//Button to customization page
const customBtn = document.getElementById("customization-link");

if (customBtn !== null) {
	customBtn.addEventListener("click", function () {
		window.location.href = "customization.html";
	});
}


//done button to hide the custom options
function toggleCustomOptions() {
	const customOptions = document.querySelector(".custom-options");
	customOptions.classList.toggle("hide");
}
const doneButton = document.querySelector("#done");
doneButton.addEventListener("click", toggleCustomOptions);

//share and save button
document.getElementById("done").addEventListener("click", function () {
	var customOptions = document.querySelector(".custom-options");
	var shareButton = document.getElementById("shareButton");
	var saveButton = document.getElementById("saveButton");

	// Toggle visibility of share and save buttons when "Done" button is clicked
	if (shareButton.style.display === "none" || shareButton.style.display === "") {
		shareButton.style.display = "inline-block";
		saveButton.style.display = "inline-block";
		// Apply styling to share and save buttons
		shareButton.style.backgroundColor = "#ffffff";
		shareButton.style.border = "none";
		shareButton.style.color = "#212121";
		shareButton.style.padding = "8px 15px";
		shareButton.style.textAlign = "center";
		shareButton.style.textDecoration = "none";
		shareButton.style.fontSize = "20px";
		shareButton.style.borderRadius = "30px";
		shareButton.style.fontFamily = "neue-haas-grotesk-display, sans-serif";
		shareButton.style.fontWeight = "600";
		shareButton.style.alignItems = "left";

		saveButton.style.backgroundColor = "#ffffff";
		saveButton.style.border = "none";
		saveButton.style.color = "#212121";
		saveButton.style.padding = "8px 15px";
		saveButton.style.textAlign = "center";
		saveButton.style.textDecoration = "none";
		saveButton.style.fontSize = "20px";
		saveButton.style.borderRadius = "30px";
		saveButton.style.fontFamily = "neue-haas-grotesk-display, sans-serif";
		saveButton.style.fontWeight = "600";
		saveButton.style.alignItems = "left";
	} else {
		shareButton.style.display = "none";
		saveButton.style.display = "none";
	}
});
let prevButton = document.getElementById("button-previous");
let nextButton = document.getElementById("button-next");
let carouselRow = document.getElementById("carousel-row");
let tree = document.getElementById("tree-table")
let apple = document.getElementById('apple');
let orange = document.getElementById('orange');
let pear = document.getElementById('pear');

/* Keeping track of which slide we are on */
let n = 0;

/* Define slide width */
slideWidth = 696;

function showNextSlide() {
	n = n + 1;
	let pixFromLeft = -slideWidth * n;
	carouselRow.style.left = pixFromLeft +'px';
	checkControls()
}

nextButton.onclick = showNextSlide;


function showPrevSlide() {
	n = n - 1;
	let pixFromLeft = -slideWidth * n;
	carouselRow.style.left = pixFromLeft + 'px';
	checkControls()
}

prevButton.onclick = showPrevSlide;


/* Total number of slides */
let totalImages = document.getElementsByClassName("description-container").length;


function checkControls() {
	if (n == 0) {
		prevButton.classList.add('hidden')
	}
	else if (prevButton.classList.contains("hidden")) {
		prevButton.classList.remove('hidden')
	}

	if (n == totalImages - 1) {
		nextButton.classList.add('hidden')
	}
	else if (nextButton.classList.contains("hidden")) {
		nextButton.classList.remove('hidden')
	}
}

/* Clicking on Tree */
function showRandomFruit() {
	let i = Math.floor(Math.random() * totalImages);
	n = i;
	let pixFromLeft = -slideWidth * n;
	carouselRow.style.left = pixFromLeft + 'px';
	checkControls()
	console.log(i)
}

tree.onclick = showRandomFruit;

/* Clicking on Apple icon */
function showApple() {
	n = 0
	let pixFromLeft = -slideWidth * n;
	carouselRow.style.left = pixFromLeft + 'px';
	checkControls()
}
apple.onclick = showApple;

/* Clicking on Orange icon */
function showOrange() {
	n = 1
	let pixFromLeft = -slideWidth * n;
	carouselRow.style.left = pixFromLeft + 'px';
	checkControls()
}
orange.onclick = showOrange;

/* Clicking on Pear icon */
function showPear() {
	n = 2
	let pixFromLeft = -slideWidth * n;
	carouselRow.style.left = pixFromLeft + 'px';
	checkControls()
}
pear.onclick = showPear;

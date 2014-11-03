$(document).ready(function () {

	init();

});

function init() {

	ieTest();

}

function ieTest() {
	var ie_upto10 = /MSIE \d/.test(navigator.userAgent),
		ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent),
		isIe = ie_upto10 || ie_11up;

	if (isIe) {
		$('html').addClass('IE');
	}
}
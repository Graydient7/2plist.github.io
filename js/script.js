function handleResize() {
	let height = $(window).height();
	let remainingHeight = (height - 100) + "px";

	$("#list").css('height', remainingHeight)
	$("#additional-information").css('height', remainingHeight)
	$("#info").css('height', remainingHeight)
};

handleResize();
$(window).resize(handleResize);

var c = 0;

function cueCSS(){
	if (c > 25 && c < 170) {
		$("*").css('color', 'black');
		$("hr").css('border', '1px solid black');
	} else {
		$("*").css('color', 'white')
		$("hr").css('border', '1px solid white')
	}
}

cueCSS();
$('#hi').prop('style', 'background: hsl(' + c + ', 100%, 0%);')
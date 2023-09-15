window.onload = function() {

	var canvas = document.getElementById("canvas"),
	ct = canvas.getContext("2d"),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight,
	centerX = width / 2,
	centerY = height / 2;

	ct.fillStyle = "green";
	ct.fillRect(0, 0, width, height);

}

/*
	object moving oscillation(repetitive) way.
*/

window.onload = function () {

	// Get the canvas and set up the context object
	let canvas = document.getElementById("canvas"),
	ct = canvas.getContext("2d"),

	// Set up the width and height of the canvas 
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight,
	
	// Get the center of the window
	centerX = width/2, 
	centerY = height/2;
	

	//variables for controlling the animation 
	let speed = 0.1,
	angle = 0,
	offset = 100;

	render();

	function render() {

		// Get the point
		let xp = centerX, yp = centerY + Math.sin(angle) * offset

		// clear screen 
		ct.clearRect(0, 0, width * 2, height * 2);

		// draw circle in (xP, yP) point
		ct.beginPath();
		ct.arc(xp, yp, 20, 0, Math.PI * 2, false);
		ct.fill()

		// Increase the angle
		angle += speed;

		requestAnimationFrame(render);
	}

}

// Draw a sin graph 
window.onload = function() {

	// Get the canvas and set up the context object for drawing 2D
	let canvas = document.getElementById("canvas"),
	ct = canvas.getContext("2d"),

	// Set up and get the  the width and height of the canvas
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight,

	// X and Y axis of the graph scales
	scaleX = 120,
	scaleY = 120;

	// Translate the origin of the coordinate system 
	ct.translate(width/10, height/2);
	// Reverse the y axis
	ct.scale(1, -1)


	// Increase the angle(radians) 
	for(let angle = 0; angle < Math.PI * 2; angle += 0.01) {

		// Get a point based on angle and sin value
		let xP = angle * scaleX ,
		yP = Math.sin(angle) * scaleY;

		// Draw a small rectangle in that point 
		ct.fillRect( xP, yP, 2, 2);
	}

}

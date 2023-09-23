window.onload = function() {
	var canvas = document.getElementById("canvas"),
	ct = canvas.getContext("2d"),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight,
	cx = width/2;
	cy = height/2;

	const sun = particle.create(cx, cy, 0, 0, 50);
	sun.mass = 500000;

	const earth = particle.create(cx + 100, cy - 100, 3, 0, 10);
	earth.mass = 1000;

	//update();
	
	// TODO: Earth moving away from the sun. why is that?
	// Check the distanceTo, angleTO and gravitate to function; 
	// Check the client program (this program)
	
	function update() {
		ct.clearRect(0, 0, width, height);

		ct.beginPath();
		ct.arc(sun.position.getX(), sun.position.getY(), sun.radius, 0, Math.PI * 2, false);

		ct.arc(earth.position.getX(), earth.position.getY(), earth.radius, 0, Math.PI * 2, false);
		ct.fill();

		earth.gravitateTo(sun);
		earth.update();

		requestAnimationFrame(update);
	}
}

window.onload = function() {

	var canvas = document.getElementById("canvas"),
	ct = canvas.getContext("2d"),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight,
	cx = width/2;
	cy = height/2;

	const sun = particle.create(cx, cy, 0, 0, 50);
	const earth = particle.create(cx, cy - 250, 5,   Math.PI, 10);

	sun.mass = 6000;

	update();
	
	
	function update() {

		ct.clearRect(0, 0, width, height);

		// Add velocity to position
		earth.update();
		// Add gravity to velocity
		earth.gravitateTo(sun);

		// Render sun
		ct.beginPath();
		ct.fillStyle = "yellow";
		ct.arc(sun.position.getX(), sun.position.getY(), sun.radius, 0, Math.PI * 2, false);
		ct.fill()

		// Render earth
		ct.beginPath();
		ct.fillStyle = "green";
		ct.arc(earth.position.getX(), earth.position.getY(), earth.radius, 0, Math.PI * 2, false);
		ct.fill();


		requestAnimationFrame(update);
	}
}

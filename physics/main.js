window.onload = function() {
	var canvas = document.getElementById("canvas"),
	ct = canvas.getContext("2d"),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight,
	cx = width/2;
	cy = height/2;

	p = particle.create(0, height, 10, 3 * Math.PI/2);
	acceleration = vector.create(0.1, 0.1);


	//update();

	function update() {
		ct.clearRect(0, 0, width, height);

		p.accelerate(acceleration);
		p.update();

		ct.beginPath();
		ct.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2, false);
		ct.fill();


		requestAnimationFrame(update);
	}
}

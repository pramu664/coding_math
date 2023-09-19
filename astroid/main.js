window.onload = function () {
	const canvas = document.getElementById("canvas");
	const ct = canvas.getContext("2d");
	const width = canvas.width = window.innerWidth;
	const height = canvas.height = window.innerHeight;

	// Define acceleration vector 
	const acceleration = vector.create(0.01, 0.01)

	const p = particle.create(0, height, 3, (3 * Math.PI/ 2));

	

	update();

	function update() {

		ct.clearRect(0, 0, width, height);
		 ct.beginPath();
		ct.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2, false);
		ct.fill();

		// apply acceleration
		p.velocity.addTo(acceleration);

		p.update();

		requestAnimationFrame(update);
	}

};


window.onload = function () {
	const canvas = document.getElementById("canvas");
	const ct = canvas.getContext("2d");
	const width = canvas.width = window.innerWidth;
	const height = canvas.height = window.innerHeight;

	// Define acceleration vector 
	const acceleration = vector.create(-0.1, 0)

	
	const particles = [];
	for (let i = 0; i < 1000; i++) {
		particles.push(particle.create(width/2, height/2, Math.random() * 5, Math.random() * Math.PI * 2));
	}



	update();

	function update() {

		ct.clearRect(0, 0, width, height);

		for (let i = 0; i < particles.length; i++) {

			ct.beginPath();
			ct.arc(particles[i].position.getX(), particles[i].position.getY(), 3, 0, Math.PI * 2, false);
			ct.fill();

			// apply acceleration
			particles[i].velocity.addTo(acceleration);

			particles[i].update();

		}

		requestAnimationFrame(update);
	}

};


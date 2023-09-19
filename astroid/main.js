window.onload = function () {
	const canvas = document.getElementById("canvas");
	const ct = canvas.getContext("2d");
	const width = canvas.width = window.innerWidth;
	const height = canvas.height = window.innerHeight;


	// Create hundred particles
	const particles = [];
	for (let i = 0; i < 100; i++) {
		particles.push(particle.create(width/2, height/2, Math.random() * 5, Math.random() * Math.PI * 2));
	}

	update();

	function update() {

		ct.clearRect(0, 0, width, height);

		// Draw particles 
		for (let i = 0; i < particles.length; i++) {
			ct.beginPath();
			ct.arc(particles[i].position.getX(), particles[i].position.getY(), 10, 0, Math.PI * 2, false);
			ct.fill();
			particles[i].update();
		}

		requestAnimationFrame(update);
	}

};


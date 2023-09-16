window.onload = function() {
	const canvas = document.getElementById("canvas");
	const ct = canvas.getContext("2d");
	const width = canvas.width = window.innerWidth;
	const height = canvas.height = window.innerHeight;
	const centerX = width / 2;
	const centerY = height / 2;
	const particles = [];

	for (let i = 0; i < 1000; i++) {
		let newParticle = particle.create(centerX, centerY, Math.random() * 5, Math.random() * (Math.PI * 2), 0.1);
		particles.push(newParticle);
	}

	//update();

	function update() {

		ct.clearRect(0, 0, width, height);

		for(let i = 0; i < particles.length; i++) {
			let p = particles[i];
			ct.beginPath();
			ct.arc(p.position.getX(), p.position.getY(), 2.5, 0, Math.PI * 2, false);
			ct.fill();
			p.update();
		}

		requestAnimationFrame(update)
	}

}

window.onload = function() {
	const canvas = document.getElementById("canvas");
	const context = canvas.getContext("2d");
	const width = canvas.width = window.innerWidth;
	const height = canvas.height = window.innerHeight;


	const p = particle.create(100, height - 100, 4, Math.PI, 50);

	update();


	function update() {
		context.clearRect(0, 0, width, height);

		context.beginPath();
		context.arc(p.position.getX(), p.position.getY(), p.radius, 0, Math.PI * 2, false);
		context.fill();

		p.update();


	// TODO
		if (p.position.getX() - p.radius > width) {
			p.position.setX(-p.radius);
		}
		if (p.position.getX() + p.radius < 0) {
			p.position.setX(width + p.radius);
		}
		if (p.position.getY() - p.radius > height) {
			p.position.setY(-p.radius);
		}


		requestAnimationFrame(update);
	}
};

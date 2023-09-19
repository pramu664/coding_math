window.onload = function () {
	const canvas = document.getElementById("canvas");
	const ct = canvas.getContext("2d");
	const width = canvas.width = window.innerWidth;
	const height = canvas.height = window.innerHeight;

	const p = particle.create(width/2, height/2, 3, Math.PI / 6);
	const p2 = particle.create(width/2, height/2, 3, -(Math.PI / 6));

	update();


	function update() {

		ct.clearRect(0, 0, width, height);
		ct.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2, false);
		ct.fill();


		ct.beginPath();
		ct.arc(p2.position.getX(), p2.position.getY(), 10, 0, Math.PI * 2, false);
		ct.fill();

		p.update();
		p2.update();

		requestAnimationFrame(update);
	}

};


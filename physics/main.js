window.onload = function() {
	var canvas = document.getElementById("canvas"),
	ct = canvas.getContext("2d"),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight,

	p = particle.create(100, 100, 3, Math.PI / 6);


	update();

	function update() {
		ct.clearRect(0, 0, width, height);

		p.update();

		ct.beginPath();
		ct.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2, false);
		ct.fill();


		requestAnimationFrame(update);
	}
}

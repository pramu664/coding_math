var particle = {
	position : null,
	velocity : null,
	gravity: null,

	create: function(x, y, speed, direction, gravity) {
		const obj = Object.create(this);
		obj.position = vector.create(x, y);
		obj.velocity = vector.create(0, 0);

		obj.velocity.setMagnitude(speed);
		obj.velocity.setAngle(direction);

		obj.gravity = vector.create(0, gravity || 0);


		return obj;
	},

	accelerate: function(acceleration) {
		this.velocity.addTo(acceleration);
	},

	update: function() {
		this.position.addTo(this.velocity);
		this.velocity.addTo(this.gravity);
	}

};

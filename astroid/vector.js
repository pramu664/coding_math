var vector = {
	_x: 1,
	_y: 0,

	create: function(x, y) {
		var myObj = Object.create(this);
		myObj.setX(x);
		myObj.setY(y);
		return myObj;
	},
	
	setX: function(value) {
		this._x = value;
	},

	setY: function(value) {
		this._y = value;
	},

	getX: function() {
		return this._x;
	},

	getY: function() {
		return this._y;
	},

	setAngle: function(angle) {
		const magnitude = this.getMagnitude();
		this._x = Math.cos(angle) * magnitude;
		this._y = Math.sin(angle) * magnitude;
	},

	getAngle: function() {
		return Math.atan2(this._y, this._x);
	},

	setMagnitude: function(magnitude) {
		const angle = this.getAngle();
		this._x = Math.cos(angle) * magnitude;
		this._y = Math.sin(angle) * magnitude;
	},

	getMagnitude: function() {
		return Math.sqrt(this._x * this._x + this._y * this._y);
	},

	add(v2) {
		return vector.create(this._x + v2.getX(), this._y + v2.getY());
	},

	substract(v2) {
		return vector.create(this._x - v2.getX(), this._y - v2.getY());
	},

	addTo(v2) {
		this._x += v2.getX();
		this._y += v2.getY();
	},

	substractFrom(v2) {
		this._x -= v2.getX();
		this._y -= v2.getY();
	}

};


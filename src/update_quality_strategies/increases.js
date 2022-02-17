const TwiceAsFast = require('./twice_as_fast');

class Increases {

	static match(item) {
		return item.name === 'Aged Brie';
	}

	_update(item) {
		item.quality = Math.min(50, item.quality + 1);
	}

	update(item) {
		this._update(item);
		if (TwiceAsFast.match(item)) this._update(item);
	}
}

module.exports = Increases;

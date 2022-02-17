const TwiceAsFast = require('./twice_as_fast');

class Conjured extends TwiceAsFast {

	static match(item) {
		return item.name.startsWith('Conjured');
	}

	update(item) {
		super.update(item);
		if (TwiceAsFast.match(item)) {
			super.update(item);
		}
	}
}

module.exports = Conjured;

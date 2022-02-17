const Increases = require('./increases');
const TwiceAsFast = require('./twice_as_fast');

class BackstagePass extends Increases {

	static match(item) {
		return item.name.startsWith('Backstage pass');
	}

	update(item) {
		if (TwiceAsFast.match(item)) {
			item.quality = 0;
		} else {
			super.update(item);
			if (item.sell_in < 10) {
				super.update(item);
			}
			if (item.sell_in < 5) {
				super.update(item);
			}
		}
	}
}

module.exports = BackstagePass;

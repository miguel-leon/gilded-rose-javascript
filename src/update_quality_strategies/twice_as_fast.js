class TwiceAsFast {

	static match(item) {
		return item.sell_in < 0;
	}

	update(item) {
		item.quality = Math.max(0, item.quality - 2);
	}
}

module.exports = TwiceAsFast;

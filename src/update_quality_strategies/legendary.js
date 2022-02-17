class Legendary {

	static match(item) {
		return item.name === 'Sulfuras, Hand of Ragnaros';
	}

	update(item) {
		item.sell_in++;
	}
}

module.exports = Legendary;

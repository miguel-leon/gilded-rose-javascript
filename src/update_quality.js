const strategyFactory = require('./update_quality_strategies');


function update_quality(items) {
	return items.map(item => {
		item.sell_in--;
		const updateQuality = strategyFactory(item);
		updateQuality.update(item);
		return item;
	});
}

module.exports = update_quality;

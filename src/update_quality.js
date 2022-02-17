const strategyFactory = require('./update_quality_strategies');
const TwiceAsFast = require('./update_quality_strategies/twice_as_fast');
const Conjured = require('./update_quality_strategies/conjured');
const Increases = require('./update_quality_strategies/increases');
const Legendary = require('./update_quality_strategies/legendary');


const available_strategies = [
	Legendary,
	Increases,
	Conjured,
	TwiceAsFast
];

function update_quality(items) {
	return items.map(item => {
		item.sell_in--;
		const updateQuality = strategyFactory(item, available_strategies);
		updateQuality.update(item);
		return item;
	});
}

module.exports = update_quality;

class DefaultQualityStrategy {

	update(item) {
		item.quality = Math.max(0, item.quality - 1);
	}
}


const strategyPool = new Map();

function getStrategy(StrategyClass) {
	if (strategyPool.has(StrategyClass)) {
		return strategyPool.get(StrategyClass);
	}
	const strategy = new StrategyClass();
	strategyPool.set(StrategyClass, strategy);
	return strategy;
}

function strategyFactory(item, available_strategies) {
	for (const StrategyClass of available_strategies) {
		if (StrategyClass.match(item)) return getStrategy(StrategyClass);
	}

	return getStrategy(DefaultQualityStrategy);
}

module.exports = strategyFactory;

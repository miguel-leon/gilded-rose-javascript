const Item = require('../src/item');
const update_quality = require('../src/update_quality');


describe('Gilded Rose', function () {

	it('should lowers both values for every item', function () {
		const items = [
			new Item('+5 Dexterity Vest', 10, 20),
			new Item('Elixir of the Mongoose', 5, 7)
		];

		const result = update_quality(items);

		expect(result).toEqual([
			new Item('+5 Dexterity Vest', 9, 19),
			new Item('Elixir of the Mongoose', 4, 6)
		]);
	});

	it('should lowers quality twice as fast after negative sell_in days', function () {
		const items = [
			new Item('+5 Dexterity Vest', 0, 20),
			new Item('Elixir of the Mongoose', 0, 7)
		];

		const result = update_quality(items);

		expect(result).toEqual([
			new Item('+5 Dexterity Vest', -1, 18),
			new Item('Elixir of the Mongoose', -1, 5)
		]);
	});

	it('should lowers quality twice as fast for "Conjured" items', function () {
		const items = [
			new Item('Conjured', 1, 20),
			new Item('Conjured', 0, 7)
		];

		const result = update_quality(items);

		expect(result).toEqual([
			new Item('Conjured', 0, 18),
			new Item('Conjured', -1, 3)
		]);
	});

	it('should never set the quality to a negative', function () {
		const items = [
			new Item('+5 Dexterity Vest', 4, 0),
			new Item('Elixir of the Mongoose', 0, 0)
		];

		const result = update_quality(items);

		expect(result).toEqual([
			new Item('+5 Dexterity Vest', 3, 0),
			new Item('Elixir of the Mongoose', -1, 0)
		]);
	});

	it('should increase quality of "Aged Brie"', function () {
		const items = [
			new Item('Aged Brie', 4, 0),
			new Item('Aged Brie', 0, 0)
		];

		const result = update_quality(items);

		expect(result).toEqual([
			new Item('Aged Brie', 3, 1),
			new Item('Aged Brie', -1, 2)
		]);
	});

});

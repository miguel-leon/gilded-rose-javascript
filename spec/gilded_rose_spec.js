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

	it('should never increase quality to more than 50', function () {
		const items = [
			new Item('Aged Brie', 4, 50),
			new Item('Aged Brie', 0, 50)
		];

		const result = update_quality(items);

		expect(result).toEqual([
			new Item('Aged Brie', 3, 50),
			new Item('Aged Brie', -1, 50)
		]);
	});

	it('should not change values for "Sulfuras"', function () {
		const items = [
			new Item('Sulfuras, Hand of Ragnaros', 0, 80)
		];

		const result = update_quality(items);

		expect(result).toEqual([
			new Item('Sulfuras, Hand of Ragnaros', 0, 80)
		]);
	});

	it('should increase quality of "Backstage passes", by 2 when there are 10 days or less and by 3 when there are 5 days or less but drops to 0 after the concert', function () {
		const items = [
			new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
			new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20),
			new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20),
			new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20)
		];

		const result = update_quality(items);

		expect(result).toEqual([
			new Item('Backstage passes to a TAFKAL80ETC concert', 14, 21),
			new Item('Backstage passes to a TAFKAL80ETC concert', 9, 22),
			new Item('Backstage passes to a TAFKAL80ETC concert', 4, 23),
			new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0)
		]);
	});

	it('should perform correctly for all original items', function () {
		const items = [
			new Item('+5 Dexterity Vest', 10, 20),
			new Item('Aged Brie', 2, 0),
			new Item('Elixir of the Mongoose', 5, 7),
			new Item('Sulfuras, Hand of Ragnaros', 0, 80),
			new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
			new Item('Conjured Mana Cake', 3, 6)
		];

		const result = update_quality(items);

		expect(result).toEqual([
			new Item('+5 Dexterity Vest', 9, 19),
			new Item('Aged Brie', 1, 1),
			new Item('Elixir of the Mongoose', 4, 6),
			new Item('Sulfuras, Hand of Ragnaros', 0, 80),
			new Item('Backstage passes to a TAFKAL80ETC concert', 14, 21),
			new Item('Conjured Mana Cake', 2, 4)
		]);
	});

});

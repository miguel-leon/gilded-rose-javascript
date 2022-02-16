const Item = require('../src/item');
const update_quality = require('../src/update_quality');


describe("Gilded Rose", function () {

	it("should lowers both values for every item", function () {
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

});

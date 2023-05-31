const {Shop, Item} = require('../src/gilded_rose.js');

describe("Gilded Rose", function() {
  let items; 
  it("full test", () => {
    items = [
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 39),

      // This Conjured item does not work properly yet
      new Item("Conjured Mana Cake", 3, 6),
    ];

    const days = Number(process.argv[2]) || 2;;
    const gildedRose = new Shop(items);

    for (let day = 0; day < days; day++) {
      console.log(`\n-------- day ${day} --------`);
      console.log("name, sellIn, quality");
      items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
      gildedRose.updateQuality();
    }
  });

  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  })

  it("Should add 3 to Backstage passes quality when is between (1 to 5)", function() {
    let items = [ 
      new Item("Backstage passes to a TAFKAL80ETC concert", 1, 39),
      new Item("Backstage passes to a TAFKAL80ETC concert", 2, 39),
      new Item("Backstage passes to a TAFKAL80ETC concert", 3, 39),
      new Item("Backstage passes to a TAFKAL80ETC concert", 4, 39),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 39),
    ];
    const gildedRose = new Shop(items);
    gildedRose.updateQuality();
  
    // const backstagePasses = gildedRose.items.find(item => item.name === "Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].quality).toBe(42);
    expect(items[1].quality).toBe(42);
    expect(items[2].quality).toBe(42);
    expect(items[3].quality).toBe(42);
    expect(items[4].quality).toBe(42);
  });

});
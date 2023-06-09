class Item {
    constructor(name, sellIn, quality){
      this.name = name;
      // le nombre de jours restant pour vendre l'article.
      this.sellIn = sellIn;
      // qui dénote combien l'article est précieux.
      this.quality = quality;
    }
  }
  
  class Shop {
    constructor(items=[]){
      this.items = items;
    }
    updateQuality() {
      // pour chaque item dans l'array de class SHOP
     
      for (var i = 0; i < this.items.length; i++) {
         //Tous les items sauf 'Aged Brie' & 'Backstage passes to a TAFKAL80ETC concert'
        if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
          
          if (this.items[i].quality > 0) {
            // touts les items sauf ..
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
              this.items[i].quality = this.items[i].quality - 1;
            }
          }


        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
            if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
              if (this.items[i].sellIn < 11) {
                if (this.items[i].quality < 50) {
                  this.items[i].quality = this.items[i].quality + 1;
                }
              }
              if (this.items[i].sellIn < 6) {
                if (this.items[i].quality < 50) {
                  this.items[i].quality = this.items[i].quality + 1;
                }
              }
            }
          }
        }
        if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
          this.items[i].sellIn = this.items[i].sellIn - 1;
        }
        if (this.items[i].sellIn < 0) {
          if (this.items[i].name != 'Aged Brie') {
            if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
              if (this.items[i].quality > 0) {
                if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                  this.items[i].quality = this.items[i].quality - 1;
                }
              }
            } else {
              this.items[i].quality = this.items[i].quality - this.items[i].quality;
            }
          } else {
            // "Aged Brie" augmente sa qualité (quality) plus le temps passe, mais la qualité tombe à 0 après le concert.
            if (this.items[i].quality < 50) {
              this.items[i].quality = this.items[i].quality + 1;
            }
          }
        }
      }
  
      return this.items;
    }
  }
  module.exports = {
    Item,
    Shop
  }
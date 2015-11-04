function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var MAX_QUALITY = 50;
var MIN_QUALITY = 0;
var SELL_IN_LIMIT = 0;
var SULFURAS_NAME = 'Sulfuras, Hand of Ragnaros';
var AGED_BRIE_NAME = 'Aged Brie';
var BACKSTAGE_PASS_NAME = 'Backstage passes to a TAFKAL80ETC concert';
var BACKSTAGE_PASS_INCREASE_QUALITY_BY_TWO_LIMIT = 11;
var BACKSTAGE_PASS_INCREASE_QUALITY_BY_THREE_LIMIT = 6;

var items = [];

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item(AGED_BRIE_NAME, 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item(SULFURAS_NAME, 0, 80));
items.push(new Item(BACKSTAGE_PASS_NAME, 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    var typedItem = createTypedItem(items[i]);
    typedItem.update();
  }
}

function createTypedItem(item) {
  if(item.name == SULFURAS_NAME){
    return createSulfuras(item);
  }
  if(item.name == AGED_BRIE_NAME) {
    return createAgedBrie(item);
  }
  if( item.name == BACKSTAGE_PASS_NAME) {
    return createBackstagePass(item);
  }
  return createRegularItem(item);
}

function createSulfuras(item) {
  var sulfuras = {};
  sulfuras.update = function() {};
  return sulfuras;
}

function createAgedBrie(item) {
  var agedBrie = {};
  agedBrie.update = update;
  return agedBrie;

  function update() {
    decreaseSellIn()
    if (item.sell_in < SELL_IN_LIMIT) {
      increaseQuality(2);
      return;
    }
    increaseQuality(1);

    function increaseQuality(number){
      if(item.quality + number < MAX_QUALITY){
        item.quality += number;
      } else {
        item.quality = MAX_QUALITY;
      }
    }

    function decreaseSellIn(){
      item.sell_in -= 1;
    }
  }
}

function createBackstagePass(item) {
  var backstagePass = {};

  backstagePass.update = update;

  return backstagePass;

  function update() {
    decreaseSellIn();
    if (item.sell_in < SELL_IN_LIMIT) {
      item.quality = MIN_QUALITY;
      return;
    }
    if (isSellInInIncreaseQualityByTwoRange(item.sell_in)) {
        increaseQuality(2);
        return;
    }
    if (isSellInInIncreaseQualityByThreeRange(item.sell_in)) {
        increaseQuality(3);
        return;
    }
    increaseQuality(1);

    function isSellInInIncreaseQualityByTwoRange(sell_in) {
      return sell_in < BACKSTAGE_PASS_INCREASE_QUALITY_BY_TWO_LIMIT &&
        sell_in >= BACKSTAGE_PASS_INCREASE_QUALITY_BY_THREE_LIMIT;
    }

    function isSellInInIncreaseQualityByThreeRange(sell_in) {
      return sell_in < BACKSTAGE_PASS_INCREASE_QUALITY_BY_THREE_LIMIT &&
        sell_in >= SELL_IN_LIMIT;
    }

    function increaseQuality(number){
      if(item.quality + number < MAX_QUALITY){
        item.quality += number;
      } else {
        item.quality = MAX_QUALITY;
      }
    }

    function decreaseSellIn(){
      item.sell_in -= 1;
    }
  }
}

function createRegularItem(item) {
  var regularItem = {};
  regularItem.update = update;
  return regularItem;

  function update() {
    decreaseSellIn();
    if (item.sell_in < SELL_IN_LIMIT) {
      decreaseQuality(2);
      return;
    }
    decreaseQuality(1);

    function decreaseQuality(number){
      if(item.quality - number > MIN_QUALITY){
        item.quality -= number;
      }else{
        item.quality = MIN_QUALITY;
      }
    }

    function decreaseSellIn(){
      item.sell_in -= 1;
    }
  }
}


const StoreItem = require('./storeItem')

class Store {
      constructor() {
        this.items = [];
      }

      addItem(item) {
        if (item instanceof StoreItem && item.price > 0) {
          this.items.push(item);
        } else {
          throw new Error("Invalid store item");
        }
      }

      getStoreItemPrices() {
        return this.items.map(item => `${item.name}: $${item.price}`);
      }
    }


  module.exports = Store;

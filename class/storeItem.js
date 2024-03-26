
class StoreItem {
      constructor(name, price){
            this.name = name
            this.price = price

            }
            isValid() {
                  return this.name !== undefined &&this.price !== undefined && this.price > 0;
                }

                static compareItems(item, item2) {
                  if (item.price < item2.price) {
                    return item;
                  } else {
                    return item2;
                  }
                }

                static sumItems(...items) {
                  return items.reduce((itemTotal, item) => itemTotal + item.price, 0);
                }
              }
module.exports = StoreItem;

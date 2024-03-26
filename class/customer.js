
class Customer {
      constructor(name) {
        this.name = name;
        this.money = 0;
        this.purchases = [];
      }

      addFunds(amount) {
        this.money += amount;
      }

      withdrawFunds(amount) {
        if (amount > this.money) {
          throw new Error("No funds");
        }
        this.money -= amount;
      }
    }
module.exports = Customer

class ShoppingCart {
  constructor() {
    this.items = [];
  }
  addItem(title, numberOfItems) {
    this.items.push({
      id: this.items.length + 1,
      title: title,
      numberOfItems: numberOfItems,
    });
  }
  deleteItem(id) {
    this.items = this.items.filter((i) => i.id !== id);
    console.log('Product has been removed from the cart')
  }
  updateItem(id, updatedNumberOfItems) {
    this.items.forEach((item) => {
      if (id === item.id) {
        if (updatedNumberOfItems === 0) {
          this.deleteItem(id);
          console.log(`${item.title} has been removed from the cart`);
        } else {
          item.numberOfItems = updatedNumberOfItems;
          console.log(`${item.title} has been updated`);
        }
      }
    });
  }

  calculateTotal() {
    const total = this.items.reduce((tot, curr) => {
      return (tot += curr.numberOfItems);
    }, 0);
    return total;
  }
  displayCartItems() {
    for (const item of this.items)
      console.log(
        `No: ${item.id}\nTitle: ${item.title}\nNumber of items: ${item.numberOfItems}\n------------------`
      );
    console.log(`\nTotal: ${this.calculateTotal()}`);
  }
}

const cart = new ShoppingCart();
cart.addItem("Book", 5);
cart.addItem("Notebook", 3);
cart.addItem("Pen", 2);
cart.deleteItem(1);
cart.updateItem(2,10);
cart.displayCartItems();

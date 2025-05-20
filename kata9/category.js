const CategoryComponent = require("./categoryComponent");

class Category extends CategoryComponent {
  constructor(name, productCount) {
    super();
    this.name = name;
    this.productCount = productCount;
  }

  getProductCount() {
    return this.productCount;
  }

  showDetails(indent = "") {
    console.log(
      `${indent}Categoría: ${this.name}, Productos: ${this.productCount}`
    );
  }
}

module.exports = Category;

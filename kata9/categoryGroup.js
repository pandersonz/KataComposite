const CategoryComponent = require("./categoryComponent");

class CategoryGroup extends CategoryComponent {
  constructor(name) {
    super();
    this.name = name;
    this.children = [];
  }

  add(component) {
    this.children.push(component);
  }

  getProductCount() {
    return this.children.reduce(
      (sum, child) => sum + child.getProductCount(),
      0
    );
  }

  showDetails(indent = "") {
    this.children.forEach((child) => child.showDetails(indent));
    console.log(
      `${indent}Grupo de Categorías: ${
        this.name
      }, Productos Totales: ${this.getProductCount()}`
    );
  }
}

module.exports = CategoryGroup;

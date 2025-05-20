class CategoryComponent {
  getProductCount() {
    throw new Error("getProductCount() debe ser implementado");
  }

  showDetails(indent = "") {
    throw new Error("showDetails() debe ser implementado");
  }
}

module.exports = CategoryComponent;

const PublicationComponent = require("./publicationComponent");

class PublicationCollection extends PublicationComponent {
  constructor(name) {
    super();
    this.name = name;
    this.children = [];
  }

  add(component) {
    this.children.push(component);
  }

  getPages() {
    return this.children.reduce((sum, child) => sum + child.getPages(), 0);
  }

  showDetails(indent = "") {
    this.children.forEach((child) => child.showDetails(indent));
    console.log(
      `${indent}Colección: ${this.name}, Páginas Totales: ${this.getPages()}`
    );
  }
}

module.exports = PublicationCollection;

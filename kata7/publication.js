const PublicationComponent = require("./publicationComponent");

class Publication extends PublicationComponent {
  constructor(title, pages) {
    super();
    this.title = title;
    this.pages = pages;
  }

  getPages() {
    return this.pages;
  }

  showDetails(indent = "") {
    console.log(`${indent}Publicación: ${this.title}, Páginas: ${this.pages}`);
  }
}

module.exports = Publication;

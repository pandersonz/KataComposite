class PublicationComponent {
  getPages() {
    throw new Error("getPages() debe ser implementado");
  }

  showDetails(indent = "") {
    throw new Error("showDetails() debe ser implementado");
  }
}

module.exports = PublicationComponent;

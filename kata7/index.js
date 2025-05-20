const Publication = require("./publication");
const PublicationCollection = require("./publicationCollection");

const bookA = new Publication("Libro A", 200);
const magazineB = new Publication("Revista B", 50);

const library = new PublicationCollection("Biblioteca");
library.add(bookA);
library.add(magazineB);

library.showDetails();

const Category = require("./category");
const CategoryGroup = require("./categoryGroup");

const electronics = new Category("Electrónica", 50);
const home = new Category("Hogar", 30);

const store = new CategoryGroup("Tienda");
store.add(electronics);
store.add(home);

store.showDetails();

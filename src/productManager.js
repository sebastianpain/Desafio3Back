const fs = require("fs");

class ProductManager {
  constructor(patch) {
    this.patch = patch;
  }

  async getAllProducts() {
    try {
      const pr = await fs.promises.readFile(this.patch, "utf-8");
      const prParse = JSON.parse(pr);
      if (prParse.length <= 0) {
        console.log("No hay productos en la base de datos");
      } else {
        console.log(prParse);
      }
    } catch (error) {
      console.log("Error al leer el archivo:", error);
    }
  }

  async getProductById(id) {
    try {
      const pr = await fs.promises.readFile(this.patch, "utf-8");
      const prParse = JSON.parse(pr);
      const product = prParse.find((ele) => ele.id === id);
      if (product) {
        console.log(product);
      } else {
        console.log("No se encontró ningún producto con el ID proporcionado");
      }
    } catch (error) {
      console.log("Error al leer el archivo:", error);
    }
  }
}

module.exports = ProductManager;

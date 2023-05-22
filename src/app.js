const express = require('express');
const ProductManager = require('./src/productManager.js');

const app = express();
const productManager = new ProductManager();

// Endpoint para obtener todos los productos
app.get('/products', (req, res) => {
  const limit = req.query.limit;

  if (limit) {
    const products = productManager.getProducts().slice(0, limit);
    res.json(products);
  } else {
    const products = productManager.getProducts();
    res.json(products);
  }
});

// Endpoint para obtener un producto por su ID
app.get('/products/:pid', (req, res) => {
  const productId = req.params.pid;
  const product = productManager.getProductById(productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'El producto no existe' });
  }
});

// Iniciar el servidor
const port = 8080;
app.listen(port, () => {
  console.log(`Servidor Express iniciado en el puerto ${port}`);
});

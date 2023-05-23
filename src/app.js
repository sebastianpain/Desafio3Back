const express = require ('express');
const app= express();
const productManager = require('../src/productManager.js')

manager= new productManager('./productos.json'); 

app.get('/products', async (req,res)=>{
    try{
        const limit = req.query.limit;
        let products = await manager.getProducts();

        if(limit){
            res.json(products.slice(0,limit));
            }else{
                res.json(products)
        }
    } catch(error){
        res.status(500).json({error:'Error al obtener los productos'});
    }
});

app.get('/products/:pid', async (req, res) => {
    try{
        const productId = parseInt(req.params.pid);
        const product = await manager.getProductById(productId);

        if (product){
            res.json(product);
        }else{
            res.status(404).json({error:'Producto no encontrado'});
        }
    }catch (error){
        res.status(500).json({error:'Error al obtener el producto'});
    }
});

app.listen('8000', ()=>{
    console.log('Server escuchado en puerto 8000')
} )
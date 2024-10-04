const ProductDAO = require('../models/productModel');

// 한 페이지에 여러 모듈 등록 가능
module.exports.getAllProducts = (req, res)=>{
    try {
        const productList = ProductDAO.findAll();
        //res.send(productList);
        res.status(200).json(productList);
    } catch (err) {
        res.status(500).json({"message": "getAllProducts 오류!"});
    }
}

module.exports.getProductById = (req, res)=>{
    const id = req.params.id;
    console.log('>>> 특정 상품 조회 id:', id);
    try {
        const product = ProductDAO.findById(id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({"message": "getProductById 오류!"});
    } 
}

module.exports.createProduct = (req, res)=>{
    const newProduct = {
        name: req.body.name,
        price: req.body.price,
        company: req.body.company,
        year: req.body.year
    }
    try {
        ProductDAO.createProduct(newProduct);
        const product = ProductDAO.findAll();
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({"message": "getProductById 오류!"});
    } 
}

module.exports.modifyProductById = (req, res)=>{
    console.log('특정 상품 수정');
    const id = req.body.id;
    const updateProduct = {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        company: req.body.company,
        year: req.body.year
    };

    try {
        ProductDAO.updateProduct(id, updateProduct);
        const product = ProductDAO.findAll();
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({"message": "getProductById 오류!"});
    } 
}

module.exports.deleteProductById = (req, res)=>{
    console.log('특정 상품 삭제');
    try {
        ProductDAO.deleteProductById(req.body.id);
        const product = ProductDAO.findAll();
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({"message": "getProductById 오류!"});
    } 
}

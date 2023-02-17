const productModel = require('../model/productModel');
const { isValidObjectId,isValidName } = require("../middleware/validation")

const createProduct = async function (req, res) {
    const getdata = req.body;
    const savedata = await productModel.create(getdata);
    res.send({ mesg: savedata });
}

const getUserData = async function (req, res) {
    let userId = req.params.userId
    let productdetail = await productModel.find({ userId: userId });
    res.status(200).send({ msg: 'success', data: productdetail })
}
const updateProducts = async function (req, res) {
    let data = req.body
    let { productId } = data
    let product = await productModel.findById({ _id: productId })
    if (!product) {
        return res.status(404).send({ status: false, message: "Product not found" })
    }
    let updatedProduct = await productModel.findByIdAndUpdate({ _id: product.id }, data, { new: true })
    res.status(200).send({ msg: 'success', updatedProduct })
}

const deleteProducts = async function (req, res) {
    try {
        let data = req.body
        let { productId } = data
        let product = await productModel.findById({ _id: productId })
        if (!product) {
            return res.status(404).send({ status: false, message: "Product not found" })
        }
        await product.remove();
        res.status(200).send({ msg: 'successfully deleted', })


    } catch (err) {
        res.status(500).send({ status: false, message: err })
    }
}




module.exports = { createProduct, getUserData, updateProducts, deleteProducts };
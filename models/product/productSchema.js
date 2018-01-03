const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    name:String,
    price:Number
}) 

const Product=mongoose.model('Product',productSchema);
module.exports = Product;
module.exports.getProductById = (id) => {
    return new Promise((resolve, reject) => {

        Product.findOne({ _id: id })
            .exec((err, res) => {
                err ? reject(err) : resolve(res);
            })

    })
}
module.exports.getProductByIds = (ids) => {
    return new Promise((resolve, reject) => {

        Product.find({
            _id: {
                $in: ids
            }
        }).exec((err, res) => {
            err ? reject(err) : resolve(res);
        })

    })
}
module.exports.getListOfProducts = () => {
    return new Promise((resolve, reject) => {
        Product.find({})
            .exec((err, res) => {
                err ? reject(err) : resolve(res);
            })

    })
}
module.exports.addProduct = ( product ) => {
    let ProductObj = new Product({
        name: product.name,
        price: product.price
    })
    return new Promise((resolve, reject) => {
        ProductObj.save((err, res) => {
            err ? reject(err) : resolve(res);
        })
    })
}
module.exports.updateProduct = ( updatedProduct ) => {
    return new Promise((resolve, reject) => {
        Product.findByIdAndUpdate(updatedProduct._id, updatedProduct)
            .exec((err, res) => {
                err ? reject(err) : resolve(res)
            })
    })
}
module.exports.removeProduct = ( id ) => {
    return new Promise((resolve, reject) => {
        Product.findByIdAndRemove(id)
            .exec((err, res) => {
                err ? reject(err) : resolve(res);
            })
    })
}

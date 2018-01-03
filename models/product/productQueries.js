const {
    GraphQLID,
    GraphQLList
} = require('graphql');
const ProductType = require('./productType');
const Product = require('./productSchema');


const query = {
    product: {
        type: ProductType,
        args: {
            _id: {
                type: GraphQLID
            }
        },
        resolve: (root, { _id }) => Product.getProductById(_id)
    },
    products: {
        type: new GraphQLList(ProductType),
        resolve: () => Product.getListOfProducts()
    }
}

module.exports = query;
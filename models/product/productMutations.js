const {
GraphQLString,
    GraphQLNonNull,
    GraphQLID,
    GraphQLInputObjectType
} = require('graphql');

const Product = require('./productSchema');
const productType = require('./productType');


const mutation = {
    addproduct: {
        type: productType,
        args: {
            product: {
                type: new GraphQLNonNull(productType.Input)
            }

        },
        resolve: (root, { product }) => Product.addProduct(product)
    },
    updateproduct: {
        type: productType,
        args: {
            updatedproduct: {
                type: new GraphQLNonNull(productType.Input)
            }
        },
        resolve: (root, { updatedproduct }) => Product.updateproduct(updatedproduct)
    },
    removeproduct: {
        type: productType,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            }
        },
        resolve: (root, { id }) => Product.removeproduct(id)

    }

}

module.exports = mutation;
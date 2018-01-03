const express = require('express');
const graphqlHTTP = require('express-graphql');
const DataLoader = require('dataloader');
require('./models/connection')

const Client = require('./models/client/clientSchema');
const Bank = require('./models/bank/bankSchema');
const Product = require('./models/product/productSchema');
const schema = require('./schema');

const PORT = process.env.PORT || 4000;
const server = express();

const createLoaders = () => {
    let clientLoader = new DataLoader(keys => Client.getClientByIds(keys));
    let bankLoader = new DataLoader(keys => Bank.getBankByIds(keys));
    let productLoader = new DataLoader(keys => Product.getProductByIds(keys))

    return {
        client: clientLoader,
        bank: bankLoader,
        product: productLoader
    }
}

server.use('/graphql', graphqlHTTP(res => {

    let loaders = createLoaders();
    return {
        context: { loaders },
        schema,
        graphiql: true
    }
}))

server.listen(PORT, () => {
    console.log('listening on ' + PORT);
})
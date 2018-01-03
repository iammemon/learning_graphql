const {
    GraphQLSchema,
    GraphQLObjectType
} = require('graphql');
const bankQueries = require('./models/bank/bankQueries')
const bankMutation = require('./models/bank/bankMutations');
const clientQueries = require('./models/client/clientQueries')
const clientMutation = require('./models/client/clientMutations');
const productQueries=require('./models/product/productQueries');
const productMutation=require('./models/product/productMutations');
const invoiceQueries = require('./models/invoice/invoiceQueries');
const invoiceMutation = require('./models/invoice/invoiceMutations');

let RootQuery = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        bank: bankQueries.bank,
        banks: bankQueries.banks,
        client:clientQueries.client,
        clients:clientQueries.clients,
        product:productQueries.product,
        products:productQueries.products,
        invoice:invoiceQueries.invoice,
        invoices:invoiceQueries.invoices
    })
})

let RootMutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        addBank: bankMutation.addBank,
        updateBank:bankMutation.updateBank,
        removeBank:bankMutation.removeBank,
        addClient: clientMutation.addClient,
        updateClient: clientMutation.updateClient,
        removeClient: clientMutation.removeClient,
        addproduct: productMutation.addproduct,
        updateproduct: productMutation.updateproduct,
        removeproduct: productMutation.removeproduct,
        addInvoice: invoiceMutation.addInvoice,
        updateInvoice: invoiceMutation.updateInvoice,
        removeInvoice: invoiceMutation.removeInvoice,
    })
})

let Schema = new GraphQLSchema({
    query: RootQuery,
    mutation:RootMutation
})

module.exports = Schema;
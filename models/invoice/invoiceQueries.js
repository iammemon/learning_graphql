const {
    GraphQLID,
    GraphQLList
} = require('graphql');
const InvoiceType = require('./invoiceType');
const Invoice = require('./invoiceSchema');


const query = {
    invoice: {
        type: InvoiceType,
        args: {
            _id: {
                type: GraphQLID
            }
        },
        resolve: Invoice.getInvoiceById
    },
    invoices: {
        type: new GraphQLList(InvoiceType),
        resolve: Invoice.getListOfInvoices
    }
}

module.exports = query;
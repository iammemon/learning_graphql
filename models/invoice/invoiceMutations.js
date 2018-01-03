const {
    GraphQLString,
    GraphQLNonNull,
    GraphQLID,
    GraphQLInputObjectType
} = require('graphql');

const Invoice = require('./invoiceSchema');
const InvoiceType = require('./invoiceType');


const mutation = {
    addInvoice: {
        type: InvoiceType,
        args: {
            invoice: {
                type: new GraphQLNonNull(InvoiceType.Input)
            }

        },
        resolve:(root,{invoice})=> Invoice.addInvoice(invoice)
    },
    updateInvoice: {
        type: InvoiceType,
        args: {
            updatedInvoice: {
                type: new GraphQLNonNull(InvoiceType.Input)
            }
        },
        resolve: (root, { updatedInvoice })=> Invoice.updateInvoice(updatedInvoice)
    },
    removeInvoice: {
        type: InvoiceType,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            }
        },
        resolve:(root,{id})=> Invoice.removeInvoice(id)

    }

}

module.exports = mutation;
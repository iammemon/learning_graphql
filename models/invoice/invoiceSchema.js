const mongoose = require('mongoose');

const productInfoSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: Number,
    rate: Number,
    discount: Number
})


const invoiceSchema = new mongoose.Schema({
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
    bank: { type: mongoose.Schema.Types.ObjectId, ref: 'Bank' },
    status: {
        type: String,
        enum: ['pending', 'done'],
        default: 'pending'
    },
    products: [productInfoSchema],
    issueDate: mongoose.Schema.Types.Date,
    dueDate: mongoose.Schema.Types.Date
})

const Invoice = mongoose.model('Invoice', invoiceSchema);
module.exports = Invoice;
module.exports.getInvoiceById = (id) => {
    return new Promise((resolve, reject) => {

        Invoice.findOne({ _id: id })
            .exec((err, res) => {
                err ? reject(err) : resolve(res);
            })

    })
}
module.exports.getListOfInvoices = () => {
    return new Promise((resolve, reject) => {
        Invoice.find({})
            .exec((err, res) => {
                err ? reject(err) : resolve(res);
            })

    })
}
module.exports.addInvoice = (invoice) => {
    let InvoiceObj = new Invoice({
        client: invoice.client,
        bank: invoice.bank,
        products: invoice.products,
        issueDate: invoice.issueDate,
        dueDate: invoice.dueDate

    })
    return new Promise((resolve, reject) => {
        InvoiceObj.save((err, res) => {
            err ? reject(err) : resolve(res);
        })
    })
}
module.exports.updateInvoice = (updatedInvoice) => {
    return new Promise((resolve, reject) => {
        Invoice.findByIdAndUpdate(updatedInvoice._id, updatedInvoice)
            .exec((err, res) => {
                err ? reject(err) : resolve(res)
            })
    })
}
module.exports.removeInvoice = (id) => {
    return new Promise((resolve, reject) => {
        Invoice.findByIdAndRemove(id)
            .exec((err, res) => {
                err ? reject(err) : resolve(res);
            })
    })
}

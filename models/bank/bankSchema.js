const mongoose = require('mongoose');

let bankSchema = new mongoose.Schema({
    name: { type: String, required: true },
    iban: { type: String, required: true },
    swift: { type: String, required: true },
    address: {
        city: String,
        country: String
    }
})

let Bank = mongoose.model('Bank', bankSchema);

module.exports = Bank;

module.exports.getBankById = (id) => {
    return new Promise((resolve, reject) => {

        Bank.findOne({ _id: id })
            .exec((err, res) => {
                err ? reject(err) : resolve(res);
            })

    })
}
module.exports.getBankByIds = (ids) => {
    return new Promise((resolve, reject) => {

        Bank.find({
            _id: {
                $in: ids
            }
        }).exec((err, res) => {
            err ? reject(err) : resolve(res);
        })

    })
}
module.exports.getListOfBanks = () => {
    return new Promise((resolve, reject) => {
        Bank.find({})
            .exec((err, res) => {
                err ? reject(err) : resolve(res);
            })

    })
}
module.exports.addBank = (bank) => {
    let BankObj = new Bank({
        name: bank.name,
        iban: bank.iban,
        swift: bank.swift,
        address: bank.address
    })
    return new Promise((resolve, reject) => {
        BankObj.save((err, res) => {
            err ? reject(err) : resolve(res);
        })
    })
}
module.exports.updateBank = ( updatedBank ) => {
    return new Promise((resolve, reject) => {
        Bank.findByIdAndUpdate(updatedBank._id, updatedBank)
            .exec((err, res) => {
                err ? reject(err) : resolve(res)
            })
    })
}
module.exports.removeBank = ( id ) => {
    return new Promise((resolve, reject) => {
        Bank.findByIdAndRemove(id)
            .exec((err, res) => {
                err ? reject(err) : resolve(res);
            })
    })
}
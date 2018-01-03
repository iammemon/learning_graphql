const mongoose = require('mongoose');


const contactSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['email', 'mobile', 'phone'],
        required: true
    },
    contact: {
        type: String,
        required: true
    }

})

const clientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: {
        city: String,
        country: String
    },
    contacts: [contactSchema]
})

const Client = mongoose.model('Client', clientSchema);
module.exports = Client;
module.exports.getClientById = (id) => {
    return new Promise((resolve, reject) => {

        Client.findOne({ _id: id })
            .exec((err, res) => {
                console.log(res);
                err ? reject(err) : resolve(res);
            })

    })
}
module.exports.getClientByIds = (ids) => {
    return new Promise((resolve, reject) => {

        Client.find({
            _id: {
                $in: ids
            }
        }).exec((err, res) => {
            err ? reject(err) : resolve(res);
        })

    })
}
module.exports.getListOfClients = () => {
    return new Promise((resolve, reject) => {
        Client.find({})
            .exec((err, res) => {
                err ? reject(err) : resolve(res);
            })

    })
}
module.exports.addClient = (client) => {
    let ClientObj = new Client({
        name: client.name,
        address: client.address,
        contacts: client.contacts

    })
    return new Promise((resolve, reject) => {
        ClientObj.save((err, res) => {
            err ? reject(err) : resolve(res);
        })
    })
}
module.exports.updateClient = (updatedClient) => {
    return new Promise((resolve, reject) => {
        Client.findByIdAndUpdate(updatedClient._id, updatedClient)
            .exec((err, res) => {
                err ? reject(err) : resolve(res)
            })
    })
}
module.exports.removeClient = (id) => {
    return new Promise((resolve, reject) => {
        Client.findByIdAndRemove(id)
            .exec((err, res) => {
                err ? reject(err) : resolve(res);
            })
    })
}

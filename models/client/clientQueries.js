const {
    GraphQLID,
    GraphQLList
} = require('graphql');
const clientType = require('./clientType');
const Client = require('./clientSchema');


const query = {
    client: {
        type: clientType,
        args: {
            _id: {
                type: GraphQLID
            }
        },
        resolve:(root,{_id})=> Client.getClientById(_id)
    },
    clients: {
        type: new GraphQLList(clientType),
        resolve:()=> Client.getListOfClients()
    }
}

module.exports = query;
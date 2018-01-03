const {
GraphQLString,
    GraphQLNonNull,
    GraphQLID,
    GraphQLInputObjectType
} = require('graphql');

const Client = require('./clientSchema');
const ClientType = require('./clientType');


const mutation = {
    addClient: {
        type: ClientType,
        args: {
            client: {
                type: new GraphQLNonNull(ClientType.Input)
            }

        },
        resolve:(root,{client})=> Client.addClient(client)
    },
    updateClient: {
        type: ClientType,
        args: {
            updatedClient: {
                type: new GraphQLNonNull(ClientType.Input)
            }
        },
        resolve: (root, { updatedClient }) => Client.updateClient(updatedClient)
    },
    removeClient: {
        type: ClientType,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            }
        },
        resolve:(root,{id})=> Client.removeClient(id)

    }

}

module.exports = mutation;
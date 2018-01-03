const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
    GraphQLInputObjectType
} = require('graphql');
const AddressType = require('../submodels/AddressType');


let Input = new GraphQLInputObjectType({
    name: 'BankInput',
    fields: () => ({
        _id:{
            type:GraphQLID
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        iban: {
            type: new GraphQLNonNull(GraphQLString)
        },
        swift: {
            type: new GraphQLNonNull(GraphQLString)
        },
        address: {
            type: AddressType.Input
        }
    })
})


let BankType = new GraphQLObjectType({
    name: 'Bank',
    fields: () => ({
        _id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString,

        },
        iban: {
            type: GraphQLString
        },
        swift: {
            type: GraphQLString
        },
        address: {
            type: AddressType
        }

    })
})

module.exports = BankType;
module.exports.Input=Input;

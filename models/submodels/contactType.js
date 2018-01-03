const {
    GraphQLString,
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLEnumType
} = require('graphql')

let contactEnum=new GraphQLEnumType({
    name:'contactEnum',
    values:{
        EMAIL:{value:'email'},
        MOBILE:{value:'mobile'},
        PHONE:{value:'phone'}
    }
})

let Input = new GraphQLInputObjectType({
    name: 'ContactInput',
    fields: () => ({
        type: {
            type: new GraphQLNonNull(contactEnum)
        },
        contact: {
            type: new GraphQLNonNull(GraphQLString)
        }
    })
})

let ContactType = new GraphQLObjectType({
    name: 'Contact',
    fields: () => ({
        type: {
            type: contactEnum
        },
        contact: {
            type: GraphQLString
        }
    })
})

module.exports = ContactType;
module.exports.Input = Input;
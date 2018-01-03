const {
    GraphQLString,
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull
}=require('graphql')

let Input = new GraphQLInputObjectType({
    name: 'AddressInput',
    fields: () => ({
        city: {
            type: new GraphQLNonNull(GraphQLString)
        },
        country: {
            type: new GraphQLNonNull(GraphQLString)
        }
    })
})

let AddressType = new GraphQLObjectType({
    name: 'Address',
    fields: () => ({
        city: {
            type: GraphQLString
        },
        country: {
            type: GraphQLString
        }
    })
})

module.exports=AddressType;
module.exports.Input = Input;
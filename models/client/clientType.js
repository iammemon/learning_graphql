const {
    GraphQLID,
    GraphQLString,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLList,
    GraphQLInputObjectType
}=require('graphql');

const ContactType=require('../submodels/contactType');
const AddressType=require('../submodels/AddressType');

const Input=new GraphQLInputObjectType({
    name:'ClientInput',
    fields:()=>({
        _id: {
            type: GraphQLID
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        address: {
            type: AddressType.Input
        },
        contacts: {
            type: new GraphQLList(ContactType.Input)
        }

    })
})

const ClientType=new GraphQLObjectType({
    name:'Client',
    fields:()=>({
        _id:{
            type:GraphQLID
        },
        name:{
            type:GraphQLString
        },
        address:{
            type:AddressType
        },
        contacts:{
            type:new GraphQLList(ContactType)
        }

    })
})


module.exports=ClientType;
module.exports.Input=Input
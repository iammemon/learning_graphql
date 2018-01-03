const {
    GraphQLInputObjectType,
    GraphQLObjectType,
    GraphQLFloat,
    GraphQLID,
    GraphQLString
}=require('graphql');

const Input=new GraphQLInputObjectType({
    name:'productInput',
    fields:()=>({
        _id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        price: {
            type: GraphQLFloat
        }
    })
})

const ProductType=new GraphQLObjectType({
    name:'product',
    fields:()=>({
        _id:{
            type:GraphQLID
        },
        name:{
            type:GraphQLString
        },
        price:{
            type:GraphQLFloat
        }
    })
})

module.exports=ProductType;
module.exports.Input=Input;
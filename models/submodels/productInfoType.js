const {
 GraphQLObjectType,
 GraphQLInt,
 GraphQLFloat,
 GraphQLID,
 GraphQLInputObjectType
}=require('graphql');

const ProductType=require('../product/productType');

const Input=new GraphQLInputObjectType({
    name:'productInoInput',
    fields: () => ({
        product: {
            type: GraphQLID
        },
        quantity: {
            type: GraphQLInt
        },
        rate: {
            type: GraphQLFloat
        },
        discount: {
            type: GraphQLFloat
        }
    })
})

const ProductInfoType= new GraphQLObjectType({
    name:'productInfo',
    fields:()=>({
        product:{
            type:ProductType,
            resolve:(ProductInfo,args,{loaders})=>{
                return loaders.product.load(ProductInfo.product);
            }
        },
        quantity:{
            type:GraphQLInt
        },
        rate:{
            type:GraphQLFloat
        },
        discount:{
            type:GraphQLFloat
        }

    })
})

module.exports=ProductInfoType
module.exports.Input=Input;
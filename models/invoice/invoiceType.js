const{
    GraphQLID,
    GraphQLList,
    GraphQLString,
    GraphQLNonNull,
    GraphQLEnumType,
    GraphQLObjectType,
    GraphQLUnionType,
    GraphQLInputObjectType,
}=require('graphql');


const ProductInfoType=require('../submodels/productInfoType');
const ClientType=require('../client/clientType');
const Client=require('../client/clientSchema');
const BankType=require('../bank/bankTypeQL');
const Bank=require('../bank/bankSchema');


const statusEnumType= new GraphQLEnumType({
    name:'statusEnum',
    values:{
        PENDING:{value:'pending'},
        DONE:{value:'done'}
        
    }
})
const Input= new GraphQLInputObjectType({
    name:'InvoiceInput',
    fields:()=>({
        _id:{
            type:GraphQLID
        },
        client:{
            type:GraphQLID
        },
        bank:{
            type:GraphQLID
        },
        status:{
            type:statusEnumType
        },
        products:{
            type:new GraphQLList(ProductInfoType.Input)
        },
        dueDate:{
            type:GraphQLString
        },
        issueDate:{
            type:GraphQLString
        }

    })
})

const InvoiceType= new GraphQLObjectType({
    name:'Invoice',
    fields:()=>({
        _id:{
            type:GraphQLID
        },
        client:{
            type:ClientType,
            resolve:(invoice,args,{loaders})=>{
               return loaders.client.load(invoice.client)
            }
        },
        bank:{
            type:BankType,
            resolve:(invoice,args,{loaders})=>{
                return loaders.bank.load(invoice.bank)
            }
        },
        status:{
            type:statusEnumType
        },
        products:{
            type:new GraphQLList(ProductInfoType)
        },
        issueDate:{
            type:GraphQLString
        },
        dueDate:{
            type:GraphQLString
        }
    })
})

module.exports=InvoiceType;
module.exports.Input=Input;
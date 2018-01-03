const {
    GraphQLID,
    GraphQLList
} = require('graphql');
const BankType = require('./bankTypeQL');
const Bank =require('./bankSchema');


const query = {
    bank: {
        type:BankType,
        args:{
            _id:{
                type:GraphQLID
            }
        },
        resolve:(root,{_id})=> Bank.getBankById(_id)
    },
    banks:{
        type:new GraphQLList(BankType),
        resolve:()=> Bank.getListOfBanks()
    }
}

module.exports=query;
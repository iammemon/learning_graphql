const {
GraphQLString,
GraphQLNonNull,
GraphQLID,
GraphQLInputObjectType
}=require('graphql');

const Bank=require('./bankSchema');
const BankType=require('./bankTypeQL');
const AddressType = require('../submodels/AddressType');




const mutation={
    addBank:{
        type:BankType,
        args:{
            bank:{
                type: new GraphQLNonNull(BankType.Input)
            }
            
        },
        resolve:(root,{bank})=>Bank.addBank(bank)
    },
    updateBank:{
        type:BankType,
        args:{
            updatedBank:{
                type:new GraphQLNonNull(BankType.Input)
            }
        },
        resolve:(root,{updatedBank})=>Bank.updateBank(updatedBank)
    },
    removeBank:{
        type:BankType,
        args:{
            id:{
                type:new GraphQLNonNull(GraphQLID)
            }
        },
        resolve:(root,id)=>Bank.removeBank(id)

    }
    
}

module.exports=mutation;
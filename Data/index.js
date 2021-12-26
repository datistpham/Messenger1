import { userSchemaInter } from "../Model/User.js"

export const mongoDataMethods= {
    getAllUser: async ()=> {    
        return await userSchemaInter.find()
    },
    createUser: async (args)=> {
        const newUser= new userSchemaInter(args)
        return await newUser.save()
    }
}

import mongoose from "mongoose"
const schema= mongoose.Schema

const userSchema= schema({
    firstname: {
        type: String,
    },
    surname: {
        type: String
    },
    date: {
        type: Number
    },
    month: {
        type: Number
    },
    year: {
        type: Number
    },
    age: {
        type: Number
    },
    phonenumber: {
        type: String
    },
    gender: {
        type: String
    },
    password: {
        type: String
    }
})

export const userSchemaInter= mongoose.model('user', userSchema)

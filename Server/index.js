import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import http from 'http'
import mongoose from 'mongoose'
import {typeDefs} from '../Graphql/schema.js'
import {resolvers} from '../Graphql/resolver.js'
import { mongoDataMethods } from '../Data/index.js'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import path, {dirname} from 'path'
import cors from 'cors'
import { transporter } from './Authentication/Email/index.js'

const __filename= fileURLToPath(import.meta.url)
const __dirname= dirname(__filename)
const reqPath= path.join(__dirname,'../.env')
dotenv.config({path: reqPath})
const app= express()
const route= express.Router()
// use utilities
app.use(cors())
app.use("/graphql", express.urlencoded({
    extended: true
}))
app.use("/graphql", express.json())
app.use(route)
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
// custom function
function getRandomArbitrary(min, max) {
    return Math.ceil(Math.random() * (max - min) + min)
}
// connect MongoDb
const connectDB= async ()=> {
    try {
        await mongoose.connect('mongodb+srv://giang:giangvippro@cluster0.pffyt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {

        })
        console.log('Connect success')
    } catch (error) {
        console.error(error)
    }
}
connectDB()

// setup Apollo server
let apolloServer= null
const startServer= async() => {
    apolloServer= new ApolloServer({
        typeDefs,
        resolvers,
        context: ()=> ({mongoDataMethods})
    })
    await apolloServer.start()
    apolloServer.applyMiddleware({app, path: '/graphql'})
}

startServer()
// email authentication
route.post('/email/authentication', (req,res)=> {
    // const mailOptions= {
    //     from: `${process.env.GMAIL_ACCOUNT}`,
    //     to: `giang10a1dz@gmail.com`,
    //     subject: "Verify your account",
    //     html: `Your code is : <strong>${getRandomArbitrary(100000,1000000)}</strong> </br> Plese don't share this code with anyone.`
    // }
    // transporter.sendMail(mailOptions, function(err, info) {
    //     if(err) {
    //         console.log(err)
    //     }
    //     else {
    //         console.log('Email is sent successfully.')
    //     }
    // })
    res.send(req.body.email)
})
// run http
const httpServer= http.createServer(app)
httpServer.listen(process.env.PORT, ()=> console.log(process.env.PORT))
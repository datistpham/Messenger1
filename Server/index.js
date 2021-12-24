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
const __filename= fileURLToPath(import.meta.url)
const __dirname= dirname(__filename)
const reqPath= path.join(__dirname,'../.env')
dotenv.config({path: reqPath})
const app= express()
app.use(cors())
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
let apolloServer= null
const startServer= async() => {
    apolloServer= new ApolloServer({
        typeDefs,
        resolvers,
        context: ()=> ({mongoDataMethods})
    })
    await apolloServer.start()
    apolloServer.applyMiddleware({app})
}

startServer()
const httpServer= http.createServer(app)
httpServer.listen(process.env.PORT, ()=> console.log(process.env.PORT))
import { gql } from "apollo-server-express"
export const typeDefs = gql `
    type User {
        id: ID!,
        firstname: String!,
        surname: String, 
        date: Int, 
        month: Int, 
        year: Int, 
        age: Int,
        phonenumber: String,
        gender: String,
        password: String
    }
    type Query {
        users: [User]
    }
    type Mutation {
        createUserMessenger(
            id: ID !,
            firstname: String,
            surname: String, 
            date: Int, 
            month: Int, 
            year: Int, 
            age: Int,
            phonenumber: String,
            gender: String,
            password: String
        ): User
    }
`
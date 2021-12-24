import { useQuery } from "react-query"
import { GraphQLClient, gql } from "graphql-request"
const API_URL= `http://localhost:4000/graphql`
const grapQLClient= new GraphQLClient(API_URL)

export const useGetPosts= ()=> {
    return useQuery("get-alluser", async ()=> {
        const { getPostList }= await grapQLClient.request(gql `
            query {
                users {
                    firstname
                    surname
                    age
                }
            }
        `)
        return getPostList
    })
}


import { useQuery } from "react-query"
import {  gql, request } from "graphql-request"
const endpoint= "http://localhost:4000/graphql"

export const useGetPosts= ()=> {
    return useQuery("users", async () => {
        const data = await request(
          endpoint,
          gql`
            query {
              users {
                age
                firstname
                surname
                date
                month
                year
              }
            }
          `
        );
        return data;
      });
}
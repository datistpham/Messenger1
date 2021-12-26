
export const resolvers= {
    Query: {
        users: async(parent, args, context)=> await context.mongoDataMethods.getAllUser()
    },
    Mutation: {
        createUserMessenger: async(parent, args, context)=> await context.mongoDataMethods.createUser(args)
    }
}

const express = require('express')
const expressGraphQL = require('express-graphql')
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require('graphql')

app = express()
const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'HelloWorld',
        fields: ()=>({
            message:{
                type:GraphQLString,
                resolve: ()=>  'Hello World!'
            }
        })
    })
})

app.use('/graphql', expressGraphQL({
    graphiql:true,
    schema:schema
    
}))
app.listen(5000., ()=> console.log('Server Running'))




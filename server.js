const express = require('express')
const expressGraphQL = require('express-graphql')
const {
    GraphQLSchema,
    GraphQLObjectType
} = require('graphql')

app = express()
app.use('/graphql', expressGraphQL({
    graphiql:true,
    
}))
app.listen(5000., ()=> console.log('Server Running'))




const path = require('path');

const express = require('express');
// const { buildSchema } = require('Graphql');
const { loadFilesSync } = require('@grapgql-tools/load-files');

const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema')


const typesArray = loadFilesSync(path.join(__dirname, '**/*'));
const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));



const schema = makeExecutableSchema({
    tyDefs: typesArray,
    resolvers: resolversArray,
});





const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}))

app.listen(3000, () => {
    console.log('Running Graphql server...')
})
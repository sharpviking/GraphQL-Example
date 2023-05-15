const path = require('path');

const express = require('express');
// const { buildSchema } = require('Graphql');
const { ApolloServer } = require('apollo-server-express')

const { loadFilesSync } = require('@grapgql-tools/load-files');


const { makeExecutableSchema } = require('@graphql-tools/schema')


const typesArray = loadFilesSync(path.join(__dirname, '**/*'));
const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));

async function startApolloServer() {
    const app = express()
    const schema = makeExecutableSchema({
        tyDefs: typesArray,
        resolvers: resolversArray,
    });

    const server = new ApolloServer({

        schema
    });
    await server.start();
    server.applyMiddleware({ app, path: '/graphql' });

    app.listen(3000, () => {
        console.log('Running Graphql server...')

    })

};
startApolloServer()
// import json-server
const jsonServer = require('json-server');

// Create json server
const mediaPlayerServer = jsonServer.create();

// create connection to db.json. It uses a method 'router'
const router = jsonServer.router('db.json');

// create a middleware
const middleware = jsonServer.defaults();

// use this middleware
mediaPlayerServer.use(middleware);
mediaPlayerServer.use(router);

const port = 5001;

mediaPlayerServer.listen(port,()=>{
    console.log(`Server is up and running in port ${port}`)
})
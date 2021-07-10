const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        title: "My API",
        description: "Description"
    },
    host: "localhost:3000",
    schemes: ['http']
}

const outputFile = './swagger_output.json'
const endpointsFiles = ["./src/routes/endereco.routes.ts"
,"./src/controllers/endereco.controller.ts"]

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as: index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc)
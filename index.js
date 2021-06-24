'use strict'

var express = require('express')
var swaggerUi = require('swagger-ui-express')

const server = process.env.API_SERVER || 'localhost:8080'

var app = express()
var options = {
  swaggerOptions: {
    url: `http://${server}/swagger.json`
  }
}
app.use('/', swaggerUi.serve, swaggerUi.setup(null, options));

app.listen(8082, () => {
  console.log(`Listening on 8082, with API server at ${server}`)
})

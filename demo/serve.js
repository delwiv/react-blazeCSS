'use strict'

const Hapi = require('hapi')
const inert = require('inert')
const server = new Hapi.Server()

server.connection({
  host: 'localhost',
  port: 8080
})

server.register(inert, (err) => {
  if (err) {
    throw err
  }

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'dist',
        index: true
      }
    }
  })

  server.start((err) => {
    if (err) {
      throw err
    }

    console.log('Server running at:', server.info.uri)
  })
})

'use strict';

const Path = require('path');
const Hapi = require('hapi');

const server = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: Path.join(process.cwd(), 'dist')
            }
        }
    }
});

server.connection({ port: 8080 });

// logging options
const options = {
    opsInterval: 100000,
    reporters: [
        {
            reporter: require('good-console'),
            events: {
                log: '*',
                response: '*',
                request: '*'
            }
        },
        {
            reporter: require('good-file'),
            events: {
                log: '*',
                response: '*',
                request: '*'
            },
            config: {
                path: './logs',
                prefix: 'debug',
                rotate: 'daily'
            }
        },
        {
            reporter: require('good-file'),
            events: { log: 'error' },
            config: {
                path: './logs',
                prefix: 'error',
                rotate: 'daily'
            }
        }
    ]
};

// db options
const dbOptions = {
    url: 'mongodb://database:27017/test'
}

server.register([
    {
        register: require('good'),
        options: options
    },
    {
        register: require('inert')
    },
    {
        register: require('hapi-mongodb'),
        options: dbOptions
    }
], (err) => {

    if (err) {
        server.log(['error'], err);
    } else {

        // serve static files
        server.route({
            method: 'GET',
            path: '/dist/{filename*}',
            handler: {
                file: (request) => {
                    return request.params.filename;
                }
            }
        });

        // all hotel rooms, with optional queries
        server.route({
            method: 'GET',
            path: '/hotel-rooms',
            handler: (request, reply) => {

                const db = request.server.plugins['hapi-mongodb'].db;
                let query = {};

                // if reserved query parameter
                if (request.query.reserved) {
                    query.reserved = request.query.reserved;
                }

                // if ac query parameter
                if (request.query.ac) {
                    query.ac = request.query.ac;
                }

                db.collection('hotelrooms').find(query).toArray((err, result) => {

                    if (err) {
                        server.log(['error'], 'Could not find all hotel rooms in mongo collection');
                    }

                    reply(result);
                });

            },
            config: {
                cors: {
                    origin: ['http://mike-and-jenn.com']
                }
            }
        });

        // a hotel room
        server.route({
            method: 'GET',
            path: '/hotel-rooms/{id}',
            handler: (request, reply) => {

                const db = request.server.plugins['hapi-mongodb'].db;
                const ObjectID = request.server.plugins['hapi-mongodb'].ObjectID;

                db.collection('hotelrooms').findOne({
                    '_id': new ObjectID(request.params.id)
                }, (err, result) => {

                    if (err) {
                        server.log(['error'], 'Could not find hotel room with id: ' + request.params.id);
                    }

                    reply(result);
                });

            },
            config: {
                cors: {
                    origin: ['http://mike-and-jenn.com']
                }
            }
        });

        // reserve a hotel room
        server.route({
            method: ['PUT', 'POST', 'GET'],
            path: '/hotel-rooms/{id}/reserve',
            handler: (request, reply) => {

                const db = request.server.plugins['hapi-mongodb'].db;
                const ObjectID = request.server.plugins['hapi-mongodb'].ObjectID;

                db.collection('hotelrooms').updateOne({
                    '_id': new ObjectID(request.params.id)
                }, {
                    $set: { 'Reserved': true }
                }, (err, result) => {

                    if (err) {
                        server.log(['error'], 'Error updating reserved status for hotel room with id: ' + request.params.id);
                    }

                    reply(result);
                });
            },
            config: {
                cors: {
                    origin: ['http://mike-and-jenn.com']
                }
            }
        });

        // unreserve a hotel room
        server.route({
            method: ['PUT', 'POST', 'GET'],
            path: '/hotel-rooms/{id}/unreserve',
            handler: (request, reply) => {

                const db = request.server.plugins['hapi-mongodb'].db;
                const ObjectID = request.server.plugins['hapi-mongodb'].ObjectID;

                db.collection('hotelrooms').updateOne({
                    '_id': new ObjectID(request.params.id)
                }, {
                    $set: { 'Reserved': false }
                }, (err, result) => {

                    if (err) {
                        server.log(['error'], 'Error updating reserved status for hotel room with id: ' + request.params.id);
                    }

                    reply(result);
                });
            },
            config: {
                cors: {
                    origin: ['http://mike-and-jenn.com']
                }
            }
        });

        server.start((err) => {

            if (err) {
                server.log([error], err);
            }

            server.log(['debug'], 'Server running at: ' + server.info.uri);
        });
    }
});



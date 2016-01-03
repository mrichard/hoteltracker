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

server.connection({ port: 3000 });

// logging options
const options = {
    opsInterval: 100000,
    reporters: [
        {
            reporter: require('good-console'),
            events: {
                log: '*',
                response: '*',
                request: '*',
                ops: '*'
            }
        },
        {
            reporter: require('good-file'),
            events: {
                log: '*',
                response: '*',
                request: '*',
                ops: '*'
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

server.register([
    {
        register: require('good'),
        options: options
    },
    {
        register: require('inert')
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

        // hotel room routes
        server.route({
            method: 'GET',
            path: '/hotel-rooms',
            handler: (request, reply) => {
                reply('Here are hotel rooms');
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



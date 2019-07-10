const next = require('next');
const express = require('express');


const port = process.env.PORT || 3000;

const app = next({
    dev: process.env.NODE_ENV !== 'production'
});
const routes = require('./routes');

const handler = routes.getRequestHandler(app);

// Without express

app.prepare().then(() => {
    const server = express()
    server.use('/', express.static('static'))
    server.use(handler)
    server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
      })
});
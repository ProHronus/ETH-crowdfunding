const routes = require('next-routes')();

routes
    .add('/campaigns/new', '/campaigns/newCampaign' )
    .add('/campaigns/:address', '/campaigns/show')
    .add('/campaigns/:address/requests', '/campaigns/requests/indexRequests')
    .add('/campaigns/:address/requests/new', '/campaigns/requests/newRequest')
    .add('/relayX', '/campaigns/relayX');

module.exports = routes;  
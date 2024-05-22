const { connect, connection } = require('mongoose');

const connectionString = 'monogdb://127.0.0.1:27017/socialDB';

connect(connectionString);

module.exports = connection;
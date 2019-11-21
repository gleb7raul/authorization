var cookieParser = require('cookie-parser');
var session = require('express-session');
var MSSQLStore = require('express-mysql-session')(session);
var mssql = require('mssql');

module.exports = {
    createStore: function() {
        var config = {
            user: 'test',
            password: '12345',
            server: 'localhost',
            database: 'testdb',
            port: 8080,
            pool: {
                max: 10,
                min: 0,
                idleTimeoutMillis: 30000
            }
        };
        return new MSSQLStore(config);
    }
};
'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // add your config here
  config.middleware = [ 'userAuth', 'activityAuth' ];
  config.userAuth = {
    match: /^\/api/,
  };
  config.activityAuth = {
    match: /^\/api\/activity/,
  };
  exports.sequelize = {
    dialect: 'postgres', // support: mysql, mariadb, postgres, mssql
    database: 'auditingdb',
    host: '127.0.0.1',
    port: '5432',
    username: 'postgres',
    password: '123456',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    // delegate: 'myModel', // load all models to `app[delegate]` and `ctx[delegate]`, default to `model`
    // baseDir: 'my_model', // load all files in `app/${baseDir}` as models, default to `model`
    // exclude: 'index.js', // ignore `app/${baseDir}/index.js` when load models, support glob and array
    // more sequelize options
  };
  config.security = {
    csrf: {
      enable: false,
      gnoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
    },
    // domainWhiteList: [ 'http://localhost:3001' ],
    // domainWhiteList: '*',
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  return config;
};

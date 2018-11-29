'use strict';

module.exports = appInfo => {
  const config = exports = {};
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1542378700257_1689';
  exports.jwt = {
    secret: 'auditing123456',
  };
  // add your config here
  config.middleware = [];

  return config;
};

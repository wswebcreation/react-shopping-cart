exports.config = {
  // ====================
  // Runner Configuration
  // ====================
  runner: 'local',

  // =================
  // Service Providers
  // =================
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  sauceConnect: true,

  // ==================
  // Specify Test Files
  // ==================
  specs: [
    './e2e/**/*.spec.js'
  ],

  // ============
  // Capabilities
  // ============
  maxInstances: 100,
  capabilities: [ {
    browserName: 'chrome'
  } ],

  // ===================
  // Test Configurations
  // ===================
  //
  logLevel: 'silent',
  bail: 0,
  baseUrl: 'http://localhost:3000/',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: [ 'sauce' ],
  framework: 'jasmine',
  reporters: [ 'spec' ],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000
  },

  // =====
  // Hooks
  // =====
  before: function(capabilities, specs) {
    require('@babel/register');
  }
};

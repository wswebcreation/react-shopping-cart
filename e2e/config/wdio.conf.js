exports.config = {
  // ====================
  // Runner Configuration
  // ====================
  runner: 'local',

  // =================
  // Service Providers
  // =================
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY_EU,
  region: 'eu',

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
  capabilities: [
    {
      browserName: 'chrome',
      'goog:chromeOptions': {
        'w3c': true
      },
      'sauce:options': {
        build: process.env.BUILD_ID || 'Local run',
        screenResolution: '1600x1200',
        seleniumVersion: '3.141.59',
        extendedDebugging: true,
        ...(process.env.TUNNEL_IDENTIFIER ? { tunnelIdentifier: process.env.TUNNEL_IDENTIFIER } : {})
      }
    },
    // {
    //   browserName: 'chrome',
    //   browserVersion: 'beta',
    //   'goog:chromeOptions': {
    //     'w3c': true
    //   },
    //   'sauce:options': {
    //     build: process.env.BUILD_ID || 'Local run',
    //     screenResolution: '1600x1200',
    //     seleniumVersion: '3.141.59',
    //     extendedDebugging: true,
    //     ...(process.env.TUNNEL_IDENTIFIER ? { tunnelIdentifier: process.env.TUNNEL_IDENTIFIER } : {})
    //   }
    // }
  ],

  // ===================
  // Test Configurations
  // ===================
  //
  logLevel: 'silent',
  bail: 0,
  baseUrl: 'http://localhost:5000/',
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
  },
  beforeTest: function(test) {
    const jobName = test.fullName.split(test.title)[ 0 ].trim();
    console.log(`SauceOnDemandSessionID=${ browser.sessionId } job-name=${ jobName }`);
  }
};

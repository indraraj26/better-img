module.exports = function(config) {
  config.set({
    frameworks: ["mocha", "chai"],
    browsers: ["ChromeHeadless", "FirefoxHeadless"],
    files: [
      {
        pattern:
          "node_modules/@webcomponents/webcomponentsjs/webcomponents-sd-ce.js"
      },
      { pattern: "src/better-img/better-img.js" },
      { pattern: "test/better-img.test.js" }
    ],
    client: {
      mocha: {
        reporter: "html"
      }
    },
    singleRun: true,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    concurrency: Infinity
  });
};

// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const process = require("process");
process.env.CHROME_BIN = require("puppeteer").executablePath();

module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage"),
      require("karma-junit-reporter"),
      require('karma-sonarqube-reporter'),
      require("@angular-devkit/build-angular/plugins/karma")
    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true, // removes the duplicated traces
    },
    preprocessors: { "./src/**/*.ts": ["coverage"] },
    coverageReporter: {
      subdir: ".",
      reporters: [
        { type: "html", dir: "artifacts/coverage/html" },
        { type: "cobertura", dir: "artifacts/coverage" },
        { type: 'lcov', dir: "artifacts/coverage" }
      ],
    },
    reporters: ['junit', 'coverage', 'progress', 'sonarqube'],
    junitReporter: {
      outputFile: require('path').resolve(__dirname, './artifacts/tests/junit/junit-frontend-test-results.xml')
    },
    sonarqubeReporter: {
      filePattern: '**/*spec.ts', // test files glob pattern
      encoding: 'utf-8', // test files encoding
      outputFolder: './artifacts/coverage/sonar-qube', // report destination
      legacyMode: false, // report for Sonarqube < 6.2 (disabled)
      reportName: 'sonarqube-report.xml',
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    restartOnFileChange: true,
    browsers: ["ChromeHeadlessNoSandbox"],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox"],
      },
    },
  });
};

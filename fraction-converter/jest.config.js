const config = {
  coverageProvider: "v8",
  collectCoverage: true,
  coverageDirectory: "coverage", 
  coverageReporters: ["html"],
  reporters: ["default", "./utils/custom-reporter.js"],
};

module.exports = config;
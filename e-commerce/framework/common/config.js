const path = require("path");
const merge = require("deepmerge");

const withFrameworkConfig = (defaultConfig = {}) => {
  const framework = "bigcommerce";

  const frameworkNextConfig = require(path.join("../", framework, "next.config"));
  const config = merge(defaultConfig, frameworkNextConfig);

  return config;
}

module.exports = { withFrameworkConfig }

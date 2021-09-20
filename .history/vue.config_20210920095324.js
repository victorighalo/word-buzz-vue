const path = require("path");
const vueSrc = "./src";
module.exports = {
    css: {
      requireModuleExtension: false,
    },
    configureWebpack: {
      resolve: {
        alias: {
          "@": path.resolve(__dirname, vueSrc)
        },
        extensions: ['.js', '.vue', '.json']
      }
    }
  }
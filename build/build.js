"use strict";

const ora = require("ora");
const rm = require("rimraf");
const path = require("path");
const chalk = require("chalk");
const webpack = require("webpack");
const webpackConfig = require("./webpack.conf.js");
const merge = require("webpack-merge");
const config = require("./config");

let isModern = false;
let isOnly = false;

process.argv.forEach(item => {
  if (item.includes("modern")) {
    isModern = true;
  }

  if (item.includes("only")) {
    isOnly = true;
  }
});

let spinner;

function logStart(str = "") {
  spinner = ora(`Building ${str}bundle for production...`);

  spinner.start();
}

function build(webpackConfig, str) {
  return new Promise(function (resolve, reject) {
    logStart(str);

    webpack(webpackConfig, function (err, stats) {
      spinner.stop();
      if (err) {
        process.exit(1);

        throw err;
      }

      if (stats.hasErrors()) {
        console.log(stats.toString({
          colors: true
        }));

        console.log(chalk.red("\nBuild failed with errors.\n"));

        process.exit(1);
      }
      
      resolve();
    });
  });
}

(async function () {
  rm(
    config.output.path,
    async err => {
      if (err) {
        spinner.stop();

        process.exit(1);
        throw err;
      }
      let startTime = Date.now();

      await build(webpackConfig);

      console.log(
        chalk.green("Build complete in " + (Date.now() - startTime) + "ms.\n")
      );
    }
  );
})();
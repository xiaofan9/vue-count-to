import CountTo from "./count-to";
import pkg from "../package.json";

function install(app) {
  app.component("count-to", CountTo);
}

export default { install, version: pkg.version };

export { CountTo };

import CountTo from "vue-count-to";
import pkg from "../package.json";

if (typeof window !== 'undefined') {
  window.countTo = { install, version: pkg.version, CountTo };
}

function install(app) {
  app.component("count-to", CountTo);
}

export default { install, version: pkg.version };

export { CountTo };

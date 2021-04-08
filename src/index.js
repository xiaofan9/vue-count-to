import CountTo3 from "./count-to";
import pkg from "../package.json";
import * as Vue from "vue";
import { cjsToEs } from "./utils";

let CountTo;

const keyList = Object.keys(Vue);

if (keyList.length > 1 && (!keyList.includes('default') || keyList.includes('version'))) {
  CountTo = CountTo3;
} else {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  CountTo = cjsToEs(require("vue-count-to"))();
}

if (typeof window !== 'undefined') {
  window.countTo = { install, version: pkg.version, CountTo };
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function install(app) {
  app.component("count-to", CountTo);
}

export default { install, version: pkg.version };

export { CountTo };

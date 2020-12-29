import CountTo3 from "./count-to";
import pkg from "../package.json";
import { cjsToEs } from './utils';
import * as Vue from "vue";

let CountTo;

let keyList;

try {
  keyList = Object.keys(Vue) || [];
} catch {
  keyList = [];
}

if (keyList.length > 1) {
  CountTo = CountTo3;
} else {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  CountTo = cjsToEs(require("vue-count-to"))();
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function install(app) {
  app.component("count-to", CountTo);
}

export default { install, version: pkg.version };

export { CountTo };

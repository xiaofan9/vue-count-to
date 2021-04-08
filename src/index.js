import CountTo3 from "./count-to";
import pkg from "../package.json";
import { cjsToEs } from './utils';
import * as Vue from "vue";

let CountTo;

if (Vue?.default && (typeof Vue?.default === 'function' || Vue?.default?.version.startsWith('2.'))) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  CountTo = cjsToEs(require("vue-count-to"))();
} else {
  CountTo = CountTo3;
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

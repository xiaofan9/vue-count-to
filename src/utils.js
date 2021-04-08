/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

/* webpack 内部方法 */

/* webpack/runtime/hasOwnProperty shorthand */
export function isObjHas(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* getDefaultExport function for compatibility with non-harmony modules */
export function cjsToEs(module) {
  const getter =
    module && module.__esModule
      ? function() {
          return module["default"];
        }
      : function() {
          return module;
        };

  return getter;
}

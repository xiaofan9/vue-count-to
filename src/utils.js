/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

/* webpack 内部方法 */

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

  defineExports(getter, { a: getter });

  return getter;
}

/* webpack/runtime/hasOwnProperty shorthand */
export function isObjHas(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* define getter functions for harmony exports */
export function defineExports(exports, definition) {
  for (var key in definition) {
    if (isObjHas(definition, key) && !isObjHas(exports, key)) {
      Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
    }
  }
}

import{cloneDeep}from"lodash-es";import CountTo$1 from"vue-count-to/src/vue-countTo.vue";import*as Vue from"vue";function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}var Component=cloneDeep(CountTo$1);Component.unmounted=Component.destroyed,Reflect.deleteProperty(Component,"destroyed");var CountTo,CountTo3=function(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({name:"CountTo",emits:["callback","mountedCallback"]},Component),pkg_version="1.0.10-beta.01";var keyList=Object.keys(Vue);function install(app){app.component("count-to",CountTo)}CountTo=keyList.length>1&&(!keyList.includes("default")||keyList.includes("version"))?CountTo3:function(module){return module&&module.__esModule?function(){return module.default}:function(){return module}}(require("vue-count-to"))(),"undefined"!=typeof window&&(window.countTo={install,version:pkg_version,CountTo});var index={install,version:pkg_version};export default index;export{CountTo};
//# sourceMappingURL=vue3-count-to.esm.js.map
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],e);else{var r="object"==typeof exports?e(require("vue")):e(t.Vue);for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}("undefined"!=typeof self?self:this,(function(t){return function(){var e={713:function(t){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},940:function(t,e,r){"use strict";r.r(e),r.d(e,{CountTo:function(){return Dr},default:function(){return Mr}});var n=r(713),a=r.n(n);var o=function(){this.__data__=[],this.size=0};var i=function(t,e){return t===e||t!=t&&e!=e};var u=function(t,e){for(var r=t.length;r--;)if(i(t[r][0],e))return r;return-1},s=Array.prototype.splice;var c=function(t){var e=this.__data__,r=u(e,t);return!(r<0)&&(r==e.length-1?e.pop():s.call(e,r,1),--this.size,!0)};var l=function(t){var e=this.__data__,r=u(e,t);return r<0?void 0:e[r][1]};var f=function(t){return u(this.__data__,t)>-1};var p=function(t,e){var r=this.__data__,n=u(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};function h(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}h.prototype.clear=o,h.prototype.delete=c,h.prototype.get=l,h.prototype.has=f,h.prototype.set=p;var d=h;var b=function(){this.__data__=new d,this.size=0};var y=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r};var v=function(t){return this.__data__.get(t)};var m=function(t){return this.__data__.has(t)},j="object"==typeof global&&global&&global.Object===Object&&global,_="object"==typeof self&&self&&self.Object===Object&&self,w=j||_||Function("return this")(),g=w.Symbol,V=Object.prototype,O=V.hasOwnProperty,A=V.toString,F=g?g.toStringTag:void 0;var x=function(t){var e=O.call(t,F),r=t[F];try{t[F]=void 0;var n=!0}catch(t){}var a=A.call(t);return n&&(e?t[F]=r:delete t[F]),a},S=Object.prototype.toString;var D=function(t){return S.call(t)},P=g?g.toStringTag:void 0;var q=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":P&&P in Object(t)?x(t):D(t)};var T=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)};var N,M=function(t){if(!T(t))return!1;var e=q(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},z=w["__core-js_shared__"],k=(N=/[^.]+$/.exec(z&&z.keys&&z.keys.IE_PROTO||""))?"Symbol(src)_1."+N:"";var E=function(t){return!!k&&k in t},$=Function.prototype.toString;var B=function(t){if(null!=t){try{return $.call(t)}catch(t){}try{return t+""}catch(t){}}return""},I=/^\[object .+?Constructor\]$/,R=Function.prototype,U=Object.prototype,C=R.toString,W=U.hasOwnProperty,L=RegExp("^"+C.call(W).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var G=function(t){return!(!T(t)||E(t))&&(M(t)?L:I).test(B(t))};var H=function(t,e){return null==t?void 0:t[e]};var J=function(t,e){var r=H(t,e);return G(r)?r:void 0},K=J(w,"Map"),Q=J(Object,"create");var X=function(){this.__data__=Q?Q(null):{},this.size=0};var Y=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Z=Object.prototype.hasOwnProperty;var tt=function(t){var e=this.__data__;if(Q){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return Z.call(e,t)?e[t]:void 0},et=Object.prototype.hasOwnProperty;var rt=function(t){var e=this.__data__;return Q?void 0!==e[t]:et.call(e,t)};var nt=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=Q&&void 0===e?"__lodash_hash_undefined__":e,this};function at(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}at.prototype.clear=X,at.prototype.delete=Y,at.prototype.get=tt,at.prototype.has=rt,at.prototype.set=nt;var ot=at;var it=function(){this.size=0,this.__data__={hash:new ot,map:new(K||d),string:new ot}};var ut=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var st=function(t,e){var r=t.__data__;return ut(e)?r["string"==typeof e?"string":"hash"]:r.map};var ct=function(t){var e=st(this,t).delete(t);return this.size-=e?1:0,e};var lt=function(t){return st(this,t).get(t)};var ft=function(t){return st(this,t).has(t)};var pt=function(t,e){var r=st(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function ht(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}ht.prototype.clear=it,ht.prototype.delete=ct,ht.prototype.get=lt,ht.prototype.has=ft,ht.prototype.set=pt;var dt=ht;var bt=function(t,e){var r=this.__data__;if(r instanceof d){var n=r.__data__;if(!K||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new dt(n)}return r.set(t,e),this.size=r.size,this};function yt(t){var e=this.__data__=new d(t);this.size=e.size}yt.prototype.clear=b,yt.prototype.delete=y,yt.prototype.get=v,yt.prototype.has=m,yt.prototype.set=bt;var vt=yt;var mt=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););return t},jt=function(){try{var t=J(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var _t=function(t,e,r){"__proto__"==e&&jt?jt(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r},wt=Object.prototype.hasOwnProperty;var gt=function(t,e,r){var n=t[e];wt.call(t,e)&&i(n,r)&&(void 0!==r||e in t)||_t(t,e,r)};var Vt=function(t,e,r,n){var a=!r;r||(r={});for(var o=-1,i=e.length;++o<i;){var u=e[o],s=n?n(r[u],t[u],u,r,t):void 0;void 0===s&&(s=t[u]),a?_t(r,u,s):gt(r,u,s)}return r};var Ot=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n};var At=function(t){return null!=t&&"object"==typeof t};var Ft=function(t){return At(t)&&"[object Arguments]"==q(t)},xt=Object.prototype,St=xt.hasOwnProperty,Dt=xt.propertyIsEnumerable,Pt=Ft(function(){return arguments}())?Ft:function(t){return At(t)&&St.call(t,"callee")&&!Dt.call(t,"callee")},qt=Array.isArray;var Tt=function(){return!1},Nt="object"==typeof exports&&exports&&!exports.nodeType&&exports,Mt=Nt&&"object"==typeof module&&module&&!module.nodeType&&module,zt=Mt&&Mt.exports===Nt?w.Buffer:void 0,kt=(zt?zt.isBuffer:void 0)||Tt,Et=/^(?:0|[1-9]\d*)$/;var $t=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&Et.test(t))&&t>-1&&t%1==0&&t<e};var Bt=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},It={};It["[object Float32Array]"]=It["[object Float64Array]"]=It["[object Int8Array]"]=It["[object Int16Array]"]=It["[object Int32Array]"]=It["[object Uint8Array]"]=It["[object Uint8ClampedArray]"]=It["[object Uint16Array]"]=It["[object Uint32Array]"]=!0,It["[object Arguments]"]=It["[object Array]"]=It["[object ArrayBuffer]"]=It["[object Boolean]"]=It["[object DataView]"]=It["[object Date]"]=It["[object Error]"]=It["[object Function]"]=It["[object Map]"]=It["[object Number]"]=It["[object Object]"]=It["[object RegExp]"]=It["[object Set]"]=It["[object String]"]=It["[object WeakMap]"]=!1;var Rt=function(t){return At(t)&&Bt(t.length)&&!!It[q(t)]};var Ut=function(t){return function(e){return t(e)}},Ct="object"==typeof exports&&exports&&!exports.nodeType&&exports,Wt=Ct&&"object"==typeof module&&module&&!module.nodeType&&module,Lt=Wt&&Wt.exports===Ct&&j.process,Gt=function(){try{var t=Wt&&Wt.require&&Wt.require("util").types;return t||Lt&&Lt.binding&&Lt.binding("util")}catch(t){}}(),Ht=Gt&&Gt.isTypedArray,Jt=Ht?Ut(Ht):Rt,Kt=Object.prototype.hasOwnProperty;var Qt=function(t,e){var r=qt(t),n=!r&&Pt(t),a=!r&&!n&&kt(t),o=!r&&!n&&!a&&Jt(t),i=r||n||a||o,u=i?Ot(t.length,String):[],s=u.length;for(var c in t)!e&&!Kt.call(t,c)||i&&("length"==c||a&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||$t(c,s))||u.push(c);return u},Xt=Object.prototype;var Yt=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Xt)};var Zt=function(t,e){return function(r){return t(e(r))}},te=Zt(Object.keys,Object),ee=Object.prototype.hasOwnProperty;var re=function(t){if(!Yt(t))return te(t);var e=[];for(var r in Object(t))ee.call(t,r)&&"constructor"!=r&&e.push(r);return e};var ne=function(t){return null!=t&&Bt(t.length)&&!M(t)};var ae=function(t){return ne(t)?Qt(t):re(t)};var oe=function(t,e){return t&&Vt(e,ae(e),t)};var ie=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e},ue=Object.prototype.hasOwnProperty;var se=function(t){if(!T(t))return ie(t);var e=Yt(t),r=[];for(var n in t)("constructor"!=n||!e&&ue.call(t,n))&&r.push(n);return r};var ce=function(t){return ne(t)?Qt(t,!0):se(t)};var le=function(t,e){return t&&Vt(e,ce(e),t)},fe="object"==typeof exports&&exports&&!exports.nodeType&&exports,pe=fe&&"object"==typeof module&&module&&!module.nodeType&&module,he=pe&&pe.exports===fe?w.Buffer:void 0,de=he?he.allocUnsafe:void 0;var be=function(t,e){if(e)return t.slice();var r=t.length,n=de?de(r):new t.constructor(r);return t.copy(n),n};var ye=function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e};var ve=function(t,e){for(var r=-1,n=null==t?0:t.length,a=0,o=[];++r<n;){var i=t[r];e(i,r,t)&&(o[a++]=i)}return o};var me=function(){return[]},je=Object.prototype.propertyIsEnumerable,_e=Object.getOwnPropertySymbols,we=_e?function(t){return null==t?[]:(t=Object(t),ve(_e(t),(function(e){return je.call(t,e)})))}:me;var ge=function(t,e){return Vt(t,we(t),e)};var Ve=function(t,e){for(var r=-1,n=e.length,a=t.length;++r<n;)t[a+r]=e[r];return t},Oe=Zt(Object.getPrototypeOf,Object),Ae=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)Ve(e,we(t)),t=Oe(t);return e}:me;var Fe=function(t,e){return Vt(t,Ae(t),e)};var xe=function(t,e,r){var n=e(t);return qt(t)?n:Ve(n,r(t))};var Se=function(t){return xe(t,ae,we)};var De=function(t){return xe(t,ce,Ae)},Pe=J(w,"DataView"),qe=J(w,"Promise"),Te=J(w,"Set"),Ne=J(w,"WeakMap"),Me="[object Map]",ze="[object Promise]",ke="[object Set]",Ee="[object WeakMap]",$e="[object DataView]",Be=B(Pe),Ie=B(K),Re=B(qe),Ue=B(Te),Ce=B(Ne),We=q;(Pe&&We(new Pe(new ArrayBuffer(1)))!=$e||K&&We(new K)!=Me||qe&&We(qe.resolve())!=ze||Te&&We(new Te)!=ke||Ne&&We(new Ne)!=Ee)&&(We=function(t){var e=q(t),r="[object Object]"==e?t.constructor:void 0,n=r?B(r):"";if(n)switch(n){case Be:return $e;case Ie:return Me;case Re:return ze;case Ue:return ke;case Ce:return Ee}return e});var Le=We,Ge=Object.prototype.hasOwnProperty;var He=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&Ge.call(t,"index")&&(r.index=t.index,r.input=t.input),r},Je=w.Uint8Array;var Ke=function(t){var e=new t.constructor(t.byteLength);return new Je(e).set(new Je(t)),e};var Qe=function(t,e){var r=e?Ke(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)},Xe=/\w*$/;var Ye=function(t){var e=new t.constructor(t.source,Xe.exec(t));return e.lastIndex=t.lastIndex,e},Ze=g?g.prototype:void 0,tr=Ze?Ze.valueOf:void 0;var er=function(t){return tr?Object(tr.call(t)):{}};var rr=function(t,e){var r=e?Ke(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)};var nr=function(t,e,r){var n=t.constructor;switch(e){case"[object ArrayBuffer]":return Ke(t);case"[object Boolean]":case"[object Date]":return new n(+t);case"[object DataView]":return Qe(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return rr(t,r);case"[object Map]":return new n;case"[object Number]":case"[object String]":return new n(t);case"[object RegExp]":return Ye(t);case"[object Set]":return new n;case"[object Symbol]":return er(t)}},ar=Object.create,or=function(){function t(){}return function(e){if(!T(e))return{};if(ar)return ar(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();var ir=function(t){return"function"!=typeof t.constructor||Yt(t)?{}:or(Oe(t))};var ur=function(t){return At(t)&&"[object Map]"==Le(t)},sr=Gt&&Gt.isMap,cr=sr?Ut(sr):ur;var lr=function(t){return At(t)&&"[object Set]"==Le(t)},fr=Gt&&Gt.isSet,pr=fr?Ut(fr):lr,hr="[object Arguments]",dr="[object Function]",br="[object Object]",yr={};yr[hr]=yr["[object Array]"]=yr["[object ArrayBuffer]"]=yr["[object DataView]"]=yr["[object Boolean]"]=yr["[object Date]"]=yr["[object Float32Array]"]=yr["[object Float64Array]"]=yr["[object Int8Array]"]=yr["[object Int16Array]"]=yr["[object Int32Array]"]=yr["[object Map]"]=yr["[object Number]"]=yr["[object Object]"]=yr["[object RegExp]"]=yr["[object Set]"]=yr["[object String]"]=yr["[object Symbol]"]=yr["[object Uint8Array]"]=yr["[object Uint8ClampedArray]"]=yr["[object Uint16Array]"]=yr["[object Uint32Array]"]=!0,yr["[object Error]"]=yr[dr]=yr["[object WeakMap]"]=!1;var vr=function t(e,r,n,a,o,i){var u,s=1&r,c=2&r,l=4&r;if(n&&(u=o?n(e,a,o,i):n(e)),void 0!==u)return u;if(!T(e))return e;var f=qt(e);if(f){if(u=He(e),!s)return ye(e,u)}else{var p=Le(e),h=p==dr||"[object GeneratorFunction]"==p;if(kt(e))return be(e,s);if(p==br||p==hr||h&&!o){if(u=c||h?{}:ir(e),!s)return c?Fe(e,le(u,e)):ge(e,oe(u,e))}else{if(!yr[p])return o?e:{};u=nr(e,p,s)}}i||(i=new vt);var d=i.get(e);if(d)return d;i.set(e,u),pr(e)?e.forEach((function(a){u.add(t(a,r,n,a,e,i))})):cr(e)&&e.forEach((function(a,o){u.set(o,t(a,r,n,o,e,i))}));var b=f?void 0:(l?c?De:Se:c?ce:ae)(e);return mt(b||e,(function(a,o){b&&(a=e[o=a]),gt(u,o,t(a,r,n,o,e,i))})),u};var mr=function(t){return vr(t,5)},jr=r(197),_r=r.n(jr);let wr=0;const gr="webkit moz ms o".split(" ");let Vr,Or;if("undefined"==typeof window)Vr=function(){},Or=function(){};else{let t;Vr=window.requestAnimationFrame,Or=window.cancelAnimationFrame;for(let e=0;e<gr.length&&(!Vr||!Or);e++)t=gr[e],Vr=Vr||window[t+"RequestAnimationFrame"],Or=Or||window[t+"CancelAnimationFrame"]||window[t+"CancelRequestAnimationFrame"];Vr&&Or||(Vr=function(t){const e=(new Date).getTime(),r=Math.max(0,16-(e-wr)),n=window.setTimeout((()=>{t(e+r)}),r);return wr=e+r,n},Or=function(t){window.clearTimeout(t)})}var Ar={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:t=>t>=0},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:(t,e,r,n)=>r*(1-Math.pow(2,-10*t/n))*1024/1023+e}},data(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown(){return this.startVal>this.endVal}},watch:{startVal(){this.autoplay&&this.start()},endVal(){this.autoplay&&this.start()}},mounted(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=Vr(this.count)},pauseResume(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause(){Or(this.rAF)},resume(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,Vr(this.count)},reset(){this.startTime=null,Or(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count(t){this.startTime||(this.startTime=t),this.timestamp=t;const e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.endVal-this.localStartVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=Vr(this.count):this.$emit("callback")},isNumber:t=>!isNaN(parseFloat(t)),formatNumber(t){t=t.toFixed(this.decimals);const e=(t+="").split(".");let r=e[0];const n=e.length>1?this.decimal+e[1]:"",a=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;a.test(r);)r=r.replace(a,"$1"+this.separator+"$2");return this.prefix+r+n+this.suffix}},destroyed(){Or(this.rAF)},render:function(t,e,r,n,a,o){return(0,jr.openBlock)(),(0,jr.createBlock)("span",null,(0,jr.toDisplayString)(a.displayValue),1)}};function Fr(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var xr=mr(Ar);xr.unmounted=xr.destroyed,Reflect.deleteProperty(xr,"destroyed");var Sr,Dr,Pr=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Fr(Object(r),!0).forEach((function(e){a()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Fr(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({name:"CountTo",emits:["callback","mountedCallback"]},xr),qr="1.0.9";function Tr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Nr(t){t.component("count-to",Dr)}Dr=null!=jr&&_r()&&("function"==typeof(null==jr?void 0:_r())||null!=jr&&null!==(Sr=_r())&&void 0!==Sr&&Sr.version.startsWith("2."))?function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return function(t,e){for(var r in e)Tr(e,r)&&!Tr(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}(e,{a:e}),e}(r(347))():Pr,"undefined"!=typeof window&&(window.countTo={install:Nr,version:qr,CountTo:Dr});var Mr={install:Nr,version:qr}},347:function(t){t.exports=function(t){function e(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var r={};return e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,r){var n=r(4)(r(1),r(5),null,null);t.exports=n.exports},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,r,n){return r*(1-Math.pow(2,-10*t/n))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,n.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,n.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,n.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,n.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,n.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var e=(t+="").split("."),r=e[0],n=e.length>1?this.decimal+e[1]:"",a=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;a.test(r);)r=r.replace(a,"$1"+this.separator+"$2");return this.prefix+r+n+this.suffix}},destroyed:function(){(0,n.cancelAnimationFrame)(this.rAF)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t&&t.__esModule?t:{default:t}}(r(0));e.default=n.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",n.default)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0,a="webkit moz ms o".split(" "),o=void 0,i=void 0;if("undefined"==typeof window)e.requestAnimationFrame=o=function(){},e.cancelAnimationFrame=i=function(){};else{e.requestAnimationFrame=o=window.requestAnimationFrame,e.cancelAnimationFrame=i=window.cancelAnimationFrame;for(var u=void 0,s=0;s<a.length&&(!o||!i);s++)u=a[s],e.requestAnimationFrame=o=o||window[u+"RequestAnimationFrame"],e.cancelAnimationFrame=i=i||window[u+"CancelAnimationFrame"]||window[u+"CancelRequestAnimationFrame"];o&&i||(e.requestAnimationFrame=o=function(t){var e=(new Date).getTime(),r=Math.max(0,16-(e-n)),a=window.setTimeout((function(){t(e+r)}),r);return n=e+r,a},e.cancelAnimationFrame=i=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=o,e.cancelAnimationFrame=i},function(t,e){t.exports=function(t,e,r,n){var a,o=t=t||{},i=typeof t.default;"object"!==i&&"function"!==i||(a=t,o=t.default);var u="function"==typeof o?o.options:o;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),r&&(u._scopeId=r),n){var s=Object.create(u.computed||null);Object.keys(n).forEach((function(t){var e=n[t];s[t]=function(){return e}})),u.computed=s}return{esModule:a,exports:o,options:u}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])},197:function(e){"use strict";e.exports=t}},r={};function n(t){if(r[t])return r[t].exports;var a=r[t]={exports:{}};return e[t].call(a.exports,a,a.exports,n),a.exports}return n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(940)}()}));
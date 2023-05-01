// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,r=Object.prototype,o=r.toString,n=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,l=r.__lookupSetter__,c=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,c){var a,f,p,y;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof c||null===c||"[object Array]"===o.call(c))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+c+"`.");if((f="value"in c)&&(u.call(e,t)||l.call(e,t)?(a=e.__proto__,e.__proto__=r,delete e[t],e[t]=c.value,e.__proto__=a):e[t]=c.value),p="get"in c,y="set"in c,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&n&&n.call(e,t,c.get),y&&i&&i.call(e,t,c.set),e};function a(e,t,r){c(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(e){return"number"==typeof e}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,s=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"",d=y()?function(e){var t,r,o,n,i;if(null==e)return b.call(e);r=e[_],i=_,t=null!=(n=e)&&s.call(n,i);try{e[_]=void 0}catch(t){return b.call(e)}return o=b.call(e),t?e[_]=r:delete e[_],o}:function(e){return b.call(e)},m=Number,v=m.prototype.toString,j=y();function g(e){return"object"==typeof e&&(e instanceof m||(j?function(e){try{return v.call(e),!0}catch(e){return!1}}(e):"[object Number]"===d(e)))}function S(e){return f(e)||g(e)}a(S,"isPrimitive",f),a(S,"isObject",g);var h=Number.POSITIVE_INFINITY;function O(e){return f(e)&&1/e===h}function w(e){return g(e)&&1/e.valueOf()===h}function P(e){return O(e)||w(e)}return a(P,"isPrimitive",O),a(P,"isObject",w),P},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).isPositiveZero=t();
//# sourceMappingURL=index.js.map

// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";var r=e.isPrimitive,s=i;var n=function(t){return r(t)&&1/t===s},m=e.isObject,d=i;var o=function(t){return m(t)&&1/t.valueOf()===d},a=n,l=o;var f=t,j=function(t){return a(t)||l(t)},u=n,v=o;f(j,"isPrimitive",u),f(j,"isObject",v);var p=j;export{p as default,v as isObject,u as isPrimitive};
//# sourceMappingURL=index.mjs.map

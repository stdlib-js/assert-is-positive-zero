// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import{isPrimitive as e,isObject as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.1-esm/index.mjs";function n(t){return e(t)&&1/t===i}function r(t){return s(t)&&1/t.valueOf()===i}function m(t){return n(t)||r(t)}t(m,"isPrimitive",n),t(m,"isObject",r);export{m as default,r as isObject,n as isPrimitive};
//# sourceMappingURL=index.mjs.map

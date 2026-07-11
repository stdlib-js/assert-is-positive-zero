"use strict";var e=function(r,i){return function(){try{return i||r((i={exports:{}}).exports,i),i.exports}catch(q){throw (i=0, q)}};};var t=e(function(d,v){
var P=require('@stdlib/assert-is-number/dist').isPrimitive,m=require('@stdlib/constants-float64-pinf/dist');function b(r){return P(r)&&1/r===m}v.exports=b
});var s=e(function(y,o){
var O=require('@stdlib/assert-is-number/dist').isObject,f=require('@stdlib/constants-float64-pinf/dist');function j(r){return O(r)&&1/r.valueOf()===f}o.exports=j
});var n=e(function(R,c){
var p=t(),x=s();function N(r){return p(r)||x(r)}c.exports=N
});var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=n(),Z=t(),F=s();a(u,"isPrimitive",Z);a(u,"isObject",F);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

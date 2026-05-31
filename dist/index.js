"use strict";var e=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var t=e(function(I,v){
var q=require('@stdlib/assert-is-number/dist').isPrimitive,P=require('@stdlib/constants-float64-pinf/dist');function m(r){return q(r)&&1/r===P}v.exports=m
});var s=e(function(d,o){
var b=require('@stdlib/assert-is-number/dist').isObject,O=require('@stdlib/constants-float64-pinf/dist');function f(r){return b(r)&&1/r.valueOf()===O}o.exports=f
});var n=e(function(y,c){
var j=t(),p=s();function x(r){return j(r)||p(r)}c.exports=x
});var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=n(),N=t(),Z=s();a(u,"isPrimitive",N);a(u,"isObject",Z);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

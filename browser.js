// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).propertySymbolsIn=e()}(this,(function(){"use strict";var t,e=void 0!==Object.getOwnPropertySymbols,r=Object.getOwnPropertySymbols;t=e?function(t){return r(Object(t))}:function(){return[]};var n=t,o=/./,u="function"==typeof Object.defineProperty?Object.defineProperty:null;var i,c=Object.defineProperty,f=Object.prototype,l=f.toString,a=f.__defineGetter__,p=f.__defineSetter__,y=f.__lookupGetter__,b=f.__lookupSetter__;i=function(){try{return u({},"x",{}),!0}catch(t){return!1}}()?c:function(t,e,r){var n,o,u,i;if("object"!=typeof t||null===t||"[object Array]"===l.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===l.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(y.call(t,e)||b.call(t,e)?(n=t.__proto__,t.__proto__=f,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),u="get"in r,i="set"in r,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&a&&a.call(t,e,r.get),i&&p&&p.call(t,e,r.set),t};var s=i;function d(t,e,r){s(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function v(t){return"boolean"==typeof t}var j="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function _(){return j&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var m=Object.prototype.hasOwnProperty;var w,O="function"==typeof Symbol?Symbol.toStringTag:"";w=_()?function(t){var e,r,n,o,u;if(null==t)return g.call(t);r=t[O],u=O,e=null!=(o=t)&&m.call(o,u);try{t[O]=void 0}catch(e){return g.call(t)}return n=g.call(t),e?t[O]=r:delete t[O],n}:function(t){return g.call(t)};var h=w,S=Boolean.prototype.toString;var P=_();function A(t){return"object"==typeof t&&(t instanceof Boolean||(P?function(t){try{return S.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===h(t)))}function E(t){return v(t)||A(t)}function T(){return new Function("return this;")()}d(E,"isPrimitive",v),d(E,"isObject",A);var B="object"==typeof self?self:null,x="object"==typeof window?window:null,V="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},k="object"==typeof V?V:null;var C=function(t){if(arguments.length){if(!v(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return T()}if(B)return B;if(x)return x;if(k)return k;throw new Error("unexpected error. Unable to resolve global object.")}(),F=C.document&&C.document.childNodes,G=Int8Array;function L(){return/^\s*function\s*([^(]*)/i}var I,M=/^\s*function\s*([^(]*)/i;d(L,"REGEXP",M),I=Array.isArray?Array.isArray:function(t){return"[object Array]"===h(t)};var N=I;function R(t){return null!==t&&"object"==typeof t}var U=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!N(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(R);function X(t){var e,r,n,o;if(("Object"===(r=h(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=M.exec(n.toString()))return e[1]}return R(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}d(R,"isObjectLikeArray",U);var q="function"==typeof o||"object"==typeof G||"function"==typeof F?function(t){return X(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?X(t).toLowerCase():e};var z,D,H=Object.getPrototypeOf;D=Object.getPrototypeOf,z="function"===q(D)?H:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===h(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var J=z;function K(t){return null==t?null:(t=Object(t),J(t))}var Q=Object;function W(t,e){var r;for(r=0;r<t.length;r++)if(t[r]===e)return!0;return!1}return function(t){var e,r,o,u;if(null==t)return[];r=Q(t),e=[];do{for(o=n(r),u=0;u<o.length;u++)!1===W(e,o[u])&&e.push(o[u]);r=K(r)}while(r);return e}}));
//# sourceMappingURL=browser.js.map

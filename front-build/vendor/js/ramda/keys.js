import _curry1 from"./internal/_curry1.js";import _has from"./internal/_has.js";import _isArguments from"./internal/_isArguments.js";var hasEnumBug=!{toString:null}.propertyIsEnumerable("toString"),nonEnumerableProps=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],hasArgsEnumBug=function(){"use strict";return arguments.propertyIsEnumerable("length")}(),contains=function(r,n){for(var t=0;t<r.length;){if(r[t]===n)return!0;t+=1}return!1},keys="function"!=typeof Object.keys||hasArgsEnumBug?_curry1((function(r){if(Object(r)!==r)return[];var n,t,e=[],u=hasArgsEnumBug&&_isArguments(r);for(n in r)!_has(n,r)||u&&"length"===n||(e[e.length]=n);if(hasEnumBug)for(t=nonEnumerableProps.length-1;t>=0;)n=nonEnumerableProps[t],_has(n,r)&&!contains(e,n)&&(e[e.length]=n),t-=1;return e})):_curry1((function(r){return Object(r)!==r?[]:Object.keys(r)}));export default keys;
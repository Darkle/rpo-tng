import _includes from"./_includes.js";import _map from"./_map.js";import _quote from"./_quote.js";import _toISOString from"./_toISOString.js";import keys from"../keys.js";import reject from"../reject.js";export default function _toString(t,e){var r=function(r){var o=e.concat([t]);return _includes(r,o)?"<Circular>":_toString(r,o)},o=function(t,e){return _map((function(e){return _quote(e)+": "+r(t[e])}),e.slice().sort())};switch(Object.prototype.toString.call(t)){case"[object Arguments]":return"(function() { return arguments; }("+_map(r,t).join(", ")+"))";case"[object Array]":return"["+_map(r,t).concat(o(t,reject((function(t){return/^\d+$/.test(t)}),keys(t)))).join(", ")+"]";case"[object Boolean]":return"object"==typeof t?"new Boolean("+r(t.valueOf())+")":t.toString();case"[object Date]":return"new Date("+(isNaN(t.valueOf())?r(NaN):_quote(_toISOString(t)))+")";case"[object Null]":return"null";case"[object Number]":return"object"==typeof t?"new Number("+r(t.valueOf())+")":1/t==-1/0?"-0":t.toString(10);case"[object String]":return"object"==typeof t?"new String("+r(t.valueOf())+")":_quote(t);case"[object Undefined]":return"undefined";default:if("function"==typeof t.toString){var n=t.toString();if("[object Object]"!==n)return n}return"{"+o(t,keys(t)).join(", ")+"}"}}
import _curry2 from"./internal/_curry2.js";import _isInteger from"./internal/_isInteger.js";import _isArray from"./internal/_isArray.js";import assoc from"./assoc.js";import dissoc from"./dissoc.js";import remove from"./remove.js";import update from"./update.js";var dissocPath=_curry2((function r(s,e){switch(s.length){case 0:return e;case 1:return _isInteger(s[0])&&_isArray(e)?remove(s[0],1,e):dissoc(s[0],e);default:var t=s[0],o=Array.prototype.slice.call(s,1);return null==e[t]?e:_isInteger(t)&&_isArray(e)?update(t,r(o,e[t]),e):assoc(t,r(o,e[t]),e)}}));export default dissocPath;
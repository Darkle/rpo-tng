import _curry2 from"./internal/_curry2.js";import _isArray from"./internal/_isArray.js";import equals from"./equals.js";var lastIndexOf=_curry2((function(r,t){if("function"!=typeof t.lastIndexOf||_isArray(t)){for(var e=t.length-1;e>=0;){if(equals(t[e],r))return e;e-=1}return-1}return t.lastIndexOf(r)}));export default lastIndexOf;
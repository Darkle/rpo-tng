import _curry2 from"./internal/_curry2.js";import _isArray from"./internal/_isArray.js";import _isFunction from"./internal/_isFunction.js";import _isString from"./internal/_isString.js";import toString from"./toString.js";var concat=_curry2((function(r,n){if(_isArray(r)){if(_isArray(n))return r.concat(n);throw new TypeError(toString(n)+" is not an array")}if(_isString(r)){if(_isString(n))return r+n;throw new TypeError(toString(n)+" is not a string")}if(null!=r&&_isFunction(r["fantasy-land/concat"]))return r["fantasy-land/concat"](n);if(null!=r&&_isFunction(r.concat))return r.concat(n);throw new TypeError(toString(r)+' does not have a method named "concat" or "fantasy-land/concat"')}));export default concat;
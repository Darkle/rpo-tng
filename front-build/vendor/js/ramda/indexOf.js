import _curry2 from"./internal/_curry2.js";import _indexOf from"./internal/_indexOf.js";import _isArray from"./internal/_isArray.js";var indexOf=_curry2((function(r,i){return"function"!=typeof i.indexOf||_isArray(i)?_indexOf(i,r,0):i.indexOf(r)}));export default indexOf;
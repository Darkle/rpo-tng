import _curry2 from"./internal/_curry2.js";import equals from"./equals.js";import map from"./map.js";import where from"./where.js";var whereEq=_curry2((function(r,e){return where(map(equals,r),e)}));export default whereEq;
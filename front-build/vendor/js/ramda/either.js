import _curry2 from"./internal/_curry2.js";import _isFunction from"./internal/_isFunction.js";import lift from"./lift.js";import or from"./or.js";var either=_curry2((function(r,t){return _isFunction(r)?function(){return r.apply(this,arguments)||t.apply(this,arguments)}:lift(or)(r,t)}));export default either;
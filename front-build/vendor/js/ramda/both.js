import _curry2 from"./internal/_curry2.js";import _isFunction from"./internal/_isFunction.js";import and from"./and.js";import lift from"./lift.js";var both=_curry2((function(r,t){return _isFunction(r)?function(){return r.apply(this,arguments)&&t.apply(this,arguments)}:lift(and)(r,t)}));export default both;
import _clone from"./internal/_clone.js";import _curry3 from"./internal/_curry3.js";import _isTransformer from"./internal/_isTransformer.js";import _reduce from"./internal/_reduce.js";import _stepCat from"./internal/_stepCat.js";var into=_curry3((function(r,e,t){return _isTransformer(r)?_reduce(e(r),r["@@transducer/init"](),t):_reduce(e(_stepCat(r)),_clone(r,[],[],!1),t)}));export default into;
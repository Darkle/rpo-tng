import _curry3 from"./internal/_curry3.js";import _isObject from"./internal/_isObject.js";import mergeWithKey from"./mergeWithKey.js";var mergeDeepWithKey=_curry3((function e(r,t,i){return mergeWithKey((function(t,i,m){return _isObject(i)&&_isObject(m)?e(r,i,m):r(t,i,m)}),t,i)}));export default mergeDeepWithKey;
import _curry2 from"./internal/_curry2.js";import _dispatchable from"./internal/_dispatchable.js";import _xfindIndex from"./internal/_xfindIndex.js";var findIndex=_curry2(_dispatchable([],_xfindIndex,(function(r,n){for(var e=0,i=n.length;e<i;){if(r(n[e]))return e;e+=1}return-1})));export default findIndex;
import _curry2 from"./internal/_curry2.js";import _dispatchable from"./internal/_dispatchable.js";import _xfindLast from"./internal/_xfindLast.js";var findLast=_curry2(_dispatchable([],_xfindLast,(function(r,t){for(var a=t.length-1;a>=0;){if(r(t[a]))return t[a];a-=1}})));export default findLast;
import _curry1 from"./internal/_curry1.js";import curryN from"./curryN.js";import nth from"./nth.js";var nthArg=_curry1((function(r){return curryN(r<0?1:r+1,(function(){return nth(r,arguments)}))}));export default nthArg;
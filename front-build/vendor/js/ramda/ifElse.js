import _curry3 from"./internal/_curry3.js";import curryN from"./curryN.js";var ifElse=_curry3((function(r,t,n){return curryN(Math.max(r.length,t.length,n.length),(function(){return r.apply(this,arguments)?t.apply(this,arguments):n.apply(this,arguments)}))}));export default ifElse;
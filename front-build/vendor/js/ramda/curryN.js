import _arity from"./internal/_arity.js";import _curry1 from"./internal/_curry1.js";import _curry2 from"./internal/_curry2.js";import _curryN from"./internal/_curryN.js";var curryN=_curry2((function(r,t){return 1===r?_curry1(t):_arity(r,_curryN(r,[],t))}));export default curryN;
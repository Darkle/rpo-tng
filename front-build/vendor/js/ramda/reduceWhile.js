import _curryN from"./internal/_curryN.js";import _reduce from"./internal/_reduce.js";import _reduced from"./internal/_reduced.js";var reduceWhile=_curryN(4,[],(function(r,e,u,c){return _reduce((function(u,c){return r(u,c)?e(u,c):_reduced(u)}),u,c)}));export default reduceWhile;
import _reduce from"./internal/_reduce.js";import _xwrap from"./internal/_xwrap.js";import curryN from"./curryN.js";var transduce=curryN(4,(function(r,e,t,u){return _reduce(r("function"==typeof e?_xwrap(e):e),t,u)}));export default transduce;
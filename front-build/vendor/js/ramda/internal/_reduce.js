import _isArrayLike from"./_isArrayLike.js";import _xwrap from"./_xwrap.js";import bind from"../bind.js";function _arrayReduce(e,r,t){for(var u=0,n=t.length;u<n;){if((r=e["@@transducer/step"](r,t[u]))&&r["@@transducer/reduced"]){r=r["@@transducer/value"];break}u+=1}return e["@@transducer/result"](r)}function _iterableReduce(e,r,t){for(var u=t.next();!u.done;){if((r=e["@@transducer/step"](r,u.value))&&r["@@transducer/reduced"]){r=r["@@transducer/value"];break}u=t.next()}return e["@@transducer/result"](r)}function _methodReduce(e,r,t,u){return e["@@transducer/result"](t[u](bind(e["@@transducer/step"],e),r))}var symIterator="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";export default function _reduce(e,r,t){if("function"==typeof e&&(e=_xwrap(e)),_isArrayLike(t))return _arrayReduce(e,r,t);if("function"==typeof t["fantasy-land/reduce"])return _methodReduce(e,r,t,"fantasy-land/reduce");if(null!=t[symIterator])return _iterableReduce(e,r,t[symIterator]());if("function"==typeof t.next)return _iterableReduce(e,r,t);if("function"==typeof t.reduce)return _methodReduce(e,r,t,"reduce");throw new TypeError("reduce: list must be array or iterable")}
import _isPlaceholder from"./_isPlaceholder.js";export default function _curry1(r){return function e(l){return 0===arguments.length||_isPlaceholder(l)?e:r.apply(this,arguments)}}
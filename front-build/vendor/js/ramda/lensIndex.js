import _curry1 from"./internal/_curry1.js";import lens from"./lens.js";import nth from"./nth.js";import update from"./update.js";var lensIndex=_curry1((function(r){return lens(nth(r),update(r))}));export default lensIndex;
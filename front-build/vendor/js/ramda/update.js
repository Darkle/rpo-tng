import _curry3 from"./internal/_curry3.js";import adjust from"./adjust.js";import always from"./always.js";var update=_curry3((function(r,a,t){return adjust(r,always(a),t)}));export default update;
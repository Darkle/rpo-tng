import _curry3 from"./internal/_curry3.js";import defaultTo from"./defaultTo.js";import path from"./path.js";var pathOr=_curry3((function(r,t,a){return defaultTo(r,path(t,a))}));export default pathOr;
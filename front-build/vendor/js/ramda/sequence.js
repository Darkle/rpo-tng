import _curry2 from"./internal/_curry2.js";import ap from"./ap.js";import map from"./map.js";import prepend from"./prepend.js";import reduceRight from"./reduceRight.js";var sequence=_curry2((function(e,r){return"function"==typeof r.sequence?r.sequence(e):reduceRight((function(e,r){return ap(map(prepend,e),r)}),e([]),r)}));export default sequence;
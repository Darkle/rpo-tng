import _curry3 from"./internal/_curry3.js";import _has from"./internal/_has.js";var mergeWithKey=_curry3((function(r,a,e){var t,i={};for(t in a)_has(t,a)&&(i[t]=_has(t,e)?r(t,a[t],e[t]):a[t]);for(t in e)_has(t,e)&&!_has(t,i)&&(i[t]=e[t]);return i}));export default mergeWithKey;
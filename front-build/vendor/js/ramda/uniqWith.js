import _includesWith from"./internal/_includesWith.js";import _curry2 from"./internal/_curry2.js";var uniqWith=_curry2((function(r,i){for(var t,n=0,u=i.length,e=[];n<u;)t=i[n],_includesWith(r,t,e)||(e[e.length]=t),n+=1;return e}));export default uniqWith;
import _curry1 from"./internal/_curry1.js";var transpose=_curry1((function(r){for(var t=0,n=[];t<r.length;){for(var o=r[t],e=0;e<o.length;)void 0===n[e]&&(n[e]=[]),n[e].push(o[e]),e+=1;t+=1}return n}));export default transpose;
import _Set from"./internal/_Set.js";import _curry2 from"./internal/_curry2.js";var uniqBy=_curry2((function(r,t){for(var n,e,u=new _Set,i=[],o=0;o<t.length;)n=r(e=t[o]),u.add(n)&&i.push(e),o+=1;return i}));export default uniqBy;
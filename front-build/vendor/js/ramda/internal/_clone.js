import _cloneRegExp from"./_cloneRegExp.js";import type from"../type.js";export default function _clone(e,r,t,n){var o=function(o){for(var a=r.length,c=0;c<a;){if(e===r[c])return t[c];c+=1}for(var u in r[c+1]=e,t[c+1]=o,e)o[u]=n?_clone(e[u],r,t,!0):e[u];return o};switch(type(e)){case"Object":return o({});case"Array":return o([]);case"Date":return new Date(e.valueOf());case"RegExp":return _cloneRegExp(e);default:return e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
import{createMarker,directive,NodePart,removeNodes,reparentNodes}from"../lit-html.js";const createAndInsertPart=(e,t)=>{const r=e.startNode.parentNode,a=void 0===t?e.endNode:t.startNode,o=r.insertBefore(createMarker(),a);r.insertBefore(createMarker(),a);const n=new NodePart(e.options);return n.insertAfterNode(o),n},updatePart=(e,t)=>(e.setValue(t),e.commit(),e),insertPartBefore=(e,t,r)=>{const a=e.startNode.parentNode,o=r?r.startNode:e.endNode,n=t.endNode.nextSibling;n!==o&&reparentNodes(a,t.startNode,n,o)},removePart=e=>{removeNodes(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},generateMap=(e,t,r)=>{const a=new Map;for(let o=t;o<=r;o++)a.set(e[o],o);return a},partListCache=new WeakMap,keyListCache=new WeakMap;export const repeat=directive(((e,t,r)=>{let a;return void 0===r?r=t:void 0!==t&&(a=t),t=>{if(!(t instanceof NodePart))throw new Error("repeat can only be used in text bindings");const o=partListCache.get(t)||[],n=keyListCache.get(t)||[],s=[],d=[],i=[];let l,c,p=0;for(const t of e)i[p]=a?a(t,p):p,d[p]=r(t,p),p++;let f=0,N=o.length-1,P=0,u=d.length-1;for(;f<=N&&P<=u;)if(null===o[f])f++;else if(null===o[N])N--;else if(n[f]===i[P])s[P]=updatePart(o[f],d[P]),f++,P++;else if(n[N]===i[u])s[u]=updatePart(o[N],d[u]),N--,u--;else if(n[f]===i[u])s[u]=updatePart(o[f],d[u]),insertPartBefore(t,o[f],s[u+1]),f++,u--;else if(n[N]===i[P])s[P]=updatePart(o[N],d[P]),insertPartBefore(t,o[N],o[f]),N--,P++;else if(void 0===l&&(l=generateMap(i,P,u),c=generateMap(n,f,N)),l.has(n[f]))if(l.has(n[N])){const e=c.get(i[P]),r=void 0!==e?o[e]:null;if(null===r){const e=createAndInsertPart(t,o[f]);updatePart(e,d[P]),s[P]=e}else s[P]=updatePart(r,d[P]),insertPartBefore(t,r,o[f]),o[e]=null;P++}else removePart(o[N]),N--;else removePart(o[f]),f++;for(;P<=u;){const e=createAndInsertPart(t,s[u+1]);updatePart(e,d[P]),s[P++]=e}for(;f<=N;){const e=o[f++];null!==e&&removePart(e)}partListCache.set(t,s),keyListCache.set(t,i)}}));
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
var __asyncValues=this&&this.__asyncValues||function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,t=e[Symbol.asyncIterator];return t?t.call(e):(e="function"==typeof __values?__values(e):e[Symbol.iterator](),r={},n("next"),n("throw"),n("return"),r[Symbol.asyncIterator]=function(){return this},r);function n(t){r[t]=e[t]&&function(r){return new Promise((function(n,o){(function(e,r,t,n){Promise.resolve(n).then((function(r){e({value:r,done:t})}),r)})(n,o,(r=e[t](r)).done,r.value)}))}}};import{createMarker,directive,NodePart}from"../lit-html.js";export const asyncAppend=directive(((e,r)=>async t=>{var n,o;if(!(t instanceof NodePart))throw new Error("asyncAppend can only be used in text bindings");if(e===t.value)return;let a;t.value=e;let i=0;try{for(var l,s=__asyncValues(e);!(l=await s.next()).done;){let n=l.value;if(t.value!==e)break;0===i&&t.clear(),void 0!==r&&(n=r(n,i));let o=t.startNode;void 0!==a&&(o=createMarker(),a.endNode=o,t.endNode.parentNode.insertBefore(o,t.endNode)),a=new NodePart(t.options),a.insertAfterNode(o),a.setValue(n),a.commit(),i++}}catch(e){n={error:e}}finally{try{l&&!l.done&&(o=s.return)&&await o.call(s)}finally{if(n)throw n.error}}}));
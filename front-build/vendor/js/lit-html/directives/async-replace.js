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
var __asyncValues=this&&this.__asyncValues||function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e="function"==typeof __values?__values(e):e[Symbol.iterator](),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,a){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,a,(t=e[n](t)).done,t.value)}))}}};import{directive,NodePart}from"../lit-html.js";export const asyncReplace=directive(((e,t)=>async n=>{var r,a;if(!(n instanceof NodePart))throw new Error("asyncReplace can only be used in text bindings");if(e===n.value)return;const o=new NodePart(n.options);n.value=e;let i=0;try{for(var l,c=__asyncValues(e);!(l=await c.next()).done;){let r=l.value;if(n.value!==e)break;0===i&&(n.clear(),o.appendIntoPart(n)),void 0!==t&&(r=t(r,i)),o.setValue(r),o.commit(),i++}}catch(e){r={error:e}}finally{try{l&&!l.done&&(a=c.return)&&await a.call(c)}finally{if(r)throw r.error}}}));
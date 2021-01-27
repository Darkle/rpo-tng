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
import{removeNodes,reparentNodes}from"../lib/dom.js";export const initTemplatePolyfill=(e=!1)=>{if(!e&&"content"in document.createElement("template"))return;const t=document.implementation.createHTMLDocument("template"),n=t.body,o={enumerable:!0,configurable:!0},r=Document.prototype.createElement;Document.prototype.createElement=function(e,c){const i=r.call(this,e,c);return"TEMPLATE"===i.tagName&&(e=>{const r=t.createDocumentFragment();Object.defineProperties(e,{content:Object.assign(Object.assign({},o),{get:()=>r}),innerHTML:Object.assign(Object.assign({},o),{set:function(e){n.innerHTML=e,removeNodes(r,r.firstChild),reparentNodes(r,n.firstChild)}})})})(i),i}};
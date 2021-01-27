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
import{reparentNodes}from"../lib/dom.js";import{isPrimitive}from"../lib/parts.js";import{directive,NodePart}from"../lit-html.js";const previousValues=new WeakMap,isIe=window.navigator.userAgent.indexOf("Trident/")>0;export const unsafeSVG=directive((e=>t=>{if(!(t instanceof NodePart))throw new Error("unsafeSVG can only be used in text bindings");const i=previousValues.get(t);if(void 0!==i&&isPrimitive(e)&&e===i.value&&t.value===i.fragment)return;const r=document.createElement("template"),n=r.content;let o;isIe?(r.innerHTML=`<svg>${e}</svg>`,o=n.firstChild):(o=document.createElementNS("http://www.w3.org/2000/svg","svg"),n.appendChild(o),o.innerHTML=e),n.removeChild(o),reparentNodes(n,o.firstChild);const s=document.importNode(n,!0);t.setValue(s),previousValues.set(t,{value:e,fragment:s})}));
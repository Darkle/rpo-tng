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
import{isPrimitive}from"../lib/parts.js";import{directive,NodePart}from"../lit-html.js";const previousValues=new WeakMap;export const unsafeHTML=directive((e=>t=>{if(!(t instanceof NodePart))throw new Error("unsafeHTML can only be used in text bindings");const i=previousValues.get(t);if(void 0!==i&&isPrimitive(e)&&e===i.value&&t.value===i.fragment)return;const n=document.createElement("template");n.innerHTML=e;const r=document.importNode(n.content,!0);t.setValue(r),previousValues.set(t,{value:e,fragment:r})}));
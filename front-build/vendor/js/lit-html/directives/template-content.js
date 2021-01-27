/**
 * @license
 * Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
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
import{directive,NodePart}from"../lit-html.js";const previousValues=new WeakMap;export const templateContent=directive((e=>t=>{if(!(t instanceof NodePart))throw new Error("templateContent can only be used in text bindings");const n=previousValues.get(t);if(void 0!==n&&e===n.template&&t.value===n.fragment)return;const o=document.importNode(e.content,!0);t.setValue(o),previousValues.set(t,{template:e,fragment:o})}));
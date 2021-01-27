/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
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
import{directive}from"../lit-html.js";const previousValues=new WeakMap;export const guard=directive(((r,e)=>s=>{const i=previousValues.get(s);if(Array.isArray(r)){if(Array.isArray(i)&&i.length===r.length&&r.every(((r,e)=>r===i[e])))return}else if(i===r&&(void 0!==r||previousValues.has(s)))return;s.setValue(e()),previousValues.set(s,Array.isArray(r)?Array.from(r):r)}));
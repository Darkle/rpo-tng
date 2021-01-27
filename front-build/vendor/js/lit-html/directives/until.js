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
import{isPrimitive}from"../lib/parts.js";import{directive}from"../lit-html.js";const _state=new WeakMap,_infinity=2147483647;export const until=directive(((...e)=>t=>{let i=_state.get(t);void 0===i&&(i={lastRenderedIndex:_infinity,values:[]},_state.set(t,i));const n=i.values;let s=n.length;i.values=e;for(let d=0;d<e.length&&!(d>i.lastRenderedIndex);d++){const l=e[d];if(isPrimitive(l)||"function"!=typeof l.then){t.setValue(l),i.lastRenderedIndex=d;break}d<s&&l===n[d]||(i.lastRenderedIndex=_infinity,s=0,Promise.resolve(l).then((e=>{const n=i.values.indexOf(l);n>-1&&n<i.lastRenderedIndex&&(i.lastRenderedIndex=n,t.setValue(e),t.commit())})))}}));
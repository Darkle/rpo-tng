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
import{AttributePart,directive,PropertyPart}from"../lit-html.js";const previousStylePropertyCache=new WeakMap;export const styleMap=directive((t=>e=>{if(!(e instanceof AttributePart)||e instanceof PropertyPart||"style"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:r}=e,{style:i}=r.element;let o=previousStylePropertyCache.get(e);void 0===o&&(i.cssText=r.strings.join(" "),previousStylePropertyCache.set(e,o=new Set)),o.forEach((e=>{e in t||(o.delete(e),-1===e.indexOf("-")?i[e]=null:i.removeProperty(e))}));for(const e in t)o.add(e),-1===e.indexOf("-")?i[e]=t[e]:i.setProperty(e,t[e])}));
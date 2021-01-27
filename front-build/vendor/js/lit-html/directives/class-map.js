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
import{AttributePart,directive,PropertyPart}from"../lit-html.js";class ClassList{constructor(t){this.classes=new Set,this.changed=!1,this.element=t;const e=(t.getAttribute("class")||"").split(/\s+/);for(const t of e)this.classes.add(t)}add(t){this.classes.add(t),this.changed=!0}remove(t){this.classes.delete(t),this.changed=!0}commit(){if(this.changed){let t="";this.classes.forEach((e=>t+=e+" ")),this.element.setAttribute("class",t)}}}const previousClassesCache=new WeakMap;export const classMap=directive((t=>e=>{if(!(e instanceof AttributePart)||e instanceof PropertyPart||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:s}=e,{element:i}=s;let a=previousClassesCache.get(e);void 0===a&&(i.setAttribute("class",s.strings.join(" ")),previousClassesCache.set(e,a=new Set));const c=i.classList||new ClassList(i);a.forEach((e=>{e in t||(c.remove(e),a.delete(e))}));for(const e in t){const s=t[e];s!=a.has(e)&&(s?(c.add(e),a.add(e)):(c.remove(e),a.delete(e)))}"function"==typeof c.commit&&c.commit()}));
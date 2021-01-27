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
import{AttributePart,BooleanAttributePart,directive,EventPart,NodePart,PropertyPart}from"../lit-html.js";export const live=directive((t=>e=>{let r;if(e instanceof EventPart||e instanceof NodePart)throw new Error("The `live` directive is not allowed on text or event bindings");if(e instanceof BooleanAttributePart)checkStrings(e.strings),r=e.element.hasAttribute(e.name),e.value=r;else{const{element:n,name:i,strings:o}=e.committer;if(checkStrings(o),e instanceof PropertyPart){if(r=n[i],r===t)return}else e instanceof AttributePart&&(r=n.getAttribute(i));if(r===String(t))return}e.setValue(t)}));const checkStrings=t=>{if(2!==t.length||""!==t[0]||""!==t[1])throw new Error("`live` bindings can only contain a single expression")};
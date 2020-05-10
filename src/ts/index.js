import { html } from "https://unpkg.com/lit-html@1.2.1?module";
html `<my-element></my-element>`;
html `<div>`;
html `<input @iinput="${console.log}" />`;
console.log("bar");

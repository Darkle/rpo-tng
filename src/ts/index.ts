import {html} from 'lit-html'

html`<my-element></my-element>`
html`<div>`
html`<input @iinput="${console.log}" />`

console.log(process.env.ISDEV)
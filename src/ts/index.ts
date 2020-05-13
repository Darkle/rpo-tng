import {html} from 'lit-html'

html`<my-element></my-element>`
html`<div>`
html`<input @iinput="${console.log}" />`
// let isDone: boolean = false;
// let decimal: number = 6;
// let hex: number = 0xf00d;
// let binary: number = 0b1010;
// let octal: number = 0o744;
// function warnUser(): void {
//   console.log("This is my warning message");
// }
// console.log(isDone, decimal, hex, binary, octal, warnUser)
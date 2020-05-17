import { html, render } from 'lit-html';
import { foo } from './asd/thing';
foo();
const divver = () => html `<div>`;
html `<input @iinput="${console.log}" />`;
const isDone = false;
const decimal = 6;
const hex = 0xf00d;
const binary = 0b1010;
const octal = 0o744;
function warnUser(a, b) {
    console.log("This is my warning message");
    return a + b;
}
console.log(isDone, decimal, hex, binary, octal, warnUser);
console.log('asd');
render(divver(), document.body);

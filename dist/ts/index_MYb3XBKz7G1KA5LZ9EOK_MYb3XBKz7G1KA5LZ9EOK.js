import { html, render } from "/web_modules/lit-html.js";
import { foo } from "./asd/thing_MYb3XBKz7G1KA5LZ9EOK.js";
foo(); // html`<my-element></my-element>`

const divver = () => html`<div>`;

html`<input @iinput="${console.log}" />`;
/* eslint-disable */

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
console.log('asd'); // class Car {
//     constructor(name) {
//         this.name = name
//     }
// }
// class FactoryClass {
//     create(name) {
//         return new Car(name)
//     }
// }
// const factory = new FactoryClass()
// const car = factory.create('BMW', 'Series 3s')
// console.log(car)

render(divver(), document.body);
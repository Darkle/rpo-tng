import { html, render } from 'lit-html'

import { foo } from './asd/thing'
foo()
// html`<my-element></my-element>`
const divver = () => html`<div>`
html`<input @iinput="${console.log}" />`
/* eslint-disable */
const isDone: boolean = false
const decimal: number = 6
const hex: number = 0xf00d
const binary: number = 0b1010
const octal: number = 0o744
function warnUser(a: number, b: number): number {
  console.log("This is my warning message")
  return a + b
}
console.log(isDone, decimal, hex, binary, octal, warnUser)
console.log('asd')
// console.log(obj?.asd?.asd)
// class Car {
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
render(divver(), document.body)

const fas = () => console.log('fas')

export {
  fas
}
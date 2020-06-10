import { html, render } from 'lit-html'

import { foo } from './asd/thing'
foo()
// html`<my-element></my-element>`
const divver = () => html`<div>`
html`<input @iinput="${console.log}" />`
/* eslint-disable */
const isDone: boolean = false
const decimal: number = 6456456
const hex: number = 0xf00d
const binary: number = 0b1010
const octal: number = 0o744
function warnUser(a: number, b: number): number {
  console.log("This is my warning messddage")
  return a + b
}
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: 'resolved'
}
console.log(foo instanceof bar)
asyncCall();
console.log(isDone, decimal, hex, binary, octal, warnUser)
console.log('asd')
console.log(obj?.asd?.asd)
class Car {
    constructor(name) {
        this.name = name
    }
}


class FactoryClass {
    create(name) {
        return new Car(name)
    }
}
const hello = "hello"
if(hello == "hello"){
  console.log('yeppers')
}
const factory = new FactoryClass()
// const car = factory.create('BMW', 'Series 3s')
// console.log(car)
render(divver(), document.body)

const fas = () => console.log('fas')

const foo = document.querySelector('#asd')
foo?.getAttribute('asd')
export {
  fas
}

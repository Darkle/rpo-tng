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
class Car {
    constructor(name) {
        this.name = name;
    }
}
class FactoryClass {
    create(name) {
        return new Car(name);
    }
}
const factory = new FactoryClass();
const car = factory.create('BMW', 'Series 3s');
console.log(car);
render(divver(), document.body);
const fas = () => console.log('fas');
export { fas };

import composeK from"./composeK.js";import reverse from"./reverse.js";export default function pipeK(){if(0===arguments.length)throw new Error("pipeK requires at least one argument");return composeK.apply(this,reverse(arguments))}
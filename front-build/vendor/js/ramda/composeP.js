import pipeP from"./pipeP.js";import reverse from"./reverse.js";export default function composeP(){if(0===arguments.length)throw new Error("composeP requires at least one argument");return pipeP.apply(this,reverse(arguments))}
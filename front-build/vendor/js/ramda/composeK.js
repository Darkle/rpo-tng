import chain from"./chain.js";import compose from"./compose.js";import map from"./map.js";export default function composeK(){if(0===arguments.length)throw new Error("composeK requires at least one argument");var o=Array.prototype.slice.call(arguments),r=o.pop();return compose(compose.apply(this,map(chain,o)),r)}
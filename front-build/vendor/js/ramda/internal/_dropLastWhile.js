import slice from"../slice.js";export default function dropLastWhile(e,r){for(var t=r.length-1;t>=0&&e(r[t]);)t-=1;return slice(0,t+1,r)}
var pad=function(t){return(t<10?"0":"")+t},_toISOString="function"==typeof Date.prototype.toISOString?function(t){return t.toISOString()}:function(t){return t.getUTCFullYear()+"-"+pad(t.getUTCMonth()+1)+"-"+pad(t.getUTCDate())+"T"+pad(t.getUTCHours())+":"+pad(t.getUTCMinutes())+":"+pad(t.getUTCSeconds())+"."+(t.getUTCMilliseconds()/1e3).toFixed(3).slice(2,5)+"Z"};export default _toISOString;
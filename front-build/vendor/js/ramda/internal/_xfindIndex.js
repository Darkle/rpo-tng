import _curry2 from"./_curry2.js";import _reduced from"./_reduced.js";import _xfBase from"./_xfBase.js";var XFindIndex=function(){function t(t,r){this.xf=r,this.f=t,this.idx=-1,this.found=!1}return t.prototype["@@transducer/init"]=_xfBase.init,t.prototype["@@transducer/result"]=function(t){return this.found||(t=this.xf["@@transducer/step"](t,-1)),this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,r){return this.idx+=1,this.f(r)&&(this.found=!0,t=_reduced(this.xf["@@transducer/step"](t,this.idx))),t},t}(),_xfindIndex=_curry2((function(t,r){return new XFindIndex(t,r)}));export default _xfindIndex;
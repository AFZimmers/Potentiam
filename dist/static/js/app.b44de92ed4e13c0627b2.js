webpackJsonp([1],{"FkI/":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),i=n("Gu7T"),o=n.n(i),u=n("bOdI"),a={data:function(){return{limit:this.$parent.limit,numbers:[]}},watch:n.n(u)()({},"$parent.limit",function(t){this.limit=t}),methods:{n:function(){for(var t=[],e=0;e<this.limit;e++)t=[].concat(o()(t),[e]);return t.sort(function(){return Math.random()-.5})},hov:function(t){for(var e=document.querySelectorAll(".number"),n=0;n<e.length;n++){var r=e[n].textContent.trim();t%r==0&&(e[n].classList.add("active"),console.log("divisor",r))}},reset:function(){document.querySelectorAll(".number").forEach(function(t){return t.classList.remove("active")})}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.n(),function(e){return n("div",{key:e,staticClass:"number",attrs:{id:"number-"+e},on:{mouseover:function(n){return t.hov(e)},mouseout:t.reset}},[t._v("\n    "+t._s(e)+"\n  ")])}),0)},staticRenderFns:[]};var s={name:"App",components:{Numbers:n("VU/8")(a,c,!1,function(t){n("QzkI")},"data-v-4cb39740",null).exports},data:function(){return{limit:100}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.limit,expression:"limit"}],attrs:{type:"number"},domProps:{value:t.limit},on:{input:function(e){e.target.composing||(t.limit=e.target.value)}}}),t._v(" "),n("Numbers")],1)},staticRenderFns:[]};var m=n("VU/8")(s,l,!1,function(t){n("FkI/")},"data-v-fc07f8ee",null).exports;r.a.config.productionTip=!1,new r.a({el:"#app",components:{App:m},template:"<App/>"})},QzkI:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b44de92ed4e13c0627b2.js.map
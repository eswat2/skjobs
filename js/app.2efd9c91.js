(function(t){function e(e){for(var r,s,c=e[0],i=e[1],u=e[2],f=0,p=[];f<c.length;f++)s=c[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(p.length)p.shift()();return n.push.apply(n,u||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],r=!0,c=1;c<o.length;c++){var i=o[c];0!==a[i]&&(r=!1)}r&&(n.splice(e--,1),t=s(s.s=o[0]))}return t}var r={},a={app:0},n=[];function s(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=r,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(o,r,function(e){return t[e]}.bind(null,r));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/skjobs/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=i;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var r=o("85ec"),a=o.n(r);a.a},"15b5":function(t,e,o){},"1cda":function(t,e,o){"use strict";var r=o("8c42"),a=o.n(r);a.a},"3e29":function(t,e,o){},"550a":function(t,e,o){"use strict";var r=o("3e29"),a=o.n(r);a.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("JobsList",{attrs:{jobs:t.jobs}}),o("Footer",{attrs:{poweredBy:t.poweredBy}})],1)},n=[],s=o("2f62"),c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrapper"},[o("div",{staticClass:"jobs"},t._l(t.jobs,(function(t){return o("JobItem",{key:t.id,attrs:{job:t}})})),1)])},i=[],u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"job"},[o("div",{staticClass:"row navy"},[o("i",{staticClass:"fas fa-angle-right job-icon"}),o("span",[t._v(t._s(t.job.title))])]),o("div",{staticClass:"row categories gray"},[o("span",{staticClass:"category commitment"},[t._v(t._s(t.job.commitment))]),o("span",{staticClass:"category team"},[t._v(t._s(t.job.team))]),o("span",{staticClass:"category location"},[t._v(t._s(t.job.location))])])])},l=[],f={name:"JobItem",props:{job:Object}},p=f,b=(o("8dbe"),o("2877")),d=Object(b["a"])(p,u,l,!1,null,"5407fbc8",null),m=d.exports,v={name:"JobsList",components:{JobItem:m},props:{jobs:Array}},j=v,h=(o("550a"),Object(b["a"])(j,c,i,!1,null,"e03a40a2",null)),y=h.exports,g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"footer bg-gray"},[o("span",{staticClass:"powered-by white"},[t._v(t._s(t.poweredBy))])])},_=[],w={name:"Footer",props:{poweredBy:String}},O=w,J=(o("1cda"),Object(b["a"])(O,g,_,!1,null,"c41d0b98",null)),x=J.exports,C={name:"app",components:{JobsList:y,Footer:x},computed:Object(s["b"])({jobs:function(t){return t.jobs}}),data:function(){return{poweredBy:"Jobs powered by LEVER"}}},S=C,k=(o("034f"),Object(b["a"])(S,a,n,!1,null,null,null)),P=k.exports,E=(o("d81d"),o("bc3a")),F=o.n(E),T={data:[{categories:{commitment:"Full Time",location:"San Francisco",team:"Pre-Sales"},createdAt:1519162926225,id:"eac055c5-7d16-4f75-89d8-3a97f94a7af8",text:"Sales Solution Architect",hostedUrl:"https://jobs.lever.co/skava/eac055c5-7d16-4f75-89d8-3a97f94a7af8",applyUrl:"https://jobs.lever.co/skava/eac055c5-7d16-4f75-89d8-3a97f94a7af8/apply"},{categories:{commitment:"Full Time",location:"Coimbatore",team:"Platform"},createdAt:1534919035498,id:"2269a887-9925-4182-a6ea-efc492e45285",lists:[],text:"Technical Writer",hostedUrl:"https://jobs.lever.co/skava/2269a887-9925-4182-a6ea-efc492e45285",applyUrl:"https://jobs.lever.co/skava/2269a887-9925-4182-a6ea-efc492e45285/apply"}]};function B(){return T}function $(t){var e={id:t.id,title:t.text,commitment:t.categories.commitment,location:t.categories.location,team:t.categories.team};return e}function A(t){return t.map((function(t){return $(t)}))}function L(){return F.a.all([B()]).then((function(t){return{jobs:A(t[0].data),error:!1}})).catch((function(t){return{jobs:[],error:!0,fault:t}}))}var M={getJobs:L},U=M;r["a"].use(s["a"]);var I=new s["a"].Store({state:{jobs:[]},mutations:{updateJobs:function(t,e){t.jobs=e}},actions:{refreshJobs:function(t){var e=t.commit;U.getJobs().then((function(t){e("updateJobs",t.jobs)}))}}});I.dispatch("refreshJobs");var R=I;r["a"].config.productionTip=!1,new r["a"]({store:R,render:function(t){return t(P)}}).$mount("#app")},"85ec":function(t,e,o){},"8c42":function(t,e,o){},"8dbe":function(t,e,o){"use strict";var r=o("15b5"),a=o.n(r);a.a}});
//# sourceMappingURL=app.2efd9c91.js.map
import{o as i,c as l,a,t as d,p as b,b as v,r as u,F as h,d as y,e as g,m as j,f as m,g as $,V as J,h as w}from"./vendor.44c45bb3.js";const L=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}};L();var _=(e,o)=>{for(const[r,n]of o)e[r]=n;return e};const x={name:"JobItem",props:{job:Object}},I=e=>(b("data-v-0fbb2706"),e=e(),v(),e),S={class:"job"},F={class:"row navy"},k=I(()=>a("i",{class:"fas fa-angle-right job-icon"},null,-1)),B={class:"row categories gray"},A={class:"category commitment"},N={class:"category team"},O={class:"category location"};function V(e,o,r,n,t,s){return i(),l("div",S,[a("div",F,[k,a("span",null,d(r.job.title),1)]),a("div",B,[a("span",A,d(r.job.commitment),1),a("span",N,d(r.job.team),1),a("span",O,d(r.job.location),1)])])}var E=_(x,[["render",V],["__scopeId","data-v-0fbb2706"]]);const P={name:"JobsList",components:{JobItem:E},props:{jobs:Array}},U={class:"wrapper"},T={class:"jobs"};function C(e,o,r,n,t,s){const c=u("JobItem");return i(),l("div",U,[a("div",T,[(i(!0),l(h,null,y(r.jobs,p=>(i(),g(c,{key:p.id,job:p},null,8,["job"]))),128))])])}var D=_(P,[["render",C],["__scopeId","data-v-63af99a6"]]);const q={name:"Footer",props:{poweredBy:String}},K={class:"footer bg-gray"},M={class:"powered-by white"};function R(e,o,r,n,t,s){return i(),l("div",K,[a("span",M,d(r.poweredBy),1)])}var W=_(q,[["render",R],["__scopeId","data-v-fe8e9d40"]]);const z={name:"app",components:{JobsList:D,Footer:W},computed:j({jobs:e=>e.jobs}),data(){return{poweredBy:"Jobs powered by LEVER"}}},G={id:"app"};function H(e,o,r,n,t,s){const c=u("JobsList"),p=u("Footer");return i(),l("div",G,[m(c,{jobs:e.jobs},null,8,["jobs"]),m(p,{poweredBy:t.poweredBy},null,8,["poweredBy"])])}var Q=_(z,[["render",H]]),X={data:[{categories:{commitment:"Full Time",location:"San Francisco",team:"Pre-Sales"},createdAt:1519162926225,id:"eac055c5-7d16-4f75-89d8-3a97f94a7af8",text:"Sales Solution Architect",hostedUrl:"https://jobs.lever.co/skava/eac055c5-7d16-4f75-89d8-3a97f94a7af8",applyUrl:"https://jobs.lever.co/skava/eac055c5-7d16-4f75-89d8-3a97f94a7af8/apply"},{categories:{commitment:"Full Time",location:"Coimbatore",team:"Platform"},createdAt:1534919035498,id:"2269a887-9925-4182-a6ea-efc492e45285",lists:[],text:"Technical Writer",hostedUrl:"https://jobs.lever.co/skava/2269a887-9925-4182-a6ea-efc492e45285",applyUrl:"https://jobs.lever.co/skava/2269a887-9925-4182-a6ea-efc492e45285/apply"}]};function Y(){return X}function Z(e){return{id:e.id,title:e.text,commitment:e.categories.commitment,location:e.categories.location,team:e.categories.team}}function ee(e){return e.map(o=>Z(o))}function te(){return $.all([Y()]).then(e=>({jobs:ee(e[0].data),error:!1})).catch(e=>({jobs:[],error:!0,fault:e}))}const oe={getJobs:te},f=new J.Store({state:{jobs:[]},mutations:{updateJobs(e,o){e.jobs=o}},actions:{refreshJobs({commit:e}){oe.getJobs().then(o=>{e("updateJobs",o.jobs)})}}});f.dispatch("refreshJobs");w(Q).use(f).mount("#app");

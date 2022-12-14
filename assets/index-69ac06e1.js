import{c as O,n as f,a as R,b as y,u as I,d as L,R as r,e as N,r as v,f as u,g as D,j as p,P as U,C,h as M,i as G,k}from"./vendor-5a68c8dd.js";function ee(){import("data:text/javascript,")}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();const B="modulepreload",V=function(e){return"/"+e},g={},x=function(t,n,o){if(!n||n.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=V(s),s in g)return;g[s]=!0;const i=s.endsWith(".css"),P=i?'[rel="stylesheet"]':"";if(!!o)for(let d=a.length-1;d>=0;d--){const T=a[d];if(T.href===s&&(!i||T.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${P}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":B,i||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),i)return new Promise((d,T)=>{c.addEventListener("load",d),c.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())};const $={isShowMenu:!0,openedTabs:[],activeTab:void 0},_=O({name:"app",initialState:$,reducers:{toggleMenu:e=>{e.isShowMenu=!e.isShowMenu},setOpenedTabs:(e,t)=>{e.openedTabs=t.payload},updateTabUrl:(e,t)=>{const{id:n,url:o}=t.payload;e.openedTabs=e.openedTabs.map(a=>a.id===n?{...a,url:o}:a)},setActiveTab:(e,t)=>{e.activeTab=t.payload},openApp:(e,t)=>{const n=t.payload,o=e.openedTabs.find(({id:s})=>s===e.activeTab),a=e.openedTabs.find(({app:s})=>s===n);if((o==null?void 0:o.app)!==n)if(a)e.activeTab=a.id;else{const s=f();e.openedTabs.push({id:s,app:n}),e.activeTab=s}},openAppInNew:(e,t)=>{const n=f();e.openedTabs.push({id:n,app:t.payload}),e.activeTab=n},closeTab:(e,t)=>{const n=t.payload,o=e.openedTabs.filter(a=>a.id!==n);if(e.activeTab===n){const a=e.openedTabs.findIndex(s=>s.id===n);e.openedTabs=o,e.activeTab=o[Math.min(a,o.length-1)].id}else e.openedTabs=o}}}),{toggleMenu:ne,setOpenedTabs:b,updateTabUrl:H,setActiveTab:A,openApp:j,openAppInNew:ae,closeTab:oe}=_.actions,F=_.reducer,S=R(),l=y({reducer:{app:F},middleware:e=>e().prepend(S.middleware)}),se=()=>I(),re=L,h=S.startListening;window.rmgStore=l;const J={rmg:{name:"Rail Map Generator",allowedEnvs:[r.DEV,r.UAT,r.PRD],allowMultiInstances:!0},rmp:{name:"Rail Map Painter",allowedEnvs:[r.DEV,r.UAT,r.PRD]},"rmg-palette":{name:"Palette",allowedEnvs:[r.DEV,r.UAT,r.PRD]},"rmg-components":{name:"Components",allowedEnvs:[r.DEV,r.UAT]},"rmg-templates":{name:"Templates",allowedEnvs:[r.DEV,r.UAT,r.PRD]},"seed-project":{name:"Seed Project",allowedEnvs:[r.DEV,r.UAT]},"rmg-translate":{name:"Translate",allowedEnvs:[r.DEV,r.UAT]}},W=e=>Object.entries(J).filter(([t,n])=>n.allowedEnvs.includes(e)).map(([t])=>t);var m=(e=>(e.OPENED_TABS="rmg-home__openedTabs",e.ACTIVE_TAB="rmg-home__activeTab",e))(m||{});const ie={GitHub:"GitHub Pages",GitLab:"GitLab Pages",Bitbucket:"Bitbucket Cloud",localhost:"localhost",unknown:"unknown"},ce=(e,t)=>`https://${t===r.PRD?"":"uat-"}railmapgen.${e===N.GITLAB?"gitlab":"github"}.io`;var w=(e=>(e.APP_LOAD="APP_LOAD",e.OPEN_APP="OPEN_APP",e.CLOSE_APP="CLOSE_APP",e.TOGGLE_NAV_MENU="TOGGLE_NAV_MENU",e.CHANGE_LANGUAGE="CHANGE_LANGUAGE",e.SWITCH_MIRROR="SWITCH_MIRROR",e))(w||{});const q="rmg-home:frame-",z=e=>{try{const t=window.localStorage.getItem(m.OPENED_TABS),n=window.localStorage.getItem("rmg-home__openedApps");if(t){const o=JSON.parse(t);Array.isArray(o)?e.dispatch(b(o)):console.warn("initOpenedTabs():: Cannot parse invalid opened tabs state from local storage")}else if(n){const o=JSON.parse(n);if(Array.isArray(o)&&typeof o[0]=="string"){const a=o.map(s=>({id:f(),app:s}));e.dispatch(b(a))}else console.warn("initOpenedTabs():: cannot parse invalid opened apps state from local storage")}}catch(t){console.warn("initOpenedTabs():: cannot parse opened apps state from local storage",t)}},X=e=>{var o;const t=window.localStorage.getItem(m.ACTIVE_TAB),n=e.getState().app.openedTabs;t&&n.some(({id:a})=>a===t)?e.dispatch(A(t)):e.dispatch(A((o=n[0])==null?void 0:o.id))};function K(e){z(e),X(e),h({predicate:(t,n,o)=>JSON.stringify(n.app.openedTabs)!==JSON.stringify(o.app.openedTabs),effect:(t,n)=>{window.localStorage.setItem(m.OPENED_TABS,JSON.stringify(n.getState().app.openedTabs))}}),h({predicate:(t,n,o)=>n.app.activeTab!==o.app.activeTab,effect:(t,n)=>{const o=n.getState().app.activeTab;o!==void 0&&window.localStorage.setItem(m.ACTIVE_TAB,o)}})}let E;const Q=v.exports.lazy(()=>x(()=>import("./app-root-7ff8f98b.js"),["assets/app-root-7ff8f98b.js","assets/vendor-5a68c8dd.js"])),Y=()=>{E=D(document.getElementById("root")),E.render(p(v.exports.StrictMode,{children:p(U,{store:l,children:p(C,{theme:M,children:p(G,{suspenseFallback:p(k,{isIndeterminate:!0}),allowReset:!0,children:p(Q,{})})})})}))};u.ready().then(()=>{K(l),Y(),u.onAppOpen(e=>{W(u.getEnv()).includes(e)&&l.dispatch(j(e))}),u.onUrlUpdate((e,t)=>{if(t){const n=t.slice(q.length);console.log(`Received URL update for frame=${n}, url=${e}`),l.dispatch(H({id:n,url:e}))}}),u.event(w.APP_LOAD,{openedApps:l.getState().app.openedTabs.map(e=>e.app)})});export{w as E,q as F,ee as __vite_legacy_guard,re as a,J as b,oe as c,j as d,ce as e,W as g,ie as m,ae as o,A as s,ne as t,se as u};

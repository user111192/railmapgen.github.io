import{c as R,n as f,a as y,b as O,u as I,d as L,R as r,e as N,r as v,f as u,g as D,j as l,P as M,C as U,h as C,i as G,k}from"./vendor-8a28e290.js";function ee(){import.meta.url,import("_").catch(()=>1);async function*e(){}}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const B="modulepreload",V=function(e){return"/"+e},g={},x=function(t,n,a){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=V(s),s in g)return;g[s]=!0;const i=s.endsWith(".css"),P=i?'[rel="stylesheet"]':"";if(!!a)for(let d=o.length-1;d>=0;d--){const T=o[d];if(T.href===s&&(!i||T.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${P}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":B,i||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),i)return new Promise((d,T)=>{c.addEventListener("load",d),c.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())};const $={isShowMenu:!0,openedTabs:[],activeTab:void 0},S=R({name:"app",initialState:$,reducers:{toggleMenu:e=>{e.isShowMenu=!e.isShowMenu},setOpenedTabs:(e,t)=>{e.openedTabs=t.payload},updateTabUrl:(e,t)=>{const{id:n,url:a}=t.payload;e.openedTabs=e.openedTabs.map(o=>o.id===n?{...o,url:a}:o)},setActiveTab:(e,t)=>{e.activeTab=t.payload},openApp:(e,t)=>{const n=t.payload,a=e.openedTabs.find(({id:s})=>s===e.activeTab),o=e.openedTabs.find(({app:s})=>s===n);if((a==null?void 0:a.app)!==n)if(o)e.activeTab=o.id;else{const s=f();e.openedTabs.push({id:s,app:n}),e.activeTab=s}},openAppInNew:(e,t)=>{const n=f();e.openedTabs.push({id:n,app:t.payload}),e.activeTab=n},closeTab:(e,t)=>{const n=t.payload,a=e.openedTabs.filter(o=>o.id!==n);if(a.length===0)e.openedTabs=[],e.activeTab=void 0,e.isShowMenu=!0;else if(e.activeTab===n){const o=e.openedTabs.findIndex(s=>s.id===n);e.openedTabs=a,e.activeTab=a[Math.min(o,a.length-1)].id}else e.openedTabs=a}}}),{toggleMenu:ne,setOpenedTabs:b,updateTabUrl:H,setActiveTab:A,openApp:j,openAppInNew:ae,closeTab:oe}=S.actions,F=S.reducer,_=y(),p=O({reducer:{app:F},middleware:e=>e().prepend(_.middleware)}),se=()=>I(),re=L,h=_.startListening;window.rmgStore=p;const J={rmg:{name:"Rail Map Generator",allowedEnvs:[r.DEV,r.UAT,r.PRD],allowMultiInstances:!0},rmp:{name:"Rail Map Painter",allowedEnvs:[r.DEV,r.UAT,r.PRD]},"rmg-palette":{name:"Palette",allowedEnvs:[r.DEV,r.UAT,r.PRD]},"rmg-components":{name:"Components",allowedEnvs:[r.DEV,r.UAT]},"rmg-templates":{name:"RMG Templates",allowedEnvs:[r.DEV,r.UAT,r.PRD]},"seed-project":{name:"Seed Project",allowedEnvs:[r.DEV,r.UAT]},"rmg-translate":{name:"Translate",allowedEnvs:[r.DEV,r.UAT]}},W=e=>Object.entries(J).filter(([t,n])=>n.allowedEnvs.includes(e)).map(([t])=>t);var m=(e=>(e.OPENED_TABS="rmg-home__openedTabs",e.ACTIVE_TAB="rmg-home__activeTab",e))(m||{});const ie={GitHub:"GitHub Pages",GitLab:"GitLab Pages",Bitbucket:"Bitbucket Cloud",localhost:"localhost",unknown:"unknown"},ce=(e,t)=>`https://${t===r.PRD?"":"uat-"}railmapgen.${e===N.GITLAB?"gitlab":"github"}.io`;var w=(e=>(e.APP_LOAD="APP_LOAD",e.OPEN_APP="OPEN_APP",e.CLOSE_APP="CLOSE_APP",e.TOGGLE_NAV_MENU="TOGGLE_NAV_MENU",e.CHANGE_LANGUAGE="CHANGE_LANGUAGE",e.SWITCH_MIRROR="SWITCH_MIRROR",e))(w||{});const q="rmg-home:frame-",z=e=>{try{const t=window.localStorage.getItem(m.OPENED_TABS),n=window.localStorage.getItem("rmg-home__openedApps");if(t){const a=JSON.parse(t);Array.isArray(a)?e.dispatch(b(a)):console.warn("initOpenedTabs():: Cannot parse invalid opened tabs state from local storage")}else if(n){const a=JSON.parse(n);if(Array.isArray(a)&&typeof a[0]=="string"){const o=a.map(s=>({id:f(),app:s}));e.dispatch(b(o))}else console.warn("initOpenedTabs():: cannot parse invalid opened apps state from local storage")}}catch(t){console.warn("initOpenedTabs():: cannot parse opened apps state from local storage",t)}},X=e=>{var a;const t=window.localStorage.getItem(m.ACTIVE_TAB),n=e.getState().app.openedTabs;t&&n.some(({id:o})=>o===t)?e.dispatch(A(t)):e.dispatch(A((a=n[0])==null?void 0:a.id))};function K(e){z(e),X(e),h({predicate:(t,n,a)=>JSON.stringify(n.app.openedTabs)!==JSON.stringify(a.app.openedTabs),effect:(t,n)=>{window.localStorage.setItem(m.OPENED_TABS,JSON.stringify(n.getState().app.openedTabs))}}),h({predicate:(t,n,a)=>n.app.activeTab!==a.app.activeTab,effect:(t,n)=>{const a=n.getState().app.activeTab;a!==void 0&&window.localStorage.setItem(m.ACTIVE_TAB,a)}})}let E;const Q=v.lazy(()=>x(()=>import("./app-root-bb5d9bad.js"),["assets/app-root-bb5d9bad.js","assets/vendor-8a28e290.js"])),Y=()=>{E=D(document.getElementById("root")),E.render(l(v.StrictMode,{children:l(M,{store:p,children:l(U,{theme:C,children:l(G,{suspenseFallback:l(k,{isIndeterminate:!0}),allowReset:!0,children:l(Q,{})})})})}))};u.ready().then(()=>{K(p),Y(),u.onAppOpen(e=>{W(u.getEnv()).includes(e)&&p.dispatch(j(e))}),u.onUrlUpdate((e,t)=>{if(t){const n=t.slice(q.length);console.log(`Received URL update for frame=${n}, url=${e}`),p.dispatch(H({id:n,url:e}))}}),u.event(w.APP_LOAD,{openedApps:p.getState().app.openedTabs.map(e=>e.app)})});export{w as E,q as F,ee as __vite_legacy_guard,re as a,J as b,oe as c,j as d,ce as e,W as g,ie as m,ae as o,A as s,ne as t,se as u};

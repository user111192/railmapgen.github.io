!function(){function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}var n=["login","urlRepo"];function e(t,n){if(null==t)return{};var e,r,i=function(t,n){if(null==t)return{};var e,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}function r(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||h(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function a(n,e,r){return(e=function(n){var e=function(n,e){if("object"!==t(n)||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var i=r.call(n,e||"default");if("object"!==t(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(n)}(n,"string");return"symbol"===t(e)?e:String(e)}(e))in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function s(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */s=function(){return n};var n={},e=Object.prototype,r=e.hasOwnProperty,i=Object.defineProperty||function(t,n,e){t[n]=e.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function u(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{u({},"")}catch(L){u=function(t,n,e){return t[n]=e}}function h(t,n,e,r){var o=n&&n.prototype instanceof p?n:p,a=Object.create(o.prototype),s=new S(r||[]);return i(a,"_invoke",{value:z(t,e,s)}),a}function d(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(L){return{type:"throw",arg:L}}}n.wrap=h;var f={};function p(){}function v(){}function g(){}var m={};u(m,a,(function(){return this}));var x=Object.getPrototypeOf,j=x&&x(x(O([])));j&&j!==e&&r.call(j,a)&&(m=j);var b=g.prototype=p.prototype=Object.create(m);function y(t){["next","throw","return"].forEach((function(n){u(t,n,(function(t){return this._invoke(n,t)}))}))}function w(n,e){function o(i,a,s,c){var l=d(n[i],n,a);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==t(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,s,c)}),(function(t){o("throw",t,s,c)})):e.resolve(h).then((function(t){u.value=t,s(u)}),(function(t){return o("throw",t,s,c)}))}c(l.arg)}var a;i(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return a=a?a.then(r,r):r()}})}function z(t,n,e){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return M()}for(e.method=i,e.arg=o;;){var a=e.delegate;if(a){var s=k(a,e);if(s){if(s===f)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var c=d(t,n,e);if("normal"===c.type){if(r=e.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(r="completed",e.method="throw",e.arg=c.arg)}}}function k(t,n){var e=n.method,r=t.iterator[e];if(void 0===r)return n.delegate=null,"throw"===e&&t.iterator.return&&(n.method="return",n.arg=void 0,k(t,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),f;var i=d(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,f;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,f):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function H(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function C(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(H,this),this.reset(!0)}function O(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,i=function n(){for(;++e<t.length;)if(r.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n};return i.next=i}}return{next:M}}function M(){return{value:void 0,done:!0}}return v.prototype=g,i(b,"constructor",{value:g,configurable:!0}),i(g,"constructor",{value:v,configurable:!0}),v.displayName=u(g,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===v||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,l,"GeneratorFunction")),t.prototype=Object.create(b),t},n.awrap=function(t){return{__await:t}},y(w.prototype),u(w.prototype,c,(function(){return this})),n.AsyncIterator=w,n.async=function(t,e,r,i,o){void 0===o&&(o=Promise);var a=new w(h(t,e,r,i),o);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},y(b),u(b,l,"Generator"),u(b,a,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=O,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=n,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),f},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),C(e),f}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var i=r.arg;C(e)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:O(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},n}function c(t,n,e,r,i,o,a){try{var s=t[o](a),c=s.value}catch(l){return void e(l)}s.done?n(c):Promise.resolve(c).then(r,i)}function l(t){return function(){var n=this,e=arguments;return new Promise((function(r,i){var o=t.apply(n,e);function a(t){c(o,r,i,a,s,"next",t)}function s(t){c(o,r,i,a,s,"throw",t)}a(void 0)}))}}function u(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,i,o,a,s=[],c=!0,l=!1;try{if(o=(e=e.call(t)).next,0===n){if(Object(e)!==e)return;c=!1}else for(;!(c=(r=o.call(e)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(u){l=!0,i=u}finally{try{if(!c&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(l)throw i}}return s}}(t,n)||h(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,n){if(t){if("string"==typeof t)return d(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?d(t,n):void 0}}function d(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}System.register(["./chakra-legacy-5519408f.js","./react-legacy-62b68817.js","./index-legacy-f1ac252a.js"],(function(t,i){"use strict";var c,h,d,f,p,v,g,m,x,j,b,y,w,z,k,H,C,S,O,M,L,A,I,_,E,P,D,R,N,T,G,V,B,W,F,U,q,Y,K,J,Z,$,Q,X,tt,nt,et,rt,it,ot,at,st,ct,lt,ut,ht,dt,ft,pt,vt,gt,mt,xt,jt,bt,yt,wt,zt,kt,Ht,Ct,St;return{setters:[function(t){c=t.o,h=t.j,d=t.R,f=t.y,p=t.U,v=t.V,g=t.W,m=t.X,x=t.Y,j=t.l,b=t.Z,y=t._,w=t.x,z=t.K,k=t.$,H=t.n,C=t.z,S=t.a0,O=t.a1,M=t.a2,L=t.a3,A=t.B,I=t.a4,_=t.M,E=t.a5,P=t.h,D=t.i,R=t.k,N=t.m,T=t.a6,G=t.a7,V=t.a8,B=t.q,W=t.r,F=t.a9,U=t.aa,q=t.ab,Y=t.ac,K=t.ad,J=t.L,Z=t.t,$=t.ae,Q=t.af},function(t){X=t.r,tt=t.u,nt=t.k,et=t.B},function(t){rt=t.R,it=t.a,ot=t.b,at=t.c,st=t.d,ct=t.F,lt=t.u,ut=t.e,ht=t.f,dt=t.r,ft=t.E,pt=t.o,vt=t.g,gt=t.t,mt=t.s,xt=t.h,jt=t.i,bt=t.j,yt=t.k,wt=t.m,zt=t.l,kt=t.n,Ht=t.p,Ct=t.q,St=t.v}],execute:function(){t("default",(function(){var t=tt().t,n=ut(),e=lt((function(t){return t.app})),r=e.isPrimary,i=e.isShowMenu,o=u(X.useState(!1),2),a=o[0],s=o[1];X.useEffect((function(){dt.isAnalyticsQADone()||s(!0)}),[]);return!1===r?h.jsx(Ct,{children:h.jsx(bn,{})}):h.jsx(et,{basename:"/",children:h.jsxs(Ct,{className:i?"show-menu":"",children:[h.jsx(C,{variant:i?"ghost":"solid",colorScheme:i?void 0:"primary",size:"md","aria-label":t("Toggle menu"),title:t("Toggle menu"),icon:h.jsx(Bt,{}),position:"absolute",zIndex:110,borderRadius:0,onClick:function(){dt.toggleNavMenu(!i),n(gt()),dt.event(ft.TOGGLE_NAV_MENU,{})}}),h.jsxs(St,{sx:{flexDirection:"row"},children:[h.jsx(mn,{}),h.jsx(Dt,{})]}),h.jsx(xn,{isOpen:a,onClose:function(){return s(!1)}})]})})}));var i=["en","zh-Hans","zh-Hant"],Ot=["ja","ko"],Mt={ar:{ar:"العربية",en:"Arabic",ko:"아랍어","zh-Hans":"阿拉伯文","zh-Hant":"阿拉伯文"},az:{az:"Azərbaycanca",en:"Azerbaijani",ko:"아제르바이잔어","zh-Hans":"阿塞拜疆文","zh-Hant":"阿塞拜疆文"},ca:{ca:"Català",en:"Catalan",ko:"카탈루냐어","zh-Hans":"加泰罗尼亚文","zh-Hant":"加泰隆尼亞文"},da:{da:"Dansk",en:"Danish",ko:"덴마크어","zh-Hans":"丹麦文","zh-Hant":"丹麥文"},de:{de:"Deutsch",en:"German",ko:"독일어","zh-Hans":"德文","zh-Hant":"德文"},el:{el:"Ελληνικά",en:"Greek",ko:"그리스어","zh-Hans":"希腊文","zh-Hant":"希臘文"},en:{en:"English",ja:"英語",ko:"영어","zh-Hans":"英文","zh-Hant":"英文"},es:{en:"Spanish",es:"Español",ko:"스페인어","zh-Hans":"西班牙文","zh-Hant":"西班牙文"},fa:{en:"Persian",fa:"فارسی",ko:"페르시아어","zh-Hans":"波斯文","zh-Hant":"波斯文"},fr:{en:"French",fr:"Français",ko:"프랑스어","zh-Hans":"法文","zh-Hant":"法文"},ga:{en:"Irish",ga:"Gaeilge",ko:"아일랜드어","zh-Hans":"爱尔兰文","zh-Hant":"愛爾蘭文"},gd:{en:"Scottish Gaelic",gd:"Gàidhlig",ko:"스코틀랜드 게일어","zh-Hans":"苏格兰盖尔文","zh-Hant":"蘇格蘭蓋爾文"},hi:{en:"Hindi",hi:"हिन्दी",ko:"힌디어","zh-Hans":"印地文","zh-Hant":"印地文"},hu:{en:"Hungarian",hu:"Magyar",ko:"헝가리어","zh-Hans":"匈牙利文","zh-Hant":"匈牙利文"},id:{en:"Indoesian",id:"Bahasa Indonesia",ko:"인도네시아어","zh-Hans":"印尼文","zh-Hant":"印尼文"},it:{en:"Italian",it:"Italiano",ko:"이탈리아어","zh-Hans":"意大利文","zh-Hant":"意大利文"},ja:{en:"Japanese",ja:"日本語",ko:"일본어","zh-Hans":"日文","zh-Hant":"日文"},kk:{en:"Kazakh",kk:"Қазақша",ko:"카자흐어","zh-Hans":"哈萨克文","zh-Hant":"哈薩克文"},ko:{en:"Korean",ja:"韓国語",ko:"한국어","zh-Hans":"韩文","zh-Hant":"韓文"},ms:{en:"Malay",ko:"말레이어",ms:"Bahasa Melayu","zh-Hans":"马来文","zh-Hant":"馬來文"},no:{en:"Norwegian",ko:"노르웨이어",no:"Norsk","zh-Hans":"挪威文","zh-Hant":"挪威文"},pl:{en:"Polish",ko:"폴란드어",pl:"Polski","zh-Hans":"波兰文","zh-Hant":"波蘭文"},pt:{en:"Portuguese",ko:"포르투갈어",pt:"Português","zh-Hans":"葡萄牙文","zh-Hant":"葡萄牙文"},ro:{en:"Romanian",ko:"루마니아어",ro:"Română","zh-Hans":"罗马尼亚文","zh-Hant":"羅馬尼亞文"},ru:{en:"Russian",ko:"러시아어",ru:"Русский","zh-Hans":"俄文","zh-Hant":"俄文"},sv:{en:"Swedish",ko:"스웨덴어",sv:"Svenska","zh-Hans":"瑞典文","zh-Hant":"瑞典文"},th:{en:"Thai",ko:"태국어",th:"ภาษาไทย","zh-Hans":"泰文","zh-Hant":"泰文"},tr:{en:"Turkish",ko:"튀르키예어",tr:"Türkçe","zh-Hans":"土耳其文","zh-Hant":"土耳其文"},uk:{en:"Ukrainian",ko:"우크라이나어",uk:"Українська","zh-Hans":"乌克兰文","zh-Hant":"烏克蘭文"},ur:{en:"Urdo",ko:"우르두어",ur:"اردو","zh-Hans":"乌尔都文","zh-Hant":"烏爾都文"},uz:{en:"Uzbek",ko:"우즈베크어",uz:"Oʻzbekcha","zh-Hans":"乌兹别克文","zh-Hant":"烏茲別克文"},vi:{en:"Vietnamese",ko:"베트남어",vi:"Tiếng Việt","zh-Hans":"越南文","zh-Hant":"越南文"},"zh-Hans":{en:"Simplified Chinese",ja:"中国語（簡体字）",ko:"중국어 간체자","zh-Hans":"简体中文","zh-Hant":"簡體中文"},"zh-Hant":{en:"Traditional Chinese",ja:"中国語（繁体字）",ko:"중국어 정체자","zh-Hans":"繁体中文","zh-Hant":"繁體中文"}},Lt=function(t){var n=t.children,e=t.noWrap,r=c("RmgOutput",{noWrap:e});return h.jsx(d.output,{sx:r,children:n})};function At(t){var n=t.fields,e=t.noLabel,r=t.minW;return h.jsx(f,{wrap:"wrap",children:n.map((function(t,n){if(t.hidden)return h.jsx(X.Fragment,{},n);var i=t.minW||r,o="full"===i;return h.jsx(rt,{className:o?"mw-full":"",label:t.label,flex:o?void 0:1,minW:o?void 0:i,noLabel:e,oneLine:t.oneLine,children:function(t){switch(t.type){case"input":return h.jsx(st,{placeholder:t.placeholder,defaultValue:t.value,type:t.variant,validator:t.validator,onDebouncedChange:t.onChange,delay:t.debouncedDelay,optionList:t.optionList,isDisabled:t.isDisabled});case"output":return h.jsx(Lt,{noWrap:!0,children:t.value});case"textarea":return h.jsx(at,{placeholder:t.placeholder,defaultValue:t.value,onDebouncedChange:t.onChange,isDisabled:t.isDisabled});case"slider":return h.jsx(ot,{defaultValue:t.value,min:t.min,max:t.max,step:t.step,onThrottledChange:t.onChange,leftIcon:t.leftIcon,rightIcon:t.rightIcon,isDisabled:t.isDisabled});case"select":return h.jsx(it,{defaultValue:t.value,onChange:function(n){var e,r=n.target.value;return null===(e=t.onChange)||void 0===e?void 0:e.call(t,"number"==typeof t.value?Number(r):r.toString())},options:t.options,disabledOptions:t.disabledOptions,isInvalid:t.isInvalid,isDisabled:t.isDisabled});case"switch":return h.jsx(p,{isChecked:t.isChecked,isDisabled:t.isDisabled,onChange:function(n){var e,r=n.target.checked;return null===(e=t.onChange)||void 0===e?void 0:e.call(t,r)}});case"custom":return t.component;default:return h.jsx("div",{})}}(t)},n)}))})}var It="/assets/rmp-logo512-652b509a.png",_t={flex:1,justifyContent:"center",mb:10,"& > div":{mb:3},"& img":{w:120,p:2,backgroundColor:"white",borderRadius:12}};function Et(){var t=tt().t;return h.jsxs(v,{sx:_t,children:[h.jsxs(g,{spacing:3,children:[h.jsx(m,{src:"/logo512.png"}),h.jsx(m,{src:It,backgroundColor:"white"})]}),h.jsx(x,{children:t("Welcome to Rail Map Toolkit")}),h.jsx(j,{fontSize:"lg",textAlign:"center",children:t("Select an app to start your own rail map design!")})]})}function Pt(t){var n,e=t.tab,r=t.isActive,i=u(X.useState(null!==(n=e.url)&&void 0!==n?n:"/"+e.app+"/"),1)[0];return h.jsx(b,{display:r?"block":"none",flex:1,children:h.jsx("iframe",{id:ct+e.id,src:i,loading:"lazy",title:e.app,width:"100%",height:"100%"})})}function Dt(){var t=lt((function(t){return t.app})),n=t.openedTabs,e=t.activeTab,r=u(nt(),2),i=(r[0],r[1]);return X.useEffect((function(){if(e){var t,r=null===(t=n.find((function(t){return t.id===e})))||void 0===t?void 0:t.app;i(r?{app:r}:{})}else i({})}),[e]),0===n.length?h.jsx(Et,{}):h.jsx(h.Fragment,{children:n.map((function(t){return h.jsx(Pt,{tab:t,isActive:e===t.id},t.id)}))})}function Rt(t){return y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M11 7h2v2h-2V7zm0 4h2v6h-2v-6zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}}]})(t)}function Nt(t){return y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v2h-2V7zm0 4h2v6h-2v-6z"}}]})(t)}function Tt(t){return y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}}]})(t)}function Gt(t){return y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z"}}]})(t)}function Vt(t){return y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}}]})(t)}function Bt(t){return y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}}]})(t)}function Wt(t){return y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}}]})(t)}function Ft(t){return y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"}}]})(t)}function Ut(t){return y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"}}]})(t)}var qt={"& button:first-of-type":{w:"100%",overflow:"hidden",justifyContent:"flex-start",textOverflow:"ellipsis",textAlign:"start","& span.chakra-button__icon":{ml:-1,color:"orange.300",'[data-theme="dark"] &':{color:"orange.200"}}},'&[aria-current="true"] > button':{bg:"primary.50",_hover:{bg:"primary.100"},'[data-theme="dark"] &':{bg:"primary.700",_hover:{bg:"primary.600"}}}};function Yt(t){var n,e=t.appId,r=t.onAboutOpen,i=tt().t,o=ut(),a=w("(min-width: ".concat(z.breakpoints.sm,")")),s=lt((function(t){return t.app})),c=s.activeTab,l=s.openedTabs,u=ht[e],d=u.name.split(" - ").map((function(t){return i(t)})).join(" - "),f=l.some((function(t){return t.app===e})),p=!u.allowMultiInstances&&(null===(n=l.find((function(t){return t.id===c})))||void 0===n?void 0:n.app)===e,v=function(t){f||dt.event(ft.OPEN_APP,{appId:e,isOpenInNew:t}),o(t?pt(e):vt({appId:e})),a[0]||(o(gt()),dt.toggleNavMenu(!1))};return h.jsxs(h.Fragment,{children:[h.jsxs(k,{variant:p?"solid":"ghost",size:"md",isAttached:!0,"aria-current":p,sx:qt,children:[h.jsx(H,{onClick:function(){return v(!1)},leftIcon:f?h.jsx(Gt,{title:i("Running")}):h.jsx(b,{w:4}),children:d}),u.allowMultiInstances&&h.jsx(C,{"aria-label":i("New tab"),title:i("New tab"),icon:h.jsx(Tt,{}),onClick:function(){return v(!0)}}),h.jsxs(S,{children:[h.jsx(O,{as:C,icon:h.jsx(Wt,{}),"aria-label":i("More"),title:i("More")}),h.jsxs(M,{children:[f&&h.jsx(L,{icon:h.jsx(Vt,{}),onClick:function(){return o(jt(t=e)),void dt.event(ft.CLOSE_APP,{app:t});var t},children:u.allowMultiInstances?i("Close all tabs"):i("Close app")}),h.jsx(L,{icon:h.jsx(Rt,{}),onClick:r,children:i("About")})]})]})]}),u.allowMultiInstances&&l.filter((function(t){return t.app===e})).map((function(t,n){var r=t.id===c;return h.jsxs(k,{variant:r?"solid":"ghost",size:"sm",ml:8,mr:1,isAttached:!0,"aria-current":r,sx:qt,children:[h.jsxs(H,{onClick:function(){return n=t.id,o(mt(n)),void(a[0]||(o(gt()),dt.toggleNavMenu(!1)));var n},children:[h.jsx(A,{mr:2,children:n+1}),i("Tab")+" "+(n+1).toString()+" - "+d]}),h.jsx(C,{"aria-label":i("Close tab"),title:i("Close tab"),icon:h.jsx(Vt,{}),onClick:function(){return n=t.id,o(xt(n)),void dt.event(ft.CLOSE_APP,{app:e});var n}})]},t.id)}))]})}var Kt=function(){var t=l(s().mark((function t(n){var e,r,i;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="/".concat(n,"/info.json"),t.prev=1,t.next=4,fetch(e);case 4:return r=t.sent,t.next=7,r.json();case 7:return i=t.sent,t.abrupt("return",i.version);case 11:return t.prev=11,t.t0=t.catch(1),console.log("Failed to get version for ".concat(n)),t.abrupt("return","unknown");case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(n){return t.apply(this,arguments)}}(),Jt=function(){var t=l(s().mark((function t(n){var e,r,i;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="/".concat(n,"/legacy-contributor-list.txt"),t.next=3,fetch(e);case 3:return r=t.sent,t.next=6,r.text();case 6:return i=t.sent,t.abrupt("return",i.split("\n"));case 8:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();function Zt(t){var n,e=t.appId,r=t.onClose,i=tt().t,o=u(X.useState("Unknown"),2),a=o[0],s=o[1],c=e?null===(n=ht[e])||void 0===n||null===(n=n.url)||void 0===n||null===(n=n.split("/"))||void 0===n?void 0:n[1]:void 0;return X.useEffect((function(){c?Kt(c).then((function(t){return s(t)})):s("Unknown")}),[c]),h.jsxs(I,{isOpen:!!e,onClose:r,size:"xl",scrollBehavior:"inside",children:[h.jsx(_,{}),h.jsxs(E,{children:[h.jsxs(P,{children:[i("About")+" "+(e?ht[e].name.split(" - ").map((function(t){return i(t)})).join(" - "):""),h.jsx(A,{ml:1,children:a})]}),h.jsx(D,{}),h.jsx(R,{}),h.jsx(N,{children:h.jsx(H,{colorScheme:"primary",onClick:function(){return window.open("https://github.com/railmapgen/"+c,"_blank")},children:i("Visit GitHub")})})]})]})}var $t={flexDirection:"column","& h4":{mx:3,my:2},"& > div":{flexDirection:"column"}};function Qt(){var t=tt().t,n=u(X.useState(),2),e=n[0],r=n[1],i=bt(dt.getEnv());return h.jsxs(f,{sx:$t,children:[h.jsx(x,{as:"h4",size:"md",children:t("Apps")}),h.jsx(f,{children:i.map((function(t){return h.jsx(Yt,{appId:t,onAboutOpen:function(){return r(t)}},t)}))}),h.jsx(Zt,{appId:e,onClose:function(){return r(void 0)}})]})}var Xt={flexDirection:"column",py:1,"& h4":{mx:3,my:2},"& > div":{px:2}};function tn(){var t,n=tt().t,e=yt().setColourMode,r={light:n("Light"),dark:n("Dark"),system:n("System")},s="GitHub"===dt.getInstance()?"GitLab":"GitHub",c=[{type:"select",label:n("Language"),value:dt.getLanguage(),options:(t={},a(t,n("Main languages"),i.reduce((function(t,n){return o(o({},t),{},a({},n,Mt[n][n]))}),{})),a(t,n("Other languages"),Ot.reduce((function(t,n){return o(o({},t),{},a({},n,Mt[n][n]))}),{})),t),onChange:function(t){var n=t;dt.setLanguage(n),dt.getI18nInstance().changeLanguage(n),dt.event(ft.CHANGE_LANGUAGE,{language:n})}},{type:"select",label:n("Appearance"),value:dt.getColourMode(),options:r,onChange:function(t){return e(t)}},{type:"custom",label:n("Switch to")+" "+wt[s],component:h.jsx(H,{size:"xs",onClick:function(){var t=zt(s,dt.getEnv());window.open(t,"_blank"),dt.event(ft.SWITCH_MIRROR,{mirrorUrl:t})},children:n("Switch")}),minW:"full",oneLine:!0}];return h.jsxs(f,{sx:Xt,children:[h.jsx(x,{as:"h4",size:"md",children:n("Settings")}),h.jsx(b,{children:h.jsx(At,{fields:c})})]})}var nn=function(){var t=l(s().mark((function t(n,e){var r,i,o,a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://api.github.com/repos/railmapgen/".concat(n,"/contributors"),i=new URLSearchParams({per_page:"100",page:e.toString()}),t.next=4,fetch(r+"?"+i.toString());case 4:return o=t.sent,t.next=7,o.json();case 7:return a=t.sent,t.abrupt("return",a.map((function(t){return t.login})));case 9:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),en=function(){var t=l(s().mark((function t(n){var e,i,o;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=[],i=1;case 2:return t.next=5,nn(n,i);case 5:if(o=t.sent,e.push.apply(e,r(o)),!(o.length<100)){t.next=11;break}return t.abrupt("break",14);case 11:i++;case 12:t.next=2;break;case 14:return t.abrupt("return",e);case 15:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),rn=["","wongchito","thekingofcity","github-actions[bot]"],on={},an=function(){var t=l(s().mark((function t(n){var e,r,i,o,a,c,l;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=ht[n],r=e.showContributors,i=e.legacyContributors,r){t.next=3;break}return t.abrupt("return",[]);case 3:if(!(n in on)){t.next=5;break}return t.abrupt("return",on[n]);case 5:return o=[en(n)],i&&o.push(Jt(n)),t.prev=7,t.next=10,Promise.all(o);case 10:return a=t.sent,c=new Set(a.flat()),l=Array.from(c).filter((function(t){return!rn.includes(t)})),on[n]=l,t.abrupt("return",l);case 17:return t.prev=17,t.t0=t.catch(7),console.error("[rmt] unable to fetch contributors for:",n),t.abrupt("return",void 0);case 21:case"end":return t.stop()}}),t,null,[[7,17]])})));return function(n){return t.apply(this,arguments)}}();function sn(t){var r=t.login,i=t.urlRepo,a=e(t,n),s=i?"https://github.com/railmapgen/".concat(i,"/issues?q=is:issue+author:").concat(r):"https://github.com/".concat(r);return h.jsx(T,o({name:r,title:r,src:"https://github.com/".concat(r,".png"),loading:"lazy",onClick:function(){return window.open(s,"_blank")},cursor:"pointer"},a))}var cn={position:"relative",minH:20,"& .chakra-alert":{flexDirection:"column"},"& .chakra-alert__icon":{boxSize:7,mr:0,mb:1}};function ln(t){var n=t.appId,e=tt().t,r=u(X.useState(),2),i=r[0],o=r[1],a=u(X.useState(!0),2),s=a[0],c=a[1];return X.useEffect((function(){an(n).then(o).finally((function(){c(!1)}))}),[]),h.jsx(f,{sx:cn,children:s?h.jsx(kt,{isIndeterminate:!0}):i?h.jsx(G,{spacing:1.5,children:i.map((function(t){return h.jsx(V,{children:h.jsx(sn,{login:t,urlRepo:n,size:"sm"})},t)}))}):h.jsxs(B,{status:"warning",children:[h.jsx(W,{}),e("Unable to load contributors")]})})}var un=["52PD","linchen1965"],hn={"& h5":{mt:6,mb:4,"&:first-of-type":{mt:0}},"& h6":{mt:5,mb:2,"&:first-of-type":{mt:0}},"& .dev-team-stack":{"& > span":{minW:"75%",borderRadius:"lg",cursor:"pointer","& > span:last-of-type":{display:"block"},"& p":{fontSize:"sm","&:first-of-type":{fontSize:"lg",fontWeight:"bold",mb:1}}},"& .chakra-avatar":{ml:1,mr:3,my:4}},"& i":{mt:3,fontSize:"xs"}};function dn(t){var n=t.isOpen,e=t.onClose,r=tt().t;return h.jsxs(I,{isOpen:n,onClose:e,size:"xl",scrollBehavior:"inside",children:[h.jsx(_,{}),h.jsxs(E,{children:[h.jsx(P,{children:r("Contributors")}),h.jsx(D,{}),h.jsxs(R,{sx:hn,children:[h.jsx(x,{as:"h5",size:"sm",children:r("Developer team")}),h.jsxs(v,{className:"dev-team-stack",children:[h.jsxs(F,{size:"lg",onClick:function(){return window.open("https://github.com/wongchito","_blank")},children:[h.jsx(T,{src:"https://github.com/wongchito.png",size:"lg"}),h.jsxs(U,{children:[h.jsx(j,{children:"Chito Wong"}),h.jsx(j,{children:"Author of Rail Map Toolkit platform"}),h.jsx(j,{children:"Author of Rail Map Generator"})]})]}),h.jsxs(F,{size:"lg",onClick:function(){return window.open("https://github.com/thekingofcity","_blank")},children:[h.jsx(T,{src:"https://github.com/thekingofcity.png",size:"lg"}),h.jsxs(U,{children:[h.jsx(j,{children:"thekingofcity"}),h.jsx(j,{children:"Author of Rail Map Painter"}),h.jsx(j,{children:"Author of RMG (Shanghai Metro style)"})]})]}),h.jsxs(F,{size:"lg",onClick:function(){return window.open("https://github.com/langonginc","_blank")},children:[h.jsx(T,{src:"https://github.com/langonginc.png",size:"lg"}),h.jsxs(U,{children:[h.jsx(j,{children:"5+1"}),h.jsx(j,{children:"Author of RMP2RMG conversion"})]})]})]}),h.jsx(x,{as:"h5",size:"sm",children:r("Resource administrators")}),h.jsx(G,{spacing:1.5,children:un.map((function(t){return h.jsx(V,{children:h.jsx(sn,{login:t,size:"md"})},t)}))}),h.jsx(x,{as:"h5",size:"sm",children:r("Resource contributors")}),Object.entries(ht).filter((function(t){var n=u(t,2);n[0];return n[1].showContributors})).map((function(t){var n=u(t,2),e=n[0],i=n[1];return h.jsxs(X.Fragment,{children:[h.jsx(x,{as:"h6",size:"xs",mt:5,mb:2,children:r(i.name)}),h.jsx(ln,{appId:e},e)]},e)})),h.jsx(j,{as:"i",children:r("Notes: Contributors are sorted by number of commits and commit time.")})]}),h.jsx(N,{children:h.jsx(H,{colorScheme:"primary",onClick:function(){return window.open("https://github.com/railmapgen/rmg/wiki/How-to-add-color-palette-and-line-templates","_blank")},children:r("Contribution Wiki")})})]})]})}function fn(t){var n=t.isOpen,e=t.onClose,r=tt().t,i=u(X.useState(dt.isAllowAnalytics()),2),o=i[0],a=i[1],s=u(X.useState(),2),c=s[0],l=s[1];X.useEffect((function(){n||l(void 0)}),[n]);var d=[{type:"switch",label:r("Allow cookies to help improve our website"),isChecked:o,onChange:a,oneLine:!0}];return h.jsxs(I,{isOpen:n,onClose:e,children:[h.jsx(_,{}),h.jsxs(E,{children:[c&&h.jsxs(B,{status:"info",variant:"solid",size:"xs",children:[h.jsx(W,{}),r(c)]}),h.jsxs(b,{position:"relative",children:[h.jsx(P,{children:r("Privacy settings")}),h.jsx(D,{})]}),h.jsx(R,{children:h.jsx(At,{fields:d})}),h.jsx(N,{children:h.jsx(H,{colorScheme:"primary",isDisabled:!!c,onClick:function(){dt.allowAnalytics(o).refreshRequired?l("Refreshing is required for changes to take effect."):e()},children:r("Save")})})]})]})}function pn(t){return y({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M126.12 315.1A47.06 47.06 0 1179.06 268h47.06zm23.72 0a47.06 47.06 0 0194.12 0v117.84a47.06 47.06 0 11-94.12 0zm47.06-188.98A47.06 47.06 0 11244 79.06v47.06zm0 23.72a47.06 47.06 0 010 94.12H79.06a47.06 47.06 0 010-94.12zm188.98 47.06a47.06 47.06 0 1147.06 47.1h-47.06zm-23.72 0a47.06 47.06 0 01-94.12 0V79.06a47.06 47.06 0 1194.12 0zM315.1 385.88a47.06 47.06 0 11-47.1 47.06v-47.06zm0-23.72a47.06 47.06 0 010-94.12h117.84a47.06 47.06 0 110 94.12z"}}]})(t)}function vn(){var t=tt().t,n=u(X.useState(!1),2),e=n[0],r=n[1],i=u(X.useState(!1),2),o=i[0],a=i[1];return h.jsxs(f,{direction:"column",children:[h.jsx(q,{}),h.jsxs(Y,{templateColumns:"repeat(4, auto)",children:[h.jsx(K,{children:h.jsx(H,{as:J,variant:"ghost",size:"sm",w:"100%",leftIcon:h.jsx(pn,{}),target:"_blank",href:"https://join.slack.com/t/railmapgenerator/shared_invite/zt-1odhhta3n-DdZF~fnVwo_q0S0RJmgV8A",children:"Slack"})}),h.jsx(K,{children:h.jsx(H,{variant:"ghost",size:"sm",w:"100%",leftIcon:h.jsx(Ft,{}),onClick:function(){return r(!0)},children:t("Contributors")})}),h.jsx(K,{children:h.jsx(H,{variant:"ghost",size:"sm",w:"100%",leftIcon:h.jsx(Nt,{}),onClick:function(){return a(!0)},children:t("Privacy")})}),h.jsx(K,{children:h.jsx(H,{as:J,variant:"ghost",size:"sm",w:"100%",leftIcon:h.jsx(Ut,{}),target:"_blank",href:"https://rmttutorial.wordpress.com",children:t("Tutorial")})})]}),h.jsx(dn,{isOpen:e,onClose:function(){return r(!1)}}),h.jsx(fn,{isOpen:o,onClose:function(){return a(!1)}})]})}var gn={flexShrink:0,flexDirection:"column",overflow:"hidden",alignItems:"flex-end",transition:"0.3s ease-in-out",maxW:0,visibility:"hidden",boxShadow:"lg",zIndex:100,".show-menu &":{maxW:{base:"100%",md:420},w:{base:"100%",md:"unset"},visibility:"initial"},"& > div":{flexDirection:"column",h:"100%",w:{base:"100vw",md:420},"& .nav-menu__header":{flex:0,flexDirection:"row",alignItems:"center",minHeight:10,pl:12},"& .nav-menu__body":{flexDirection:"column",flex:1,overflow:"hidden","& > div:first-of-type":{flex:1,overflowY:"auto"}}},"& .chakra-alert":{flexGrow:0,pl:3,pr:2,py:2,"& a":{fontWeight:"bold",textDecoration:"underline","&:hover, &:focus":{textDecoration:"none"}}}};function mn(){var t=tt().t,n=u(nt(),1)[0],e=("GitLab"===dt.getInstance()?"https://railmapgen.gitlab.io/":"https://railmapgen.github.io/")+"?"+n.toString();return h.jsx(f,{as:"section",sx:gn,children:h.jsxs(f,{children:[h.jsxs(f,{className:"nav-menu__header",children:[h.jsx(x,{as:"h4",size:"md",children:t("Rail Map Toolkit")}),h.jsx(Ht,{environment:dt.getEnv(),version:dt.getAppVersion()})]}),"PRD"!==dt.getEnv()&&h.jsxs(B,{status:"warning",children:[h.jsx(W,{}),h.jsxs(Z,{children:[t("You're currently viewing a testing environment.")," ",h.jsx(J,{href:e,isExternal:!0,children:t("Back to production environment")})]})]}),h.jsxs(f,{className:"nav-menu__body",children:[h.jsx(Qt,{}),h.jsx(tn,{})]}),h.jsx(vn,{})]})})}function xn(t){var n=t.isOpen,e=t.onClose,r=tt().t,i=X.useRef(null);return h.jsxs(I,{initialFocusRef:i,isOpen:n,onClose:function(){},children:[h.jsx(_,{}),h.jsxs(E,{children:[h.jsx(P,{children:r("CookiesModal.header")}),h.jsxs(R,{children:[h.jsx(j,{children:r("CookiesModal.text1")}),h.jsx(j,{mt:2,children:r("CookiesModal.text2")}),h.jsx($,{children:h.jsxs(Q,{children:[" ",r("CookiesModal.item1")]})}),h.jsx(j,{mt:2,children:r("CookiesModal.text3")})]}),h.jsx(N,{children:h.jsxs(g,{children:[h.jsx(H,{variant:"ghost",onClick:function(){dt.allowAnalytics(!1).refreshRequired?window.location.reload():e()},children:r("CookiesModal.reject")}),h.jsx(H,{ref:i,colorScheme:"primary",onClick:function(){dt.allowAnalytics(!0),e()},children:r("CookiesModal.accept")})]})})]})]})}var jn=function(){};function bn(){var t=tt().t;return h.jsx(I,{isOpen:!0,onClose:jn,children:h.jsxs(E,{children:[h.jsx(P,{children:t("Rail Map Toolkit is opened in another window")}),h.jsx(R,{children:t("You cannot open multiple Rail Map Toolkit at the same time. Please close this window.")}),h.jsx(N,{})]})})}}}}))}();

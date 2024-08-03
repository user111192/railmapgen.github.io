const __vite__fileDeps=["assets/app-root-D1AzMs2K.js","assets/chakra-BCjsUIEC.js","assets/react-Dueqtgju.js","assets/rmg-theme-provider-BSc39UsG.js","assets/rmg-theme-provider-Bb8_fFLS.css","assets/rmg-fields-nL3g8sFP.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as p,l as m,c as U,R as F,a as j,b as B}from"./rmg-theme-provider-BSc39UsG.js";import{j as w}from"./chakra-BCjsUIEC.js";import{i as W,d as V,e as J,f as Y,h as q,u as z,j as K,k as P,r as $,P as Q,I as X}from"./react-Dueqtgju.js";function Xo(){import.meta.url,import("_").catch(()=>1),async function*(){}().next()}const Z="modulepreload",ee=function(e){return"/"+e},A={},te=function(t,o,a){let i=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),s=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));i=Promise.all(o.map(c=>{if(c=ee(c),c in A)return;A[c]=!0;const l=c.endsWith(".css"),r=l?'[rel="stylesheet"]':"";if(document.querySelector('link[href="'.concat(c,'"]').concat(r)))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":Z,l||(d.as="script",d.crossOrigin=""),d.href=c,s&&d.setAttribute("nonce",s),document.head.appendChild(d),l)return new Promise((H,N)=>{d.addEventListener("load",H),d.addEventListener("error",()=>N(new Error("Unable to preload CSS for ".concat(c))))})}))}return i.then(()=>t()).catch(n=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=n,window.dispatchEvent(s),!s.defaultPrevented)throw n})},oe=()=>{document.querySelector('link[rel="canonical"]').setAttribute("href",window.location.origin)};oe();const ae="操作",ne="应用程序",se="黑",ie="取消",re="城市",ce="组件",le="确定",pe="继续",de="复制",ue="编辑",me="语言/Language",he="理由",ge="名称",be="下一步",we="打开",Te="调色板",fe="上一步",Se="删除",ve="重置",Re="设置",Ae="提交",ke="翻译",ye="上传",Ce="白",Pe={Action:ae,Apps:ne,"Back to list":"返回列表","Background colour":"背景色",Black:se,Cancel:ie,City:re,Components:ce,"Configuration file":"配置文件",Confirm:le,Continue:pe,"Country/Region":"国家/地区",Copy:de,Edit:ue,"Foreground colour":"前景色","Go back":"返回",Language:me,Justification:he,Name:ge,Next:be,Open:we,Palette:Te,"Please select...":"请选择...",Previous:fe,"Rail Map Generator":"铁路线路图生成器","Rail Map Painter":"地铁线路图绘制器","Rail Map Toolkit":"线路图工具包",Remove:Se,Reset:ve,"RMG Templates":"RMG 模板","RMP Gallery":"RMP 画廊","Seed Project":"种子项目",Settings:Re,Submit:Ae,Translate:ke,Upload:ye,White:Ce},$e="動作",Me="應用程式",Ge="黑",Le="取消",Oe="城市",De="元件",Ie="確定",_e="繼續",xe="複製",Ee="編輯",He="語言/Language",Ne="理由",Ue="名稱",Fe="下一步",je="開啟",Be="調色盤",We="上一步",Ve="移除",Je="重設",Ye="設定",qe="提交",ze="翻譯",Ke="上載",Qe="白",Xe={Action:$e,Apps:Me,"Back to list":"返回列表","Background colour":"背景色",Black:Ge,Cancel:Le,City:Oe,Components:De,"Configuration file":"設定檔",Confirm:Ie,Continue:_e,Copy:xe,"Country/Region":"國家/地區",Edit:Ee,"Foreground colour":"前景色","Go back":"返回",Language:He,Justification:Ne,Name:Ue,Next:Fe,Open:je,Palette:Be,"Please select...":"請選擇...",Previous:We,"Rail Map Generator":"鐵路路綫圖產生器","Rail Map Painter":"地鐵路綫圖繪製器","Rail Map Toolkit":"路綫圖工具組",Remove:Ve,Reset:Je,"RMG Templates":"RMG 範本","RMP Gallery":"RMP 畫廊","Seed Project":"種子項目",Settings:Ye,Submit:qe,Translate:ze,Upload:Ke,White:Qe},Ze="言語/Language",et="パレット",tt="削除",ot={Language:Ze,Palette:et,"Rail Map Generator":"鉄道路線図ジェネレータ","Rail Map Toolkit":"路線図ツールキット",Remove:tt,"RMG Templates":"RMG テンプレート"},at="조작",nt="앱",st="블랙",it="취소",rt="도시",ct="요소",lt="확인",pt="복사",dt="편집",ut="언어/Language",mt="이유",ht="명칭",gt="다음",bt="열기",wt="팔레트",Tt="나아가",ft="삭제",St="리셋",vt="설치",Rt="제출",At="번역",kt="업로드",yt="화이트",Ct={Action:at,Apps:nt,"Back to list":"다시 목록으로","Background colour":"배경색",Black:st,Cancel:it,City:rt,Components:ct,"Configuration file":"환경 설정 파일",Confirm:lt,Copy:pt,"Country/Region":"국가/지역",Edit:dt,"Foreground colour":"전경색","Go back":"되돌아가",Language:ut,Justification:mt,Name:ht,Next:gt,Open:bt,Palette:wt,"Please select...":"선택해주세요",Previous:Tt,"Rail Map Generator":"철도 노선도 생성기","Rail Map Painter":"지하철 노선도 그리기","Rail Map Toolkit":"노선도 툴킷",Remove:ft,Reset:St,"RMG Templates":"RMG 템플릿","RMP Gallery":"RMP 갤러리","Seed Project":"종자 프로젝트",Settings:vt,Submit:Rt,Translate:At,Upload:kt,White:yt};var Pt={en:{},"zh-Hans":Pe,"zh-Hant":Xe,ja:ot,ko:Ct};const $t={header:"Cookies on this website",text1:"At RMG we use cookies to help ensure that our website and services are able to function properly. These cookies are necessary and so are set automatically.",text2:"We would also like to use some cookies to:",item1:"improve our website based on how you use it",text3:"These cookies are optional. If you'd like to accept all optional cookies, select 'Accept all cookies'. If you'd like to reject them, select 'Reject'.",accept:"Accept all cookies",reject:"Reject"},Mt={text1:"The fonts below used in your projects were loaded from our server instead of your device.",text2:"This may cause unnecessary network traffic and slowness especially if your connection is unstable.",text3:"You can download and install these open source and free fonts to get a better experience.",safari:"This is not applicable to Safari users. ☹️"},Gt={CookiesModal:$t,FontsSection:Mt},Lt={header:"本网站的 Cookies",text1:"在 RMG，我们使用 Cookies 来确保本网站及服务可以正常运作。这些 Cookies 是必需的，因此已默认启动。",text2:"我们也会以 Cookies 的方式：",item1:"分析您的使用模式，用来改进本网站",text3:"这些 Cookies 是可选的。如果您想允许所有可选 Cookies，请选择“接受所有 Cookies”。如果您想禁用 Cookies，请选择“拒绝”。",accept:"接受所有 Cookies",reject:"拒绝"},Ot={text1:"您的项目使用的下列字体，是从我们的服务器而不是您的设备加载。",text2:"这可能导致非必要的网络流量，如您的连接不稳定，还会造成加载缓慢。",text3:"您可以下载和安装这些开源免费字体，以提升使用体验。",safari:"不适用于 Safari ☹️"},Dt="关于",It="外观",_t="贡献者",xt="深色",Et="开发者工具",Ht="捐赠者",Nt="浅色",Ut="更多",Ft="好",jt="正在运行",Bt="保存",Wt="切换",Vt="跟随系统",Jt="标签页",Yt="使用教程",qt={CookiesModal:Lt,FontsSection:Ot,About:Dt,"Allow cookies to help improve our website":"允许用 Cookies 帮助改进本网站",Appearance:It,"Back to production environment":"返回生产环境","Close all tabs":"关闭所有标签页","Close app":"关闭应用程序","Close current tab":"关闭当前标签页","Close tab":"关闭标签页","Contribution Wiki":"贡献者指南",Contributors:_t,"Current session has been terminated. Please close this window.":"当前会话已被终止，请关闭此窗口。",Dark:xt,"Developer team":"开发者团队",Devtools:Et,Donators:Ht,"Don't show again":"不再显示","Download desktop app":"下载桌面应用程序","Fonts are slow to load? Learn how to speed it up!":"字体加载太慢？看看如何提速！","GitHub Pages mirror":"GitHub Pages 镜像","GitLab Pages mirror":"GitLab Pages 镜像","Happy Chinese New Year!":"新年快乐！","Help & support":"帮助与支持","Join us on Slack":"加入我们的 Slack 群组",Light:Nt,"Main languages":"主要语言",More:Ut,"More mirrors":"更多镜像","New tab":"新标签页","Notes: Contributors are sorted by number of commits and commit time.":"注：贡献者名单按提交次数和时间排序。",OK:Ft,"Other languages":"其他语言","Pro tip":"提示","Rail Map Toolkit is opened in another window":"线路图工具包已在另一窗口中打开","Raise an Issue on GitHub":"在 GitHub 提交一个 Issue","Refreshing is required for changes to take effect.":"刷新页面后变更才会生效","Resource administrators":"资源管理员","Resource contributors":"资源贡献者","Restart RMT in this window":"在此窗口重新启动工具包",Running:jt,Save:Bt,"Select an app to start your own rail map design!":"选择一个应用程序来开始你的线路图设计！","Show dev tools for 1 day":"显示开发者工具 1 天",Switch:Wt,"Switch to":"切换至",System:Vt,Tab:Jt,"Terms and conditions":"条款与细则",Tutorial:Yt,"Unable to load contributors":"无法加载贡献者名单","Useful links":"实用链接","Visit GitHub":"访问 GitHub","Web fonts":"网络字体","Welcome to Rail Map Toolkit":"欢迎使用线路图工具包","You cannot open multiple Rail Map Toolkit at the same time. Please close this window.":"您不能同时打开多个线路图工具包，请关闭当前窗口。","You're currently viewing a testing environment.":"您正在浏览测试环境。"},zt={header:"本網站的 Cookies",text1:"在 RMG，我們使用 Cookies 以確保本網站及服務可以正常運作。這些 Cookies 是必需的，因此已預設啟用。",text2:"我們亦會以 Cookies 的方式：",item1:"分析閣下的使用模式，用來改進本網站",text3:"這些 Cookies 是可選的。如果閣下想容許所有可選 Cookies，請選擇「接受所有 Cookies」。如果閣下想禁用 Cookies，請選擇「拒絕」。",accept:"接受所有 Cookies",reject:"拒絕"},Kt={text1:"你的專案使用的下列字型，是從我們的伺服器而非你的裝置載入。",text2:"這可能導致非必要的網絡流量，如你的連線不穩，還會造成載入緩慢。",text3:"你可以下載及安裝這些開源免費字型，以提升使用體驗。",safari:"不適用於 Safari ☹️"},Qt="關於",Xt="外觀",Zt="貢獻者",eo="深色",to="開發人員工具",oo="捐贈者",ao="淺色",no="更多",so="好",io="運行中",ro="儲存",co="切換",lo="跟隨系統",po="分頁",uo="使用指南",mo={CookiesModal:zt,FontsSection:Kt,About:Qt,"Allow cookies to help improve our website":"容許以 Cookies 幫助改進本網站",Appearance:Xt,"Back to production environment":"返回生產環境","Close all tabs":"關閉所有分頁","Close app":"關閉應用程式","Close current tab":"關閉當前分頁","Close tab":"關閉分頁","Contribution Wiki":"貢獻者指南",Contributors:Zt,"Current session has been terminated. Please close this window.":"當前工作階段已被終止，請關閉該視窗。",Dark:eo,"Developer team":"開發人員團隊",Devtools:to,Donators:oo,"Don't show again":"不再顯示","Download desktop app":"下載桌面應用程式","Fonts are slow to load? Learn how to speed it up!":"字型載入太慢？看看如何提速！","GitHub Pages mirror":"GitHub Pages 鏡像","GitLab Pages mirror":"GitLab Pages 鏡像","Happy Chinese New Year!":"新年快樂！","Help & support":"幫助及支援","Join us on Slack":"加入我們的 Slack 羣組",Light:ao,"Main languages":"主要語言",More:no,"More mirrors":"更多鏡像","New tab":"新分頁","Notes: Contributors are sorted by number of commits and commit time.":"註：貢獻者列表按提交次數及時間排序。",OK:so,"Other languages":"其他語言","Pro tip":"小貼士","Rail Map Toolkit is opened in another window":"路綫圖工具組已於另一視窗中開啟","Raise an Issue on GitHub":"於 GitHub 提交一個 Issue","Refreshing is required for changes to take effect.":"重新整理頁面後變更才會生效","Resource administrators":"資源管理員","Resource contributors":"資源貢獻者","Restart RMT in this window":"於該視窗重新啟動工具組",Running:io,Save:ro,"Select an app to start your own rail map design!":"選擇一個應用程式以開始你的路綫圖設計！","Show dev tools for 1 day":"顯示開發人員工具 1 日",Switch:co,"Switch to":"切換至",System:lo,Tab:po,"Terms and conditions":"條款及細則",Tutorial:uo,"Unable to load contributors":"無法載入貢獻者列表","Useful links":"實用連結","Visit GitHub":"造訪 GitHub","Web fonts":"網絡字型","Welcome to Rail Map Toolkit":"歡迎使用路綫圖工具組","You cannot open multiple Rail Map Toolkit at the same time. Please close this window.":"你不能同時開啟多個路綫圖工具組，請關閉當前視窗。","You're currently viewing a testing environment.":"你正在檢視測試環境。"},ho="貢献者",go="タブ",bo={Contributors:ho,"Happy Chinese New Year!":"旧正月おめでとう！","Main languages":"主要言語",Tab:go,"Welcome to Rail Map Toolkit":"路線図ツールキットへようこそ"},wo={header:"이 웹 사이트의 쿠키",text1:"RMG에서는 쿠키를 사용하여 웹 사이트 및 서비스가 제대로 작동하는지 확인합니다.이러한 쿠키는 필수이므로 기본적으로 시작됩니다.",text2:"저희도 쿠키 방식으로：",item1:"당신의 사용 패턴을 분석하여, 본 사이트를 개선합니다",text3:"이 쿠키들은 선택 사항입니다.모든 선택 가능한 쿠키를 허용하려면 '모든 쿠키 허용'을 선택하십시오.쿠키를 사용하지 않으려면 '거부'를 선택하십시오.",accept:"모든 쿠키 허용",reject:"거부"},To="관한",fo="화면 스타일",So="기여자",vo="다크 모드",Ro="라이트 모드",Ao="저장",ko="시스템 모드",yo={CookiesModal:wo,About:To,"Allow cookies to help improve our website":"쿠키를 사용하여 이 웹 사이트를 개선할 수 있도록 허용",Appearance:fo,"Contribution Wiki":"기여자 안내",Contributors:So,"Core contributors":"핵심 기여자",Dark:vo,"Happy Chinese New Year!":"새해 복 많이 받으세요!",Light:Ro,"Refreshing is required for changes to take effect.":"페이지를 새로 고친 후에만 변경 가능","Resource administrators":"자원 관리자","Resource contributors":"자원 기여자",Save:Ao,"Select an app to start your own rail map design!":"응용 프로그램을 선택하여 노선도 설계를 시작하십시오.","Switch to":"곳으로 전환",System:ko,"Terms and conditions":"조항과 세칙","Visit GitHub":"GitHub 방문하기","Welcome to Rail Map Toolkit":"노선도 툴킷에 오신 것을 환영합니다"},Co=new p.I18nBuilder().use(W).withAppName("Rail Map Toolkit").withLng(p.getLanguage()).withDefaultResource(Pt).withResource("en",Gt).withResource("zh-Hans",qt).withResource("zh-Hant",mo).withResource("ja",bo).withResource("ko",yo).build(),v=e=>e?["app","devtool"]:["app"],Po=()=>{const e="https://mirror.ghproxy.com/https://github.com/railmapgen/railmapgen.github.io/releases/download",t=new Date,o="".concat(t.getFullYear()).concat(String(t.getMonth()+1).padStart(2,"0"),"01"),a="".concat(String(t.getFullYear()).slice(-2),".").concat(t.getMonth()+1,".1"),i=navigator.platform,n=i.includes("Linux")?"amd64.deb":i.includes("Mac")?"x64.dmg":"x64-setup.exe";return e+"/tauri-".concat(o,"/railmapgen_").concat(a,"_").concat(n)},h={rmg:{name:"Rail Map Generator",url:"/rmg/",assetType:"app",allowMultiInstances:!0},rmp:{name:"Rail Map Painter",url:"/rmp/",assetType:"app"},"rmg-palette":{name:"Palette",url:"/rmg-palette/",assetType:"app",showContributors:!0,legacyContributors:"legacy-contributor-list.txt"},"rmg-palette-upload":{name:"Palette - Upload",url:"/rmg-palette/#/new",assetType:"app"},"rmg-templates":{name:"RMG Templates",url:"/rmg-templates/",assetType:"app",showContributors:!0,legacyContributors:"legacy-contributor-list.txt",allowedInstances:["GitHub","GitLab","Tauri","localhost","unknown"]},"rmg-templates-upload":{name:"RMG Templates - Upload",url:"/rmg-templates/#/new",assetType:"app",allowedInstances:["GitHub","GitLab","Tauri","localhost","unknown"]},"rmp-gallery":{name:"RMP Gallery",url:"/rmp-gallery/",assetType:"app",showContributors:!0,showDonators:!0,allowedInstances:["GitHub","GitLab","Tauri","localhost","unknown"]},"rmg-components":{name:"Components",url:"/rmg-components/",assetType:"devtool",allowedInstances:["GitHub","GitLab","localhost","unknown"]},"svg-assets":{name:"SVG Assets",url:"/svg-assets/",assetType:"devtool",allowedInstances:["GitHub","GitLab","localhost","unknown"]},"rmg-translate":{name:"Translate",url:"/rmg-translate/",assetType:"devtool",allowedInstances:["GitHub","GitLab","localhost","unknown"]},"seed-project":{name:"Seed Project",url:"/seed-project/",assetType:"devtool",allowedInstances:["GitHub","GitLab","localhost","unknown"]},"rmg-runtime":{name:"Runtime Documentation",url:"/rmg-runtime/",assetType:"devtool",allowedInstances:["GitHub","GitLab","localhost","unknown"]},"runtime-demo":{name:"Runtime Demo",url:"/runtime-demo/",assetType:"devtool",allowedInstances:["GitHub","GitLab","localhost","unknown"],allowMultiInstances:!0},tutorial:{name:"Tutorial",url:"https://rmttutorial.wordpress.com",assetType:"link"},"github-pages":{name:"GitHub Pages mirror",url:"https://railmapgen.github.io",assetType:"link",allowedInstances:["GitLab","localhost","unknown"]},"gitlab-pages":{name:"GitLab Pages mirror",url:"https://railmapgen.gitlab.io",assetType:"link",allowedInstances:["GitHub","localhost","unknown"]},tauri:{name:"Download desktop app",url:Po(),assetType:"link",allowedInstances:["GitHub","GitLab","localhost","unknown"]},busLineDesigner:{name:"Bus Line Designer",url:"https://buslinedesigner.bobliu.tech",assetType:"link",allowedInstances:["GitHub","GitLab","Tauri","localhost","unknown"]},linesPaper:{name:"LinesPaper线图荟",url:"https://space.bilibili.com/3546659889875715",assetType:"link",allowedInstances:["GitHub","GitLab","Tauri","localhost","unknown"]}},M=(e,t,o)=>Object.entries(h).filter(([,a])=>{const i=a.assetType===e,n=!a.allowedEnvs||a.allowedEnvs.includes(t),s=!a.allowedInstances||a.allowedInstances.includes(o);return i&&n&&s}).map(([a])=>a),$o=e=>new Promise(t=>{setTimeout(t,e,"Timeout after ".concat(e/1e3," seconds"))}),Mo=()=>{const e=navigator.userAgent;return e.includes("Safari")&&!e.includes("Chrome")},T=(e,t,o)=>{const a=new URL(e,window.location.href);return a.search=t!=null?t:a.search,a.hash=o!=null?o:a.hash,a.pathname+a.search+a.hash},oa="never",Go={isShowMenu:!0,menuView:"main",refreshRequired:!1,lastShowDevtools:0,openedTabs:[],activeTab:void 0,remoteFonts:{},showFontAdvice:"hide"},G=V({name:"app",initialState:Go,reducers:{setIsPrimary:(e,t)=>{e.isPrimary=t.payload},terminateSession:e=>{e.isTerminated=!0},toggleMenu:e=>{e.isShowMenu=!e.isShowMenu},setMenuView:(e,t)=>{e.menuView=t.payload},requireRefresh:e=>{e.refreshRequired=!0},showDevtools:(e,t)=>{const o=Date.now();t.payload?t.payload<o&&(e.lastShowDevtools=t.payload):e.lastShowDevtools=o},hideDevtools:e=>{e.lastShowDevtools=0},setOpenedTabs:(e,t)=>{e.openedTabs=t.payload},updateTabUrl:(e,t)=>{const{id:o,url:a}=t.payload;e.openedTabs=e.openedTabs.map(i=>i.id===o?{...i,url:a}:i)},setActiveTab:(e,t)=>{e.activeTab=t.payload},openApp:(e,t)=>{var l;const{appId:o,search:a,hash:i}=t.payload,n=e.openedTabs.find(({id:r})=>r===e.activeTab),s=e.openedTabs.find(({app:r})=>r===o),c=(l=h[o].allowMultiInstances)!=null?l:!1;if(a!==void 0||i!==void 0)if(c||!s){const r=crypto.randomUUID();e.openedTabs.push({id:r,app:o,url:T(h[o].url,a,i)}),e.activeTab=r}else e.openedTabs=e.openedTabs.map(r=>{var d;return r.id===s.id?{...r,url:T((d=r.url)!=null?d:h[r.app].url,a,i)}:r}),e.activeTab=s.id;else if(s)(n==null?void 0:n.app)!==o&&(e.activeTab=s.id);else{const r=crypto.randomUUID();e.openedTabs.push({id:r,app:o,url:T(h[o].url)}),e.activeTab=r}},openAppInNew:(e,t)=>{const o=crypto.randomUUID();e.openedTabs.push({id:o,app:t.payload}),e.activeTab=o},closeTab:(e,t)=>{var i;const o=t.payload,a=e.openedTabs.slice().sort((n,s)=>{const c=Object.keys(h);return c.indexOf(n.app)-c.indexOf(s.app)});if(e.openedTabs=e.openedTabs.filter(n=>n.id!==o),e.activeTab===o){const n=a.findIndex(s=>s.id===o);e.activeTab=(i=a.filter(s=>s.id!==o)[Math.max(0,n-1)])==null?void 0:i.id}},closeApp:(e,t)=>{var s,c;const o=t.payload;if(!e.openedTabs.some(l=>l.app===o))return;const a=Object.keys(h).filter(l=>e.openedTabs.some(r=>r.app===l)),i=(s=e.openedTabs.find(l=>l.id===e.activeTab))==null?void 0:s.app,n=e.openedTabs.filter(l=>l.app!==o);if(e.openedTabs=n,i===o){const l=a.findIndex(r=>r===o);e.activeTab=(c=n.find(r=>r.app===a[Math.max(0,l-1)]))==null?void 0:c.id}},updateTabMetadata:(e,t)=>{const{id:o,title:a,search:i,hash:n}=t.payload;e.openedTabs=e.openedTabs.map(s=>{var c;return s.id===o?{...s,title:a!=null?a:s.title,url:T((c=s.url)!=null?c:h[s.app].url,i,n)}:s})},addRemoteFont:(e,t)=>{const{family:o,config:a}=t.payload;o in e.remoteFonts||(e.remoteFonts[o]=a,e.showFontAdvice==="hide"&&(e.showFontAdvice="show"))},hideFontAdvice:e=>{e.showFontAdvice="hide"},neverShowFontAdvice:e=>{e.showFontAdvice="never"}}}),R=e=>{const t=Date.now();return e+864e5>=t},{setIsPrimary:Lo,terminateSession:Oo,toggleMenu:aa,setMenuView:na,requireRefresh:sa,showDevtools:Do,hideDevtools:ia,setOpenedTabs:Io,updateTabUrl:_o,setActiveTab:k,openApp:L,openAppInNew:ra,closeTab:ca,closeApp:xo,updateTabMetadata:Eo,addRemoteFont:Ho,hideFontAdvice:la,neverShowFontAdvice:No}=G.actions,Uo=G.reducer,Fo=J({app:Uo}),O=Y(),jo=(e={})=>q({reducer:Fo,middleware:t=>t().prepend(O.middleware),preloadedState:e}),u=jo(),pa=()=>z(),da=K,f=O.startListening;window.rmgStore=u;var g=(e=>(e.OPENED_TABS="rmg-home__openedTabs",e.ACTIVE_TAB="rmg-home__activeTab",e.LAST_SHOW_DEVTOOLS="lastShowDevtools",e.SHOW_FONT_ADVICE="showFontAdvice",e))(g||{}),D=(e=>(e.APP_LOAD="APP_LOAD",e.OPEN_APP="OPEN_APP",e.CLOSE_APP="CLOSE_APP",e.OPEN_LINK="OPEN_LINK",e.TOGGLE_NAV_MENU="TOGGLE_NAV_MENU",e.CHANGE_LANGUAGE="CHANGE_LANGUAGE",e.SHOW_DEVTOOLS="SHOW_DEVTOOLS",e.RAISE_ISSUE="RAISE_ISSUE",e.JOIN_SLACK="JOIN_SLACK",e.DOWNLOAD_FONT="DOWNLOAD_FONT",e))(D||{});const y="rmg-home:frame-",S={APP:"app",SEARCH_PARAMS:"searchParams",HASH_PARAMS:"hashParams"},Bo="rmt-instance-checker",I="ping",_="pong",x="restart",b=new BroadcastChannel(Bo),E=e=>{e.data===I&&(m.info("Received ping from another RMT instance."),b.postMessage(_))};b.addEventListener("message",E);b.addEventListener("message",e=>{e.data===x&&(m.info("Received restart from another RMT instance. Closing current session..."),b.close(),u.dispatch(Oo()),u.dispatch(P()))});const ua=()=>{b.postMessage(x)},Wo=async()=>{let e=!0;b.addEventListener("message",o=>{o.data===_&&(m.warn("Received pong from another RMT instance. This instance is not primary."),e=!1,b.removeEventListener("message",E))}),b.postMessage(I);let t=5;for(;t--;)if(await $o(500),!e)return!1;return m.info("This instance is primary."),!0},Vo=e=>{const t=Number(p.storage.get(g.LAST_SHOW_DEVTOOLS));t&&e.dispatch(Do(t))},Jo=e=>{try{const t=window.localStorage.getItem(g.OPENED_TABS);if(t){const o=JSON.parse(t);if(Array.isArray(o)){const a=v(R(e.getState().app.lastShowDevtools)),i=o.filter(n=>a.includes(h[n.app].assetType));e.dispatch(Io(i))}else m.warn("initOpenedTabs(), Cannot parse invalid opened tabs state from local storage")}}catch(t){m.warn("initOpenedTabs(), cannot parse opened apps state from local storage",t)}},Yo=e=>{var a;const t=window.localStorage.getItem(g.ACTIVE_TAB),o=e.getState().app.openedTabs;t&&o.some(({id:i})=>i===t)?e.dispatch(k(t)):e.dispatch(k((a=o[0])==null?void 0:a.id))},qo=e=>{var c,l,r;const t=new URLSearchParams(window.location.search),o=(c=t.get(S.APP))!=null?c:"",a=(l=t.get(S.SEARCH_PARAMS))!=null?l:void 0,i=(r=t.get(S.HASH_PARAMS))!=null?r:void 0;m.info("openSearchedApp(), searchParams app=".concat(o,", extraSearchParams are [").concat(a,"], extraHashParams are [").concat(i,"]")),v(R(e.getState().app.lastShowDevtools)).map(d=>M(d,p.getEnv(),p.getInstance())).flat().includes(o)?e.dispatch(L({appId:o,search:a,hash:i})):m.warn("openSearchedApp(), app ".concat(o," not found"))};function zo(e){Vo(e),Jo(e),Yo(e),(Mo()||p.storage.get(g.SHOW_FONT_ADVICE)==="never")&&e.dispatch(No()),f({predicate:(t,o,a)=>o.app.lastShowDevtools!==a.app.lastShowDevtools,effect:(t,o)=>{p.storage.set(g.LAST_SHOW_DEVTOOLS,o.getState().app.lastShowDevtools.toString())}}),f({predicate:(t,o,a)=>JSON.stringify(o.app.openedTabs)!==JSON.stringify(a.app.openedTabs),effect:(t,o)=>{window.localStorage.setItem(g.OPENED_TABS,JSON.stringify(o.getState().app.openedTabs))}}),f({predicate:(t,o,a)=>o.app.activeTab!==a.app.activeTab,effect:(t,o)=>{const a=o.getState().app.activeTab;a!==void 0&&window.localStorage.setItem(g.ACTIVE_TAB,a)}}),qo(e),Wo().then(t=>{e.dispatch(Lo(t)),t||e.dispatch(P())})}let C;const Ko=$.lazy(()=>te(()=>import("./app-root-D1AzMs2K.js"),__vite__mapDeps([0,1,2,3,4,5]))),Qo=()=>{C=U(document.getElementById("root")),C.render(w.jsx($.StrictMode,{children:w.jsx(Q,{store:u,children:w.jsx(X,{i18n:Co,children:w.jsx(F,{children:w.jsx(j,{suspenseFallback:w.jsx(B,{isIndeterminate:!0}),allowReset:!0,children:w.jsx(Ko,{})})})})})}))};p.ready().then(()=>{zo(u),Qo(),p.onAppOpen(e=>{v(R(u.getState().app.lastShowDevtools)).map(a=>M(a,p.getEnv(),p.getInstance())).flat().includes(e.appId)&&u.dispatch(L(e))}),p.onAppClose(e=>{u.dispatch(xo(e))}),p.onAppMetadataUpdate((e,t)=>{if(t){const o=t.slice(y.length);m.info("Received metadata update for frame=".concat(o,", metadata is"),e),u.dispatch(Eo({...e,id:o}))}}),p.onUrlUpdate((e,t)=>{if(t){const o=t.slice(y.length);m.info("Received URL update for frame=".concat(o,", url=").concat(e)),u.dispatch(_o({id:o,url:e}))}}),p.onRemoteFontLoaded(({family:e,definition:{displayName:t,url:o}})=>{u.dispatch(Ho({family:e,config:{displayName:t,url:o}}))}),p.event(D.APP_LOAD,{openedApps:u.getState().app.openedTabs.map(e=>e.app)})});export{D as E,y as F,g as L,oa as N,Xo as __vite_legacy_guard,pa as a,h as b,L as c,ca as d,xo as e,na as f,M as g,la as h,R as i,Do as j,ia as k,ua as l,No as n,ra as o,sa as r,k as s,aa as t,da as u};

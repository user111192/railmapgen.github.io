import{d as p,r as s,e as f,f as j,R as g,g as y,h as R,c as F}from"./rmg-theme-provider-hiWJ7DBh.js";import{j as e,H as c,B as w,c as v}from"./chakra-Hg5wZurr.js";import{r as n}from"./react-ChmrgLrp.js";import{R as S}from"./rmg-fields-7Auzl2dt.js";function P(){import.meta.url,import("_").catch(()=>1),async function*(){}().next()}function b(){return e.jsx(p,{children:e.jsx(c,{as:"h4",size:"md",children:"Runtime Demo"})})}function W(o){return e.jsxs(w,{...o,children:[e.jsx("p",{children:"All human beings are born free and equal in dignity and rights. They are endowed with reason and conscience and should act towards one another in a spirit of brotherhood."}),e.jsx("p",{children:"人皆生而自由；在尊嚴及權利上均各平等。人各賦有理性良知，誠應和睦相處，情同手足。"}),e.jsx("p",{children:"人人生而自由，在尊严和权利上一律平等。他们赋有理性和良心，并应以兄弟关系的精神相对待。"})]})}const A={"& .chakra-form-control:nth-of-type(2)":{maxW:"100%",overflow:"hidden","& output":{height:"unset",textWrap:"pretty"}}};function H(){const[o,l]=n.useState({}),[i,h]=n.useState();n.useEffect(()=>{s.getAllFonts().then(l)},[]);const m=Object.entries(o).reduce((t,r)=>{var a;return{...t,[r[0]]:(a=r[1].displayName)!=null?a:r[0]}},{"":"Default"}),u=async t=>{t&&await s.loadFont(t),h(t)},x=[{type:"select",label:"Display font",options:m,value:i,onChange:t=>u(t)},{type:"output",label:"Preview",value:e.jsx(W,{fontFamily:i||void 0})}];return e.jsxs(f,{sx:A,children:[e.jsx(j,{children:e.jsx(c,{as:"h5",size:"sm",children:"Fonts"})}),e.jsx(v.div,{px:1,children:e.jsx(S,{fields:x,minW:"full"})})]})}function D(){return e.jsx(g,{children:e.jsxs(y,{children:[e.jsx(b,{}),e.jsx(R,{alignSelf:"center",sx:{width:{base:"100%",md:520}},children:e.jsx(H,{})})]})})}let d;const E=()=>{d=F(document.getElementById("root")),d.render(e.jsx(n.StrictMode,{children:e.jsx(D,{})}))};s.ready().then(()=>{E(),s.injectUITools()});export{P as __vite_legacy_guard};
"use strict";(globalThis.webpackChunkina=globalThis.webpackChunkina||[]).push([[466],{4709(e,t,r){r.d(t,{Fp:()=>i,JY:()=>d,Pn:()=>c,uW:()=>s});var a=r(403),o=r(2582),n=(r(5043),r(579));const i=a.Ay.nav`
  background: transparent
    linear-gradient(
      180deg,
      var(--light-background) 90%,
      var(--dark-highlight) 100%
    )
    0% 0% no-repeat padding-box;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 100;
  flex: 0 1;
  padding: 0.25rem 1rem;
  text-align: left;
  font: normal normal normal 30px/34px montserrat;
  letter-spacing: 0;
  justify-content: space-between;
  align-items: center;
  &.mobile {
    font: normal normal normal 20px/25px Montserrat;
  }
  bottom-shadow: 0px 4px 4px var(--shadow);

  @media only screen and (max-width: 700px) {
    font: normal normal normal 22px/26px montserrat;
  }
`,l=a.Ay.button`
  possition: fixed;
  font-size: inherit;
  background: var(--dark-highlight);
  border: 2px solid var(--light-highlight);
  border-radius: 50%;
  width: 1.4em;
  height: 1.4em;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  transition:
    background 0.2s,
    color 0.2s,
    border 0.2s;

  .fa-home {
    color: var(--light-highlight);
  }

  &:hover {
    background: var(--dark-highlight);
    border: 2px solid var(--light-highlight);
  }
`,s=a.Ay.button`
  font: normal normal 700 13px/18px Montserrat;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  background: var(--dark-highlight);
  color: var(--text-color);
  border: 2px solid var(--light-highlight);
  border-radius: 10px;
  padding: 8px 14px;
  margin-left: 8px;
  margin-right: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  flex-shrink: 0;
  transition: opacity 0.2s;
  @media only screen and (max-width: 700px) {
    padding: 8px 10px;
    gap: 0;
    .btn-text {
      display: none;
    }
  }
  &:hover {
    opacity: 0.8;
  }
`,d=a.Ay.div`
  position: absolute;
  top: 60px;
  right: 10px;
  background: var(--dark-highlight);
  color: var(--text-color);
  border: 2px solid var(--light-highlight);
  border-radius: 12px;
  box-shadow: 0 4px 16px var(--shadow);
  padding: 16px 20px;
  font-size: clamp(12px, 0.5em, 15px);
  z-index: 100;
  min-width: 260px;
  max-width: min(90vw, 460px);
  max-height: 80vh;
  overflow-y: auto;
`,c=()=>(0,n.jsx)(l,{children:(0,n.jsx)(o.k2,{exact:!0,to:"/",children:(0,n.jsx)("i",{className:"fa fa-home"})})})},7362(e,t,r){r.d(t,{A:()=>c});var a=r(5043),o=r(403),n=r(9944),i=r(579);const l=o.Ay.button`
  flex-shrink: 0;
  background: transparent;
  border: 2px solid var(--light-highlight);
  color: var(--light-highlight);
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s;
  &:hover {
    background: var(--light-highlight);
    color: var(--dark-highlight);
  }
`,s=o.Ay.div`
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
`,d=o.Ay.span`
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  background: var(--dark-highlight);
  color: var(--background);
  font-size: 12px;
  white-space: nowrap;
  padding: 4px 8px;
  border-radius: 6px;
  pointer-events: none;
  z-index: 1;
`,c=e=>{let{slug:t,label:r,className:o}=e;const[c,h]=(0,a.useState)(!1);return(0,i.jsxs)(s,{className:o,children:[(0,i.jsx)(l,{type:"button",onClick:async()=>{await(0,n.c)(t)&&(h(!0),setTimeout(()=>h(!1),1600))},title:r,"aria-label":r,children:(0,i.jsx)("i",{className:"fa fa-share","aria-hidden":"true"})}),c&&(0,i.jsx)(d,{children:"Link copied!"})]})}},3269(e,t,r){r.d(t,{IW:()=>o.IW,Id:()=>o.Id,JX:()=>l,Jj:()=>o.Jj,Zy:()=>o.Zy,aH:()=>o.aH,b8:()=>i,gQ:()=>o.gQ,iM:()=>o.iM,q1:()=>n,ue:()=>o.ue});var a=r(403),o=r(984);const n=a.Ay.div`
  background: var(--light-background);
  border: 2px solid var(--dark-background);
  border-radius: 15px;
  overflow: hidden;
`,i=a.Ay.div`
  background: var(--dark-highlight);
  color: var(--text-color);
  font: 700 clamp(22px, 1.3vw, 28px) / 1.35 Montserrat;
  padding: 10px 12px;
  border-bottom: 2px solid var(--light-highlight);
  display: flex;
  align-items: center;
`,l=a.Ay.div`
  padding-top: 5px;
  overflow-wrap: break-word;
  color: var(--ink-black);
  text-align: left;
  font: normal normal 300 clamp(20px, 1.1vw, 25px) / 1.3 Mulish;
  letter-spacing: 0px;
  opacity: 1;
  white-space: pre-line;
`},9466(e,t,r){r.d(t,{TakodexList:()=>C});var a=r(5043),o=r(1688),n=r(303),i=r.n(n),l=r(403),s=r(984);const d=l.Ay.div`
  padding-top: 5px;
  overflow-wrap: break-word;
  color: var(--ink-black);
  text-align: left;
  font: normal normal 300 clamp(20px, 1.1vw, 25px) / 1.3 Mulish;
  letter-spacing: 0px;
  opacity: 1;
  white-space: pre-line;
`,c=l.Ay.img`
  display: block;
  width: 100%;
  height: clamp(260px, 24vh, 340px);
  object-fit: contain;
  border-radius: 8px;
  margin: 8px 0;
`,h=l.Ay.div`
  background: var(--light-background);
  border: 2px solid var(--dark-background);
  border-radius: 15px;
  overflow: hidden;
`,p=l.Ay.div`
  background: var(--dark-highlight);
  color: var(--text-color);
  font: 700 clamp(22px, 1.3vw, 28px) / 1.35 Montserrat;
  padding: 10px 12px;
  border-bottom: 2px solid var(--light-highlight);
  text-align: center;
`,g=l.Ay.a`
  background: var(--light-highlight);
  color: var(--dark-highlight);
  border-radius: 8px;
  padding: 8px 18px;
  font-weight: 500;
  font-size: 0.5em;
  text-decoration: none;
  margin-left: 16px;
  transition:
    background 0.2s,
    color 0.2s,
    filter 0.2s;
  &:hover {
    background: var(--dark-highlight);
    color: var(--light-highlight);
  }

  @media only screen and (max-width: 768px) {
    font-size: 0.5em;
    padding: 10px 12px;
    margin-left: 8px;
    margin-top: 6px;
    display: inline-block;
  }
`;var x=r(3269),u=r(4709),m=r(7362),v=r(9944),k=r(579);const b=["8-bit Tako.png","Hollow Tako.png","Ikadachi.png","Mori Tako.png","Robodachi.png","Tako Amelia (Takoson).png","Tako Gura (Chum Tako).png","Tako Ina.png","Tako Kiara (Tako Bell).png","Tako Ross.png","Takodachi.png","Takomfy.png","Tophat Tako.png","Violet Tako.png","Wonder Tako.png","Yuul B. Tako.png"];const f=e=>(0,v.L)(e.name,e.author),y=e=>{let{entries:t}=e;(0,a.useLayoutEffect)(()=>{window.scrollTo(0,0)},[]);const[r,n]=(0,a.useState)({}),[l,v]=(0,a.useState)(""),[y,w]=(0,a.useState)(!1),[j,T]=(0,a.useState)(null),{hash:A}=(0,o.zy)(),C=(0,a.useRef)(!1),E=t.filter(e=>{let{name:t,author:r,category:a,attributes:o,description:n}=e;return[t,r,a,o,n].join(" ").toLowerCase().includes(l.toLowerCase())});return(0,a.useEffect)(()=>{if(C.current||!A||0===t.length)return;const e=A.replace("#",""),r=t.find(t=>f(t)===e);if(!r)return;if(""!==l&&!E.includes(r))return void v("");C.current=!0;const a=document.getElementById(`takodex-${e}`);null===a||void 0===a||a.scrollIntoView({behavior:"smooth",block:"center"}),T(e);const o=setTimeout(()=>T(null),1800);return()=>clearTimeout(o)},[A,t,l,E]),(0,k.jsxs)("div",{style:{minHeight:"100vh",background:"var(--background)"},children:[(0,k.jsxs)(u.Fp,{children:[(0,k.jsx)(u.Pn,{}),(0,k.jsx)(s.ue,{children:"Takodex"}),(0,k.jsxs)("div",{style:{flex:"0 0 auto",position:"relative"},children:[(0,k.jsxs)(u.uW,{"aria-label":"Show Takodex usage hint",onClick:()=>w(e=>!e),title:"Show Takodex usage hint",children:[(0,k.jsx)("i",{className:"fa fa-question-circle","aria-hidden":"true"}),(0,k.jsx)("span",{className:"btn-text",children:"Help"})]}),y&&(0,k.jsx)(u.JY,{onClick:()=>w(!1),children:(0,k.jsx)("p",{children:'Search by name, category, or attribute. Made your own Takodachi? Use "Add my Tako" to submit it for a future entry.'})})]}),(0,k.jsx)("div",{style:{marginLeft:"auto"},children:(0,k.jsx)(g,{href:"https://forms.gle/qnrMrk2z6QaRHsdZ7",target:"_blank",rel:"noopener noreferrer",children:"Add my Tako"})})]}),(0,k.jsxs)(x.gQ,{children:[(0,k.jsx)(x.IW,{type:"text",value:l,onChange:e=>v(e.target.value),placeholder:"Search Takodex..."}),(0,k.jsx)(i(),{options:{gutter:40,columnWidth:1,fitWidth:!0,transitionDuration:0},style:{margin:"0 auto"},children:E.map((e,t)=>{const{name:a,author:o,category:i,attributes:l,description:g,image:x}=e,u=a&&""!==a.trim()?a:o,v=f(e);return(0,k.jsx)(s.Id,{id:`takodex-${v}`,style:j===v?{outline:"3px solid var(--light-highlight)",borderRadius:15}:void 0,children:(0,k.jsxs)(h,{children:[(0,k.jsxs)(p,{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,textAlign:"left"},children:[(0,k.jsx)("span",{children:u||o}),(0,k.jsx)(m.A,{slug:v,label:"Copy link to this Tako"})]}),(0,k.jsxs)("div",{style:{padding:"0.75rem"},children:[(0,k.jsxs)(d,{children:[(0,k.jsx)("b",{children:"Category:"})," ",i||"Uncategorized"]}),(0,k.jsxs)(d,{children:[(0,k.jsx)("b",{children:"Attributes:"})," ",l||"Unknown"]}),(0,k.jsx)("hr",{}),x&&!r[t]?(0,k.jsx)(c,{src:"/takoswentries/"+x,alt:u,onError:()=>(e=>{n(t=>({...t,[e]:!0}))})(t)}):(0,k.jsx)(c,{src:"/icon/"+(y=t,b[y%b.length]),alt:"random tako icon"}),(0,k.jsx)("hr",{}),(0,k.jsx)(d,{children:g}),(0,k.jsx)(d,{children:(0,k.jsxs)("b",{children:["by: ",o]})})]})]})},t);var y})})]})]})};var w=r(1472),j=r(2154),T=r(6088),A=r(2218);const C=()=>{const{data:e,loading:t,error:r}=(0,T.s)("/data/TakoEntries.json"),{muted:a}=(0,w.d2)(),o=(0,j.G)({muted:a,autoPlay:!0});return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("audio",{ref:o,src:"/\u30ea\u30b3\u30fc\u30c0\u30fc\u30d3\u30fc\u30c82.mp3",autoPlay:!0,loop:!0,preload:"auto",style:{display:"none"},muted:a}),t?(0,k.jsx)(A.c,{fullPage:!0}):r?(0,k.jsxs)("div",{children:["Error loading Takodex: ",r.message]}):(0,k.jsx)(y,{entries:null!==e&&void 0!==e?e:[]})]})}},2154(e,t,r){r.d(t,{G:()=>o});var a=r(5043);const o=e=>{let{muted:t,volume:r=.1,autoPlay:o=!1,videoPaused:n=!1}=e;const i=(0,a.useRef)(null);return(0,a.useEffect)(()=>{i.current&&(i.current.volume=r)},[r]),(0,a.useEffect)(()=>{const e=i.current;e&&(n?e.pause():(t||e.paused)&&(t?e.pause():e.play().catch(()=>{})))},[t,n]),(0,a.useEffect)(()=>{if(!o)return;let e=null,r=!1;return i.current&&!t&&i.current.play().catch(()=>{r||(e=()=>{i.current&&!t&&i.current.play().catch(()=>{}),e&&window.removeEventListener("click",e)},window.addEventListener("click",e))}),()=>{r=!0,e&&window.removeEventListener("click",e)}},[o,t]),i}},6088(e,t,r){r.d(t,{s:()=>o});var a=r(5043);const o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const[r,o]=(0,a.useState)(null),[n,i]=(0,a.useState)(!0),[l,s]=(0,a.useState)(null),d=async()=>{i(!0),s(null);try{const r=await fetch(e,t);if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);const a=await r.json();o(a)}catch(r){s(r)}finally{i(!1)}};(0,a.useEffect)(()=>{d()},[e,JSON.stringify(t)]);return{data:r,loading:n,error:l,refetch:()=>{d()}}}},9944(e,t,r){r.d(t,{L:()=>a,c:()=>o});const a=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];const a=t.filter(Boolean).join(" ");return`${a.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,40)}-${(e=>{let t=2166136261;for(let r=0;r<e.length;r++)t^=e.charCodeAt(r),t=Math.imul(t,16777619);return(t>>>0).toString(36)})(a)}`},o=async e=>{const t=`${window.location.origin}${window.location.pathname}#${e}`;try{var r;return await(null===(r=navigator.clipboard)||void 0===r?void 0:r.writeText(t)),!0}catch{return!1}}}}]);
//# sourceMappingURL=466.e45aace3.chunk.js.map
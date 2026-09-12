"use strict";(globalThis.webpackChunkina=globalThis.webpackChunkina||[]).push([[366],{5011(e,t,r){r.d(t,{d:()=>c});r(5043);var o=r(403),a=r(579);const i=o.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  padding: 0.1em;
  cursor: pointer;
`,n=o.Ay.div`
  position: relative;
  border-radius: 100px;
  width: 38px;
  min-width: 38px;
  height: 24px;
  flex-shrink: 0;
  background-color: ${e=>{let{active:t,color:r}=e;return t?r:"var(--dark-highlight)"}};
  transition: background-color 0.2s linear;
  &.mobile {
    width: 28px;
    min-width: 28px;
    height: 16px;
  }
`,s=o.Ay.div`
  position: absolute;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  box-sizing: border-box;
  background: var(--text-color);
  border: 2px solid ${e=>{let{color:t}=e;return t}};
  top: 50%;
  left: 3px;
  transform: translateY(-50%)
    translateX(${e=>{let{active:t}=e;return t?"14px":"0px"}});
  transition: transform 0.2s linear;
  &.mobile {
    width: 12px;
    height: 12px;
    left: 2px;
    transform: translateY(-50%)
      translateX(${e=>{let{active:t}=e;return t?"12px":"0px"}});
  }
`,l=o.Ay.span`
  color: ${e=>{let{labelColor:t}=e;return null!==t&&void 0!==t?t:"var(--text-color)"}};
  text-align: left;
  font: normal normal 300 25px/26px Montserrat;
  letter-spacing: 0;
  &.mobile {
    font: normal normal 300 13px/16px Montserrat;
  }
`,c=e=>{let{label:t,value:r,onChange:o,color:c="var(--dark-highlight)",labelColor:d,mobile:h}=e;const g=h?"mobile":"";return(0,a.jsxs)(i,{onClick:()=>o(!r),children:[(0,a.jsx)(n,{active:r,color:c,className:g,children:(0,a.jsx)(s,{active:r,color:c,className:g})}),(0,a.jsx)(l,{labelColor:d,className:g,children:t})]})}},7366(e,t,r){r.r(t),r.d(t,{default:()=>S});var o=r(5043),a=r(1688),i=r(303),n=r.n(i),s=r(3155),l=r(5849),c=r(2449),d=r(7362),h=r(9944),g=r(3269),u=r(579);const p=e=>(0,h.L)(e.user,e.image||e.message),x={settings:{disablePanzoom:!1},buttons:{showAutoplayButton:!1,showCloseButton:!1,showDownloadButton:!1,showFullscreenButton:!1,showNextButton:!1,showPrevButton:!1,showThumbnailsButton:!1},thumbnails:{showThumbnails:!1}},m=e=>{let{submissions:t,isToggledOnlyImg:r,isToggledTextOnly:a,highlightSlug:i}=e;const[h,m]=(0,o.useState)(null),v=(0,o.useRef)(!1);(0,o.useEffect)(()=>{v.current?null==i&&window.scrollTo(0,0):v.current=!0},[i]),(0,o.useEffect)(()=>{if(null==i)return;const e=document.getElementById(`message-${i}`);if(!e)return;e.scrollIntoView({behavior:"smooth",block:"center"}),m(i);const t=setTimeout(()=>m(null),1800);return()=>clearTimeout(t)},[i,t]);const f=(0,o.useMemo)(()=>{let e=t;return r&&(e=e.filter(e=>e.image)),a&&(e=e.filter(e=>e.message)),e},[t,r,a]);return(0,u.jsx)(n(),{options:{gutter:40,columnWidth:1,fitWidth:!0,transitionDuration:0},style:{margin:"0 auto"},children:f.map((e,t)=>{const{message:o,user:i,icon:n,image:m,pun:v,event_date:f}=e,b=p(e);return(0,u.jsx)(g.Id,{id:`message-${b}`,style:h===b?{outline:"3px solid var(--light-highlight)",borderRadius:15}:void 0,children:(0,u.jsxs)(g.q1,{children:[(0,u.jsxs)(g.b8,{children:[(0,u.jsx)(s.v,{id:n,pun:v,index:t}),i||"Anonymous Tako",(0,u.jsx)("div",{style:{marginLeft:"auto"},children:(0,u.jsx)(d.A,{slug:b,label:"Copy link to this message"})})]}),(0,u.jsxs)("div",{style:{padding:"0.75rem"},children:[!a&&m&&(m.includes("youtube")?(0,u.jsx)(g.Zy,{width:"100%",height:"315",src:`${m}${m.includes("?")?"&":"?"}enablejsapi=1`,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,onLoad:e=>(0,c.cb)(e.currentTarget)}):(0,u.jsx)(l.HU,{options:x,children:m.includes("mp4")?(0,u.jsx)("video",{width:420,controls:!0,children:(0,u.jsx)("source",{src:"/artworks/"+m,type:"video/mp4"})}):(0,u.jsx)(g.iM,{src:"/artworks/"+m,loading:"lazy",decoding:"async"})})),(!r||m.includes("mp4"))&&(0,u.jsx)(g.JX,{children:o}),f&&(0,u.jsx)("div",{style:{textAlign:"right",fontSize:"0.75rem",opacity:.6,marginTop:"0.4rem",paddingRight:"0.5rem"},children:f})]})]})},t)})})};var v=r(4997),f=r(2218),b=r(9372),w=r(5011),y=r(3536),k=r(4709),j=r(1472),T=r(2154),C=r(6088);const A=10,S=()=>{const{muted:e}=(0,j.d2)(),t=(0,T.G)({muted:e,autoPlay:!0}),{data:r,loading:i,error:n}=(0,C.s)("/data/messageData.json"),[s,l]=(0,o.useState)([]),[c,d]=(0,o.useState)([]),[h,x]=(0,o.useState)(0),[S,I]=(0,o.useState)(!0),[E,L]=(0,o.useState)(!1),[M,B]=(0,o.useState)(!1),[$,H]=(0,o.useState)(!1),[P,D]=(0,o.useState)(null),R=(0,o.useRef)(!1),{hash:W}=(0,a.zy)(),z=o.useRef("");(0,o.useEffect)(()=>{if(r){const e=[...r].reverse();l(e);const t=e.slice(0,A);O(t).then(()=>{d(t),x(A),I(e.length>A)})}},[r]),(0,o.useEffect)(()=>{if(R.current||!W||0===s.length)return;const e=W.replace("#",""),t=s.findIndex(t=>p(t)===e);if(t<0)return;R.current=!0,z.current="",L(!1),B(!1);const r=s.slice(0,t+1);O(r).then(()=>{d(r),x(t+1),I(s.length>t+1),D(e)})},[W,s]);const Y=async()=>{if(0!==c.length){let e=s;E&&(e=e.filter(e=>""!==e.image)),M&&(e=e.filter(e=>e.message));const t=e.slice(h,A+h);0===t.length&&I(!1),await O(t),d(e=>e.concat(t)),x(e=>e+A)}};(0,o.useEffect)(()=>{if(S&&c.length>0){document.documentElement.scrollHeight>window.innerHeight||Y()}},[c.length,S]);const N=(0,o.useMemo)(()=>(0,y.debounce)(async e=>{if(""!==e.target.value){const t=s.filter(t=>t.user.toLowerCase().includes(e.target.value.toLowerCase())||t.message.toLowerCase().includes(e.target.value.toLowerCase()));I(!1),d(t),x(0)}else{const e=s.slice(0,A);I(!0),await O(e),d(e),x(A)}},1e3),[s]);(0,o.useEffect)(()=>()=>{N.cancel()},[N]);const J=(e,t)=>e.filter(e=>e.user.toLowerCase().includes(t.toLowerCase())||e.message.toLowerCase().includes(t.toLowerCase())),O=async e=>{const t=[];e.forEach(e=>{e.image&&!e.image.includes("youtube")&&t.push(new Promise(t=>{const r=new Image;r.src="/artworks/"+e.image,r.onerror=t,r.onload=t}))}),await Promise.allSettled(t)};return(0,u.jsxs)("div",{style:{minHeight:"100vh",background:"var(--background)"},children:[(0,u.jsx)("audio",{ref:t,src:"/Vanilla.mp3",loop:!0,preload:"auto",style:{display:"none"}}),(0,u.jsxs)(k.Fp,{children:[(0,u.jsx)(k.Pn,{}),(0,u.jsx)(g.ue,{children:"Artworks & Messages"}),(0,u.jsxs)("div",{style:{flex:"0 0 auto",position:"relative"},children:[(0,u.jsxs)(k.uW,{"aria-label":"Show messages usage hint",onClick:()=>H(e=>!e),title:"Show messages usage hint",children:[(0,u.jsx)("i",{className:"fa fa-question-circle","aria-hidden":"true"}),(0,u.jsx)("span",{className:"btn-text",children:"Help"})]}),$&&(0,u.jsx)(k.JY,{onClick:()=>H(!1),children:(0,u.jsx)("p",{children:'Use the toggles to show only image submissions or only text messages, or search by name. A tako icon with a speech-bubble "..." next to it has a pun hiding underneath \u2014 click it to reveal.'})})]})]}),i?(0,u.jsx)(f.c,{}):n?(0,u.jsxs)("div",{children:["Error loading messages: ",n.message]}):(0,u.jsxs)(g.gQ,{children:[(0,u.jsxs)("div",{style:{textAlign:"center",padding:"2rem 1rem 1rem"},children:[(0,u.jsx)("h1",{style:{fontSize:"clamp(1.8rem, 5vw, 3rem)",color:"var(--dark-highlight)",marginBottom:"1rem"},children:"HAPPY BIRTHDAY INA! \ud83d\udc19\ud83d\udc9c"}),(0,u.jsx)("video",{controls:!0,preload:"none",style:{maxWidth:"min(720px, 100%)",width:"100%",borderRadius:"12px"},src:"/TakoToriDay3_InaBday.mp4"}),(0,u.jsx)("p",{style:{fontSize:"0.85rem",color:"var(--dark-highlight)",marginTop:"0.5rem",opacity:.8},children:"From Drawn to Dawn Fan Meeting Day 3"})]}),(0,u.jsxs)(g.Jj,{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"1rem",flexWrap:"wrap"},children:[(0,u.jsx)(g.IW,{onChange:e=>{z.current=e.target.value,N(e)},placeholder:"Search...",style:{flex:1,minWidth:"160px"}}),(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"row",overflow:"hidden",flexShrink:0},children:[(0,u.jsx)(w.d,{label:"Only Images",value:E,onChange:e=>(async e=>{const t=z.current;if(e){d([]);const e=s.filter(e=>e.image);if(""!==t){const r=J(e,t);I(!1),d(r),x(0)}else{const t=e.slice(0,A);I(!0),await O(t),d(t),x(A)}L(!0),B(!1)}else{if(""!==t){const e=J(s,t);I(!1),d(e),x(0)}else{const e=s.slice(0,A);I(!0),await O(e),d(e),x(A)}L(!1)}})(e),color:"var(--light-highlight)",labelColor:"var(--dark-highlight)"}),(0,u.jsx)(w.d,{label:"Only messages",value:M,onChange:e=>(async e=>{const t=z.current;if(e){d([]);const e=s.filter(e=>e.message);if(""!==t){const r=J(e,t);I(!1),d(r),x(0)}else{const t=e.slice(0,A);I(!0),await O(t),d(t),x(A)}B(!0),L(!1)}else{if(""!==t){const e=J(s,t);I(!1),d(e),x(0)}else{const e=s.slice(0,A);I(!0),await O(e),d(e),x(A)}B(!1)}})(e),color:"var(--light-highlight)",labelColor:"var(--dark-highlight)"})]})]}),(0,u.jsx)(v.A,{style:{overflow:"hidden"},scrollThreshold:"50px",dataLength:c.length,next:Y,hasMore:S,loader:(0,u.jsx)(g.aH,{children:(0,u.jsx)(f.c,{})}),endMessage:(0,u.jsx)("p",{style:{textAlign:"center",color:"var(--ink-black)"},children:"Yay! You have seen it all."}),children:(0,u.jsx)(m,{submissions:c,isToggledOnlyImg:E,isToggledTextOnly:M,highlightSlug:P})}),(0,u.jsx)(b.A,{})]})]})}},3155(e,t,r){r.d(t,{v:()=>h});var o=r(5043),a=r(403),i=r(579);const n=a.Ay.img`
  width: 75px;
  margin-right: 10px;
  filter: drop-shadow(2px 2px 1px darkgray);
  opacity: 1;
`,s=a.Ay.div`
  display: flex;
`,l=a.Ay.div`
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 8%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-bottom-color: var(--dark-highlight);
    border-top: 0;
    margin-left: -20px;
    margin-top: -20px;
  }
  font: normal normal 300 20px/25px Mulish;
  min-height: 50px;
  border: 2px solid var(--dark-highlight);
  border-radius: 0.4em;
  position: absolute;
  background: var(--text-color);
  z-index: 69;
  top: 100px;
  min-width: 90%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px 1px var(--shadow);
`,c=a.Ay.span`
  color: var(--dark-highlight);
`,d=a.Ay.div`
  color: var(--text-color);
  font-size: 14px;
  max-width: 28ch;
  text-align: center;
  left: -1.5em;
  top: -1em;
  --b: 2em;
  --p: 50%;
  --r: 1.2em;
  height: 1.5em;
  padding: 1em;
  border-radius: 5em;
  display: flex;
  align-items: center;
  background: var(--light-background);
  position: absolute;
  &:before {
    content: "";
    position: absolute;
    left: 100%;
    top: clamp(0%, var(--p) - var(--b) / 4, 100% - var(--b) / 2);
    width: var(--b);
    aspect-ratio: 1;
    background: inherit;
    --g: #000 calc(100% - 1px), #0000;
    -webkit-mask: radial-gradient(circle closest-side at 88% 88%, var(--g)),
      radial-gradient(20% 20% at 55% 48%, var(--g)),
      radial-gradient(25% 25% at 0 25%, var(--g));
  }
`,h=e=>{let{id:t,pun:r,index:a}=e;const h=["8-bit Tako.png","Hollow Tako.png","Ikadachi.png","Mori Tako.png","Robodachi.png","Tako Amelia (Takoson).png","Tako Gura (Chum Tako).png","Tako Ina.png","Tako Kiara (Tako Bell).png","Tako Ross.png","Takodachi.png","Takomfy.png","Tophat Tako.png","Violet Tako.png","Wonder Tako.png","Yuul B. Tako.png"],g=!t?`/icon/${h[u=a,16807*u%2147483647%h.length]}`:`/takos/${t}`;var u;const[p,x]=(0,o.useState)(!1);return(0,i.jsxs)(s,{onClick:r?()=>{x(!p)}:void 0,children:[r&&!p&&(0,i.jsx)(d,{children:"..."}),(0,i.jsx)(n,{alt:`tako-icon-${t}`,src:g}),p&&(0,i.jsx)(l,{onClick:e=>e.stopPropagation(),children:(0,i.jsx)(c,{children:r})})]})}},3269(e,t,r){r.d(t,{IW:()=>a.IW,Id:()=>a.Id,JX:()=>s,Jj:()=>a.Jj,Zy:()=>a.Zy,aH:()=>a.aH,b8:()=>n,gQ:()=>a.gQ,iM:()=>a.iM,q1:()=>i,ue:()=>a.ue});var o=r(403),a=r(984);const i=o.Ay.div`
  background: var(--light-background);
  border: 2px solid var(--dark-background);
  border-radius: 15px;
  overflow: hidden;
`,n=o.Ay.div`
  background: var(--dark-highlight);
  color: var(--text-color);
  font: 700 clamp(22px, 1.3vw, 28px) / 1.35 Montserrat;
  padding: 10px 12px;
  border-bottom: 2px solid var(--light-highlight);
  display: flex;
  align-items: center;
`,s=o.Ay.div`
  padding-top: 5px;
  overflow-wrap: break-word;
  color: var(--ink-black);
  text-align: left;
  font: normal normal 300 clamp(20px, 1.1vw, 25px) / 1.3 Mulish;
  letter-spacing: 0px;
  opacity: 1;
  white-space: pre-line;
`},2154(e,t,r){r.d(t,{G:()=>a});var o=r(5043);const a=e=>{let{muted:t,volume:r=.1,autoPlay:a=!1,videoPaused:i=!1}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)(()=>{n.current&&(n.current.volume=r)},[r]),(0,o.useEffect)(()=>{const e=n.current;e&&(i?e.pause():(t||e.paused)&&(t?e.pause():e.play().catch(()=>{})))},[t,i]),(0,o.useEffect)(()=>{if(!a)return;let e=null,r=!1;return n.current&&!t&&n.current.play().catch(()=>{r||(e=()=>{n.current&&!t&&n.current.play().catch(()=>{}),e&&window.removeEventListener("click",e)},window.addEventListener("click",e))}),()=>{r=!0,e&&window.removeEventListener("click",e)}},[a,t]),n}}}]);
//# sourceMappingURL=366.01f26c3d.chunk.js.map
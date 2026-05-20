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
  transform: translateY(-50%) translateX(${e=>{let{active:t}=e;return t?"14px":"0px"}});
  transition: transform 0.2s linear;
  &.mobile {
    width: 12px;
    height: 12px;
    left: 2px;
    transform: translateY(-50%) translateX(${e=>{let{active:t}=e;return t?"12px":"0px"}});
  }
`,l=o.Ay.span`
  color: ${e=>{let{labelColor:t}=e;return null!==t&&void 0!==t?t:"var(--text-color)"}};
  text-align: left;
  font: normal normal 300 25px/26px Montserrat;
  letter-spacing: 0;
  &.mobile {
    font: normal normal 300 13px/16px Montserrat;
  }
`,c=e=>{let{label:t,value:r,onChange:o,color:c="var(--dark-highlight)",labelColor:d,mobile:h}=e;const g=h?"mobile":"";return(0,a.jsxs)(i,{onClick:()=>o(!r),children:[(0,a.jsx)(n,{active:r,color:c,className:g,children:(0,a.jsx)(s,{active:r,color:c,className:g})}),(0,a.jsx)(l,{labelColor:d,className:g,children:t})]})}},7366(e,t,r){r.r(t),r.d(t,{default:()=>k});var o=r(5043),a=r(303),i=r.n(a),n=r(3155),s=r(5849),l=r(3269),c=r(579);const d={settings:{disablePanzoom:!1},buttons:{showAutoplayButton:!1,showCloseButton:!1,showDownloadButton:!1,showFullscreenButton:!1,showNextButton:!1,showPrevButton:!1,showThumbnailsButton:!1},thumbnails:{showThumbnails:!1}},h=e=>{let{submissions:t,isToggledOnlyImg:r,isToggledTextOnly:a}=e;(0,o.useEffect)(()=>{window.scrollTo(0,0)},[]);const h=(0,o.useMemo)(()=>{let e=t;return r&&(e=e.filter(e=>e.image)),a&&(e=e.filter(e=>e.message)),e},[t,r,a]);return(0,c.jsx)(i(),{options:{gutter:40,columnWidth:1,fitWidth:!0,transitionDuration:0},style:{margin:"0 auto"},children:h.map((e,t)=>{let{message:o,user:i,icon:h,image:g,pun:u,event_date:p}=e;return(0,c.jsx)(l.Id,{children:(0,c.jsxs)(l.hP,{children:[(0,c.jsxs)(l.wI,{children:[(0,c.jsx)(n.v,{id:h,pun:u,index:t}),(0,c.jsx)(l.HM,{children:i||"Anonymous Tako"})]}),(0,c.jsx)("hr",{}),!a&&g&&(g.includes("youtube")?(0,c.jsx)(l.Zy,{width:"100%",height:"315",src:`${g}${g.includes("?")?"&":"?"}enablejsapi=1`,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):(0,c.jsx)(s.HU,{options:d,children:g.includes("mp4")?(0,c.jsx)("video",{width:420,controls:!0,children:(0,c.jsx)("source",{src:"/artworks/"+g,type:"video/mp4"})}):(0,c.jsx)(l.iM,{src:"/artworks/"+g})})),(!r||g.includes("mp4"))&&(0,c.jsx)(l.a3,{children:o}),p&&(0,c.jsx)("div",{style:{textAlign:"right",fontSize:"0.75rem",opacity:.6,marginTop:"0.4rem",paddingRight:"0.5rem"},children:p})]})},t)})})};var g=r(4997),u=r(2218),p=r(9372),x=r(5011),m=r(3536),v=r(4709),f=r(1472),w=r(2154),b=r(6088);const y=10,k=()=>{const{muted:e}=(0,f.d2)(),t=(0,w.G)({muted:e,autoPlay:!0}),{data:r,loading:a,error:i}=(0,b.s)("/data/messageData.json"),[n,s]=(0,o.useState)([]),[d,k]=(0,o.useState)([]),[j,T]=(0,o.useState)(0),[C,A]=(0,o.useState)(!0),[I,M]=(0,o.useState)(!1),[P,S]=(0,o.useState)(!1),E=o.useRef("");(0,o.useEffect)(()=>{if(r){const e=[...r].reverse();s(e);const t=e.slice(0,y);D(t).then(()=>{k(t),T(y),A(e.length>y)})}},[r]);const H=async()=>{if(0!==d.length){let e=n;I&&(e=e.filter(e=>""!==e.image)),P&&(e=e.filter(e=>e.message));const t=e.slice(j,y+j);0===t.length&&A(!1),await D(t),k(e=>e.concat(t)),T(e=>e+y)}};(0,o.useEffect)(()=>{if(C&&d.length>0){document.documentElement.scrollHeight>window.innerHeight||H()}},[d.length,C]);const B=(0,o.useMemo)(()=>(0,m.debounce)(async e=>{if(""!==e.target.value){const t=n.filter(t=>t.user.toLowerCase().includes(e.target.value.toLowerCase())||t.message.toLowerCase().includes(e.target.value.toLowerCase()));A(!1),k(t),T(0)}else{const e=n.slice(0,y);A(!0),await D(e),k(e),T(y)}},1e3),[n]);(0,o.useEffect)(()=>()=>{B.cancel()},[B]);const L=(e,t)=>e.filter(e=>e.user.toLowerCase().includes(t.toLowerCase())||e.message.toLowerCase().includes(t.toLowerCase())),D=async e=>{const t=[];e.forEach(e=>{e.image&&!e.image.includes("youtube")&&t.push(new Promise(t=>{const r=new Image;r.src="/artworks/"+e.image,r.onerror=t,r.onload=t}))}),await Promise.allSettled(t)};return(0,c.jsxs)("div",{style:{minHeight:"100vh",background:"var(--background)"},children:[(0,c.jsx)("audio",{ref:t,src:"/Vanilla.mp3",loop:!0,preload:"auto",style:{display:"none"}}),(0,c.jsxs)(v.Fp,{children:[(0,c.jsx)(v.Pn,{}),(0,c.jsx)(l.ue,{children:"Artworks & Messages"})]}),a?(0,c.jsx)(u.c,{}):i?(0,c.jsxs)("div",{children:["Error loading messages: ",i.message]}):(0,c.jsxs)(l.gQ,{children:[(0,c.jsxs)("div",{style:{textAlign:"center",padding:"2rem 1rem 1rem"},children:[(0,c.jsx)("h1",{style:{fontSize:"clamp(1.8rem, 5vw, 3rem)",color:"var(--dark-highlight)",marginBottom:"1rem"},children:"HAPPY BIRTHDAY INA! \ud83d\udc19\ud83d\udc9c"}),(0,c.jsx)("video",{controls:!0,style:{maxWidth:"min(720px, 100%)",width:"100%",borderRadius:"12px"},src:"/TakoToriDay3_InaBday.mp4"}),(0,c.jsx)("p",{style:{fontSize:"0.85rem",color:"var(--dark-highlight)",marginTop:"0.5rem",opacity:.8},children:"From Drawn to Dawn Fan Meeting Day 3"})]}),(0,c.jsxs)(l.Jj,{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"1rem",flexWrap:"wrap"},children:[(0,c.jsx)(l.IW,{onChange:e=>{E.current=e.target.value,B(e)},placeholder:"Search...",style:{flex:1,minWidth:"160px"}}),(0,c.jsxs)("div",{style:{display:"flex",flexDirection:"row",overflow:"hidden",flexShrink:0},children:[(0,c.jsx)(x.d,{label:"Only Images",value:I,onChange:e=>(async e=>{const t=E.current;if(e){k([]);const e=n.filter(e=>e.image);if(""!==t){const r=L(e,t);A(!1),k(r),T(0)}else{const t=e.slice(0,y);A(!0),await D(t),k(t),T(y)}M(!0),S(!1)}else{if(""!==t){const e=L(n,t);A(!1),k(e),T(0)}else{const e=n.slice(0,y);A(!0),await D(e),k(e),T(y)}M(!1)}})(e),color:"var(--light-highlight)",labelColor:"var(--dark-highlight)"}),(0,c.jsx)(x.d,{label:"Only messages",value:P,onChange:e=>(async e=>{const t=E.current;if(e){k([]);const e=n.filter(e=>e.message);if(""!==t){const r=L(e,t);A(!1),k(r),T(0)}else{const t=e.slice(0,y);A(!0),await D(t),k(t),T(y)}S(!0),M(!1)}else{if(""!==t){const e=L(n,t);A(!1),k(e),T(0)}else{const e=n.slice(0,y);A(!0),await D(e),k(e),T(y)}S(!1)}})(e),color:"var(--light-highlight)",labelColor:"var(--dark-highlight)"})]})]}),(0,c.jsx)(g.A,{style:{overflow:"hidden"},scrollThreshold:"50px",dataLength:d.length,next:H,hasMore:C,loader:(0,c.jsx)(l.aH,{children:(0,c.jsx)(u.c,{})}),endMessage:(0,c.jsx)("p",{style:{textAlign:"center",color:"var(--ink-black)"},children:"Yay! You have seen it all."}),children:(0,c.jsx)(h,{submissions:d,isToggledOnlyImg:I,isToggledTextOnly:P})}),(0,c.jsx)(p.A,{})]})]})}},3155(e,t,r){r.d(t,{v:()=>h});var o=r(5043),a=r(403),i=r(579);const n=a.Ay.img`
    width: 75px;
    margin-right: 10px;
    filter: drop-shadow(2px 2px 1px darkgray);
    opacity: 1;
`,s=a.Ay.div`
  display: flex;
`,l=a.Ay.div`
  &:after {
    content: '';
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
  border-radius: .4em;
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
    top: clamp(0%,var(--p) - var(--b)/4,100% - var(--b)/2);
    width: var(--b);
    aspect-ratio: 1;
    background: inherit;
    --g:#000 calc(100% - 1px),#0000;
    -webkit-mask:
            radial-gradient(circle closest-side at 88% 88%,var(--g)),
            radial-gradient(20% 20% at 55% 48%,var(--g)),
            radial-gradient(25% 25% at 0 25%,var(--g));
  }
`,h=e=>{let{id:t,pun:r,index:a}=e;const h=["8-bit Tako.png","Hollow Tako.png","Ikadachi.png","Mori Tako.png","Robodachi.png","Tako Amelia (Takoson).png","Tako Gura (Chum Tako).png","Tako Ina.png","Tako Kiara (Tako Bell).png","Tako Ross.png","Takodachi.png","Takomfy.png","Tophat Tako.png","Violet Tako.png","Wonder Tako.png","Yuul B. Tako.png"],g=!t?`/icon/${h[u=a,16807*u%2147483647%h.length]}`:`/takos/${t}`;var u;const[p,x]=(0,o.useState)(!1);return(0,i.jsxs)(s,{onClick:r?()=>{x(!p)}:void 0,children:[r&&!p&&(0,i.jsx)(d,{children:"..."}),(0,i.jsx)(n,{alt:`tako-icon-${t}`,src:g}),p&&(0,i.jsx)(l,{onClick:e=>e.stopPropagation(),children:(0,i.jsx)(c,{children:r})})]})}},3269(e,t,r){r.d(t,{HM:()=>o.HM,IW:()=>o.IW,Id:()=>o.Id,Jj:()=>o.Jj,Zy:()=>o.Zy,a3:()=>o.a3,aH:()=>o.aH,gQ:()=>o.gQ,hP:()=>o.hP,iM:()=>o.iM,ue:()=>o.ue,wI:()=>o.wI});var o=r(984)},2154(e,t,r){r.d(t,{G:()=>a});var o=r(5043);const a=e=>{let{muted:t,volume:r=.1,autoPlay:a=!1,videoPaused:i=!1}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)(()=>{n.current&&(n.current.volume=r)},[r]),(0,o.useEffect)(()=>{const e=n.current;e&&(i?e.pause():(t||e.paused)&&(t?e.pause():e.play().catch(()=>{})))},[t,i]),(0,o.useEffect)(()=>{if(!a)return;let e=null,r=!1;return n.current&&!t&&n.current.play().catch(()=>{r||(e=()=>{n.current&&!t&&n.current.play().catch(()=>{}),e&&window.removeEventListener("click",e)},window.addEventListener("click",e))}),()=>{r=!0,e&&window.removeEventListener("click",e)}},[a,t]),n}}}]);
//# sourceMappingURL=366.af4517b8.chunk.js.map
"use strict";(globalThis.webpackChunkina=globalThis.webpackChunkina||[]).push([[366],{5011(e,t,o){o.d(t,{d:()=>c});o(5043);var a=o(403),r=o(579);const s=a.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  padding: 0.1em;
  cursor: pointer;
`,n=a.Ay.div`
  position: relative;
  border-radius: 100px;
  width: 38px;
  min-width: 38px;
  height: 24px;
  flex-shrink: 0;
  background-color: ${e=>{let{active:t,color:o}=e;return t?o:"var(--dark-highlight)"}};
  transition: background-color 0.2s linear;
  &.mobile {
    width: 28px;
    min-width: 28px;
    height: 16px;
  }
`,i=a.Ay.div`
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
`,l=a.Ay.span`
  color: ${e=>{let{labelColor:t}=e;return null!==t&&void 0!==t?t:"var(--text-color)"}};
  text-align: left;
  font: normal normal 300 25px/26px Montserrat;
  letter-spacing: 0;
  &.mobile {
    font: normal normal 300 13px/16px Montserrat;
  }
`,c=e=>{let{label:t,value:o,onChange:a,color:c="var(--dark-highlight)",labelColor:d,mobile:h}=e;const u=h?"mobile":"";return(0,r.jsxs)(s,{onClick:()=>a(!o),children:[(0,r.jsx)(n,{active:o,color:c,className:u,children:(0,r.jsx)(i,{active:o,color:c,className:u})}),(0,r.jsx)(l,{labelColor:d,className:u,children:t})]})}},7366(e,t,o){o.r(t),o.d(t,{default:()=>y});var a=o(5043),r=o(303),s=o.n(r),n=o(3155),i=o(5849),l=o(3269),c=o(579);const d={settings:{disablePanzoom:!1},buttons:{showAutoplayButton:!1,showCloseButton:!1,showDownloadButton:!1,showFullscreenButton:!1,showNextButton:!1,showPrevButton:!1,showThumbnailsButton:!1},thumbnails:{showThumbnails:!1}},h=e=>{let{submissions:t,isToggledOnlyImg:o,isToggledTextOnly:r}=e;(0,a.useEffect)(()=>{window.scrollTo(0,0)},[]);const h=(0,a.useMemo)(()=>{let e=t;return o&&(e=e.filter(e=>e.image)),r&&(e=e.filter(e=>e.message)),e},[t,o,r]);return(0,c.jsx)(s(),{options:{gutter:40,columnWidth:1,fitWidth:!0,transitionDuration:0},style:{margin:"0 auto"},children:h.map((e,t)=>{let{message:a,user:s,icon:h,image:u,pun:g}=e;return(0,c.jsx)(l.Id,{children:(0,c.jsxs)(l.hP,{children:[(0,c.jsxs)(l.wI,{children:[(0,c.jsx)(n.v,{id:h,pun:g,index:t}),(0,c.jsx)(l.HM,{children:s||"Anonymous Tako"})]}),(0,c.jsx)("hr",{}),!r&&u&&(u.includes("youtube")?(0,c.jsx)(l.Zy,{width:"100%",height:"315",src:`${u}${u.includes("?")?"&":"?"}enablejsapi=1`,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):(0,c.jsx)(i.HU,{options:d,children:u.includes("mp4")?(0,c.jsx)("video",{width:420,controls:!0,children:(0,c.jsx)("source",{src:"/Artworks/"+u,type:"video/mp4"})}):(0,c.jsx)(l.iM,{src:"/Artworks/"+u})})),(!o||u.includes("mp4"))&&(0,c.jsx)(l.a3,{children:a})]})},t)})})};var u=o(4997),g=o(2218),p=o(9372),x=o(5011),m=o(3536),v=o(4709),f=o(1472),w=o(2154),b=o(6088);const k=10,y=()=>{const{muted:e}=(0,f.d2)(),t=(0,w.G)({muted:e,autoPlay:!0}),{data:o,loading:r,error:s}=(0,b.s)("/data/messageData.json"),[n,i]=(0,a.useState)([]),[d,y]=(0,a.useState)([]),[j,T]=(0,a.useState)(0),[C,A]=(0,a.useState)(!0),[I,M]=(0,a.useState)(!1),[E,L]=(0,a.useState)(!1),P=a.useRef("");(0,a.useEffect)(()=>{if(o){const e=[...o].reverse();i(e);const t=e.slice(0,k);B(t).then(()=>{y(t),T(k),A(e.length>k)})}},[o]);const H=async()=>{if(0!==d.length){let e=n;I&&(e=e.filter(e=>""!==e.image)),E&&(e=e.filter(e=>e.message));const t=e.slice(j,k+j);0===t.length&&A(!1),await B(t),y(e=>e.concat(t)),T(e=>e+k)}};(0,a.useEffect)(()=>{if(C&&d.length>0){document.documentElement.scrollHeight>window.innerHeight||H()}},[d.length,C]);const S=(0,a.useMemo)(()=>(0,m.debounce)(async e=>{if(""!==e.target.value){const t=n.filter(t=>t.user.toLowerCase().includes(e.target.value.toLowerCase())||t.message.toLowerCase().includes(e.target.value.toLowerCase()));A(!1),y(t),T(0)}else{const e=n.slice(0,k);A(!0),await B(e),y(e),T(k)}},1e3),[n]);(0,a.useEffect)(()=>()=>{S.cancel()},[S]);const $=(e,t)=>e.filter(e=>e.user.toLowerCase().includes(t.toLowerCase())||e.message.toLowerCase().includes(t.toLowerCase())),B=async e=>{const t=[];e.forEach(e=>{e.image&&!e.image.includes("youtube")&&t.push(new Promise(t=>{const o=new Image;o.src="/Artworks/"+e.image,o.onerror=t,o.onload=t}))}),await Promise.allSettled(t)};return(0,c.jsxs)("div",{style:{minHeight:"100vh",background:"var(--background)"},children:[(0,c.jsx)("audio",{ref:t,src:"/Vanilla.mp3",loop:!0,preload:"auto",style:{display:"none"}}),(0,c.jsxs)(v.Fp,{children:[(0,c.jsx)(v.Pn,{}),(0,c.jsx)(l.ue,{children:"Messages from Takos"})]}),r?(0,c.jsx)(g.c,{}):s?(0,c.jsxs)("div",{children:["Error loading messages: ",s.message]}):(0,c.jsxs)(l.gQ,{children:[(0,c.jsxs)(l.Jj,{children:[(0,c.jsx)(l.IW,{onChange:e=>{P.current=e.target.value,S(e)},placeholder:"Search..."}),(0,c.jsxs)("div",{style:{display:"flex",flexDirection:"row",overflow:"hidden"},children:[(0,c.jsx)(x.d,{label:"Only Images",value:I,onChange:e=>(async e=>{const t=P.current;if(e){y([]);const e=n.filter(e=>e.image);if(""!==t){const o=$(e,t);A(!1),y(o),T(0)}else{const t=e.slice(0,k);A(!0),await B(t),y(t),T(k)}M(!0),L(!1)}else{if(""!==t){const e=$(n,t);A(!1),y(e),T(0)}else{const e=n.slice(0,k);A(!0),await B(e),y(e),T(k)}M(!1)}})(e),color:"var(--light-highlight)",labelColor:"var(--dark-highlight)"}),(0,c.jsx)(x.d,{label:"Only messages",value:E,onChange:e=>(async e=>{const t=P.current;if(e){y([]);const e=n.filter(e=>e.message);if(""!==t){const o=$(e,t);A(!1),y(o),T(0)}else{const t=e.slice(0,k);A(!0),await B(t),y(t),T(k)}L(!0),M(!1)}else{if(""!==t){const e=$(n,t);A(!1),y(e),T(0)}else{const e=n.slice(0,k);A(!0),await B(e),y(e),T(k)}L(!1)}})(e),color:"var(--light-highlight)",labelColor:"var(--dark-highlight)"})]})]}),(0,c.jsx)(u.A,{style:{overflow:"hidden"},scrollThreshold:"50px",dataLength:d.length,next:H,hasMore:C,loader:(0,c.jsx)(l.aH,{children:(0,c.jsx)(g.c,{})}),endMessage:(0,c.jsx)("p",{style:{textAlign:"center",color:"var(--ink-black)"},children:"Yay! You have seen it all."}),children:(0,c.jsx)(h,{submissions:d,isToggledOnlyImg:I,isToggledTextOnly:E})}),(0,c.jsx)(p.A,{})]})]})}},3155(e,t,o){o.d(t,{v:()=>h});var a=o(5043),r=o(403),s=o(579);const n=r.Ay.img`
    width: 75px;
    margin-right: 10px;
    filter: drop-shadow(2px 2px 1px darkgray);
    opacity: 1;
`,i=r.Ay.div`
  display: flex;
`,l=r.Ay.div`
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
`,c=r.Ay.span`
  color: var(--dark-highlight);
`,d=r.Ay.div`
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
`,h=e=>{let{id:t,pun:o,index:r}=e;const h=["8-bit Tako.png","Hollow Tako.png","Ikadachi.png","Mori Tako.png","Robodachi.png","Tako Amelia (Takoson).png","Tako Gura (Chum Tako).png","Tako Ina.png","Tako Kiara (Tako Bell).png","Tako Ross.png","Takodachi.png","Takomfy.png","Tophat Tako.png","Violet Tako.png","Wonder Tako.png","Yuul B. Tako.png"],u=!t?`/icon/${h[g=r,16807*g%2147483647%h.length]}`:`/takos/${t}`;var g;const[p,x]=(0,a.useState)(!1);return(0,s.jsxs)(i,{onClick:o?()=>{x(!p)}:void 0,children:[o&&!p&&(0,s.jsx)(d,{children:"..."}),(0,s.jsx)(n,{alt:`tako-icon-${t}`,src:u}),p&&(0,s.jsx)(l,{onClick:e=>e.stopPropagation(),children:(0,s.jsx)(c,{children:o})})]})}},3269(e,t,o){o.d(t,{HM:()=>a.HM,IW:()=>a.IW,Id:()=>a.Id,Jj:()=>a.Jj,Zy:()=>a.Zy,a3:()=>a.a3,aH:()=>a.aH,gQ:()=>a.gQ,hP:()=>a.hP,iM:()=>a.iM,ue:()=>a.ue,wI:()=>a.wI});var a=o(984)},2154(e,t,o){o.d(t,{G:()=>r});var a=o(5043);const r=e=>{let{muted:t,volume:o=.1,autoPlay:r=!1,videoPaused:s=!1}=e;const n=(0,a.useRef)(null);return(0,a.useEffect)(()=>{n.current&&(n.current.volume=o)},[o]),(0,a.useEffect)(()=>{const e=n.current;e&&(s?e.pause():(t||e.paused)&&(t?e.pause():e.play().catch(()=>{})))},[t,s]),(0,a.useEffect)(()=>{if(!r)return;let e=null,o=!1;return n.current&&!t&&n.current.play().catch(()=>{o||(e=()=>{n.current&&!t&&n.current.play().catch(()=>{}),e&&window.removeEventListener("click",e)},window.addEventListener("click",e))}),()=>{o=!0,e&&window.removeEventListener("click",e)}},[r,t]),n}}}]);
//# sourceMappingURL=366.2c0ab6e2.chunk.js.map
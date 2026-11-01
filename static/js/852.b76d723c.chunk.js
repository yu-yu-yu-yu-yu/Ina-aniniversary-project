"use strict";(globalThis.webpackChunkina=globalThis.webpackChunkina||[]).push([[852],{2117(e,r,t){t.d(r,{X:()=>n});t(5043);var i=t(579);const n=e=>{let{what:r,error:t}=e;return(0,i.jsxs)("div",{children:["Error loading ",r,": ",t.message]})}},5011(e,r,t){t.d(r,{d:()=>d});t(5043);var i=t(403),n=t(579);const o=i.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  padding: 0.1em;
  cursor: pointer;
`,l=i.Ay.div`
  position: relative;
  border-radius: 100px;
  width: 38px;
  min-width: 38px;
  height: 24px;
  flex-shrink: 0;
  background-color: ${e=>{let{$active:r,$color:t}=e;return r?t:"var(--dark-highlight)"}};
  transition: background-color 0.2s linear;
  &.mobile {
    width: 28px;
    min-width: 28px;
    height: 16px;
  }
`,a=i.Ay.div`
  position: absolute;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  box-sizing: border-box;
  background: var(--text-color);
  border: 2px solid ${e=>{let{$color:r}=e;return r}};
  top: 50%;
  left: 3px;
  transform: translateY(-50%)
    translateX(${e=>{let{$active:r}=e;return r?"14px":"0px"}});
  transition: transform 0.2s linear;
  &.mobile {
    width: 12px;
    height: 12px;
    left: 2px;
    transform: translateY(-50%)
      translateX(${e=>{let{$active:r}=e;return r?"12px":"0px"}});
  }
`,s=i.Ay.span`
  color: ${e=>{let{$labelColor:r}=e;return null!==r&&void 0!==r?r:"var(--text-color)"}};
  text-align: left;
  font: normal normal 300 25px/26px Montserrat;
  letter-spacing: 0;
  &.mobile {
    font: normal normal 300 13px/16px Montserrat;
  }
`,d=e=>{let{label:r,value:t,onChange:i,color:d="var(--dark-highlight)",labelColor:c,mobile:h}=e;const u=h?"mobile":"";return(0,n.jsxs)(o,{onClick:()=>i(!t),children:[(0,n.jsx)(l,{$active:t,$color:d,className:u,children:(0,n.jsx)(a,{$active:t,$color:d,className:u})}),(0,n.jsx)(s,{$labelColor:c,className:u,children:r})]})}},9852(e,r,t){t.r(r),t.d(r,{default:()=>I});var i=t(5043),n=t(1688),o=t(6088),l=t(8893),a=t(9944),s=t(4709),d=t(984),c=t(5011),h=t(2218),u=t(5849);var g=t(1472),x=t(7362),p=t(403);const f=p.Ay.div`
  width: 100%;
  position: relative;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,v=p.Ay.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  flex: 1;
  min-height: 0;
  cursor: grab;
  user-select: none;
  gap: 32px;
  padding: 1.5rem 0;
  overflow-x: scroll;
  overflow-y: hidden;
  touch-action: pan-x;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;
  --pivot-w: min(760px, max(320px, calc(100% - 320px)));
  --neighbor-w: 200px;
  --edge-w: ${e=>{let{$dragging:r}=e;return r?"var(--neighbor-w)":"var(--pivot-w)"}};
  &::-webkit-scrollbar {
    display: none;
  }
  &::before,
  &::after {
    content: "";
    display: block;
    flex: 0 0 max(0px, calc(50% - var(--edge-w) / 2));
  }
`,m=p.Ay.div`
  position: relative;
  flex-shrink: 0;
  height: 100%;
  width: ${e=>{let{$isPivot:r,$dragging:t}=e;return r&&!t?"var(--pivot-w)":"var(--neighbor-w)"}};
  max-width: 90vw;
  display: flex;
  flex-direction: column;
  scroll-snap-align: center;
  scroll-snap-stop: always;
  opacity: ${e=>{let{$isPivot:r,$dragging:t}=e;return r&&!t?1:.45}};
  transform: ${e=>{let{$isPivot:r,$dragging:t}=e;return r&&!t?"scale(1)":"scale(0.55)"}};
  transition:
    width 0.4s ease,
    opacity 0.35s,
    transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: ${e=>{let{$isPivot:r}=e;return r?"default":"pointer"}};
`,b=p.Ay.div`
  background: var(--dark-highlight);
  color: var(--text-color);
  border: 2px solid var(--light-highlight);
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`,w=p.Ay.div`
  background: var(--dark-highlight);
  color: var(--text-color);
  border: 2px solid var(--light-highlight);
  border-radius: 20px;
  padding: clamp(10px, 2.5vw, 20px);
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 100%;
  margin-top: auto;
  margin-bottom: auto;
  overflow-y: auto;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
  ${e=>{let{$maxWidth:r}=e;return r?`\n    align-self: center;\n    width: fit-content;\n    max-width: min(100%, ${r}px);\n  `:"\n    align-self: stretch;\n    width: 100%;\n  "}}
`,y=p.Ay.div`
  border-radius: 14px;
  overflow: hidden;
  background: #000;
  flex: 0 1 auto;
  max-height: min(58vh, 520px);
  display: flex;
  align-items: center;
  justify-content: center;
  ${e=>{let{$aspect:r}=e;return r&&`\n    align-self: center;\n    max-width: 100%;\n    aspect-ratio: ${r};\n  `}}

  img,
  video {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
    display: block;
  }
`,j=p.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`,$=p.Ay.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid var(--light-highlight);
  object-fit: cover;
`,k=p.Ay.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid var(--light-highlight);
  object-fit: cover;
`,A=p.Ay.span`
  font-weight: 700;
  font-size: 0.95em;
`,C=p.Ay.span`
  font-size: 20px;
  line-height: 1;

  &[src] {
    width: 28px;
    height: auto;
    border-radius: 3px;
  }
`,T=p.Ay.p`
  margin: 0 auto;
  max-width: 60ch;
  font-size: clamp(13px, 1.6vw, 16px);
  line-height: 1.5;
  text-align: center;
`,P=p.Ay.a`
  align-self: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 36px;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  border: 1px solid var(--light-highlight);
  background: var(--light-highlight);
  color: var(--dark-highlight);
  font-weight: 700;
  text-decoration: none;
  transition:
    transform 0.15s ease,
    opacity 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    opacity: 0.9;
  }
`,S=p.Ay.div`
  text-align: center;
  padding: 4rem 0;
  opacity: 0.7;
`,E=p.Ay.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 12px 0 0;
`,H=p.Ay.input`
  height: 32px;
  width: 200px;
  max-width: 60vw;
  padding: 0 14px;
  border-radius: 999px;
  border: 1px solid var(--light-highlight);
  background: var(--dark-highlight);
  color: var(--text-color);
  font-size: 13px;
  box-sizing: border-box;

  &::placeholder {
    color: var(--text-color);
    opacity: 0.6;
  }
`;var N=t(993),L=t(579);const W={settings:{disablePanzoom:!1},buttons:{showAutoplayButton:!1,showCloseButton:!1,showDownloadButton:!1,showFullscreenButton:!1,showNextButton:!1,showPrevButton:!1,showThumbnailsButton:!1}},z=(e,r,t)=>e?(0,N.c)("takos",e):(0,N.V)(r,t),B=e=>{let{entry:r,index:t,slug:n}=e;const{reportVideoPlaying:o}=(0,g.d2)(),[l,a]=(0,i.useState)(!1),[s,d]=(0,i.useState)(!1),[c,h]=(0,i.useState)(null),p=(e=>{const r=(e||"").trim().toUpperCase();return(e=>/^[A-Z]{2}$/.test((e||"").trim().toUpperCase()))(r)?`https://flagcdn.com/w40/${r.toLowerCase()}.png`:null})(r.country),f=null!==c&&c<1?480:void 0,v=r.socials?(()=>{try{const e=new URL(r.socials).pathname.replace(/^\//,"").replace(/\/$/,"");return e?`@${e}`:"Social link"}catch{return"Social link"}})():"",m=r.file?`/wahrldSubmissions/${r.file}`:"";return(0,i.useEffect)(()=>{a(!1),h(null)},[r.file]),(0,i.useEffect)(()=>{if("video"===r.kind)return()=>o(!1)},[r.kind,r.file,o]),(0,L.jsxs)(w,{$maxWidth:f,children:[(0,L.jsx)(y,{$aspect:l?null:c,children:"video"===r.kind?(0,L.jsx)("video",{controls:!0,preload:"none",onLoadedMetadata:e=>{const{videoWidth:r,videoHeight:t}=e.currentTarget;r&&t&&h(r/t)},onPlay:()=>o(!0),onPause:()=>o(!1),onEnded:()=>o(!1),onError:()=>{console.error(`WAHrld video failed to load: ${r.file}`),a(!0)},children:(0,L.jsx)("source",{src:m,type:"video/mp4"})}):l||!m?(0,L.jsx)("div",{role:"alert",style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:180,padding:"1rem",color:"var(--light-highlight)",textAlign:"center"},children:r.file?`Could not load image: ${r.file}`:"This submission is missing its file asset."}):(0,L.jsx)(u.HU,{options:W,children:(0,L.jsx)("img",{src:m,alt:r.user,onLoad:e=>{const{naturalWidth:r,naturalHeight:t}=e.currentTarget;r&&t&&h(r/t)},onError:e=>{e.currentTarget.onerror=null,console.error(`WAHrld image failed to load: ${r.file}`),a(!0)}})})}),(0,L.jsxs)(j,{children:[(0,L.jsx)($,{src:z(r.icon,r.user,t),alt:r.user,onError:e=>{e.currentTarget.onerror=null,e.currentTarget.src=(0,N.V)(null,t)}}),(0,L.jsx)(A,{children:r.user}),p&&!s?(0,L.jsx)(C,{as:"img",src:p,alt:r.country,onError:()=>d(!0)}):(0,L.jsx)(C,{role:"img","aria-label":r.country||"The Void",children:"\ud83c\udff4"}),(0,L.jsx)(x.A,{slug:n,label:"Copy link to this submission"})]}),r.message&&(0,L.jsx)(T,{children:r.message}),r.socials&&(0,L.jsx)(P,{href:r.socials,target:"_blank",rel:"noopener noreferrer",children:v})]})};var M=t(3402),V=t(2117);const X={image:"Images",video:"Videos"},D=Object.keys(X),I=()=>{const{data:e,loading:r,error:t}=(0,o.s)("/data/wahrldData.json"),[u,g]=(0,i.useState)(null),[x,p]=(0,i.useState)(""),w=(0,i.useMemo)(()=>(null!==e&&void 0!==e?e:[]).filter(e=>Boolean(e.file)),[e]),y=(0,i.useMemo)(()=>u?w.filter(e=>e.kind===u):w,[w,u]),j=(0,i.useMemo)(()=>{const e=x.trim();if(!e)return y;if(e.length>=2&&e.startsWith('"')&&e.endsWith('"')){const r=e.slice(1,-1).toLowerCase();return y.filter(e=>{var t;return null===(t=e.message)||void 0===t?void 0:t.toLowerCase().includes(r)})}const r=e.toLowerCase();return y.filter(e=>{var t;return e.user.toLowerCase().includes(r)||(null===(t=e.country)||void 0===t?void 0:t.toLowerCase().includes(r))})},[y,x]),$=j.length,{pivotIndex:A,dragging:C,goTo:T,containerRef:P,itemRefs:W,containerHandlers:I}=(0,l.H)($,2,`${null!==u&&void 0!==u?u:"all"}|${x}`),R=e=>(0,a.L)(e.user,e.country),{hash:U}=(0,n.zy)(),Y=(0,i.useRef)(!1);return(0,i.useEffect)(()=>{if(Y.current||!U||0===w.length)return;const e=U.replace("#",""),r=w.find(r=>R(r)===e);if(!r)return;if(u&&r.kind!==u)return void g(null);const t=j.findIndex(r=>R(r)===e);t>=0&&(Y.current=!0,T(t))},[U,w,j,u,T]),(0,L.jsxs)("div",{style:{position:"relative",height:"100vh",display:"flex",flexDirection:"column",overflow:"hidden",background:"var(--background)"},children:[(0,L.jsx)(M.W,{src:"/\u663c\u5bdd\u306e\u30b9\u30b9\u30e1.mp3"}),(0,L.jsxs)(s.Fp,{children:[(0,L.jsx)(s.Pn,{}),(0,L.jsx)(d.DG,{children:"Ina around the WAHrld"})]}),r?(0,L.jsx)(h.c,{}):t?(0,L.jsx)(V.X,{what:"submissions",error:t}):(0,L.jsxs)(d.gQ,{style:{flex:1,minHeight:0,display:"flex",flexDirection:"column"},children:[(0,L.jsxs)(E,{children:[D.map(e=>{return(0,L.jsx)(c.d,{label:X[e],value:u===e,onChange:(r=e,e=>g(e?r:null)),labelColor:"var(--dark-highlight)"},e);var r}),(0,L.jsx)(H,{type:"search",value:x,onChange:e=>p(e.target.value),placeholder:'Name, country, or "keyword"',"aria-label":"Search submissions"})]}),0===$?(0,L.jsx)(S,{children:x.trim()?"No submissions match your search.":"No submissions yet, check back soon!"}):(0,L.jsxs)(f,{children:[(0,L.jsxs)(d.wQ,{children:[A+1," / ",$]}),(0,L.jsx)(d.Xj,{$side:"left",onClick:()=>T(A-1),disabled:0===A,"aria-label":"Previous submission",children:(0,L.jsx)("i",{className:"fa fa-chevron-left","aria-hidden":"true"})}),(0,L.jsx)(d.Xj,{$side:"right",onClick:()=>T(A+1),disabled:A>=$-1,"aria-label":"Next submission",children:(0,L.jsx)("i",{className:"fa fa-chevron-right","aria-hidden":"true"})}),C&&(0,L.jsx)(d.hf,{}),(0,L.jsx)(v,{ref:P,$dragging:C,...I,children:j.map((e,r)=>{const t=r===A,i=t&&!C,n=R(e);return(0,L.jsx)(m,{id:n,$isPivot:t,$dragging:C,ref:e=>{W.current[r]=e},onClick:t?void 0:()=>T(r),children:i?(0,L.jsx)(B,{entry:e,index:r,slug:n}):(0,L.jsxs)(b,{children:[(0,L.jsx)(k,{src:z(e.icon,e.user,r),alt:e.user,onError:e=>{e.currentTarget.onerror=null,e.currentTarget.src=(0,N.V)(null,r)}}),(0,L.jsx)("span",{children:e.user})]})},`${e.user}-${r}`)})})]})]})]})}},6088(e,r,t){t.d(r,{s:()=>n});var i=t(5043);const n=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const[t,n]=(0,i.useState)(null),[o,l]=(0,i.useState)(!0),[a,s]=(0,i.useState)(null),d=async t=>{l(!0),s(null);try{const i=await fetch(e,{...r,signal:t});if(!i.ok)throw new Error(`HTTP error! status: ${i.status}`);const o=await i.json();if(null!==t&&void 0!==t&&t.aborted)return;n(o)}catch(i){if(null!==t&&void 0!==t&&t.aborted)return;s(i)}finally{null!==t&&void 0!==t&&t.aborted||l(!1)}};(0,i.useEffect)(()=>{const e=new AbortController;return d(e.signal),()=>e.abort()},[e,JSON.stringify(r)]);return{data:t,loading:o,error:a,refetch:()=>{d()}}}}}]);
//# sourceMappingURL=852.b76d723c.chunk.js.map
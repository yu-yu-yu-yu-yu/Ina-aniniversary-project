"use strict";(globalThis.webpackChunkina=globalThis.webpackChunkina||[]).push([[852],{5011(e,r,t){t.d(r,{d:()=>d});t(5043);var i=t(403),n=t(579);const o=i.Ay.div`
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
  background-color: ${e=>{let{active:r,color:t}=e;return r?t:"var(--dark-highlight)"}};
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
  border: 2px solid ${e=>{let{color:r}=e;return r}};
  top: 50%;
  left: 3px;
  transform: translateY(-50%)
    translateX(${e=>{let{active:r}=e;return r?"14px":"0px"}});
  transition: transform 0.2s linear;
  &.mobile {
    width: 12px;
    height: 12px;
    left: 2px;
    transform: translateY(-50%)
      translateX(${e=>{let{active:r}=e;return r?"12px":"0px"}});
  }
`,s=i.Ay.span`
  color: ${e=>{let{labelColor:r}=e;return null!==r&&void 0!==r?r:"var(--text-color)"}};
  text-align: left;
  font: normal normal 300 25px/26px Montserrat;
  letter-spacing: 0;
  &.mobile {
    font: normal normal 300 13px/16px Montserrat;
  }
`,d=e=>{let{label:r,value:t,onChange:i,color:d="var(--dark-highlight)",labelColor:c,mobile:h}=e;const g=h?"mobile":"";return(0,n.jsxs)(o,{onClick:()=>i(!t),children:[(0,n.jsx)(l,{active:t,color:d,className:g,children:(0,n.jsx)(a,{active:t,color:d,className:g})}),(0,n.jsx)(s,{labelColor:c,className:g,children:r})]})}},9852(e,r,t){t.r(r),t.d(r,{default:()=>M});var i=t(5043),n=t(1688),o=t(6088),l=t(8893),a=t(2154),s=t(9944),d=t(4709),c=t(984),h=t(5011),g=t(2218),u=t(1472),x=t(6321),p=t(1452),f=t(5849);var m=t(7362),v=t(403);const b=v.Ay.div`
  width: 100%;
  position: relative;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,y=v.Ay.div`
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
`,w=v.Ay.div`
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
`,j=v.Ay.div`
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
`,k=v.Ay.div`
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
`,$=v.Ay.div`
  border-radius: 14px;
  overflow: hidden;
  background: #000;
  flex: 0 1 auto;
  max-height: min(58vh, 520px);
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  video {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
    display: block;
  }
`,A=v.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`,C=v.Ay.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid var(--light-highlight);
  object-fit: cover;
`,T=v.Ay.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid var(--light-highlight);
  object-fit: cover;
`,P=v.Ay.span`
  font-weight: 700;
  font-size: 0.95em;
`,E=v.Ay.span`
  font-size: 20px;
  line-height: 1;

  &[src] {
    width: 28px;
    height: auto;
    border-radius: 3px;
  }
`,H=v.Ay.p`
  margin: 0 auto;
  max-width: 60ch;
  font-size: clamp(13px, 1.6vw, 16px);
  line-height: 1.5;
  text-align: center;
`,S=v.Ay.a`
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
`,N=v.Ay.div`
  text-align: center;
  padding: 4rem 0;
  opacity: 0.7;
`,V=v.Ay.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 12px 0 0;
`;var B=t(579);const z={settings:{disablePanzoom:!1},buttons:{showAutoplayButton:!1,showCloseButton:!1,showDownloadButton:!1,showFullscreenButton:!1,showNextButton:!1,showPrevButton:!1,showThumbnailsButton:!1}},W=(e,r,t)=>e?`/takos/${encodeURIComponent(e)}`:(0,x.VV)(r,t),I=e=>{let{entry:r,index:t,slug:n}=e;const{reportVideoPlaying:o}=(0,u.d2)(),[l,a]=(0,i.useState)(!1),[s,d]=(0,i.useState)(!1),[c,h]=(0,i.useState)(null),g=(e=>{const r=(e||"").trim().toUpperCase();return(e=>/^[A-Z]{2}$/.test((e||"").trim().toUpperCase()))(r)?`https://flagcdn.com/w40/${r.toLowerCase()}.png`:null})(r.country),p=null!==c&&c<1?480:void 0,v=r.socials?(()=>{try{const e=new URL(r.socials).pathname.replace(/^\//,"").replace(/\/$/,"");return e?`@${e}`:"Social link"}catch{return"Social link"}})():"",b=r.file?`/wahrldSubmissions/${r.file}`:"";return(0,i.useEffect)(()=>{a(!1),h(null)},[r.file]),(0,i.useEffect)(()=>{if("video"===r.kind)return()=>o(!1)},[r.kind,r.file,o]),(0,B.jsxs)(k,{$maxWidth:p,children:[(0,B.jsx)($,{children:"video"===r.kind?(0,B.jsx)("video",{controls:!0,preload:"none",onLoadedMetadata:e=>{const{videoWidth:r,videoHeight:t}=e.currentTarget;r&&t&&h(r/t)},onPlay:()=>o(!0),onPause:()=>o(!1),onEnded:()=>o(!1),onError:()=>{console.error(`WAHrld video failed to load: ${r.file}`),a(!0)},children:(0,B.jsx)("source",{src:b,type:"video/mp4"})}):l||!b?(0,B.jsx)("div",{role:"alert",style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:180,padding:"1rem",color:"var(--light-highlight)",textAlign:"center"},children:r.file?`Could not load image: ${r.file}`:"This submission is missing its file asset."}):(0,B.jsx)(f.HU,{options:z,children:(0,B.jsx)("img",{src:b,alt:r.user,onLoad:e=>{const{naturalWidth:r,naturalHeight:t}=e.currentTarget;r&&t&&h(r/t)},onError:e=>{e.currentTarget.onerror=null,console.error(`WAHrld image failed to load: ${r.file}`),a(!0)}})})}),(0,B.jsxs)(A,{children:[(0,B.jsx)(C,{src:W(r.icon,r.user,t),alt:r.user,onError:e=>{e.currentTarget.onerror=null,e.currentTarget.src=(0,x.VV)(null,t)}}),(0,B.jsx)(P,{children:r.user}),g&&!s?(0,B.jsx)(E,{as:"img",src:g,alt:r.country,onError:()=>d(!0)}):(0,B.jsx)(E,{role:"img","aria-label":r.country||"The Void",children:"\ud83c\udff4"}),(0,B.jsx)(m.A,{slug:n,label:"Copy link to this submission"})]}),r.message&&(0,B.jsx)(H,{children:r.message}),r.socials&&(0,B.jsx)(S,{href:r.socials,target:"_blank",rel:"noopener noreferrer",children:v})]})},D={image:"Images",video:"Videos"},L=Object.keys(D),M=()=>{const{muted:e}=(0,u.d2)(),r=(0,a.G)({muted:e,autoPlay:!0}),{data:t,loading:f,error:m}=(0,o.s)("/data/wahrldData.json"),[v,k]=(0,i.useState)(null),$=(0,i.useMemo)(()=>(null!==t&&void 0!==t?t:[]).filter(e=>Boolean(e.file)),[t]),A=(0,i.useMemo)(()=>v?$.filter(e=>e.kind===v):$,[$,v]),C=A.length,{pivotIndex:P,dragging:E,goTo:H,containerRef:S,itemRefs:z,containerHandlers:M}=(0,l.H)(C,2,null!==v&&void 0!==v?v:"all"),R=e=>(0,s.L)(e.user,e.country),{hash:U}=(0,n.zy)(),X=(0,i.useRef)(!1);return(0,i.useEffect)(()=>{if(X.current||!U||0===$.length)return;const e=U.replace("#",""),r=$.find(r=>R(r)===e);if(!r)return;if(v&&r.kind!==v)return void k(null);const t=A.findIndex(r=>R(r)===e);t>=0&&(X.current=!0,H(t))},[U,$,A,v,H]),(0,B.jsxs)("div",{style:{position:"relative",height:"100vh",display:"flex",flexDirection:"column",overflow:"hidden",background:"var(--background)"},children:[(0,B.jsx)("audio",{ref:r,src:"/\u663c\u5bdd\u306e\u30b9\u30b9\u30e1.mp3",loop:!0,preload:"auto",style:{display:"none"}}),(0,B.jsxs)(d.Fp,{children:[(0,B.jsx)(d.Pn,{}),(0,B.jsx)(c.DG,{children:"Ina around the WAHrld"})]}),f?(0,B.jsx)(g.c,{}):m?(0,B.jsxs)("div",{children:["Error loading submissions: ",m.message]}):(0,B.jsxs)(c.gQ,{style:{flex:1,minHeight:0,display:"flex",flexDirection:"column"},children:[(0,B.jsx)(V,{children:L.map(e=>{return(0,B.jsx)(h.d,{label:D[e],value:v===e,onChange:(r=e,e=>k(e?r:null)),labelColor:"var(--dark-highlight)"},e);var r})}),0===C?(0,B.jsx)(N,{children:"No submissions yet, check back soon!"}):(0,B.jsxs)(b,{children:[(0,B.jsxs)(p.wQ,{children:[P+1," / ",C]}),(0,B.jsx)(p.Xj,{$side:"left",onClick:()=>H(P-1),disabled:0===P,"aria-label":"Previous submission",children:(0,B.jsx)("i",{className:"fa fa-chevron-left","aria-hidden":"true"})}),(0,B.jsx)(p.Xj,{$side:"right",onClick:()=>H(P+1),disabled:P>=C-1,"aria-label":"Next submission",children:(0,B.jsx)("i",{className:"fa fa-chevron-right","aria-hidden":"true"})}),E&&(0,B.jsx)(c.hf,{}),(0,B.jsx)(y,{ref:S,$dragging:E,...M,children:A.map((e,r)=>{const t=r===P,i=t&&!E,n=R(e);return(0,B.jsx)(w,{id:n,$isPivot:t,$dragging:E,ref:e=>{z.current[r]=e},onClick:t?void 0:()=>H(r),children:i?(0,B.jsx)(I,{entry:e,index:r,slug:n}):(0,B.jsxs)(j,{children:[(0,B.jsx)(T,{src:W(e.icon,e.user,r),alt:e.user,onError:e=>{e.currentTarget.onerror=null,e.currentTarget.src=(0,x.VV)(null,r)}}),(0,B.jsx)("span",{children:e.user})]})},`${e.user}-${r}`)})})]})]})]})}},6088(e,r,t){t.d(r,{s:()=>n});var i=t(5043);const n=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const[t,n]=(0,i.useState)(null),[o,l]=(0,i.useState)(!0),[a,s]=(0,i.useState)(null),d=async()=>{l(!0),s(null);try{const t=await fetch(e,r);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const i=await t.json();n(i)}catch(t){s(t)}finally{l(!1)}};(0,i.useEffect)(()=>{d()},[e,JSON.stringify(r)]);return{data:t,loading:o,error:a,refetch:()=>{d()}}}}}]);
//# sourceMappingURL=852.7e11f210.chunk.js.map
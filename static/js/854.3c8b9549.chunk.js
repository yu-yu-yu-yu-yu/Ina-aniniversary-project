"use strict";(globalThis.webpackChunkina=globalThis.webpackChunkina||[]).push([[854],{5854(e,t,o){o.r(t),o.d(t,{default:()=>ne});var r=o(5043),n=o(7950),i=o(303),a=o.n(i),s=o(403),l=o(579);const c=s.Ay.img`
    width: 75px;
    margin-right: 10px;
    filter: drop-shadow(2px 2px 1px darkgray);
    opacity: 1;
`,d=s.Ay.div`
  display: flex;
`,p=s.Ay.div`
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
`,u=s.Ay.span`
  color: var(--dark-highlight);
`,h=s.Ay.div`
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
`,g=e=>{let{id:t,pun:o,index:n}=e;const i=["8-bit Tako.png","Hollow Tako.png","Ikadachi.png","Mori Tako.png","Robodachi.png","Tako Amelia (Takoson).png","Tako Gura (Chum Tako).png","Tako Ina.png","Tako Kiara (Tako Bell).png","Tako Ross.png","Takodachi.png","Takomfy.png","Tophat Tako.png","Violet Tako.png","Wonder Tako.png","Yuul B. Tako.png"],a=!t?`/icon/${i[s=n,16807*s%2147483647%i.length]}`:`/takos/${t}`;var s;const[g,x]=(0,r.useState)(!1);return(0,l.jsxs)(d,{onClick:o?()=>{x(!g)}:void 0,children:[o&&!g&&(0,l.jsx)(h,{children:"..."}),(0,l.jsx)(c,{alt:`tako-icon-${t}`,src:a}),g&&(0,l.jsx)(p,{onClick:e=>e.stopPropagation(),children:(0,l.jsx)(u,{children:o})})]})};var x=o(5849),m=o(984);const b=s.i7`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-6px); }
`,f=s.i7`
  0%   { transform: perspective(900px) rotateY(0deg);   }
  100% { transform: perspective(900px) rotateY(-90deg); }
`,v=s.i7`
  0%   { transform: perspective(900px) rotateY(-90deg); }
  100% { transform: perspective(900px) rotateY(0deg);   }
`,k=s.i7`
  0%   { transform: perspective(900px) rotateY(90deg); }
  100% { transform: perspective(900px) rotateY(0deg);  }
`,y=s.i7`
  0%   { transform: perspective(900px) rotateY(0deg);  }
  100% { transform: perspective(900px) rotateY(90deg); }
`,w=s.i7`
  0%   { transform: perspective(700px) rotateX(0deg);    }
  100% { transform: perspective(700px) rotateX(-180deg); }
`,j=s.i7`
  0%   { opacity: 1; transform: translate(-50%, -50%) scale(1);    }
  30%  { opacity: 1; transform: translate(-50%, -50%) scale(1.12); }
  65%  { opacity: 0; transform: translate(-50%, -50%) scale(0.6);  }
  100% { opacity: 0; transform: translate(-50%, -50%) scale(0);    }
`,A=s.i7`
  from { opacity: 0; }
  to   { opacity: 1; }
`,$=s.i7`
  from { opacity: 0; transform: translateY(20px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0)    scale(1);    }
`,T=s.Ay.div`
  width: 280px;
  margin-bottom: 8px;
  cursor: pointer;
`,C=s.Ay.div`
  width: 100%;
  position: relative;
  overflow: visible;
`,E=s.Ay.div`
  width: 100%;
  position: relative;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.18));

  ${e=>{let{$state:t,$hover:o}=e;return"idle"!==t||"hovering"===o?s.AH`animation: ${f}  0.25s ease-in           forwards;`:"leaving"===o?s.AH`animation: ${v} 0.25s ease-out 0.25s   both;`:s.AH`animation: ${b} 3s ease-in-out infinite;`}}

  &:hover {
    filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.28));
  }

  > img:first-child {
    width: 100%;
    display: block;
    border-radius: 6px;
  }
`,H=s.Ay.span`
  position: absolute;
  top: 6%;
  left: 6%;
  font-family: Georgia, serif;
  font-size: 14px;
  font-weight: bold;
  color: var(--text-color, #fff);
  text-shadow:
    0 1px 3px rgba(60, 20, 80, 0.85),
    0 0 8px rgba(60, 20, 80, 0.5);
  pointer-events: none;
  max-width: 55%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,S=s.Ay.div`
  position: absolute;
  inset: 0;
  overflow: visible;

  ${e=>{let{$state:t,$hover:o}=e;return"flipping"===t||"hovering"===o?s.AH`animation: ${k} 0.25s ease-out 0.25s forwards; transform: perspective(900px) rotateY(90deg);`:"opening"===t||"open"===t?s.AH`transform: perspective(900px) rotateY(0deg);`:"leaving"===o?s.AH`animation: ${y}  0.25s ease-in  forwards;`:s.AH`transform: perspective(900px) rotateY(90deg); pointer-events: none;`}}

  img.base {
    width: 100%;
    display: block;
    border-radius: 6px;
  }
`,Y=s.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  aspect-ratio: 1799 / 627;
  transform-style: preserve-3d;
  transform-origin: top center;

  ${e=>{let{$state:t}=e;return"opening"===t&&s.AH`animation: ${w} 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;`}}

  ${e=>{let{$state:t}=e;return"open"===t&&s.AH`transform: perspective(700px) rotateX(-180deg);`}}
`,z=s.Ay.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`,P=s.Ay.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateX(180deg);
`,L=s.Ay.img`
  position: absolute;
  width: 22.2%;
  top: 57.2%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;

  ${e=>{let{$opening:t}=e;return t&&s.AH`animation: ${j} 0.45s ease forwards;`}}
`,I=s.i7`
  0%   { opacity: 0; transform: scale(0.5); }
  60%  { opacity: 1; transform: scale(1.15); }
  100% { opacity: 1; transform: scale(1); }
`,M=s.Ay.img`
  position: absolute;
  width: 22.2%;
  bottom: 6%;
  right: 4%;
  pointer-events: none;
  opacity: ${e=>{let{$visible:t}=e;return t?1:0}};
  transition: opacity 0.2s ease;

  ${e=>{let{$visible:t}=e;return t&&s.AH`animation: ${I} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;`}}
`,B=s.Ay.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(3px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${A} 0.25s ease forwards;
  padding: 24px;
`,R=s.Ay.div`
  border: 3px solid var(--light-background);
  background: var(--background);
  border-radius: 15px;
  padding: 15px;
  font-family: sans-serif;
  font-size: 18px;
  line-height: 24px;

  width: 70vw;
  height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  animation: ${$} 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;

  img {
    max-width: 100%;
  }

  scrollbar-width: thin;
  scrollbar-color: #bb6ad4 transparent;
  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-thumb { background: #b66ad4; border-radius: 3px; }
`,N=(s.Ay.p`
  font-size: 12px;
  color: var(--ink-black);
  text-align: center;
  margin-top: 8px;
  font-style: italic;
  opacity: 0.6;
`,s.Ay.button`
  margin-top: auto;
  padding: 16px;
  width: 100%;
  background: none;
  border: none;
  border-top: 1px solid rgba(180, 106, 212, 0.25);
  cursor: pointer;
  font-size: 15px;
  color: #795a9b;
  transition: background 0.15s ease, color 0.15s ease;
  flex-shrink: 0;

  &:hover {
    background: rgba(180, 106, 212, 0.1);
    color: #c0392b;
  }
`),W=s.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 6px 0;
  flex-shrink: 0;
`,X=s.Ay.button`
  background: var(--dark-highlight);
  border: 2px solid var(--light-highlight);
  border-radius: 50%;
  width: 1.8em;
  height: 1.8em;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--light-highlight);
  font-size: 1em;
  font-weight: bold;
  line-height: 1;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
  flex-shrink: 0;

  &:hover {
    background: var(--light-highlight);
    color: var(--dark-highlight);
  }

  &:disabled {
    opacity: 0.35;
    cursor: default;
    &:hover { background: var(--dark-highlight); color: var(--light-highlight); }
  }
`,Z=s.Ay.span`
  font-size: 13px;
  color: var(--ink-black);
  min-width: 52px;
  text-align: center;
  opacity: 0.7;
  user-select: none;
`,G=e=>`/letterAssets/${e}`,O={settings:{disablePanzoom:!1},buttons:{showAutoplayButton:!1,showCloseButton:!1,showDownloadButton:!1,showFullscreenButton:!1,showNextButton:!1,showPrevButton:!1,showThumbnailsButton:!1},thumbnails:{showThumbnails:!1}},D=e=>`letter_read_${e}`,F=e=>{let{submission:t}=e;return(0,r.useEffect)(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),n.createPortal((0,l.jsx)(B,{style:{cursor:"default"},children:(0,l.jsxs)("div",{style:{width:"280px",position:"relative",pointerEvents:"none"},children:[(0,l.jsx)("img",{src:G("letter-back.png"),style:{width:"100%",display:"block",borderRadius:"6px"},alt:""}),(0,l.jsxs)(Y,{$state:"opening",children:[(0,l.jsx)(z,{src:G("letter-back-top-front.png"),alt:""}),(0,l.jsx)(P,{src:G("letter-back-top-back.png"),alt:""})]}),(0,l.jsx)(L,{src:G("letter-back-seal.png"),$opening:!0,alt:""})]})}),document.body)},_=e=>{let{submission:t,index:o,total:i,zoom:a,onZoomChange:s,onClose:c,onNavigate:d}=e;const{user:p,icon:u,image:h}=t,b=o>0,f=o<i-1;(0,r.useEffect)(()=>{const e=e=>{"Escape"===e.key&&c(),"ArrowLeft"===e.key&&d(o,-1),"ArrowRight"===e.key&&d(o,1)};return document.addEventListener("keydown",e),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",e),document.body.style.overflow=""}},[c,d,o]);const v=`min(${Math.max(70,a/2+12)}vw, 96vw)`;return n.createPortal((0,l.jsx)(B,{onClick:c,children:(0,l.jsxs)(R,{onClick:e=>e.stopPropagation(),style:{width:v,overflowX:"auto"},children:[(0,l.jsxs)(W,{children:[(0,l.jsx)(X,{onClick:()=>d(o,-1),disabled:!b,title:"Previous letter",children:"\u2190"}),(0,l.jsx)(X,{onClick:()=>s(Math.max(100,a-25)),disabled:a<=100,title:"Zoom out",children:"\u2212"}),(0,l.jsxs)(Z,{children:["Zoom ",a,"%"]}),(0,l.jsx)(X,{onClick:()=>s(Math.min(200,a+25)),disabled:a>=200,title:"Zoom in",children:"+"}),(0,l.jsx)(X,{onClick:()=>d(o,1),disabled:!f,title:"Next letter",children:"\u2192"})]}),(0,l.jsx)("hr",{style:{margin:"4px 0 8px"}}),h&&(0,l.jsx)(x.HU,{options:O,children:h.includes("mp4")?(0,l.jsx)("video",{style:{display:"block",width:a/2+"vw",margin:"0 auto"},controls:!0,children:(0,l.jsx)("source",{src:`/letters/${h}`,type:"video/mp4"})}):(0,l.jsx)(m.iM,{src:`/letters/${h}`,style:{width:a/2+"vw",maxWidth:"none"}})}),(0,l.jsx)("hr",{style:{margin:"8px 0 4px"}}),(0,l.jsxs)(m.wI,{children:[(0,l.jsx)(g,{id:u,index:o}),(0,l.jsx)(m.HM,{children:p||"Anonymous Tako"})]}),(0,l.jsx)(N,{onClick:c,children:"Close letter"})]})}),document.body)},U=e=>{let{submission:t,index:o,isOpen:n,onOpen:i}=e;const[a,s]=(0,r.useState)("idle"),[c,d]=(0,r.useState)("idle"),[p,u]=(0,r.useState)(()=>"1"===localStorage.getItem(D(o))),h=(0,r.useRef)(null),{user:g}=t;(0,r.useEffect)(()=>{n&&"1"===localStorage.getItem(D(o))&&u(!0)},[n,o]),(0,r.useEffect)(()=>{n||"open"!==a||s("idle")},[n]);const x=(0,r.useCallback)(()=>{"idle"===a&&(h.current&&(clearTimeout(h.current),h.current=null),d("hovering"))},[a]),m=(0,r.useCallback)(()=>{"idle"===a&&(d("leaving"),h.current=window.setTimeout(()=>{d("idle"),h.current=null},500))},[a]),b=(0,r.useCallback)(()=>{localStorage.setItem(D(o),"1"),u(!0)},[o]),f=(0,r.useCallback)(()=>{"idle"===a&&(h.current&&(clearTimeout(h.current),h.current=null),"hovering"===c?(s("opening"),setTimeout(()=>{s("open"),i(o),b()},650)):(s("flipping"),setTimeout(()=>s("opening"),500),setTimeout(()=>{s("open"),i(o),b()},1150)),d("idle"))},[a,c,i,o,b]);return(0,l.jsx)(T,{onClick:f,onMouseEnter:x,onMouseLeave:m,children:(0,l.jsxs)(C,{children:[(0,l.jsxs)(E,{$state:a,$hover:c,children:[(0,l.jsx)("img",{src:G("letter-front.png"),alt:"envelope front"}),(0,l.jsx)(H,{children:g||"Anonymous Tako"}),(0,l.jsx)(M,{src:G("letter-back-seal.png"),$visible:p,alt:"read seal"})]}),(0,l.jsxs)(S,{$state:a,$hover:c,children:[(0,l.jsx)("img",{className:"base",src:G("letter-back.png"),alt:"envelope back"}),(0,l.jsxs)(Y,{$state:a,children:[(0,l.jsx)(z,{src:G("letter-back-top-front.png"),alt:""}),(0,l.jsx)(P,{src:G("letter-back-top-back.png"),alt:""})]}),!p&&(0,l.jsx)(L,{src:G("letter-back-seal.png"),$opening:"opening"===a,alt:""})]})]})})},V=e=>{let{submissions:t}=e;const[o,n]=(0,r.useState)(100),[i,s]=(0,r.useState)(null),[c,d]=(0,r.useState)(null);(0,r.useEffect)(()=>{window.scrollTo(0,0)},[]);const p=(0,r.useCallback)(e=>{s(e)},[]),u=(0,r.useCallback)(()=>{s(null)},[]),h=(0,r.useCallback)((e,o)=>{const r=e+o;if(r<0||r>=t.length)return;const n="1"===localStorage.getItem(D(r));s(null),n?s(r):(localStorage.setItem(D(r),"1"),d(r),setTimeout(()=>{d(null),s(r)},950))},[t.length]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{style:{display:"flex",justifyContent:"center",width:"100%",padding:"0 20px",boxSizing:"border-box"},children:(0,l.jsx)(a(),{options:{gutter:40,columnWidth:1,fitWidth:!0,transitionDuration:0},style:{margin:"0 auto",paddingTop:"80px"},children:t.map((e,t)=>(0,l.jsx)(U,{index:t,submission:e,isOpen:i===t,onOpen:p},t))})}),null!==i&&(0,l.jsx)(_,{submission:t[i],index:i,total:t.length,zoom:o,onZoomChange:n,onClose:u,onNavigate:h},i),null!==c&&(0,l.jsx)(F,{submission:t[c]})]})};var J=o(4997),K=o(2218),Q=o(9372),q=o(3536),ee=o(4709),te=o(1472),oe=o(2154),re=o(6088);const ne=()=>{const{muted:e}=(0,te.d2)(),t=(0,oe.G)({muted:e,autoPlay:!0}),{data:o,loading:i,error:a}=(0,re.s)("/data/letterData.json"),[s,c]=(0,r.useState)([]),d=(0,r.useRef)([]),[p,u]=(0,r.useState)([]),[h,g]=(0,r.useState)(!0),x=(0,r.useRef)(0);(0,r.useEffect)(()=>{if(o){const e=[...o].reverse();c(e),d.current=e;const t=e.slice(0,4);k(t).then(()=>{n.unstable_batchedUpdates(()=>{x.current=4,u(t),g(e.length>4)})})}},[o]);const b=async()=>{if(0===p.length)return;const e=s.slice(x.current,4+x.current);0!==e.length?(await k(e),x.current+=4,u(t=>t.concat(e))):g(!1)};(0,r.useEffect)(()=>{if(h&&p.length>0){document.documentElement.scrollHeight>window.innerHeight||b()}},[p.length,h]);const f=(0,r.useCallback)((0,q.debounce)(async e=>{const t=d.current;if(""!==e){const o=t.filter(t=>{var o;return null===(o=t.user)||void 0===o?void 0:o.toLowerCase().includes(e.toLowerCase())});x.current=0,g(!1),u(o)}else{const e=t.slice(0,4);await k(e),x.current=4,u(e),g(t.length>4)}},500),[]),v=(0,r.useCallback)(e=>{f(e.target.value)},[f]),k=async e=>{const t=[];e.forEach(e=>{e.image&&!e.image.includes("youtube")&&t.push(new Promise(t=>{const o=new Image;o.src="/letters/"+e.image,o.onerror=t,o.onload=t}))}),await Promise.allSettled(t)};return(0,l.jsxs)("div",{style:{minHeight:"100vh",background:"var(--background)"},children:[(0,l.jsx)("audio",{ref:t,src:"/Vanilla.mp3",loop:!0,preload:"auto",style:{display:"none"}}),(0,l.jsxs)(ee.Fp,{children:[(0,l.jsx)(ee.Pn,{}),(0,l.jsx)(m.ue,{children:"Letters for Ina"})]}),i?(0,l.jsx)(K.c,{}):a?(0,l.jsxs)("div",{children:["Error loading Letters: ",a.message]}):(0,l.jsxs)(m.gQ,{children:[(0,l.jsx)(m.Jj,{children:(0,l.jsx)(m.IW,{onChange:v,placeholder:"Search by name..."})}),(0,l.jsx)(J.A,{style:{overflow:"hidden"},scrollThreshold:"50px",dataLength:p.length,next:b,hasMore:h,loader:(0,l.jsx)(m.aH,{children:(0,l.jsx)(K.c,{})}),endMessage:(0,l.jsx)("p",{style:{textAlign:"center",color:"var(--ink-black)"},children:"Yay! You have seen it all"}),children:(0,l.jsx)(V,{submissions:p})}),(0,l.jsx)(Q.A,{})]})]})}},2154(e,t,o){o.d(t,{G:()=>n});var r=o(5043);const n=e=>{let{muted:t,volume:o=.1,autoPlay:n=!1,videoPaused:i=!1}=e;const a=(0,r.useRef)(null);return(0,r.useEffect)(()=>{a.current&&(a.current.volume=o)},[o]),(0,r.useEffect)(()=>{const e=a.current;e&&(i?e.pause():(t||e.paused)&&(t?e.pause():e.play().catch(()=>{})))},[t,i]),(0,r.useEffect)(()=>{if(!n)return;let e=null,o=!1;return a.current&&!t&&a.current.play().catch(()=>{o||(e=()=>{a.current&&!t&&a.current.play().catch(()=>{}),e&&window.removeEventListener("click",e)},window.addEventListener("click",e))}),()=>{o=!0,e&&window.removeEventListener("click",e)}},[n,t]),a}}}]);
//# sourceMappingURL=854.3c8b9549.chunk.js.map
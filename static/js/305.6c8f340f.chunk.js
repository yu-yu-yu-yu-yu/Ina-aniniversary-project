"use strict";(globalThis.webpackChunkina=globalThis.webpackChunkina||[]).push([[305],{3402(e,n,t){t.d(n,{W:()=>r});t(5043);var a=t(9773),o=t(1472),s=t(579);const r=e=>{let{src:n,pauseOnVideo:t=!1}=e;const{muted:r,videoPlaying:i}=(0,o.d2)(),p=(0,a.G)({muted:r,autoPlay:!0,videoPaused:t&&i});return(0,s.jsx)("audio",{ref:p,src:""+n,loop:!0,preload:"auto",style:{display:"none"}})}},2611(e,n,t){t.d(n,{v:()=>d});var a=t(5043),o=t(403),s=t(5402),r=t(993),i=t(579);const p=o.Ay.img`
  width: 75px;
  margin-right: 10px;
  filter: drop-shadow(2px 2px 1px darkgray);
  opacity: 1;
`,g=o.Ay.div`
  display: flex;
`,l=o.Ay.div`
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
`,k=o.Ay.span`
  color: var(--dark-highlight);
`,c=o.Ay.div`
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
`,d=e=>{let{id:n,pun:t,index:o}=e;const d=!n?`/icon/${s.TK[u=o,16807*u%2147483647%s.TK.length]}`:(0,r.c)("takos",n);var u;const[h,w]=(0,a.useState)(!1);return(0,i.jsxs)(g,{onClick:t?()=>{w(!h)}:void 0,children:[t&&!h&&(0,i.jsx)(c,{children:"..."}),(0,i.jsx)(p,{alt:`tako-icon-${n}`,src:d}),h&&(0,i.jsx)(l,{onClick:e=>e.stopPropagation(),children:(0,i.jsx)(k,{children:t})})]})}},4305(e,n,t){t.r(n),t.d(n,{default:()=>oe});var a=t(5043),o=t(7950),s=t(1688),r=t(303),i=t.n(r),p=t(2611),g=t(5849),l=t(7362),k=t(984),c=t(403),d=t(5019);const u=c.i7`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-6px); }
`,h=c.i7`
  0%   { transform: perspective(900px) rotateY(0deg);   }
  100% { transform: perspective(900px) rotateY(-90deg); }
`,w=c.i7`
  0%   { transform: perspective(900px) rotateY(-90deg); }
  100% { transform: perspective(900px) rotateY(0deg);   }
`,m=c.i7`
  0%   { transform: perspective(900px) rotateY(90deg); }
  100% { transform: perspective(900px) rotateY(0deg);  }
`,b=c.i7`
  0%   { transform: perspective(900px) rotateY(0deg);  }
  100% { transform: perspective(900px) rotateY(90deg); }
`,x=c.i7`
  0%   { transform: perspective(700px) rotateX(0deg);    }
  100% { transform: perspective(700px) rotateX(-180deg); }
`,f=c.i7`
  0%   { opacity: 1; transform: translate(-50%, -50%) scale(1);    }
  30%  { opacity: 1; transform: translate(-50%, -50%) scale(1.12); }
  65%  { opacity: 0; transform: translate(-50%, -50%) scale(0.6);  }
  100% { opacity: 0; transform: translate(-50%, -50%) scale(0);    }
`,y=c.i7`
  from { opacity: 0; }
  to   { opacity: 1; }
`,v=c.i7`
  from { opacity: 0; transform: translateY(20px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0)    scale(1);    }
`,T=c.Ay.div`
  width: 280px;
  margin-bottom: 8px;
  cursor: pointer;
`,j=c.Ay.div`
  width: 100%;
  position: relative;
  overflow: visible;
`,A=c.Ay.div`
  width: 100%;
  position: relative;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.18));

  ${e=>{let{$state:n,$hover:t}=e;return"idle"!==n||"hovering"===t?c.AH`
        animation: ${h} 0.25s ease-in forwards;
      `:"leaving"===t?c.AH`
        animation: ${w} 0.25s ease-out 0.25s both;
      `:c.AH`
      animation: ${u} 3s ease-in-out infinite;
    `}}

  &:hover {
    filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.28));
  }

  > img:first-child {
    width: 100%;
    display: block;
    border-radius: 6px;
  }
`,S=c.Ay.span`
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
`,C=c.Ay.div`
  position: absolute;
  inset: 0;
  overflow: visible;

  ${e=>{let{$state:n,$hover:t}=e;return"flipping"===n||"hovering"===t?c.AH`
        animation: ${m} 0.25s ease-out 0.25s forwards;
        transform: perspective(900px) rotateY(90deg);
      `:"opening"===n||"open"===n?c.AH`
        transform: perspective(900px) rotateY(0deg);
      `:"leaving"===t?c.AH`
        animation: ${b} 0.25s ease-in forwards;
      `:c.AH`
      transform: perspective(900px) rotateY(90deg);
      pointer-events: none;
    `}}

  img.base {
    width: 100%;
    display: block;
    border-radius: 6px;
  }
`,$=c.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  aspect-ratio: 1799 / 627;
  transform-style: preserve-3d;
  transform-origin: top center;

  ${e=>{let{$state:n}=e;return"opening"===n&&c.AH`
      animation: ${x} 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    `}}

  ${e=>{let{$state:n}=e;return"open"===n&&c.AH`
      transform: perspective(700px) rotateX(-180deg);
    `}}
`,H=c.Ay.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`,R=c.Ay.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateX(180deg);
`,D=c.Ay.img`
  position: absolute;
  width: 22.2%;
  top: 57.2%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;

  ${e=>{let{$opening:n}=e;return n&&c.AH`
      animation: ${f} 0.45s ease forwards;
    `}}
`,M=c.i7`
  0%   { opacity: 0; transform: scale(0.5); }
  60%  { opacity: 1; transform: scale(1.15); }
  100% { opacity: 1; transform: scale(1); }
`,P=c.Ay.img`
  position: absolute;
  width: 22.2%;
  bottom: 6%;
  right: 4%;
  pointer-events: none;
  opacity: ${e=>{let{$visible:n}=e;return n?1:0}};
  transition: opacity 0.2s ease;

  ${e=>{let{$visible:n}=e;return n&&c.AH`
      animation: ${M} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)
        forwards;
    `}}
`,K=c.Ay.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(3px);
  z-index: ${d.fE.backdrop};
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${y} 0.25s ease forwards;
  padding: 24px;
`,L=c.Ay.div`
  border: 3px solid var(--light-background);
  background: var(--background);
  border-radius: 15px;
  padding: 15px;
  font-family: sans-serif;
  font-size: clamp(18px, 1vw + 0.6vh, 26px);
  line-height: 1.35;

  width: 70vw;
  height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  animation: ${v} 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;

  img {
    max-width: 100%;
  }

  scrollbar-width: thin;
  scrollbar-color: #bb6ad4 transparent;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #b66ad4;
    border-radius: 3px;
  }
`,z=c.Ay.button`
  margin-top: auto;
  padding: 16px;
  width: 100%;
  background: none;
  border: none;
  border-top: 1px solid rgba(180, 106, 212, 0.25);
  cursor: pointer;
  font-size: 15px;
  color: #795a9b;
  transition:
    background 0.15s ease,
    color 0.15s ease;
  flex-shrink: 0;

  &:hover {
    background: rgba(180, 106, 212, 0.1);
    color: #c0392b;
  }
`,I=c.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 6px 0;
  flex-shrink: 0;
`,E=c.Ay.button`
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
  transition:
    background 0.2s,
    border-color 0.2s,
    color 0.2s;
  flex-shrink: 0;

  &:hover {
    background: var(--light-highlight);
    color: var(--dark-highlight);
  }

  &:disabled {
    opacity: 0.35;
    cursor: default;
    &:hover {
      background: var(--dark-highlight);
      color: var(--light-highlight);
    }
  }
`,N=c.Ay.span`
  font-size: 13px;
  color: var(--ink-black);
  min-width: 52px;
  text-align: center;
  opacity: 0.7;
  user-select: none;
`;var O=t(579);const Y=e=>`/letterAssets/${e}`,W={settings:{disablePanzoom:!1},buttons:{showAutoplayButton:!1,showCloseButton:!1,showDownloadButton:!1,showFullscreenButton:!1,showNextButton:!1,showPrevButton:!1,showThumbnailsButton:!1},thumbnails:{showThumbnails:!1}},V=e=>`letter_read_${e}`,J=e=>e.replace(/\.[^.]+$/,""),B=()=>((0,a.useEffect)(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),o.createPortal((0,O.jsx)(K,{style:{cursor:"default"},children:(0,O.jsxs)("div",{style:{width:"280px",position:"relative",pointerEvents:"none"},children:[(0,O.jsx)("img",{src:Y("letter-back.png"),style:{width:"100%",display:"block",borderRadius:"6px"},alt:""}),(0,O.jsxs)($,{$state:"opening",children:[(0,O.jsx)(H,{src:Y("letter-back-top-front.png"),alt:""}),(0,O.jsx)(R,{src:Y("letter-back-top-back.png"),alt:""})]}),(0,O.jsx)(D,{src:Y("letter-back-seal.png"),$opening:!0,alt:""})]})}),document.body)),G=e=>{let{submission:n,index:t,total:s,zoom:r,onZoomChange:i,onClose:c,onNavigate:d}=e;const{user:u,icon:h,image:w}=n,m=t>0,b=t<s-1;(0,a.useEffect)(()=>{const e=e=>{"Escape"===e.key&&c(),"ArrowLeft"===e.key&&d(t,-1),"ArrowRight"===e.key&&d(t,1)};return document.addEventListener("keydown",e),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",e),document.body.style.overflow=""}},[c,d,t]);const x=`min(${Math.max(70,r/2+12)}vw, 96vw)`;return o.createPortal((0,O.jsx)(K,{onClick:c,children:(0,O.jsxs)(L,{onClick:e=>e.stopPropagation(),style:{width:x,overflowX:"auto"},children:[(0,O.jsxs)(I,{children:[(0,O.jsx)(E,{onClick:()=>d(t,-1),disabled:!m,title:"Previous letter",children:"\u2190"}),(0,O.jsx)(E,{onClick:()=>i(Math.max(100,r-25)),disabled:r<=100,title:"Zoom out",children:"\u2212"}),(0,O.jsxs)(N,{children:["Zoom ",r,"%"]}),(0,O.jsx)(E,{onClick:()=>i(Math.min(200,r+25)),disabled:r>=200,title:"Zoom in",children:"+"}),(0,O.jsx)(E,{onClick:()=>d(t,1),disabled:!b,title:"Next letter",children:"\u2192"}),w&&(0,O.jsx)(l.A,{slug:J(w),label:"Copy link to this letter"})]}),(0,O.jsx)("hr",{style:{margin:"4px 0 8px"}}),w&&(0,O.jsx)(g.HU,{options:W,children:w.includes("mp4")?(0,O.jsx)("video",{style:{display:"block",width:r/2+"vw",margin:"0 auto"},controls:!0,children:(0,O.jsx)("source",{src:`/letters/${w}`,type:"video/mp4"})}):(0,O.jsx)(k.iM,{src:`/letters/${w}`,style:{width:r/2+"vw",maxWidth:"none"}})}),(0,O.jsx)("hr",{style:{margin:"8px 0 4px"}}),(0,O.jsxs)(k.wI,{children:[(0,O.jsx)(p.v,{id:h,index:t}),(0,O.jsx)(k.HM,{children:u||"Anonymous Tako"})]}),(0,O.jsx)(z,{onClick:c,children:"Close letter"})]})}),document.body)},F=e=>{let{submission:n,index:t,isOpen:o,onOpen:s}=e;const[r,i]=(0,a.useState)("idle"),[p,g]=(0,a.useState)("idle"),[l,k]=(0,a.useState)(()=>"1"===localStorage.getItem(V(t))),c=(0,a.useRef)(null),{user:d}=n;(0,a.useEffect)(()=>{o&&"1"===localStorage.getItem(V(t))&&k(!0)},[o,t]),(0,a.useEffect)(()=>{o||"open"!==r||i("idle")},[o]);const u=(0,a.useCallback)(()=>{"idle"===r&&(c.current&&(clearTimeout(c.current),c.current=null),g("hovering"))},[r]),h=(0,a.useCallback)(()=>{"idle"===r&&(g("leaving"),c.current=window.setTimeout(()=>{g("idle"),c.current=null},500))},[r]),w=(0,a.useCallback)(()=>{localStorage.setItem(V(t),"1"),k(!0)},[t]),m=(0,a.useCallback)(()=>{"idle"===r&&(c.current&&(clearTimeout(c.current),c.current=null),"hovering"===p?(i("opening"),setTimeout(()=>{i("open"),s(t),w()},650)):(i("flipping"),setTimeout(()=>i("opening"),500),setTimeout(()=>{i("open"),s(t),w()},1150)),g("idle"))},[r,p,s,t,w]);return(0,O.jsx)(T,{onClick:m,onMouseEnter:u,onMouseLeave:h,children:(0,O.jsxs)(j,{children:[(0,O.jsxs)(A,{$state:r,$hover:p,children:[(0,O.jsx)("img",{src:Y("letter-front.png"),alt:"envelope front"}),(0,O.jsx)(S,{children:d||"Anonymous Tako"}),(0,O.jsx)(P,{src:Y("letter-back-seal.png"),$visible:l,alt:"read seal"})]}),(0,O.jsxs)(C,{$state:r,$hover:p,children:[(0,O.jsx)("img",{className:"base",src:Y("letter-back.png"),alt:"envelope back"}),(0,O.jsxs)($,{$state:r,children:[(0,O.jsx)(H,{src:Y("letter-back-top-front.png"),alt:""}),(0,O.jsx)(R,{src:Y("letter-back-top-back.png"),alt:""})]}),!l&&(0,O.jsx)(D,{src:Y("letter-back-seal.png"),$opening:"opening"===r,alt:""})]})]})})},_=e=>{let{submissions:n,initialOpenIndex:t}=e;const[o,s]=(0,a.useState)(100),[r,p]=(0,a.useState)(null),[g,l]=(0,a.useState)(null),k=(0,a.useRef)(!1);(0,a.useEffect)(()=>{null!=t&&p(t)},[t]),(0,a.useEffect)(()=>{k.current?null==t&&window.scrollTo(0,0):k.current=!0},[t]);const c=(0,a.useCallback)(e=>{p(e)},[]),d=(0,a.useCallback)(()=>{p(null)},[]),u=(0,a.useCallback)((e,t)=>{const a=e+t;if(a<0||a>=n.length)return;const o="1"===localStorage.getItem(V(a));p(null),o?p(a):(localStorage.setItem(V(a),"1"),l(a),setTimeout(()=>{l(null),p(a)},950))},[n.length]);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)("div",{style:{display:"flex",justifyContent:"center",width:"100%",padding:"0 20px",boxSizing:"border-box"},children:(0,O.jsx)(i(),{options:{gutter:40,columnWidth:1,fitWidth:!0,transitionDuration:0},style:{margin:"0 auto",paddingTop:"80px"},children:n.map((e,n)=>(0,O.jsx)(F,{index:n,submission:e,isOpen:r===n,onOpen:c},n))})}),null!==r&&(0,O.jsx)(G,{submission:n[r],index:r,total:n.length,zoom:o,onZoomChange:s,onClose:d,onNavigate:u},r),null!==g&&(0,O.jsx)(B,{})]})};var Z=t(4997),q=t(2218),U=t(1061),X=t(3536),Q=t(4709),ee=t(6088),ne=t(3402),te=t(2117),ae=t(4499);const oe=()=>{const{data:e,loading:n,error:t}=(0,ee.s)("/data/letterData.json"),[r,i]=(0,a.useState)([]),p=(0,a.useRef)([]),[g,l]=(0,a.useState)([]),[c,d]=(0,a.useState)(!0),u=(0,a.useRef)(0),[h,w]=(0,a.useState)(null),m=(0,a.useRef)(!1),{hash:b}=(0,s.zy)();(0,a.useEffect)(()=>{if(e){const n=[...e].reverse();i(n),p.current=n;const t=n.slice(0,4);v(t).then(()=>{o.unstable_batchedUpdates(()=>{u.current=4,l(t),d(n.length>4)})})}},[e]),(0,a.useEffect)(()=>{if(m.current||!b||0===r.length)return;const e=b.replace("#",""),n=r.findIndex(n=>J(n.image)===e);if(n<0)return;m.current=!0;const t=r.slice(0,n+1);v(t).then(()=>{o.unstable_batchedUpdates(()=>{u.current=n+1,l(t),d(r.length>n+1),w(n)})})},[b,r]);const x=async()=>{if(0===g.length)return;const e=r.slice(u.current,4+u.current);0!==e.length?(await v(e),u.current+=4,l(n=>n.concat(e))):d(!1)};(0,a.useEffect)(()=>{if(c&&g.length>0){document.documentElement.scrollHeight>window.innerHeight||x()}},[g.length,c]);const f=(0,a.useCallback)((0,X.debounce)(async e=>{const n=p.current;if(""!==e){const t=n.filter(n=>{var t;return null===(t=n.user)||void 0===t?void 0:t.toLowerCase().includes(e.toLowerCase())});u.current=0,d(!1),l(t)}else{const e=n.slice(0,4);await v(e),u.current=4,l(e),d(n.length>4)}},500),[]),y=(0,a.useCallback)(e=>{f(e.target.value)},[f]),v=e=>(0,ae.a)(e.filter(e=>e.image&&!e.image.includes("youtube")).map(e=>`/letters/${e.image}`));return(0,O.jsxs)(k.Qs,{children:[(0,O.jsx)(ne.W,{src:"/Vanilla.mp3"}),(0,O.jsxs)(Q.Fp,{children:[(0,O.jsx)(Q.Pn,{}),(0,O.jsx)(k.ue,{children:"Letters for Ina"}),(0,O.jsx)(Q.lU,{label:"Show letters usage hint",children:(0,O.jsx)("p",{children:"Hover an envelope to peek at it, click to open the full letter. Inside, use the \u2039 \u203a buttons or your arrow keys to move between letters, and Esc to close. The zoom controls at the bottom let you read small handwriting up close."})})]}),n?(0,O.jsx)(q.c,{}):t?(0,O.jsx)(te.X,{what:"letters",error:t}):(0,O.jsxs)(k.gQ,{children:[(0,O.jsx)(k.Jj,{children:(0,O.jsx)(k.IW,{onChange:y,placeholder:"Search by name..."})}),(0,O.jsx)(Z.A,{style:{overflow:"hidden"},scrollThreshold:"50px",dataLength:g.length,next:x,hasMore:c,loader:(0,O.jsx)(k.aH,{children:(0,O.jsx)(q.c,{})}),endMessage:(0,O.jsx)("p",{style:{textAlign:"center",color:"var(--ink-black)"},children:"Yay! You have seen it all"}),children:(0,O.jsx)(_,{submissions:g,initialOpenIndex:h})}),(0,O.jsx)(U.A,{})]})]})}},5402(e,n,t){t.d(n,{Ar:()=>a,TK:()=>s,sV:()=>o});const a=["albertoe.png","Baldako.png","CapSora.png","cedric_alpha.png","Chumbeque.png","ConcussioAmi.png","CyberToast.png","Deceptric13.png","Deracts.png","DinoTakos.png","Eyeye.png","FlaminSarge.png","Freir.png","Gaah.png","Gathog.png","HuyK.png","IcedOmachi.png","InaStoleMyHARTH.png","IrisPonn.png","izefjc.png","JustVine.png","Mangu.png","Pely_.png","Pixaurora.png","Plazma00.png","Raven0815.png","rid2079.png","SeeyahLater.png","Senki.png","Squash.png","subis.png","third12.png","Uni8.png","Vaan.png","Wahmaa.png","wydken.png","Yue.png","\u590f\u96ea.png","11.png","14.png","15.png","16.png","17.png","35.png","44.png","71.png","A random casual.png","Arthain.png","Astraea.png","BreadART.png","Chibi RoggianX.png","chuunilord.png","Corp.Shephard.png","Creau.png","Cyber Toast.png","CYtako.png","DarkNess2101.png","Deer Oh Dear.png","DHugo.png","Drebyal Draws.png","eLun.png","Endactam.png","enicholas.png","Epi.png","fluffycatfish.png","Fluid.png","Frediloc8.png","GreenFox.png","Haru.png","Hermit Purple.png","HiloNero.png","Huros.png","Ironsigh.png","Ithi.png","Jaboll252.png","Jamu(ta)ko.png","Jamuko.png","Jems.png","Jhon. Palmer.png","Joakim MF.png","junblebee.png","Kaede, Acolyte of Wahtcher.png","keoqzzi\ud83c\udf5c.png","Kinoko.png","KiwiNeko.png","kshut (@shutowl).png","Kurasu Kanon.png","Kurosagi.png","LasagnaLaffeydiction.png","Lethargic.png","Lienou.png","LynsDoodles.png","Lyudmilia.png","Machi says WAH.png","Mango Konata.png","Mara.png","McArkus.png","Meap.png","Melmarkt.png","MiJi.png","Milk.png","Minja.png","Neminem.png","NKS5.png","notaBob.png","NowaruArt.png","NxKarim.png","Nyuusai.png","OK Kei.png","OutOfRice.png","Overseer Olive.png","popop.png","ProxyZeus.png","PureTako.png","RCSI.png","Ren.png","Reyk.png","Reykhebaxh.png","RiDeth.png","Rie Cotton Cat.png","Rinh.png","Scalim.png","SeaRain.png","SharkyDoko.png","Shokuro.png","SleepDeprivedFae.png","SleepzyTofu.png","Sock.png","Spud Tako.png","Squirl.png","sunnyfaller.png","Tahi.png","Taiki Kiki.png","Takedo.png","Takollite.png","Takomonty.png","Takoster.png","Teddy B\u0295\xb4\u2022\u1d25\u2022`\u0294.png","Teo.png","The Shiv Spoon.png","Thocclord.png","Tornhalo.png","Tung.png","Valawari.png","Valtaur_tw.png","Vanilla Thunder.png","Vantablack.png","vignedev.png","WindStreak.png","Wydken.png","Yato Tako.png","Zel Maelstrom.png","zeroyaka.png","\u304a\u5144\u304e\u308a.png","\u30a4\u30ab^10.png"],o=a.length,s=["8-bit Tako.png","Hollow Tako.png","Ikadachi.png","Mori Tako.png","Robodachi.png","Tako Amelia (Takoson).png","Tako Gura (Chum Tako).png","Tako Ina.png","Tako Kiara (Tako Bell).png","Tako Ross.png","Takodachi.png","Takomfy.png","Tophat Tako.png","Violet Tako.png","Wonder Tako.png","Yuul B. Tako.png"]},9773(e,n,t){t.d(n,{G:()=>o});var a=t(5043);const o=e=>{let{muted:n,volume:t=.1,autoPlay:o=!1,videoPaused:s=!1}=e;const r=(0,a.useRef)(null);return(0,a.useEffect)(()=>{r.current&&(r.current.volume=t)},[t]),(0,a.useEffect)(()=>{const e=r.current;e&&(s||n?e.pause():e.paused&&e.play().catch(()=>{}))},[n,s]),(0,a.useEffect)(()=>{if(!o)return;let e=null,t=!1;return r.current&&!n&&r.current.play().catch(()=>{t||(e=()=>{r.current&&!n&&r.current.play().catch(()=>{}),e&&window.removeEventListener("click",e)},window.addEventListener("click",e))}),()=>{t=!0,e&&window.removeEventListener("click",e)}},[o,n]),r}},4499(e,n,t){t.d(n,{a:()=>a});const a=async e=>{await Promise.all(e.map(e=>new Promise(n=>{const t=new Image;t.onload=()=>n(),t.onerror=()=>n(),t.src=e})))}},993(e,n,t){t.d(n,{V:()=>r,c:()=>s});var a=t(5402);const o={"takos/16.png":"takos/16.PNG","takos/17.png":"takos/17.PNG","takos/35.png":"takos/Vantablack.png","takos/44.png":"takos/Wydken.png","takos/CottonCat.png":"takoswentries/CottonCat.png","takos/Creau.png":"takos/IrisPonn.png","takos/Darkodachi.png":"takoswentries/Darkodachi.png","takos/DeerOhDear.png":"takoswentries/DeerOhDear.png","takos/DumplingTakodachi.png":"takoswentries/DumplingTakodachi.png","takos/Eve.png":"takoswentries/Eve.png","takos/Gathog.png":"takoswentries/Gathog.png","takos/GrayTako.png":"takoswentries/GrayTako.png","takos/GreenFox.png":"takoswentries/GreenFox.png","takos/Ithi.png":"takoswentries/ithius.png","takos/Jamu(ta)ko.png":"takos/Jamuko.png","takos/Kais3r.png":"takoswentries/Kais3r.png","takos/KnightedTako.png":"takoswentries/KnightedTako.png","takos/LotusPondTako.png":"takoswentries/LotusPondTako.png","takos/Machi says WAH.png":"takos/Takomachi.png","takos/MrKamedachi.png":"takoswentries/MrKamedachi.png","takos/Rina.png":"takoswentries/Rina.png","takos/RogueTakolyte.png":"takoswentries/RogueTakolyte.png","takos/SleepzyTofu.png":"takoswentries/SleepzyTofu.png","takos/TakoGoomy.png":"takoswentries/TakoGoomy.png","takos/TakoLamp.png":"takoswentries/TakoLamp.png","takos/Takobocchi.png":"takoswentries/Takobocchi.png","takos/Takozashi.png":"takoswentries/Takozashi.png","takos/Tasaowl.png":"takos/Takoster.png","takos/Vaan.png":"takoswentries/Baldako.png","takos/VaanTheBrainlessOne.png":"takoswentries/VaanTheBrainlessOne.png","takos/drizzle.png":"takoswentries/drizzle.png","takos/eLun.png":"takos/eLudachi.png","takos/ithius.png":"takoswentries/ithius.png","takos/m-pien.png":"takoswentries/m-pien.png","takos/popop.png":"takoswentries/popop.png","takos/wydken.png":"takos/Wydken.png","takos/\u72ac\u4e09.png":"takoswentries/\u72ac\u4e09.png","takoswentries/Arandomcasual.png":"takos/A random casual.png","takoswentries/Arthain.png":"takos/Arthain.png","takoswentries/Astraea.png":"takos/Astraea.png","takoswentries/BreadART.png":"takos/BreadART.png","takoswentries/CapSora.png":"takos/CapSora.png","takoswentries/Chuunilord.png":"takoswentries/chuunilord.png","takoswentries/Chumbeque.png":"takos/Chumbeque.png","takoswentries/ConcussioAmi.png":"takos/ConcussioAmi.png","takoswentries/Corp.Shephard.png":"takos/Corp.Shephard.png","takoswentries/Creau.png":"takos/IrisPonn.png","takoswentries/CyberToast.png":"takos/CyberToast.png","takoswentries/DHugo.png":"takos/DHugo.png","takoswentries/DarkNess2101.png":"takos/DarkNess2101.png","takoswentries/Deceptric13.png":"takos/Deceptric13.png","takoswentries/Deracts.png":"takos/Deracts.png","takoswentries/DinoTakos.png":"takos/DinoTakos.png","takoswentries/Endactam.png":"takos/Endactam.png","takoswentries/Exvnir.png":"takos/Exvnir.png","takoswentries/Eyeye.png":"takos/Eyeye.png","takoswentries/FlaminSarge.png":"takos/FlaminSarge.png","takoswentries/Freir.png":"takos/Freir.png","takoswentries/Gaah.png":"takos/Gaah.png","takoswentries/Haru.png":"takos/Haru.png","takoswentries/HiloNero.png":"takos/HiloNero.png","takoswentries/Huros.png":"takos/Huros.png","takoswentries/HuyK.png":"takos/HuyK.png","takoswentries/IcedOmachi.png":"takos/IcedOmachi.png","takoswentries/InaStoleMyHARTH.png":"takos/InaStoleMyHARTH.png","takoswentries/IrisPonn.png":"takos/IrisPonn.png","takoswentries/Ironsigh.png":"takos/Ironsigh.png","takoswentries/Ithi.png":"takoswentries/ithius.png","takoswentries/Ithius.png":"takoswentries/ithius.png","takoswentries/Jaboll252.png":"takos/Jaboll252.png","takoswentries/Jamuko.png":"takos/Jamuko.png","takoswentries/Jems.png":"takos/Jems.png","takoswentries/JustVine.png":"takos/JustVine.png","takoswentries/Kaede,AcolyteofWahtcher.png":"takos/Kaede, Acolyte of Wahtcher.png","takoswentries/KiwiNeko.png":"takos/KiwiNeko.png","takoswentries/KurasuKanon.png":"takos/Kurasu Kanon.png","takoswentries/LasagnaLaffeydiction.png":"takos/LasagnaLaffeydiction.png","takoswentries/Lethargic.png":"takos/Lethargic.png","takoswentries/LynsDoodles.png":"takos/LynsDoodles.png","takoswentries/Lyudmilia.png":"takos/Lyudmilia.png","takoswentries/MachisaysWAH.png":"takos/Takomachi.png","takoswentries/Mangu.png":"takos/Mangu.png","takoswentries/McArkus.png":"takos/McArkus.png","takoswentries/Melmarkt.png":"takos/Melmarkt.png","takoswentries/MiJi.png":"takos/MiJi.png","takoswentries/Minja.png":"takos/Minja.png","takoswentries/Neminem.png":"takos/Neminem.png","takoswentries/Nowaru.png":"takos/NowaruArt.png","takoswentries/NowaruArt.png":"takos/NowaruArt.png","takoswentries/NxKarim.png":"takos/NxKarim.png","takoswentries/OutOfRice.png":"takos/OutOfRice.png","takoswentries/OverseerOlive.png":"takos/Overseer Olive.png","takoswentries/Pely_.png":"takos/Pely_.png","takoswentries/Pixaurora.png":"takos/Pixaurora.png","takoswentries/Plazma00.png":"takos/Plazma00.png","takoswentries/Popop.png":"takoswentries/popop.png","takoswentries/ProxyZeus.png":"takos/ProxyZeus.png","takoswentries/RCSI.png":"takos/RCSI.png","takoswentries/Raven0815.png":"takos/Raven0815.png","takoswentries/Ren.png":"takos/Ren.png","takoswentries/Reyk.png":"takos/Reyk.png","takoswentries/Scalim.png":"takos/Scalim.png","takoswentries/SeeyahLater.png":"takos/SeeyahLater.png","takoswentries/Senki.png":"takos/Senki.png","takoswentries/SharkyDoko.png":"takos/SharkyDoko.png","takoswentries/SleepDeprivedFae.png":"takos/SleepDeprivedFae.png","takoswentries/Sock.png":"takos/Sock.png","takoswentries/Squash.png":"takos/Squash.png","takoswentries/TaikiKiki.png":"takos/Taiki Kiki.png","takoswentries/Takoster.png":"takos/Takoster.png","takoswentries/Tasaowl.png":"takos/Takoster.png","takoswentries/Teo.png":"takos/Teo.png","takoswentries/TheShivSpoon.png":"takos/The Shiv Spoon.png","takoswentries/Tornhalo.png":"takos/Tornhalo.png","takoswentries/Uni8.png":"takos/Uni8.png","takoswentries/Vaan.png":"takoswentries/Baldako.png","takoswentries/Valawari.png":"takos/Valawari.png","takoswentries/VanillaThunder.png":"takos/Vanilla Thunder.png","takoswentries/Vantablack.png":"takos/Vantablack.png","takoswentries/WAHmaa.png":"takos/Wahmaa.png","takoswentries/Wahmaa.png":"takos/Wahmaa.png","takoswentries/Wydken.png":"takos/Wydken.png","takoswentries/YatoTako.png":"takos/Yato Tako.png","takoswentries/Yatotako.png":"takos/Yato Tako.png","takoswentries/Yue.png":"takos/Yue.png","takoswentries/albertoe.png":"takos/albertoe.png","takoswentries/cedric_alpha.png":"takos/cedric_alpha.png","takoswentries/eLun.png":"takos/eLudachi.png","takoswentries/izefjc.png":"takos/izefjc.png","takoswentries/junblebee.png":"takos/junblebee.png","takoswentries/kshut(@shutowl).png":"takos/kshut (@shutowl).png","takoswentries/rid2079.png":"takos/rid2079.png","takoswentries/subis.png":"takos/subis.png","takoswentries/third12.png":"takos/third12.png","takoswentries/vignedev.png":"takos/vignedev.png","takoswentries/wydken.png":"takos/Wydken.png","takoswentries/zeroyaka.png":"takos/zeroyaka.png","takoswentries/\u30a4\u30ab^10.png":"takos/\u30a4\u30ab^10.png","takoswentries/\u590f\u96ea.png":"takos/\u590f\u96ea.png"};function s(e,n){var t;const[a,...s]=(null!==(t=o[`${e}/${n}`])&&void 0!==t?t:`${e}/${n}`).split("/");return`/${a}/${encodeURIComponent(s.join("/"))}`}function r(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(e&&""!==e.trim())return s("takoswentries",`${e.replace(/ /g,"")}.png`);return`/icon/${a.TK[n%a.TK.length]}`}}}]);
//# sourceMappingURL=305.6c8f340f.chunk.js.map
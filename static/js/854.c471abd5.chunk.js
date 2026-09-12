"use strict";(globalThis.webpackChunkina=globalThis.webpackChunkina||[]).push([[854],{5854(e,t,o){o.r(t),o.d(t,{default:()=>se});var r=o(5043),n=o(7950),i=o(1688),a=o(303),s=o.n(a),l=o(403),c=o(579);const d=l.Ay.img`
  width: 75px;
  margin-right: 10px;
  filter: drop-shadow(2px 2px 1px darkgray);
  opacity: 1;
`,p=l.Ay.div`
  display: flex;
`,u=l.Ay.div`
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
`,h=l.Ay.span`
  color: var(--dark-highlight);
`,g=l.Ay.div`
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
`,x=e=>{let{id:t,pun:o,index:n}=e;const i=["8-bit Tako.png","Hollow Tako.png","Ikadachi.png","Mori Tako.png","Robodachi.png","Tako Amelia (Takoson).png","Tako Gura (Chum Tako).png","Tako Ina.png","Tako Kiara (Tako Bell).png","Tako Ross.png","Takodachi.png","Takomfy.png","Tophat Tako.png","Violet Tako.png","Wonder Tako.png","Yuul B. Tako.png"],a=!t?`/icon/${i[s=n,16807*s%2147483647%i.length]}`:`/takos/${t}`;var s;const[l,x]=(0,r.useState)(!1);return(0,c.jsxs)(p,{onClick:o?()=>{x(!l)}:void 0,children:[o&&!l&&(0,c.jsx)(g,{children:"..."}),(0,c.jsx)(d,{alt:`tako-icon-${t}`,src:a}),l&&(0,c.jsx)(u,{onClick:e=>e.stopPropagation(),children:(0,c.jsx)(h,{children:o})})]})};var m=o(5849),b=o(7362),f=o(984);const v=l.i7`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-6px); }
`,k=l.i7`
  0%   { transform: perspective(900px) rotateY(0deg);   }
  100% { transform: perspective(900px) rotateY(-90deg); }
`,y=l.i7`
  0%   { transform: perspective(900px) rotateY(-90deg); }
  100% { transform: perspective(900px) rotateY(0deg);   }
`,w=l.i7`
  0%   { transform: perspective(900px) rotateY(90deg); }
  100% { transform: perspective(900px) rotateY(0deg);  }
`,j=l.i7`
  0%   { transform: perspective(900px) rotateY(0deg);  }
  100% { transform: perspective(900px) rotateY(90deg); }
`,A=l.i7`
  0%   { transform: perspective(700px) rotateX(0deg);    }
  100% { transform: perspective(700px) rotateX(-180deg); }
`,$=l.i7`
  0%   { opacity: 1; transform: translate(-50%, -50%) scale(1);    }
  30%  { opacity: 1; transform: translate(-50%, -50%) scale(1.12); }
  65%  { opacity: 0; transform: translate(-50%, -50%) scale(0.6);  }
  100% { opacity: 0; transform: translate(-50%, -50%) scale(0);    }
`,C=l.i7`
  from { opacity: 0; }
  to   { opacity: 1; }
`,T=l.i7`
  from { opacity: 0; transform: translateY(20px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0)    scale(1);    }
`,E=l.Ay.div`
  width: 280px;
  margin-bottom: 8px;
  cursor: pointer;
`,S=l.Ay.div`
  width: 100%;
  position: relative;
  overflow: visible;
`,H=l.Ay.div`
  width: 100%;
  position: relative;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.18));

  ${e=>{let{$state:t,$hover:o}=e;return"idle"!==t||"hovering"===o?l.AH`
        animation: ${k} 0.25s ease-in forwards;
      `:"leaving"===o?l.AH`
        animation: ${y} 0.25s ease-out 0.25s both;
      `:l.AH`
      animation: ${v} 3s ease-in-out infinite;
    `}}

  &:hover {
    filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.28));
  }

  > img:first-child {
    width: 100%;
    display: block;
    border-radius: 6px;
  }
`,Y=l.Ay.span`
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
`,z=l.Ay.div`
  position: absolute;
  inset: 0;
  overflow: visible;

  ${e=>{let{$state:t,$hover:o}=e;return"flipping"===t||"hovering"===o?l.AH`
        animation: ${w} 0.25s ease-out 0.25s forwards;
        transform: perspective(900px) rotateY(90deg);
      `:"opening"===t||"open"===t?l.AH`
        transform: perspective(900px) rotateY(0deg);
      `:"leaving"===o?l.AH`
        animation: ${j} 0.25s ease-in forwards;
      `:l.AH`
      transform: perspective(900px) rotateY(90deg);
      pointer-events: none;
    `}}

  img.base {
    width: 100%;
    display: block;
    border-radius: 6px;
  }
`,I=l.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  aspect-ratio: 1799 / 627;
  transform-style: preserve-3d;
  transform-origin: top center;

  ${e=>{let{$state:t}=e;return"opening"===t&&l.AH`
      animation: ${A} 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    `}}

  ${e=>{let{$state:t}=e;return"open"===t&&l.AH`
      transform: perspective(700px) rotateX(-180deg);
    `}}
`,P=l.Ay.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`,L=l.Ay.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateX(180deg);
`,M=l.Ay.img`
  position: absolute;
  width: 22.2%;
  top: 57.2%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;

  ${e=>{let{$opening:t}=e;return t&&l.AH`
      animation: ${$} 0.45s ease forwards;
    `}}
`,R=l.i7`
  0%   { opacity: 0; transform: scale(0.5); }
  60%  { opacity: 1; transform: scale(1.15); }
  100% { opacity: 1; transform: scale(1); }
`,B=l.Ay.img`
  position: absolute;
  width: 22.2%;
  bottom: 6%;
  right: 4%;
  pointer-events: none;
  opacity: ${e=>{let{$visible:t}=e;return t?1:0}};
  transition: opacity 0.2s ease;

  ${e=>{let{$visible:t}=e;return t&&l.AH`
      animation: ${R} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)
        forwards;
    `}}
`,N=l.Ay.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(3px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${C} 0.25s ease forwards;
  padding: 24px;
`,O=l.Ay.div`
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
  animation: ${T} 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;

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
`,W=(l.Ay.p`
  font-size: 12px;
  color: var(--ink-black);
  text-align: center;
  margin-top: 8px;
  font-style: italic;
  opacity: 0.6;
`,l.Ay.button`
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
`),X=l.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 6px 0;
  flex-shrink: 0;
`,Z=l.Ay.button`
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
`,G=l.Ay.span`
  font-size: 13px;
  color: var(--ink-black);
  min-width: 52px;
  text-align: center;
  opacity: 0.7;
  user-select: none;
`,_=e=>`/letterAssets/${e}`,D={settings:{disablePanzoom:!1},buttons:{showAutoplayButton:!1,showCloseButton:!1,showDownloadButton:!1,showFullscreenButton:!1,showNextButton:!1,showPrevButton:!1,showThumbnailsButton:!1},thumbnails:{showThumbnails:!1}},F=e=>`letter_read_${e}`,U=e=>e.replace(/\.[^.]+$/,""),J=()=>((0,r.useEffect)(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),n.createPortal((0,c.jsx)(N,{style:{cursor:"default"},children:(0,c.jsxs)("div",{style:{width:"280px",position:"relative",pointerEvents:"none"},children:[(0,c.jsx)("img",{src:_("letter-back.png"),style:{width:"100%",display:"block",borderRadius:"6px"},alt:""}),(0,c.jsxs)(I,{$state:"opening",children:[(0,c.jsx)(P,{src:_("letter-back-top-front.png"),alt:""}),(0,c.jsx)(L,{src:_("letter-back-top-back.png"),alt:""})]}),(0,c.jsx)(M,{src:_("letter-back-seal.png"),$opening:!0,alt:""})]})}),document.body)),V=e=>{let{submission:t,index:o,total:i,zoom:a,onZoomChange:s,onClose:l,onNavigate:d}=e;const{user:p,icon:u,image:h}=t,g=o>0,v=o<i-1;(0,r.useEffect)(()=>{const e=e=>{"Escape"===e.key&&l(),"ArrowLeft"===e.key&&d(o,-1),"ArrowRight"===e.key&&d(o,1)};return document.addEventListener("keydown",e),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",e),document.body.style.overflow=""}},[l,d,o]);const k=`min(${Math.max(70,a/2+12)}vw, 96vw)`;return n.createPortal((0,c.jsx)(N,{onClick:l,children:(0,c.jsxs)(O,{onClick:e=>e.stopPropagation(),style:{width:k,overflowX:"auto"},children:[(0,c.jsxs)(X,{children:[(0,c.jsx)(Z,{onClick:()=>d(o,-1),disabled:!g,title:"Previous letter",children:"\u2190"}),(0,c.jsx)(Z,{onClick:()=>s(Math.max(100,a-25)),disabled:a<=100,title:"Zoom out",children:"\u2212"}),(0,c.jsxs)(G,{children:["Zoom ",a,"%"]}),(0,c.jsx)(Z,{onClick:()=>s(Math.min(200,a+25)),disabled:a>=200,title:"Zoom in",children:"+"}),(0,c.jsx)(Z,{onClick:()=>d(o,1),disabled:!v,title:"Next letter",children:"\u2192"}),h&&(0,c.jsx)(b.A,{slug:U(h),label:"Copy link to this letter"})]}),(0,c.jsx)("hr",{style:{margin:"4px 0 8px"}}),h&&(0,c.jsx)(m.HU,{options:D,children:h.includes("mp4")?(0,c.jsx)("video",{style:{display:"block",width:a/2+"vw",margin:"0 auto"},controls:!0,children:(0,c.jsx)("source",{src:`/letters/${h}`,type:"video/mp4"})}):(0,c.jsx)(f.iM,{src:`/letters/${h}`,style:{width:a/2+"vw",maxWidth:"none"}})}),(0,c.jsx)("hr",{style:{margin:"8px 0 4px"}}),(0,c.jsxs)(f.wI,{children:[(0,c.jsx)(x,{id:u,index:o}),(0,c.jsx)(f.HM,{children:p||"Anonymous Tako"})]}),(0,c.jsx)(W,{onClick:l,children:"Close letter"})]})}),document.body)},q=e=>{let{submission:t,index:o,isOpen:n,onOpen:i}=e;const[a,s]=(0,r.useState)("idle"),[l,d]=(0,r.useState)("idle"),[p,u]=(0,r.useState)(()=>"1"===localStorage.getItem(F(o))),h=(0,r.useRef)(null),{user:g}=t;(0,r.useEffect)(()=>{n&&"1"===localStorage.getItem(F(o))&&u(!0)},[n,o]),(0,r.useEffect)(()=>{n||"open"!==a||s("idle")},[n]);const x=(0,r.useCallback)(()=>{"idle"===a&&(h.current&&(clearTimeout(h.current),h.current=null),d("hovering"))},[a]),m=(0,r.useCallback)(()=>{"idle"===a&&(d("leaving"),h.current=window.setTimeout(()=>{d("idle"),h.current=null},500))},[a]),b=(0,r.useCallback)(()=>{localStorage.setItem(F(o),"1"),u(!0)},[o]),f=(0,r.useCallback)(()=>{"idle"===a&&(h.current&&(clearTimeout(h.current),h.current=null),"hovering"===l?(s("opening"),setTimeout(()=>{s("open"),i(o),b()},650)):(s("flipping"),setTimeout(()=>s("opening"),500),setTimeout(()=>{s("open"),i(o),b()},1150)),d("idle"))},[a,l,i,o,b]);return(0,c.jsx)(E,{onClick:f,onMouseEnter:x,onMouseLeave:m,children:(0,c.jsxs)(S,{children:[(0,c.jsxs)(H,{$state:a,$hover:l,children:[(0,c.jsx)("img",{src:_("letter-front.png"),alt:"envelope front"}),(0,c.jsx)(Y,{children:g||"Anonymous Tako"}),(0,c.jsx)(B,{src:_("letter-back-seal.png"),$visible:p,alt:"read seal"})]}),(0,c.jsxs)(z,{$state:a,$hover:l,children:[(0,c.jsx)("img",{className:"base",src:_("letter-back.png"),alt:"envelope back"}),(0,c.jsxs)(I,{$state:a,children:[(0,c.jsx)(P,{src:_("letter-back-top-front.png"),alt:""}),(0,c.jsx)(L,{src:_("letter-back-top-back.png"),alt:""})]}),!p&&(0,c.jsx)(M,{src:_("letter-back-seal.png"),$opening:"opening"===a,alt:""})]})]})})},K=e=>{let{submissions:t,initialOpenIndex:o}=e;const[n,i]=(0,r.useState)(100),[a,l]=(0,r.useState)(null),[d,p]=(0,r.useState)(null),u=(0,r.useRef)(!1);(0,r.useEffect)(()=>{null!=o&&l(o)},[o]),(0,r.useEffect)(()=>{u.current?null==o&&window.scrollTo(0,0):u.current=!0},[o]);const h=(0,r.useCallback)(e=>{l(e)},[]),g=(0,r.useCallback)(()=>{l(null)},[]),x=(0,r.useCallback)((e,o)=>{const r=e+o;if(r<0||r>=t.length)return;const n="1"===localStorage.getItem(F(r));l(null),n?l(r):(localStorage.setItem(F(r),"1"),p(r),setTimeout(()=>{p(null),l(r)},950))},[t.length]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{style:{display:"flex",justifyContent:"center",width:"100%",padding:"0 20px",boxSizing:"border-box"},children:(0,c.jsx)(s(),{options:{gutter:40,columnWidth:1,fitWidth:!0,transitionDuration:0},style:{margin:"0 auto",paddingTop:"80px"},children:t.map((e,t)=>(0,c.jsx)(q,{index:t,submission:e,isOpen:a===t,onOpen:h},t))})}),null!==a&&(0,c.jsx)(V,{submission:t[a],index:a,total:t.length,zoom:n,onZoomChange:i,onClose:g,onNavigate:x},a),null!==d&&(0,c.jsx)(J,{})]})};var Q=o(4997),ee=o(2218),te=o(9372),oe=o(3536),re=o(4709),ne=o(1472),ie=o(2154),ae=o(6088);const se=()=>{const{muted:e}=(0,ne.d2)(),t=(0,ie.G)({muted:e,autoPlay:!0}),{data:o,loading:a,error:s}=(0,ae.s)("/data/letterData.json"),[l,d]=(0,r.useState)([]),p=(0,r.useRef)([]),[u,h]=(0,r.useState)([]),[g,x]=(0,r.useState)(!0),m=(0,r.useRef)(0),[b,v]=(0,r.useState)(!1),[k,y]=(0,r.useState)(null),w=(0,r.useRef)(!1),{hash:j}=(0,i.zy)();(0,r.useEffect)(()=>{if(o){const e=[...o].reverse();d(e),p.current=e;const t=e.slice(0,4);T(t).then(()=>{n.unstable_batchedUpdates(()=>{m.current=4,h(t),x(e.length>4)})})}},[o]),(0,r.useEffect)(()=>{if(w.current||!j||0===l.length)return;const e=j.replace("#",""),t=l.findIndex(t=>U(t.image)===e);if(t<0)return;w.current=!0;const o=l.slice(0,t+1);T(o).then(()=>{n.unstable_batchedUpdates(()=>{m.current=t+1,h(o),x(l.length>t+1),y(t)})})},[j,l]);const A=async()=>{if(0===u.length)return;const e=l.slice(m.current,4+m.current);0!==e.length?(await T(e),m.current+=4,h(t=>t.concat(e))):x(!1)};(0,r.useEffect)(()=>{if(g&&u.length>0){document.documentElement.scrollHeight>window.innerHeight||A()}},[u.length,g]);const $=(0,r.useCallback)((0,oe.debounce)(async e=>{const t=p.current;if(""!==e){const o=t.filter(t=>{var o;return null===(o=t.user)||void 0===o?void 0:o.toLowerCase().includes(e.toLowerCase())});m.current=0,x(!1),h(o)}else{const e=t.slice(0,4);await T(e),m.current=4,h(e),x(t.length>4)}},500),[]),C=(0,r.useCallback)(e=>{$(e.target.value)},[$]),T=async e=>{const t=[];e.forEach(e=>{e.image&&!e.image.includes("youtube")&&t.push(new Promise(t=>{const o=new Image;o.src="/letters/"+e.image,o.onerror=t,o.onload=t}))}),await Promise.allSettled(t)};return(0,c.jsxs)("div",{style:{minHeight:"100vh",background:"var(--background)"},children:[(0,c.jsx)("audio",{ref:t,src:"/Vanilla.mp3",loop:!0,preload:"auto",style:{display:"none"}}),(0,c.jsxs)(re.Fp,{children:[(0,c.jsx)(re.Pn,{}),(0,c.jsx)(f.ue,{children:"Letters for Ina"}),(0,c.jsxs)("div",{style:{flex:"0 0 auto",position:"relative"},children:[(0,c.jsxs)(re.uW,{"aria-label":"Show letters usage hint",onClick:()=>v(e=>!e),title:"Show letters usage hint",children:[(0,c.jsx)("i",{className:"fa fa-question-circle","aria-hidden":"true"}),(0,c.jsx)("span",{className:"btn-text",children:"Help"})]}),b&&(0,c.jsx)(re.JY,{onClick:()=>v(!1),children:(0,c.jsx)("p",{children:"Hover an envelope to peek at it, click to open the full letter. Inside, use the \u2039 \u203a buttons or your arrow keys to move between letters, and Esc to close. The zoom controls at the bottom let you read small handwriting up close."})})]})]}),a?(0,c.jsx)(ee.c,{}):s?(0,c.jsxs)("div",{children:["Error loading Letters: ",s.message]}):(0,c.jsxs)(f.gQ,{children:[(0,c.jsx)(f.Jj,{children:(0,c.jsx)(f.IW,{onChange:C,placeholder:"Search by name..."})}),(0,c.jsx)(Q.A,{style:{overflow:"hidden"},scrollThreshold:"50px",dataLength:u.length,next:A,hasMore:g,loader:(0,c.jsx)(f.aH,{children:(0,c.jsx)(ee.c,{})}),endMessage:(0,c.jsx)("p",{style:{textAlign:"center",color:"var(--ink-black)"},children:"Yay! You have seen it all"}),children:(0,c.jsx)(K,{submissions:u,initialOpenIndex:k})}),(0,c.jsx)(te.A,{})]})]})}},2154(e,t,o){o.d(t,{G:()=>n});var r=o(5043);const n=e=>{let{muted:t,volume:o=.1,autoPlay:n=!1,videoPaused:i=!1}=e;const a=(0,r.useRef)(null);return(0,r.useEffect)(()=>{a.current&&(a.current.volume=o)},[o]),(0,r.useEffect)(()=>{const e=a.current;e&&(i?e.pause():(t||e.paused)&&(t?e.pause():e.play().catch(()=>{})))},[t,i]),(0,r.useEffect)(()=>{if(!n)return;let e=null,o=!1;return a.current&&!t&&a.current.play().catch(()=>{o||(e=()=>{a.current&&!t&&a.current.play().catch(()=>{}),e&&window.removeEventListener("click",e)},window.addEventListener("click",e))}),()=>{o=!0,e&&window.removeEventListener("click",e)}},[n,t]),a}}}]);
//# sourceMappingURL=854.c471abd5.chunk.js.map
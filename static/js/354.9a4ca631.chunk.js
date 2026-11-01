"use strict";(globalThis.webpackChunkina=globalThis.webpackChunkina||[]).push([[354],{4709(e,t,r){r.d(t,{Fp:()=>s,Pn:()=>p,lU:()=>h,uW:()=>d});var n=r(403),a=r(2582),i=r(5043),o=r(5019),l=r(579);const s=n.Ay.nav`
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
  z-index: ${o.fE.nav};
  flex: 0 1;
  padding: 0.25rem 1rem;
  text-align: left;
  font: normal normal normal 30px/34px Montserrat;
  letter-spacing: 0;
  justify-content: space-between;
  align-items: center;
  &.mobile {
    font: normal normal normal 20px/25px Montserrat;
  }

  @media only screen and (max-width: ${o.fi.mobile}px) {
    font: normal normal normal 22px/26px Montserrat;
  }
`,c=(0,n.Ay)(a.k2)`
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
`,d=n.Ay.button`
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
  @media only screen and (max-width: ${o.fi.mobile}px) {
    padding: 8px 10px;
    gap: 0;
    .btn-text {
      display: none;
    }
  }
  &:hover {
    opacity: 0.8;
  }
`,u=n.Ay.div`
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
  z-index: ${o.fE.nav};
  min-width: 260px;
  max-width: min(90vw, 460px);
  max-height: 80vh;
  overflow-y: auto;
`,p=()=>(0,l.jsx)(c,{exact:!0,to:"/",children:(0,l.jsx)("i",{className:"fa fa-home"})}),h=e=>{let{label:t,children:r}=e;const[n,a]=(0,i.useState)(!1);return(0,l.jsxs)("div",{style:{flex:"0 0 auto",position:"relative"},children:[(0,l.jsxs)(d,{"aria-label":t,title:t,onClick:()=>a(e=>!e),children:[(0,l.jsx)("i",{className:"fa fa-question-circle","aria-hidden":"true"}),(0,l.jsx)("span",{className:"btn-text",children:"Help"})]}),n&&(0,l.jsx)(u,{onClick:()=>a(!1),children:r})]})}},7362(e,t,r){r.d(t,{A:()=>d});var n=r(5043),a=r(403),i=r(9944),o=r(579);const l=a.Ay.button`
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
`,s=a.Ay.div`
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
`,c=a.Ay.span`
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
`,d=e=>{let{slug:t,label:r,className:a}=e;const[d,u]=(0,n.useState)(!1);return(0,o.jsxs)(s,{className:a,children:[(0,o.jsx)(l,{type:"button",onClick:async()=>{await(0,i.c)(t)&&(u(!0),setTimeout(()=>u(!1),1600))},title:r,"aria-label":r,children:(0,o.jsx)("i",{className:"fa fa-share","aria-hidden":"true"})}),d&&(0,o.jsx)(c,{children:"Link copied!"})]})}},9354(e,t,r){r.r(t),r.d(t,{default:()=>xr});var n=r(5043),a=r(1688),i=r(6088),o=r(4709),l=r(3403),s=r(8789),c=r(1527),d=r(2218),u=r(7362);const p=()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register("/takonomicon-sw.js").catch(()=>{})};var h=r(2958);const x="data-blank-page",f=(e,t,r)=>{const n=t-1,a=Math.max(0,Math.min(e,n));return r&&0!==a&&a!==n?a-(a-1)%2:a},g="takonomicon-sfx-muted",m=512,v=(e,t,r)=>{let n=0;const a=Math.min(e.length,t+r);for(let i=t;i<a;i++){const t=Math.abs(e[i]);t>n&&(n=t)}return n},b=e=>{const t=e.getChannelData(0),r=v(t,0,t.length);if(0===r)return{start:0,duration:e.duration};const n=.08*r;let a=0;for(;a<t.length&&v(t,a,m)<n;)a+=m;let i=Math.max(0,t.length-m);for(;i>a&&v(t,i,m)<n;)i-=m;return a>=i?{start:0,duration:e.duration}:{start:a/e.sampleRate,duration:(i+m-a)/e.sampleRate}},y=()=>{const[e,t]=(0,n.useState)(()=>{try{return"1"===localStorage.getItem(g)}catch{return!1}}),r=(0,n.useRef)(null),a=(0,n.useRef)([]),i=(0,n.useRef)(null);(0,n.useEffect)(()=>{let e,t=!1;try{e=new AudioContext({latencyHint:"interactive"})}catch{return}r.current=e;const n=()=>{"suspended"===e.state&&e.resume().catch(()=>{})};return window.addEventListener("pointerdown",n),window.addEventListener("keydown",n),Promise.all(h.qF.map(t=>((e,t)=>fetch(t).then(e=>e.arrayBuffer()).then(t=>e.decodeAudioData(t)).then(e=>({buffer:e,...b(e)})).catch(()=>null))(e,t))).then(e=>{t||(a.current=e)}),()=>{t=!0,window.removeEventListener("pointerdown",n),window.removeEventListener("keydown",n),e.close().catch(()=>{})}},[]),(0,n.useEffect)(()=>{try{localStorage.setItem(g,e?"1":"0")}catch{}},[e]);const o=(0,n.useCallback)(()=>{const t=r.current;if(e||!t)return;const n=a.current.filter(e=>null!==e),o=n[Math.floor(Math.random()*n.length)];if(!o)return;"suspended"===t.state&&t.resume().catch(()=>{});const l=i.current;if(l)try{l.stop()}catch{}const s=t.createBufferSource();s.buffer=o.buffer,s.playbackRate.value=.92+Math.random()*(1.08-.92),s.connect(t.destination),s.onended=()=>{i.current===s&&(i.current=null)},i.current=s,s.start(0,o.start,o.duration)},[e]),l=(0,n.useCallback)(()=>t(e=>!e),[]);return{play:o,muted:e,toggleMuted:l}},k=()=>"undefined"!==typeof window&&window.matchMedia("(any-hover: hover) and (any-pointer: fine)").matches,$=()=>"undefined"!==typeof window&&(!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&window.matchMedia("(any-hover: hover) and (any-pointer: fine)").matches);var w=r(579);const j=e=>{let{children:t}=e;return(0,w.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",children:t})},A=()=>(0,w.jsxs)(j,{children:[(0,w.jsx)("path",{d:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"}),(0,w.jsx)("path",{d:"M13.7 21a2 2 0 0 1-3.4 0"})]}),M=()=>(0,w.jsxs)(j,{children:[(0,w.jsx)("path",{d:"M13.7 21a2 2 0 0 1-3.4 0"}),(0,w.jsx)("path",{d:"M18.6 13c-.4-1.4-.6-3-.6-5a6 6 0 0 0-9.3-5M6.3 6.3A6 6 0 0 0 6 8c0 7-3 9-3 9h14"}),(0,w.jsx)("path",{d:"M2 2l20 20"})]}),z=()=>(0,w.jsxs)(j,{children:[(0,w.jsx)("circle",{cx:"11",cy:"11",r:"7"}),(0,w.jsx)("path",{d:"M21 21l-4.3-4.3"}),(0,w.jsx)("path",{d:"M11 8v6M8 11h6"})]}),C=()=>(0,w.jsxs)(j,{children:[(0,w.jsx)("circle",{cx:"11",cy:"11",r:"7"}),(0,w.jsx)("path",{d:"M21 21l-4.3-4.3"}),(0,w.jsx)("path",{d:"M8 11h6"})]}),L=()=>(0,w.jsx)(j,{children:(0,w.jsx)("path",{d:"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"})}),S=()=>(0,w.jsxs)(j,{children:[(0,w.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),(0,w.jsx)("circle",{cx:"9",cy:"9",r:"2"}),(0,w.jsx)("path",{d:"M21 15l-5-5L5 21"})]}),E=/\\([*[\]()])|\*\*([^*]+?)\*\*|\*([^*]+?)\*|\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|(https?:\/\/[^\s)\]]+[^\s)\].,;:!?])/g,R=e=>{const t=[],r=e=>{if(!e)return;const r=t[t.length-1];r&&"text"===r.kind?r.text+=e:t.push({kind:"text",text:e})},n=new RegExp(E.source,"g");let a,i=0;for(;a=n.exec(e);){r(e.slice(i,a.index)),i=n.lastIndex;const[,o,l,s,c,d,u]=a;void 0!==o?r(o):void 0!==l?t.push({kind:"bold",children:R(l)}):void 0!==s?t.push({kind:"italic",children:R(s)}):void 0!==c&&void 0!==d?t.push({kind:"link",href:d,children:/^https?:\/\//.test(c)?[{kind:"text",text:c}]:R(c)}):void 0!==u&&t.push({kind:"link",href:u,children:[{kind:"text",text:u}]})}return r(e.slice(i)),t},H=e=>e.map(e=>"text"===e.kind?e.text:H(e.children)).join(""),N=e=>{const t=[];let r=!1;for(const n of e){if(r){t.push(n);continue}if("text"===n.kind){if(0===n.text.length){t.push(n);continue}const e=n.text.trimStart();if(0===e.length)continue;r=!0;const a=e.slice(1);a&&t.push({kind:"text",text:a});continue}const[e,a]=N(n.children);a?(r=!0,t.push({...n,children:e})):t.push(n)}return[t,r]},T=e=>N(e)[0];var B=r(403);const P=B.AH`
  cursor: grab;
  touch-action: none;
  outline: 1px dashed var(--light-highlight);
  outline-offset: 2px;

  &:active {
    cursor: grabbing;
  }
`,I=36,W=44,F="clamp(8px, 2vh, 20px)",q="clamp(8px, 2vw, 20px)",X=B.AH`
  overflow-wrap: anywhere;
  hyphens: auto;
`,Y='"InaDigits", "Takohuyk", "Mulish", sans-serif',U=B.AH`
  display: grid;
  grid-template-columns: auto;

  > .ink-size {
    grid-area: 1 / 1;
    visibility: hidden;
  }

  > .ink-face {
    grid-area: 1 / 1;
    align-self: start;
    height: 0;
    min-width: 0;
    contain: inline-size;
    overflow: visible;
    font-family: var(--font-heading, "InaTitle", Montserrat, sans-serif);
    font-size: 1.1em;
    font-weight: 700;
    line-height: 1;
    -webkit-text-stroke: 0.03em currentColor;
  }
`,O=B.Ay.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: var(--background);
`,D=B.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
`,G=B.Ay.div`
  position: absolute;
  top: ${F};
  left: ${q};
  font-size: ${(I/1.4).toFixed(2)}px;
`,V=B.DU`
  @font-face {
    font-family: "Takohuyk";
    src: url(${h.FU}) format("truetype");
    font-display: block;
  }

  @font-face {
    font-family: "InaDigits";
    src: url(${h.HO}) format("truetype");
    unicode-range: U+0030-0039;
    font-display: block;
  }

  @font-face {
    font-family: "InaTitle";
    src: url(${h.HO}) format("truetype");
    font-display: block;
  }

  @font-face {
    font-family: "RevisonBooks";
    src: url(${h.x4}) format("truetype");
    font-display: block;
  }

  button[title="Mute BGM"],
  button[title="Unmute BGM"],
  button[title^="Switch theme"] {
    top: ${F};
    bottom: auto;
    width: ${I}px;
    height: ${I}px;
    font-size: ${1.275}rem;
  }

  button[title^="Switch theme"] {
    left: calc(${q} + ${W}px);
  }

  button[title="Mute BGM"],
  button[title="Unmute BGM"] {
    left: calc(${q} + ${88}px);
  }
`,J=B.Ay.button`
  position: fixed;
  top: ${F};
  left: calc(${q} + ${132}px);
  z-index: 1000;
  width: ${I}px;
  height: ${I}px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  border: var(--ink-black) 2px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: ${.75*1.4}rem;
  box-shadow: 0 2px 8px #0002;
`,Q=(0,B.Ay)(J)`
  left: calc(${q} + ${220}px);
`,_=(0,B.Ay)(J)`
  left: calc(${q} + ${264}px);
`,K=B.Ay.div`
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(20, 14, 8, 0.82);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`,Z=B.Ay.div`
  position: relative;
  width: min(1000px, 100%);
  max-height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  padding: 20px 16px 24px;
  border-radius: 12px;
  background: #f4ead5;
  color: #2a2118;
`,ee=B.Ay.button`
  position: sticky;
  top: 0;
  float: right;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid #2a2118;
  background: rgba(255, 255, 255, 0.9);
  color: #2a2118;
  font-size: 1.2rem;
  line-height: 1;
  cursor: pointer;
  z-index: 1;
`,te=B.Ay.h2`
  margin: 0 0 12px;
  font-family: var(--font-heading, Montserrat, sans-serif);
  font-size: 1.4rem;
`,re=B.Ay.h3`
  margin: 20px 0 8px;
  font-family: var(--font-heading, Montserrat, sans-serif);
  font-size: 1rem;
`,ne=B.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 10px;
`,ae=B.Ay.button`
  aspect-ratio: 1;
  padding: 6px;
  border: 1px solid #2a211833;
  border-radius: 8px;
  background: #fffaf0;
  cursor: zoom-in;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`,ie=B.Ay.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  cursor: zoom-out;
`,oe=B.Ay.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 64px;
  height: 64px;
  object-fit: contain;
  pointer-events: none;
  z-index: 9999;
  opacity: ${e=>{let{$visible:t}=e;return t?1:0}};
  will-change: transform;
  transform: translate3d(var(--x, 0px), var(--y, 0px), 0) translate(-50%, -50%)
    ${e=>{let{$side:t}=e;return"right"===t?"scaleX(-1)":""}};
`,le=B.Ay.button`
  position: fixed;
  bottom: clamp(6px, 1.5vh, 12px);
  ${e=>{let{$side:t}=e;return t}}: clamp(6px, 1.5vw, 12px);
  z-index: 50;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.6);
  color: var(--ink-black);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.3;
  font-size: 0.85rem;
  transition: opacity 0.2s;

  &:hover:not(:disabled),
  &:focus-visible {
    opacity: 1;
  }
  &:disabled {
    opacity: 0.1;
    cursor: not-allowed;
  }
`,se=B.Ay.div`
  position: relative;
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(12px, 3vw, 40px);
  padding-top: calc(${F} + ${I}px + 6px);
  box-sizing: border-box;
  touch-action: pan-y;
  cursor: ${e=>{let{$hideCursor:t}=e;return t?"none":"auto"}};
`,ce=B.Ay.div`
  position: absolute;
  inset: 0;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background);
`,de=B.Ay.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${e=>{let{$width:t}=e;return.9*Math.max(t,1)}}px;
  height: 80%;
  transform: translate(-50%, -50%);
  background: var(--dark-highlight);
  filter: blur(90px) brightness(1.6) saturate(1.2);
  opacity: 0.6;
  z-index: 0;
  pointer-events: none;
`,ue={"closed-front":.5,open:0,"closed-back":-.5},pe=B.Ay.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: ${e=>{let{$mobile:t}=e;return t?"460px":"1400px"}};
  overflow: ${e=>{let{$zoomed:t}=e;return t?"auto":"visible"}};
  touch-action: ${e=>{let{$zoomed:t}=e;return t?"pan-x pan-y":"pan-y"}};
  perspective: 1400px;
  transform: translateX(
      ${e=>{let{$mobile:t,$bookState:r,$pageWidth:n}=e;return t?0:ue[r]*n}}px
    )
    rotate(${e=>{let{$tilt:t}=e;return t}}deg);
  transition: transform 0.5s ease;
`,he=B.Ay.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: ${e=>{let{$zoomed:t}=e;return t?0:1}};
  margin: ${e=>{let{$zoomed:t}=e;return t?"auto":"0"}};
  transform: rotateX(${e=>{let{$tiltX:t}=e;return null!==t&&void 0!==t?t:0}}deg)
    rotateY(${e=>{let{$tiltY:t}=e;return null!==t&&void 0!==t?t:0}}deg);
  transition: transform 0.15s ease-out;

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 18px;
    background: #d8cff0;
    z-index: -1;
  }

  &::before {
    transform: translate(5px, 6px) rotate(0.6deg);
  }

  &::after {
    background: #c2b6e6;
    transform: translate(9px, 11px) rotate(1.1deg);
  }
`,xe=B.Ay.div`
  position: relative;
  display: flex;
  height: ${e=>{let{$height:t}=e;return Math.max(t,1)}}px;
  width: ${e=>{let{$width:t}=e;return Math.max(t,1)}}px;
  max-width: ${e=>{let{$zoomed:t}=e;return t?"none":"100%"}};
  max-height: ${e=>{let{$zoomed:t}=e;return t?"none":"100%"}};
  background: var(--lightdark);
  border-radius: 18px;
  box-shadow:
    0 3px 6px var(--shadow),
    0 32px 100px var(--shadow);
  overflow: hidden;
  --ink-black: #2a2118;
  --text-color: #2a2118;
  --light-highlight: #b8862b;
  --dark-highlight: #6b5a45;
  --dark-background: #8a7658;
  --light-background: #d9c9a8;
`,fe=B.Ay.div`
  position: absolute;
  top: 0;
  bottom: 0;
  ${e=>{let{$side:t}=e;return t}}: 0;
  width: ${100*h.de}%;
  z-index: 5;
  pointer-events: none;
  opacity: ${e=>{let{$active:t}=e;return t?1:0}};
  transition: opacity 0.25s ease;
  background: linear-gradient(
    to ${e=>{let{$side:t}=e;return"left"===t?"right":"left"}},
    ${"rgba(167, 107, 240, 0.35)"} 0%,
    transparent 100%
  );
`,ge=B.Ay.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 36px;
  transform: translateX(-50%);
  pointer-events: none;
  z-index: 2;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--dark-background) 40%,
    var(--dark-highlight) 50%,
    var(--dark-background) 60%,
    transparent 100%
  );
  opacity: 0.6;
`,me=B.Ay.div`
  position: relative;
  flex: 1;
  height: 100%;
  overflow: hidden;
  touch-action: pan-y;
`,ve=[243,236,220],be=[212,184,145],ye=e=>{const t=Math.abs(Math.sin(12.9898*e)),[r,n,a]=ve.map((e,r)=>Math.round(e+(be[r]-e)*t));return`rgb(${r}, ${n}, ${a})`},ke=B.Ay.div`
  position: relative;
  z-index: 1;
  width: ${e=>{let{$layoutWidth:t,$spread:r}=e;return t*r}}px;
  height: ${e=>{let{$layoutHeight:t}=e;return t}}px;
  transform: scale(${e=>{let{$scale:t}=e;return Math.max(t,.01)}});
  transform-origin: 0 0;
  column-width: ${e=>{let{$layoutWidth:t}=e;return t}}px;
  column-gap: 0;
  column-fill: auto;
  overflow: hidden;
  color: var(--ink-black);
  --page-w: ${e=>{let{$layoutWidth:t}=e;return t}}px;
  --page-h: ${e=>{let{$layoutHeight:t}=e;return t}}px;
  ${e=>{let{$typography:t}=e;return[(null===(r=t)||void 0===r?void 0:r.bodyFont)&&`--font-body: ${r.bodyFont}, ${Y};`,(null===r||void 0===r?void 0:r.headingFont)&&`--font-heading: ${r.headingFont}, sans-serif;`,(null===r||void 0===r?void 0:r.bodyScale)&&`--fs-body: ${r.bodyScale};`,(null===r||void 0===r?void 0:r.headingScale)&&`--fs-heading: ${r.headingScale};`].filter(Boolean).join(" ");var r}}
`,$e=B.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${e=>{let{$pageWidth:t,$pageCount:r}=e;return Math.max(t,1)*Math.max(r,1)}}px;
  height: ${e=>{let{$pageHeight:t}=e;return Math.max(t,1)}}px;
  transform: translateX(${e=>{let{$offset:t}=e;return-t}}px);
  pointer-events: none;
  ${e=>{let{$pageWidth:t,$pageCount:r}=e;return((e,t)=>{const r=[],n=[];let a=0;for(let i=0;i<e;i++)a=(a+(1+Math.floor(1e6*Math.abs(Math.sin(i+1)))%5))%h.Rb.length,r.push(`url(${h.Rb[a]})`),n.push(i*t+"px 0");for(let i=0;i<e;i++){const e=ye(i);r.push(`linear-gradient(${e}, ${e})`),n.push(i*t+"px 0")}return`\n    background-image: ${r.join(", ")};\n    background-position: ${n.join(", ")};\n  `})(Math.max(r,1),Math.max(t,1))}}
  background-size: ${e=>{let{$pageWidth:t,$pageHeight:r}=e;return`${Math.max(t,1)}px ${Math.max(r,1)}px`}};
  background-repeat: no-repeat;
  background-color: #fff;
  background-blend-mode: multiply;
`,we=B.AH`
  clear: both;
  height: 100%;
  box-sizing: border-box;
  padding: clamp(16px, calc(var(--page-h) * 0.07), 56px)
    clamp(16px, calc(var(--page-w) * 0.08), 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: clamp(10px, calc(var(--page-h) * 0.03), 16px);
  text-align: center;
  break-before: column;
  break-after: column;
  break-inside: avoid;
  -webkit-column-break-before: always;
  -webkit-column-break-after: always;
  -webkit-column-break-inside: avoid;
`,je=B.Ay.div`
  ${we}
  position: relative;
  z-index: 1;
  break-before: auto;
  -webkit-column-break-before: auto;
  background: ${e=>{let{$cover:t}=e;return t?`url(${t}) center / cover no-repeat`:"none"}},
    ${h.BN.coverFront};
`,Ae=B.Ay.p`
  ${X}
  margin: 0;
  font-family: var(--font-body, ${Y});
  font-size: calc(
    clamp(12px, calc(var(--page-h) * 0.035), 18px) * var(--fs-body, 1)
  );
  font-weight: 700;
  color: var(--ink-black);
  opacity: 0.75;
`,Me=(0,B.Ay)(Ae)`
  height: 2lh;
  overflow: hidden;
`,ze=B.Ay.div`
  ${we}
  align-items: stretch;
  justify-content: center;
  text-align: left;
`,Ce=B.Ay.h2`
  ${X}
  ${U}
  margin: 0;
  font-family: var(--font-heading, Montserrat, sans-serif);
  font-size: calc(
    clamp(15px, calc(var(--page-h) * 0.055), 24px) * var(--fs-heading, 1)
  );
  color: var(--ink-black);
`,Le=B.Ay.p`
  ${X}
  margin: 0;
  font-family: var(--font-body, ${Y});
  font-size: calc(
    clamp(12px, calc(var(--page-h) * 0.038), 17px) * var(--fs-body, 1)
  );
  font-weight: 700;
  line-height: 1.5;
  color: var(--ink-black);
`,Se=B.Ay.p`
  ${X}
  margin: 0;
  font-family: var(--font-body, ${Y});
  font-size: calc(
    clamp(11px, calc(var(--page-h) * 0.022), 13px) * var(--fs-body, 1)
  );
  font-weight: 700;
  line-height: 1.3;
  color: var(--ink-black);

  ${e=>{let{$heading:t}=e;return t&&B.AH`
      margin-top: 8px;
      font-family: var(--font-heading, Montserrat, sans-serif);
      font-size: calc(
        clamp(13px, calc(var(--page-h) * 0.03), 17px) * var(--fs-heading, 1)
      );
    `}}
`,Ee=B.Ay.div`
  display: flex;
  flex-direction: column;
  gap: clamp(6px, calc(var(--page-h) * 0.018), 12px);
`,Re=B.Ay.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`,He=B.Ay.span`
  ${X}
  font-family: var(--font-body, ${Y});
  font-size: calc(
    clamp(11px, calc(var(--page-h) * 0.033), 15px) * var(--fs-body, 1)
  );
  font-weight: 700;
  line-height: 1.4;
  color: var(--ink-black);
  opacity: 0.85;
`,Ne=B.Ay.div`
  box-sizing: border-box;
  padding: clamp(16px, calc(var(--page-h) * 0.07), 56px)
    clamp(16px, calc(var(--page-w) * 0.08), 32px);
  break-before: column;
  -webkit-column-break-before: always;
  break-after: column;
  -webkit-column-break-after: always;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
`,Te=B.Ay.div`
  margin-top: clamp(10px, calc(var(--page-h) * 0.03), 16px);
  display: flex;
  flex-direction: column;
  gap: clamp(4px, calc(var(--page-h) * 0.012), 8px);
`,Be=B.Ay.button`
  ${X}
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;
  width: 100%;
  background: none;
  border: none;
  padding: 2px 0;
  font-family: var(--font-body, ${Y});
  font-size: calc(
    clamp(11px, calc(var(--page-h) * 0.03), 14px) * var(--fs-body, 1)
  );
  font-weight: 700;
  color: var(--ink-black);
  text-align: left;
  cursor: pointer;
  break-inside: avoid;
  -webkit-column-break-inside: avoid;

  &:hover {
    opacity: 0.7;
  }
`,Pe=B.Ay.span`
  ${X}
  flex: 1;
  min-width: 0;
`,Ie=B.Ay.span`
  flex-shrink: 0;
  opacity: 0.6;
`,We=B.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(6px, calc(var(--page-h) * 0.02), 12px);
  text-align: center;
  margin-bottom: clamp(12px, calc(var(--page-h) * 0.04), 24px);
  break-inside: avoid;
  -webkit-column-break-inside: avoid;
`,Fe=B.Ay.img`
  width: clamp(36px, calc(var(--page-h) * 0.14), 90px);
  height: clamp(36px, calc(var(--page-h) * 0.14), 90px);
  object-fit: contain;
`,qe=B.Ay.div`
  ${we}
`,Xe=B.Ay.h2`
  ${X}
  ${U}
  margin: 0;
  font-family: var(--font-heading, Montserrat, sans-serif);
  font-size: calc(
    clamp(15px, calc(var(--page-h) * 0.055), 26px) * var(--fs-heading, 1)
  );
  color: var(--ink-black);
  text-align: center;
`,Ye=(0,B.Ay)(Xe)`
  position: relative;
`,Ue=B.Ay.img`
  position: absolute;
  right: calc(100% + 0.35em);
  top: 50%;
  width: 1.9em;
  height: 1.9em;
  object-fit: contain;
  transform: translateY(-50%);
  pointer-events: none;
`,Oe=B.Ay.section`
  box-sizing: border-box;
  padding: clamp(14px, calc(var(--page-h) * 0.06), 40px)
    clamp(12px, calc(var(--page-w) * 0.06), 28px);
  clear: both;
  break-before: column;
  -webkit-column-break-before: always;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
`,De=B.Ay.header`
  margin-bottom: clamp(10px, calc(var(--page-h) * 0.025), 18px);
  display: flex;
  flex-direction: column;
  gap: 6px;
  break-inside: avoid;
  -webkit-column-break-inside: avoid;
`,Ge=B.Ay.h3`
  ${X}
  ${U}
  margin: 0;
  font-family: var(--font-heading, Montserrat, sans-serif);
  font-size: calc(
    clamp(14px, calc(var(--page-h) * 0.05), 22px) * var(--fs-heading, 1)
  );
  color: var(--ink-black);
`,Ve=B.Ay.p`
  ${U}
  margin: 0;
  font-family: var(--font-body, ${Y});
  font-size: calc(
    clamp(10px, calc(var(--page-h) * 0.024), 12px) * var(--fs-body, 1)
  );
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink-black);
  opacity: 0.6;
`,Je=B.Ay.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`,Qe=B.Ay.span`
  ${X}
  font-family: var(--font-body, ${Y});
  font-size: calc(
    clamp(10px, calc(var(--page-h) * 0.024), 12px) * var(--fs-body, 1)
  );
  color: var(--ink-black);
  opacity: 0.8;

  a {
    color: var(--ink-black);
    font-weight: 700;
  }
`,_e={confirmed:"#4CAF6E",implied:"#E3C438",theory:"#E08A3C",thought:"#9B7BD4"},Ke=B.Ay.span`
  padding: 2px 10px;
  border-radius: 999px;
  font-family: ${Y};
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #20162c;
  background: ${e=>{var t;let{$status:r}=e;return null!==(t=_e[r])&&void 0!==t?t:"var(--light-background)"}};
`,Ze=B.Ay.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  margin-right: 6px;
  vertical-align: middle;
`,et=B.Ay.span`
  display: inline-block;
  box-sizing: border-box;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  border: 1.5px solid currentColor;
  background: ${e=>{let{$filled:t}=e;return t?"currentColor":"transparent"}};
`,tt=B.Ay.h4`
  ${X}
  position: relative;

  > .ink-text {
    color: transparent;
  }

  > .ink-line {
    position: absolute;
    white-space: pre;
    pointer-events: none;
    user-select: none;
    font-family: var(--font-heading, "InaTitle", Montserrat, sans-serif);
    font-size: 1.1em;
    font-weight: 700;
    -webkit-text-stroke: 0.03em currentColor;
  }

  margin: clamp(10px, calc(var(--page-h) * 0.03), 18px) 0 8px;
  font-family: var(--font-heading, Montserrat, sans-serif);
  font-size: calc(
    clamp(12px, calc(var(--page-h) * 0.042), 18px) * var(--fs-heading, 1)
  );
  color: var(--ink-black);
  break-inside: avoid;
  -webkit-column-break-inside: avoid;
  break-after: avoid;
  -webkit-column-break-after: avoid;
`,rt=B.Ay.p`
  ${X}
  margin: 0 0 12px;
  font-family: var(--font-body, ${Y});
  font-size: calc(
    clamp(11px, calc(var(--page-h) * 0.036), 15px) * var(--fs-body, 1)
  );
  font-weight: 700;
  line-height: 1.6;
  color: var(--ink-black);
  widows: 2;
  orphans: 2;
`,nt=B.Ay.span`
  float: left;
  width: clamp(26px, calc(var(--page-h) * 0.09), 56px);
  height: clamp(26px, calc(var(--page-h) * 0.09), 56px);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-family: "RevisonBooks", var(--font-heading, Montserrat, sans-serif);
  font-size: calc(
    clamp(28px, calc(var(--page-h) * 0.12), 60px) * var(--fs-heading, 1)
  );
  line-height: 0.8;
  margin: 2px 8px 0 0;
  color: var(--dropcap-color, inherit);
  transform: translateY(-0.12em);

  &[data-displaced] {
    transform: none;
    float: none;
    display: inline-block;
    width: auto;
    height: auto;
    font-size: calc(
      clamp(20px, calc(var(--page-h) * 0.075), 34px) * var(--fs-heading, 1)
    );
    line-height: 1;
    margin: 0 4px 0 0;
    vertical-align: -0.1em;
  }
`,at=B.Ay.aside`
  display: flow-root;
  clear: both;
  box-sizing: border-box;
  margin: 10px 0 14px;
  padding: 8px 10px;
  border: 2px dashed var(--frame-color, var(--title-stroke));
  border-radius: 8px;
  color: var(--ink-black);
  break-inside: avoid;
  -webkit-column-break-inside: avoid;
`,it=B.Ay.img`
  float: left;
  width: clamp(48px, calc(var(--page-w) * 0.22), 96px);
  height: clamp(48px, calc(var(--page-w) * 0.22), 96px);
  object-fit: contain;
  border-radius: 6px;
  margin: 0 10px 4px 0;
`,ot=B.Ay.div`
  ${X}
  font-family: var(--font-heading, Montserrat, sans-serif);
  font-weight: 700;
  font-size: calc(
    clamp(12px, calc(var(--page-h) * 0.04), 16px) * var(--fs-heading, 1)
  );
  line-height: 1.2;
`,lt=B.Ay.p`
  ${X}
  margin: 3px 0 0;
  font-family: var(--font-body, ${Y});
  font-size: calc(
    clamp(10px, calc(var(--page-h) * 0.032), 13px) * var(--fs-body, 1)
  );
  line-height: 1.35;
`,st=B.Ay.blockquote`
  ${X}
  margin: 12px 0;
  padding: 8px 16px;
  border-left: 3px solid var(--light-highlight);
  font-family: var(--font-body, ${Y});
  font-style: italic;
  font-size: calc(
    clamp(11px, calc(var(--page-h) * 0.036), 15px) * var(--fs-body, 1)
  );
  font-weight: 700;
  color: var(--ink-black);
  break-inside: avoid;
  -webkit-column-break-inside: avoid;

  cite {
    display: block;
    margin-top: 4px;
    font-size: 9px;
    font-style: normal;
    opacity: 0.6;
  }
`,ct=B.Ay.figure`
  position: relative;
  margin: 12px 0;
  max-width: 100%;
  break-inside: avoid;
  -webkit-column-break-inside: avoid;

  img {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    max-height: min(240px, calc(var(--page-h) * 0.13));
    object-fit: contain;
    border-radius: 8px;
    border: 6px solid var(--frame-color, var(--title-stroke));
  }

  figcaption {
    ${X}
    margin-top: 4px;
    font-family: ${Y};
    font-size: 8px;
    opacity: 0.6;
    color: var(--ink-black);
  }

  ${e=>{let{$editable:t}=e;return t&&P}}
  ${e=>{let{$float:t,$width:r}=e;return t?B.AH`
          float: ${"center"===t?"none":t};
          width: calc(var(--page-w) * ${null!==r&&void 0!==r?r:.4});
          margin: ${"center"===t?"6px auto 8px":"left"===t?"6px 16px 8px 0":"12px 0"};

          img {
            width: min(100%, calc(var(--page-h) * 0.6 * var(--ar, 100)));
            max-height: calc(var(--page-h) * 0.6);
            margin-inline: auto;
          }
        `:B.AH`
          width: fit-content;
          margin: 12px auto;

          img {
            width: auto;
            max-width: 100%;
          }
        `}}
`,dt=B.Ay.div`
  height: 0;
  break-before: column;
  -webkit-column-break-before: always;
`,ut=B.Ay.div`
  position: absolute;
  bottom: clamp(6px, 1.5vh, 16px);
  ${e=>{let{$corner:t}=e;return"left"===t?"left":"right"}}: clamp(
    10px,
    2vw,
    24px
  );
  z-index: 10;
  color: #6a45a8;
  font-family: ${Y};
  font-size: clamp(14px, calc(var(--page-h) * 0.03), 20px);
  line-height: 1;
`,pt=B.Ay.div`
  position: fixed;
  top: ${F};
  left: calc(${q} + ${308}px);
  z-index: 1000;
  --ink-black: #2a2118;
`,ht=B.Ay.button`
  cursor: pointer;
  height: ${I}px;
  min-width: ${I}px;
  padding: 0 14px;
  box-sizing: border-box;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.8);
  border: var(--ink-black) 2px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  color: var(--ink-black);
  font-family: ${Y};
  font-size: ${.75*1.2}rem;
  box-shadow: 0 2px 8px #0002;
`,xt=B.Ay.div`
  color: var(--text-color);
  text-align: center;
  padding: 24px;
  font-family: "Mulish", sans-serif;
`,ft=B.Ay.div`
  height: 100%;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  background:
    url(${e=>{let{$src:t}=e;return t}}) center / cover no-repeat,
    ${h.BN.coverBack};
  break-before: column;
  -webkit-column-break-before: always;
`,gt=B.Ay.div`
  --db: clamp(8px, calc(var(--page-h) * 0.03), 18px);
  display: block;
  box-sizing: border-box;
  width: calc(100% / 3.2);
  height: var(--db);
  margin: 0 auto 18px;
  transform-origin: 50% calc(var(--db) - 14px / 2.2);
  transform: scale(3.2);
  break-inside: avoid;
  -webkit-column-break-inside: avoid;
  pointer-events: none;
`,mt=B.Ay.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transform: translate(
      calc(var(--page-w) * var(--dx, 0) / 320),
      calc(var(--page-h) * var(--dy, 0) / 320)
    )
    rotate(calc(var(--dr, 0) * 1deg)) scale(var(--ds, 1));
`,vt="clamp(68px, 7.2vw, 104px)",bt="clamp(52px, 4.6vw, 76px)",yt=B.i7`
  0% {
    transform: translateY(-14px);
  }
  60% {
    transform: translateY(4px);
  }
  80% {
    transform: translateY(-2px);
  }
  100% {
    transform: translateY(0);
  }
`,kt=B.Ay.button`
  position: absolute;
  top: ${e=>{let{$revealed:t,$hasBookmark:r,$mobile:n}=e;return t||!r&&!n?"clamp(-16px, -2vh, -6px)":`calc(${bt} * -1)`}};
  background: transparent;
  ${e=>{let{$mobile:t,$hasBookmark:r}=e;return r?B.AH`
          left: ${t?"50%":"75%"};
          margin-left: calc(${vt} / -2);
        `:t?B.AH`
            left: calc(100% - ${vt} - clamp(4px, 1.5vw, 20px));
          `:B.AH`
            left: 100%;
            margin-left: clamp(2px, 0.8vw, 12px);
          `}}
  z-index: 10;
  display: block;
  width: ${vt};
  max-height: ${e=>{let{$revealed:t,$hasBookmark:r,$mobile:n}=e;return t||!r&&!n?"400px":bt}};
  overflow: hidden;
  border: none;
  padding: 0;
  cursor: pointer;
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.35));
  transition:
    top 0.45s ease,
    left 0.45s ease,
    margin-left 0.45s ease,
    max-height 0.45s ease;
  ${e=>{let{$justPlaced:t}=e;return t&&B.AH`
      animation: ${yt} 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    `}}
`,$t=B.Ay.span`
  display: block;
  width: 100%;
  aspect-ratio: ${e=>{let{$ratio:t}=e;return t}};
  background: url(${e=>{let{$src:t}=e;return t}}) center top / contain no-repeat;
`,wt=B.Ay.div`
  position: fixed;
  top: ${F};
  left: calc(${q} + ${176}px);
  z-index: 1000;
`,jt=(0,B.Ay)(J)`
  position: static;
`,At=B.Ay.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  display: flex;
  gap: 8px;
  padding: 8px;
  border: var(--ink-black) 2px solid;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 8px #0002;
`,Mt=B.Ay.button`
  width: 40px;
  aspect-ratio: ${e=>{let{$ratio:t}=e;return t}};
  border: 2px solid
    ${e=>{let{$active:t}=e;return t?"var(--light-highlight)":"transparent"}};
  border-radius: 6px;
  padding: 0;
  cursor: pointer;
  background: url(${e=>{let{$src:t}=e;return t}}) center / contain no-repeat;
`,zt=B.Ay.div`
  position: relative;
  float: ${e=>{let{$side:t}=e;return null!==t&&void 0!==t?t:"right"}};
  width: clamp(80px, calc(var(--page-w) * 0.34), 170px);
  margin: ${e=>{let{$side:t}=e;return"left"===t?"0 14px 10px 0":"0 0 10px 14px"}};
  transform: rotate(${e=>{let{$rotate:t}=e;return t}}deg);
  break-inside: avoid;
  -webkit-column-break-inside: avoid;

  ${e=>{let{$editable:t}=e;return t&&P}}
`,Ct=B.Ay.img`
  display: block;
  width: 100%;
  height: auto;
`,Lt=B.Ay.div`
  position: absolute;
  container-type: inline-size;
  box-sizing: border-box;
  padding: 2%;
  top: ${e=>{let{$box:t}=e;return t.top}}%;
  right: ${e=>{let{$box:t}=e;return t.right}}%;
  bottom: ${e=>{let{$box:t}=e;return t.bottom}}%;
  left: ${e=>{let{$box:t}=e;return t.left}}%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: safe center;
  gap: 2px;
  text-align: center;
`,St=B.Ay.span`
  overflow-wrap: anywhere;
  font-family: ${Y};
  font-weight: 700;
  font-size: clamp(7px, 11cqw, 13px);
  line-height: 1.25;
  color: #f4d35e;
  text-shadow:
    0 1px 2px rgba(0, 0, 0, 0.6),
    0 0 4px rgba(0, 0, 0, 0.4);
`,Et=B.Ay.img`
  float: ${e=>{let{$side:t}=e;return t}};
  width: clamp(40px, calc(var(--page-w) * 0.18), 80px);
  height: auto;
  margin: 4px 10px 8px 10px;
  transform: rotate(${e=>{let{$rotate:t}=e;return t}}deg);
  pointer-events: none;
  opacity: 0.9;
  break-inside: avoid;
  -webkit-column-break-inside: avoid;

  ${e=>{let{$editable:t}=e;return t&&B.AH`
      pointer-events: auto;
      ${P}
    `}}
`,Rt=B.Ay.img`
  width: clamp(18px, calc(var(--page-h) * 0.06), 36px);
  height: clamp(18px, calc(var(--page-h) * 0.06), 36px);
  object-fit: contain;
`,Ht=(0,B.Ay)(At)`
  flex-direction: column;
  align-items: stretch;
  white-space: nowrap;
`,Nt=B.Ay.form`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: ${Y};
  font-size: 0.9rem;
  color: var(--ink-black);

  input {
    width: 4.5ch;
    font: inherit;
    color: inherit;
    padding: 2px 6px;
    border: var(--ink-black) 2px solid;
    border-radius: 6px;
    background: #fff;
  }
`,Tt=B.Ay.button`
  font: inherit;
  font-family: ${Y};
  font-size: 0.9rem;
  color: var(--ink-black);
  padding: 2px 10px;
  border: var(--ink-black) 2px solid;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.8);
  cursor: pointer;
`,Bt=B.Ay.div`
  ${we}
  height: var(--page-h);
  display: grid;
  align-items: stretch;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 0;
  padding: clamp(10px, calc(var(--page-h) * 0.04), 28px);
`,Pt=B.Ay.div`
  position: relative;
  min-width: 0;
  min-height: 0;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 88%;
    max-height: 88%;
    object-fit: contain;
    transform: translate(calc(-50% + var(--dx, 0%)), calc(-50% + var(--dy, 0%)))
      rotate(var(--rot, 0deg));
  }
`,It={violet:"Violet",mekronopsis:"Meconopsis",temari:"Temari",takotakeover:"TakoTakover","abyssal-hymn":"AbyssalHymn","takodachi-no-uta":"TakodachiNoUta","stardust-capsule":"StardustCapsule"},Wt={"song-5-analysis-1":"TakodachiNoUta"},Ft={Violet:"#7b2cbf",Meconopsis:"#2a6fd1",Temari:"#c62828",TakoTakover:"#c4177f",AbyssalHymn:"#3b2a78",TakodachiNoUta:"#2b2b2b",StardustCapsule:"#8fa0d8"},qt=e=>e?It[e]:void 0,Xt=["fade","type","slide"],Yt="takonomicon-bookmark",Ut=()=>{const e=localStorage.getItem(Yt);if(!e)return null;try{const t=JSON.parse(e);return t&&"string"===typeof t.id?{id:t.id,offset:Number(t.offset)||0}:null}catch{return{id:e,offset:0}}},Ot="takonomicon-bookmark-art",Dt=()=>{try{const e=Number(localStorage.getItem(Ot));return Number.isInteger(e)&&e>=0&&e<h.W3.length?e:0}catch{return 0}},Gt={title:"Tako Lore Book",subtitle:"A tako theory compendium for re:VISION",forewordHeading:"Foreword",foreword:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",disclaimerHeading:"Before You Turn the Page",disclaimer:"Everything within these pages is tako theory, not confirmed lore. Nothing here is official or endorsed until Ina herself says so on stream. Read for fun, not as fact.",legendHeading:"How to read the badges",statusLabels:{confirmed:"Confirmed",implied:"Strongly Implied",theory:"Theory",thought:"Tako Thought"},statusMeanings:{confirmed:"Ina or an official source said it.",implied:"Not stated, but the work points at it.",theory:"Reasoned from evidence, a leap remains.",thought:"A tako had a thought, and it is a good one."},contentsHeading:"Contents",standaloneHeading:"Standalone Theories",creditsHeading:"Credits",credits:"Lorem ipsum dolor sit amet, consectetur adipiscing elit (writers and artists credited here once the real roster is in).",tagline:"Lorem ipsum dolor sit amet, theory placeholder tagline for this track.",pageAspectRatio:h.qU},Vt={song:"Song",cover:"Cover",concert:"Concert",mv:"Music Video",general:"General"},Jt={confirmed:4,implied:3,theory:2,thought:1},Qt=[0,1,2,3],_t=["confirmed","implied","theory","thought"],Kt=e=>e.map((e,t)=>{switch(e.kind){case"bold":return(0,w.jsx)("strong",{children:Kt(e.children)},t);case"italic":return(0,w.jsx)("em",{children:Kt(e.children)},t);case"link":return(0,w.jsx)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",children:Kt(e.children)},t);default:return e.text}}),Zt=(()=>{const e=[...h.jr,...h.uD].map(e=>({doodle:e,order:(0,h.LQ)(`doodle-order-${e.src}`)})).sort((e,t)=>e.order-t.order).map(e=>{let{doodle:t}=e;return t}),t=[];for(let r=0;r<e.length;r+=6)t.push(e.slice(r,r+6));return t})(),er=e=>Kt(R(e)),tr=e=>{let{status:t,label:r}=e;return(0,w.jsxs)(Ke,{$status:t,children:[(0,w.jsx)(Ze,{"aria-hidden":"true",children:Qt.map(e=>(0,w.jsx)(et,{$filled:e<Jt[t]},e))}),r]})},rr=e=>e.replace(/^Song \d+:\s*/,""),nr=e=>{var t,r,n,a,i;let{entry:o,label:l}=e;if(!o.status||null!==(t=o.sticky)&&void 0!==t&&t.hidden)return null;const s=void 0!==(null===(r=o.sticky)||void 0===r?void 0:r.variant)?h.qk[(o.sticky.variant%h.qk.length+h.qk.length)%h.qk.length]:(0,h.eS)(o.id,h.qk),c=16*((0,h.LQ)(o.id)-.5),d=null!==(n=null===(a=o.sticky)||void 0===a?void 0:a.rotate)&&void 0!==n?n:c;return(0,w.jsxs)(zt,{$rotate:d,$side:null===(i=o.sticky)||void 0===i?void 0:i.side,children:[(0,w.jsx)(Ct,{src:s.src,alt:"",width:s.width,height:s.height}),(0,w.jsxs)(Lt,{$box:s.box,children:[(0,w.jsx)(tr,{status:o.status,label:l}),(0,w.jsx)(St,{children:rr(o.subject)}),o.themes&&o.themes.length>0&&(0,w.jsx)(St,{children:o.themes.join(", ")})]})]})},ar=e=>{let{entry:t,images:r}=e;const a=t.takodachi,i=(0,h.AW)(null===a||void 0===a?void 0:a.image,r),o=(0,n.useContext)(ur),l=!(!i||null===o||void 0===o||!o[i]);return a?(0,w.jsxs)(at,{children:[a.image&&(0,w.jsx)(it,{src:l?void 0:i,"data-lazy-src":l?i:void 0,alt:"",decoding:"async",onError:(0,h.M8)(h.BN.art)}),(0,w.jsx)(ot,{children:a.name}),a.description&&(0,w.jsx)(lt,{children:a.description})]}):null},ir=e=>{var t,r,n,a,i,o;let{entry:l}=e;if(null!==(t=l.doodle)&&void 0!==t&&t.hidden)return null;const s=(0,h.LQ)(`${l.id}-doodle`);if(s>.4&&!l.doodle)return null;const c=void 0!==(null===(r=l.doodle)||void 0===r?void 0:r.variant)?h.jr[(l.doodle.variant%h.jr.length+h.jr.length)%h.jr.length]:(0,h.eS)(`${l.id}-doodle-src`,h.jr),d=s<.2?"left":"right",u=null!==(n=null===(a=l.doodle)||void 0===a?void 0:a.side)&&void 0!==n?n:d,p=24*((0,h.LQ)(`${l.id}-doodle-rot`)-.5),x=null!==(i=null===(o=l.doodle)||void 0===o?void 0:o.rotate)&&void 0!==i?i:p;return(0,w.jsx)(Et,{src:c.src,alt:"",width:c.width,height:c.height,$side:u,$rotate:x,onError:(0,h.M8)(h.BN.art)})},or=e=>{let{src:t,...r}=e;return(0,w.jsx)(gt,{...r,children:(0,w.jsx)(mt,{src:t,alt:"",onError:(0,h.M8)(h.BN.divider)})})},lr=e=>e?{"--dx":e.x,"--dy":e.y,"--ds":e.scale,"--dr":e.rotate}:void 0,sr=e=>{let{text:t,children:r}=e;const n=null!==r&&void 0!==r?r:t;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("span",{className:"ink-size","aria-hidden":"true",children:n}),(0,w.jsx)("span",{className:"ink-face",children:n})]})},cr=e=>{let{text:t}=e;const r=(0,n.useRef)(null),a=(0,n.useRef)(),[i,o]=(0,n.useState)([]);return(0,n.useLayoutEffect)(()=>{var e;const t=r.current,n=null===t||void 0===t?void 0:t.parentElement,i=null===t||void 0===t?void 0:t.firstChild;if(!t||!n||!(i instanceof Text))return;const l=()=>{const e=((e,t)=>{const r=t.getBoundingClientRect(),n=t.offsetWidth?r.width/t.offsetWidth:1,a=t.offsetHeight?r.height/t.offsetHeight:1,i=document.createRange(),o=[],l=e.data;for(let s=0;s<l.length;s++){i.setStart(e,s),i.setEnd(e,s+1);const t=i.getClientRects()[0],c=o[o.length-1];if(!t||0===t.width){c&&(c.text+=l[s]);continue}const d=(t.top-r.top)/a;c&&Math.abs(d-c.top)<c.height/2?c.text+=l[s]:o.push({text:l[s],left:(t.left-r.left)/n,top:d,height:t.height/a})}return o.map(e=>({text:e.text.trimEnd(),left:Math.round(10*e.left)/10,top:Math.round(10*e.top)/10,height:Math.round(10*e.height)/10}))})(i,n);o(t=>JSON.stringify(t)===JSON.stringify(e)?t:e)};a.current=l,l();const s=new ResizeObserver(l);return s.observe(n),null===(e=document.fonts)||void 0===e||e.addEventListener("loadingdone",l),()=>{var e;a.current=void 0,s.disconnect(),null===(e=document.fonts)||void 0===e||e.removeEventListener("loadingdone",l)}},[t]),(0,n.useLayoutEffect)(()=>{var e;null===(e=a.current)||void 0===e||e.call(a)}),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("span",{ref:r,className:"ink-text",children:t}),i.map((e,t)=>(0,w.jsx)("span",{className:"ink-line","aria-hidden":"true",style:{left:e.left,top:e.top,lineHeight:`${e.height}px`},children:e.text},t))]})},dr=e=>{let{letter:t}=e;return(0,w.jsx)(nt,{"data-dropcap":!0,children:t})},ur=n.createContext(null),pr=e=>{var t,r;let{block:a,images:i}=e;const o=(0,h.AW)(null!==(t=a.src)&&void 0!==t?t:a.slot?(0,h._w)(a.slot):void 0,i),l=(0,n.useContext)(ur),s=o?null===l||void 0===l?void 0:l[o]:void 0,c=!!s;return(0,w.jsxs)(ct,{$float:a.float,$width:a.width,style:s?{"--ar":s[0]/s[1]}:void 0,children:[(0,w.jsx)("img",{src:c?void 0:o,"data-lazy-src":c?o:void 0,style:s?{aspectRatio:`${s[0]} / ${s[1]}`,...a.float?null:{width:s[0]}}:void 0,alt:null!==(r=a.alt)&&void 0!==r?r:"",decoding:"async",onLoad:e=>{var t;const r=e.currentTarget;r.naturalHeight&&(null===(t=r.parentElement)||void 0===t||t.style.setProperty("--ar",String(r.naturalWidth/r.naturalHeight)))},onError:(0,h.M8)(h.BN.art)}),a.artist&&(0,w.jsxs)("figcaption",{children:["Art by"," ",a.artistLink?(0,w.jsx)("a",{href:a.artistLink,target:"_blank",rel:"noopener noreferrer",children:a.artist}):a.artist]})]})},hr=n.memo(function(e){var t,r;let{entry:n,first:a,images:i,statusLabel:o,registerRef:l,opener:s}=e;const d=n.body.find(e=>"text"===e.type&&/^\p{L}/u.test(H(R(e.text)).trimStart())),p=d?H(R(d.text)).trimStart()[0].toUpperCase():void 0,x=null!==(t=null!==(r=n.divider)&&void 0!==r?r:n.icon)&&void 0!==t?t:h.cb,f=!!s&&("song"===n.subjectKind||"cover"===n.subjectKind),g=s&&/^cover \d+$/i.test(s.subject)?n.title:s&&rr(s.subject),m=f?{visibility:"hidden"}:void 0,v=qt(n.icon),b=v?{"--frame-color":c.Z[v]["--title-stroke"],"--dropcap-color":Ft[v]}:void 0;return(0,w.jsxs)(Oe,{id:n.id,style:b,ref:e=>l(n.id,e),children:[s&&(0,w.jsxs)(We,{children:[n.icon&&(0,w.jsx)(Fe,{src:(0,h.iF)(n.icon),alt:"",onError:(0,h.M8)(h.BN.icon)}),(0,w.jsxs)(Ye,{children:[n.openerIcon&&(0,w.jsx)(Ue,{src:(0,h.iF)(n.openerIcon),alt:"",onError:(0,h.M8)(h.BN.icon)}),(0,w.jsx)(sr,{text:null!==g&&void 0!==g?g:s.subject})]}),(0,w.jsx)(Me,{children:er(s.tagline)})]}),!a&&x!==h.xG&&(0,w.jsx)(or,{src:(0,h.IR)(x),style:lr(n.dividerStyle)}),(0,w.jsxs)(De,{children:[n.icon&&(0,w.jsx)(Rt,{src:(0,h.iF)(n.icon),alt:"",onError:(0,h.M8)(h.BN.icon)}),(0,w.jsx)(Ve,{style:m,"aria-hidden":f,children:(0,w.jsx)(sr,{text:`${Vt[n.subjectKind]}: ${n.subject}`})}),(0,w.jsx)(Ge,{style:m,"aria-hidden":f,children:(0,w.jsx)(sr,{text:n.title})}),(0,w.jsxs)(Je,{children:[(0,w.jsxs)(Qe,{children:["By"," ",n.authorLink?(0,w.jsx)("a",{href:n.authorLink,target:"_blank",rel:"noopener noreferrer",children:n.author}):n.author]}),(0,w.jsx)(u.A,{slug:n.id,label:"Copy link to this theory"})]})]}),(0,w.jsx)(nr,{entry:n,label:o}),(0,w.jsx)(ir,{entry:n}),(0,w.jsx)(ar,{entry:n,images:i}),n.body.map((e,t)=>((e,t,r,n,a)=>{switch(e.type){case"divider":{var i;const r=null!==(i=e.divider)&&void 0!==i?i:n;return r===h.xG?null:(0,w.jsx)(or,{src:(0,h.IR)(r),style:lr(e)},t)}case"heading":return(0,w.jsx)(tt,{children:(0,w.jsx)(cr,{text:e.text})},t);case"quote":return(0,w.jsxs)(st,{children:[er(e.text),e.cite&&(0,w.jsx)("cite",{children:e.cite})]},t);case"pagebreak":return(0,w.jsx)(dt,{},t);case"illustration":return(0,w.jsx)(pr,{block:e,images:r},t);default:{const r=R(e.text);return(0,w.jsxs)(rt,{children:[a&&(0,w.jsx)(dr,{letter:a}),Kt(a?T(r):r)]},t)}}})(e,t,i,x,e===d?p:void 0))]})}),xr=()=>{var e;(0,n.useEffect)(p,[]);const{data:t,loading:r,error:c}=(0,i.s)("/data/takonomiconData.json"),{data:u,loading:g}=(0,i.s)("/data/takonomiconImageSizes.json"),m=(0,n.useMemo)(()=>2*(Math.random()-.5)*.8,[]),v=null!==(e=null===t||void 0===t?void 0:t.book)&&void 0!==e?e:Gt,b=null===t||void 0===t?void 0:t.images,j=(0,n.useMemo)(()=>{var e;return null!==(e=null===t||void 0===t?void 0:t.entries)&&void 0!==e?e:[]},[t]),E=(0,n.useMemo)(()=>j.filter(e=>"main"===e.section),[j]),R=(0,n.useMemo)(()=>j.filter(e=>"standalone"===e.section),[j]),H=(0,n.useMemo)(()=>{const e=[];return E.forEach(t=>{const r=e[e.length-1];r&&r[0]===t.subject?r[1].push(t):e.push([t.subject,[t]])}),e},[E]),N=(0,n.useMemo)(()=>[...H.flatMap(e=>{let[,t]=e;return t}),...R],[H,R]),{play:T,muted:B,toggleMuted:P}=y(),[I,W]=(0,n.useState)(!1),[F,q]=(0,n.useState)(!1),[X,Y]=(0,n.useState)(null);(0,n.useEffect)(()=>{if(!F)return;const e=e=>{"Escape"===e.key&&(X?Y(null):q(!1))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[F,X]);const{frameRef:U,flowRef:ue,page:ve,pageCount:be,pagesPerSpread:ye,pageWidth:we,pageHeight:Ae,layoutWidth:Me,layoutHeight:We,scale:Fe,mobile:Ye,measured:Ue,layoutVersion:Oe,next:De,prev:Ge,turnTo:Ve,pageOf:Je,hasUserNavigated:Qe}=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;const a=(0,n.useRef)(null),i=(0,n.useRef)(null),o=(0,n.useRef)(null),l=(0,n.useRef)(null),[s,c]=(0,n.useState)(!1),[d,u]=(0,n.useState)(()=>Math.max(window.innerWidth/2,1)),[p,g]=(0,n.useState)(()=>Math.max(window.innerHeight,1)),[m,v]=(0,n.useState)(1),[b,y]=(0,n.useState)(0),[k,$]=(0,n.useState)(!1),[w,j]=(0,n.useState)(0),A=(0,n.useRef)(1/0),M=(0,n.useRef)(0),z=(0,n.useRef)(!document.fonts),C=((e,t,r)=>{const n=t-1;return!r||0===e||e>=n||e+1>=n?1:2})(b,m,!s),L=d/h.Lk.width,S=(0,n.useCallback)(()=>{var e,n;const o=a.current,l=i.current;if(!o||!l)return;const s=o.clientWidth,d=o.clientHeight;if(s<=0||d<=0)return;const p=s<768,m=!p,b=m?2:1;let k=s,w=d;if(t){const e=t.width*b,r=Math.min(s/e,d/t.height);k=e*r,w=t.height*r}k*=r,w=Math.round(w*r);const C=Math.round(k/b);null===(e=l.querySelector(`[${x}]`))||void 0===e||e.remove();const L=Array.from(l.querySelectorAll("[data-dropcap]"));L.forEach(e=>e.removeAttribute("data-displaced"));const S=L.map(e=>{const t=e.parentElement;return!!t&&Math.floor((e.offsetLeft+5)/h.Lk.width)!==Math.floor((t.offsetLeft+5)/h.Lk.width)});L.forEach((e,t)=>{S[t]&&e.setAttribute("data-displaced","")});let E=Math.max(1,Math.round(l.scrollWidth/h.Lk.width));if(E%2===1){const e=document.createElement("div");e.setAttribute(x,""),e.style.height="100%",e.style.setProperty("break-before","column"),e.style.setProperty("-webkit-column-break-before","always"),l.insertBefore(e,l.lastElementChild),E+=1}c(p),u(C),g(w),v(E),j(e=>e+1),!z.current||"loading"===(null===(n=document.fonts)||void 0===n?void 0:n.status)||Array.from(l.querySelectorAll("img")).some(e=>{let t=0;for(let r=e;r&&r!==l;r=r.offsetParent)t+=r.offsetLeft;return!(Math.floor(t/h.Lk.width+.02)>=20)&&(!e.complete||e.hasAttribute("data-lazy-src"))})||$(!0),y(e=>{const t=e>=A.current-1;A.current=E;const r=t?E-1:f(e,E,m);return M.current=r*h.Lk.width,l.scrollLeft=M.current,r})},[t,r]),E=(0,n.useCallback)(()=>{null===l.current&&(l.current=requestAnimationFrame(()=>{l.current=null,S()}))},[S]),R=(0,n.useCallback)(e=>{var t;if(null===(t=o.current)||void 0===t||t.disconnect(),o.current=null,a.current=e,e){const t=new ResizeObserver(()=>E());t.observe(e),o.current=t}},[E]),H=(0,n.useCallback)(e=>{const t=e.currentTarget;Math.abs(t.scrollLeft-M.current)>1&&(t.scrollLeft=M.current)},[]),N=(0,n.useCallback)(e=>{const t=i.current;t&&(t.removeEventListener("scroll",H),t.removeEventListener("load",E,!0),t.removeEventListener("error",E,!0)),i.current=e,e&&(e.addEventListener("scroll",H),e.addEventListener("load",E,!0),e.addEventListener("error",E,!0))},[E,H]);(0,n.useEffect)(()=>()=>{var e;null!==l.current&&cancelAnimationFrame(l.current),null===(e=o.current)||void 0===e||e.disconnect()},[]),(0,n.useEffect)(()=>{const e=document.fonts;if(!e)return;const t=()=>{z.current=!0,S()};return Promise.all([e.load('16px "Takohuyk"'),e.load('16px "InaDigits"',"0123456789"),e.load('16px "RevisonBooks"')]).then(()=>e.ready).then(t,t),e.addEventListener("loadingdone",E),()=>e.removeEventListener("loadingdone",E)},[S,E]),(0,n.useLayoutEffect)(()=>{const e=i.current;M.current=b*h.Lk.width,e&&(e.scrollLeft=M.current)},[b,d,m,C,s]);const T=(0,n.useRef)(!1),B=(0,n.useCallback)(function(t){let r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const a=i.current;if(!a||d<=0)return;r&&(T.current=!0);const o=f(t,m,!s);r&&o!==b&&(null===e||void 0===e||e(n)),M.current=o*h.Lk.width,a.scrollLeft=M.current,A.current=m,y(o)},[s,m,d,b,e]),P=(0,n.useCallback)(()=>B(b+C),[b,C,B]),I=(0,n.useCallback)(()=>B(b-1),[b,B]);(0,n.useEffect)(()=>{const e=e=>{const t=document.activeElement;(!t||"INPUT"!==t.tagName&&"TEXTAREA"!==t.tagName)&&("ArrowLeft"===e.key&&I(),"ArrowRight"===e.key&&P())};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[P,I]);const W=(0,n.useCallback)(e=>{const t=i.current;if(!e||!t||d<=0)return 0;let r=0;for(let n=e;n&&n!==t;n=n.offsetParent)r+=n.offsetLeft;return Math.max(0,Math.floor(r/h.Lk.width+.02))},[d]),F=(0,n.useCallback)(e=>{const t=i.current;return!t||d<=0?0:((e-t.getBoundingClientRect().left)/L+t.scrollLeft)/h.Lk.width},[d,L]),q=(0,n.useCallback)(e=>{const t=i.current;return!t||p<=0?0:(e-t.getBoundingClientRect().top)/p},[p]);return{frameRef:R,flowRef:N,page:b,pageCount:m,pagesPerSpread:C,pageWidth:d,pageHeight:p,layoutWidth:h.Lk.width,layoutHeight:h.Lk.height,scale:L,mobile:s,measured:k,layoutVersion:w,turnTo:B,next:P,prev:I,pageOf:W,pageXOf:F,pageYOf:q,hasUserNavigated:T,remeasure:E}}(T,h.qU,I?1.6:1),_e=(0,n.useRef)(null),Ke=(0,n.useCallback)(e=>{_e.current=e,ue(e)},[ue]),[Ze,et]=(0,n.useState)(20);(0,n.useEffect)(()=>{const e=_e.current;if(we<=0||!e)return;const t=Math.max(Ze,20*(Math.floor(ve/20)+1));if(t!==Ze)return void et(t);e.querySelectorAll("img[data-lazy-src]").forEach(e=>{var t;Je(e)>=Ze||(e.setAttribute("data-lazy-pending",""),e.src=null!==(t=e.dataset.lazySrc)&&void 0!==t?t:"",e.removeAttribute("data-lazy-src"))});const r=Array.from(e.querySelectorAll("img[data-lazy-pending]")).filter(e=>!e.complete);if(Ze>=be)return;let n=!1;return Promise.all(r.map(e=>new Promise(t=>{e.addEventListener("load",t,{once:!0}),e.addEventListener("error",t,{once:!0})}))).then(()=>{n||et(e=>e+20)}),()=>{n=!0}},[we,Oe,ve,be,Ze,Je]);const tt=(0,n.useRef)(Fe);tt.current=Fe;const rt=(0,n.useRef)(null);(0,n.useEffect)(()=>{var e,t;const r=rt.current;rt.current=ve;const n=_e.current;if(null===r||r===ve||!Ue||!n)return;if(null!==(e=(t=window).matchMedia)&&void 0!==e&&e.call(t,"(prefers-reduced-motion: reduce)").matches)return;const a=Xt[Math.floor(Math.random()*Xt.length)],i=ve>r?14:-14,o="fade"===a?n.animate([{opacity:.35},{opacity:1}],{duration:200,easing:"ease-out"}):"type"===a?n.animate([{clipPath:"inset(0 100% 0 0)"},{clipPath:"inset(0 0 0 0)"}],{duration:320,easing:"steps(14)"}):n.animate([{opacity:.35,transform:`translateX(${i}px) scale(${tt.current})`},{opacity:1,transform:`scale(${tt.current})`}],{duration:240,easing:"ease-out"});return()=>o.cancel()},[ve,Ue]);const nt=(0,n.useMemo)(()=>0===ve?"closed-front":ve+ye>=be?"closed-back":"open",[ve,ye,be]),at=Math.max(be-2,1),it=ve>0,ot=ve+ye<be,{active:lt,bookElRef:st,cursorRef:ct,edge:dt,onMouseMove:gt,onMouseLeave:mt,onClick:vt,onTouchStart:bt,onTouchEnd:yt,onTouchCancel:zt}=(e=>{let{mobile:t,canPrev:r,canNext:a,onPrev:i,onNext:o,disabled:l=!1}=e;const[s]=(0,n.useState)(k),c=!t&&s&&!l,d=(0,n.useRef)(null),u=(0,n.useRef)(null),[p,x]=(0,n.useState)(null),f=(0,n.useCallback)(e=>{const t=d.current;if(!t)return null;if(e.target.closest("a, button"))return null;const n=t.getBoundingClientRect();if(e.clientX<n.left)return r?"left":null;if(e.clientX>n.right)return a?"right":null;if(e.clientY<n.top||e.clientY>n.bottom)return null;const i=n.width*h.de;return e.clientX<n.left+i?r?"left":null:e.clientX>n.right-i&&a?"right":null},[r,a]),g=(0,n.useCallback)(e=>{if(!c)return;const t=f(e);x(t),t&&u.current&&(u.current.style.setProperty("--x",`${e.clientX}px`),u.current.style.setProperty("--y",`${e.clientY}px`))},[c,f]),m=(0,n.useCallback)(()=>x(null),[]),v=(0,n.useCallback)(e=>{var t;if(!c)return;if(null===(t=window.getSelection())||void 0===t||!t.isCollapsed)return;const r=f(e);"left"===r?i():"right"===r&&o()},[c,f,i,o]),b=(0,n.useRef)(null);return{onTouchStart:(0,n.useCallback)(e=>{const t=e.touches[0];b.current=1!==e.touches.length||l?null:{x:t.clientX,y:t.clientY}},[l]),onTouchEnd:(0,n.useCallback)(e=>{var t;const n=b.current;if(b.current=null,!n)return;if(null===(t=window.getSelection())||void 0===t||!t.isCollapsed)return;const l=e.changedTouches[0],s=l.clientX-n.x,c=l.clientY-n.y;Math.abs(s)<50||Math.abs(s)<1.5*Math.abs(c)||(s<0&&a?o():s>0&&r&&i())},[r,a,i,o]),onTouchCancel:(0,n.useCallback)(()=>{b.current=null},[]),active:c,bookElRef:d,cursorRef:u,edge:c?p:null,onMouseMove:g,onMouseLeave:m,onClick:v}})({mobile:Ye,canPrev:it,canNext:ot,onPrev:Ge,onNext:De,disabled:I}),{tiltX:Ct,tiltY:Lt,onMouseMove:St,onMouseLeave:Et}=(e=>{const[t]=(0,n.useState)($),[r,a]=(0,n.useState)({x:0,y:0}),i=e&&t,o=(0,n.useRef)(i);o.current=i,(0,n.useEffect)(()=>{i||a({x:0,y:0})},[i]);const l=(0,n.useCallback)(e=>{if(!o.current)return;const t=e.currentTarget.getBoundingClientRect(),r=(e.clientX-t.left-t.width/2)/(t.width/2),n=(e.clientY-t.top-t.height/2)/(t.height/2),i=Math.max(-1,Math.min(1,r)),l=Math.max(-1,Math.min(1,n));a({x:5*-l,y:5*i})},[]),s=(0,n.useCallback)(()=>a({x:0,y:0}),[]);return{tiltX:r.x,tiltY:r.y,onMouseMove:l,onMouseLeave:s}})(!Ye&&!I&&"open"!==nt),{setTheme:Rt}=(0,l.D)();(0,n.useEffect)(()=>{const e=localStorage.getItem("theme");"1"===localStorage.getItem(s.z)||null!==e&&"Standard"!==e||Rt("AbyssalHymn")},[Rt]);const[It,Ft]=(0,n.useState)(Dt),[Vt,Jt]=(0,n.useState)(!1),[Qt,Kt]=(0,n.useState)(!1),rr=(0,n.useRef)(null),nr=(0,n.useRef)(null);(0,n.useEffect)(()=>{if(!Qt)return;const e=e=>{var t;null!==(t=rr.current)&&void 0!==t&&t.contains(e.target)||Kt(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[Qt]);const ar=(0,n.useRef)(null);(0,n.useEffect)(()=>{if(!Vt)return;const e=e=>{var t;null!==(t=ar.current)&&void 0!==t&&t.contains(e.target)||Jt(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[Vt]);const{hash:ir,search:or}=(0,a.zy)(),lr=(0,n.useRef)({}),[cr,dr]=(0,n.useState)({}),pr=(0,n.useCallback)((e,t)=>{lr.current[e]=t},[]),[xr,fr]=(0,n.useState)(Ut);(0,n.useEffect)(()=>{var e;if(Qe.current||be<=1||!Ue)return;const t=new URLSearchParams(or).get("page");if(null!==t&&""!==t.trim()){const e=Number(t);if(Number.isFinite(e))return void Ve(Math.min(Math.max(Math.round(e),0),be-1),!1)}const r=ir.replace("#",""),n=null!==(e=lr.current[r])&&void 0!==e?e:null;if(n)return void Ve(Je(n),!1);if(!xr)return;const a=lr.current[xr.id];a&&Ve(Je(a)+xr.offset,!1)},[ir,or,be,Ue,Je,Ve,Qe,xr]),(0,n.useEffect)(()=>{if(be<=1||!Ue)return;const e={};N.forEach(t=>{const r=lr.current[t.id];r&&(e[t.id]=Je(r))}),dr(e)},[be,Ue,Oe,Je,N]);const gr=(0,n.useMemo)(()=>{var e;if(be<=1)return null;const t=[...N].reverse().find(e=>Je(lr.current[e.id])<=ve);return null!==(e=null===t||void 0===t?void 0:t.id)&&void 0!==e?e:null},[ve,be,Oe,Je,N]),mr=(0,n.useMemo)(()=>{for(let r=N.findIndex(e=>e.id===gr);r>=0;r--){var e,t;const n=N[r],a=null!==(e=Wt[n.id])&&void 0!==e?e:qt(null!==(t=n.icon)&&void 0!==t?t:n.openerIcon);if(a)return a}},[gr,N]);(0,n.useEffect)(()=>{mr&&Rt(mr)},[mr,Rt]);const vr=(0,n.useMemo)(()=>{if(!xr||be<=1)return null;const e=lr.current[xr.id];return e?Je(e)+xr.offset:null},[xr,be,Oe,Je]),br=null!==vr&&vr>=ve&&vr<ve+ye,yr="open"===nt&&!!gr,kr=xr?br?"Remove bookmark":"Jump to your bookmark":"Bookmark this page",[$r,wr]=(0,n.useState)(!1);return(0,w.jsx)(ur.Provider,{value:u,children:(0,w.jsxs)(O,{children:[(0,w.jsx)(V,{}),(0,w.jsxs)(D,{children:[(0,w.jsx)(G,{children:(0,w.jsx)(o.Pn,{})}),(0,w.jsx)(J,{onClick:P,title:B?"Unmute page sounds":"Mute page sounds",children:B?(0,w.jsx)(M,{}):(0,w.jsx)(A,{})}),(0,w.jsxs)(wt,{ref:ar,children:[(0,w.jsx)(jt,{onClick:()=>Jt(e=>!e),title:"Choose bookmark","aria-haspopup":"true","aria-expanded":Vt,children:(0,w.jsx)(L,{})}),Vt&&(0,w.jsx)(At,{children:h.W3.map((e,t)=>(0,w.jsx)(Mt,{$src:e.src,$ratio:e.ratio,$active:t===It,onClick:()=>(e=>{Ft(e),Jt(!1);try{localStorage.setItem(Ot,String(e))}catch{return}})(t),"aria-label":e.label,"aria-pressed":t===It},e.src))})]}),(0,w.jsx)(Q,{onClick:()=>W(e=>!e),title:I?"Zoom out":"Zoom in","aria-pressed":I,children:I?(0,w.jsx)(C,{}):(0,w.jsx)(z,{})}),(0,w.jsx)(_,{onClick:()=>q(!0),title:"Artwork gallery","aria-label":"Artwork gallery",children:(0,w.jsx)(S,{})}),F&&(0,w.jsx)(K,{onClick:()=>{X?Y(null):q(!1)},children:X?(0,w.jsx)(ie,{src:X,alt:""}):(0,w.jsxs)(Z,{onClick:e=>e.stopPropagation(),children:[(0,w.jsx)(ee,{"aria-label":"Close gallery",onClick:()=>q(!1),children:"\xd7"}),(0,w.jsx)(te,{children:"Artwork gallery"}),h.cS.map(e=>(0,w.jsxs)("section",{children:[(0,w.jsx)(re,{children:e.title}),(0,w.jsx)(ne,{children:e.items.map(e=>(0,w.jsx)(ae,{title:e.label,onClick:()=>Y(e.src),children:(0,w.jsx)("img",{src:e.src,alt:e.label,loading:"lazy"})},e.src))})]},e.title))]})}),(0,w.jsxs)(pt,{ref:rr,children:[(0,w.jsxs)(ht,{onClick:()=>Kt(e=>!e),title:"Jump to page","aria-haspopup":"true","aria-expanded":Qt,children:[0===ve?"Cover":ve>=be-1?"Back":ve," /"," ",at]}),Qt&&(0,w.jsxs)(Ht,{children:[(0,w.jsxs)(Nt,{onSubmit:e=>{e.preventDefault();const t=Number(new FormData(e.currentTarget).get("page"));Number.isFinite(t)&&(Ve(Math.min(Math.max(Math.round(t),1),at),!0,!0),Kt(!1))},children:[(0,w.jsx)("label",{htmlFor:"jump-page",children:"Page"}),(0,w.jsx)("input",{id:"jump-page",name:"page",type:"number",min:1,max:at,defaultValue:Math.min(Math.max(ve,1),at),autoFocus:!0}),(0,w.jsx)(Tt,{type:"submit",children:"Go"})]}),(0,w.jsx)(Tt,{type:"button",onClick:()=>{Ve(Je(nr.current),!0,!0),Kt(!1)},children:"Back to index"})]})]})]}),r||g?(0,w.jsx)(d.c,{fullPage:!0}):c?(0,w.jsxs)(xt,{children:["Error loading the lore book: ",c.message]}):(0,w.jsxs)(se,{$hideCursor:!!dt,onMouseMove:gt,onMouseLeave:mt,onClick:vt,onTouchStart:bt,onTouchEnd:yt,onTouchCancel:zt,children:[!Ue&&(0,w.jsx)(ce,{children:(0,w.jsx)(d.c,{fullPage:!0})}),(0,w.jsx)(de,{$width:we*ye}),lt&&(0,w.jsx)(oe,{ref:ct,src:h.eX[2],alt:"",$side:"right"===dt?"right":"left",$visible:!!dt}),(0,w.jsx)(pe,{$mobile:Ye,$bookState:nt,$pageWidth:we,$tilt:m,$zoomed:I,ref:U,children:(0,w.jsxs)(he,{$tiltX:Ct,$tiltY:Lt,$zoomed:I,onMouseMove:St,onMouseLeave:Et,children:[(0,w.jsxs)(xe,{ref:st,$width:we*ye,$height:Ae,$zoomed:I,children:[lt&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(fe,{$side:"left",$active:"left"===dt}),(0,w.jsx)(fe,{$side:"right",$active:"right"===dt})]}),2===ye&&(0,w.jsx)(ge,{}),(0,w.jsxs)(me,{children:[(0,w.jsx)($e,{$pageWidth:we,$pageHeight:Ae,$pageCount:be,$offset:ve*we}),(0,w.jsxs)(ke,{ref:Ke,$layoutWidth:Me,$layoutHeight:We,$spread:ye,$scale:Fe,$typography:v.typography,children:[(0,w.jsx)(je,{$cover:h.ID,role:"img","aria-label":v.title}),(0,w.jsxs)(ze,{children:[(0,w.jsx)(Ce,{children:(0,w.jsx)(sr,{text:v.forewordHeading})}),(0,w.jsx)(Se,{children:er(v.foreword)})]}),(0,w.jsxs)(ze,{children:[(0,w.jsx)(Ce,{children:(0,w.jsx)(sr,{text:v.disclaimerHeading})}),(0,w.jsx)(Le,{children:er(v.disclaimer)}),(0,w.jsx)(Ce,{children:(0,w.jsx)(sr,{text:v.legendHeading})}),(0,w.jsx)(Ee,{children:_t.map(e=>(0,w.jsxs)(Re,{children:[(0,w.jsx)(tr,{status:e,label:v.statusLabels[e]}),(0,w.jsx)(He,{children:er(v.statusMeanings[e])})]},e))})]}),(0,w.jsxs)(Ne,{ref:nr,children:[(0,w.jsx)(Ce,{children:(0,w.jsx)(sr,{text:v.contentsHeading})}),(0,w.jsx)(Te,{children:N.map(e=>(0,w.jsxs)(Be,{onClick:()=>{var t;return Ve(null!==(t=cr[e.id])&&void 0!==t?t:0,!0,!0)},children:[(0,w.jsx)(Pe,{children:e.title}),(0,w.jsx)(Ie,{children:void 0!==cr[e.id]?cr[e.id]:""})]},e.id))})]}),H.map(e=>{let[t,r]=e;return(0,w.jsx)(n.Fragment,{children:r.map((e,r)=>{var n,a,i;return(0,w.jsx)(hr,{entry:e,first:0===r,images:b,statusLabel:v.statusLabels[null!==(n=e.status)&&void 0!==n?n:"thought"],registerRef:pr,opener:0===r?{subject:t,tagline:null!==(a=null===(i=v.taglines)||void 0===i?void 0:i[t])&&void 0!==a?a:v.tagline}:void 0},e.id)})},r[0].id)}),R.length>0&&(0,w.jsx)(qe,{children:(0,w.jsx)(Xe,{children:(0,w.jsx)(sr,{text:v.standaloneHeading})})}),R.map((e,t)=>{var r;return(0,w.jsx)(hr,{entry:e,first:0===t,images:b,statusLabel:v.statusLabels[null!==(r=e.status)&&void 0!==r?r:"thought"],registerRef:pr},e.id)}),v.credits.split("||").map((e,t)=>(0,w.jsxs)(ze,{children:[0===t&&(0,w.jsx)(Ce,{children:(0,w.jsx)(sr,{text:v.creditsHeading})}),e.split("|").map((e,t)=>(0,w.jsx)(Se,{$heading:/^[*][*][^*]+[*][*]$/.test(e.trim()),children:er(e.trim())},t))]},t)),Zt.map((e,t)=>(0,w.jsx)(Bt,{children:e.map((e,r)=>{const n=`doodle-page-${t}-${r}`;return(0,w.jsx)(Pt,{style:{"--dx":20*((0,h.LQ)(n+"-x")-.5)+"%","--dy":20*((0,h.LQ)(n+"-y")-.5)+"%","--rot":30*((0,h.LQ)(n+"-r")-.5)+"deg"},children:(0,w.jsx)("img",{"data-lazy-src":e.src,width:e.width,height:e.height,alt:"",decoding:"async",onError:(0,h.M8)(h.BN.art)})},e.src)})},`doodles-${t}`)),(0,w.jsx)(ft,{$src:h.sc})]})]}),2===ye?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(ut,{$corner:"left",children:ve}),(0,w.jsx)(ut,{$corner:"right",children:ve+1})]}):"open"===nt&&(0,w.jsx)(ut,{$corner:"right",children:ve})]}),yr&&(0,w.jsx)(kt,{$hasBookmark:!!xr,$revealed:br,$justPlaced:$r,$mobile:Ye,onAnimationEnd:()=>wr(!1),onClick:()=>{if(xr&&br)return fr(null),void localStorage.removeItem(Yt);if(xr)return void(null!==vr&&Ve(vr,!0,!0));if(!gr)return;const e=lr.current[gr];if(!e)return;const t={id:gr,offset:ve-Je(e)};fr(t),localStorage.setItem(Yt,JSON.stringify(t)),wr(!0)},"aria-label":kr,"aria-pressed":!!xr,children:(0,w.jsx)($t,{$src:h.W3[It].src,$ratio:h.W3[It].ratio})})]})}),(0,w.jsx)(le,{$side:"left",onClick:Ge,disabled:!it,"aria-label":"Previous page",children:(0,w.jsx)("i",{className:"fa fa-chevron-left","aria-hidden":"true"})}),(0,w.jsx)(le,{$side:"right",onClick:De,disabled:!ot,"aria-label":"Next page",children:(0,w.jsx)("i",{className:"fa fa-chevron-right","aria-hidden":"true"})})]})]})})}},6088(e,t,r){r.d(t,{s:()=>a});var n=r(5043);const a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const[r,a]=(0,n.useState)(null),[i,o]=(0,n.useState)(!0),[l,s]=(0,n.useState)(null),c=async r=>{o(!0),s(null);try{const n=await fetch(e,{...t,signal:r});if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);const i=await n.json();if(null!==r&&void 0!==r&&r.aborted)return;a(i)}catch(n){if(null!==r&&void 0!==r&&r.aborted)return;s(n)}finally{null!==r&&void 0!==r&&r.aborted||o(!1)}};(0,n.useEffect)(()=>{const e=new AbortController;return c(e.signal),()=>e.abort()},[e,JSON.stringify(t)]);return{data:r,loading:i,error:l,refetch:()=>{c()}}}},9944(e,t,r){r.d(t,{L:()=>n,c:()=>a});const n=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];const n=t.filter(Boolean).join(" ");return`${n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,40)}-${(e=>{let t=2166136261;for(let r=0;r<e.length;r++)t^=e.charCodeAt(r),t=Math.imul(t,16777619);return(t>>>0).toString(36)})(n)}`},a=async e=>{const t=`${window.location.origin}${window.location.pathname}#${e}`;try{var r;return await(null===(r=navigator.clipboard)||void 0===r?void 0:r.writeText(t)),!0}catch{return!1}}}}]);
//# sourceMappingURL=354.9a4ca631.chunk.js.map
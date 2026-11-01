"use strict";(globalThis.webpackChunkina=globalThis.webpackChunkina||[]).push([[377],{2377(e,t,n){n.r(t),n.d(t,{default:()=>T});var o=n(5043),i=n(1688),a=n(403),r=n(2375),s=n(4530),c=n(7114),l=n(1472),d=n(9773),u=n(2958),m=n(1194),h=n(5019),p=n(579);const f=1e4,y=3e3,g=6e3,w=a.DU`
  @font-face {
    font-family: "Takohuyk";
    src: url(${u.FU}) format("truetype");
    font-display: block;
  }
`,b=a.Ay.div`
  position: relative;
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: var(--background);
`,v=a.Ay.div`
  position: fixed;
  inset: 0;
  z-index: ${h.fE.intro};
  pointer-events: ${e=>{let{$on:t}=e;return t?"auto":"none"}};
  display: flex;
  align-items: center;
  justify-content: center;
`,k=a.Ay.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  background: #000;
  will-change: opacity;
  opacity: ${e=>{let{$on:t}=e;return t?1:0}};
  transition: opacity ${g}ms ease-in-out;
`,x=a.Ay.button`
  all: unset;
  cursor: pointer;
  will-change: opacity;
  opacity: ${e=>{let{$on:t}=e;return t?1:0}};
  transition:
    opacity ${3e3}ms ease-in-out,
    transform 0.4s ease,
    filter 0.4s ease;
  filter: drop-shadow(0 0 24px rgba(171, 189, 240, 0.35));

  &:hover,
  &:focus-visible {
    transform: translateY(-8px);
    filter: drop-shadow(0 0 36px rgba(232, 201, 255, 0.7));
  }
`,$=a.Ay.img`
  display: block;
  height: 70vh;
  width: auto;
  aspect-ratio: ${u.sj.width} / ${u.sj.height};
  border-radius: 4px;
`,A=a.Ay.p`
  position: absolute;
  ${e=>{let{$edge:t}=e;return t}}: 8vh;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0 24px;
  text-align: center;
  font-family: "Takohuyk", "Mulish", sans-serif;
  font-size: clamp(18px, 3.2vh, 32px);
  letter-spacing: 0.12em;
  color: ${e=>{let{$on:t}=e;return t?"#eef1ff":"rgba(238, 241, 255, 0)"}};
  -webkit-font-smoothing: antialiased;
  transition: color ${2400}ms ease-in-out
    ${e=>{let{$on:t}=e;return t?1800:0}}ms;
  pointer-events: none;
`,j=e=>"undefined"!==typeof CSSTransition&&e instanceof CSSTransition,T=()=>{const e=(0,i.W6)(),{muted:t}=(0,l.d2)(),a=(0,d.G)({muted:t,autoPlay:!0,volume:.1}),[h,T]=(0,o.useState)("idle"),M=(0,o.useRef)(1);(0,o.useEffect)(()=>{var e;null===(e=document.fonts)||void 0===e||e.load('16px "Takohuyk"').catch(()=>{})},[]),(0,o.useEffect)(()=>{var e,t,o;const i=null!==(e=null===(t=(o=window).matchMedia)||void 0===t?void 0:t.call(o,"(prefers-reduced-motion: reduce)").matches)&&void 0!==e&&e,r=document.documentElement,s=document.body.style.overflow,c=r.style.overflow,l=()=>{document.body.style.overflow="hidden",r.style.overflow="hidden"};let d=0,m=0,h=0,p=0,y=!1;const w=(()=>{return Promise.allSettled([n.e(354).then(n.bind(n,9354)),fetch("/data/takonomiconData.json").then(e=>e.json()),(e=u.ID,new Promise(t=>{const n=new Image;n.onload=n.onerror=t,n.src=e}))]);var e})(),b=()=>{1!==M.current&&(document.getAnimations().forEach(e=>{j(e)||(e.playbackRate=M.current)}),d=requestAnimationFrame(b))},v=e=>{const t=performance.now(),n=o=>{const i=Math.min(1,(o-t)/e);a.current&&(a.current.playbackRate=1-.5*i),i<1&&(p=requestAnimationFrame(n))};p=requestAnimationFrame(n)},k=async()=>{await w,y||(T("dark"),h=window.setTimeout(()=>{cancelAnimationFrame(d),T("book")},g))};return m=i?window.setTimeout(()=>{l(),M.current=0,b(),v(g),k()},f):window.setTimeout(()=>{l(),T("slowing");const e=performance.now();v(10200);const t=n=>{const o=Math.min(1,(n-e)/4200);M.current=Math.max(0,(1-o)*(1-o)),document.getAnimations().forEach(e=>{j(e)||(e.playbackRate=M.current)}),o<1?d=requestAnimationFrame(t):(M.current=0,b(),k())};d=requestAnimationFrame(t)},f),()=>{y=!0,window.clearTimeout(m),window.clearTimeout(h),cancelAnimationFrame(d),cancelAnimationFrame(p),M.current=1,document.body.style.overflow=s,r.style.overflow=c}},[a]);const F="book"===h;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(w,{}),(0,p.jsx)("audio",{ref:a,src:"/\u660e\u65e5\u3082\u6674\u308c\u308b\u3068\u3044\u3044\u306d.mp3",loop:!0,preload:"auto",style:{display:"none"}}),!F&&(0,p.jsxs)(b,{children:[(0,p.jsx)(c.A,{glitchStartMs:y,glitchMs:f}),(0,p.jsx)(s.A,{glitchStartMs:y,glitchMs:f}),(0,p.jsx)(r.A,{glitchStartMs:y,glitchMs:f})]}),(0,p.jsxs)(v,{$on:"dark"===h||F,children:[(0,p.jsx)(k,{$on:"dark"===h||F}),(0,p.jsx)(A,{$edge:"top",$on:F,children:"Magic pages open wide"}),(0,p.jsx)(x,{$on:F,onClick:()=>{(0,m.fT)(),e.push("/takonomicon")},disabled:!F,"aria-label":"Open the Tako Lore Book",children:(0,p.jsx)($,{src:u.Cy,alt:"",decoding:"sync"})}),(0,p.jsx)(A,{$edge:"bottom",$on:F,children:"Spilling secrets from inside"})]})]})}}}]);
//# sourceMappingURL=377.3a2352c8.chunk.js.map
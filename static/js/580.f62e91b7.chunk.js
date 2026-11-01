"use strict";(globalThis.webpackChunkina=globalThis.webpackChunkina||[]).push([[580],{4709(e,r,a){a.d(r,{Fp:()=>s,Pn:()=>h,lU:()=>x,uW:()=>c});var t=a(403),i=a(2582),n=a(5043),o=a(5019),l=a(579);const s=t.Ay.nav`
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
`,d=(0,t.Ay)(i.k2)`
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
`,c=t.Ay.button`
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
`,p=t.Ay.div`
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
`,h=()=>(0,l.jsx)(d,{exact:!0,to:"/",children:(0,l.jsx)("i",{className:"fa fa-home"})}),x=e=>{let{label:r,children:a}=e;const[t,i]=(0,n.useState)(!1);return(0,l.jsxs)("div",{style:{flex:"0 0 auto",position:"relative"},children:[(0,l.jsxs)(c,{"aria-label":r,title:r,onClick:()=>i(e=>!e),children:[(0,l.jsx)("i",{className:"fa fa-question-circle","aria-hidden":"true"}),(0,l.jsx)("span",{className:"btn-text",children:"Help"})]}),t&&(0,l.jsx)(p,{onClick:()=>i(!1),children:a})]})}},3402(e,r,a){a.d(r,{W:()=>o});a(5043);var t=a(9773),i=a(1472),n=a(579);const o=e=>{let{src:r,pauseOnVideo:a=!1}=e;const{muted:o,videoPlaying:l}=(0,i.d2)(),s=(0,t.G)({muted:o,autoPlay:!0,videoPaused:a&&l});return(0,n.jsx)("audio",{ref:s,src:""+r,loop:!0,preload:"auto",style:{display:"none"}})}},8580(e,r,a){a.r(r),a.d(r,{default:()=>b});var t=a(5043),i=a(4709),n=a(403),o=a(5019),l=a(984);const s=n.Ay.div`
  min-height: 100vh;
  background: var(--background);
`,d=n.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 18px;
  margin: 48px auto;
  width: 90%;
`,c=n.Ay.div`
  background: var(--dark-highlight);
  border-radius: 12px;
  box-shadow: 0 4px 16px #0003;
  padding: 18px;
  text-align: center;
`,p=n.Ay.img`
  width: min(100%, 34rem);
  border-radius: 8px;
  cursor: pointer;
  box-shadow: ${o.Pr};
`,h=n.Ay.h3`
  margin: 16px 0 8px 0;
  color: var(--light-highlight);
  font-size: 1.25em;
`,x=n.Ay.p`
  color: var(--text-color);
  font-size: 1em;
`,g=n.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: ${o.fE.backdrop};
`,u=n.Ay.img`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 12px;
  box-shadow: 0 4px 32px #0008;
  z-index: ${o.fE.modal};
`;var m=a(3402),v=a(579);const f=[{src:"/takollage.png",title:"Tako Takollage 4th Anniversary",description:"A takollage made of takos, was made during the 4th anniversary."},{src:"/EvermoreCollage.png",title:"Evermore Collage",description:"A collage celebrating Ina's Evermore 3D live, made out of her streams thumbnails!"},{src:"/inaversary6collage.png",title:"Ina's 6th Anniversary Collage",description:"A collage shaped like a giant 6, made of moments from Ina's 6th anniversary year."}],b=()=>{const[e,r]=(0,t.useState)(null);return(0,v.jsxs)(s,{children:[(0,v.jsxs)(i.Fp,{children:[(0,v.jsx)(i.Pn,{}),(0,v.jsx)(l.ue,{children:"Collages"}),(0,v.jsx)(i.lU,{label:"Show collages usage hint",children:(0,v.jsx)("p",{children:"Click a collage to open it full-size."})})]}),(0,v.jsx)(m.W,{src:"/ensolarado.mp3"}),(0,v.jsx)(d,{children:f.map((e,a)=>(0,v.jsxs)(c,{children:[(0,v.jsx)(p,{src:e.src,alt:e.title,onClick:()=>r(e.src)}),(0,v.jsx)(h,{children:e.title}),(0,v.jsx)(x,{children:e.description})]},a))}),e&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(g,{onClick:()=>r(null)}),(0,v.jsx)(u,{src:e,alt:"Collage",onClick:()=>r(null)})]})]})}},9773(e,r,a){a.d(r,{G:()=>i});var t=a(5043);const i=e=>{let{muted:r,volume:a=.1,autoPlay:i=!1,videoPaused:n=!1}=e;const o=(0,t.useRef)(null);return(0,t.useEffect)(()=>{o.current&&(o.current.volume=a)},[a]),(0,t.useEffect)(()=>{const e=o.current;e&&(n||r?e.pause():e.paused&&e.play().catch(()=>{}))},[r,n]),(0,t.useEffect)(()=>{if(!i)return;let e=null,a=!1;return o.current&&!r&&o.current.play().catch(()=>{a||(e=()=>{o.current&&!r&&o.current.play().catch(()=>{}),e&&window.removeEventListener("click",e)},window.addEventListener("click",e))}),()=>{a=!0,e&&window.removeEventListener("click",e)}},[i,r]),o}}}]);
//# sourceMappingURL=580.f62e91b7.chunk.js.map
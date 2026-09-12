"use strict";(globalThis.webpackChunkina=globalThis.webpackChunkina||[]).push([[495],{4709(e,r,t){t.d(r,{Fp:()=>n,JY:()=>d,Pn:()=>p,uW:()=>s});var a=t(403),i=t(2582),o=(t(5043),t(579));const n=a.Ay.nav`
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
  z-index: 100;
  flex: 0 1;
  padding: 0.25rem 1rem;
  text-align: left;
  font: normal normal normal 30px/34px montserrat;
  letter-spacing: 0;
  justify-content: space-between;
  align-items: center;
  &.mobile {
    font: normal normal normal 20px/25px Montserrat;
  }
  bottom-shadow: 0px 4px 4px var(--shadow);

  @media only screen and (max-width: 700px) {
    font: normal normal normal 22px/26px montserrat;
  }
`,l=a.Ay.button`
  possition: fixed;
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
`,s=a.Ay.button`
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
  @media only screen and (max-width: 700px) {
    padding: 8px 10px;
    gap: 0;
    .btn-text {
      display: none;
    }
  }
  &:hover {
    opacity: 0.8;
  }
`,d=a.Ay.div`
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
  z-index: 100;
  min-width: 260px;
  max-width: min(90vw, 460px);
  max-height: 80vh;
  overflow-y: auto;
`,p=()=>(0,o.jsx)(l,{children:(0,o.jsx)(i.k2,{exact:!0,to:"/",children:(0,o.jsx)("i",{className:"fa fa-home"})})})},495(e,r,t){t.r(r),t.d(r,{default:()=>b});var a=t(5043),i=t(2154),o=t(1472),n=t(4709),l=t(403),s=t(984);const d=l.Ay.div`
  min-height: 100vh;
  background: var(--background);
`,p=l.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 18px;
  margin: 48px auto;
  width: 90%;
`,c=l.Ay.div`
  background: var(--dark-highlight);
  border-radius: 12px;
  box-shadow: 0 4px 16px #0003;
  padding: 18px;
  text-align: center;
`,h=l.Ay.img`
  width: min(100%, 34rem);
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 2px 8px #0002;
`,x=l.Ay.h3`
  margin: 16px 0 8px 0;
  color: var(--light-highlight);
  font-size: 1.25em;
`,g=l.Ay.p`
  color: var(--text-color);
  font-size: 1em;
`,u=l.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`,m=l.Ay.img`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 12px;
  box-shadow: 0 4px 32px #0008;
  z-index: 1001;
`;var v=t(579);const f=[{src:"/takollage.png",title:"Tako Takollage 4th Anniversary",description:"A takollage made of takos, was made during the 4th anniversary."},{src:"/EvermoreCollage.png",title:"Evermore Collage",description:"A collage celebrating Ina's Evermore 3D live, made out of her streams thumbnails!"}],b=()=>{const[e,r]=(0,a.useState)(null),[t,l]=(0,a.useState)(!1),{muted:b}=(0,o.d2)(),k=(0,i.G)({muted:b,autoPlay:!0});return(0,v.jsxs)(d,{children:[(0,v.jsxs)(n.Fp,{children:[(0,v.jsx)(n.Pn,{}),(0,v.jsx)(s.ue,{children:"Collages"}),(0,v.jsxs)("div",{style:{flex:"0 0 auto",position:"relative"},children:[(0,v.jsxs)(n.uW,{"aria-label":"Show collages usage hint",onClick:()=>l(e=>!e),title:"Show collages usage hint",children:[(0,v.jsx)("i",{className:"fa fa-question-circle","aria-hidden":"true"}),(0,v.jsx)("span",{className:"btn-text",children:"Help"})]}),t&&(0,v.jsx)(n.JY,{onClick:()=>l(!1),children:(0,v.jsx)("p",{children:"Click a collage to open it full-size."})})]})]}),(0,v.jsx)("audio",{ref:k,src:"/ensolarado.mp3",loop:!0,preload:"auto",style:{display:"none"}}),(0,v.jsx)(p,{children:f.map((e,t)=>(0,v.jsxs)(c,{children:[(0,v.jsx)(h,{src:e.src,alt:e.title,onClick:()=>r(e.src)}),(0,v.jsx)(x,{children:e.title}),(0,v.jsx)(g,{children:e.description})]},t))}),e&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(u,{onClick:()=>r(null)}),(0,v.jsx)(m,{src:e,alt:"Collage",onClick:()=>r(null)})]})]})}},2154(e,r,t){t.d(r,{G:()=>i});var a=t(5043);const i=e=>{let{muted:r,volume:t=.1,autoPlay:i=!1,videoPaused:o=!1}=e;const n=(0,a.useRef)(null);return(0,a.useEffect)(()=>{n.current&&(n.current.volume=t)},[t]),(0,a.useEffect)(()=>{const e=n.current;e&&(o?e.pause():(r||e.paused)&&(r?e.pause():e.play().catch(()=>{})))},[r,o]),(0,a.useEffect)(()=>{if(!i)return;let e=null,t=!1;return n.current&&!r&&n.current.play().catch(()=>{t||(e=()=>{n.current&&!r&&n.current.play().catch(()=>{}),e&&window.removeEventListener("click",e)},window.addEventListener("click",e))}),()=>{t=!0,e&&window.removeEventListener("click",e)}},[i,r]),n}}}]);
//# sourceMappingURL=495.5cdaa923.chunk.js.map
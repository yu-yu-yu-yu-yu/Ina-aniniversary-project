"use strict";(globalThis.webpackChunkina=globalThis.webpackChunkina||[]).push([[495],{4709(t,r,e){e.d(r,{Fp:()=>n,JY:()=>p,Pn:()=>x,uW:()=>l});var i=e(403),a=e(2582),o=(e(5043),e(579));const n=i.Ay.nav`
  background: transparent linear-gradient(180deg, var(--light-background) 90%, var(--dark-highlight) 100%) 0% 0% no-repeat padding-box;
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
`,d=i.Ay.button`
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
`,l=i.Ay.button`
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
    .btn-text { display: none; }
  }
  &:hover {
    opacity: 0.8;
  }
`,p=i.Ay.div`
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
`,x=()=>(0,o.jsx)(d,{children:(0,o.jsx)(a.k2,{exact:!0,to:"/",children:(0,o.jsx)("i",{className:"fa fa-home"})})})},495(t,r,e){e.r(r),e.d(r,{default:()=>v});var i=e(5043),a=e(2154),o=e(1472),n=e(4709),d=e(403),l=e(984);const p=d.Ay.div`
  min-height: 100vh;
  background: var(--background);
`,x=d.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 18px;
  margin: 48px auto;
  width: 90%;
`,s=d.Ay.div`
  background: var(--dark-highlight);
  border-radius: 12px;
  box-shadow: 0 4px 16px #0003;
  padding: 18px;
  text-align: center;
`,h=d.Ay.img`
  width: 25rem;
  max-width: 100%;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 2px 8px #0002;
`,g=d.Ay.h3`
  margin: 16px 0 8px 0;
  color: var(--light-highlight);
  font-size: 1.25em;
`,c=d.Ay.p`
  color: var(--text-color);
  font-size: 1em;
`,m=d.Ay.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.7);
  z-index: 1000;
`,f=d.Ay.img`
  position: fixed;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 12px;
  box-shadow: 0 4px 32px #0008;
  z-index: 1001;
`;var u=e(579);const b=[{src:"/takollage.png",title:"Tako Takollage 4th Anniversary",description:"A takollage made of takos, was made during the 4th anniversary."},{src:"/EvermoreCollage.png",title:"Evermore Collage",description:"A collage celebrating Ina's Evermore 3D live, made out of her streams thumbnails!"}],v=()=>{const[t,r]=(0,i.useState)(null),{muted:e}=(0,o.d2)(),d=(0,a.G)({muted:e,autoPlay:!0});return(0,u.jsxs)(p,{children:[(0,u.jsxs)(n.Fp,{children:[(0,u.jsx)(n.Pn,{}),(0,u.jsx)(l.ue,{children:"Collages"})]}),(0,u.jsx)("audio",{ref:d,src:"/ensolarado.mp3",loop:!0,preload:"auto",style:{display:"none"}}),(0,u.jsx)(x,{children:b.map((t,e)=>(0,u.jsxs)(s,{children:[(0,u.jsx)(h,{src:t.src,alt:t.title,onClick:()=>r(t.src)}),(0,u.jsx)(g,{children:t.title}),(0,u.jsx)(c,{children:t.description})]},e))}),t&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(m,{onClick:()=>r(null)}),(0,u.jsx)(f,{src:t,alt:"Collage",onClick:()=>r(null)})]})]})}},2154(t,r,e){e.d(r,{G:()=>a});var i=e(5043);const a=t=>{let{muted:r,volume:e=.1,autoPlay:a=!1,videoPaused:o=!1}=t;const n=(0,i.useRef)(null);return(0,i.useEffect)(()=>{n.current&&(n.current.volume=e)},[e]),(0,i.useEffect)(()=>{const t=n.current;t&&(o?t.pause():(r||t.paused)&&(r?t.pause():t.play().catch(()=>{})))},[r,o]),(0,i.useEffect)(()=>{if(!a)return;let t=null,e=!1;return n.current&&!r&&n.current.play().catch(()=>{e||(t=()=>{n.current&&!r&&n.current.play().catch(()=>{}),t&&window.removeEventListener("click",t)},window.addEventListener("click",t))}),()=>{e=!0,t&&window.removeEventListener("click",t)}},[a,r]),n}},984(t,r,e){e.d(r,{HM:()=>l,IW:()=>g,Id:()=>o,Jj:()=>s,Zy:()=>p,aH:()=>h,gQ:()=>x,iM:()=>n,ue:()=>c,wA:()=>a,wI:()=>d});var i=e(403);const a=i.Ay.div`
  flex: 0 0 auto;
  min-width: 320px;
  max-width: 600px;
  z-index: 5;
  position: relative;

  @media only screen and (max-width: 1100px) {
    width: 100%;
    max-width: 100%;
    min-width: 0;
    z-index: 3;
  }

  .lore-text,
  .Menu-text {
    padding: 10px 35px;
    margin: 0 auto;
    max-width: 650px;
    background: var(--dark-highlight);
    border-radius: 32px;
    opacity: 1;
    color: var(--text-color);
    text-align: left;
    font-family: "Mulish", sans-serif;
    font-size: 25px;
    font-weight: 300;
    b {
      font-weight: 800;
    }
    hr {
      border-bottom: 0.5px solid var(--text-color);
    }
    @media (max-width: 1400px) {
      max-width: 500px;
      font-size: 20px;
    }
    @media (max-width: 1100px) {
      max-width: 550px;
      width: 90%;
      font-size: 17px;
    }
    @media (max-width: 701px) {
      padding: 25px;
      width: 90%;
      font-size: 16px;
    }
  }
`,o=i.Ay.div`
  margin: 10px;
  width: 450px;
  @media only screen and (max-width: 768px) {
    margin-left: 0px;
    width: 100%;
    padding-bottom: 5px;
  }
`,n=(i.Ay.div`
  position: relative;
  font-family: sans-serif;
  font-size: 18px;
  line-height: 24px;
  padding: 15px;
  border: 3px solid var(--light-background);
  background: #ffffff7bfff 0% 0% no-repeat padding-box;
  border-radius: 15px;
  opacity: 1;

  hr {
    height: 1px;
    color: var(--light-background);
    background-color: var(--light-background);
    border: none;
  }
`,i.Ay.div`
  padding-top: 5px;
  overflow-wrap: break-word;
  color: var(--dark-highlight);
  text-align: left;
  font: normal normal 300 20px/25px Mulish;
  letter-spacing: 0px;
  opacity: 1;
  white-space: pre-line;
`,i.Ay.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid var(--light-background);
  border-radius: 23px;
  opacity: 1;
  max-width: 400px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`),d=i.Ay.div`
  color: var(--dark-highlight);
  text-align: center;
  font: normal normal 600 30px/40px Montserrat;

  @media only screen and (max-width: 768px) {
    font: normal normal 600 24px/30px Montserrat;
  }

  letter-spacing: 0px;
  opacity: 1;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`,l=i.Ay.div`
  overflow-wrap: break-word;
  color: var(--dark-highlight);
`,p=i.Ay.iframe`
  border: 2px solid var(--light-background);
  border-radius: 23px;
  opacity: 1;
`,x=i.Ay.div`
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 2%;
  box-sizing: border-box;
  background: var(--background);
`,s=i.Ay.div`
  margin: auto auto 35px;
`,h=i.Ay.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
`,g=(i.Ay.div`
  display: flex;
  flex-direction: row;
`,i.Ay.input`
  display: block;
  width: 100%;
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid;
  margin-bottom: 20px;
  outline: none;

  color: var(--dark-highlight);
  text-align: left;
  font: normal normal normal 30px/37px Montserrat;
  letter-spacing: 0;
  opacity: 1;
`),c=i.Ay.h2`
  margin: 0;
  color: var(--dark-highlight);
  text-shadow:
    0 0 0.03em #ffffff7b,
    0.03em 0 0 #ffffff7b,
    -0.03em 0 0 #ffffff7b,
    0 0.03em 0 #ffffff7b,
    0 -0.03em 0 #ffffff7b,
    0.03em 0.03em 0 #ffffff7b,
    -0.03em -0.03em 0 #ffffff7b,
    0.03em -0.03em 0 #ffffff7b,
    -0.03em 0.03em 0 #ffffff7b;
  text-align: center;
  text-border: 2px solid var(--light-highlight);
  font: normal normal bold 48px/56px Montserrat;
  flex: 1;
  @media only screen and (max-width: 1000px) {
    font: normal normal bold 32px/40px Montserrat;
    letter-spacing: 1.25px;
  }
  @media only screen and (max-width: 768px) {
    font: normal normal bold 24px/30px Montserrat;
    letter-spacing: 1px;
  }
  @media only screen and (max-width: 700px) {
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    pointer-events: none;
  }
`;i.Ay.h2`
  font-size: 2.5em;
  text-align: center;
  color: var(--dark-highlight);
  margin: 0 0 18px 0;
  font-weight: 700;
  letter-spacing: 1.5px;
`,i.Ay.a`
  background: var(--light-highlight);
  color: var(--dark-highlight);
  border-radius: 8px;
  padding: 8px 18px;
  font-weight: 500;
  font-size: 0.5em;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`}}]);
//# sourceMappingURL=495.1a2a2a56.chunk.js.map
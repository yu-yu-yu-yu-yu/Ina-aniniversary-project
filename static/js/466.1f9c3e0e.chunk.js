"use strict";(globalThis.webpackChunkina=globalThis.webpackChunkina||[]).push([[466],{4709(t,e,r){r.d(e,{Fp:()=>n,JY:()=>p,Pn:()=>s,uW:()=>l});var a=r(403),i=r(2582),o=(r(5043),r(579));const n=a.Ay.nav`
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
`,d=a.Ay.button`
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
`,l=a.Ay.button`
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
`,p=a.Ay.div`
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
`,s=()=>(0,o.jsx)(d,{children:(0,o.jsx)(i.k2,{exact:!0,to:"/",children:(0,o.jsx)("i",{className:"fa fa-home"})})})},3269(t,e,r){r.d(e,{HM:()=>a.HM,IW:()=>a.IW,Id:()=>a.Id,Jj:()=>a.Jj,Zy:()=>a.Zy,a3:()=>a.a3,aH:()=>a.aH,gQ:()=>a.gQ,hP:()=>a.hP,iM:()=>a.iM,ue:()=>a.ue,wI:()=>a.wI});var a=r(984)},9466(t,e,r){r.d(e,{TakodexList:()=>m});var a=r(5043),i=r(303),o=r.n(i),n=r(403),d=r(984);const l=n.Ay.a`
  background: var(--light-highlight);
  color: var(--dark-highlight);
  border-radius: 8px;
  padding: 8px 18px;
  font-weight: 500;
  font-size: 0.5em;
  text-decoration: none;
  margin-left: 16px;
  transition: background 0.2s, color 0.2s, filter 0.2s;
  &:hover {
    background: var(--dark-highlight);
    color: var(--light-highlight);
  }

  @media only screen and (max-width: 768px) {
    font-size: 0.5em;
    padding: 10px 12px;
    margin-left: 8px;
    margin-top: 6px;
    display: inline-block;
  }
`;var p=r(3269),s=r(4709),h=r(579);const x=["8-bit Tako.png","Hollow Tako.png","Ikadachi.png","Mori Tako.png","Robodachi.png","Tako Amelia (Takoson).png","Tako Gura (Chum Tako).png","Tako Ina.png","Tako Kiara (Tako Bell).png","Tako Ross.png","Takodachi.png","Takomfy.png","Tophat Tako.png","Violet Tako.png","Wonder Tako.png","Yuul B. Tako.png"];const g=t=>{let{entries:e}=t;(0,a.useLayoutEffect)(()=>{window.scrollTo(0,0)},[]);const[r,i]=(0,a.useState)({}),[n,g]=(0,a.useState)(""),c=e.filter(t=>{let{name:e,author:r,category:a,attributes:i,description:o}=t;return[e,r,a,i,o].join(" ").toLowerCase().includes(n.toLowerCase())});return(0,h.jsxs)("div",{style:{minHeight:"100vh",background:"var(--background)"},children:[(0,h.jsxs)(s.Fp,{children:[(0,h.jsx)(s.Pn,{}),(0,h.jsx)(d.ue,{children:"Takodex"}),(0,h.jsx)("div",{style:{marginLeft:"auto"},children:(0,h.jsx)(l,{href:"https://forms.gle/qnrMrk2z6QaRHsdZ7",target:"_blank",rel:"noopener noreferrer",children:"Add my Tako"})})]}),(0,h.jsxs)(p.gQ,{children:[(0,h.jsx)(p.IW,{type:"text",value:n,onChange:t=>g(t.target.value),placeholder:"Search Takodex..."}),(0,h.jsx)(o(),{options:{gutter:40,columnWidth:1,fitWidth:!0,transitionDuration:0},style:{margin:"0 auto"},children:c.map((t,e)=>{let{name:a,author:o,category:n,attributes:l,description:p,image:s}=t;const g=a&&""!==a.trim()?a:o;return(0,h.jsx)(d.Id,{children:(0,h.jsxs)(d.hP,{children:[(0,h.jsx)(d.wI,{children:(0,h.jsx)(d.HM,{children:g||o})}),(0,h.jsxs)(d.a3,{children:[(0,h.jsx)("b",{children:"Category:"})," ",n||"Uncategorized"]}),(0,h.jsxs)(d.a3,{children:[(0,h.jsx)("b",{children:"Attributes:"})," ",l||"Unknown"]}),s&&!r[e]?(0,h.jsx)(d.iM,{src:"/takoswentries/"+s,alt:g,onError:()=>(t=>{i(e=>({...e,[t]:!0}))})(e)}):(0,h.jsx)(d.iM,{src:"/icon/"+(c=e,x[c%x.length]),alt:"random tako icon"}),(0,h.jsx)("hr",{}),(0,h.jsx)(d.a3,{children:p}),(0,h.jsx)(d.a3,{children:(0,h.jsxs)("b",{children:["by: ",o]})})]})},e);var c})})]})]})};var c=r(1472),f=r(2154);const m=()=>{const[t,e]=a.useState([]),{muted:r}=(0,c.d2)(),i=(0,f.G)({muted:r,autoPlay:!0});return(0,a.useEffect)(()=>{fetch("/data/TakoEntries.json").then(t=>t.json()).then(e)},[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("audio",{ref:i,src:"/\u30ea\u30b3\u30fc\u30c0\u30fc\u30d3\u30fc\u30c82.mp3",autoPlay:!0,loop:!0,preload:"auto",style:{display:"none"},muted:r}),(0,h.jsx)(g,{entries:t})]})}},2154(t,e,r){r.d(e,{G:()=>i});var a=r(5043);const i=t=>{let{muted:e,volume:r=.1,autoPlay:i=!1,videoPaused:o=!1}=t;const n=(0,a.useRef)(null);return(0,a.useEffect)(()=>{n.current&&(n.current.volume=r)},[r]),(0,a.useEffect)(()=>{const t=n.current;t&&(o?t.pause():(e||t.paused)&&(e?t.pause():t.play().catch(()=>{})))},[e,o]),(0,a.useEffect)(()=>{if(!i)return;let t=null,r=!1;return n.current&&!e&&n.current.play().catch(()=>{r||(t=()=>{n.current&&!e&&n.current.play().catch(()=>{}),t&&window.removeEventListener("click",t)},window.addEventListener("click",t))}),()=>{r=!0,t&&window.removeEventListener("click",t)}},[i,e]),n}},984(t,e,r){r.d(e,{HM:()=>s,IW:()=>f,Id:()=>o,Jj:()=>g,Zy:()=>h,a3:()=>d,aH:()=>c,gQ:()=>x,hP:()=>n,iM:()=>l,ue:()=>m,wA:()=>i,wI:()=>p});var a=r(403);const i=a.Ay.div`
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
`,o=a.Ay.div`
  margin: 10px;
  width: 450px;
  @media only screen and (max-width: 768px) {
    margin-left: 0px;
    width: 100%;
    padding-bottom: 5px;
  }
`,n=a.Ay.div`
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
`,d=a.Ay.div`
  padding-top: 5px;
  overflow-wrap: break-word;
  color: var(--dark-highlight);
  text-align: left;
  font: normal normal 300 20px/25px Mulish;
  letter-spacing: 0px;
  opacity: 1;
  white-space: pre-line;
`,l=a.Ay.img`
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
`,p=a.Ay.div`
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
`,s=a.Ay.div`
  overflow-wrap: break-word;
  color: var(--dark-highlight);
`,h=a.Ay.iframe`
  border: 2px solid var(--light-background);
  border-radius: 23px;
  opacity: 1;
`,x=a.Ay.div`
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 2%;
  box-sizing: border-box;
  background: var(--background);
`,g=a.Ay.div`
  margin: auto auto 35px;
`,c=a.Ay.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
`,f=(a.Ay.div`
  display: flex;
  flex-direction: row;
`,a.Ay.input`
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
`),m=a.Ay.h2`
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
`;a.Ay.h2`
  font-size: 2.5em;
  text-align: center;
  color: var(--dark-highlight);
  margin: 0 0 18px 0;
  font-weight: 700;
  letter-spacing: 1.5px;
`,a.Ay.a`
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
//# sourceMappingURL=466.1f9c3e0e.chunk.js.map
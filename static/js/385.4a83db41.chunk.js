"use strict";(globalThis.webpackChunkina=globalThis.webpackChunkina||[]).push([[385],{4709(n,e,t){t.d(e,{Fp:()=>p,Pn:()=>c,lU:()=>u,uW:()=>k});var a=t(403),o=t(2582),r=t(5043),s=t(5019),i=t(579);const p=a.Ay.nav`
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
  z-index: ${s.fE.nav};
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

  @media only screen and (max-width: ${s.fi.mobile}px) {
    font: normal normal normal 22px/26px Montserrat;
  }
`,g=(0,a.Ay)(o.k2)`
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
`,k=a.Ay.button`
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
  @media only screen and (max-width: ${s.fi.mobile}px) {
    padding: 8px 10px;
    gap: 0;
    .btn-text {
      display: none;
    }
  }
  &:hover {
    opacity: 0.8;
  }
`,l=a.Ay.div`
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
  z-index: ${s.fE.nav};
  min-width: 260px;
  max-width: min(90vw, 460px);
  max-height: 80vh;
  overflow-y: auto;
`,c=()=>(0,i.jsx)(g,{exact:!0,to:"/",children:(0,i.jsx)("i",{className:"fa fa-home"})}),u=n=>{let{label:e,children:t}=n;const[a,o]=(0,r.useState)(!1);return(0,i.jsxs)("div",{style:{flex:"0 0 auto",position:"relative"},children:[(0,i.jsxs)(k,{"aria-label":e,title:e,onClick:()=>o(n=>!n),children:[(0,i.jsx)("i",{className:"fa fa-question-circle","aria-hidden":"true"}),(0,i.jsx)("span",{className:"btn-text",children:"Help"})]}),a&&(0,i.jsx)(l,{onClick:()=>o(!1),children:t})]})}},3402(n,e,t){t.d(e,{W:()=>s});t(5043);var a=t(9773),o=t(1472),r=t(579);const s=n=>{let{src:e,pauseOnVideo:t=!1}=n;const{muted:s,videoPlaying:i}=(0,o.d2)(),p=(0,a.G)({muted:s,autoPlay:!0,videoPaused:t&&i});return(0,r.jsx)("audio",{ref:p,src:""+e,loop:!0,preload:"auto",style:{display:"none"}})}},7362(n,e,t){t.d(e,{A:()=>k});var a=t(5043),o=t(403),r=t(9944),s=t(579);const i=o.Ay.button`
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
`,p=o.Ay.div`
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
`,g=o.Ay.span`
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
`,k=n=>{let{slug:e,label:t,className:o}=n;const[k,l]=(0,a.useState)(!1);return(0,s.jsxs)(p,{className:o,children:[(0,s.jsx)(i,{type:"button",onClick:async()=>{await(0,r.c)(e)&&(l(!0),setTimeout(()=>l(!1),1600))},title:t,"aria-label":t,children:(0,s.jsx)("i",{className:"fa fa-share","aria-hidden":"true"})}),k&&(0,s.jsx)(g,{children:"Link copied!"})]})}},5402(n,e,t){t.d(e,{Ar:()=>a,TK:()=>r,sV:()=>o});const a=["albertoe.png","Baldako.png","CapSora.png","cedric_alpha.png","Chumbeque.png","ConcussioAmi.png","CyberToast.png","Deceptric13.png","Deracts.png","DinoTakos.png","Eyeye.png","FlaminSarge.png","Freir.png","Gaah.png","Gathog.png","HuyK.png","IcedOmachi.png","InaStoleMyHARTH.png","IrisPonn.png","izefjc.png","JustVine.png","Mangu.png","Pely_.png","Pixaurora.png","Plazma00.png","Raven0815.png","rid2079.png","SeeyahLater.png","Senki.png","Squash.png","subis.png","third12.png","Uni8.png","Vaan.png","Wahmaa.png","wydken.png","Yue.png","\u590f\u96ea.png","11.png","14.png","15.png","16.png","17.png","35.png","44.png","71.png","A random casual.png","Arthain.png","Astraea.png","BreadART.png","Chibi RoggianX.png","chuunilord.png","Corp.Shephard.png","Creau.png","Cyber Toast.png","CYtako.png","DarkNess2101.png","Deer Oh Dear.png","DHugo.png","Drebyal Draws.png","eLun.png","Endactam.png","enicholas.png","Epi.png","fluffycatfish.png","Fluid.png","Frediloc8.png","GreenFox.png","Haru.png","Hermit Purple.png","HiloNero.png","Huros.png","Ironsigh.png","Ithi.png","Jaboll252.png","Jamu(ta)ko.png","Jamuko.png","Jems.png","Jhon. Palmer.png","Joakim MF.png","junblebee.png","Kaede, Acolyte of Wahtcher.png","keoqzzi\ud83c\udf5c.png","Kinoko.png","KiwiNeko.png","kshut (@shutowl).png","Kurasu Kanon.png","Kurosagi.png","LasagnaLaffeydiction.png","Lethargic.png","Lienou.png","LynsDoodles.png","Lyudmilia.png","Machi says WAH.png","Mango Konata.png","Mara.png","McArkus.png","Meap.png","Melmarkt.png","MiJi.png","Milk.png","Minja.png","Neminem.png","NKS5.png","notaBob.png","NowaruArt.png","NxKarim.png","Nyuusai.png","OK Kei.png","OutOfRice.png","Overseer Olive.png","popop.png","ProxyZeus.png","PureTako.png","RCSI.png","Ren.png","Reyk.png","Reykhebaxh.png","RiDeth.png","Rie Cotton Cat.png","Rinh.png","Scalim.png","SeaRain.png","SharkyDoko.png","Shokuro.png","SleepDeprivedFae.png","SleepzyTofu.png","Sock.png","Spud Tako.png","Squirl.png","sunnyfaller.png","Tahi.png","Taiki Kiki.png","Takedo.png","Takollite.png","Takomonty.png","Takoster.png","Teddy B\u0295\xb4\u2022\u1d25\u2022`\u0294.png","Teo.png","The Shiv Spoon.png","Thocclord.png","Tornhalo.png","Tung.png","Valawari.png","Valtaur_tw.png","Vanilla Thunder.png","Vantablack.png","vignedev.png","WindStreak.png","Wydken.png","Yato Tako.png","Zel Maelstrom.png","zeroyaka.png","\u304a\u5144\u304e\u308a.png","\u30a4\u30ab^10.png"],o=a.length,r=["8-bit Tako.png","Hollow Tako.png","Ikadachi.png","Mori Tako.png","Robodachi.png","Tako Amelia (Takoson).png","Tako Gura (Chum Tako).png","Tako Ina.png","Tako Kiara (Tako Bell).png","Tako Ross.png","Takodachi.png","Takomfy.png","Tophat Tako.png","Violet Tako.png","Wonder Tako.png","Yuul B. Tako.png"]},9773(n,e,t){t.d(e,{G:()=>o});var a=t(5043);const o=n=>{let{muted:e,volume:t=.1,autoPlay:o=!1,videoPaused:r=!1}=n;const s=(0,a.useRef)(null);return(0,a.useEffect)(()=>{s.current&&(s.current.volume=t)},[t]),(0,a.useEffect)(()=>{const n=s.current;n&&(r||e?n.pause():n.paused&&n.play().catch(()=>{}))},[e,r]),(0,a.useEffect)(()=>{if(!o)return;let n=null,t=!1;return s.current&&!e&&s.current.play().catch(()=>{t||(n=()=>{s.current&&!e&&s.current.play().catch(()=>{}),n&&window.removeEventListener("click",n)},window.addEventListener("click",n))}),()=>{t=!0,n&&window.removeEventListener("click",n)}},[o,e]),s}},8893(n,e,t){t.d(e,{H:()=>r});var a=t(5043);const o=n=>{const e=Number.isFinite(n.scrollWidth)?n.scrollWidth:0,t=Number.isFinite(n.clientWidth)?n.clientWidth:0;return Math.max(0,e-t)},r=function(n){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,t=arguments.length>2?arguments[2]:void 0;const r=(0,a.useRef)(new Set(Array.from({length:Math.min(e+1,n)},(n,e)=>e))).current,[s,i]=(0,a.useState)(0),[p,g]=(0,a.useState)(r),[k,l]=(0,a.useState)(!1),[c,u]=(0,a.useState)(0),h=(0,a.useRef)(null),d=(0,a.useRef)([]),w=(0,a.useRef)(0),m=(0,a.useRef)(s),f=(0,a.useRef)(!1),y=(0,a.useRef)(0),x=(0,a.useRef)(0),T=(0,a.useRef)(!1),b=(0,a.useRef)(!1),v=(0,a.useRef)(0),S=(0,a.useRef)(0),C=(0,a.useRef)(0),R=(0,a.useRef)(0),A=(0,a.useRef)(null);m.current=s;const M=(0,a.useCallback)(n=>{const e=n.getBoundingClientRect(),t=e.left+e.width/2;let a=m.current,o=1/0;return d.current.forEach((n,e)=>{if(!n)return;const r=n.getBoundingClientRect();if(0===r.width)return;const s=Math.abs(r.left+r.width/2-t);s<o&&(o=s,a=e)}),a},[]),L=(0,a.useCallback)(t=>{g(a=>{const o=new Set(a);for(let r=Math.max(0,t-e);r<=Math.min(n-1,t+e);r++)o.add(r);return o})},[e,n]),P=(0,a.useCallback)(n=>{const e=d.current[n],t=h.current;if(!e||!t)return;cancelAnimationFrame(y.current),f.current=!0,t.style.scrollSnapType="none";const a=performance.now(),o=t.scrollLeft,r=e=>{const s=d.current[n];if(s&&t){const n=1-(1-Math.min((e-a)/420,1))**3,r=s.offsetLeft-t.clientWidth/2+s.offsetWidth/2;t.scrollLeft=o+(r-o)*n}e-a<420?y.current=requestAnimationFrame(r):(f.current=!1,t.style.scrollSnapType="")};y.current=requestAnimationFrame(r)},[]),D=(0,a.useCallback)(e=>{const t=Math.max(0,Math.min(e,n-1));x.current=t,i(t),L(t),u(n=>n+1)},[L,n]);(0,a.useLayoutEffect)(()=>{0!==c&&P(x.current)},[c,P]),(0,a.useEffect)(()=>()=>cancelAnimationFrame(y.current),[]),(0,a.useLayoutEffect)(()=>{const n=A.current;if(!k||!n)return;A.current=null;const e=h.current,t=d.current[n.index];if(!e||!t)return;const a=t.getBoundingClientRect(),r=a.left+a.width/2-n.centerX;if(0===r)return;const s=o(e),i=e.scrollLeft,p=Math.min(Math.max(i+r,0),s);e.scrollLeft=p,C.current+=p-i,R.current=s},[k]),(0,a.useEffect)(()=>{if(n<=0)return i(0),void g(new Set);i(e=>Math.max(0,Math.min(e,n-1)))},[n]),(0,a.useEffect)(()=>{if(void 0===t)return;const a=h.current;if(a&&(a.scrollLeft=0,a.style.scrollSnapType="",a.style.cursor=""),n<=0)return i(0),void g(new Set);const o=new Set(Array.from({length:Math.min(e+1,n)},(n,e)=>e));g(o),i(0),l(!1),b.current=!1,T.current=!1,v.current=0,S.current=0,C.current=0,x.current=0,A.current=null},[e,t,n]),(0,a.useEffect)(()=>{const n=n=>{if(n.altKey||n.ctrlKey||n.metaKey||n.shiftKey)return;if("ArrowLeft"!==n.key&&"ArrowRight"!==n.key)return;const e=n.target;if(e){const n=e.tagName;if("INPUT"===n||"TEXTAREA"===n||"SELECT"===n||e.isContentEditable)return}n.preventDefault(),D(m.current+("ArrowLeft"===n.key?-1:1))};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[D]);const K=(0,a.useCallback)(()=>{f.current||b.current||(clearTimeout(w.current),w.current=window.setTimeout(()=>{const n=h.current;if(!n)return;const e=M(n);e!==m.current&&(i(e),L(e))},250))},[L,M]),N=(0,a.useCallback)(n=>{var e;if(n.target.closest("button, a, video, input, textarea"))return;const t=h.current;if(!t)return;const a="number"===typeof n.clientX?n.clientX:"number"===typeof n.pageX&&null!==(e=n.pageX)&&void 0!==e?e:0,r=o(t);R.current=r,T.current=!0,v.current=n.pointerId,S.current=a,C.current=Math.min(Math.max(Number.isFinite(t.scrollLeft)?t.scrollLeft:0,0),r),n.preventDefault()},[]),E=(0,a.useCallback)(n=>{var e;const t=h.current;if(!T.current||!t)return;const a="number"===typeof n.clientX?n.clientX:"number"===typeof n.pageX&&null!==(e=n.pageX)&&void 0!==e?e:S.current;if(!b.current){if(Math.abs(a-S.current)<5)return;const n=d.current[m.current];if(n){const e=n.getBoundingClientRect();A.current={index:m.current,centerX:e.left+e.width/2}}b.current=!0,l(!0),cancelAnimationFrame(y.current),f.current=!1,"function"===typeof t.setPointerCapture&&t.setPointerCapture(v.current),t.style.scrollSnapType="none",t.style.cursor="grabbing"}const r=o(t);R.current=r,n.preventDefault();const s=C.current-(a-S.current);t.scrollLeft=Math.min(Math.max(s,0),r)},[]),H=(0,a.useCallback)(n=>{const e=h.current;T.current&&e&&(T.current=!1,b.current&&(b.current=!1,l(!1),"function"===typeof e.releasePointerCapture&&"function"===typeof e.hasPointerCapture&&e.hasPointerCapture(v.current)&&e.releasePointerCapture(v.current),e.style.cursor="",A.current=null,D(M(e))))},[D,M]),j=(0,a.useCallback)(n=>p.has(n),[p]);return{pivotIndex:s,dragging:k,goTo:D,containerRef:h,itemRefs:d,isLoaded:j,containerHandlers:{onScroll:K,onPointerDown:N,onPointerMove:E,onPointerUp:H,onPointerCancel:H}}}},9944(n,e,t){t.d(e,{L:()=>a,c:()=>o});const a=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];const a=e.filter(Boolean).join(" ");return`${a.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,40)}-${(n=>{let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return(e>>>0).toString(36)})(a)}`},o=async n=>{const e=`${window.location.origin}${window.location.pathname}#${n}`;try{var t;return await(null===(t=navigator.clipboard)||void 0===t?void 0:t.writeText(e)),!0}catch{return!1}}},993(n,e,t){t.d(e,{V:()=>s,c:()=>r});var a=t(5402);const o={"takos/16.png":"takos/16.PNG","takos/17.png":"takos/17.PNG","takos/35.png":"takos/Vantablack.png","takos/44.png":"takos/Wydken.png","takos/CottonCat.png":"takoswentries/CottonCat.png","takos/Creau.png":"takos/IrisPonn.png","takos/Darkodachi.png":"takoswentries/Darkodachi.png","takos/DeerOhDear.png":"takoswentries/DeerOhDear.png","takos/DumplingTakodachi.png":"takoswentries/DumplingTakodachi.png","takos/Eve.png":"takoswentries/Eve.png","takos/Gathog.png":"takoswentries/Gathog.png","takos/GrayTako.png":"takoswentries/GrayTako.png","takos/GreenFox.png":"takoswentries/GreenFox.png","takos/Ithi.png":"takoswentries/ithius.png","takos/Jamu(ta)ko.png":"takos/Jamuko.png","takos/Kais3r.png":"takoswentries/Kais3r.png","takos/KnightedTako.png":"takoswentries/KnightedTako.png","takos/LotusPondTako.png":"takoswentries/LotusPondTako.png","takos/Machi says WAH.png":"takos/Takomachi.png","takos/MrKamedachi.png":"takoswentries/MrKamedachi.png","takos/Rina.png":"takoswentries/Rina.png","takos/RogueTakolyte.png":"takoswentries/RogueTakolyte.png","takos/SleepzyTofu.png":"takoswentries/SleepzyTofu.png","takos/TakoGoomy.png":"takoswentries/TakoGoomy.png","takos/TakoLamp.png":"takoswentries/TakoLamp.png","takos/Takobocchi.png":"takoswentries/Takobocchi.png","takos/Takozashi.png":"takoswentries/Takozashi.png","takos/Tasaowl.png":"takos/Takoster.png","takos/Vaan.png":"takoswentries/Baldako.png","takos/VaanTheBrainlessOne.png":"takoswentries/VaanTheBrainlessOne.png","takos/drizzle.png":"takoswentries/drizzle.png","takos/eLun.png":"takos/eLudachi.png","takos/ithius.png":"takoswentries/ithius.png","takos/m-pien.png":"takoswentries/m-pien.png","takos/popop.png":"takoswentries/popop.png","takos/wydken.png":"takos/Wydken.png","takos/\u72ac\u4e09.png":"takoswentries/\u72ac\u4e09.png","takoswentries/Arandomcasual.png":"takos/A random casual.png","takoswentries/Arthain.png":"takos/Arthain.png","takoswentries/Astraea.png":"takos/Astraea.png","takoswentries/BreadART.png":"takos/BreadART.png","takoswentries/CapSora.png":"takos/CapSora.png","takoswentries/Chuunilord.png":"takoswentries/chuunilord.png","takoswentries/Chumbeque.png":"takos/Chumbeque.png","takoswentries/ConcussioAmi.png":"takos/ConcussioAmi.png","takoswentries/Corp.Shephard.png":"takos/Corp.Shephard.png","takoswentries/Creau.png":"takos/IrisPonn.png","takoswentries/CyberToast.png":"takos/CyberToast.png","takoswentries/DHugo.png":"takos/DHugo.png","takoswentries/DarkNess2101.png":"takos/DarkNess2101.png","takoswentries/Deceptric13.png":"takos/Deceptric13.png","takoswentries/Deracts.png":"takos/Deracts.png","takoswentries/DinoTakos.png":"takos/DinoTakos.png","takoswentries/Endactam.png":"takos/Endactam.png","takoswentries/Exvnir.png":"takos/Exvnir.png","takoswentries/Eyeye.png":"takos/Eyeye.png","takoswentries/FlaminSarge.png":"takos/FlaminSarge.png","takoswentries/Freir.png":"takos/Freir.png","takoswentries/Gaah.png":"takos/Gaah.png","takoswentries/Haru.png":"takos/Haru.png","takoswentries/HiloNero.png":"takos/HiloNero.png","takoswentries/Huros.png":"takos/Huros.png","takoswentries/HuyK.png":"takos/HuyK.png","takoswentries/IcedOmachi.png":"takos/IcedOmachi.png","takoswentries/InaStoleMyHARTH.png":"takos/InaStoleMyHARTH.png","takoswentries/IrisPonn.png":"takos/IrisPonn.png","takoswentries/Ironsigh.png":"takos/Ironsigh.png","takoswentries/Ithi.png":"takoswentries/ithius.png","takoswentries/Ithius.png":"takoswentries/ithius.png","takoswentries/Jaboll252.png":"takos/Jaboll252.png","takoswentries/Jamuko.png":"takos/Jamuko.png","takoswentries/Jems.png":"takos/Jems.png","takoswentries/JustVine.png":"takos/JustVine.png","takoswentries/Kaede,AcolyteofWahtcher.png":"takos/Kaede, Acolyte of Wahtcher.png","takoswentries/KiwiNeko.png":"takos/KiwiNeko.png","takoswentries/KurasuKanon.png":"takos/Kurasu Kanon.png","takoswentries/LasagnaLaffeydiction.png":"takos/LasagnaLaffeydiction.png","takoswentries/Lethargic.png":"takos/Lethargic.png","takoswentries/LynsDoodles.png":"takos/LynsDoodles.png","takoswentries/Lyudmilia.png":"takos/Lyudmilia.png","takoswentries/MachisaysWAH.png":"takos/Takomachi.png","takoswentries/Mangu.png":"takos/Mangu.png","takoswentries/McArkus.png":"takos/McArkus.png","takoswentries/Melmarkt.png":"takos/Melmarkt.png","takoswentries/MiJi.png":"takos/MiJi.png","takoswentries/Minja.png":"takos/Minja.png","takoswentries/Neminem.png":"takos/Neminem.png","takoswentries/Nowaru.png":"takos/NowaruArt.png","takoswentries/NowaruArt.png":"takos/NowaruArt.png","takoswentries/NxKarim.png":"takos/NxKarim.png","takoswentries/OutOfRice.png":"takos/OutOfRice.png","takoswentries/OverseerOlive.png":"takos/Overseer Olive.png","takoswentries/Pely_.png":"takos/Pely_.png","takoswentries/Pixaurora.png":"takos/Pixaurora.png","takoswentries/Plazma00.png":"takos/Plazma00.png","takoswentries/Popop.png":"takoswentries/popop.png","takoswentries/ProxyZeus.png":"takos/ProxyZeus.png","takoswentries/RCSI.png":"takos/RCSI.png","takoswentries/Raven0815.png":"takos/Raven0815.png","takoswentries/Ren.png":"takos/Ren.png","takoswentries/Reyk.png":"takos/Reyk.png","takoswentries/Scalim.png":"takos/Scalim.png","takoswentries/SeeyahLater.png":"takos/SeeyahLater.png","takoswentries/Senki.png":"takos/Senki.png","takoswentries/SharkyDoko.png":"takos/SharkyDoko.png","takoswentries/SleepDeprivedFae.png":"takos/SleepDeprivedFae.png","takoswentries/Sock.png":"takos/Sock.png","takoswentries/Squash.png":"takos/Squash.png","takoswentries/TaikiKiki.png":"takos/Taiki Kiki.png","takoswentries/Takoster.png":"takos/Takoster.png","takoswentries/Tasaowl.png":"takos/Takoster.png","takoswentries/Teo.png":"takos/Teo.png","takoswentries/TheShivSpoon.png":"takos/The Shiv Spoon.png","takoswentries/Tornhalo.png":"takos/Tornhalo.png","takoswentries/Uni8.png":"takos/Uni8.png","takoswentries/Vaan.png":"takoswentries/Baldako.png","takoswentries/Valawari.png":"takos/Valawari.png","takoswentries/VanillaThunder.png":"takos/Vanilla Thunder.png","takoswentries/Vantablack.png":"takos/Vantablack.png","takoswentries/WAHmaa.png":"takos/Wahmaa.png","takoswentries/Wahmaa.png":"takos/Wahmaa.png","takoswentries/Wydken.png":"takos/Wydken.png","takoswentries/YatoTako.png":"takos/Yato Tako.png","takoswentries/Yatotako.png":"takos/Yato Tako.png","takoswentries/Yue.png":"takos/Yue.png","takoswentries/albertoe.png":"takos/albertoe.png","takoswentries/cedric_alpha.png":"takos/cedric_alpha.png","takoswentries/eLun.png":"takos/eLudachi.png","takoswentries/izefjc.png":"takos/izefjc.png","takoswentries/junblebee.png":"takos/junblebee.png","takoswentries/kshut(@shutowl).png":"takos/kshut (@shutowl).png","takoswentries/rid2079.png":"takos/rid2079.png","takoswentries/subis.png":"takos/subis.png","takoswentries/third12.png":"takos/third12.png","takoswentries/vignedev.png":"takos/vignedev.png","takoswentries/wydken.png":"takos/Wydken.png","takoswentries/zeroyaka.png":"takos/zeroyaka.png","takoswentries/\u30a4\u30ab^10.png":"takos/\u30a4\u30ab^10.png","takoswentries/\u590f\u96ea.png":"takos/\u590f\u96ea.png"};function r(n,e){var t;const[a,...r]=(null!==(t=o[`${n}/${e}`])&&void 0!==t?t:`${n}/${e}`).split("/");return`/${a}/${encodeURIComponent(r.join("/"))}`}function s(n){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(n&&""!==n.trim())return r("takoswentries",`${n.replace(/ /g,"")}.png`);return`/icon/${a.TK[e%a.TK.length]}`}}}]);
//# sourceMappingURL=385.4a83db41.chunk.js.map
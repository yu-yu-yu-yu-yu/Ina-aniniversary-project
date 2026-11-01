"use strict";(globalThis.webpackChunkina=globalThis.webpackChunkina||[]).push([[990],{2117(n,a,e){e.d(a,{X:()=>o});e(5043);var t=e(579);const o=n=>{let{what:a,error:e}=n;return(0,t.jsxs)("div",{children:["Error loading ",a,": ",e.message]})}},4709(n,a,e){e.d(a,{Fp:()=>p,Pn:()=>c,lU:()=>d,uW:()=>k});var t=e(403),o=e(2582),s=e(5043),r=e(5019),i=e(579);const p=t.Ay.nav`
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
  z-index: ${r.fE.nav};
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

  @media only screen and (max-width: ${r.fi.mobile}px) {
    font: normal normal normal 22px/26px Montserrat;
  }
`,g=(0,t.Ay)(o.k2)`
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
`,k=t.Ay.button`
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
  @media only screen and (max-width: ${r.fi.mobile}px) {
    padding: 8px 10px;
    gap: 0;
    .btn-text {
      display: none;
    }
  }
  &:hover {
    opacity: 0.8;
  }
`,l=t.Ay.div`
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
  z-index: ${r.fE.nav};
  min-width: 260px;
  max-width: min(90vw, 460px);
  max-height: 80vh;
  overflow-y: auto;
`,c=()=>(0,i.jsx)(g,{exact:!0,to:"/",children:(0,i.jsx)("i",{className:"fa fa-home"})}),d=n=>{let{label:a,children:e}=n;const[t,o]=(0,s.useState)(!1);return(0,i.jsxs)("div",{style:{flex:"0 0 auto",position:"relative"},children:[(0,i.jsxs)(k,{"aria-label":a,title:a,onClick:()=>o(n=>!n),children:[(0,i.jsx)("i",{className:"fa fa-question-circle","aria-hidden":"true"}),(0,i.jsx)("span",{className:"btn-text",children:"Help"})]}),t&&(0,i.jsx)(l,{onClick:()=>o(!1),children:e})]})}},3402(n,a,e){e.d(a,{W:()=>r});e(5043);var t=e(9773),o=e(1472),s=e(579);const r=n=>{let{src:a,pauseOnVideo:e=!1}=n;const{muted:r,videoPlaying:i}=(0,o.d2)(),p=(0,t.G)({muted:r,autoPlay:!0,videoPaused:e&&i});return(0,s.jsx)("audio",{ref:p,src:""+a,loop:!0,preload:"auto",style:{display:"none"}})}},7362(n,a,e){e.d(a,{A:()=>k});var t=e(5043),o=e(403),s=e(9944),r=e(579);const i=o.Ay.button`
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
`,k=n=>{let{slug:a,label:e,className:o}=n;const[k,l]=(0,t.useState)(!1);return(0,r.jsxs)(p,{className:o,children:[(0,r.jsx)(i,{type:"button",onClick:async()=>{await(0,s.c)(a)&&(l(!0),setTimeout(()=>l(!1),1600))},title:e,"aria-label":e,children:(0,r.jsx)("i",{className:"fa fa-share","aria-hidden":"true"})}),k&&(0,r.jsx)(g,{children:"Link copied!"})]})}},4990(n,a,e){e.r(a),e.d(a,{default:()=>v});var t=e(5043),o=e(1688),s=e(303),r=e.n(s),i=e(403),p=e(984);const g=i.Ay.img`
  display: block;
  width: 100%;
  height: clamp(260px, 24vh, 340px);
  object-fit: contain;
  border-radius: 8px;
  margin: 8px 0;
`,k=i.Ay.a`
  background: var(--light-highlight);
  color: var(--dark-highlight);
  border-radius: 8px;
  padding: 8px 18px;
  font-weight: 500;
  font-size: 0.5em;
  text-decoration: none;
  margin-left: 16px;
  transition:
    background 0.2s,
    color 0.2s,
    filter 0.2s;
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
`;var l=e(4709),c=e(7362),d=e(9944),h=e(5402),u=e(993),w=e(579);const m=n=>(0,d.L)(n.name,n.author),x=n=>{let{entries:a}=n;(0,t.useLayoutEffect)(()=>{window.scrollTo(0,0)},[]);const[e,s]=(0,t.useState)({}),[i,d]=(0,t.useState)(""),[x,y]=(0,t.useState)(null),{hash:f}=(0,o.zy)(),T=(0,t.useRef)(!1),b=a.filter(n=>{let{name:a,author:e,category:t,attributes:o,description:s}=n;return[a,e,t,o,s].join(" ").toLowerCase().includes(i.toLowerCase())});return(0,t.useEffect)(()=>{if(T.current||!f||0===a.length)return;const n=f.replace("#",""),e=a.find(a=>m(a)===n);if(!e)return;if(""!==i&&!b.includes(e))return void d("");T.current=!0;const t=document.getElementById(`takodex-${n}`);null===t||void 0===t||t.scrollIntoView({behavior:"smooth",block:"center"}),y(n);const o=setTimeout(()=>y(null),1800);return()=>clearTimeout(o)},[f,a,i,b]),(0,w.jsxs)(p.Qs,{children:[(0,w.jsxs)(l.Fp,{children:[(0,w.jsx)(l.Pn,{}),(0,w.jsx)(p.ue,{children:"Takodex"}),(0,w.jsx)(l.lU,{label:"Show Takodex usage hint",children:(0,w.jsx)("p",{children:'Search by name, category, or attribute. Made your own Takodachi? Use "Add my Tako" to submit it for a future entry.'})}),(0,w.jsx)("div",{style:{marginLeft:"auto"},children:(0,w.jsx)(k,{href:"https://forms.gle/qnrMrk2z6QaRHsdZ7",target:"_blank",rel:"noopener noreferrer",children:"Add my Tako"})})]}),(0,w.jsxs)(p.gQ,{children:[(0,w.jsx)(p.IW,{type:"text",value:i,onChange:n=>d(n.target.value),placeholder:"Search Takodex..."}),(0,w.jsx)(r(),{options:{gutter:40,columnWidth:1,fitWidth:!0,transitionDuration:0},style:{margin:"0 auto"},children:b.map((n,a)=>{const{name:t,author:o,category:r,attributes:i,description:k,image:l}=n,d=t&&""!==t.trim()?t:o,y=m(n);return(0,w.jsx)(p.Id,{id:`takodex-${y}`,style:x===y?{outline:"3px solid var(--light-highlight)",borderRadius:15}:void 0,children:(0,w.jsxs)(p.Zp,{children:[(0,w.jsxs)(p.aR,{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,textAlign:"left"},children:[(0,w.jsx)("span",{children:d||o}),(0,w.jsx)(c.A,{slug:y,label:"Copy link to this Tako"})]}),(0,w.jsxs)("div",{style:{padding:"0.75rem"},children:[(0,w.jsxs)(p.c5,{children:[(0,w.jsx)("b",{children:"Category:"})," ",r||"Uncategorized"]}),(0,w.jsxs)(p.c5,{children:[(0,w.jsx)("b",{children:"Attributes:"})," ",i||"Unknown"]}),(0,w.jsx)("hr",{}),l&&!e[a]?(0,w.jsx)(g,{src:(0,u.c)("takoswentries",l),alt:d,onError:()=>(n=>{s(a=>({...a,[n]:!0}))})(a)}):(0,w.jsx)(g,{src:"/icon/"+(f=a,h.TK[f%h.TK.length]),alt:"random tako icon"}),(0,w.jsx)("hr",{}),(0,w.jsx)(p.c5,{children:k}),(0,w.jsx)(p.c5,{children:(0,w.jsxs)("b",{children:["by: ",o]})})]})]})},a);var f})})]})]})};var y=e(6088),f=e(2218),T=e(3402),b=e(2117);const v=()=>{const{data:n,loading:a,error:e}=(0,y.s)("/data/TakoEntries.json");return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(T.W,{src:"/\u30ea\u30b3\u30fc\u30c0\u30fc\u30d3\u30fc\u30c82.mp3"}),a?(0,w.jsx)(f.c,{fullPage:!0}):e?(0,w.jsx)(b.X,{what:"Takodex",error:e}):(0,w.jsx)(x,{entries:null!==n&&void 0!==n?n:[]})]})}},5402(n,a,e){e.d(a,{Ar:()=>t,TK:()=>s,sV:()=>o});const t=["albertoe.png","Baldako.png","CapSora.png","cedric_alpha.png","Chumbeque.png","ConcussioAmi.png","CyberToast.png","Deceptric13.png","Deracts.png","DinoTakos.png","Eyeye.png","FlaminSarge.png","Freir.png","Gaah.png","Gathog.png","HuyK.png","IcedOmachi.png","InaStoleMyHARTH.png","IrisPonn.png","izefjc.png","JustVine.png","Mangu.png","Pely_.png","Pixaurora.png","Plazma00.png","Raven0815.png","rid2079.png","SeeyahLater.png","Senki.png","Squash.png","subis.png","third12.png","Uni8.png","Vaan.png","Wahmaa.png","wydken.png","Yue.png","\u590f\u96ea.png","11.png","14.png","15.png","16.png","17.png","35.png","44.png","71.png","A random casual.png","Arthain.png","Astraea.png","BreadART.png","Chibi RoggianX.png","chuunilord.png","Corp.Shephard.png","Creau.png","Cyber Toast.png","CYtako.png","DarkNess2101.png","Deer Oh Dear.png","DHugo.png","Drebyal Draws.png","eLun.png","Endactam.png","enicholas.png","Epi.png","fluffycatfish.png","Fluid.png","Frediloc8.png","GreenFox.png","Haru.png","Hermit Purple.png","HiloNero.png","Huros.png","Ironsigh.png","Ithi.png","Jaboll252.png","Jamu(ta)ko.png","Jamuko.png","Jems.png","Jhon. Palmer.png","Joakim MF.png","junblebee.png","Kaede, Acolyte of Wahtcher.png","keoqzzi\ud83c\udf5c.png","Kinoko.png","KiwiNeko.png","kshut (@shutowl).png","Kurasu Kanon.png","Kurosagi.png","LasagnaLaffeydiction.png","Lethargic.png","Lienou.png","LynsDoodles.png","Lyudmilia.png","Machi says WAH.png","Mango Konata.png","Mara.png","McArkus.png","Meap.png","Melmarkt.png","MiJi.png","Milk.png","Minja.png","Neminem.png","NKS5.png","notaBob.png","NowaruArt.png","NxKarim.png","Nyuusai.png","OK Kei.png","OutOfRice.png","Overseer Olive.png","popop.png","ProxyZeus.png","PureTako.png","RCSI.png","Ren.png","Reyk.png","Reykhebaxh.png","RiDeth.png","Rie Cotton Cat.png","Rinh.png","Scalim.png","SeaRain.png","SharkyDoko.png","Shokuro.png","SleepDeprivedFae.png","SleepzyTofu.png","Sock.png","Spud Tako.png","Squirl.png","sunnyfaller.png","Tahi.png","Taiki Kiki.png","Takedo.png","Takollite.png","Takomonty.png","Takoster.png","Teddy B\u0295\xb4\u2022\u1d25\u2022`\u0294.png","Teo.png","The Shiv Spoon.png","Thocclord.png","Tornhalo.png","Tung.png","Valawari.png","Valtaur_tw.png","Vanilla Thunder.png","Vantablack.png","vignedev.png","WindStreak.png","Wydken.png","Yato Tako.png","Zel Maelstrom.png","zeroyaka.png","\u304a\u5144\u304e\u308a.png","\u30a4\u30ab^10.png"],o=t.length,s=["8-bit Tako.png","Hollow Tako.png","Ikadachi.png","Mori Tako.png","Robodachi.png","Tako Amelia (Takoson).png","Tako Gura (Chum Tako).png","Tako Ina.png","Tako Kiara (Tako Bell).png","Tako Ross.png","Takodachi.png","Takomfy.png","Tophat Tako.png","Violet Tako.png","Wonder Tako.png","Yuul B. Tako.png"]},9773(n,a,e){e.d(a,{G:()=>o});var t=e(5043);const o=n=>{let{muted:a,volume:e=.1,autoPlay:o=!1,videoPaused:s=!1}=n;const r=(0,t.useRef)(null);return(0,t.useEffect)(()=>{r.current&&(r.current.volume=e)},[e]),(0,t.useEffect)(()=>{const n=r.current;n&&(s||a?n.pause():n.paused&&n.play().catch(()=>{}))},[a,s]),(0,t.useEffect)(()=>{if(!o)return;let n=null,e=!1;return r.current&&!a&&r.current.play().catch(()=>{e||(n=()=>{r.current&&!a&&r.current.play().catch(()=>{}),n&&window.removeEventListener("click",n)},window.addEventListener("click",n))}),()=>{e=!0,n&&window.removeEventListener("click",n)}},[o,a]),r}},6088(n,a,e){e.d(a,{s:()=>o});var t=e(5043);const o=function(n){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const[e,o]=(0,t.useState)(null),[s,r]=(0,t.useState)(!0),[i,p]=(0,t.useState)(null),g=async e=>{r(!0),p(null);try{const t=await fetch(n,{...a,signal:e});if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const s=await t.json();if(null!==e&&void 0!==e&&e.aborted)return;o(s)}catch(t){if(null!==e&&void 0!==e&&e.aborted)return;p(t)}finally{null!==e&&void 0!==e&&e.aborted||r(!1)}};(0,t.useEffect)(()=>{const n=new AbortController;return g(n.signal),()=>n.abort()},[n,JSON.stringify(a)]);return{data:e,loading:s,error:i,refetch:()=>{g()}}}},9944(n,a,e){e.d(a,{L:()=>t,c:()=>o});const t=function(){for(var n=arguments.length,a=new Array(n),e=0;e<n;e++)a[e]=arguments[e];const t=a.filter(Boolean).join(" ");return`${t.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,40)}-${(n=>{let a=2166136261;for(let e=0;e<n.length;e++)a^=n.charCodeAt(e),a=Math.imul(a,16777619);return(a>>>0).toString(36)})(t)}`},o=async n=>{const a=`${window.location.origin}${window.location.pathname}#${n}`;try{var e;return await(null===(e=navigator.clipboard)||void 0===e?void 0:e.writeText(a)),!0}catch{return!1}}},993(n,a,e){e.d(a,{V:()=>r,c:()=>s});var t=e(5402);const o={"takos/16.png":"takos/16.PNG","takos/17.png":"takos/17.PNG","takos/35.png":"takos/Vantablack.png","takos/44.png":"takos/Wydken.png","takos/CottonCat.png":"takoswentries/CottonCat.png","takos/Creau.png":"takos/IrisPonn.png","takos/Darkodachi.png":"takoswentries/Darkodachi.png","takos/DeerOhDear.png":"takoswentries/DeerOhDear.png","takos/DumplingTakodachi.png":"takoswentries/DumplingTakodachi.png","takos/Eve.png":"takoswentries/Eve.png","takos/Gathog.png":"takoswentries/Gathog.png","takos/GrayTako.png":"takoswentries/GrayTako.png","takos/GreenFox.png":"takoswentries/GreenFox.png","takos/Ithi.png":"takoswentries/ithius.png","takos/Jamu(ta)ko.png":"takos/Jamuko.png","takos/Kais3r.png":"takoswentries/Kais3r.png","takos/KnightedTako.png":"takoswentries/KnightedTako.png","takos/LotusPondTako.png":"takoswentries/LotusPondTako.png","takos/Machi says WAH.png":"takos/Takomachi.png","takos/MrKamedachi.png":"takoswentries/MrKamedachi.png","takos/Rina.png":"takoswentries/Rina.png","takos/RogueTakolyte.png":"takoswentries/RogueTakolyte.png","takos/SleepzyTofu.png":"takoswentries/SleepzyTofu.png","takos/TakoGoomy.png":"takoswentries/TakoGoomy.png","takos/TakoLamp.png":"takoswentries/TakoLamp.png","takos/Takobocchi.png":"takoswentries/Takobocchi.png","takos/Takozashi.png":"takoswentries/Takozashi.png","takos/Tasaowl.png":"takos/Takoster.png","takos/Vaan.png":"takoswentries/Baldako.png","takos/VaanTheBrainlessOne.png":"takoswentries/VaanTheBrainlessOne.png","takos/drizzle.png":"takoswentries/drizzle.png","takos/eLun.png":"takos/eLudachi.png","takos/ithius.png":"takoswentries/ithius.png","takos/m-pien.png":"takoswentries/m-pien.png","takos/popop.png":"takoswentries/popop.png","takos/wydken.png":"takos/Wydken.png","takos/\u72ac\u4e09.png":"takoswentries/\u72ac\u4e09.png","takoswentries/Arandomcasual.png":"takos/A random casual.png","takoswentries/Arthain.png":"takos/Arthain.png","takoswentries/Astraea.png":"takos/Astraea.png","takoswentries/BreadART.png":"takos/BreadART.png","takoswentries/CapSora.png":"takos/CapSora.png","takoswentries/Chuunilord.png":"takoswentries/chuunilord.png","takoswentries/Chumbeque.png":"takos/Chumbeque.png","takoswentries/ConcussioAmi.png":"takos/ConcussioAmi.png","takoswentries/Corp.Shephard.png":"takos/Corp.Shephard.png","takoswentries/Creau.png":"takos/IrisPonn.png","takoswentries/CyberToast.png":"takos/CyberToast.png","takoswentries/DHugo.png":"takos/DHugo.png","takoswentries/DarkNess2101.png":"takos/DarkNess2101.png","takoswentries/Deceptric13.png":"takos/Deceptric13.png","takoswentries/Deracts.png":"takos/Deracts.png","takoswentries/DinoTakos.png":"takos/DinoTakos.png","takoswentries/Endactam.png":"takos/Endactam.png","takoswentries/Exvnir.png":"takos/Exvnir.png","takoswentries/Eyeye.png":"takos/Eyeye.png","takoswentries/FlaminSarge.png":"takos/FlaminSarge.png","takoswentries/Freir.png":"takos/Freir.png","takoswentries/Gaah.png":"takos/Gaah.png","takoswentries/Haru.png":"takos/Haru.png","takoswentries/HiloNero.png":"takos/HiloNero.png","takoswentries/Huros.png":"takos/Huros.png","takoswentries/HuyK.png":"takos/HuyK.png","takoswentries/IcedOmachi.png":"takos/IcedOmachi.png","takoswentries/InaStoleMyHARTH.png":"takos/InaStoleMyHARTH.png","takoswentries/IrisPonn.png":"takos/IrisPonn.png","takoswentries/Ironsigh.png":"takos/Ironsigh.png","takoswentries/Ithi.png":"takoswentries/ithius.png","takoswentries/Ithius.png":"takoswentries/ithius.png","takoswentries/Jaboll252.png":"takos/Jaboll252.png","takoswentries/Jamuko.png":"takos/Jamuko.png","takoswentries/Jems.png":"takos/Jems.png","takoswentries/JustVine.png":"takos/JustVine.png","takoswentries/Kaede,AcolyteofWahtcher.png":"takos/Kaede, Acolyte of Wahtcher.png","takoswentries/KiwiNeko.png":"takos/KiwiNeko.png","takoswentries/KurasuKanon.png":"takos/Kurasu Kanon.png","takoswentries/LasagnaLaffeydiction.png":"takos/LasagnaLaffeydiction.png","takoswentries/Lethargic.png":"takos/Lethargic.png","takoswentries/LynsDoodles.png":"takos/LynsDoodles.png","takoswentries/Lyudmilia.png":"takos/Lyudmilia.png","takoswentries/MachisaysWAH.png":"takos/Takomachi.png","takoswentries/Mangu.png":"takos/Mangu.png","takoswentries/McArkus.png":"takos/McArkus.png","takoswentries/Melmarkt.png":"takos/Melmarkt.png","takoswentries/MiJi.png":"takos/MiJi.png","takoswentries/Minja.png":"takos/Minja.png","takoswentries/Neminem.png":"takos/Neminem.png","takoswentries/Nowaru.png":"takos/NowaruArt.png","takoswentries/NowaruArt.png":"takos/NowaruArt.png","takoswentries/NxKarim.png":"takos/NxKarim.png","takoswentries/OutOfRice.png":"takos/OutOfRice.png","takoswentries/OverseerOlive.png":"takos/Overseer Olive.png","takoswentries/Pely_.png":"takos/Pely_.png","takoswentries/Pixaurora.png":"takos/Pixaurora.png","takoswentries/Plazma00.png":"takos/Plazma00.png","takoswentries/Popop.png":"takoswentries/popop.png","takoswentries/ProxyZeus.png":"takos/ProxyZeus.png","takoswentries/RCSI.png":"takos/RCSI.png","takoswentries/Raven0815.png":"takos/Raven0815.png","takoswentries/Ren.png":"takos/Ren.png","takoswentries/Reyk.png":"takos/Reyk.png","takoswentries/Scalim.png":"takos/Scalim.png","takoswentries/SeeyahLater.png":"takos/SeeyahLater.png","takoswentries/Senki.png":"takos/Senki.png","takoswentries/SharkyDoko.png":"takos/SharkyDoko.png","takoswentries/SleepDeprivedFae.png":"takos/SleepDeprivedFae.png","takoswentries/Sock.png":"takos/Sock.png","takoswentries/Squash.png":"takos/Squash.png","takoswentries/TaikiKiki.png":"takos/Taiki Kiki.png","takoswentries/Takoster.png":"takos/Takoster.png","takoswentries/Tasaowl.png":"takos/Takoster.png","takoswentries/Teo.png":"takos/Teo.png","takoswentries/TheShivSpoon.png":"takos/The Shiv Spoon.png","takoswentries/Tornhalo.png":"takos/Tornhalo.png","takoswentries/Uni8.png":"takos/Uni8.png","takoswentries/Vaan.png":"takoswentries/Baldako.png","takoswentries/Valawari.png":"takos/Valawari.png","takoswentries/VanillaThunder.png":"takos/Vanilla Thunder.png","takoswentries/Vantablack.png":"takos/Vantablack.png","takoswentries/WAHmaa.png":"takos/Wahmaa.png","takoswentries/Wahmaa.png":"takos/Wahmaa.png","takoswentries/Wydken.png":"takos/Wydken.png","takoswentries/YatoTako.png":"takos/Yato Tako.png","takoswentries/Yatotako.png":"takos/Yato Tako.png","takoswentries/Yue.png":"takos/Yue.png","takoswentries/albertoe.png":"takos/albertoe.png","takoswentries/cedric_alpha.png":"takos/cedric_alpha.png","takoswentries/eLun.png":"takos/eLudachi.png","takoswentries/izefjc.png":"takos/izefjc.png","takoswentries/junblebee.png":"takos/junblebee.png","takoswentries/kshut(@shutowl).png":"takos/kshut (@shutowl).png","takoswentries/rid2079.png":"takos/rid2079.png","takoswentries/subis.png":"takos/subis.png","takoswentries/third12.png":"takos/third12.png","takoswentries/vignedev.png":"takos/vignedev.png","takoswentries/wydken.png":"takos/Wydken.png","takoswentries/zeroyaka.png":"takos/zeroyaka.png","takoswentries/\u30a4\u30ab^10.png":"takos/\u30a4\u30ab^10.png","takoswentries/\u590f\u96ea.png":"takos/\u590f\u96ea.png"};function s(n,a){var e;const[t,...s]=(null!==(e=o[`${n}/${a}`])&&void 0!==e?e:`${n}/${a}`).split("/");return`/${t}/${encodeURIComponent(s.join("/"))}`}function r(n){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(n&&""!==n.trim())return s("takoswentries",`${n.replace(/ /g,"")}.png`);return`/icon/${t.TK[a%t.TK.length]}`}}}]);
//# sourceMappingURL=990.f02a5dd3.chunk.js.map
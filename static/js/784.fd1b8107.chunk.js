"use strict";(globalThis.webpackChunkina=globalThis.webpackChunkina||[]).push([[784],{3402(e,n,a){a.d(n,{W:()=>i});a(5043);var t=a(9773),o=a(1472),s=a(579);const i=e=>{let{src:n,pauseOnVideo:a=!1}=e;const{muted:i,videoPlaying:r}=(0,o.d2)(),g=(0,t.G)({muted:i,autoPlay:!0,videoPaused:a&&r});return(0,s.jsx)("audio",{ref:g,src:""+n,loop:!0,preload:"auto",style:{display:"none"}})}},5011(e,n,a){a.d(n,{d:()=>p});a(5043);var t=a(403),o=a(579);const s=t.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  padding: 0.1em;
  cursor: pointer;
`,i=t.Ay.div`
  position: relative;
  border-radius: 100px;
  width: 38px;
  min-width: 38px;
  height: 24px;
  flex-shrink: 0;
  background-color: ${e=>{let{$active:n,$color:a}=e;return n?a:"var(--dark-highlight)"}};
  transition: background-color 0.2s linear;
  &.mobile {
    width: 28px;
    min-width: 28px;
    height: 16px;
  }
`,r=t.Ay.div`
  position: absolute;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  box-sizing: border-box;
  background: var(--text-color);
  border: 2px solid ${e=>{let{$color:n}=e;return n}};
  top: 50%;
  left: 3px;
  transform: translateY(-50%)
    translateX(${e=>{let{$active:n}=e;return n?"14px":"0px"}});
  transition: transform 0.2s linear;
  &.mobile {
    width: 12px;
    height: 12px;
    left: 2px;
    transform: translateY(-50%)
      translateX(${e=>{let{$active:n}=e;return n?"12px":"0px"}});
  }
`,g=t.Ay.span`
  color: ${e=>{let{$labelColor:n}=e;return null!==n&&void 0!==n?n:"var(--text-color)"}};
  text-align: left;
  font: normal normal 300 25px/26px Montserrat;
  letter-spacing: 0;
  &.mobile {
    font: normal normal 300 13px/16px Montserrat;
  }
`,p=e=>{let{label:n,value:a,onChange:t,color:p="var(--dark-highlight)",labelColor:l,mobile:k}=e;const c=k?"mobile":"";return(0,o.jsxs)(s,{onClick:()=>t(!a),children:[(0,o.jsx)(i,{$active:a,$color:p,className:c,children:(0,o.jsx)(r,{$active:a,$color:p,className:c})}),(0,o.jsx)(g,{$labelColor:l,className:c,children:n})]})}},2611(e,n,a){a.d(n,{v:()=>u});var t=a(5043),o=a(403),s=a(5402),i=a(993),r=a(579);const g=o.Ay.img`
  width: 75px;
  margin-right: 10px;
  filter: drop-shadow(2px 2px 1px darkgray);
  opacity: 1;
`,p=o.Ay.div`
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
`,u=e=>{let{id:n,pun:a,index:o}=e;const u=!n?`/icon/${s.TK[d=o,16807*d%2147483647%s.TK.length]}`:(0,i.c)("takos",n);var d;const[h,w]=(0,t.useState)(!1);return(0,r.jsxs)(p,{onClick:a?()=>{w(!h)}:void 0,children:[a&&!h&&(0,r.jsx)(c,{children:"..."}),(0,r.jsx)(g,{alt:`tako-icon-${n}`,src:u}),h&&(0,r.jsx)(l,{onClick:e=>e.stopPropagation(),children:(0,r.jsx)(k,{children:a})})]})}},6784(e,n,a){a.r(n),a.d(n,{default:()=>R});var t=a(5043),o=a(1688),s=a(303),i=a.n(s),r=a(2611),g=a(5849),p=a(2449),l=a(7362),k=a(9944);const c=e=>`/${e.startsWith("backupArtworks/")?"":"artworks/"}${e}`;var u=a(8655),d=a(984),h=a(579);const w=e=>(0,k.L)(e.user,e.image||e.message),m={settings:{disablePanzoom:!1},buttons:{showAutoplayButton:!1,showCloseButton:!1,showDownloadButton:!1,showFullscreenButton:!1,showNextButton:!1,showPrevButton:!1,showThumbnailsButton:!1},thumbnails:{showThumbnails:!1}},y=e=>{let{submissions:n,isToggledOnlyImg:a,isToggledTextOnly:o,highlightSlug:s}=e;const[k,y]=(0,t.useState)(null),x=(0,t.useRef)(!1);(0,t.useEffect)(()=>{x.current?null==s&&window.scrollTo(0,0):x.current=!0},[s]),(0,t.useEffect)(()=>{if(null==s)return;const e=document.getElementById(`message-${s}`);if(!e)return;e.scrollIntoView({behavior:"smooth",block:"center"}),y(s);const n=setTimeout(()=>y(null),1800);return()=>clearTimeout(n)},[s,n]);const v=(0,t.useMemo)(()=>{let e=n;return a&&(e=e.filter(e=>e.image)),o&&(e=e.filter(e=>e.message)),e},[n,a,o]);return(0,h.jsx)(i(),{options:{gutter:40,columnWidth:1,fitWidth:!0,transitionDuration:0},style:{margin:"0 auto"},children:v.map((e,n)=>{const{message:t,user:s,icon:i,image:y,pun:x,event_date:v}=e,T=w(e);return(0,h.jsx)(u.Id,{id:`message-${T}`,style:k===T?{outline:"3px solid var(--light-highlight)",borderRadius:15}:void 0,children:(0,h.jsxs)(d.Zp,{children:[(0,h.jsxs)(d.aR,{children:[(0,h.jsx)(r.v,{id:i,pun:x,index:n}),s||"Anonymous Tako",(0,h.jsx)("div",{style:{marginLeft:"auto"},children:(0,h.jsx)(l.A,{slug:T,label:"Copy link to this message"})})]}),(0,h.jsxs)("div",{style:{padding:"0.75rem"},children:[!o&&y&&(y.includes("youtube")?(0,h.jsx)(u.Zy,{width:"100%",height:"315",src:`${y}${y.includes("?")?"&":"?"}enablejsapi=1`,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,onLoad:e=>(0,p.cb)(e.currentTarget)}):(0,h.jsx)(g.HU,{options:m,children:y.includes("mp4")?(0,h.jsx)("video",{width:420,controls:!0,children:(0,h.jsx)("source",{src:c(y),type:"video/mp4"})}):(0,h.jsx)(u.iM,{src:c(y),loading:"lazy",decoding:"async"})})),(!a||y.includes("mp4"))&&(0,h.jsx)(d.c5,{children:t}),v&&(0,h.jsx)("div",{style:{textAlign:"right",fontSize:"0.75rem",opacity:.6,marginTop:"0.4rem",paddingRight:"0.5rem"},children:v})]})]})},n)})})};var x=a(4997),v=a(2218),T=a(1061),f=a(5011),b=a(3536),S=a(4709),j=a(6088),A=a(3402),C=a(2117),D=a(4499);const L=10,R=()=>{const{data:e,loading:n,error:a}=(0,j.s)("/data/messageData.json"),[s,i]=(0,t.useState)([]),[r,g]=(0,t.useState)([]),[p,l]=(0,t.useState)(0),[k,m]=(0,t.useState)(!0),[R,M]=(0,t.useState)(!1),[I,K]=(0,t.useState)(!1),[P,H]=(0,t.useState)(null),$=(0,t.useRef)(!1),{hash:W}=(0,o.zy)(),z=t.useRef("");(0,t.useEffect)(()=>{if(e){const n=[...e].reverse();i(n);const a=n.slice(0,L);V(a).then(()=>{g(a),l(L),m(n.length>L)})}},[e]),(0,t.useEffect)(()=>{if($.current||!W||0===s.length)return;const e=W.replace("#",""),n=s.findIndex(n=>w(n)===e);if(n<0)return;$.current=!0,z.current="",M(!1),K(!1);const a=s.slice(0,n+1);V(a).then(()=>{g(a),l(n+1),m(s.length>n+1),H(e)})},[W,s]);const N=async()=>{if(0!==r.length){let e=s;R&&(e=e.filter(e=>""!==e.image)),I&&(e=e.filter(e=>e.message));const n=e.slice(p,L+p);0===n.length&&m(!1),await V(n),g(e=>e.concat(n)),l(e=>e+L)}};(0,t.useEffect)(()=>{if(k&&r.length>0){document.documentElement.scrollHeight>window.innerHeight||N()}},[r.length,k]);const O=(0,t.useMemo)(()=>(0,b.debounce)(async e=>{if(""!==e.target.value){const n=s.filter(n=>{var a,t;return(null!==(a=n.user)&&void 0!==a?a:"").toLowerCase().includes(e.target.value.toLowerCase())||(null!==(t=n.message)&&void 0!==t?t:"").toLowerCase().includes(e.target.value.toLowerCase())});m(!1),g(n),l(0)}else{const e=s.slice(0,L);m(!0),await V(e),g(e),l(L)}},1e3),[s]);(0,t.useEffect)(()=>()=>{O.cancel()},[O]);const E=(e,n)=>e.filter(e=>{var a,t;return(null!==(a=e.user)&&void 0!==a?a:"").toLowerCase().includes(n.toLowerCase())||(null!==(t=e.message)&&void 0!==t?t:"").toLowerCase().includes(n.toLowerCase())}),V=e=>(0,D.a)(e.filter(e=>e.image&&!e.image.includes("youtube")).map(e=>c(e.image)));return(0,h.jsxs)(d.Qs,{children:[(0,h.jsx)(A.W,{src:"/Vanilla.mp3"}),(0,h.jsxs)(S.Fp,{children:[(0,h.jsx)(S.Pn,{}),(0,h.jsx)(u.ue,{children:"Artworks & Messages"}),(0,h.jsx)(S.lU,{label:"Show messages usage hint",children:(0,h.jsx)("p",{children:'Use the toggles to show only image submissions or only text messages, or search by name. A tako icon with a speech-bubble "..." next to it has a pun hiding underneath \u2014 click it to reveal.'})})]}),n?(0,h.jsx)(v.c,{}):a?(0,h.jsx)(C.X,{what:"messages",error:a}):(0,h.jsxs)(u.gQ,{children:[(0,h.jsxs)("div",{style:{textAlign:"center",padding:"2rem 1rem 1rem"},children:[(0,h.jsx)("h1",{style:{fontSize:"clamp(1.8rem, 5vw, 3rem)",color:"var(--dark-highlight)",marginBottom:"1rem"},children:"HAPPY BIRTHDAY INA! \ud83d\udc19\ud83d\udc9c"}),(0,h.jsx)("video",{controls:!0,preload:"none",style:{maxWidth:"min(720px, 100%)",width:"100%",borderRadius:"12px"},src:"/TakoToriDay3_InaBday.mp4"}),(0,h.jsx)("p",{style:{fontSize:"0.85rem",color:"var(--dark-highlight)",marginTop:"0.5rem",opacity:.8},children:"From Drawn to Dawn Fan Meeting Day 3"})]}),(0,h.jsxs)(u.Jj,{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"1rem",flexWrap:"wrap"},children:[(0,h.jsx)(u.IW,{onChange:e=>{z.current=e.target.value,O(e)},placeholder:"Search...",style:{flex:1,minWidth:"160px"}}),(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"row",overflow:"hidden",flexShrink:0},children:[(0,h.jsx)(f.d,{label:"Only Images",value:R,onChange:e=>(async e=>{const n=z.current;if(e){g([]);const e=s.filter(e=>e.image);if(""!==n){const a=E(e,n);m(!1),g(a),l(0)}else{const n=e.slice(0,L);m(!0),await V(n),g(n),l(L)}M(!0),K(!1)}else{if(""!==n){const e=E(s,n);m(!1),g(e),l(0)}else{const e=s.slice(0,L);m(!0),await V(e),g(e),l(L)}M(!1)}})(e),color:"var(--light-highlight)",labelColor:"var(--dark-highlight)"}),(0,h.jsx)(f.d,{label:"Only messages",value:I,onChange:e=>(async e=>{const n=z.current;if(e){g([]);const e=s.filter(e=>e.message);if(""!==n){const a=E(e,n);m(!1),g(a),l(0)}else{const n=e.slice(0,L);m(!0),await V(n),g(n),l(L)}K(!0),M(!1)}else{if(""!==n){const e=E(s,n);m(!1),g(e),l(0)}else{const e=s.slice(0,L);m(!0),await V(e),g(e),l(L)}K(!1)}})(e),color:"var(--light-highlight)",labelColor:"var(--dark-highlight)"})]})]}),(0,h.jsx)(x.A,{style:{overflow:"hidden"},scrollThreshold:"50px",dataLength:r.length,next:N,hasMore:k,loader:(0,h.jsx)(u.aH,{children:(0,h.jsx)(v.c,{})}),endMessage:(0,h.jsx)("p",{style:{textAlign:"center",color:"var(--ink-black)"},children:"Yay! You have seen it all."}),children:(0,h.jsx)(y,{submissions:r,isToggledOnlyImg:R,isToggledTextOnly:I,highlightSlug:P})}),(0,h.jsx)(T.A,{})]})]})}},8655(e,n,a){a.d(n,{IW:()=>t.IW,Id:()=>t.Id,Jj:()=>t.Jj,Zy:()=>t.Zy,aH:()=>t.aH,gQ:()=>t.gQ,iM:()=>t.iM,ue:()=>t.ue});var t=a(984)},5402(e,n,a){a.d(n,{Ar:()=>t,TK:()=>s,sV:()=>o});const t=["albertoe.png","Baldako.png","CapSora.png","cedric_alpha.png","Chumbeque.png","ConcussioAmi.png","CyberToast.png","Deceptric13.png","Deracts.png","DinoTakos.png","Eyeye.png","FlaminSarge.png","Freir.png","Gaah.png","Gathog.png","HuyK.png","IcedOmachi.png","InaStoleMyHARTH.png","IrisPonn.png","izefjc.png","JustVine.png","Mangu.png","Pely_.png","Pixaurora.png","Plazma00.png","Raven0815.png","rid2079.png","SeeyahLater.png","Senki.png","Squash.png","subis.png","third12.png","Uni8.png","Vaan.png","Wahmaa.png","wydken.png","Yue.png","\u590f\u96ea.png","11.png","14.png","15.png","16.png","17.png","35.png","44.png","71.png","A random casual.png","Arthain.png","Astraea.png","BreadART.png","Chibi RoggianX.png","chuunilord.png","Corp.Shephard.png","Creau.png","Cyber Toast.png","CYtako.png","DarkNess2101.png","Deer Oh Dear.png","DHugo.png","Drebyal Draws.png","eLun.png","Endactam.png","enicholas.png","Epi.png","fluffycatfish.png","Fluid.png","Frediloc8.png","GreenFox.png","Haru.png","Hermit Purple.png","HiloNero.png","Huros.png","Ironsigh.png","Ithi.png","Jaboll252.png","Jamu(ta)ko.png","Jamuko.png","Jems.png","Jhon. Palmer.png","Joakim MF.png","junblebee.png","Kaede, Acolyte of Wahtcher.png","keoqzzi\ud83c\udf5c.png","Kinoko.png","KiwiNeko.png","kshut (@shutowl).png","Kurasu Kanon.png","Kurosagi.png","LasagnaLaffeydiction.png","Lethargic.png","Lienou.png","LynsDoodles.png","Lyudmilia.png","Machi says WAH.png","Mango Konata.png","Mara.png","McArkus.png","Meap.png","Melmarkt.png","MiJi.png","Milk.png","Minja.png","Neminem.png","NKS5.png","notaBob.png","NowaruArt.png","NxKarim.png","Nyuusai.png","OK Kei.png","OutOfRice.png","Overseer Olive.png","popop.png","ProxyZeus.png","PureTako.png","RCSI.png","Ren.png","Reyk.png","Reykhebaxh.png","RiDeth.png","Rie Cotton Cat.png","Rinh.png","Scalim.png","SeaRain.png","SharkyDoko.png","Shokuro.png","SleepDeprivedFae.png","SleepzyTofu.png","Sock.png","Spud Tako.png","Squirl.png","sunnyfaller.png","Tahi.png","Taiki Kiki.png","Takedo.png","Takollite.png","Takomonty.png","Takoster.png","Teddy B\u0295\xb4\u2022\u1d25\u2022`\u0294.png","Teo.png","The Shiv Spoon.png","Thocclord.png","Tornhalo.png","Tung.png","Valawari.png","Valtaur_tw.png","Vanilla Thunder.png","Vantablack.png","vignedev.png","WindStreak.png","Wydken.png","Yato Tako.png","Zel Maelstrom.png","zeroyaka.png","\u304a\u5144\u304e\u308a.png","\u30a4\u30ab^10.png"],o=t.length,s=["8-bit Tako.png","Hollow Tako.png","Ikadachi.png","Mori Tako.png","Robodachi.png","Tako Amelia (Takoson).png","Tako Gura (Chum Tako).png","Tako Ina.png","Tako Kiara (Tako Bell).png","Tako Ross.png","Takodachi.png","Takomfy.png","Tophat Tako.png","Violet Tako.png","Wonder Tako.png","Yuul B. Tako.png"]},9773(e,n,a){a.d(n,{G:()=>o});var t=a(5043);const o=e=>{let{muted:n,volume:a=.1,autoPlay:o=!1,videoPaused:s=!1}=e;const i=(0,t.useRef)(null);return(0,t.useEffect)(()=>{i.current&&(i.current.volume=a)},[a]),(0,t.useEffect)(()=>{const e=i.current;e&&(s||n?e.pause():e.paused&&e.play().catch(()=>{}))},[n,s]),(0,t.useEffect)(()=>{if(!o)return;let e=null,a=!1;return i.current&&!n&&i.current.play().catch(()=>{a||(e=()=>{i.current&&!n&&i.current.play().catch(()=>{}),e&&window.removeEventListener("click",e)},window.addEventListener("click",e))}),()=>{a=!0,e&&window.removeEventListener("click",e)}},[o,n]),i}},4499(e,n,a){a.d(n,{a:()=>t});const t=async e=>{await Promise.all(e.map(e=>new Promise(n=>{const a=new Image;a.onload=()=>n(),a.onerror=()=>n(),a.src=e})))}},993(e,n,a){a.d(n,{V:()=>i,c:()=>s});var t=a(5402);const o={"takos/16.png":"takos/16.PNG","takos/17.png":"takos/17.PNG","takos/35.png":"takos/Vantablack.png","takos/44.png":"takos/Wydken.png","takos/CottonCat.png":"takoswentries/CottonCat.png","takos/Creau.png":"takos/IrisPonn.png","takos/Darkodachi.png":"takoswentries/Darkodachi.png","takos/DeerOhDear.png":"takoswentries/DeerOhDear.png","takos/DumplingTakodachi.png":"takoswentries/DumplingTakodachi.png","takos/Eve.png":"takoswentries/Eve.png","takos/Gathog.png":"takoswentries/Gathog.png","takos/GrayTako.png":"takoswentries/GrayTako.png","takos/GreenFox.png":"takoswentries/GreenFox.png","takos/Ithi.png":"takoswentries/ithius.png","takos/Jamu(ta)ko.png":"takos/Jamuko.png","takos/Kais3r.png":"takoswentries/Kais3r.png","takos/KnightedTako.png":"takoswentries/KnightedTako.png","takos/LotusPondTako.png":"takoswentries/LotusPondTako.png","takos/Machi says WAH.png":"takos/Takomachi.png","takos/MrKamedachi.png":"takoswentries/MrKamedachi.png","takos/Rina.png":"takoswentries/Rina.png","takos/RogueTakolyte.png":"takoswentries/RogueTakolyte.png","takos/SleepzyTofu.png":"takoswentries/SleepzyTofu.png","takos/TakoGoomy.png":"takoswentries/TakoGoomy.png","takos/TakoLamp.png":"takoswentries/TakoLamp.png","takos/Takobocchi.png":"takoswentries/Takobocchi.png","takos/Takozashi.png":"takoswentries/Takozashi.png","takos/Tasaowl.png":"takos/Takoster.png","takos/Vaan.png":"takoswentries/Baldako.png","takos/VaanTheBrainlessOne.png":"takoswentries/VaanTheBrainlessOne.png","takos/drizzle.png":"takoswentries/drizzle.png","takos/eLun.png":"takos/eLudachi.png","takos/ithius.png":"takoswentries/ithius.png","takos/m-pien.png":"takoswentries/m-pien.png","takos/popop.png":"takoswentries/popop.png","takos/wydken.png":"takos/Wydken.png","takos/\u72ac\u4e09.png":"takoswentries/\u72ac\u4e09.png","takoswentries/Arandomcasual.png":"takos/A random casual.png","takoswentries/Arthain.png":"takos/Arthain.png","takoswentries/Astraea.png":"takos/Astraea.png","takoswentries/BreadART.png":"takos/BreadART.png","takoswentries/CapSora.png":"takos/CapSora.png","takoswentries/Chuunilord.png":"takoswentries/chuunilord.png","takoswentries/Chumbeque.png":"takos/Chumbeque.png","takoswentries/ConcussioAmi.png":"takos/ConcussioAmi.png","takoswentries/Corp.Shephard.png":"takos/Corp.Shephard.png","takoswentries/Creau.png":"takos/IrisPonn.png","takoswentries/CyberToast.png":"takos/CyberToast.png","takoswentries/DHugo.png":"takos/DHugo.png","takoswentries/DarkNess2101.png":"takos/DarkNess2101.png","takoswentries/Deceptric13.png":"takos/Deceptric13.png","takoswentries/Deracts.png":"takos/Deracts.png","takoswentries/DinoTakos.png":"takos/DinoTakos.png","takoswentries/Endactam.png":"takos/Endactam.png","takoswentries/Exvnir.png":"takos/Exvnir.png","takoswentries/Eyeye.png":"takos/Eyeye.png","takoswentries/FlaminSarge.png":"takos/FlaminSarge.png","takoswentries/Freir.png":"takos/Freir.png","takoswentries/Gaah.png":"takos/Gaah.png","takoswentries/Haru.png":"takos/Haru.png","takoswentries/HiloNero.png":"takos/HiloNero.png","takoswentries/Huros.png":"takos/Huros.png","takoswentries/HuyK.png":"takos/HuyK.png","takoswentries/IcedOmachi.png":"takos/IcedOmachi.png","takoswentries/InaStoleMyHARTH.png":"takos/InaStoleMyHARTH.png","takoswentries/IrisPonn.png":"takos/IrisPonn.png","takoswentries/Ironsigh.png":"takos/Ironsigh.png","takoswentries/Ithi.png":"takoswentries/ithius.png","takoswentries/Ithius.png":"takoswentries/ithius.png","takoswentries/Jaboll252.png":"takos/Jaboll252.png","takoswentries/Jamuko.png":"takos/Jamuko.png","takoswentries/Jems.png":"takos/Jems.png","takoswentries/JustVine.png":"takos/JustVine.png","takoswentries/Kaede,AcolyteofWahtcher.png":"takos/Kaede, Acolyte of Wahtcher.png","takoswentries/KiwiNeko.png":"takos/KiwiNeko.png","takoswentries/KurasuKanon.png":"takos/Kurasu Kanon.png","takoswentries/LasagnaLaffeydiction.png":"takos/LasagnaLaffeydiction.png","takoswentries/Lethargic.png":"takos/Lethargic.png","takoswentries/LynsDoodles.png":"takos/LynsDoodles.png","takoswentries/Lyudmilia.png":"takos/Lyudmilia.png","takoswentries/MachisaysWAH.png":"takos/Takomachi.png","takoswentries/Mangu.png":"takos/Mangu.png","takoswentries/McArkus.png":"takos/McArkus.png","takoswentries/Melmarkt.png":"takos/Melmarkt.png","takoswentries/MiJi.png":"takos/MiJi.png","takoswentries/Minja.png":"takos/Minja.png","takoswentries/Neminem.png":"takos/Neminem.png","takoswentries/Nowaru.png":"takos/NowaruArt.png","takoswentries/NowaruArt.png":"takos/NowaruArt.png","takoswentries/NxKarim.png":"takos/NxKarim.png","takoswentries/OutOfRice.png":"takos/OutOfRice.png","takoswentries/OverseerOlive.png":"takos/Overseer Olive.png","takoswentries/Pely_.png":"takos/Pely_.png","takoswentries/Pixaurora.png":"takos/Pixaurora.png","takoswentries/Plazma00.png":"takos/Plazma00.png","takoswentries/Popop.png":"takoswentries/popop.png","takoswentries/ProxyZeus.png":"takos/ProxyZeus.png","takoswentries/RCSI.png":"takos/RCSI.png","takoswentries/Raven0815.png":"takos/Raven0815.png","takoswentries/Ren.png":"takos/Ren.png","takoswentries/Reyk.png":"takos/Reyk.png","takoswentries/Scalim.png":"takos/Scalim.png","takoswentries/SeeyahLater.png":"takos/SeeyahLater.png","takoswentries/Senki.png":"takos/Senki.png","takoswentries/SharkyDoko.png":"takos/SharkyDoko.png","takoswentries/SleepDeprivedFae.png":"takos/SleepDeprivedFae.png","takoswentries/Sock.png":"takos/Sock.png","takoswentries/Squash.png":"takos/Squash.png","takoswentries/TaikiKiki.png":"takos/Taiki Kiki.png","takoswentries/Takoster.png":"takos/Takoster.png","takoswentries/Tasaowl.png":"takos/Takoster.png","takoswentries/Teo.png":"takos/Teo.png","takoswentries/TheShivSpoon.png":"takos/The Shiv Spoon.png","takoswentries/Tornhalo.png":"takos/Tornhalo.png","takoswentries/Uni8.png":"takos/Uni8.png","takoswentries/Vaan.png":"takoswentries/Baldako.png","takoswentries/Valawari.png":"takos/Valawari.png","takoswentries/VanillaThunder.png":"takos/Vanilla Thunder.png","takoswentries/Vantablack.png":"takos/Vantablack.png","takoswentries/WAHmaa.png":"takos/Wahmaa.png","takoswentries/Wahmaa.png":"takos/Wahmaa.png","takoswentries/Wydken.png":"takos/Wydken.png","takoswentries/YatoTako.png":"takos/Yato Tako.png","takoswentries/Yatotako.png":"takos/Yato Tako.png","takoswentries/Yue.png":"takos/Yue.png","takoswentries/albertoe.png":"takos/albertoe.png","takoswentries/cedric_alpha.png":"takos/cedric_alpha.png","takoswentries/eLun.png":"takos/eLudachi.png","takoswentries/izefjc.png":"takos/izefjc.png","takoswentries/junblebee.png":"takos/junblebee.png","takoswentries/kshut(@shutowl).png":"takos/kshut (@shutowl).png","takoswentries/rid2079.png":"takos/rid2079.png","takoswentries/subis.png":"takos/subis.png","takoswentries/third12.png":"takos/third12.png","takoswentries/vignedev.png":"takos/vignedev.png","takoswentries/wydken.png":"takos/Wydken.png","takoswentries/zeroyaka.png":"takos/zeroyaka.png","takoswentries/\u30a4\u30ab^10.png":"takos/\u30a4\u30ab^10.png","takoswentries/\u590f\u96ea.png":"takos/\u590f\u96ea.png"};function s(e,n){var a;const[t,...s]=(null!==(a=o[`${e}/${n}`])&&void 0!==a?a:`${e}/${n}`).split("/");return`/${t}/${encodeURIComponent(s.join("/"))}`}function i(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(e&&""!==e.trim())return s("takoswentries",`${e.replace(/ /g,"")}.png`);return`/icon/${t.TK[n%t.TK.length]}`}}}]);
//# sourceMappingURL=784.fd1b8107.chunk.js.map
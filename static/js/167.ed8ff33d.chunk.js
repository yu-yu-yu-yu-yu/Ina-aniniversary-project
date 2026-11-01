"use strict";(globalThis.webpackChunkina=globalThis.webpackChunkina||[]).push([[167],{4709(t,e,a){a.d(e,{Fp:()=>l,Pn:()=>m,lU:()=>g,uW:()=>u});var n=a(403),o=a(2582),i=a(5043),r=a(5019),s=a(579);const l=n.Ay.nav`
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
`,p=(0,n.Ay)(o.k2)`
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
`,u=n.Ay.button`
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
`,h=n.Ay.div`
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
`,m=()=>(0,s.jsx)(p,{exact:!0,to:"/",children:(0,s.jsx)("i",{className:"fa fa-home"})}),g=t=>{let{label:e,children:a}=t;const[n,o]=(0,i.useState)(!1);return(0,s.jsxs)("div",{style:{flex:"0 0 auto",position:"relative"},children:[(0,s.jsxs)(u,{"aria-label":e,title:e,onClick:()=>o(t=>!t),children:[(0,s.jsx)("i",{className:"fa fa-question-circle","aria-hidden":"true"}),(0,s.jsx)("span",{className:"btn-text",children:"Help"})]}),n&&(0,s.jsx)(h,{onClick:()=>o(!1),children:a})]})}},3402(t,e,a){a.d(e,{W:()=>r});a(5043);var n=a(9773),o=a(1472),i=a(579);const r=t=>{let{src:e,pauseOnVideo:a=!1}=t;const{muted:r,videoPlaying:s}=(0,o.d2)(),l=(0,n.G)({muted:r,autoPlay:!0,videoPaused:a&&s});return(0,i.jsx)("audio",{ref:l,src:""+e,loop:!0,preload:"auto",style:{display:"none"}})}},9167(t,e,a){a.r(e),a.d(e,{default:()=>R});var n=a(5043);const o=JSON.parse('[{"title":"BGM","people":[{"name":"DOVA-SYNDROME","url":"https://dova-s.jp/"}]},{"title":"Timeline Banner Outfit Artworks","people":[{"name":"rinh","url":"https://twitter.com/fakh_rinh"},{"name":"eLun","url":"https://twitter.com/Elun_00"},{"name":"Takomonty","url":"https://twitter.com/takomonty"},{"name":"floomf","url":"https://twitter.com/fluumf"},{"name":"Sei","url":"https://twitter.com/seiaru_n"},{"name":"LuLu","url":"https://twitter.com/Lucferz13"},{"name":"Malvar0.0","url":"https://twitter.com/malvar0_0"},{"name":"kshut","url":"https://twitter.com/shutowl"},{"name":"m-pien","url":"https://twitter.com/mpien6"},{"name":"Yoru","url":"https://twitter.com/_yor_n"},{"name":"Younhand","url":"https://twitter.com/Youn_hand"},{"name":"Kais3r","url":"https://twitter.com/TentacleLuver"},{"name":"NowaruArt","url":"https://twitter.com/NowaruArt"},{"name":"Eyeye","url":"https://twitter.com/Eyeye_HS"},{"name":"JangJang","url":"https://twitter.com/J4ngaro"},{"name":"Taiki","url":"https://twitter.com/Taiki_Kiki2"},{"name":"RCSI","url":"https://twitter.com/RCSI"},{"name":"Teo","url":"https://twitter.com/TeoMurs"},{"name":"Diana","url":"https://twitter.com/valkyrie_illust"},{"name":"Applejuice","url":"https://twitter.com/Applenotepad91"},{"name":"Wydken","url":"https://twitter.com/wydken"},{"name":"Astra of Antares","url":"https://twitter.com/Astra_ofAntares"},{"name":"Shf1","url":"https://twitter.com/JemsArt"},{"name":"Ani","url":"https://twitter.com/ani_019"},{"name":"Sock","url":"https://twitter.com/Sock_Wanders"},{"name":"Mahiru","url":"https://twitter.com/__mahiru03"},{"name":"Cotton Cat","url":"https://x.com/rie_ccat"},{"name":"LynsPixels","url":"https://x.com/LynsPixels"},{"name":"Ruthar","url":"https://x.com/DRuthar"},{"name":"drizzle","url":"https://x.com/drizzle_021"},{"name":"Rogue Takolyte","url":"https://x.com/ArchiveTakolyte"},{"name":"nataniachan","url":"https://x.com/hpgbproductions"},{"name":"\u72ac\u4e09","url":"https://x.com/cyuan_nil"},{"name":"Reykhebaxh"},{"name":"Altthiel"},{"name":"nodenn"},{"name":"kipo"},{"name":"Nyuusai"}]},{"title":"All for One Banner Planning and Organizing","people":[{"name":"StrawberryCandy","url":"https://twitter.com/StrawberryCan_D"},{"name":"Sock","url":"https://twitter.com/Sock_Wanders"}]},{"title":"Homepage Takodex Ina Art (S2D Animation)","people":[{"name":"Shikabashi","url":"https://twitter.com/Shikabashi"}]},{"title":"Homepage Lore Illustration & Animation","people":[{"name":"valkyrie_illust","url":"https://twitter.com/valkyrie_illust"}]},{"title":"Gallery Characters","people":[{"name":"Takomonty","url":"https://twitter.com/takomonty"}]},{"title":"Letter and Balloon Assets","people":[{"name":"NowaruArt","url":"https://twitter.com/NowaruArt"}]},{"title":"Web Design","people":[{"name":"Losfroger","url":"https://twitter.com/losfroger"},{"name":"Swoog","url":"https://twitter.com/swoog10"},{"name":"NxKarim","url":"https://twitter.com/NexoZerok"}]},{"title":"Loading Animation","people":[{"name":"Chroneco","url":"https://twitter.com/chrone_co"}]},{"title":"Developers","people":[{"name":"NxKarim","url":"https://twitter.com/NexoZerok"},{"name":"Yuyu"},{"name":"Kinji","url":"https://twitter.com/KinjiDD"}]},{"title":"Testing","people":[{"name":"NxKarim","url":"https://twitter.com/NexoZerok"},{"name":"Takkito","url":"https://twitter.com/takkito_tyr"},{"name":"Ryusei","url":"https://x.com/Ryusei_Kiiro"},{"name":"laffeydict","url":"https://twitter.com/laffeydict"},{"name":"uranimum235","url":"https://twitter.com/uranimum235"},{"name":"gathog","url":"https://x.com/GathogOnX"},{"name":"NowaruArt","url":"https://twitter.com/NowaruArt"},{"name":"subisdum","url":"https://twitter.com/subisdum"},{"name":"TinHuy","url":"https://x.com/TinHuy57581946"}]},{"title":"Submission Manager","people":[{"name":"Takkito","url":"https://twitter.com/takkito_tyr"},{"name":"NxKarim","url":"https://twitter.com/NexoZerok"},{"name":"Uni88","url":"https://twitter.com/YesThatUni"},{"name":"1st Killer","url":"https://twitter.com/wololoSensei"},{"name":"Lyudmilia","url":"https://twitter.com/lyudmilia"},{"name":"Airi"}]},{"title":"Planning and Organizing","people":[{"name":"Lynn"},{"name":"Rift","url":"https://twitter.com/RiftyRifto"},{"name":"Lyudmilia","url":"https://twitter.com/lyudmilia"},{"name":"1st Killer","url":"https://twitter.com/wololoSensei"},{"name":"Ryusei","url":"https://x.com/Ryusei_Kiiro"},{"name":"Uni88","url":"https://twitter.com/YesThatUni"},{"name":"NxKarim","url":"https://twitter.com/NexoZerok"},{"name":"Vanilla Thunder","url":"https://twitter.com/Vanilla_Inazuma"}]},{"title":"General Contribution","people":[{"name":"Takkito","url":"https://twitter.com/takkito_tyr"},{"name":"Rift","url":"https://twitter.com/RiftyRifto"},{"name":"Lyudmilia","url":"https://twitter.com/lyudmilia"},{"name":"1st Killer","url":"https://twitter.com/wololoSensei"},{"name":"Ryusei","url":"https://x.com/Ryusei_Kiiro"},{"name":"Uni88","url":"https://twitter.com/YesThatUni"}]},{"title":"Helpers","people":[{"name":"Astra of Antares","url":"https://twitter.com/Astra_ofAntares"},{"name":"subisdum","url":"https://twitter.com/subisdum"},{"name":"Gathog","url":"https://x.com/GathogOnX"},{"name":"TinHuy","url":"https://x.com/TinHuy57581946"},{"name":"laffeydict","url":"https://twitter.com/laffeydict"},{"name":"NowaruArt","url":"https://twitter.com/NowaruArt"},{"name":"Takkito","url":"https://twitter.com/takkito_tyr"},{"name":"Takomonty","url":"https://twitter.com/takomonty"},{"name":"uranimum","url":"https://twitter.com/uranimum235"},{"name":"Wydken","url":"https://twitter.com/wydken"},{"name":"eLun","url":"https://twitter.com/Elun_00"}]},{"title":"Messages, Artworks, Custom Takos, Letters, Puns, Comments and more","people":[{"name":"By lots of cute Takodachis!"}],"showTakoCount":true},{"title":"Graphic design","people":[{"name":"My passion"}]},{"title":"That cookie","people":[{"name":"was so good"}]},{"title":"Takonomicon Project Direction and Digital Book","people":[{"name":"NxKarim","url":"https://x.com/NexoZerok"}]},{"title":"Takonomicon Writing, Formatting and Drop Caps","people":[{"name":"Astraea","url":"https://x.com/astra_witch_of_antares"}]},{"title":"Takonomicon Cover and Page Illustrations","people":[{"name":"yueuu","url":"https://x.com/heirave"}]},{"title":"Takonomicon Icons, Paper Textures and Cursor","people":[{"name":"Laffeydiction","url":"https://x.com/laffeydict"}]},{"title":"Takonomicon Sticky Notes and Handwritten Font","people":[{"name":"HuyK","url":"https://x.com/huyk2002"}]},{"title":"Takonomicon Tako Doodles and Bookmark","people":[{"name":"\u72ac\u4e09","url":"https://x.com/cyuan_nil"},{"name":"uranimum","url":"https://x.com/uranimum235"},{"name":"justvineu","url":"https://x.com/Takodachi07"}]},{"title":"Takonomicon Ideas and Feedback","people":[{"name":"Lyud","url":"https://x.com/lyudmilia"},{"name":"sub/soup","url":"https://x.com/subisdum"},{"name":"Gathog","url":"https://x.com/GathogOnX"},{"name":"wydken","url":"https://x.com/wydken"},{"name":"radioactivebean"},{"name":"Nameless","url":"https://x.com/namelesstheythem"}]},{"title":"Takonomicon Standalone Theories","people":[{"name":"IrisPonn","url":"https://x.com/AniAlchemist"},{"name":"kana_"},{"name":"Cyber Toast","url":"https://x.com/CyberToast3"},{"name":"Ukrainian Deadbeat"},{"name":"HuyK"},{"name":"lotus"},{"name":"Soul","url":"https://x.com/Doctah_Soul"},{"name":"Jayteamations","url":"https://x.com/jayteamations"},{"name":"Raffaille"},{"name":"keoqzzi"},{"name":"lorenweng"}]},{"title":"Special Thanks","people":[{"name":"Our Priestess: Ninomae Ina\'nis","url":"https://twitter.com/ninomaeinanis"}]}]');var i=a(4526),r=a(4530),s=a(4709),l=a(984),p=a(5402),u=a(403),h=a(5019);const m=u.Ay.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 5% 80px;
  position: relative;
  z-index: 5;
  text-align: center;
`,g=u.Ay.section`
  margin-bottom: 40px;
`,d=u.Ay.h2`
  color: var(--dark-highlight);
  font: normal normal 700 clamp(20px, 1.6vw, 28px) / 1.3 Montserrat;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin: 0 0 10px 0;
`,c=u.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px 14px;
  justify-content: center;
`,k=u.Ay.a`
  color: var(--dark-highlight);
  font: normal normal 300 clamp(18px, 1.1vw, 22px) / 1.3 Mulish;
  text-decoration: underline;
  opacity: 0.85;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`,w=u.Ay.span`
  color: var(--dark-highlight);
  font: normal normal 300 clamp(18px, 1.1vw, 22px) / 1.3 Mulish;
`,y=u.Ay.p`
  color: var(--dark-highlight);
  font: normal normal 600 16px/22px Montserrat;
  text-align: center;
  margin: 8px 0 0 0;
  opacity: 0.7;
`,v=u.Ay.p`
  color: var(--dark-highlight);
  font: normal normal 300 16px/22px Mulish;
  text-align: center;
  margin-top: 48px;
  opacity: 0.8;
`,f=u.Ay.hr`
  border: none;
  border-top: 1px solid var(--dark-highlight);
  opacity: 0.2;
  margin: 0 auto 40px;
  width: 60%;
`,x=u.Ay.button`
  background: none;
  border: none;
  padding: 0;
  color: var(--dark-highlight);
  font: normal normal 300 clamp(18px, 1.1vw, 22px) / 1.3 Mulish;
  text-decoration: underline dotted;
  cursor: pointer;
  opacity: 0.85;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`,_=u.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: ${h.fE.backdrop};
`,T=u.Ay.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(700px, 90vw);
  max-height: 80vh;
  background: var(--background);
  border-radius: 16px;
  box-shadow: 0 4px 32px #0008;
  z-index: ${h.fE.modal};
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
`,b=u.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`,A=u.Ay.button`
  background: none;
  border: none;
  color: var(--dark-highlight);
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  padding: 4px;
`,I=u.Ay.div`
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  align-content: flex-start;
`,S=u.Ay.span`
  color: var(--dark-highlight);
  background: var(--dark-highlight-transparent, rgba(0, 0, 0, 0.06));
  font: normal normal 300 14px/1.3 Mulish;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid var(--dark-highlight);
`;var N=a(3402),E=a(579);const M=o,C=["/data/letterData.json","/data/messageData.json","/data/video.json","/data/wahrldData.json","/data/TakoEntries.json","/data/momentsData.json"],R=()=>{const[t,e]=(0,n.useState)(!1),[a,o]=(0,n.useState)(null),[u,h]=(0,n.useState)(!1),R=async()=>{if(e(!0),!a&&!u)try{const[t,e,a,n,r,s]=await Promise.all(C.map(t=>fetch(t).then(t=>t.json())));o(((t,e,a,n,o,i,r)=>{const s=[...t.map(t=>t.user),...e.map(t=>t.user),...a.map(t=>t.user),...n.map(t=>t.user),...o.map(t=>t.author),...r.map(t=>t.artist),...i.flatMap(t=>{var e,a;return[...(null!==(e=t.tributes)&&void 0!==e?e:[]).map(t=>t.author),...(null!==(a=t.reactions)&&void 0!==a?a:[]).map(t=>t.author)]})],l=new Map;return s.forEach(t=>{const e=null===t||void 0===t?void 0:t.trim();if(!e)return;const a=e.toLowerCase();l.has(a)||l.set(a,e)}),Array.from(l.values()).sort((t,e)=>t.localeCompare(e,void 0,{sensitivity:"base"}))})(t,e,a,n,r,s,i))}catch{h(!0)}};return(0,E.jsxs)("div",{style:{position:"relative",minHeight:"100vh",background:"var(--background)"},children:[(0,E.jsx)(N.W,{src:"/\u663c\u5bdd\u306e\u30b9\u30b9\u30e1.mp3"}),(0,E.jsxs)(s.Fp,{children:[(0,E.jsx)(s.Pn,{}),(0,E.jsx)(l.ue,{children:"Credits"})]}),(0,E.jsx)(r.A,{freeFloat:!0,zIndex:1}),(0,E.jsxs)(m,{children:[M.map((t,e)=>(0,E.jsxs)(n.Fragment,{children:[e>0&&(0,E.jsx)(f,{}),(0,E.jsxs)(g,{children:[(0,E.jsx)(d,{children:t.title}),(0,E.jsx)(c,{children:t.people.map((e,a)=>e.url?(0,E.jsx)(k,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:e.name},a):t.showTakoCount?(0,E.jsx)(x,{onClick:R,children:e.name},a):(0,E.jsx)(w,{children:e.name},a))}),t.showTakoCount&&(0,E.jsxs)(y,{children:["More than ",p.sV," takodachis!"]})]})]},e)),(0,E.jsx)(v,{children:"Thanks to all the amazing takos who shared their art, sent messages, wrote letters, or simply cheered from the sidelines!"})]}),t&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(_,{onClick:()=>e(!1)}),(0,E.jsxs)(T,{children:[(0,E.jsxs)(b,{children:[(0,E.jsx)(d,{children:"Takodachis"}),(0,E.jsx)(A,{onClick:()=>e(!1),"aria-label":"Close",children:"\xd7"})]}),(0,E.jsx)(I,{children:u?(0,E.jsx)(w,{children:"Couldn't load the list, sorry!"}):a?a.map(t=>(0,E.jsx)(S,{children:t},t)):(0,E.jsx)(w,{children:"Loading..."})})]})]})]})}},4530(t,e,a){a.d(e,{A:()=>g});var n=a(5043),o=a(403),i=a(5402),r=a(993),s=a(6785),l=a(1472),p=a(579);const u=o.i7`
  0% {
    transform: translateY(0) scaleX(1.5) scaleY(0.5);
    opacity: 0;
  }
  2% {
    opacity: 1;
    transform: translateY(-10px) scaleX(0.5) scaleY(1.5);
  }
  15% {
    transform: translateY(-30px) scaleX(1.3) scaleY(0.7);
  }
  30% {
    transform: translateY(-60px) scaleX(0.7) scaleY(1.3);
  }
  50% {
    transform: translateY(-100px) scaleX(1.2) scaleY(0.8);
  }
  70% {
    transform: translateY(-140px) scaleX(0.8) scaleY(1.2);
  }
  90% {
    opacity: 1;
    transform: translateY(-180px) scaleX(1.1) scaleY(0.9);
  }
  100% {
    transform: translateY(-100vh) scaleX(1) scaleY(1);
    opacity: 0;
  }
`,h=o.Ay.img`
  position: absolute;
  left: ${t=>{let{$left:e}=t;return e}}vw;
  bottom: ${t=>{let{$bottom:e}=t;return e}}px;
  height: 5vmax;
  max-height: 100px;
  min-height: 20px;
  width: auto;
  z-index: 3;
  pointer-events: none;
  will-change: transform;
  animation: ${u} 9s linear forwards;
`,m=o.Ay.div`
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  z-index: ${t=>{let{$zIndex:e}=t;return null!==e&&void 0!==e?e:3}};
  overflow: visible;
  overflow-x: hidden;
  pointer-events: none;
`,g=t=>{let{freeFloat:e=!1,zIndex:a,glitchStartMs:o=0,glitchMs:u}=t;const[g,d]=(0,n.useState)([]),c=(0,n.useRef)(null),k=(0,n.useRef)(null),{muted:w}=(0,l.d2)(),[y]=(0,n.useState)(!e),v=(0,s.u3)(o,u);(0,n.useEffect)(()=>{i.Ar.forEach(t=>{(new Image).src=(0,r.c)("takos",t)})},[]),(0,n.useEffect)(()=>{const t=()=>{const t=Math.floor(3*Math.random())+1,e=document.documentElement.scrollHeight,a=[];for(let n=0;n<t;n++)Math.random()<.6&&a.push({key:Date.now()+Math.random()+n,left:y?f():90*Math.random(),tako:i.Ar[Math.floor(Math.random()*i.Ar.length)],bottom:Math.random()*e,createdAt:Date.now()});a.length>0&&d(t=>[...t,...a])},e=()=>{c.current=setInterval(t,1e3)},a=()=>{c.current&&clearInterval(c.current)},n=()=>"hidden"===document.visibilityState?a():e();return e(),document.addEventListener("visibilitychange",n),()=>{a(),document.removeEventListener("visibilitychange",n)}},[]),(0,n.useEffect)(()=>{const t=setInterval(()=>{d(t=>t.filter(t=>Date.now()-t.createdAt<9e3))},1e3);return()=>clearInterval(t)},[]);const f=()=>Math.random()<.5?10*Math.random():90+10*Math.random(),x=()=>{k.current&&!w&&(k.current.volume=.2,k.current.currentTime=0,k.current.play().catch(()=>{}))};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("audio",{ref:k,src:"/inatakosound.mp3",preload:"auto",style:{display:"none"}}),(0,p.jsx)(m,{$zIndex:a,children:g.map(t=>(0,p.jsx)(h,{$left:t.left,$bottom:t.bottom,src:v>0&&(0,s.$s)(t.key)<=v?`/${s.RL}`:(0,r.c)("takos",t.tako),alt:"floating takodachi",onClick:x,style:{pointerEvents:"auto",cursor:"pointer"}},t.key))})]})}},6785(t,e,a){a.d(e,{$s:()=>i,RL:()=>o,u3:()=>r});var n=a(5043);const o="takos/takoglitch.gif",i=t=>Math.floor(1e3*t)%997/997,r=(t,e)=>{const[a,i]=(0,n.useState)(0);return(0,n.useEffect)(()=>{if(!e)return;(new Image).src=`/${o}`;const a=performance.now(),n=setInterval(()=>{const o=Math.min(1,Math.max(0,(performance.now()-a-t)/(e-t)));i(o),o>=1&&clearInterval(n)},250);return()=>clearInterval(n)},[t,e]),a}},5402(t,e,a){a.d(e,{Ar:()=>n,TK:()=>i,sV:()=>o});const n=["albertoe.png","Baldako.png","CapSora.png","cedric_alpha.png","Chumbeque.png","ConcussioAmi.png","CyberToast.png","Deceptric13.png","Deracts.png","DinoTakos.png","Eyeye.png","FlaminSarge.png","Freir.png","Gaah.png","Gathog.png","HuyK.png","IcedOmachi.png","InaStoleMyHARTH.png","IrisPonn.png","izefjc.png","JustVine.png","Mangu.png","Pely_.png","Pixaurora.png","Plazma00.png","Raven0815.png","rid2079.png","SeeyahLater.png","Senki.png","Squash.png","subis.png","third12.png","Uni8.png","Vaan.png","Wahmaa.png","wydken.png","Yue.png","\u590f\u96ea.png","11.png","14.png","15.png","16.png","17.png","35.png","44.png","71.png","A random casual.png","Arthain.png","Astraea.png","BreadART.png","Chibi RoggianX.png","chuunilord.png","Corp.Shephard.png","Creau.png","Cyber Toast.png","CYtako.png","DarkNess2101.png","Deer Oh Dear.png","DHugo.png","Drebyal Draws.png","eLun.png","Endactam.png","enicholas.png","Epi.png","fluffycatfish.png","Fluid.png","Frediloc8.png","GreenFox.png","Haru.png","Hermit Purple.png","HiloNero.png","Huros.png","Ironsigh.png","Ithi.png","Jaboll252.png","Jamu(ta)ko.png","Jamuko.png","Jems.png","Jhon. Palmer.png","Joakim MF.png","junblebee.png","Kaede, Acolyte of Wahtcher.png","keoqzzi\ud83c\udf5c.png","Kinoko.png","KiwiNeko.png","kshut (@shutowl).png","Kurasu Kanon.png","Kurosagi.png","LasagnaLaffeydiction.png","Lethargic.png","Lienou.png","LynsDoodles.png","Lyudmilia.png","Machi says WAH.png","Mango Konata.png","Mara.png","McArkus.png","Meap.png","Melmarkt.png","MiJi.png","Milk.png","Minja.png","Neminem.png","NKS5.png","notaBob.png","NowaruArt.png","NxKarim.png","Nyuusai.png","OK Kei.png","OutOfRice.png","Overseer Olive.png","popop.png","ProxyZeus.png","PureTako.png","RCSI.png","Ren.png","Reyk.png","Reykhebaxh.png","RiDeth.png","Rie Cotton Cat.png","Rinh.png","Scalim.png","SeaRain.png","SharkyDoko.png","Shokuro.png","SleepDeprivedFae.png","SleepzyTofu.png","Sock.png","Spud Tako.png","Squirl.png","sunnyfaller.png","Tahi.png","Taiki Kiki.png","Takedo.png","Takollite.png","Takomonty.png","Takoster.png","Teddy B\u0295\xb4\u2022\u1d25\u2022`\u0294.png","Teo.png","The Shiv Spoon.png","Thocclord.png","Tornhalo.png","Tung.png","Valawari.png","Valtaur_tw.png","Vanilla Thunder.png","Vantablack.png","vignedev.png","WindStreak.png","Wydken.png","Yato Tako.png","Zel Maelstrom.png","zeroyaka.png","\u304a\u5144\u304e\u308a.png","\u30a4\u30ab^10.png"],o=n.length,i=["8-bit Tako.png","Hollow Tako.png","Ikadachi.png","Mori Tako.png","Robodachi.png","Tako Amelia (Takoson).png","Tako Gura (Chum Tako).png","Tako Ina.png","Tako Kiara (Tako Bell).png","Tako Ross.png","Takodachi.png","Takomfy.png","Tophat Tako.png","Violet Tako.png","Wonder Tako.png","Yuul B. Tako.png"]},9773(t,e,a){a.d(e,{G:()=>o});var n=a(5043);const o=t=>{let{muted:e,volume:a=.1,autoPlay:o=!1,videoPaused:i=!1}=t;const r=(0,n.useRef)(null);return(0,n.useEffect)(()=>{r.current&&(r.current.volume=a)},[a]),(0,n.useEffect)(()=>{const t=r.current;t&&(i||e?t.pause():t.paused&&t.play().catch(()=>{}))},[e,i]),(0,n.useEffect)(()=>{if(!o)return;let t=null,a=!1;return r.current&&!e&&r.current.play().catch(()=>{a||(t=()=>{r.current&&!e&&r.current.play().catch(()=>{}),t&&window.removeEventListener("click",t)},window.addEventListener("click",t))}),()=>{a=!0,t&&window.removeEventListener("click",t)}},[o,e]),r}},993(t,e,a){a.d(e,{V:()=>r,c:()=>i});var n=a(5402);const o={"takos/16.png":"takos/16.PNG","takos/17.png":"takos/17.PNG","takos/35.png":"takos/Vantablack.png","takos/44.png":"takos/Wydken.png","takos/CottonCat.png":"takoswentries/CottonCat.png","takos/Creau.png":"takos/IrisPonn.png","takos/Darkodachi.png":"takoswentries/Darkodachi.png","takos/DeerOhDear.png":"takoswentries/DeerOhDear.png","takos/DumplingTakodachi.png":"takoswentries/DumplingTakodachi.png","takos/Eve.png":"takoswentries/Eve.png","takos/Gathog.png":"takoswentries/Gathog.png","takos/GrayTako.png":"takoswentries/GrayTako.png","takos/GreenFox.png":"takoswentries/GreenFox.png","takos/Ithi.png":"takoswentries/ithius.png","takos/Jamu(ta)ko.png":"takos/Jamuko.png","takos/Kais3r.png":"takoswentries/Kais3r.png","takos/KnightedTako.png":"takoswentries/KnightedTako.png","takos/LotusPondTako.png":"takoswentries/LotusPondTako.png","takos/Machi says WAH.png":"takos/Takomachi.png","takos/MrKamedachi.png":"takoswentries/MrKamedachi.png","takos/Rina.png":"takoswentries/Rina.png","takos/RogueTakolyte.png":"takoswentries/RogueTakolyte.png","takos/SleepzyTofu.png":"takoswentries/SleepzyTofu.png","takos/TakoGoomy.png":"takoswentries/TakoGoomy.png","takos/TakoLamp.png":"takoswentries/TakoLamp.png","takos/Takobocchi.png":"takoswentries/Takobocchi.png","takos/Takozashi.png":"takoswentries/Takozashi.png","takos/Tasaowl.png":"takos/Takoster.png","takos/Vaan.png":"takoswentries/Baldako.png","takos/VaanTheBrainlessOne.png":"takoswentries/VaanTheBrainlessOne.png","takos/drizzle.png":"takoswentries/drizzle.png","takos/eLun.png":"takos/eLudachi.png","takos/ithius.png":"takoswentries/ithius.png","takos/m-pien.png":"takoswentries/m-pien.png","takos/popop.png":"takoswentries/popop.png","takos/wydken.png":"takos/Wydken.png","takos/\u72ac\u4e09.png":"takoswentries/\u72ac\u4e09.png","takoswentries/Arandomcasual.png":"takos/A random casual.png","takoswentries/Arthain.png":"takos/Arthain.png","takoswentries/Astraea.png":"takos/Astraea.png","takoswentries/BreadART.png":"takos/BreadART.png","takoswentries/CapSora.png":"takos/CapSora.png","takoswentries/Chuunilord.png":"takoswentries/chuunilord.png","takoswentries/Chumbeque.png":"takos/Chumbeque.png","takoswentries/ConcussioAmi.png":"takos/ConcussioAmi.png","takoswentries/Corp.Shephard.png":"takos/Corp.Shephard.png","takoswentries/Creau.png":"takos/IrisPonn.png","takoswentries/CyberToast.png":"takos/CyberToast.png","takoswentries/DHugo.png":"takos/DHugo.png","takoswentries/DarkNess2101.png":"takos/DarkNess2101.png","takoswentries/Deceptric13.png":"takos/Deceptric13.png","takoswentries/Deracts.png":"takos/Deracts.png","takoswentries/DinoTakos.png":"takos/DinoTakos.png","takoswentries/Endactam.png":"takos/Endactam.png","takoswentries/Exvnir.png":"takos/Exvnir.png","takoswentries/Eyeye.png":"takos/Eyeye.png","takoswentries/FlaminSarge.png":"takos/FlaminSarge.png","takoswentries/Freir.png":"takos/Freir.png","takoswentries/Gaah.png":"takos/Gaah.png","takoswentries/Haru.png":"takos/Haru.png","takoswentries/HiloNero.png":"takos/HiloNero.png","takoswentries/Huros.png":"takos/Huros.png","takoswentries/HuyK.png":"takos/HuyK.png","takoswentries/IcedOmachi.png":"takos/IcedOmachi.png","takoswentries/InaStoleMyHARTH.png":"takos/InaStoleMyHARTH.png","takoswentries/IrisPonn.png":"takos/IrisPonn.png","takoswentries/Ironsigh.png":"takos/Ironsigh.png","takoswentries/Ithi.png":"takoswentries/ithius.png","takoswentries/Ithius.png":"takoswentries/ithius.png","takoswentries/Jaboll252.png":"takos/Jaboll252.png","takoswentries/Jamuko.png":"takos/Jamuko.png","takoswentries/Jems.png":"takos/Jems.png","takoswentries/JustVine.png":"takos/JustVine.png","takoswentries/Kaede,AcolyteofWahtcher.png":"takos/Kaede, Acolyte of Wahtcher.png","takoswentries/KiwiNeko.png":"takos/KiwiNeko.png","takoswentries/KurasuKanon.png":"takos/Kurasu Kanon.png","takoswentries/LasagnaLaffeydiction.png":"takos/LasagnaLaffeydiction.png","takoswentries/Lethargic.png":"takos/Lethargic.png","takoswentries/LynsDoodles.png":"takos/LynsDoodles.png","takoswentries/Lyudmilia.png":"takos/Lyudmilia.png","takoswentries/MachisaysWAH.png":"takos/Takomachi.png","takoswentries/Mangu.png":"takos/Mangu.png","takoswentries/McArkus.png":"takos/McArkus.png","takoswentries/Melmarkt.png":"takos/Melmarkt.png","takoswentries/MiJi.png":"takos/MiJi.png","takoswentries/Minja.png":"takos/Minja.png","takoswentries/Neminem.png":"takos/Neminem.png","takoswentries/Nowaru.png":"takos/NowaruArt.png","takoswentries/NowaruArt.png":"takos/NowaruArt.png","takoswentries/NxKarim.png":"takos/NxKarim.png","takoswentries/OutOfRice.png":"takos/OutOfRice.png","takoswentries/OverseerOlive.png":"takos/Overseer Olive.png","takoswentries/Pely_.png":"takos/Pely_.png","takoswentries/Pixaurora.png":"takos/Pixaurora.png","takoswentries/Plazma00.png":"takos/Plazma00.png","takoswentries/Popop.png":"takoswentries/popop.png","takoswentries/ProxyZeus.png":"takos/ProxyZeus.png","takoswentries/RCSI.png":"takos/RCSI.png","takoswentries/Raven0815.png":"takos/Raven0815.png","takoswentries/Ren.png":"takos/Ren.png","takoswentries/Reyk.png":"takos/Reyk.png","takoswentries/Scalim.png":"takos/Scalim.png","takoswentries/SeeyahLater.png":"takos/SeeyahLater.png","takoswentries/Senki.png":"takos/Senki.png","takoswentries/SharkyDoko.png":"takos/SharkyDoko.png","takoswentries/SleepDeprivedFae.png":"takos/SleepDeprivedFae.png","takoswentries/Sock.png":"takos/Sock.png","takoswentries/Squash.png":"takos/Squash.png","takoswentries/TaikiKiki.png":"takos/Taiki Kiki.png","takoswentries/Takoster.png":"takos/Takoster.png","takoswentries/Tasaowl.png":"takos/Takoster.png","takoswentries/Teo.png":"takos/Teo.png","takoswentries/TheShivSpoon.png":"takos/The Shiv Spoon.png","takoswentries/Tornhalo.png":"takos/Tornhalo.png","takoswentries/Uni8.png":"takos/Uni8.png","takoswentries/Vaan.png":"takoswentries/Baldako.png","takoswentries/Valawari.png":"takos/Valawari.png","takoswentries/VanillaThunder.png":"takos/Vanilla Thunder.png","takoswentries/Vantablack.png":"takos/Vantablack.png","takoswentries/WAHmaa.png":"takos/Wahmaa.png","takoswentries/Wahmaa.png":"takos/Wahmaa.png","takoswentries/Wydken.png":"takos/Wydken.png","takoswentries/YatoTako.png":"takos/Yato Tako.png","takoswentries/Yatotako.png":"takos/Yato Tako.png","takoswentries/Yue.png":"takos/Yue.png","takoswentries/albertoe.png":"takos/albertoe.png","takoswentries/cedric_alpha.png":"takos/cedric_alpha.png","takoswentries/eLun.png":"takos/eLudachi.png","takoswentries/izefjc.png":"takos/izefjc.png","takoswentries/junblebee.png":"takos/junblebee.png","takoswentries/kshut(@shutowl).png":"takos/kshut (@shutowl).png","takoswentries/rid2079.png":"takos/rid2079.png","takoswentries/subis.png":"takos/subis.png","takoswentries/third12.png":"takos/third12.png","takoswentries/vignedev.png":"takos/vignedev.png","takoswentries/wydken.png":"takos/Wydken.png","takoswentries/zeroyaka.png":"takos/zeroyaka.png","takoswentries/\u30a4\u30ab^10.png":"takos/\u30a4\u30ab^10.png","takoswentries/\u590f\u96ea.png":"takos/\u590f\u96ea.png"};function i(t,e){var a;const[n,...i]=(null!==(a=o[`${t}/${e}`])&&void 0!==a?a:`${t}/${e}`).split("/");return`/${n}/${encodeURIComponent(i.join("/"))}`}function r(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(t&&""!==t.trim())return i("takoswentries",`${t.replace(/ /g,"")}.png`);return`/icon/${n.TK[e%n.TK.length]}`}},4526(t){t.exports=JSON.parse('[{"title":"Classic Ina","artist":"NowaruArt","handle":"@NowaruArt","username":"NowaruArt","filename":"og_ina_nowaru.png","vodtitle":"\u3010DEBUT STREAM\u3011Hi!\ud83d\udc19 #hololiveEnglish #holoMyth","video":"https://www.youtube.com/watch?v=ujCxiHpVYmg","date":"Sept 12, 2020"},{"title":"New Year\'s Greetings Ina","artist":"Taiki","handle":"@Taiki_Kiki2","username":"Taiki_Kiki2","filename":"newyearsgreeting_ina_taiki.png","vodtitle":"\u3010TIME-LAPSE\u3011 New Year\'s Greetings","video":"https://www.youtube.com/watch?v=-Aenybcitkc","date":"Jan 7, 2021"},{"title":"Smol Ina","artist":"Taiki Kiki","handle":"@Taiki_Kiki2","username":"Taiki_Kiki2","filename":"SmolIna_ina_TaikiKiki.png","vodtitle":"\u3010HOLOEN COLLAB\u3011Not a Joke! Serious Outfit Reveal on April the 1st #yurumyth #hololiveEnglish","video":"https://www.youtube.com/watch?v=JgW-7lHQBZw","date":"Apr 1, 2021"},{"title":"Painter Ina","artist":"rinh","handle":"@fakh_rinh","username":"fakh_rinh","filename":"painter_ina_rinh.png","vodtitle":"\u3010NEW OUTFIT REVEAL\u3011 The Joy of Tako #fashionINAsta","video":"https://www.youtube.com/watch?v=AVowcwLSjn8","date":"May 5, 2021"},{"title":"Takogram Ina Bday 2021","artist":"eLun","handle":"@Elun_00","username":"Elun_00","filename":"takogram_ina_bday_2021_elun.png","vodtitle":"Birthday YAY!!!! #BirthdayINA2021","video":"https://www.youtube.com/watch?v=feZ6wFb-q-0","date":"May 20, 2021"},{"title":"Violet Ina","artist":"Takomonty","handle":"@takomonty","username":"takomonty","filename":"violet_ina_takomonty.png","vodtitle":"\u300eVIOLET\u300f - Ninomae Ina\'nis","video":"https://www.youtube.com/watch?v=8ZdLXELdF9Q","date":"Aug 4, 2021"},{"title":"Violet Ina","artist":"Rogue Takolyte","handle":"@ArchiveTakolyte","username":"ArchiveTakolyte","filename":"Violet_ina_RogueTakolyte.png","vodtitle":"\u300eVIOLET\u300f - Ninomae Ina\'nis","video":"https://www.youtube.com/watch?v=8ZdLXELdF9Q","date":"Aug 4, 2021"},{"title":"Dr. Oopsie","artist":"Sock","handle":"@Sock_Wanders","username":"Sock_Wanders","filename":"droopsie_ina_sock.png","vodtitle":"\u3010COLLAB\u3011 Happy Holoween with HoloEN!!!","video":"https://www.youtube.com/watch?v=q_2wqvu-tbY","date":"Oct 31, 2021"},{"title":"Dr. Oopsie","artist":"LynsPixels","handle":"@LynsPixels","username":"LynsPixels","filename":"DrOopsie_ina_Takomachi.png","vodtitle":"\u3010COLLAB\u3011 Happy Holoween with HoloEN!!!","video":"https://www.youtube.com/watch?v=q_2wqvu-tbY","date":"Oct 31, 2021"},{"title":"\u65c5\u306e\u9014\u4e2d Ina (Tabi no Tochuu Ina)","artist":"Taiki","handle":"@Taiki_Kiki2","username":"Taiki_Kiki2","filename":"tabinotochuu_ina_taiki.png","vodtitle":"\u3010\u300e\u65c5\u306e\u9014\u4e2d\u300f Ninomae Ina\'nis (Cover)","video":"https://www.youtube.com/watch?v=NIv_yYKl9tQ","date":"Dec 2, 2021"},{"title":"\u65c5\u306e\u9014\u4e2d Ina (Tabi no Tochuu Ina)","artist":"RCSI","handle":"@RCSI","username":"RCSI","filename":"TabinoTochuu_ina_TakoLamp.png","vodtitle":"\u300e\u65c5\u306e\u9014\u4e2d\u300f Ninomae Ina\'nis (Cover)","video":"https://www.youtube.com/watch?v=NIv_yYKl9tQ","date":"Dec 2, 2021"},{"title":"Formal Dress Ina","artist":"floomf","handle":"@fluumf","username":"fluumf","filename":"formal_ina_floomf.png","vodtitle":"\u3010debut stream\u3011 Hi!\ud83d\udc19 #hololiveEnglish #holoMyth","video":"https://www.youtube.com/watch?v=ND3ai2gSipc","date":"Dec 11, 2021"},{"title":"New Years Ina","artist":"floomf","handle":"@fluumf","username":"fluumf","filename":"new_years_floomf.png","vodtitle":"\u3010NEW OUTFIT REVEAL\u3011 Tako Doko? #HoloENKimonoRelay","video":"https://www.youtube.com/watch?v=95yPJiiiZTs","date":"Jan 8, 2022"},{"title":"WAHcher","artist":"drizzle","handle":"@drizzle_021","username":"drizzle_021","filename":"wahcher_drizzle.png","vodtitle":"\u3010Chat\u3011 Morrrrrning","video":"https://www.youtube.com/watch?v=2oc4di4E60o","date":"Apr 1, 2022"},{"title":"Birthday 2022 Ina","artist":"Sei","handle":"@seiaru_n","username":"seiaru_n","filename":"birthday_2022_ina_sei.png","vodtitle":"WHAT DAY IS IT????!??!? #BdayINA2022","video":"https://www.youtube.com/watch?v=b36yXl6mNlo","date":"May 20, 2022"},{"title":"Futariboshi Ina","artist":"nataniachan","handle":"@hpgbproductions","username":"hpgbproductions","filename":"Futariboshi_ina_LotusPondTako.png","vodtitle":"\u300e\u30d5\u30bf\u30ea\u30dc\u30b7\u300f Ninomae Ina\'nis & Tsukumo Sana (Cover)","video":"https://www.youtube.com/watch?v=84uvWfZqqeg","date":"Jul 15, 2022"},{"title":"2nd Anniversary Ina","artist":"Cotton Cat","handle":"@rie_ccat","username":"rie_ccat","filename":"2ndanni_ina_CottonCat.png","vodtitle":"\u2027\u0359\u207a\u02da*\uff65\u0f13\u3010MYTH ANNIVERSARY\u3011\u0f13\uff65*\u02da\u207a\u2027\u0359 \u30fb","video":"https://www.youtube.com/watch?v=LTgoqNDkLkM","date":"Sept 12, 2022"},{"title":"Valentines 2023 Ina","artist":"nataniachan","handle":"@hpgbproductions","username":"hpgbproductions","filename":"Valentines2023_ina_LotusPondTako.png","vodtitle":"Valentine\'s Day with hololive English","video":"https://www.youtube.com/watch?v=FPGN6DfIaNc","date":"Feb 13, 2023"},{"title":"Idol Ina 4th Fes","artist":"LuLu","handle":"@Lucferz13","username":"Lucferz13","filename":"idol_ina_4th_fes_lulu.png","vodtitle":"\u3010#\u3072\u308d\u304c\u308b\u30db\u30ed\u30e9\u30a4\u30d6DAY1\u3011hololive 4th fes. Our Bright Parade hololive stage DAY1\u3010\u30c1\u30e9\u898b\u305b\u3011","video":"https://www.youtube.com/live/Of2b9eBHFS4?si=1C5ko-XB90M9onVY","date":"Mar 18, 2023"},{"title":"Casual Ina","artist":"Malvar0.0","handle":"@malvar0_0","username":"malvar0_0","filename":"casual_ina_malvar0_0.png","vodtitle":"\u3010NEW OUTFIT REVEAL\u3011 Hair Salon Doko?! #yuruINA","video":"https://www.youtube.com/watch?v=YRs00OvIUJM","date":"Apr 22, 2023"},{"title":"Birthday 2023 Ina","artist":"Wydken","handle":"@wydken","username":"wydken","filename":"birthday_2023_ina_wydken.png","vodtitle":"#BdayINA2023","video":"https://www.youtube.com/watch?v=RZ8pDVTjcxo","date":"May 20, 2023"},{"title":"Lovely Idol Ina","artist":"Shf1","handle":"@JemsArt","username":"JemsArt","filename":"lovelyidol_ina_shf1.png","vodtitle":"\u3010TIME-LAPSE\u3011 Lovely Idol Ina!","video":"https://www.youtube.com/watch?v=_rsOonuaXCM","date":"Sept 12, 2023"},{"title":"Neverland Paradox Ina","artist":"Taiki","handle":"@Taiki_Kiki2","username":"Taiki_Kiki2","filename":"neverlandparadox_ina_taiki.png","vodtitle":"\u30103D LIVE\u3011\u300eNeverland Paradox\u300f Ninomae Ina\'nis Birthday Live 2023 #INAinaNeverland","video":"https://www.youtube.com/watch?v=yT2ety9RfIo","date":"Dec 10, 2023"},{"title":"Neverland Paradox Ina","artist":"RCSI","handle":"@RCSI","username":"RCSI","filename":"neverlandparadox_ina_rcsi.png","vodtitle":"\u30103D LIVE\u3011\u300eNeverland Paradox\u300f Ninomae Ina\'nis Birthday Live 2023 #INAinaNeverland","video":"https://www.youtube.com/watch?v=yT2ety9RfIo","date":"Dec 10, 2023"},{"title":"Mind Craft Ina","artist":"Ruthar","handle":"@DRuthar","username":"DRuthar","filename":"mindcraft_ina_ruthar.png","vodtitle":"\u3010MV\u3011Mind Craft \u25b6\ufe0f hololive English Cover","video":"https://www.youtube.com/watch?v=OQuGEpICY2o","date":"Jan 20, 2024"},{"title":"Spring Ina 2024","artist":"kshut","handle":"@shutowl","username":"shutowl","filename":"spring_ina_2024_kshut.png","vodtitle":"\u3010DRAWING\u3011 Oh Boy It\'s Doodlin Time","video":"https://www.youtube.com/watch?v=6OfOKpRgee4","date":"Mar 24, 2024"},{"title":"Spring Ina 2024","artist":"RCSI","handle":"@RCSI","username":"RCSI","filename":"Spring2024_ina_TakoLamp.png","vodtitle":"\u3010DRAWING\u3011 Oh Boy It\'s Doodlin Time","video":"https://www.youtube.com/watch?v=6OfOKpRgee4","date":"Mar 24, 2024"},{"title":" Little Patissier Ina","artist":"m-pien","handle":"@mpien6","username":"mpien6","filename":"baker_ina_mpien6.png","vodtitle":"What\'s Ina Cooking?!!? #LetInaCook","video":"https://www.youtube.com/live/7ON5t1BvD4A?si=zZ134AFijFp8tHEa","date":"Mar 30, 2024"},{"title":"Meconopsis Ina","artist":"Yoru","handle":"@_yor_n","username":"yor_n","filename":"meconopsis_ina_yoru.png","vodtitle":"\u300eMECONOPSIS\u300f - Ninomae Ina\'nis","video":"https://www.youtube.com/watch?v=XzkNg89Cq9Y","date":"May 20, 2024"},{"title":"Meconopsis Ina","artist":"RCSI","handle":"@RCSI","username":"RCSI","filename":"Meconopsis_ina_TakoLamp.png","vodtitle":"\u300eMECONOPSIS\u300f - Ninomae Ina\'nis","video":"https://www.youtube.com/watch?v=XzkNg89Cq9Y","date":"May 20, 2024"},{"title":"World Tour Ina","artist":"Younhand","handle":"@Youn_hand","username":"Youn_hand","filename":"world_tour_ina_younhand.png","vodtitle":"WORLD TOUR HYPE!!!!!!! #hololiveSTAGE24","video":"https://www.youtube.com/watch?v=yZUtBbtBy-E","date":"Aug 15, 2024"},{"title":"AVIOT Collab Ina","artist":"Cotton Cat","handle":"@rie_ccat","username":"rie_ccat","filename":"AVIOT_ina_CottonCat.png","vodtitle":"\u3010MYTH EARPHONES?!\u3011your oshi in your ear !!!! showcasing the collaboration! #AVIOT #hololiveAVIOT","video":"https://www.youtube.com/watch?v=Sg72ncXujdE","date":"Aug 19, 2024"},{"title":"AmiAmi Ina","artist":"Reykhebaxh","handle":"","username":"","filename":"AmiAmi_ina_Reykhebaxh.png","vodtitle":"\u3010AmiAmi\u3011 Official WAHmbassador On Duty!!!","video":"https://www.youtube.com/watch?v=Ona-9_dYIwQ","date":"Sept 27, 2024"},{"title":"Eurobeat Ina","artist":"Reykhebaxh","handle":"","username":"","filename":"Eurobeat_ina_Reykhebaxh.png","vodtitle":"VIOLET - Eurobeat Remix","video":"https://www.youtube.com/watch?v=B1I5SHxavcs","date":"Oct 25, 2024"},{"title":"Expo 2025 Ina","artist":"Eyeye","handle":"","username":"","filename":"Expo2025_ina_Eve.png","vodtitle":"\u300ahololive SUPER EXPO 2025\u300bPV #hololivefesEXPO25","video":"https://www.youtube.com/watch?v=ESaokt2V8NI","date":"Oct 25, 2024"},{"title":"Santa Ina","artist":"takodragonn","handle":"@takodragonn","username":"takodragonn","filename":"santa_ina_takodragonn.png","vodtitle":"#holoENadventcalendar Day 24","video":"https://www.youtube.com/watch?v=craHnV43OgI","date":"Dec 23, 2024"},{"title":"Oddisey Ina","artist":"Kais3r","handle":"@TentacleLuver","username":"TentacleLuver","filename":"oddisey_ina_kais3r.png","vodtitle":"\u3010MV\u3011Odyssey - Hololive English (Original Song)","video":"https://www.youtube.com/watch?v=0wO8d70KSXw","date":"Dec 25, 2024"},{"title":"Pleides Ina","artist":"Teo","handle":"@TeoMurs","username":"TeoMurs","filename":"pleides_ina_teo.png","vodtitle":"\u30103D LIVE\u3011\u300ePleides\u300fNinomae Ina\'nis 2024 Live #Pleides3D","video":"https://www.youtube.com/watch?v=3n9igJnSXtQ","date":"Dec 28, 2024"},{"title":"Spring Party Ina","artist":"NowaruArt","handle":"@NowaruArt","username":"NowaruArt","filename":"spring_party_ina_nowaru.png","vodtitle":"\u3010#holoENSpringParty\u3011Celebrating Spring (And Painting) with hololive English!","video":"https://www.youtube.com/watch?v=TjXIQOK7Hs0","date":"Mar 1, 2025"},{"title":"Idol Ina 6th Fes","artist":"NowaruArt","handle":"@NowaruArt","username":"NowaruArt","filename":"idol_ina_6th_fes_nowaru.png","vodtitle":"\u3010#hololivefesEXPO25_DAY1\u3011hololive 6th fes. Color Rise Harmony hololive STAGE2\u3010\u30c1\u30e9\u898b\u305b\u3011","video":"https://www.youtube.com/watch?v=4C3kreEOk1Q","date":"Mar 8, 2025"},{"title":"Temari Ina...?","artist":"Diana","handle":"@valkyrie_illust","username":"valkyrie_illust","filename":"temari_ina_diana.png","vodtitle":"\u300eTEMARI\u300f - Ninomae Ina\'nis","video":"https://www.youtube.com/watch?v=LtTO1HMGjqA","date":"Mar 13, 2025"},{"title":"Temari Ina...?","artist":"Astra of Antares","handle":"@Astra_ofAntares","username":"Astra_ofAntares","filename":"temari_ina_astraea.png","vodtitle":"\u300eTEMARI\u300f - Ninomae Ina\'nis","video":"https://www.youtube.com/watch?v=LtTO1HMGjqA","date":"Mar 13, 2025"},{"title":"Temari Ina...?","artist":"Reykhebaxh","handle":"","username":"","filename":"Temari_ina_Reykhebaxh.png","vodtitle":"\u300eTEMARI\u300f - Ninomae Ina\'nis","video":"https://www.youtube.com/watch?v=LtTO1HMGjqA","date":"Mar 13, 2025"},{"title":"Chuuni Ina","artist":"Eyeye","handle":"@Eyeye_HS","username":"Eyeye_HS","filename":"chuuni_ina_eyeye.png","vodtitle":"\u3010NEW OUTFIT REVEAL\u3011Kukuku...New Clothes... + EXCITING ANNOUNCEMENT AT THE END!!! #AriseTakodachi","video":"https://www.youtube.com/watch?v=t1nq757tWTQ","date":"May 12, 2025"},{"title":"Yuusha Ina","artist":"JangJang","handle":"@J4ngaro","username":"J4ngaro","filename":"yuusha_ina_jangjang.png","vodtitle":"\u30103D LIVE\u3011\u300eEVERMORE\u300f Ninomae Ina\'nis Birthday Live 2025 #EvermoreLIVE","video":"https://www.youtube.com/watch?v=I-J11Da5ONY","date":"May 20, 2025"},{"title":"Yuusha Ina","artist":"Altthiel","handle":"","username":"","filename":"Yuusha_Ina_Altthiel.png","vodtitle":"\u30103D LIVE\u3011\u300eEVERMORE\u300f Ninomae Ina\'nis Birthday Live 2025 #EvermoreLIVE","video":"https://www.youtube.com/watch?v=I-J11Da5ONY","date":"May 20, 2025"},{"title":"holonatsu Paradise Ina","artist":"nodenn","handle":"","username":"","filename":"holonatsu_ina_nodenn.png","vodtitle":"\u300e\u30db\u30ed\u30ca\u30c4\u30d1\u30e9\u30c0\u30a4\u30b9\u300f\u30c6\u30a3\u30b6\u30fcPV\u3010#holonatsuParadise\u3011","video":"https://www.youtube.com/watch?v=zHZPrj_bhb8","date":"Jul 8, 2025"},{"title":"holonatsu Paradise Ina","artist":"rinh","handle":"@fakh_rinh","username":"fakh_rinh","filename":"holonatsu_ina_Rinh.png","vodtitle":"#holonatsuParadise","video":"https://x.com/ninomaeinanis/status/1945408067983614265","date":"Jul 16, 2025"},{"title":"Kurukuru Cruise Ina","artist":"Ani","handle":"@ani_019","username":"ani_019","filename":"kurukurucruise_ina_ani.png","vodtitle":"\u3010Mythmash\u3011Kurukuru Cruise - Ninomae Ina\'nis x Nekomata Okayu","video":"https://www.youtube.com/watch?v=t7lNu-p_ANs","date":"Aug 4, 2025"},{"title":"All For One Ina","artist":"Applejuice","handle":"@Applenotepad91","username":"Applenotepad91","filename":"afo_ina_applejuice.png","vodtitle":"\u3010MV\u3011All for One\u3010hololive English Original Song\u3011","video":"https://www.youtube.com/watch?v=ok24HgzbeLs","date":"Aug 16, 2025"},{"title":"Fortune Spinner Ina","artist":"\u72ac\u4e09","handle":"@cyuan_nil","username":"cyuan_nil","filename":"fortunespinner_ina_\u72ac\u4e09.png","vodtitle":"\u3010MV\u3011Fortune Spinner\u3010hololive English -Myth- Original Song\u3011","video":"https://www.youtube.com/watch?v=TCRg30fGsXU","date":"Sept 20, 2025"},{"title":"Hellflame Ina","artist":"Wydken","handle":"@wydken","username":"wydken","filename":"hellflame_ina_wydken.png","vodtitle":"\u3010MONSTER HUNTER WILDS\u3011Special Collaboration Outfit Reveal?! + TU4 Content with @KosekiBijou","video":"https://www.youtube.com/watch?v=sKNI9C-yWvQ","date":"Dec 15, 2025"},{"title":"Hellflame Ina","artist":"\u72ac\u4e09","handle":"@cyuan_nil","username":"cyuan_nil","filename":"hellflame_ina_\u72ac\u4e09.png","vodtitle":"\u3010MONSTER HUNTER WILDS\u3011Special Collaboration Outfit Reveal?! + TU4 Content with @KosekiBijou","video":"https://www.youtube.com/watch?v=sKNI9C-yWvQ","date":"Dec 15, 2025"},{"title":"Overlord Ina","artist":"Mahiru","handle":"@__mahiru03","username":"__mahiru03","filename":"overlord_ina_mahiru.png","vodtitle":"\u300eTAKO\u221eTAKOVER\u300f- Ninomae Ina\'nis","video":"https://www.youtube.com/watch?v=6sAQ1wuYzxk","date":"Jan 6, 2026"},{"title":"Overlord Ina","artist":"Eve","handle":"@Eve_001","username":"Eve_001","filename":"Overlord_ina_Eve.png","vodtitle":"\u300eTAKO\u221eTAKOVER\u300f - Ninomae Ina\'nis","video":"https://www.youtube.com/watch?v=6sAQ1wuYzxk","date":"Jan 6, 2026"},{"title":"Monotones Ina","artist":"kshut","handle":"@kshut_001","username":"kshut_001","filename":"monotones_ina_pebbledachi.png","vodtitle":"","video":"https://x.com/hololive_En/status/2011326166033158370","date":"Jan 14, 2026"},{"title":"SPcollect Ina","artist":"Cotton Cat","handle":"@rie_ccat","username":"rie_ccat","filename":"SPcollectFragance_ina_CottonCat.png","vodtitle":"\u3010SPcollect\u3011best smelling tierlist EVER?! with @NinomaeInanis #holo_MEMORIES #ad","video":"https://www.youtube.com/watch?v=ergH82qca-Y","date":"Feb 8, 2026"},{"title":"hololive Academy Vol. 5 ~Dreamy Days in Spring & Summer Arc~ Ina","artist":"kipo","handle":"","username":"","filename":"DreamyDaysVoicePack_ina_kipo.png","vodtitle":"[New Voice Pack] hololive Academy Vol 5: ~Dreamy Days in Spring & Summer Arc~","video":"https://www.youtube.com/watch?v=VaHDzZpTXp0","date":"Feb 25, 2026"},{"title":"7th Fes Ina","artist":"eLun","handle":"","username":"","filename":"7thfes_ina_eLudachi.png","vodtitle":"\u3010\u30c1\u30e9\u898b\u305b\u3011hololive 7th fes. Ridin\' on Dreams STAGE1\u3010#hololivefesEXPO26_DAY1\u3011","video":"https://www.youtube.com/watch?v=qttXNWweGO8","date":"Mar 6, 2026"},{"title":"Spring Party Ina 2026","artist":"Mahiru","handle":"@__mahiru03","username":"__mahiru03","filename":"spring_ina_2026_mahiru.png","vodtitle":"\u3010#holoENSpringParty\u3011hololive English Spring Party! \'26 Official Program!","video":"https://www.youtube.com/watch?v=8rDGOwtcitI","date":"Mar 22, 2026"},{"title":"Abyss Ina","artist":"Nyuusai","handle":"","username":"","filename":"Abyss_DtD_ina_Nyuusai.png","vodtitle":"\u3010Free Preview\u3011Takanashi Kiara / Ninomae Ina\'nis 1st Concert Drawn to Dawn\u3010DAY 2\u3011","video":"https://www.youtube.com/live/bNMzj5NPWmI","date":"Mar 28, 2026"},{"title":"Getcha Ina","artist":"eLun","handle":"@Elun_00","username":"eLun","filename":"getcha_ina_elun.png","vodtitle":"\u300eGETCHA!\u300f Ninomae Ina\'nis & Takanashi Kiara (Cover)","video":"https://www.youtube.com/watch?v=YzgPJtBuOAE","date":"Apr 24, 2026"}]')}}]);
//# sourceMappingURL=167.ed8ff33d.chunk.js.map
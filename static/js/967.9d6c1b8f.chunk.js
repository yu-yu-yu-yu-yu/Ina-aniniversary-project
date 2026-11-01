"use strict";(globalThis.webpackChunkina=globalThis.webpackChunkina||[]).push([[958,967],{7114(t,e,a){a.d(e,{A:()=>m});var n=a(5043),o=a(403),s=a(3403),r=a(6785),i=a(579);const p=t=>({src:`balloons/generic/balloon-generic-${t}.png`}),g=t=>({src:`balloons/mv/balloon-mv-${t}.png`}),l=t=>({src:`balloons/takos/balloon-takos-${t}.png`}),k=[l("0"),l("1"),l("cookies"),l("uhh-i-think-she-needs-help")],h={Standard:[g("meconopsis"),g("violet"),g("temari"),g("tako8takover"),p("purple"),p("pink"),p("white"),p("yellow"),p("fushia"),p("orange"),p("green"),p("lime"),...k],Violet:[g("violet"),p("blue"),p("blueagain"),p("violet"),p("sky"),p("cyan"),p("purple"),...k],Meconopsis:[g("meconopsis"),p("blue"),p("blueagain"),p("cyan"),p("purple"),p("sky"),p("violet"),...k],Temari:[g("temari"),p("red"),p("lightred"),p("orange"),p("pink"),p("fushia"),p("yellow"),...k],TakoTakover:[g("tako8takover"),p("purple"),p("fushia"),p("pink"),p("violet"),p("sky"),...k],AbyssalHymn:[g("meconopsis"),g("violet"),p("blue"),p("blueagain"),p("sky"),p("violet"),p("purple"),...k],TakodachiNoUta:[p("white"),p("gray"),...k],StardustCapsule:[p("sky"),p("blue"),p("white"),...k]},c=o.Ay.img`
  position: absolute;
  left: ${t=>{let{$left:e}=t;return e}}vw;
  bottom: ${t=>{let{$bottom:e}=t;return e}}px;
  height: ${t=>{let{$heightScale:e}=t;return(20*e).toFixed(2)}}vmax;
  max-height: ${t=>{let{$heightScale:e}=t;return Math.round(260*e)}}px;
  min-height: ${t=>{let{$heightScale:e}=t;return Math.round(180*e)}}px;
  width: clamp(70px, 12vw, 160px);
  max-width: 18vw;
  object-fit: contain;
  z-index: 0;
  pointer-events: none;
  will-change: transform;
  animation: ${t=>{let{$swayOffset:e}=t;return o.AH`
    ${a=e,o.i7`
  0% {
    transform: translateY(0) translateX(0) rotate(-2deg);
    opacity: 0;
  }
  8% { opacity: 1; }
  25% { transform: translateY(-32.5vh) translateX(${a}px) rotate(3deg); }
  50% { transform: translateY(-65vh) translateX(${.7*-a}px) rotate(-2deg); }
  75% {
    transform: translateY(-97.5vh) translateX(${.9*a}px) rotate(2deg);
  }
  98% { opacity: 1; }
  100% {
    transform: translateY(-130vh) translateX(0) rotate(0deg);
    opacity: 0;
  }
`} 12s ease-in-out forwards
  `;var a}};
`,d=o.Ay.div`
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  right: 0;
  width: 95vw;
  height: 100%;
  z-index: 3;
  overflow: visible;
  overflow-x: hidden;
`,m=t=>{let{glitchStartMs:e=0,glitchMs:a}=t;const[o,p]=(0,n.useState)([]),g=(0,n.useRef)(null),{theme:l}=(0,s.D)(),k=(0,r.u3)(e,a);return(0,n.useEffect)(()=>{h[l].forEach(t=>{(new Image).src=`/${t.src}`})},[l]),(0,n.useEffect)(()=>{const t=()=>{const t=h[l],e=Math.floor(2*Math.random())+1,a=document.documentElement.scrollHeight,n=[];for(let o=0;o<e;o++)if(Math.random()<.96){const e=t[Math.floor(Math.random()*t.length)],s=10*Math.random()+8;n.push({key:Date.now()+Math.random()+o,left:Math.random()*(100-s-6),src:e.src,bottom:Math.random()*a,createdAt:Date.now(),heightScale:.6*Math.random()+.4,swayOffset:(30*Math.random()+10)*(Math.random()<.5?1:-1)})}n.length>0&&p(t=>[...t,...n])},e=()=>{g.current=setInterval(t,2e3)},a=()=>{g.current&&clearInterval(g.current)},n=()=>"hidden"===document.visibilityState?a():e();return e(),document.addEventListener("visibilitychange",n),()=>{a(),document.removeEventListener("visibilitychange",n)}},[l]),(0,n.useEffect)(()=>{const t=setInterval(()=>{p(t=>t.filter(t=>Date.now()-t.createdAt<2e4))},2e3);return()=>clearInterval(t)},[]),(0,i.jsx)(d,{children:o.map(t=>(0,i.jsx)(c,{$left:t.left,$bottom:t.bottom,$swayOffset:t.swayOffset,$heightScale:t.heightScale,src:`/${k>0&&(0,r.$s)(t.key)<=.6*k?r.RL:t.src}`,alt:"floating balloon"},t.key))})}},4530(t,e,a){a.d(e,{A:()=>c});var n=a(5043),o=a(403),s=a(5402),r=a(993),i=a(6785),p=a(1472),g=a(579);const l=o.i7`
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
`,k=o.Ay.img`
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
  animation: ${l} 9s linear forwards;
`,h=o.Ay.div`
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
`,c=t=>{let{freeFloat:e=!1,zIndex:a,glitchStartMs:o=0,glitchMs:l}=t;const[c,d]=(0,n.useState)([]),m=(0,n.useRef)(null),u=(0,n.useRef)(null),{muted:w}=(0,p.d2)(),[y]=(0,n.useState)(!e),f=(0,i.u3)(o,l);(0,n.useEffect)(()=>{s.Ar.forEach(t=>{(new Image).src=(0,r.c)("takos",t)})},[]),(0,n.useEffect)(()=>{const t=()=>{const t=Math.floor(3*Math.random())+1,e=document.documentElement.scrollHeight,a=[];for(let n=0;n<t;n++)Math.random()<.6&&a.push({key:Date.now()+Math.random()+n,left:y?x():90*Math.random(),tako:s.Ar[Math.floor(Math.random()*s.Ar.length)],bottom:Math.random()*e,createdAt:Date.now()});a.length>0&&d(t=>[...t,...a])},e=()=>{m.current=setInterval(t,1e3)},a=()=>{m.current&&clearInterval(m.current)},n=()=>"hidden"===document.visibilityState?a():e();return e(),document.addEventListener("visibilitychange",n),()=>{a(),document.removeEventListener("visibilitychange",n)}},[]),(0,n.useEffect)(()=>{const t=setInterval(()=>{d(t=>t.filter(t=>Date.now()-t.createdAt<9e3))},1e3);return()=>clearInterval(t)},[]);const x=()=>Math.random()<.5?10*Math.random():90+10*Math.random(),v=()=>{u.current&&!w&&(u.current.volume=.2,u.current.currentTime=0,u.current.play().catch(()=>{}))};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("audio",{ref:u,src:"/inatakosound.mp3",preload:"auto",style:{display:"none"}}),(0,g.jsx)(h,{$zIndex:a,children:c.map(t=>(0,g.jsx)(k,{$left:t.left,$bottom:t.bottom,src:f>0&&(0,i.$s)(t.key)<=f?`/${i.RL}`:(0,r.c)("takos",t.tako),alt:"floating takodachi",onClick:v,style:{pointerEvents:"auto",cursor:"pointer"}},t.key))})]})}},2375(t,e,a){a.d(e,{A:()=>b});var n=a(5043),o=a(403);const s=o.Ay.div`
  min-height: 100vh;
  position: relative;
  z-index: 1;

  background: var(--background);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  box-sizing: border-box;
`,r=o.Ay.img`
  opacity: 1;
  margin-left: auto;
  margin-right: auto;

  width: 45vh;
  filter: var(--logo-filter);
  @media only screen and (min-width: 1200px) and (max-height: 800px) {
    width: 70vh !important;
  }

  @media only screen and (max-width: 1350px) {
    width: 40vh;
  }
`,i=o.Ay.h2`

  margin: 8px;
  color: var(--dark-highlight);
  text-align: center;

  font: normal normal bold 48px/56px Montserrat;  
  letter-spacing: 2.2px;

  @media only screen and (min-width: 1200px) and (max-height: 800px){
    font: normal normal bold 38px/46px Montserrat; !important; 

  }

  @media only screen and (max-width: 1000px) {
    font: normal normal bold 32px/40px Montserrat;
    letter-spacing: 1.25px;
  }

  @media only screen and (max-width: 768px) {
    font: normal normal bold 22px/28px Montserrat;
    letter-spacing: 1px;
  }

  @media only screen and (max-width: 300px) {
    font: normal normal bold 16px/22px Montserrat;
    letter-spacing: 0.75px;
  }

  text-transform: uppercase;
  opacity: 1;
  position: relative;
`,p=o.Ay.h1`
  margin: 8px;
  color: var(--dark-highlight);
  text-align: center;

  font: normal normal bold 60px/72px Montserrat;
  letter-spacing: 3px;

  @media only screen and (min-width: 1200px) and (max-height: 800px) {
    font: normal normal bold 48px/60px Montserrat !important;
  }

  @media only screen and (max-width: 1000px) {
    font: normal normal bold 38px/46px Montserrat;
    letter-spacing: 1.5px;
  }

  @media only screen and (max-width: 768px) {
    font: normal normal bold 28px/34px Montserrat;
    letter-spacing: 1px;
  }

  @media only screen and (max-width: 300px) {
    font: normal normal bold 20px/26px Montserrat;
    letter-spacing: 0.75px;
  }

  text-transform: uppercase;
  opacity: 1;
  position: relative;
`,g=o.Ay.div`
  width: 100%;
  text-align: center;
`,l=o.Ay.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10px;
  text-align: center;
  color: var(--dark-highlight);
  z-index: 2;

  h3 {
    margin: 0;
    font-size: 18px;
  }

  @media only screen and (min-width: 1200px) and (max-height: 800px) {
    h3 {
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 1000px) {
    h3 {
      font-size: 11px;
    }
  }

  @media only screen and (max-width: 800px) {
    bottom: 18px;

    h3 {
      font-size: 8px;
    }
  }

  @media only screen and (max-width: 300px) {
    h3 {
      font-size: 6px;
    }
  }
`;var k=a(3403),h=a(6785),c=a(5019),d=a(579);const m={Standard:"",Violet:"violet",Meconopsis:"meconopsis",Temari:"temari",TakoTakover:"tako8takover",AbyssalHymn:"",TakodachiNoUta:"",StardustCapsule:""},u=["0","1","cookies","uhh-i-think-she-needs-help"],w=o.i7`
  0%, 100% { transform: translateY(0) rotate(-3deg); }
  50%       { transform: translateY(-14px) rotate(3deg); }
`,y=o.Ay.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,f=o.Ay.img`
  position: absolute;
  height: 18vmax;
  width: auto;
  top: ${t=>{let{$top:e}=t;return e}};
  ${t=>{let{$side:e,$gap:a}=t;return"left"===e?`right: calc(100% + ${a});`:`left: calc(100% + ${a});`}}
  animation: ${w} ${t=>{let{$delay:e}=t;return 2.6+.35*e}}s ease-in-out infinite;
  animation-delay: ${t=>{let{$delay:e}=t;return.45*e}}s;
  pointer-events: none;

  @media only screen and (max-width: ${c.fi.mobile}px) {
    display: none;
  }
`,x=o.Ay.div`
  display: none;
  @media only screen and (max-width: ${c.fi.mobile}px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    gap: 10px;
    margin: 4px 0;
  }
`,v=[31,36,29,33],$=[6,22,0,14],T=o.Ay.img`
  height: ${t=>{let{$index:e}=t;return v[e]}}vw;
  width: auto;
  pointer-events: none;
  margin-bottom: ${t=>{let{$index:e}=t;return $[e]}}px;
  animation: ${w} ${t=>{let{$delay:e}=t;return 2.6+.35*e}}s ease-in-out infinite;
  animation-delay: ${t=>{let{$delay:e}=t;return.45*e}}s;
`,b=t=>{let{glitchStartMs:e=0,glitchMs:a}=t;const{theme:o}=(0,k.D)(),c=(0,h.u3)(e,a),w=(0,n.useMemo)(()=>Array.from({length:8},()=>Math.random()),[]),v=t=>c>0&&w[t]<=c,{mvFiles:$,shapedFiles:b,pos:M}=(0,n.useMemo)(()=>{const t=t=>(Math.random()-.5)*t+"%",e=(t,e)=>`${Math.floor(Math.random()*(e-t)+t)}px`,a=(t,e)=>`${Math.floor(Math.random()*(e-t)+t)}%`;return{mvFiles:m[o]?Array(4).fill(m[o]):["meconopsis","violet","temari","tako8takover"],shapedFiles:[...u].sort(()=>Math.random()-.5),pos:{mvLT:t(20),mvLB:t(20),mvRT:t(20),mvRB:t(20),mvGapLT:e(8,28),mvGapLB:e(8,28),mvGapRT:e(8,28),mvGapRB:e(8,28),shTopLT:a(-20,0),shTopLB:a(55,78),shTopRT:a(-20,0),shTopRB:a(55,78),shGapLT:e(130,210),shGapLB:e(120,200),shGapRT:e(130,210),shGapRB:e(120,200)}}},[o]),S=`/${h.RL}`,A=(t,e)=>v(e)?S:`/balloons/mv/balloon-mv-${t}.png`,R=(t,e)=>v(e)?S:`/balloons/takos/balloon-takos-${t}.png`;return(0,d.jsxs)(s,{children:[(0,d.jsxs)(g,{children:[(0,d.jsx)(i,{children:"Tentacult Temple Fan Site"}),(0,d.jsx)(x,{children:$.map((t,e)=>(0,d.jsx)(T,{src:A(t,e),alt:"",$delay:e,$index:e},e))}),(0,d.jsxs)(y,{children:[(0,d.jsx)(f,{$side:"left",$top:`calc(0%  + ${M.mvLT})`,$gap:M.mvGapLT,$delay:0,src:A($[0],0),alt:""}),(0,d.jsx)(f,{$side:"left",$top:`calc(45% + ${M.mvLB})`,$gap:M.mvGapLB,$delay:1,src:A($[1],1),alt:""}),(0,d.jsx)(f,{$side:"right",$top:`calc(5%  + ${M.mvRT})`,$gap:M.mvGapRT,$delay:2,src:A($[2],2),alt:""}),(0,d.jsx)(f,{$side:"right",$top:`calc(40% + ${M.mvRB})`,$gap:M.mvGapRB,$delay:3,src:A($[3],3),alt:""}),(0,d.jsx)(r,{alt:"ina-logo",src:"/InaLogo.png"}),(0,d.jsx)(f,{$side:"left",$top:M.shTopLT,$gap:M.shGapLT,$delay:4,src:R(b[0],4),alt:""}),(0,d.jsx)(f,{$side:"left",$top:M.shTopLB,$gap:M.shGapLB,$delay:5,src:R(b[1],5),alt:""}),(0,d.jsx)(f,{$side:"right",$top:M.shTopRT,$gap:M.shGapRT,$delay:6,src:R(b[2],6),alt:""}),(0,d.jsx)(f,{$side:"right",$top:M.shTopRB,$gap:M.shGapRB,$delay:7,src:R(b[3],7),alt:""})]}),(0,d.jsx)(p,{children:"INA'S 6TH ANNIVERSARY CELEBRATION"})]}),(0,d.jsx)(l,{children:(0,d.jsxs)("h3",{children:[(0,d.jsx)("i",{className:"fa fa-chevron-down"})," Scroll down for more"," ",(0,d.jsx)("i",{className:"fa fa-chevron-down"})]})})]})}},6785(t,e,a){a.d(e,{$s:()=>s,RL:()=>o,u3:()=>r});var n=a(5043);const o="takos/takoglitch.gif",s=t=>Math.floor(1e3*t)%997/997,r=(t,e)=>{const[a,s]=(0,n.useState)(0);return(0,n.useEffect)(()=>{if(!e)return;(new Image).src=`/${o}`;const a=performance.now(),n=setInterval(()=>{const o=Math.min(1,Math.max(0,(performance.now()-a-t)/(e-t)));s(o),o>=1&&clearInterval(n)},250);return()=>clearInterval(n)},[t,e]),a}},2958(t,e,a){a.d(e,{AW:()=>M,BN:()=>I,Cy:()=>r,FU:()=>y,HO:()=>f,ID:()=>o,IR:()=>L,LQ:()=>w,Lk:()=>g,M8:()=>D,Rb:()=>k,W3:()=>i,_w:()=>b,cS:()=>C,cb:()=>A,de:()=>T,eS:()=>u,eX:()=>$,iF:()=>S,jr:()=>d,qF:()=>v,qU:()=>p,qk:()=>c,sc:()=>s,sj:()=>l,uD:()=>m,x4:()=>x,xG:()=>R});const n="/lorebook",o=`${n}/cover-front.jpg`,s=`${n}/cover-back.jpg`,r=`${n}/spine.jpg`,i=[{src:`${n}/art/bookmark1.png`,ratio:"525 / 1530",label:"Eye"},{src:`${n}/art/bookmark2.png`,ratio:"525 / 1383",label:"Takodachi"}],p={width:2772,height:4012},g={width:Math.round(600*p.width/p.height),height:600},l={width:934,height:4045},k=[1,2,3,4,5,6].map(t=>`${n}/page-texture-${t}.webp`),h={top:20,right:24,bottom:40,left:34},c=[{src:`${n}/art/stickytako1.png`,box:{top:34,right:16,bottom:20,left:16},width:1901,height:2331},{src:`${n}/art/stickytako2.png`,box:h,width:1025,height:1045},{src:`${n}/art/stickytako3.png`,box:h,width:1025,height:1045},{src:`${n}/art/stickytako4.png`,box:h,width:1025,height:1045},{src:`${n}/art/stickytako5.png`,box:h,width:1025,height:1045}],d=[{src:`${n}/art/takodoodle1.png`,width:600,height:422},{src:`${n}/art/takodoodle2.png`,width:524,height:350},{src:`${n}/art/takodoodle3.png`,width:415,height:509},{src:`${n}/art/takodoodle4.png`,width:539,height:600},{src:`${n}/art/takodoodle5.png`,width:395,height:385},{src:`${n}/art/takodoodle6.png`,width:600,height:598},{src:`${n}/art/takodoodle7.png`,width:600,height:549},{src:`${n}/art/takodoodle8.png`,width:600,height:434},{src:`${n}/art/takodoodle9.png`,width:600,height:563},{src:`${n}/art/takodoodle10.png`,width:555,height:600},{src:`${n}/art/takodoodle11.png`,width:566,height:600},{src:`${n}/art/takodoodle12.png`,width:600,height:593},{src:`${n}/art/takodoodle13.png`,width:600,height:391},{src:`${n}/art/takodoodle14.png`,width:532,height:600},{src:`${n}/art/takodoodle15.png`,width:600,height:427},{src:`${n}/art/takodoodle16.png`,width:600,height:506},{src:`${n}/art/takodoodle17.png`,width:600,height:500}],m=[{src:`${n}/art/scans/IMG_7439.png`,width:342,height:600},{src:`${n}/art/scans/Ina_And_The_First_Takodachi.png`,width:427,height:600},{src:`${n}/art/scans/Poppy_flower_cage.png`,width:441,height:600},{src:`${n}/art/scans/Sad_first_Takodachi.png`,width:600,height:579},{src:`${n}/art/scans/Sad_first_Takodachi_ver2.png`,width:600,height:529},{src:`${n}/art/scans/Temari_ball_1.png`,width:571,height:600}],u=(t,e)=>{let a=0;for(let n=0;n<t.length;n++)a=31*a+t.charCodeAt(n)>>>0;return e[a%e.length]},w=t=>{let e=0;for(let a=0;a<t.length;a++)e=31*e+t.charCodeAt(a)>>>0;return e%1e3/1e3},y=`${n}/fonts/Takohuyk-Regular.ttf`,f=`${n}/fonts/Ina_handwritning-Regular.ttf`,x=`${n}/fonts/RevisonBooksFonts-Regular.ttf`,v=[`${n}/page-turn-2.mp3`,`${n}/page-turn-3.mp3`],$=[1,2,3].map(t=>`${n}/icons/tentacle-cursor-${t}.png`),T=.15,b=t=>`${n}/art/${t}.png`,M=(t,e)=>{var a;return t?t.startsWith("data:")||t.startsWith("http:")||t.startsWith("https:")||t.startsWith("/")||t.startsWith("./")?t:null!==(a=null===e||void 0===e?void 0:e[t])&&void 0!==a?a:t:t},S=t=>`${n}/icons/${encodeURIComponent(t)}.png`,A="takodachi-no-uta",R="none",L=t=>`${n}/dividers/${encodeURIComponent(t)}.png`,I={coverFront:"#e03131",coverBack:"#f76707",paper:"#f59f00",frame:"#74b816",spine:"#2f9e44",art:"#1971c2",icon:"#4263eb",divider:"#7048e8"},D=t=>e=>{const a=e.currentTarget;a.onerror=null,a.style.background=t,a.src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3C/svg%3E"},C=[{title:"Covers",items:[{src:o,label:"Front cover"},{src:s,label:"Back cover"},{src:r,label:"Spine"}]},{title:"Bookmarks",items:i.map(t=>({src:t.src,label:`${t.label} bookmark`}))},{title:"Dividers",items:["abyssal-hymn","dancin-in-the-vr-world","drawn-2-dawn","mekronopsis","nai-nai","neverland-paradox","pleiades","revision","tabi-no-tochuu","takodachi-no-uta","takotakeover","temari","violet","wahtcher","wishing-star","yuusha"].map(t=>({src:L(t),label:t}))},{title:"Doodles",items:[...d,...m].map((t,e)=>({src:t.src,label:`Doodle ${e+1}`}))},{title:"Sticky notes",items:c.map((t,e)=>({src:t.src,label:`Sticky note ${e+1}`}))},{title:"Song icons",items:["abyssal-hymn","mekronopsis","takotakeover","temari","violet"].map(t=>({src:S(t),label:t}))},{title:"Cursors",items:$.map((t,e)=>({src:t,label:`Cursor ${e+1}`}))},{title:"Paper textures",items:k.map((t,e)=>({src:t,label:`Paper ${e+1}`}))}]},5402(t,e,a){a.d(e,{Ar:()=>n,TK:()=>s,sV:()=>o});const n=["albertoe.png","Baldako.png","CapSora.png","cedric_alpha.png","Chumbeque.png","ConcussioAmi.png","CyberToast.png","Deceptric13.png","Deracts.png","DinoTakos.png","Eyeye.png","FlaminSarge.png","Freir.png","Gaah.png","Gathog.png","HuyK.png","IcedOmachi.png","InaStoleMyHARTH.png","IrisPonn.png","izefjc.png","JustVine.png","Mangu.png","Pely_.png","Pixaurora.png","Plazma00.png","Raven0815.png","rid2079.png","SeeyahLater.png","Senki.png","Squash.png","subis.png","third12.png","Uni8.png","Vaan.png","Wahmaa.png","wydken.png","Yue.png","\u590f\u96ea.png","11.png","14.png","15.png","16.png","17.png","35.png","44.png","71.png","A random casual.png","Arthain.png","Astraea.png","BreadART.png","Chibi RoggianX.png","chuunilord.png","Corp.Shephard.png","Creau.png","Cyber Toast.png","CYtako.png","DarkNess2101.png","Deer Oh Dear.png","DHugo.png","Drebyal Draws.png","eLun.png","Endactam.png","enicholas.png","Epi.png","fluffycatfish.png","Fluid.png","Frediloc8.png","GreenFox.png","Haru.png","Hermit Purple.png","HiloNero.png","Huros.png","Ironsigh.png","Ithi.png","Jaboll252.png","Jamu(ta)ko.png","Jamuko.png","Jems.png","Jhon. Palmer.png","Joakim MF.png","junblebee.png","Kaede, Acolyte of Wahtcher.png","keoqzzi\ud83c\udf5c.png","Kinoko.png","KiwiNeko.png","kshut (@shutowl).png","Kurasu Kanon.png","Kurosagi.png","LasagnaLaffeydiction.png","Lethargic.png","Lienou.png","LynsDoodles.png","Lyudmilia.png","Machi says WAH.png","Mango Konata.png","Mara.png","McArkus.png","Meap.png","Melmarkt.png","MiJi.png","Milk.png","Minja.png","Neminem.png","NKS5.png","notaBob.png","NowaruArt.png","NxKarim.png","Nyuusai.png","OK Kei.png","OutOfRice.png","Overseer Olive.png","popop.png","ProxyZeus.png","PureTako.png","RCSI.png","Ren.png","Reyk.png","Reykhebaxh.png","RiDeth.png","Rie Cotton Cat.png","Rinh.png","Scalim.png","SeaRain.png","SharkyDoko.png","Shokuro.png","SleepDeprivedFae.png","SleepzyTofu.png","Sock.png","Spud Tako.png","Squirl.png","sunnyfaller.png","Tahi.png","Taiki Kiki.png","Takedo.png","Takollite.png","Takomonty.png","Takoster.png","Teddy B\u0295\xb4\u2022\u1d25\u2022`\u0294.png","Teo.png","The Shiv Spoon.png","Thocclord.png","Tornhalo.png","Tung.png","Valawari.png","Valtaur_tw.png","Vanilla Thunder.png","Vantablack.png","vignedev.png","WindStreak.png","Wydken.png","Yato Tako.png","Zel Maelstrom.png","zeroyaka.png","\u304a\u5144\u304e\u308a.png","\u30a4\u30ab^10.png"],o=n.length,s=["8-bit Tako.png","Hollow Tako.png","Ikadachi.png","Mori Tako.png","Robodachi.png","Tako Amelia (Takoson).png","Tako Gura (Chum Tako).png","Tako Ina.png","Tako Kiara (Tako Bell).png","Tako Ross.png","Takodachi.png","Takomfy.png","Tophat Tako.png","Violet Tako.png","Wonder Tako.png","Yuul B. Tako.png"]},9773(t,e,a){a.d(e,{G:()=>o});var n=a(5043);const o=t=>{let{muted:e,volume:a=.1,autoPlay:o=!1,videoPaused:s=!1}=t;const r=(0,n.useRef)(null);return(0,n.useEffect)(()=>{r.current&&(r.current.volume=a)},[a]),(0,n.useEffect)(()=>{const t=r.current;t&&(s||e?t.pause():t.paused&&t.play().catch(()=>{}))},[e,s]),(0,n.useEffect)(()=>{if(!o)return;let t=null,a=!1;return r.current&&!e&&r.current.play().catch(()=>{a||(t=()=>{r.current&&!e&&r.current.play().catch(()=>{}),t&&window.removeEventListener("click",t)},window.addEventListener("click",t))}),()=>{a=!0,t&&window.removeEventListener("click",t)}},[o,e]),r}},993(t,e,a){a.d(e,{V:()=>r,c:()=>s});var n=a(5402);const o={"takos/16.png":"takos/16.PNG","takos/17.png":"takos/17.PNG","takos/35.png":"takos/Vantablack.png","takos/44.png":"takos/Wydken.png","takos/CottonCat.png":"takoswentries/CottonCat.png","takos/Creau.png":"takos/IrisPonn.png","takos/Darkodachi.png":"takoswentries/Darkodachi.png","takos/DeerOhDear.png":"takoswentries/DeerOhDear.png","takos/DumplingTakodachi.png":"takoswentries/DumplingTakodachi.png","takos/Eve.png":"takoswentries/Eve.png","takos/Gathog.png":"takoswentries/Gathog.png","takos/GrayTako.png":"takoswentries/GrayTako.png","takos/GreenFox.png":"takoswentries/GreenFox.png","takos/Ithi.png":"takoswentries/ithius.png","takos/Jamu(ta)ko.png":"takos/Jamuko.png","takos/Kais3r.png":"takoswentries/Kais3r.png","takos/KnightedTako.png":"takoswentries/KnightedTako.png","takos/LotusPondTako.png":"takoswentries/LotusPondTako.png","takos/Machi says WAH.png":"takos/Takomachi.png","takos/MrKamedachi.png":"takoswentries/MrKamedachi.png","takos/Rina.png":"takoswentries/Rina.png","takos/RogueTakolyte.png":"takoswentries/RogueTakolyte.png","takos/SleepzyTofu.png":"takoswentries/SleepzyTofu.png","takos/TakoGoomy.png":"takoswentries/TakoGoomy.png","takos/TakoLamp.png":"takoswentries/TakoLamp.png","takos/Takobocchi.png":"takoswentries/Takobocchi.png","takos/Takozashi.png":"takoswentries/Takozashi.png","takos/Tasaowl.png":"takos/Takoster.png","takos/Vaan.png":"takoswentries/Baldako.png","takos/VaanTheBrainlessOne.png":"takoswentries/VaanTheBrainlessOne.png","takos/drizzle.png":"takoswentries/drizzle.png","takos/eLun.png":"takos/eLudachi.png","takos/ithius.png":"takoswentries/ithius.png","takos/m-pien.png":"takoswentries/m-pien.png","takos/popop.png":"takoswentries/popop.png","takos/wydken.png":"takos/Wydken.png","takos/\u72ac\u4e09.png":"takoswentries/\u72ac\u4e09.png","takoswentries/Arandomcasual.png":"takos/A random casual.png","takoswentries/Arthain.png":"takos/Arthain.png","takoswentries/Astraea.png":"takos/Astraea.png","takoswentries/BreadART.png":"takos/BreadART.png","takoswentries/CapSora.png":"takos/CapSora.png","takoswentries/Chuunilord.png":"takoswentries/chuunilord.png","takoswentries/Chumbeque.png":"takos/Chumbeque.png","takoswentries/ConcussioAmi.png":"takos/ConcussioAmi.png","takoswentries/Corp.Shephard.png":"takos/Corp.Shephard.png","takoswentries/Creau.png":"takos/IrisPonn.png","takoswentries/CyberToast.png":"takos/CyberToast.png","takoswentries/DHugo.png":"takos/DHugo.png","takoswentries/DarkNess2101.png":"takos/DarkNess2101.png","takoswentries/Deceptric13.png":"takos/Deceptric13.png","takoswentries/Deracts.png":"takos/Deracts.png","takoswentries/DinoTakos.png":"takos/DinoTakos.png","takoswentries/Endactam.png":"takos/Endactam.png","takoswentries/Exvnir.png":"takos/Exvnir.png","takoswentries/Eyeye.png":"takos/Eyeye.png","takoswentries/FlaminSarge.png":"takos/FlaminSarge.png","takoswentries/Freir.png":"takos/Freir.png","takoswentries/Gaah.png":"takos/Gaah.png","takoswentries/Haru.png":"takos/Haru.png","takoswentries/HiloNero.png":"takos/HiloNero.png","takoswentries/Huros.png":"takos/Huros.png","takoswentries/HuyK.png":"takos/HuyK.png","takoswentries/IcedOmachi.png":"takos/IcedOmachi.png","takoswentries/InaStoleMyHARTH.png":"takos/InaStoleMyHARTH.png","takoswentries/IrisPonn.png":"takos/IrisPonn.png","takoswentries/Ironsigh.png":"takos/Ironsigh.png","takoswentries/Ithi.png":"takoswentries/ithius.png","takoswentries/Ithius.png":"takoswentries/ithius.png","takoswentries/Jaboll252.png":"takos/Jaboll252.png","takoswentries/Jamuko.png":"takos/Jamuko.png","takoswentries/Jems.png":"takos/Jems.png","takoswentries/JustVine.png":"takos/JustVine.png","takoswentries/Kaede,AcolyteofWahtcher.png":"takos/Kaede, Acolyte of Wahtcher.png","takoswentries/KiwiNeko.png":"takos/KiwiNeko.png","takoswentries/KurasuKanon.png":"takos/Kurasu Kanon.png","takoswentries/LasagnaLaffeydiction.png":"takos/LasagnaLaffeydiction.png","takoswentries/Lethargic.png":"takos/Lethargic.png","takoswentries/LynsDoodles.png":"takos/LynsDoodles.png","takoswentries/Lyudmilia.png":"takos/Lyudmilia.png","takoswentries/MachisaysWAH.png":"takos/Takomachi.png","takoswentries/Mangu.png":"takos/Mangu.png","takoswentries/McArkus.png":"takos/McArkus.png","takoswentries/Melmarkt.png":"takos/Melmarkt.png","takoswentries/MiJi.png":"takos/MiJi.png","takoswentries/Minja.png":"takos/Minja.png","takoswentries/Neminem.png":"takos/Neminem.png","takoswentries/Nowaru.png":"takos/NowaruArt.png","takoswentries/NowaruArt.png":"takos/NowaruArt.png","takoswentries/NxKarim.png":"takos/NxKarim.png","takoswentries/OutOfRice.png":"takos/OutOfRice.png","takoswentries/OverseerOlive.png":"takos/Overseer Olive.png","takoswentries/Pely_.png":"takos/Pely_.png","takoswentries/Pixaurora.png":"takos/Pixaurora.png","takoswentries/Plazma00.png":"takos/Plazma00.png","takoswentries/Popop.png":"takoswentries/popop.png","takoswentries/ProxyZeus.png":"takos/ProxyZeus.png","takoswentries/RCSI.png":"takos/RCSI.png","takoswentries/Raven0815.png":"takos/Raven0815.png","takoswentries/Ren.png":"takos/Ren.png","takoswentries/Reyk.png":"takos/Reyk.png","takoswentries/Scalim.png":"takos/Scalim.png","takoswentries/SeeyahLater.png":"takos/SeeyahLater.png","takoswentries/Senki.png":"takos/Senki.png","takoswentries/SharkyDoko.png":"takos/SharkyDoko.png","takoswentries/SleepDeprivedFae.png":"takos/SleepDeprivedFae.png","takoswentries/Sock.png":"takos/Sock.png","takoswentries/Squash.png":"takos/Squash.png","takoswentries/TaikiKiki.png":"takos/Taiki Kiki.png","takoswentries/Takoster.png":"takos/Takoster.png","takoswentries/Tasaowl.png":"takos/Takoster.png","takoswentries/Teo.png":"takos/Teo.png","takoswentries/TheShivSpoon.png":"takos/The Shiv Spoon.png","takoswentries/Tornhalo.png":"takos/Tornhalo.png","takoswentries/Uni8.png":"takos/Uni8.png","takoswentries/Vaan.png":"takoswentries/Baldako.png","takoswentries/Valawari.png":"takos/Valawari.png","takoswentries/VanillaThunder.png":"takos/Vanilla Thunder.png","takoswentries/Vantablack.png":"takos/Vantablack.png","takoswentries/WAHmaa.png":"takos/Wahmaa.png","takoswentries/Wahmaa.png":"takos/Wahmaa.png","takoswentries/Wydken.png":"takos/Wydken.png","takoswentries/YatoTako.png":"takos/Yato Tako.png","takoswentries/Yatotako.png":"takos/Yato Tako.png","takoswentries/Yue.png":"takos/Yue.png","takoswentries/albertoe.png":"takos/albertoe.png","takoswentries/cedric_alpha.png":"takos/cedric_alpha.png","takoswentries/eLun.png":"takos/eLudachi.png","takoswentries/izefjc.png":"takos/izefjc.png","takoswentries/junblebee.png":"takos/junblebee.png","takoswentries/kshut(@shutowl).png":"takos/kshut (@shutowl).png","takoswentries/rid2079.png":"takos/rid2079.png","takoswentries/subis.png":"takos/subis.png","takoswentries/third12.png":"takos/third12.png","takoswentries/vignedev.png":"takos/vignedev.png","takoswentries/wydken.png":"takos/Wydken.png","takoswentries/zeroyaka.png":"takos/zeroyaka.png","takoswentries/\u30a4\u30ab^10.png":"takos/\u30a4\u30ab^10.png","takoswentries/\u590f\u96ea.png":"takos/\u590f\u96ea.png"};function s(t,e){var a;const[n,...s]=(null!==(a=o[`${t}/${e}`])&&void 0!==a?a:`${t}/${e}`).split("/");return`/${n}/${encodeURIComponent(s.join("/"))}`}function r(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(t&&""!==t.trim())return s("takoswentries",`${t.replace(/ /g,"")}.png`);return`/icon/${n.TK[e%n.TK.length]}`}}}]);
//# sourceMappingURL=967.9d6c1b8f.chunk.js.map
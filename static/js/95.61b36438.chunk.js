"use strict";(globalThis.webpackChunkina=globalThis.webpackChunkina||[]).push([[95],{4530(e,t,a){a.d(t,{A:()=>p});var n=a(5043),i=a(403),r=a(5402),o=a(579);const s=i.i7`
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
`,l=i.Ay.img`
  position: absolute;
  left: ${e=>{let{left:t}=e;return t}}vw;
  bottom: ${e=>{let{bottom:t}=e;return t}}px;
  height: 5vmax;
  max-height: 100px;
  min-height: 20px;
  width: auto;
  z-index: 3;
  pointer-events: none;
  will-change: transform;
  animation: ${s} 9s linear forwards;
`,d=i.Ay.div`
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  z-index: ${e=>{let{$zIndex:t}=e;return null!==t&&void 0!==t?t:3}};
  overflow: visible;
  overflow-x: hidden;
  pointer-events: none;
`,p=e=>{let{freeFloat:t=!1,zIndex:a}=e;const[i,s]=(0,n.useState)([]),p=(0,n.useRef)(null),h=(0,n.useRef)(null),[x]=(0,n.useState)(!t);(0,n.useEffect)(()=>{r.A.forEach(e=>{(new Image).src=`/takos/${encodeURIComponent(e)}`})},[]),(0,n.useEffect)(()=>{const e=()=>{const e=Math.floor(3*Math.random())+1,t=document.documentElement.scrollHeight,a=[];for(let n=0;n<e;n++)Math.random()<.6&&a.push({key:Date.now()+Math.random()+n,left:x?c():90*Math.random(),tako:r.A[Math.floor(Math.random()*r.A.length)],bottom:Math.random()*t,createdAt:Date.now()});a.length>0&&s(e=>[...e,...a])},t=()=>{p.current=setInterval(e,1e3)},a=()=>{p.current&&clearInterval(p.current)},n=()=>"hidden"===document.visibilityState?a():t();return t(),document.addEventListener("visibilitychange",n),()=>{a(),document.removeEventListener("visibilitychange",n)}},[]),(0,n.useEffect)(()=>{const e=setInterval(()=>{s(e=>e.filter(e=>Date.now()-e.createdAt<9e3))},1e3);return()=>clearInterval(e)},[]);const c=()=>Math.random()<.5?10*Math.random():90+10*Math.random(),g=()=>{h.current&&(h.current.volume=.2,h.current.currentTime=0,h.current.play())};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("audio",{ref:h,src:"/inatakosound.mp3",preload:"auto",style:{display:"none"}}),(0,o.jsx)(d,{$zIndex:a,children:i.map(e=>(0,o.jsx)(l,{left:e.left,bottom:e.bottom,src:`/takos/${encodeURIComponent(e.tako)}`,alt:"floating takodachi",onClick:g,style:{pointerEvents:"auto",cursor:"pointer"}},e.key))})]})}},1095(e,t,a){a.r(t),a.d(t,{default:()=>Ee});var n=a(5043),i=a(403),r=a(2582);const o=i.i7`
  0%, 75%, 100% { transform: rotate(0deg); }
  78%  { transform: rotate(-5deg); }
  81%  { transform: rotate(5deg); }
  84%  { transform: rotate(-4deg); }
  87%  { transform: rotate(4deg); }
  90%  { transform: rotate(-2deg); }
  93%  { transform: rotate(0deg); }
`,s=i.Ay.footer`
  position: relative;  
  z-index: 2;
  background: var(--light-highlight) 0% 0% no-repeat padding-box;
  padding: 25px 0px;
  opacity: 1;
  display: flex;
  width: 100%;

  flex-direction: row;
  justify-content: space-around;
  
  @media only screen and (max-width: 750px) {
    padding: 35px 0px;
    padding-top: 5px;
  }

  .footer-social-container{    
    flex-grow: 2;
    display: flex;
    flex-direction: column;

    justify-content:center;
    
    margin: 10px;

    .social-links {
      margin-left: 30px;
      
      @media only screen and (max-width: 750px) {
        margin-left: 0px;
      }
    }
    
    p {
      display: inline-block;
      margin 10px;
    }

  }

  .disclaimer-container { 
    position: absolute;
    width: 80%;
    
    left: 50%;
    bottom: 2%;
    transform: translate(-50%, -30%);

    p {  
      text-align: center;
      font-size: 15px;
      margin: 0px;

      @media only screen and (max-width: 1460px) {
        font-size: 12px;
      }

      @media only screen and (max-width: 950px) {
        font-size: 10px;
      }
      
      @media only screen and (max-width: 750px) {
        font-size: 8px;
      }

      @media only screen and (max-width: 280px) {
        font-size: 5px;
      }
    }
  }

  p{
    
    font-family: 'Montserrat', sans-serif;
    font-size: 35px;
    font-weight: 400;

    letter-spacing: 0px;
    color: #4F415C;

    @media only screen and (max-width: 1460px) {
      font-size: 25px;
    }

    @media only screen and (max-width: 950px) {
      font-size: 20px;
    }

    @media only screen and (max-width: 750px) {
      font-size: 19px;
    }

    @media only screen and (max-width: 475px) {
      font-size: 15px;
    }

    @media only screen and (max-width: 405px) {
      font-size: 12px;
    }

    @media only screen and (max-width: 280px) {
      font-size: 9px;
    }
  }
 

  .fa {
    margin-right: auto;
    margin-top: auto;
  }

  .footer-img-container{
    flex-grow: 2;
    display: flex;

    a {
      margin: auto;
      margin-right: 30px;
      display: block;
    }

    img{
      cursor: pointer;
    }
  }

  .footer-img {
    max-width: 560px;
    width: 23vw;
    display: block;
    animation: ${o} 5s ease-in-out infinite;

    @media only screen and (max-width: 950px) {
      width: 100%;
      max-width: 33vw;
    }

    @media only screen and (max-width: 750px) {
      max-width: 275px;
      width: 44vw;
    }

    @media only screen and (max-width: 350px) {
      max-width: 165px;
    }

    @media only screen and (max-width: 270px) {
      display: none;
    }


  }

  i{
    font-size: 48px; 
    color: #4F415C;

    @media only screen and (max-width: 950px) {
      font-size: 24px; 
    }
  }

`,l=i.Ay.div`
  z-index: 2;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -62%);
  top: 0%;

  img {
    width: 120px;

    @media only screen and (max-width: 1200px) {
      width: 80px;
    }
  }

  @media only screen and (max-width: 950px) {
    display: none;
  }
`;i.Ay.div`
  width: 600px;
  height: auto;
  padding: 20px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--light-background);
  border-radius: 15px;
  z-index: 69;
  color: #ffffff;

  font-family: "Mulish", sans-serif;

  a {
    font-weight: bold;
    color: #ffffff;
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    text-shadow: 0px 0px 20px #0f0f0f;
  }

  @media only screen and (max-width: 700px) {
    width: 80%;
  }

  table {
    width: 100%;
  }

  th {
    text-align: left;
    font-size: 25px;
    font-weight: bold;
    border-bottom: 1px solid #ddd;
  }

  td {
    font-size: 17px;
    @media only screen and (max-width: 700px) {
      font-size: 15px;
    }
    @media only screen and (max-width: 320px) {
      font-size: 12px;
    }
  }

  th,
  td {
    padding: 2px 10px;
  }

  p {
    font-weight: 200;
    text-align: center;
    font-size: 16px;
  }

  hr {
    border: 0;
    border-bottom: 1px solid #ddd;
  }
`;var d=a(579);const{rE:p}={rE:"26.1.7"},h=()=>(0,d.jsxs)(s,{children:[(0,d.jsx)(l,{children:(0,d.jsx)("img",{alt:"Ao-chan Logo",src:"/AOPatternFilledIn.png"})}),(0,d.jsx)("div",{className:"footer-social-container",children:(0,d.jsxs)("div",{className:"social-links",children:[(0,d.jsx)("a",{href:"https://twitter.com/ninomaeinanis",target:"_blank",rel:"noopener noreferrer",children:(0,d.jsxs)("p",{children:[(0,d.jsx)("i",{className:"fa fa-twitter"})," @ninomaeinanis"]})}),(0,d.jsx)("br",{}),(0,d.jsx)("a",{href:"https://www.youtube.com/channel/UCMwGHR0BTZuLsmjY_NT5Pwg",target:"_blank",rel:"noopener noreferrer",children:(0,d.jsxs)("p",{children:[(0,d.jsx)("i",{className:"fa fa-youtube-play"})," Ninomae Ina'nis Ch."]})})]})}),(0,d.jsx)("div",{className:"footer-img-container",children:(0,d.jsx)(r.N_,{to:"/credits",children:(0,d.jsx)("img",{alt:"mini-ina",className:"footer-img",src:"/MiniIna.png"})})}),(0,d.jsxs)("div",{className:"disclaimer-container",children:[(0,d.jsx)("p",{children:"This is a fan project. We are not affiliated with or endorsed by Cover Corporation."}),(0,d.jsxs)("p",{style:{fontSize:"0.75rem",opacity:.5,marginTop:"0.25rem"},children:["v",p]})]})]}),x=i.Ay.div`
  min-height: 100vh;
  position: relative;
  z-index: 1;

  background: var(--background);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  box-sizing: border-box;
`,c=i.Ay.img`
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
`,g=i.Ay.h2`

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
`,m=i.Ay.h1`
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
`,f=i.Ay.div`
  width: 100%;
  text-align: center;
`,y=i.Ay.div`
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
`;var u=a(3403);const b={Standard:"",Violet:"violet",Meconopsis:"meconopsis",Temari:"temari",TakoTakover:"tako8takover"},w=["0","1","cookies","uhh-i-think-she-needs-help"],v=i.i7`
  0%, 100% { transform: translateY(0) rotate(-3deg); }
  50%       { transform: translateY(-14px) rotate(3deg); }
`,k=i.Ay.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,j=i.Ay.img`
  position: absolute;
  height: 18vmax;
  width: auto;
  top: ${e=>{let{$top:t}=e;return t}};
  ${e=>{let{$side:t,$gap:a}=e;return"left"===t?`right: calc(100% + ${a});`:`left: calc(100% + ${a});`}}
  animation: ${v} ${e=>{let{$delay:t}=e;return 2.6+.35*t}}s ease-in-out infinite;
  animation-delay: ${e=>{let{$delay:t}=e;return.45*t}}s;
  pointer-events: none;

  @media only screen and (max-width: 700px) {
    display: none;
  }
`,I=i.Ay.div`
  display: none;
  @media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    gap: 10px;
    margin: 4px 0;
  }
`,$=[31,36,29,33],A=[6,22,0,14],T=i.Ay.img`
  height: ${e=>{let{$index:t}=e;return $[t]}}vw;
  width: auto;
  pointer-events: none;
  margin-bottom: ${e=>{let{$index:t}=e;return A[t]}}px;
  animation: ${v} ${e=>{let{$delay:t}=e;return 2.6+.35*t}}s ease-in-out infinite;
  animation-delay: ${e=>{let{$delay:t}=e;return.45*t}}s;
`,M=()=>{const{theme:e}=(0,u.D)(),{mvFiles:t,shapedFiles:a,pos:i}=(0,n.useMemo)(()=>{const t=e=>(Math.random()-.5)*e+"%",a=(e,t)=>`${Math.floor(Math.random()*(t-e)+e)}px`,n=(e,t)=>`${Math.floor(Math.random()*(t-e)+e)}%`;return{mvFiles:"Standard"===e?["meconopsis","violet","temari","tako8takover"]:Array(4).fill(b[e]),shapedFiles:[...w].sort(()=>Math.random()-.5),pos:{mvLT:t(20),mvLB:t(20),mvRT:t(20),mvRB:t(20),mvGapLT:a(8,28),mvGapLB:a(8,28),mvGapRT:a(8,28),mvGapRB:a(8,28),shTopLT:n(-20,0),shTopLB:n(55,78),shTopRT:n(-20,0),shTopRB:n(55,78),shGapLT:a(130,210),shGapLB:a(120,200),shGapRT:a(130,210),shGapRB:a(120,200)}}},[e]),r=e=>`/balloons/mv/balloon-mv-${e}.png`,o=e=>`/balloons/takos/balloon-takos-${e}.png`;return(0,d.jsxs)(x,{children:[(0,d.jsxs)(f,{children:[(0,d.jsx)(g,{children:"Tentacult Temple Fan Site"}),(0,d.jsx)(I,{children:t.map((e,t)=>(0,d.jsx)(T,{src:r(e),alt:"",$delay:t,$index:t},t))}),(0,d.jsxs)(k,{children:[(0,d.jsx)(j,{$side:"left",$top:`calc(0%  + ${i.mvLT})`,$gap:i.mvGapLT,$delay:0,src:r(t[0]),alt:""}),(0,d.jsx)(j,{$side:"left",$top:`calc(45% + ${i.mvLB})`,$gap:i.mvGapLB,$delay:1,src:r(t[1]),alt:""}),(0,d.jsx)(j,{$side:"right",$top:`calc(5%  + ${i.mvRT})`,$gap:i.mvGapRT,$delay:2,src:r(t[2]),alt:""}),(0,d.jsx)(j,{$side:"right",$top:`calc(40% + ${i.mvRB})`,$gap:i.mvGapRB,$delay:3,src:r(t[3]),alt:""}),(0,d.jsx)(c,{alt:"ina-logo",src:"/InaLogo.png"}),(0,d.jsx)(j,{$side:"left",$top:i.shTopLT,$gap:i.shGapLT,$delay:4,src:o(a[0]),alt:""}),(0,d.jsx)(j,{$side:"left",$top:i.shTopLB,$gap:i.shGapLB,$delay:5,src:o(a[1]),alt:""}),(0,d.jsx)(j,{$side:"right",$top:i.shTopRT,$gap:i.shGapRT,$delay:6,src:o(a[2]),alt:""}),(0,d.jsx)(j,{$side:"right",$top:i.shTopRB,$gap:i.shGapRB,$delay:7,src:o(a[3]),alt:""})]}),(0,d.jsx)(m,{children:"INA'S 6TH ANNIVERSARY CELEBRATION"})]}),(0,d.jsx)(y,{children:(0,d.jsxs)("h3",{children:[(0,d.jsx)("i",{className:"fa fa-chevron-down"})," Scroll down for more"," ",(0,d.jsx)("i",{className:"fa fa-chevron-down"})]})})]})},z=i.Ay.div`
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  background: var(--background) url(${""}/Pattern2.png) 0 0;
  background-attachment: fixed;
  background-size: 180px;
  z-index: 3;
  @media (max-width: 701px) {
    padding-top: 40px;
  }
`,S=i.Ay.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0;
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  position: relative;

  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
    max-width: 100%;
  }
`,Y=i.Ay.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  position: relative;
  z-index: 2;
  margin-left: -120px;

  @media only screen and (max-width: 1100px) {
    width: 100%;
    min-width: 0;
    margin-left: 0;
    z-index: 3;
  }
`,N=i.Ay.video`
  --video-edge-fade: 28px;

  width: 100%;
  height: auto;
  max-width: 800px;
  display: block;
  border-radius: 24px;
  filter: drop-shadow(0 0 18px rgba(0, 0, 0, 0.2));
  -webkit-mask-image: linear-gradient(
      to right,
      transparent,
      #000 var(--video-edge-fade),
      #000 calc(100% - var(--video-edge-fade)),
      transparent
    ),
    linear-gradient(
      to bottom,
      transparent,
      #000 var(--video-edge-fade),
      #000 calc(100% - var(--video-edge-fade)),
      transparent
    );
  -webkit-mask-composite: source-in;
  mask-image: linear-gradient(
      to right,
      transparent,
      #000 var(--video-edge-fade),
      #000 calc(100% - var(--video-edge-fade)),
      transparent
    ),
    linear-gradient(
      to bottom,
      transparent,
      #000 var(--video-edge-fade),
      #000 calc(100% - var(--video-edge-fade)),
      transparent
    );
  mask-composite: intersect;

  @media only screen and (max-width: 1100px) {
    max-width: 100%;
    --video-edge-fade: 18px;
  }
`,R=i.Ay.button`
  position: absolute;
  top: 18px;
  right: 18px;
  z-index: 5;
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.28);
  color: var(--text-color);
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(6px);
  transition:
    background 0.18s ease,
    transform 0.18s ease,
    box-shadow 0.18s ease;

  i {
    font-size: 20px;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.42);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.28);
    transform: rotate(35deg) scale(1.06);
  }

  &:focus-visible {
    outline: 3px solid var(--light-highlight);
    outline-offset: 3px;
  }

  @media only screen and (max-width: 480px) {
    top: 12px;
    right: 12px;
    width: 38px;
    height: 38px;

    i {
      font-size: 17px;
    }
  }
`,C=i.Ay.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  z-index: 4;
  pointer-events: none;
  text-align: right;
  padding: 6px 10px;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.15);

  @media only screen and (max-width: 480px) {
    bottom: 8px;
    right: 8px;
    padding: 4px 8px;
  }
`,E=i.Ay.p`
  color: var(--text-color);
  font-size: 18px;
  text-shadow: 0 10px 14px var(--shadow);
  align-self: center;
  margin: 0;

  @media only screen and (max-width: 1100px) {
    font-size: 13px;
  }
`;var H=a(984);const L=Array.from({length:47},(e,t)=>`valkyrie_illust_vids/val-${t+1}.mp4`),G=e=>{if(1===L.length)return L[0];let t=e;for(;t===e;){const e=Math.floor(Math.random()*L.length);t=L[e]}return t},D=()=>{const[e,t]=(0,n.useState)(()=>G()),[a,i]=(0,n.useState)(!1);(0,n.useEffect)(()=>{i(!1)},[e]);const r=(0,n.useCallback)(()=>{t(e=>G(e))},[]),o=(0,n.useCallback)(()=>{i(!0)},[]);return(0,d.jsx)(z,{children:(0,d.jsxs)(S,{children:[(0,d.jsx)(H.wA,{children:(0,d.jsxs)("div",{className:"lore-text",children:[(0,d.jsx)("hr",{}),(0,d.jsxs)("p",{children:["One day, ",(0,d.jsx)("b",{children:"Ina'nis"})," picked up a ",(0,d.jsx)("b",{children:"strange book"})," and then started to gain the power of ",(0,d.jsx)("b",{children:"controlling tentacles"}),". To her, ",(0,d.jsx)("b",{children:"tentacles"})," are just a part in her ordinary life; it has never been a big deal for her. However, her girly mind does want to get them",(0,d.jsx)("b",{children:" dressed up and stay pretty"}),"."]}),(0,d.jsxs)("p",{children:["After gaining power, she started hearing"," ",(0,d.jsx)("b",{children:"Ancient Whispers and Revelations"}),". Hence, she began her"," ",(0,d.jsx)("b",{children:"VTuber activities "})," to deliver ",(0,d.jsx)("b",{children:" random sanity checks "})," ","on humanity, as an ",(0,d.jsx)("b",{children:"ordinary girl"}),"."]}),(0,d.jsx)("hr",{})]})}),(0,d.jsxs)(Y,{style:{background:a?"transparent":"var(--dark-background)"},children:[(0,d.jsx)(N,{autoPlay:!0,loop:!0,muted:!0,preload:"auto",onCanPlay:o,style:{opacity:a?1:0,transition:"opacity 0.5s ease"},children:(0,d.jsx)("source",{src:`/${e}`,type:"video/mp4"})},e),(0,d.jsx)(R,{type:"button",onClick:r,"aria-label":"Change lore video",title:"Change video",children:(0,d.jsx)("i",{className:"fa fa-refresh","aria-hidden":"true"})}),(0,d.jsx)(C,{children:(0,d.jsx)(E,{children:"Illustration and Animation: @valkyrie_illust"})})]})]})})},W=i.Ay.div`
  background: ${e=>{let{$grayscale:t}=e;return t?"linear-gradient(180deg, rgba(20,20,20,0.95) 0%, rgba(40,40,40,0.95) 100%)":"transparent linear-gradient(180deg, var(--light-background) 0%, var(--dark-highlight) 100%) 0% 0% no-repeat padding-box"}};
  text-align: center;
  padding: 80px 20px;

  box-shadow: 0px 10px 6px var(--shadow);
  z-index: 3;
  position: relative;

  @media only screen and (max-width: 701px) {
    margin-top: 0;
    padding: 40px 20px 60px;
  }
`,B=i.Ay.img`
  display: inline-block;
  z-index: 3;
  width: 300px;
  filter: ${e=>{let{$grayscale:t}=e;return t?"grayscale(1)":"none"}};
  transition: filter 0.2s;
  @media only screen and (max-width: 701px) {
    width: 200px;
  }
`,P=i.Ay.div`
  width: 300px;
  min-height: 118px;
  border-bottom: solid 4px;
  padding: 12px 12px 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: visible;
  filter: inherit;
  @media only screen and (max-width: 701px) {
    width: 250px;
    min-height: 98px;
    padding: 6px 10px 18px;
  }
  @media only screen and (max-width: 300px) {
    width: 200px;
  }
`,O=i.Ay.div`
  text-align: left;
  display: inline-block;
  vertical-align: center;
  margin-left: 40px;
  font: normal normal normal 40px/1.2 Roboto;
  letter-spacing: 2.5px;
  color: #ffffff;
  color: var(--text-color);
  @media only screen and (max-width: 701px) {
    display: block;
    margin: auto;
    text-align: center;
    font: normal normal normal 26px/1.2 Roboto;
    letter-spacing: 1.3px;
    margin-left: 0;
  }
  img {
    border-bottom: solid 4px;
    padding-bottom: 24px;
    width: 300px;
    filter: inherit;
    @media only screen and (max-width: 701px) {
      width: 250px;
      padding-bottom: 12px;
      padding-top: 20px;
    }
    @media only screen and (max-width: 300px) {
      width: 200px;
      padding-bottom: 12px;
      padding-top: 20px;
    }
  }
`,F=i.Ay.div`
  position: absolute;
  right: 18px;
  bottom: 18px;
  display: flex;
  gap: 8px;
  z-index: 10;

  @media only screen and (max-width: 701px) {
    position: static;
    justify-content: center;
    margin-top: 18px;
  }
`,X=i.i7`
  0% { background: linear-gradient(90deg, #ff5f6d, #ffc371, #7ae582, #76b7ff, #d291ff, #ff5f6d); color: #1a1a1a; box-shadow: 0 0 0 rgba(0,0,0,0), 0 0 12px rgba(255,255,255,0.9); }
  16% { background: linear-gradient(90deg, #ffc371, #7ae582, #76b7ff, #d291ff, #ff5f6d, #ff5f6d); }
  33% { background: linear-gradient(90deg, #7ae582, #76b7ff, #d291ff, #ff5f6d, #ff5f6d, #ffc371); }
  50% { background: linear-gradient(90deg, #76b7ff, #d291ff, #ff5f6d, #ffc371, #7ae582, #76b7ff); }
  66% { background: linear-gradient(90deg, #d291ff, #ff5f6d, #ffc371, #7ae582, #76b7ff, #d291ff); }
  100% { background: linear-gradient(90deg, #ff5f6d, #ffc371, #7ae582, #76b7ff, #d291ff, #ff5f6d); color: #1a1a1a; box-shadow: 0 0 18px rgba(255,255,255,0.7); }
`,K=i.Ay.button`
  background: var(--light-highlight);
  color: var(--text-color);
  border: none;
  border-radius: 8px;
  padding: 10px 18px;
  font-size: 1em;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px var(--shadow);
  transition:
    background 0.2s,
    color 0.2s,
    box-shadow 0.2s;
  &:hover {
    background: var(--dark-highlight);
    color: var(--light-highlight);
  }

  @media only screen and (max-width: 701px) {
    font-size: 0.8em;
    padding: 8px 14px;
  }
`,U=(0,i.Ay)(K)`
  background: #e9d5ff;
  color: #2a1d3a;

  ${e=>{let{$active:t}=e;return t&&i.AH`
      animation: ${X} 3s ease-in-out 1;
      box-shadow: 0 0 18px rgba(255, 255, 255, 0.8), 0 0 28px rgba(128, 90, 213, 0.8);
    `}}

  &:hover {
    background: #d8b4fe;
    color: #1f1230;
  }
`,_=(0,i.Ay)(K)``,V=i.i7`
  0%   { opacity: 0; transform: translateY(8px); }
  15%  { opacity: 1; transform: translateY(0); }
  70%  { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-8px); }
`,q=i.Ay.div`
  display: inline-block;
  position: relative;
`,J=i.Ay.span`
  position: absolute;
  top: 50%;
  left: 50%;
  width: max-content;
  max-width: 90vw;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 3.3rem;
  letter-spacing: 2px;
  text-shadow:
    0 0 12px #a78bfa,
    0 2px 8px rgba(0, 0, 0, 0.8);
  pointer-events: none;
  animation: ${V} 2.5s ease forwards;
  @media only screen and (max-width: 701px) {
    font-size: 1.5rem;
    letter-spacing: 1px;
    width: min-content;
  }
`,Z=[{text:"We have games we win, and we have games we lose. I haven't won yet, but I haven't lost. So, I can only win, right?",year:"2020"},{text:"No panik. Just pizza.",year:"2020"},{text:"You're robbin a kid!",year:"2026",author:"The ghost of pokajan"},{text:"Ina is Ina",year:"2021"},{text:"It's not the best but it does the job when you need something salty in your life",year:"2021"},{text:"We love to see it.. it's the total opposite of speedrunning--slow walking! Slow running is just walking..",year:"2021"},{text:"The tentacult is not a cult!",year:"2021"},{text:"Don't quote me",year:"2021"},{text:"Home is where Ina is",year:"2023"},{text:"Becaused",year:"2023"},{text:"Playing Mario is just like cooking instant ramen.",year:"2023"},{text:"Art is a sport!",year:"2023"},{text:"I don't go outside if i don't have to",year:"2024"},{text:"5 is the new 0",year:"2025"},{text:"I wanted her to drop kick my face",year:"2025"},{text:"Whats that one famous thing",year:"2026"},{text:"This world requires too much thought",year:"2026"},{text:"YEAH",year:"2022"},{text:"This weapon is unbalanced",year:"2022"},{text:"The world's not a great place, but we're trying to make it better",year:"2022"},{text:"Can I be a PNG?",year:"2022"},{text:"How about I set this house on fire?",year:"2023"},{text:"PHYSICS, why must you exist?",year:"2023"},{text:"Sleep is also very important i feel",year:"2024"},{text:"What's the brake?",year:"2024"},{text:"I dont know what I am doing",year:"2024"},{text:"I don't like drawing frills, but I like wearing frills.",year:"2024"},{text:"Everything in the world tastes like chicken, or doesn't taste like chicken",year:"2024"},{text:"Harmonies are too difficult for me my brain is not built for music.",year:"2021"},{text:"Naming layers in 2021...I MEAN 2022! My identity has been revealed as Past Ina in 2021! TCH! Blew my cover!",year:"2022"},{text:"Oh it's a jellyfish!",year:"2021"},{text:"Each world has its own world",year:"2021"},{text:"WARAU NA!!!",year:"2023"},{text:"Takobocchi...",year:"2023"},{text:"You're in denial! It's the Amazon.",year:"2021"},{text:"Bears don't go to cram school. They study kuman.",year:"2021"},{text:"This is unbearable. Unbelievable.",year:"2021"},{text:"I'm only friends with 25 letters of the alphabet.",year:"2021"},{text:"I specialize in oyaji gyagu.",year:"2021"},{text:"No pun is in a mode. It's just built-in. It's permanent. You can't turn it off.",year:"2021"},{text:"A dad joke is only a dad joke when it becomes apparent.",year:"2021"},{text:"Deja vu *giggle* nya nya nya nya nya nyaa",year:"2020"},{text:"I'm not selling my friends for that low!",year:"2020"},{text:"It's like Blues Clues, but spookier",year:"2020"},{text:"Sir, may I see your suction cups",year:"2020"},{text:"Sometimes violence is necessary for....entertainment",year:"2020"},{text:"be nice to your body",year:"2020"},{text:"Its Tuesday somewhere in the world.",year:"2020"},{text:"Learn to lie to yourself, it's important",year:"2020"},{text:"I see Gura as a dessert",year:"2020"},{text:"Isn't this the good stuff?",year:"2020"},{text:"Do eyebrows grow back?",year:"2020"},{text:"As long as we go down smiling, it's all worth it",year:"2020"},{text:"Thank goodness for TNT",year:"2020"},{text:"I rode Mr Pierce until he became friendly",year:"2020"},{text:"I raised this chat.",year:"2020"},{text:"boing boing boing boing boing boing boing boing boing boing",year:"2021"},{text:"Very Nice, good job chat, we did it",year:"2021"},{text:"there's no rule in eating kitkats",year:"2021"},{text:"puns is a lifestyle",year:"2021"},{text:"These days... you have to get used to doing things by yourself--if you know how to embrace being alone, it's a good skill... sometimes...",year:"2021"},{text:"What is right?",year:"2021"},{text:"jumpy boi can jump",year:"2021"},{text:"Improvise - Adapt - Overcome - Die",year:"2021"},{text:"Those are some big beans.",year:"2021"},{text:"Why...?",year:"2021"},{text:"Yeah die die die die die",year:"2021"},{text:"this whip is nice",year:"2021"},{text:"Is Minecraft's cake a cake?",year:"2021"},{text:"If it ain't broke, it ain't broken",year:"2021"},{text:"super simple, super cute, but also with details",year:"2021"},{text:"The bench is the bench",year:"2021"},{text:"cats are liquid",year:"2021"},{text:"IM RICH!",year:"2021"},{text:"graduate from unga bunga",year:"2021"},{text:"I dont feel pain",year:"2021"},{text:"OH YEAH WIGGLE THAT",year:"2021"},{text:"But this puts a smile on my face",year:"2021"},{text:"Does mask blink",year:"2021"},{text:"I have no social life",year:"2021"},{text:"saving is good",year:"2021"},{text:"check yourself before you wreck yourself",year:"2021"},{text:"How did I do that?",year:"2021"},{text:"It's ok to bully",year:"2021"},{text:"no, don't eat",year:"2022"},{text:"you sound like that one dude",year:"2022"},{text:"She threw me up in the air like a bag of groceries.",year:"2022"},{text:"Destroy nature",year:"2022"},{text:"Yes my hood please.",year:"2023"},{text:"I'm a good at shooting",year:"2023"},{text:"stuff",year:"2023"},{text:"I don't know what first look like",year:"2023"},{text:"The truth that is the truth",year:"2023"},{text:"You never know you know",year:"2023"},{text:"THE FURRY COMMISSIONS!",year:"2023"},{text:"Do you get why the blowfish blows up? Cus it's a blowfish?",year:"2021"},{text:"Don't start loafing around!",year:"2021"},{text:"I can bearly finish this question!",year:"2021"},{text:"What's 01 in binary... It's just one? Was that the answer you guys oneted?",year:"2021"},{text:"they shouldn't bee here... hahaa get it... bee...",year:"2021"},{text:"you might not beelieve me, but I didn't mean to!",year:"2021"},{text:"I don't wanna bee here..",year:"2021"},{text:"I didn't think there'd bee like... a place as big as this...",year:"2021"},{text:"I can't beelieve you've done this.. heheH",year:"2021"},{text:"if that's how you guys are treeting me... ha ha... oh dear that's so bad",year:"2021"},{text:"chat and I, wheat have to think about it...",year:"2021"},{text:"Puns need to grow organically. No chemicals added.",year:"2021"},{text:"Something came in fur you... haha... get the pun..?",year:"2021"},{text:"You never miss a beat! Yeah, cus I never have a dead beat...",year:"2021"},{text:"Are you INA trouble?",year:"2021"},{text:"You could say we're blueing through the messages...",year:"2021"},{text:"Streamers... are paper... streamers are kami... streamers... are god",year:"2021"},{text:"I almost said I'll bee there soon.. but I'm already here..",year:"2021"},{text:"Unbeelievable..",year:"2021"},{text:"they bee angry..",year:"2021"},{text:"just axe! / I wood appreciate that a lot! / You woodn't want to get yourself stuck in there...",year:"2021"},{text:"You wood not think that I need more wood... you needn't axe the question...",year:"2021"},{text:"Hololive Altreenative...",year:"2021"},{text:"I'm out of leaves! Oh no... I can't beleaf it...",year:"2021"},{text:"I woodn't have guessed they wood...",year:"2021"},{text:"I can't beleaf it!",year:"2021"},{text:"Y'know... it's a-me.. but I'm not Ame...",year:"2021"},{text:"Let's drop by one of the near ones! Hehe... Nier ones..",year:"2021"},{text:"Oh, the results are really Nier to each other...",year:"2021"},{text:"I guess they forgot to Phil you in on the details..",year:"2021"},{text:"Combee.. a good combee-nation, I'll say!",year:"2021"},{text:"No pan.. but we have a lot of pun",year:"2021"},{text:"Do not leaf me! Beleaf in me!",year:"2021"},{text:"It's jolly(bee)!",year:"2021"},{text:"I sure do see a horse!",year:"2021"},{text:"Is it a PUNishment",year:"2022"},{text:"You can't spell world domination without INA",year:"2021"},{text:"You can't spell determination without INA",year:"2021"},{text:"Inafinite Pun Works",year:"2021"},{text:"Learn Chili Tail? Wouldn't that be like Ice Tail.. cus it's chilly? Ha ha ha ha ha...",year:"2023"},{text:"I've never been picked for the spelling bee.. and for good reason",year:"2023"},{text:"you can finally become a bell.. a tako bell!",year:"2023"},{text:"I can't be-leaf it!",year:"2023"},{text:"Yuul B Alright, heh get it? YUBI Alright...",year:"2021"},{text:"wood doko.. wood, dogo.. wood no go... wood.. DONKEY",year:"2023"}],Q=(e,t)=>{var a,n;return!!e&&!!t&&e.text===t.text&&e.year===t.year&&(null!==(a=e.author)&&void 0!==a?a:"")===(null!==(n=t.author)&&void 0!==n?n:"")},ee=e=>{var t,a;const n=e?Z.filter(t=>{var a,n;return t.text!==e.text||t.year!==e.year||(null!==(a=t.author)&&void 0!==a?a:"")!==(null!==(n=e.author)&&void 0!==n?n:"")}):Z;return null!==(t=null!==(a=n[Math.floor(Math.random()*n.length)])&&void 0!==a?a:e)&&void 0!==t?t:Z[0]},te=()=>{var e;const[t,a]=(0,n.useState)(!1),[i,r]=(0,n.useState)(null),[o,s]=(0,n.useState)(null),[l,p]=(0,n.useState)(!1),h=(0,n.useCallback)(()=>{s(e=>{const t=(e=>{if(Math.random()>=.1)return null!==e&&void 0!==e?e:null;const t=ee(e);return Q(e,t)?ee(e):t})(e);return t&&!Q(e,t)&&(p(!0),window.setTimeout(()=>p(!1),3e3)),t})},[]),x=(0,n.useCallback)(()=>{a(e=>(e&&r(e=>(null!==e&&void 0!==e?e:0)+1),!e))},[]);return(0,d.jsxs)(W,{$grayscale:t,children:[(0,d.jsxs)(q,{children:[(0,d.jsx)(B,{src:"/InaInaIna.png",$grayscale:t,alt:"Ina"}),null!==i&&(0,d.jsx)(J,{children:"Miraculously preserved"},i)]}),(0,d.jsxs)(O,{style:t?{filter:"grayscale(1)"}:{},children:[o?(0,d.jsxs)(P,{style:{fontSize:(c=o.text.length,Math.max(9,Math.min(22,1500/c)))},children:['"',o.text,'"']}):(0,d.jsx)("img",{alt:"WAH",src:"/WAH.png",style:t?{filter:"grayscale(1)"}:{}}),(0,d.jsx)("br",{}),o&&null!==(e=o.author)&&void 0!==e?e:"Ninomae Ina'nis",(0,d.jsx)("br",{}),o?o.year:"12\xb709\xb72020",(0,d.jsx)("br",{})]}),(0,d.jsxs)(F,{children:[(0,d.jsx)(U,{$active:l,onClick:h,children:"Gacha"}),(0,d.jsx)(_,{onClick:x,children:t?"Give her an elixir of the undying":"Ina saw this button!!"})]})]});var c},ae=i.Ay.div`
  position: absolute;
  top: 4px;
  left: 4px;
  background: var(--dark-highlight);
  color: var(--text-color);
  font-size: 18px;
  font-weight: bold;
  padding: 3px 12px;
  border-radius: 12px;
  z-index: 2;
  pointer-events: none;
  @media only screen and (max-width: 700px) {
    font-size: 12px;
    padding: 2px 7px;
  }
`,ne=i.i7`
  0% { transform: rotate(0deg);}
  20% { transform: rotate(-8deg);}
  40% { transform: rotate(8deg);}
  60% { transform: rotate(-4deg);}
  80% { transform: rotate(4deg);}
  100% { transform: rotate(0deg);}
`,ie=i.Ay.div`
  text-align: center;
  padding-top: 50px;
  padding-bottom: 10rem;
  background: var(--background) url(${""}/Pattern2.png) 0 0;
  background-attachment: fixed;
  background-size: 180px;
  z-index: 1;
  @media only screen and (max-width: 701px) {
    padding-top: 0;
    padding-bottom: 50px;
  }
`,re=i.Ay.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 48px;
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
    max-width: 100%;
  }
`,oe=i.Ay.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(160px, 1fr));
  gap: 32px 32px;
  justify-content: center;
  align-items: start;
  flex: 1 1 0;
  min-width: 10vw;
  max-width: 700px;
  margin-top: 50px;
  @media only screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    max-width: 100%;
    margin-top: 25px;
  }
  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 150px);
    gap: 16px;
    width: fit-content;
    max-width: 100%;
    margin: 15px auto 0;
    justify-items: center;
  }
`,se=i.Ay.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 160px;
  height: 160px;
  margin: 0;
  padding-top: 50px;
  z-index: 1;
  overflow: visible;
  @media only screen and (max-width: 1100px) {
    width: 160px;
    height: 160px;
    padding-top: 25px;
  }
  @media only screen and (max-width: 700px) {
    width: 150px;
    height: 150px;
    padding-top: 15px;
  }
`,le=i.Ay.img`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 80px;
  pointer-events: none;
  z-index: 0;
  transition: ${e=>e.active?"transform 0.4s cubic-bezier(.4,2,.6,1)":"none"};
  transform: translate(-50%, -50%)
    translateY(${e=>e.active?"-5.1vw":"4vw"})
    scale(${e=>e.active?1.1:.5});
  @media only screen and (max-width: 700px) {
    width: 60px;
    transform: translate(-50%, -50%)
      translateY(${e=>e.active?"-15vw":"4vw"})
      scale(${e=>e.active?1.1:.5});
  }
`,de=i.Ay.button`
  width: 200px;
  height: 200px;
  border: none;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  margin: 0;
  position: relative;
  ${e=>{let{$shaking:t}=e;return t&&i.AH`
      animation: ${ne} 0.4s linear;
    `}}
  @media only screen and (max-width: 1100px) {
    max-width: 180px;
    max-height: 180px;
  }
  @media only screen and (max-width: 700px) {
    width: 150px;
    height: 150px;
  }
`,pe=i.Ay.img`
  display: block;
  margin: 0 auto;
  transition: transform 0.2s;
  @media only screen and (max-width: 1100px) {
    width: min(50vw, 180px);
    height: min(50vw, 180px);
  }
  @media only screen and (max-width: 700px) {
    width: 150px;
    height: 150px;
  }
`,he=i.Ay.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: clamp(14px, 4vw, 20px);
  font-weight: 1000;
  color: #38250aff;
  text-shadow:
    0 0 0.08em #fff,
    0.08em 0 0 #fff,
    -0.08em 0 0 #fff,
    0 0.08em 0 #fff,
    0 -0.08em 0 #fff,
    0.08em 0.08em 0 #fff,
    -0.08em -0.08em 0 #fff,
    0.08em -0.08em 0 #fff,
    -0.08em 0.08em 0 #fff;
  width: 90%;
  min-width: 0;
  text-align: center;
  z-index: 1;
  pointer-events: none;
  white-space: pre-line;
  line-height: 1.15;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1100px) {
    font-size: clamp(13px, 3vw, 18px);
    max-width: 90%;
  }
  @media only screen and (max-width: 700px) {
    font-size: clamp(12px, 4vw, 16px);
    max-width: 90%;
  }
`,xe=(0,i.Ay)(r.N_)`
  all: unset;
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,ce=i.Ay.a`
  all: unset;
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;var ge=a(5402);const me=[{to:"/inaoutfit",label:"Ina Ina Outfit!"},{to:"/momentsgallery",label:"Moments Gallery"},{to:"/wahrld",label:"Ina around the WAHrld"},{to:"/playlist",label:"The Ultimate Ina Playlist"},{to:"/timeline",label:"Ina's Timeline"},{to:"/takodex",label:"Takodex"},{to:"/messages",label:"Artworks & Messages"},{to:"/letters",label:"Letters for Ina"},{href:"Ina Cookbook.pdf",label:"Tako Cookbook"},{to:"/collages",label:"Takollages"},{to:"/moments",label:"Ina Moments (2024)"},{to:"/wah",label:"WAH (2024)"}],fe=["Ina Ina Outfit!","Moments Gallery","Ina around the WAHrld"],ye=["The Ultimate Ina Playlist","Ina's Timeline","Takodex"],ue=()=>{const[e,t]=(0,n.useState)(null),[a,i]=(0,n.useState)(""),[r,o]=(0,n.useState)(null);return(0,d.jsx)(ie,{children:(0,d.jsxs)(re,{children:[(0,d.jsx)(H.wA,{children:(0,d.jsxs)("div",{className:"Menu-text",children:[(0,d.jsxs)("p",{children:["This site was developed by the ",(0,d.jsx)("b",{children:"Tentacult"})," to celebrate"," ",(0,d.jsx)("b",{children:"Ina's milestones"}),"!"]}),(0,d.jsxs)("p",{children:["It is ",(0,d.jsx)("b",{children:"TAKOTIME"})," to celebrate your ",(0,d.jsx)("b",{children:"6th anniversary"}),"!!"]}),(0,d.jsxs)("p",{children:["This time, we collected all sorts of things from all over, from artwork to photos! From the world to you, takos share their support!! ",(0,d.jsx)("b",{children:"World Domination!!"})," In the"," ",(0,d.jsx)("b",{children:"Ina Around the WAHld"})," section, takos showed that we are everywhere!! ",(0,d.jsx)("b",{children:"WE ARE HERE!!"})]}),(0,d.jsxs)("p",{children:["We made tributes for all the amazing and fun moments that we spent over these six years. These can be found in the"," ",(0,d.jsx)("b",{children:"Moment Gallery"})," so we can remember them forever. Each moment is like a piece of art made by you, your friends, and us, and we will all cherish them always."]}),(0,d.jsxs)("p",{children:["Of course, as always, there are updates to other pages of the site as well! New outfits illustrated by talented takos, new song entries in the playlist, a timeline that is now up to date, and new tako variants registered in the ",(0,d.jsx)("b",{children:"Takodex"}),"!"]}),(0,d.jsxs)("p",{children:["Things have changed so much as the years have gone by, but you will always have our support. We couldn't be prouder to be"," ",(0,d.jsx)("b",{children:"Takodachis"}),", since we have such an amazing ",(0,d.jsx)("b",{children:"priestess"}),"."]}),(0,d.jsxs)("p",{children:[(0,d.jsx)("b",{children:"From many takos around the world, thank you so much!"}),(0,d.jsx)("br",{}),(0,d.jsx)("b",{children:"With all our love, Happy Anniversary, Ina! \ud83d\udc9c\ud83d\udc19"})]})]})}),(0,d.jsx)(oe,{children:me.map((n,s)=>(0,d.jsxs)(se,{onMouseEnter:()=>{t(s),(e=>{o(e),setTimeout(()=>o(null),400),i(""),setTimeout(()=>{const e=ge.A[Math.floor(Math.random()*ge.A.length)];i(`/takos/${encodeURIComponent(e)}`)},120)})(s)},onMouseLeave:()=>t(null),style:{position:"relative"},children:[fe.includes(n.label)&&(0,d.jsx)(ae,{children:"New!"}),ye.includes(n.label)&&(0,d.jsx)(ae,{children:"Update!"}),(0,d.jsx)(le,{className:"tako-peek",src:a,alt:"peeking tako",active:e===s&&!!a,style:{visibility:a?"visible":"hidden"}}),"to"in n?(0,d.jsx)(xe,{to:n.to,role:"button",children:(0,d.jsxs)(de,{title:n.label,$shaking:r===s,children:[(0,d.jsx)(pe,{src:"/cookie.png",alt:"cookie"}),(0,d.jsx)(he,{children:n.label})]})}):(0,d.jsx)(ce,{href:n.href,role:"button",target:"Takollages"===n.label?"_blank":void 0,rel:"Takollages"===n.label?"noopener noreferrer":void 0,children:(0,d.jsxs)(de,{title:n.label,$shaking:r===s,children:[(0,d.jsx)(pe,{src:"/cookie.png",alt:"cookie"}),(0,d.jsx)(he,{children:n.label})]})})]},n.label))})]})})},be=60,we=i.Ay.div`
  --divider-top-gap: ${e=>{let{$topGap:t}=e;return null!==t&&void 0!==t?t:"0px"}};

  width: 100%;
  height: ${be}px;
  overflow: hidden;
  position: relative;
  background: var(--background) url(${""}/Pattern2.png) 0 0;
  background-attachment: fixed;
  background-size: 180px;
  padding-top: calc(var(--divider-top-gap) + 20px);
  padding-bottom: 10px;
`,ve=i.Ay.img`
  width: ${be}px;
  height: ${be}px;
  position: absolute;
  top: var(--divider-top-gap);
  left: 0;

  animation: ${e=>{let{mirror:t}=e;return(e=>i.i7`
  from {
    transform: translateX(${e?"calc(100vw + 60px)":"-60px"}) scaleX(${e?-1:1});
  }
  to {
    transform: translateX(${e?"-60px":"calc(100vw + 60px)"}) scaleX(${e?-1:1});
  }
`)(t)}} ${10}s linear infinite;
  animation-delay: ${e=>{let{delay:t}=e;return t}}s;
`,ke=e=>{let{mirror:t,topGap:a}=e;return(0,d.jsx)(we,{$topGap:a,children:Array(8).fill(0).map((e,a)=>(0,d.jsx)(ve,{src:"/takoflap.gif",alt:"gif",delay:-1.25*a,mirror:t,draggable:"false"},a))})};var je=a(1472),Ie=a(2154),$e=a(4530);const Ae=e=>({src:`balloons/generic/balloon-generic-${e}.png`}),Te=e=>({src:`balloons/mv/balloon-mv-${e}.png`}),Me=e=>({src:`balloons/takos/balloon-takos-${e}.png`}),ze=[Me("0"),Me("1"),Me("cookies"),Me("uhh-i-think-she-needs-help")],Se={Standard:[Te("meconopsis"),Te("violet"),Te("temari"),Te("tako8takover"),Ae("purple"),Ae("pink"),Ae("white"),Ae("yellow"),Ae("fushia"),Ae("orange"),Ae("green"),Ae("lime"),...ze],Violet:[Te("violet"),Ae("blue"),Ae("blueagain"),Ae("violet"),Ae("sky"),Ae("cyan"),Ae("purple"),...ze],Meconopsis:[Te("meconopsis"),Ae("blue"),Ae("blueagain"),Ae("cyan"),Ae("purple"),Ae("sky"),Ae("violet"),...ze],Temari:[Te("temari"),Ae("red"),Ae("lightred"),Ae("orange"),Ae("pink"),Ae("fushia"),Ae("yellow"),...ze],TakoTakover:[Te("tako8takover"),Ae("purple"),Ae("fushia"),Ae("pink"),Ae("violet"),Ae("sky"),...ze]},Ye=i.Ay.img`
  position: absolute;
  left: ${e=>{let{left:t}=e;return t}}vw;
  bottom: ${e=>{let{bottom:t}=e;return t}}px;
  height: ${e=>{let{$heightScale:t}=e;return(20*t).toFixed(2)}}vmax;
  max-height: ${e=>{let{$heightScale:t}=e;return Math.round(260*t)}}px;
  min-height: ${e=>{let{$heightScale:t}=e;return Math.round(180*t)}}px;
  width: clamp(70px, 12vw, 160px);
  max-width: 18vw;
  object-fit: contain;
  z-index: 0;
  pointer-events: none;
  will-change: transform;
  animation: ${e=>{let{swayOffset:t}=e;return i.AH`
    ${(e=>i.i7`
  0% {
    transform: translateY(0) translateX(0) rotate(-2deg);
    opacity: 0;
  }
  8% { opacity: 1; }
  25% { transform: translateY(-32.5vh) translateX(${e}px) rotate(3deg); }
  50% { transform: translateY(-65vh) translateX(${.7*-e}px) rotate(-2deg); }
  75% {
    transform: translateY(-97.5vh) translateX(${.9*e}px) rotate(2deg);
  }
  98% { opacity: 1; }
  100% {
    transform: translateY(-130vh) translateX(0) rotate(0deg);
    opacity: 0;
  }
`)(t)} 12s ease-in-out forwards
  `}};
`,Ne=i.Ay.div`
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
`,Re=()=>{const[e,t]=(0,n.useState)([]),a=(0,n.useRef)(null),{theme:i}=(0,u.D)();return(0,n.useEffect)(()=>{Se[i].forEach(e=>{(new Image).src=`/${e.src}`})},[i]),(0,n.useEffect)(()=>{const e=()=>{const e=Se[i],a=Math.floor(2*Math.random())+1,n=document.documentElement.scrollHeight,r=[];for(let t=0;t<a;t++)if(Math.random()<.96){const a=e[Math.floor(Math.random()*e.length)],i=10*Math.random()+8;r.push({key:Date.now()+Math.random()+t,left:Math.random()*(100-i-6),src:a.src,bottom:Math.random()*n,createdAt:Date.now(),heightScale:.6*Math.random()+.4,swayOffset:(30*Math.random()+10)*(Math.random()<.5?1:-1)})}r.length>0&&t(e=>[...e,...r])},n=()=>{a.current=setInterval(e,2e3)},r=()=>{a.current&&clearInterval(a.current)},o=()=>"hidden"===document.visibilityState?r():n();return n(),document.addEventListener("visibilitychange",o),()=>{r(),document.removeEventListener("visibilitychange",o)}},[i]),(0,n.useEffect)(()=>{const e=setInterval(()=>{t(e=>e.filter(e=>Date.now()-e.createdAt<2e4))},2e3);return()=>clearInterval(e)},[]),(0,d.jsx)(Ne,{children:e.map(e=>(0,d.jsx)(Ye,{left:e.left,bottom:e.bottom,swayOffset:e.swayOffset,$heightScale:e.heightScale,src:`/${e.src}`,alt:"floating balloon"},e.key))})},Ce=i.Ay.div`
  position: relative;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  min-height: 100vh;
  background: var(--background);
`,Ee=()=>{const{muted:e}=(0,je.d2)(),t=(0,Ie.G)({muted:e,autoPlay:!0});return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("audio",{ref:t,src:"/\u660e\u65e5\u3082\u6674\u308c\u308b\u3068\u3044\u3044\u306d.mp3",loop:!0,preload:"auto",style:{display:"none"}}),(0,d.jsxs)(Ce,{children:[(0,d.jsx)(Re,{}),(0,d.jsx)($e.A,{}),(0,d.jsx)(M,{}),(0,d.jsx)(te,{}),(0,d.jsx)(ke,{mirror:!0,topGap:"48px"}),(0,d.jsx)(D,{}),(0,d.jsx)(ke,{topGap:"48px"}),(0,d.jsx)(ue,{}),(0,d.jsx)(h,{})]})]})}},5402(e,t,a){a.d(t,{A:()=>n,s:()=>i});const n=["albertoe.png","CapSora.png","cedric_alpha.png","Chumbeque.png","ConcussioAmi.png","CyberToast.png","Deceptric13.png","Deracts.png","DinoTakos.png","Eyeye.png","FlaminSarge.png","Freir.png","Gaah.png","Gathog.png","HuyK.png","IcedOmachi.png","InaStoleMyHARTH.png","IrisPonn.png","izefjc.png","JustVine.png","Mangu.png","Pely_.png","Pixaurora.png","Plazma00.png","Raven0815.png","rid2079.png","SeeyahLater.png","Senki.png","Squash.png","subis.png","third12.png","Uni8.png","Vaan.png","Wahmaa.png","wydken.png","Yue.png","\u590f\u96ea.png","11.png","14.png","15.png","16.png","17.png","35.png","44.png","71.png","A random casual.png","Arthain.png","Astraea.png","BreadART.png","Chibi RoggianX.png","chuunilord.png","Corp.Shephard.png","Creau.png","Cyber Toast.png","CYtako.png","DarkNess2101.png","Deer Oh Dear.png","DHugo.png","Drebyal Draws.png","eLun.png","Endactam.png","enicholas.png","Epi.png","fluffycatfish.png","Fluid.png","Frediloc8.png","GreenFox.png","Haru.png","Hermit Purple.png","HiloNero.png","Huros.png","Ironsigh.png","Ithi.png","Jaboll252.png","Jamu(ta)ko.png","Jamuko.png","Jems.png","Jhon. Palmer.png","Joakim MF.png","junblebee.png","Kaede, Acolyte of Wahtcher.png","keoqzzi\ud83c\udf5c.png","Kinoko.png","KiwiNeko.png","kshut (@shutowl).png","Kurasu Kanon.png","Kurosagi.png","LasagnaLaffeydiction.png","Lethargic.png","Lienou.png","LynsDoodles.png","Lyudmilia.png","Machi says WAH.png","Mango Konata.png","Mara.png","McArkus.png","Meap.png","Melmarkt.png","MiJi.png","Milk.png","Minja.png","Neminem.png","NKS5.png","notaBob.png","NowaruArt.png","NxKarim.png","Nyuusai.png","OK Kei.png","OutOfRice.png","Overseer Olive.png","popop.png","ProxyZeus.png","PureTako.png","RCSI.png","Ren.png","Reyk.png","Reykhebaxh.png","RiDeth.png","Rie Cotton Cat.png","Rinh.png","Scalim.png","SeaRain.png","SharkyDoko.png","Shokuro.png","SleepDeprivedFae.png","SleepzyTofu.png","Sock.png","Spud Tako.png","Squirl.png","sunnyfaller.png","Tahi.png","Taiki Kiki.png","Takedo.png","Takollite.png","Takomonty.png","Takoster.png","Teddy B\u0295\xb4\u2022\u1d25\u2022`\u0294.png","Teo.png","The Shiv Spoon.png","Thocclord.png","Tornhalo.png","Tung.png","Valawari.png","Valtaur_tw.png","Vanilla Thunder.png","Vantablack.png","vignedev.png","WindStreak.png","Wydken.png","Yato Tako.png","Zel Maelstrom.png","zeroyaka.png","\u304a\u5144\u304e\u308a.png","\u30a4\u30ab^10.png"],i=n.length},2154(e,t,a){a.d(t,{G:()=>i});var n=a(5043);const i=e=>{let{muted:t,volume:a=.1,autoPlay:i=!1,videoPaused:r=!1}=e;const o=(0,n.useRef)(null);return(0,n.useEffect)(()=>{o.current&&(o.current.volume=a)},[a]),(0,n.useEffect)(()=>{const e=o.current;e&&(r?e.pause():(t||e.paused)&&(t?e.pause():e.play().catch(()=>{})))},[t,r]),(0,n.useEffect)(()=>{if(!i)return;let e=null,a=!1;return o.current&&!t&&o.current.play().catch(()=>{a||(e=()=>{o.current&&!t&&o.current.play().catch(()=>{}),e&&window.removeEventListener("click",e)},window.addEventListener("click",e))}),()=>{a=!0,e&&window.removeEventListener("click",e)}},[i,t]),o}}}]);
//# sourceMappingURL=95.61b36438.chunk.js.map
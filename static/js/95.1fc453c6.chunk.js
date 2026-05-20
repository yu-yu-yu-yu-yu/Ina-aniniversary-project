"use strict";(globalThis.webpackChunkina=globalThis.webpackChunkina||[]).push([[95],{4530(e,t,a){a.d(t,{A:()=>p});var n=a(5043),i=a(403),o=a(5402),r=a(579);const l=i.i7`
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
`,s=i.Ay.img`
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
  animation: ${l} 9s linear forwards;
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
`,p=e=>{let{freeFloat:t=!1,zIndex:a}=e;const[i,l]=(0,n.useState)([]),p=(0,n.useRef)(null),x=(0,n.useRef)(null),[c]=(0,n.useState)(!t);(0,n.useEffect)(()=>{const e=()=>{const e=Math.floor(3*Math.random())+1,t=document.documentElement.scrollHeight,a=[];for(let n=0;n<e;n++)Math.random()<.6&&a.push({key:Date.now()+Math.random()+n,left:c?h():90*Math.random(),tako:o.A[Math.floor(Math.random()*o.A.length)],bottom:Math.random()*t,createdAt:Date.now()});a.length>0&&l(e=>[...e,...a])},t=()=>{p.current=setInterval(e,1e3)},a=()=>{p.current&&clearInterval(p.current)},n=()=>"hidden"===document.visibilityState?a():t();return t(),document.addEventListener("visibilitychange",n),()=>{a(),document.removeEventListener("visibilitychange",n)}},[]),(0,n.useEffect)(()=>{const e=setInterval(()=>{l(e=>e.filter(e=>Date.now()-e.createdAt<9e3))},1e3);return()=>clearInterval(e)},[]);const h=()=>Math.random()<.5?10*Math.random():90+10*Math.random(),m=()=>{x.current&&(x.current.volume=.2,x.current.currentTime=0,x.current.play())};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("audio",{ref:x,src:"/inatakosound.mp3",preload:"auto",style:{display:"none"}}),(0,r.jsx)(d,{$zIndex:a,children:i.map(e=>(0,r.jsx)(s,{left:e.left,bottom:e.bottom,src:`/takos/${encodeURIComponent(e.tako)}`,alt:"floating takodachi",onClick:m,style:{pointerEvents:"auto",cursor:"pointer"}},e.key))})]})}},1095(e,t,a){a.r(t),a.d(t,{default:()=>Me});var n=a(5043),i=a(403),o=a(2582);const r=i.i7`
  0%, 75%, 100% { transform: rotate(0deg); }
  78%  { transform: rotate(-5deg); }
  81%  { transform: rotate(5deg); }
  84%  { transform: rotate(-4deg); }
  87%  { transform: rotate(4deg); }
  90%  { transform: rotate(-2deg); }
  93%  { transform: rotate(0deg); }
`,l=i.Ay.footer`
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
    animation: ${r} 5s ease-in-out infinite;

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

`,s=i.Ay.div`
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
`;var d=a(579);const{rE:p}={rE:"26.1.5"},x=()=>(0,d.jsxs)(l,{children:[(0,d.jsx)(s,{children:(0,d.jsx)("img",{alt:"Ao-chan Logo",src:"/AOPatternFilledIn.png"})}),(0,d.jsx)("div",{className:"footer-social-container",children:(0,d.jsxs)("div",{className:"social-links",children:[(0,d.jsx)("a",{href:"https://twitter.com/ninomaeinanis",target:"_blank",rel:"noopener noreferrer",children:(0,d.jsxs)("p",{children:[(0,d.jsx)("i",{className:"fa fa-twitter"})," @ninomaeinanis"]})}),(0,d.jsx)("br",{}),(0,d.jsx)("a",{href:"https://www.youtube.com/channel/UCMwGHR0BTZuLsmjY_NT5Pwg",target:"_blank",rel:"noopener noreferrer",children:(0,d.jsxs)("p",{children:[(0,d.jsx)("i",{className:"fa fa-youtube-play"})," Ninomae Ina'nis Ch."]})})]})}),(0,d.jsx)("div",{className:"footer-img-container",children:(0,d.jsx)(o.N_,{to:"/credits",children:(0,d.jsx)("img",{alt:"mini-ina",className:"footer-img",src:"/MiniIna.png"})})}),(0,d.jsxs)("div",{className:"disclaimer-container",children:[(0,d.jsx)("p",{children:"This is a fan project. We are not affiliated with or endorsed by Cover Corporation."}),(0,d.jsxs)("p",{style:{fontSize:"0.75rem",opacity:.5,marginTop:"0.25rem"},children:["v",p]})]})]}),c=i.Ay.div`
  min-height: 100vh;
  position: relative;
  z-index: 1;
  
  background: var(--background);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  box-sizing: border-box;
`,h=i.Ay.img`
  opacity: 1;
  margin-left: auto;
  margin-right: auto;

  width: 45vh;
  filter: var(--logo-filter); 
  @media only screen and (min-width: 1200px) and (max-height: 800px){
    width: 70vh !important; 
  }

  @media only screen and (max-width: 1350px) {
    width: 40vh;
  }
`,m=i.Ay.h2`

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
`,g=i.Ay.h1`

  margin: 8px;
  color: var(--dark-highlight);
  text-align: center;

  font: normal normal bold 60px/72px Montserrat;  
  letter-spacing: 3px;                          

  @media only screen and (min-width: 1200px) and (max-height: 800px){
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
`,u=i.Ay.div`
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
`;var y=a(3403);const v={Standard:"",Violet:"violet",Meconopsis:"meconopsis",Temari:"temari",TakoTakover:"tako8takover"},b=["0","1","cookies","uhh-i-think-she-needs-help"],w=i.i7`
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
  animation: ${w} ${e=>{let{$delay:t}=e;return 2.6+.35*t}}s ease-in-out infinite;
  animation-delay: ${e=>{let{$delay:t}=e;return.45*t}}s;
  pointer-events: none;

  @media only screen and (max-width: 700px) {
    display: none;
  }
`,$=i.Ay.div`
  display: none;
  @media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    gap: 10px;
    margin: 4px 0;
  }
`,A=[31,36,29,33],z=[6,22,0,14],M=i.Ay.img`
  height: ${e=>{let{$index:t}=e;return A[t]}}vw;
  width: auto;
  pointer-events: none;
  margin-bottom: ${e=>{let{$index:t}=e;return z[t]}}px;
  animation: ${w} ${e=>{let{$delay:t}=e;return 2.6+.35*t}}s ease-in-out infinite;
  animation-delay: ${e=>{let{$delay:t}=e;return.45*t}}s;
`,T=()=>{const{theme:e}=(0,y.D)(),{mvFiles:t,shapedFiles:a,pos:i}=(0,n.useMemo)(()=>{const t=e=>(Math.random()-.5)*e+"%",a=(e,t)=>`${Math.floor(Math.random()*(t-e)+e)}px`,n=(e,t)=>`${Math.floor(Math.random()*(t-e)+e)}%`;return{mvFiles:"Standard"===e?["meconopsis","violet","temari","tako8takover"]:Array(4).fill(v[e]),shapedFiles:[...b].sort(()=>Math.random()-.5),pos:{mvLT:t(20),mvLB:t(20),mvRT:t(20),mvRB:t(20),mvGapLT:a(8,28),mvGapLB:a(8,28),mvGapRT:a(8,28),mvGapRB:a(8,28),shTopLT:n(-20,0),shTopLB:n(55,78),shTopRT:n(-20,0),shTopRB:n(55,78),shGapLT:a(130,210),shGapLB:a(120,200),shGapRT:a(130,210),shGapRB:a(120,200)}}},[e]),o=e=>`/balloons/mv/balloon-mv-${e}.png`,r=e=>`/balloons/takos/balloon-takos-${e}.png`;return(0,d.jsxs)(c,{children:[(0,d.jsxs)(f,{children:[(0,d.jsx)(m,{children:"Tentacult Temple Fan Site"}),(0,d.jsx)($,{children:t.map((e,t)=>(0,d.jsx)(M,{src:o(e),alt:"",$delay:t,$index:t},t))}),(0,d.jsxs)(k,{children:[(0,d.jsx)(j,{$side:"left",$top:`calc(0%  + ${i.mvLT})`,$gap:i.mvGapLT,$delay:0,src:o(t[0]),alt:""}),(0,d.jsx)(j,{$side:"left",$top:`calc(45% + ${i.mvLB})`,$gap:i.mvGapLB,$delay:1,src:o(t[1]),alt:""}),(0,d.jsx)(j,{$side:"right",$top:`calc(5%  + ${i.mvRT})`,$gap:i.mvGapRT,$delay:2,src:o(t[2]),alt:""}),(0,d.jsx)(j,{$side:"right",$top:`calc(40% + ${i.mvRB})`,$gap:i.mvGapRB,$delay:3,src:o(t[3]),alt:""}),(0,d.jsx)(h,{alt:"ina-logo",src:"/InaLogo.png"}),(0,d.jsx)(j,{$side:"left",$top:i.shTopLT,$gap:i.shGapLT,$delay:4,src:r(a[0]),alt:""}),(0,d.jsx)(j,{$side:"left",$top:i.shTopLB,$gap:i.shGapLB,$delay:5,src:r(a[1]),alt:""}),(0,d.jsx)(j,{$side:"right",$top:i.shTopRT,$gap:i.shGapRT,$delay:6,src:r(a[2]),alt:""}),(0,d.jsx)(j,{$side:"right",$top:i.shTopRB,$gap:i.shGapRB,$delay:7,src:r(a[3]),alt:""})]}),(0,d.jsx)(g,{children:"INA'S 6TH BIRTHDAY CELEBRATION"})]}),(0,d.jsx)(u,{children:(0,d.jsxs)("h3",{children:[(0,d.jsx)("i",{className:"fa fa-chevron-down"})," Scroll down for more"," ",(0,d.jsx)("i",{className:"fa fa-chevron-down"})]})})]})},I=i.Ay.div`
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  background: var(--background)
  url(${""}/Pattern2.png) 0 0;
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
`,R=i.Ay.div`
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
`,L=i.Ay.video`
  --video-edge-fade: 28px;

  width: 100%;
  height: auto;
  max-width: 800px;
  display: block;
  border-radius: 24px;
  filter: drop-shadow(0 0 18px rgba(0, 0, 0, 0.2));
  -webkit-mask-image:
    linear-gradient(
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
  mask-image:
    linear-gradient(
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
`,Y=i.Ay.button`
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
  transition: background 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease;

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
  background: rgba(0,0,0,0.15); 

  @media only screen and (max-width: 480px) {
    bottom: 8px;
    right: 8px;
    padding: 4px 8px;
  }
`,N=i.Ay.p`
  color: var(--text-color);
  font-size: 18px;
  text-shadow: 0 10px 14px var(--shadow);
  align-self: center;
  margin: 0;

  @media only screen and (max-width: 1100px) {
    font-size: 13px;
  }
`;var G=a(984);const E=Array.from({length:47},(e,t)=>`valkyrie_illust_vids/val-${t+1}.mp4`),B=e=>{if(1===E.length)return E[0];let t=e;for(;t===e;){const e=Math.floor(Math.random()*E.length);t=E[e]}return t},H=()=>{const[e,t]=(0,n.useState)(()=>B()),[a,i]=(0,n.useState)(!1);(0,n.useEffect)(()=>{i(!1)},[e]);const o=(0,n.useCallback)(()=>{t(e=>B(e))},[]),r=(0,n.useCallback)(()=>{i(!0)},[]);return(0,d.jsx)(I,{children:(0,d.jsxs)(S,{children:[(0,d.jsx)(G.wA,{children:(0,d.jsxs)("div",{className:"lore-text",children:[(0,d.jsx)("hr",{}),(0,d.jsxs)("p",{children:["One day, ",(0,d.jsx)("b",{children:"Ina'nis"})," picked up a ",(0,d.jsx)("b",{children:"strange book"})," and then started to gain the power of ",(0,d.jsx)("b",{children:"controlling tentacles"}),". To her, ",(0,d.jsx)("b",{children:"tentacles"})," are just a part in her ordinary life; it has never been a big deal for her. However, her girly mind does want to get them",(0,d.jsx)("b",{children:" dressed up and stay pretty"}),"."]}),(0,d.jsxs)("p",{children:["After gaining power, she started hearing"," ",(0,d.jsx)("b",{children:"Ancient Whispers and Revelations"}),". Hence, she began her"," ",(0,d.jsx)("b",{children:"VTuber activities "})," to deliver ",(0,d.jsx)("b",{children:" random sanity checks "})," ","on humanity, as an ",(0,d.jsx)("b",{children:"ordinary girl"}),"."]}),(0,d.jsx)("hr",{})]})}),(0,d.jsxs)(R,{style:{background:a?"transparent":"var(--dark-background)"},children:[(0,d.jsx)(L,{autoPlay:!0,loop:!0,muted:!0,preload:"auto",onCanPlay:r,style:{opacity:a?1:0,transition:"opacity 0.5s ease"},children:(0,d.jsx)("source",{src:`/${e}`,type:"video/mp4"})},e),(0,d.jsx)(Y,{type:"button",onClick:o,"aria-label":"Change lore video",title:"Change video",children:(0,d.jsx)("i",{className:"fa fa-refresh","aria-hidden":"true"})}),(0,d.jsx)(C,{children:(0,d.jsx)(N,{children:"Illustration and Animation: @valkyrie_illust"})})]})]})})},D=i.Ay.div`
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
`,F=i.Ay.img`
  display: inline-block;
  z-index: 3;
  width: 300px;
  filter: ${e=>{let{grayscale:t}=e;return t?"grayscale(1)":"none"}};
  transition: filter 0.2s;
  @media only screen and (max-width: 701px) {
    width: 200px;
  }
`,X=i.Ay.div`
  text-align: left;
  display: inline-block;
  vertical-align: center;
  margin-left: 40px;
  font: normal normal normal 40px/51px Roboto;
  letter-spacing: 2.5px;
  color: #ffffff;
  color: var(--text-color);
  @media only screen and (max-width: 701px) {
    display: block;
    margin: auto;
    text-align: center;
    font: normal normal normal 26px/32px Roboto;
    letter-spacing: 1.3px;
    margin-left: 0;
  }
  img {
    border-bottom: solid 4px;
    padding-bottom: 40px;
    width: 300px;
    filter: inherit;
    @media only screen and (max-width: 701px) {
      width: 250px;
      padding-bottom: 10px;
      padding-top: 20px;
    }
    @media only screen and (max-width: 300px) {
      width: 200px;
      padding-bottom: 10px;
      padding-top: 20px;
    }
  }
`,P=i.Ay.button`
  position: absolute;
  bottom: 18px;
  right: 18px;
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
  transition: background 0.2s, color 0.2s;
  z-index: 10;
  &:hover {
    background: var(--dark-highlight);
    color: var(--light-highlight);
  }

  @media only screen and (max-width: 701px) {
    position: static;
    display: block;
    margin: 18px auto 0;
    font-size: 0.8em;
    padding: 8px 14px;
  }
`,W=i.i7`
  0%   { opacity: 0; transform: translateY(8px); }
  15%  { opacity: 1; transform: translateY(0); }
  70%  { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-8px); }
`,O=i.Ay.div`
  display: inline-block;
  position: relative;
`,K=i.Ay.span`
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
  text-shadow: 0 0 12px #a78bfa, 0 2px 8px rgba(0, 0, 0, 0.8);
  pointer-events: none;
  animation: ${W} 2.5s ease forwards;
  @media only screen and (max-width: 701px) {
    font-size: 1.5rem;
    letter-spacing: 1px;
    width: min-content;
  }
`,_=()=>{const[e,t]=(0,n.useState)(!1),[a,i]=(0,n.useState)(null),o=(0,n.useCallback)(()=>{t(e=>(e&&i(e=>(null!==e&&void 0!==e?e:0)+1),!e))},[]);return(0,d.jsxs)(D,{$grayscale:e,children:[(0,d.jsxs)(O,{children:[(0,d.jsx)(F,{src:"/InaInaIna.png",grayscale:e,alt:"Ina"}),null!==a&&(0,d.jsx)(K,{children:"Miraculously preserved"},a)]}),(0,d.jsxs)(X,{style:e?{filter:"grayscale(1)"}:{},children:[(0,d.jsx)("img",{alt:"WAH",src:"/WAH.png",style:e?{filter:"grayscale(1)"}:{}}),(0,d.jsx)("br",{}),"Ninomae Ina'nis",(0,d.jsx)("br",{}),"12\xb709\xb72020",(0,d.jsx)("br",{})]}),(0,d.jsx)(P,{onClick:o,children:e?"Give her an elixir of the undying":"Ina asked for this button but didn't see it last time lol"})]})},J=i.Ay.div`
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
`,V=i.i7`
  0% { transform: rotate(0deg);}
  20% { transform: rotate(-8deg);}
  40% { transform: rotate(8deg);}
  60% { transform: rotate(-4deg);}
  80% { transform: rotate(4deg);}
  100% { transform: rotate(0deg);}
`,U=i.Ay.div`
  text-align: center;
  padding-top: 50px;
  padding-bottom: 10rem;
  background: var(--background)
    url(${""}/Pattern2.png) 0 0;
  background-attachment: fixed;
  background-size: 180px;
  z-index: 1;
  @media only screen and (max-width: 701px) {
    padding-top: 0;
    padding-bottom: 50px;
  }
`,Z=i.Ay.div`
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
`,q=i.Ay.div`
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
`,Q=i.Ay.div`
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
`,ee=i.Ay.img`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 80px;
  pointer-events: none;
  z-index: 0;
  transition: ${e=>e.active?"transform 0.4s cubic-bezier(.4,2,.6,1)":"none"};
  transform: translate(-50%, -50%) translateY(${e=>e.active?"-5.1vw":"4vw"}) scale(${e=>e.active?1.1:.5});
  @media only screen and (max-width: 700px) {
    width: 60px;
    transform: translate(-50%, -50%) translateY(${e=>e.active?"-15vw":"4vw"}) scale(${e=>e.active?1.1:.5});
  }
`,te=i.Ay.button`
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
      animation: ${V} 0.4s linear;
    `}}
  @media only screen and (max-width: 1100px) {
    max-width: 180px;
    max-height: 180px;
  }
  @media only screen and (max-width: 700px) {
    width: 150px;
    height: 150px;
  }
`,ae=i.Ay.img`
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
`,ne=i.Ay.span`
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
`,ie=(0,i.Ay)(o.N_)`
  all: unset;
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,oe=i.Ay.a`
  all: unset;
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;var re=a(5402);const le=[{to:"/letters",label:"Letters for Ina"},{to:"/playlist",label:"The Ultimate Ina Playlist"},{to:"/timeline",label:"Ina's Timeline"},{to:"/takodex",label:"Takodex"},{to:"/messages",label:"Artworks & Messages"},{href:"Ina Cookbook.pdf",label:"Tako Cookbook"},{to:"/collages",label:"Takollages"},{to:"/moments",label:"Ina Moments (2024)"},{to:"/wah",label:"WAH (2024)"}],se=["Letters for Ina","The Ultimate Ina Playlist"],de=["Ina's Timeline","Takodex","Artworks & Messages"],pe=()=>{const[e,t]=(0,n.useState)(null),[a,i]=(0,n.useState)(""),[o,r]=(0,n.useState)(null);return(0,d.jsx)(U,{children:(0,d.jsxs)(Z,{children:[(0,d.jsx)(G.wA,{children:(0,d.jsxs)("div",{className:"Menu-text",children:[(0,d.jsxs)("p",{children:["This site was developed by the ",(0,d.jsx)("b",{children:"Tentacult"})," to celebrate"," ",(0,d.jsx)("b",{children:"Ina's milestones"}),"!"]}),(0,d.jsxs)("p",{children:["This time we celebrate your ",(0,d.jsx)("b",{children:"birthday"}),"!"]}),(0,d.jsxs)("p",{children:["We've collected ",(0,d.jsx)("b",{children:"artworks and fan letters"})," from Takodachis around the world. Takos picked up pen and paper to pour their hearts out and send their love directly to you, and we are also keeping their letters here on the site for you to come back to whenever you want. We also put together the"," ",(0,d.jsx)("b",{children:"ultimate Ninomae Ina'nis playlist"})," with every single song you have ever sung over the years. The ",(0,d.jsx)("b",{children:"outfit timeline"})," ","has been updated too, with even more of your huge wardrobe on display across the years!"]}),(0,d.jsx)("p",{children:"We are so proud and extremely happy for how much you have achieved and how much love you continue to share with all of us."}),(0,d.jsxs)("p",{children:[(0,d.jsx)("b",{children:"From the bottom of our hearts, thank you so much!"}),(0,d.jsx)("br",{}),(0,d.jsx)("b",{children:"With all our love, Happy Birthday, Ina! \ud83d\udc9c\ud83d\udc19"})]}),(0,d.jsx)("sub",{children:"And Happy Anniversary, Takos!"})]})}),(0,d.jsx)(q,{children:le.map((n,l)=>(0,d.jsxs)(Q,{onMouseEnter:()=>{t(l),(e=>{r(e),setTimeout(()=>r(null),400),i(""),setTimeout(()=>{const e=re.A[Math.floor(Math.random()*re.A.length)];i(`/takos/${encodeURIComponent(e)}`)},120)})(l)},onMouseLeave:()=>t(null),style:{position:"relative"},children:[se.includes(n.label)&&(0,d.jsx)(J,{children:"New!"}),de.includes(n.label)&&(0,d.jsx)(J,{children:"Update!"}),(0,d.jsx)(ee,{className:"tako-peek",src:a,alt:"peeking tako",active:e===l&&!!a,style:{visibility:a?"visible":"hidden"}}),"to"in n?(0,d.jsx)(ie,{to:n.to,role:"button",children:(0,d.jsxs)(te,{title:n.label,$shaking:o===l,children:[(0,d.jsx)(ae,{src:"/cookie.png",alt:"cookie"}),(0,d.jsx)(ne,{children:n.label})]})}):(0,d.jsx)(oe,{href:n.href,role:"button",target:"Takollages"===n.label?"_blank":void 0,rel:"Takollages"===n.label?"noopener noreferrer":void 0,children:(0,d.jsxs)(te,{title:n.label,$shaking:o===l,children:[(0,d.jsx)(ae,{src:"/cookie.png",alt:"cookie"}),(0,d.jsx)(ne,{children:n.label})]})})]},n.label))})]})})},xe=60,ce=i.Ay.div`
  --divider-top-gap: ${e=>{let{$topGap:t}=e;return null!==t&&void 0!==t?t:"0px"}};

  width: 100%;
  height: ${xe}px;
  overflow: hidden;
  position: relative;
  background: var(--background)
    url(${""}/Pattern2.png) 0 0;
  background-attachment: fixed;
  background-size: 180px;
  padding-top: calc(var(--divider-top-gap) + 20px);
  padding-bottom: 10px;
`,he=i.Ay.img`
  width: ${xe}px;
  height: ${xe}px;
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
`,me=e=>{let{mirror:t,topGap:a}=e;return(0,d.jsx)(ce,{$topGap:a,children:Array(8).fill(0).map((e,a)=>(0,d.jsx)(he,{src:"/takoflap.gif",alt:"gif",delay:-1.25*a,mirror:t,draggable:"false"},a))})};var ge=a(1472),fe=a(2154),ue=a(4530);const ye=e=>({src:`balloons/generic/balloon-generic-${e}.png`}),ve=e=>({src:`balloons/mv/balloon-mv-${e}.png`}),be=e=>({src:`balloons/takos/balloon-takos-${e}.png`}),we=[be("0"),be("1"),be("cookies"),be("uhh-i-think-she-needs-help")],ke={Standard:[ve("meconopsis"),ve("violet"),ve("temari"),ve("tako8takover"),ye("purple"),ye("pink"),ye("white"),ye("yellow"),ye("fushia"),ye("orange"),ye("green"),ye("lime"),...we],Violet:[ve("violet"),ye("blue"),ye("blueagain"),ye("violet"),ye("sky"),ye("cyan"),ye("purple"),...we],Meconopsis:[ve("meconopsis"),ye("blue"),ye("blueagain"),ye("cyan"),ye("purple"),ye("sky"),ye("violet"),...we],Temari:[ve("temari"),ye("red"),ye("lightred"),ye("orange"),ye("pink"),ye("fushia"),ye("yellow"),...we],TakoTakover:[ve("tako8takover"),ye("purple"),ye("fushia"),ye("pink"),ye("violet"),ye("sky"),...we]},je=i.Ay.img`
  position: absolute;
  left: ${e=>{let{left:t}=e;return t}}vw;
  bottom: ${e=>{let{bottom:t}=e;return t}}px;
  height: ${e=>{let{$heightScale:t}=e;return(20*t).toFixed(2)}}vmax;
  max-height: ${e=>{let{$heightScale:t}=e;return Math.round(260*t)}}px;
  min-height: ${e=>{let{$heightScale:t}=e;return Math.round(180*t)}}px;
  width: auto;
  z-index: 0;
  pointer-events: none;
  will-change: transform;
  animation: ${e=>{let{swayOffset:t}=e;return i.AH`${(e=>i.i7`
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
`)(t)} 12s ease-in-out forwards`}};
`,$e=i.Ay.div`
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
`,Ae=()=>{const[e,t]=(0,n.useState)([]),a=(0,n.useRef)(null),{theme:i}=(0,y.D)();return(0,n.useEffect)(()=>{const e=()=>{const e=ke[i],a=Math.floor(2*Math.random())+1,n=document.documentElement.scrollHeight,o=[];for(let t=0;t<a;t++)if(Math.random()<.96){const a=e[Math.floor(Math.random()*e.length)];o.push({key:Date.now()+Math.random()+t,left:88*Math.random(),src:a.src,bottom:Math.random()*n,createdAt:Date.now(),heightScale:.6*Math.random()+.4,swayOffset:(30*Math.random()+10)*(Math.random()<.5?1:-1)})}o.length>0&&t(e=>[...e,...o])},n=()=>{a.current=setInterval(e,2e3)},o=()=>{a.current&&clearInterval(a.current)},r=()=>"hidden"===document.visibilityState?o():n();return n(),document.addEventListener("visibilitychange",r),()=>{o(),document.removeEventListener("visibilitychange",r)}},[i]),(0,n.useEffect)(()=>{const e=setInterval(()=>{t(e=>e.filter(e=>Date.now()-e.createdAt<2e4))},2e3);return()=>clearInterval(e)},[]),(0,d.jsx)($e,{children:e.map(e=>(0,d.jsx)(je,{left:e.left,bottom:e.bottom,swayOffset:e.swayOffset,$heightScale:e.heightScale,src:`/${e.src}`,alt:"floating balloon"},e.key))})},ze=i.Ay.div`
  position: relative;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  min-height: 100vh;
  background: var(--background);
`,Me=()=>{const{muted:e}=(0,ge.d2)(),t=(0,fe.G)({muted:e,autoPlay:!0});return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("audio",{ref:t,src:"/\u660e\u65e5\u3082\u6674\u308c\u308b\u3068\u3044\u3044\u306d.mp3",loop:!0,preload:"auto",style:{display:"none"}}),(0,d.jsxs)(ze,{children:[(0,d.jsx)(Ae,{}),(0,d.jsx)(ue.A,{}),(0,d.jsx)(T,{}),(0,d.jsx)(_,{}),(0,d.jsx)(me,{mirror:!0,topGap:"48px"}),(0,d.jsx)(H,{}),(0,d.jsx)(me,{topGap:"48px"}),(0,d.jsx)(pe,{}),(0,d.jsx)(x,{})]})]})}},5402(e,t,a){a.d(t,{A:()=>n,s:()=>i});const n=["11.png","14.png","15.png","16.png","17.png","35.png","44.png","71.png","A random casual.png","Arthain.png","Astraea.png","BreadART.png","Chibi RoggianX.png","chuunilord.png","Corp.Shephard.png","Creau.png","Cyber Toast.png","CYtako.png","DarkNess2101.png","Deer Oh Dear.png","DHugo.png","Drebyal Draws.png","eLun.png","Endactam.png","enicholas.png","Epi.png","fluffycatfish.png","Fluid.png","Frediloc8.png","GreenFox.png","Haru.png","Hermit Purple.png","HiloNero.png","Huros.png","Ironsigh.png","Ithi.png","Jaboll252.png","Jamu(ta)ko.png","Jamuko.png","Jems.png","Jhon. Palmer.png","Joakim MF.png","junblebee.png","Kaede, Acolyte of Wahtcher.png","keoqzzi\ud83c\udf5c.png","Kinoko.png","KiwiNeko.png","kshut (@shutowl).png","Kurasu Kanon.png","Kurosagi.png","LasagnaLaffeydiction.png","Lethargic.png","Lienou.png","LynsDoodles.png","Lyudmilia.png","Machi says WAH.png","Mango Konata.png","Mara.png","McArkus.png","Meap.png","Melmarkt.png","MiJi.png","Milk.png","Minja.png","Neminem.png","NKS5.png","notaBob.png","NowaruArt.png","NxKarim.png","Nyuusai.png","OK Kei.png","OutOfRice.png","Overseer Olive.png","popop.png","ProxyZeus.png","PureTako.png","RCSI.png","Ren.png","Reyk.png","Reykhebaxh.png","RiDeth.png","Rie Cotton Cat.png","Rinh.png","Scalim.png","SeaRain.png","SharkyDoko.png","Shokuro.png","SleepDeprivedFae.png","SleepzyTofu.png","Sock.png","Spud Tako.png","Squirl.png","sunnyfaller.png","Tahi.png","Taiki Kiki.png","Takedo.png","Takollite.png","Takomonty.png","Takoster.png","Teddy B\u0295\xb4\u2022\u1d25\u2022`\u0294.png","Teo.png","The Shiv Spoon.png","Thocclord.png","Tornhalo.png","Tung.png","Valawari.png","Valtaur_tw.png","Vanilla Thunder.png","Vantablack.png","vignedev.png","WindStreak.png","Wydken.png","Yato Tako.png","Zel Maelstrom.png","zeroyaka.png","\u304a\u5144\u304e\u308a.png","\u30a4\u30ab^10.png"],i=n.length},2154(e,t,a){a.d(t,{G:()=>i});var n=a(5043);const i=e=>{let{muted:t,volume:a=.1,autoPlay:i=!1,videoPaused:o=!1}=e;const r=(0,n.useRef)(null);return(0,n.useEffect)(()=>{r.current&&(r.current.volume=a)},[a]),(0,n.useEffect)(()=>{const e=r.current;e&&(o?e.pause():(t||e.paused)&&(t?e.pause():e.play().catch(()=>{})))},[t,o]),(0,n.useEffect)(()=>{if(!i)return;let e=null,a=!1;return r.current&&!t&&r.current.play().catch(()=>{a||(e=()=>{r.current&&!t&&r.current.play().catch(()=>{}),e&&window.removeEventListener("click",e)},window.addEventListener("click",e))}),()=>{a=!0,e&&window.removeEventListener("click",e)}},[i,t]),r}},984(e,t,a){a.d(t,{HM:()=>p,IW:()=>g,Id:()=>o,Jj:()=>h,Zy:()=>x,a3:()=>l,aH:()=>m,gQ:()=>c,hP:()=>r,iM:()=>s,ue:()=>f,wA:()=>i,wI:()=>d});var n=a(403);const i=n.Ay.div`
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
`,o=n.Ay.div`
  margin: 10px;
  width: 450px;
  @media only screen and (max-width: 768px) {
    margin-left: 0px;
    width: 100%;
    padding-bottom: 5px;
  }
`,r=n.Ay.div`
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
`,l=n.Ay.div`
  padding-top: 5px;
  overflow-wrap: break-word;
  color: var(--dark-highlight);
  text-align: left;
  font: normal normal 300 20px/25px Mulish;
  letter-spacing: 0px;
  opacity: 1;
  white-space: pre-line;
`,s=n.Ay.img`
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
`,d=n.Ay.div`
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
`,p=n.Ay.div`
  overflow-wrap: break-word;
  color: var(--dark-highlight);
`,x=n.Ay.iframe`
  border: 2px solid var(--light-background);
  border-radius: 23px;
  opacity: 1;
`,c=n.Ay.div`
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 2%;
  box-sizing: border-box;
  background: var(--background);
`,h=n.Ay.div`
  margin: auto auto 35px;
`,m=n.Ay.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
`,g=(n.Ay.div`
  display: flex;
  flex-direction: row;
`,n.Ay.input`
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
`),f=n.Ay.h2`
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
`;n.Ay.h2`
  font-size: 2.5em;
  text-align: center;
  color: var(--dark-highlight);
  margin: 0 0 18px 0;
  font-weight: 700;
  letter-spacing: 1.5px;
`,n.Ay.a`
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
//# sourceMappingURL=95.1fc453c6.chunk.js.map
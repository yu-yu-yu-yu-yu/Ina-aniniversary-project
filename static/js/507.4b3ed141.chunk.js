"use strict";(globalThis.webpackChunkina=globalThis.webpackChunkina||[]).push([[507],{1507(e,t,a){a.r(t),a.d(t,{default:()=>Ie});var i=a(5043),n=a(403),o=a(2582),r=a(5019);const s=n.i7`
  0%, 75%, 100% { transform: rotate(0deg); }
  78%  { transform: rotate(-5deg); }
  81%  { transform: rotate(5deg); }
  84%  { transform: rotate(-4deg); }
  87%  { transform: rotate(4deg); }
  90%  { transform: rotate(-2deg); }
  93%  { transform: rotate(0deg); }
`,l=n.Ay.footer`
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
    animation: ${s} 5s ease-in-out infinite;

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

`,d=n.Ay.div`
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
`;n.Ay.div`
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

  @media only screen and (max-width: ${r.fi.mobile}px) {
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
    @media only screen and (max-width: ${r.fi.mobile}px) {
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
`;var x=a(579);const{rE:h}={rE:"26.3.0"},p=()=>(0,x.jsxs)(l,{children:[(0,x.jsx)(d,{children:(0,x.jsx)("img",{alt:"Ao-chan Logo",src:"/AOPatternFilledIn.png"})}),(0,x.jsx)("div",{className:"footer-social-container",children:(0,x.jsxs)("div",{className:"social-links",children:[(0,x.jsx)("a",{href:"https://twitter.com/ninomaeinanis",target:"_blank",rel:"noopener noreferrer",children:(0,x.jsxs)("p",{children:[(0,x.jsx)("i",{className:"fa fa-twitter"})," @ninomaeinanis"]})}),(0,x.jsx)("br",{}),(0,x.jsx)("a",{href:"https://www.youtube.com/channel/UCMwGHR0BTZuLsmjY_NT5Pwg",target:"_blank",rel:"noopener noreferrer",children:(0,x.jsxs)("p",{children:[(0,x.jsx)("i",{className:"fa fa-youtube-play"})," Ninomae Ina'nis Ch."]})})]})}),(0,x.jsx)("div",{className:"footer-img-container",children:(0,x.jsx)(o.N_,{to:"/credits",children:(0,x.jsx)("img",{alt:"mini-ina",className:"footer-img",src:"/MiniIna.png"})})}),(0,x.jsxs)("div",{className:"disclaimer-container",children:[(0,x.jsx)("p",{children:"This is a fan project. We are not affiliated with or endorsed by Cover Corporation."}),(0,x.jsxs)("p",{style:{fontSize:"0.75rem",opacity:.5,marginTop:"0.25rem"},children:["v",h]})]})]});var c=a(2375);const m=n.Ay.div`
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  background: var(--background) url(${""}/Pattern2.png) 0 0;
  background-attachment: fixed;
  background-size: 180px;
  z-index: 3;
  @media (max-width: ${r.fi.mobile}px) {
    padding-top: 40px;
  }
`,f=n.Ay.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0;
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  position: relative;

  @media only screen and (max-width: ${r.fi.tablet}px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
    max-width: 100%;
  }
`,g=n.Ay.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  position: relative;
  z-index: 2;
  margin-left: -120px;

  @media only screen and (max-width: ${r.fi.tablet}px) {
    width: 100%;
    min-width: 0;
    margin-left: 0;
    z-index: 3;
  }
`,y=n.Ay.video`
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

  @media only screen and (max-width: ${r.fi.tablet}px) {
    max-width: 100%;
    --video-edge-fade: 18px;
  }
`,u=n.Ay.button`
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
`,b=n.Ay.div`
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
`,w=n.Ay.p`
  color: var(--text-color);
  font-size: 18px;
  text-shadow: 0 10px 14px var(--shadow);
  align-self: center;
  margin: 0;

  @media only screen and (max-width: ${r.fi.tablet}px) {
    font-size: 13px;
  }
`;var v=a(984),k=a(3403);const j=Array.from({length:70},(e,t)=>`valkyrie_illust_vids/val-${t+1}.mp4`),$={Violet:[3,8,14,54,69],Temari:[18,29,51],Meconopsis:[6,41,53],TakoTakover:[25,31,40,42,50],AbyssalHymn:[1,22,32,43,60,68,70]},I=(e,t)=>{var a;if(1===j.length)return j[0];const i=null!==(a=$[e])&&void 0!==a?a:[],n=j.filter(e=>e!==t).flatMap(e=>{var t;const a=Number(null===(t=e.match(/val-(\d+)\.mp4$/))||void 0===t?void 0:t[1]);return i.includes(a)?Array(5).fill(e):[e]});return n[Math.floor(Math.random()*n.length)]},A=()=>{const{theme:e}=(0,k.D)(),[t,a]=(0,i.useState)(()=>I(e)),[n,o]=(0,i.useState)(!1);(0,i.useEffect)(()=>{o(!1)},[t]);const r=(0,i.useCallback)(()=>{a(t=>I(e,t))},[e]),s=(0,i.useCallback)(()=>{o(!0)},[]);return(0,x.jsx)(m,{children:(0,x.jsxs)(f,{children:[(0,x.jsx)(v.wA,{children:(0,x.jsxs)("div",{className:"lore-text",children:[(0,x.jsx)("hr",{}),(0,x.jsxs)("p",{children:["One day, ",(0,x.jsx)("b",{children:"Ina'nis"})," picked up a ",(0,x.jsx)("b",{children:"strange book"})," and then started to gain the power of ",(0,x.jsx)("b",{children:"controlling tentacles"}),". To her, ",(0,x.jsx)("b",{children:"tentacles"})," are just a part in her ordinary life; it has never been a big deal for her. However, her girly mind does want to get them",(0,x.jsx)("b",{children:" dressed up and stay pretty"}),"."]}),(0,x.jsxs)("p",{children:["After gaining power, she started hearing"," ",(0,x.jsx)("b",{children:"Ancient Whispers and Revelations"}),". Hence, she began her"," ",(0,x.jsx)("b",{children:"VTuber activities "})," to deliver ",(0,x.jsx)("b",{children:" random sanity checks "})," ","on humanity, as an ",(0,x.jsx)("b",{children:"ordinary girl"}),"."]}),(0,x.jsx)("hr",{})]})}),(0,x.jsxs)(g,{style:{background:n?"transparent":"var(--dark-background)"},children:[(0,x.jsx)(y,{autoPlay:!0,loop:!0,muted:!0,preload:"auto",onCanPlay:s,style:{opacity:n?1:0,transition:"opacity 0.5s ease"},children:(0,x.jsx)("source",{src:`/${t}`,type:"video/mp4"})},t),(0,x.jsx)(u,{type:"button",onClick:r,"aria-label":"Change lore video",title:"Change video",children:(0,x.jsx)("i",{className:"fa fa-refresh","aria-hidden":"true"})}),(0,x.jsx)(b,{children:(0,x.jsx)(w,{children:"Illustration and Animation: @valkyrie_illust"})})]})]})})},z=n.Ay.div`
  background: ${e=>{let{$grayscale:t}=e;return t?"linear-gradient(180deg, rgba(20,20,20,0.95) 0%, rgba(40,40,40,0.95) 100%)":"transparent linear-gradient(180deg, var(--light-background) 0%, var(--dark-highlight) 100%) 0% 0% no-repeat padding-box"}};
  text-align: center;
  padding: 80px 20px;

  box-shadow: 0px 10px 6px var(--shadow);
  z-index: 3;
  position: relative;

  @media only screen and (max-width: ${r.fi.mobile}px) {
    margin-top: 0;
    padding: 40px 20px 60px;
  }
`,T=n.Ay.img`
  display: inline-block;
  z-index: 3;
  width: 300px;
  filter: ${e=>{let{$grayscale:t}=e;return t?"grayscale(1)":"none"}};
  transition: filter 0.2s;
  @media only screen and (max-width: ${r.fi.mobile}px) {
    width: 200px;
  }
`,N=n.Ay.div`
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
  @media only screen and (max-width: ${r.fi.mobile}px) {
    width: 250px;
    min-height: 98px;
    padding: 6px 10px 18px;
  }
  @media only screen and (max-width: 300px) {
    width: 200px;
  }
`,M=n.Ay.div`
  text-align: left;
  display: inline-block;
  vertical-align: center;
  margin-left: 40px;
  font: normal normal normal 40px/1.2 Roboto;
  letter-spacing: 2.5px;
  color: #ffffff;
  color: var(--text-color);
  @media only screen and (max-width: ${r.fi.mobile}px) {
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
    @media only screen and (max-width: ${r.fi.mobile}px) {
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
`,C=n.Ay.div`
  position: absolute;
  right: 18px;
  bottom: 18px;
  display: flex;
  gap: 8px;
  z-index: 10;

  @media only screen and (max-width: ${r.fi.mobile}px) {
    position: static;
    justify-content: center;
    margin-top: 18px;
  }
`,H=n.i7`
  0% { background: linear-gradient(90deg, #ff5f6d, #ffc371, #7ae582, #76b7ff, #d291ff, #ff5f6d); color: #1a1a1a; box-shadow: 0 0 0 rgba(0,0,0,0), 0 0 12px rgba(255,255,255,0.9); }
  16% { background: linear-gradient(90deg, #ffc371, #7ae582, #76b7ff, #d291ff, #ff5f6d, #ff5f6d); }
  33% { background: linear-gradient(90deg, #7ae582, #76b7ff, #d291ff, #ff5f6d, #ff5f6d, #ffc371); }
  50% { background: linear-gradient(90deg, #76b7ff, #d291ff, #ff5f6d, #ffc371, #7ae582, #76b7ff); }
  66% { background: linear-gradient(90deg, #d291ff, #ff5f6d, #ffc371, #7ae582, #76b7ff, #d291ff); }
  100% { background: linear-gradient(90deg, #ff5f6d, #ffc371, #7ae582, #76b7ff, #d291ff, #ff5f6d); color: #1a1a1a; box-shadow: 0 0 18px rgba(255,255,255,0.7); }
`,W=n.Ay.button`
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

  @media only screen and (max-width: ${r.fi.mobile}px) {
    font-size: 0.8em;
    padding: 8px 14px;
  }
`,Y=n.i7`
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-4px); }
  40% { transform: translateX(4px); }
  60% { transform: translateX(-3px); }
  80% { transform: translateX(3px); }
`,S=(0,n.Ay)(W)`
  background: #e9d5ff;
  color: #2a1d3a;
  animation: ${Y} 0.4s ease-in-out;

  ${e=>{let{$active:t}=e;return t&&n.AH`
      animation: ${H} 3s ease-in-out 1;
      box-shadow:
        0 0 18px rgba(255, 255, 255, 0.8),
        0 0 28px rgba(128, 90, 213, 0.8);
    `}}

  &:hover {
    background: #d8b4fe;
    color: #1f1230;
  }
`,P=(0,n.Ay)(W)``,E=n.i7`
  0%   { opacity: 0; transform: translateY(8px); }
  15%  { opacity: 1; transform: translateY(0); }
  70%  { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-8px); }
`,G=n.Ay.div`
  display: inline-block;
  position: relative;
`,B=n.Ay.span`
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
  animation: ${E} 2.5s ease forwards;
  @media only screen and (max-width: ${r.fi.mobile}px) {
    font-size: 1.5rem;
    letter-spacing: 1px;
    width: min-content;
  }
`,D=[{text:"We have games we win, and we have games we lose. I haven't won yet, but I haven't lost. So, I can only win, right?",year:"2020"},{text:"No panik. Just pizza.",year:"2020"},{text:"Ina is Ina",year:"2021"},{text:"It's not the best but it does the job when you need something salty in your life",year:"2021"},{text:"We love to see it.. it's the total opposite of speedrunning--slow walking! Slow running is just walking..",year:"2021"},{text:"The tentacult is not a cult!",year:"2021"},{text:"Don't quote me",year:"2021"},{text:"Home is where Ina is",year:"2023"},{text:"Becaused",year:"2023"},{text:"Playing Mario is just like cooking instant ramen.",year:"2023"},{text:"Art is a sport!",year:"2023"},{text:"I don't go outside if i don't have to",year:"2024"},{text:"5 is the new 0",year:"2025"},{text:"Whats that one famous thing",year:"2026"},{text:"This world requires too much thought",year:"2026"},{text:"YEAH",year:"2022"},{text:"This weapon is unbalanced",year:"2022"},{text:"The world's not a great place, but we're trying to make it better",year:"2022"},{text:"Can I be a PNG?",year:"2022"},{text:"PHYSICS, why must you exist?",year:"2023"},{text:"Sleep is also very important i feel",year:"2024"},{text:"What's the brake?",year:"2024"},{text:"I dont know what I am doing",year:"2024"},{text:"I don't like drawing frills, but I like wearing frills.",year:"2024"},{text:"Everything in the world tastes like chicken, or doesn't taste like chicken",year:"2024"},{text:"Harmonies are too difficult for me my brain is not built for music.",year:"2021"},{text:"Naming layers in 2021...I MEAN 2022! My identity has been revealed as Past Ina in 2021! TCH! Blew my cover!",year:"2022"},{text:"Oh it's a jellyfish!",year:"2021"},{text:"Each world has its own world",year:"2021"},{text:"WARAU NA!!!",year:"2023"},{text:"Takobocchi...",year:"2023"},{text:"You're in denial! It's the Amazon.",year:"2021"},{text:"Bears don't go to cram school. They study kuman.",year:"2021"},{text:"This is unbearable. Unbelievable.",year:"2021"},{text:"I'm only friends with 25 letters of the alphabet.",year:"2021"},{text:"I specialize in oyaji gyagu.",year:"2021"},{text:"No pun is in a mode. It's just built-in. It's permanent. You can't turn it off.",year:"2021"},{text:"A dad joke is only a dad joke when it becomes apparent.",year:"2021"},{text:"Deja vu *giggle* nya nya nya nya nya nyaa",year:"2020"},{text:"It's like Blues Clues, but spookier",year:"2020"},{text:"be nice to your body",year:"2020"},{text:"Its Tuesday somewhere in the world.",year:"2020"},{text:"Learn to lie to yourself, it's important",year:"2020"},{text:"I see Gura as a dessert",year:"2020"},{text:"Isn't this the good stuff?",year:"2020"},{text:"Do eyebrows grow back?",year:"2020"},{text:"As long as we go down smiling, it's all worth it",year:"2020"},{text:"Thank goodness for TNT",year:"2020"},{text:"I raised this chat.",year:"2020"},{text:"boing boing boing boing boing boing boing boing boing boing",year:"2021"},{text:"Very Nice, good job chat, we did it",year:"2021"},{text:"there's no rule in eating kitkats",year:"2021"},{text:"puns is a lifestyle",year:"2021"},{text:"These days... you have to get used to doing things by yourself--if you know how to embrace being alone, it's a good skill... sometimes...",year:"2021"},{text:"What is right?",year:"2021"},{text:"jumpy boi can jump",year:"2021"},{text:"Those are some big beans.",year:"2021"},{text:"Why...?",year:"2021"},{text:"this whip is nice",year:"2021"},{text:"Is Minecraft's cake a cake?",year:"2021"},{text:"If it ain't broke, it ain't broken",year:"2021"},{text:"super simple, super cute, but also with details",year:"2021"},{text:"The bench is the bench",year:"2021"},{text:"cats are liquid",year:"2021"},{text:"IM RICH!",year:"2021"},{text:"But this puts a smile on my face",year:"2021"},{text:"Does mask blink",year:"2021"},{text:"I have no social life",year:"2021"},{text:"saving is good",year:"2021"},{text:"check yourself before you wreck yourself",year:"2021"},{text:"How did I do that?",year:"2021"},{text:"you sound like that one dude",year:"2022"},{text:"Yes my hood please.",year:"2023"},{text:"I'm a good at shooting",year:"2023"},{text:"stuff",year:"2023"},{text:"I don't know what first look like",year:"2023"},{text:"The truth that is the truth",year:"2023"},{text:"You never know you know",year:"2023"},{text:"Do you get why the blowfish blows up? Cus it's a blowfish?",year:"2021"},{text:"Don't start loafing around!",year:"2021"},{text:"I can bearly finish this question!",year:"2021"},{text:"What's 01 in binary... It's just one? Was that the answer you guys oneted?",year:"2021"},{text:"they shouldn't bee here... hahaa get it... bee...",year:"2021"},{text:"you might not beelieve me, but I didn't mean to!",year:"2021"},{text:"I don't wanna bee here..",year:"2021"},{text:"I didn't think there'd bee like... a place as big as this...",year:"2021"},{text:"I can't beelieve you've done this.. heheH",year:"2021"},{text:"if that's how you guys are treeting me... ha ha... oh dear that's so bad",year:"2021"},{text:"chat and I, wheat have to think about it...",year:"2021"},{text:"Puns need to grow organically. No chemicals added.",year:"2021"},{text:"Something came in fur you... haha... get the pun..?",year:"2021"},{text:"You never miss a beat! Yeah, cus I never have a dead beat...",year:"2021"},{text:"Are you INA trouble?",year:"2021"},{text:"You could say we're blueing through the messages...",year:"2021"},{text:"Streamers... are paper... streamers are kami... streamers... are god",year:"2021"},{text:"I almost said I'll bee there soon.. but I'm already here..",year:"2021"},{text:"Unbeelievable..",year:"2021"},{text:"they bee angry..",year:"2021"},{text:"just axe! / I wood appreciate that a lot! / You woodn't want to get yourself stuck in there...",year:"2021"},{text:"You wood not think that I need more wood... you needn't axe the question...",year:"2021"},{text:"Hololive Altreenative...",year:"2021"},{text:"I'm out of leaves! Oh no... I can't beleaf it...",year:"2021"},{text:"I woodn't have guessed they wood...",year:"2021"},{text:"I can't beleaf it!",year:"2021"},{text:"Y'know... it's a-me.. but I'm not Ame...",year:"2021"},{text:"Let's drop by one of the near ones! Hehe... Nier ones..",year:"2021"},{text:"Oh, the results are really Nier to each other...",year:"2021"},{text:"I guess they forgot to Phil you in on the details..",year:"2021"},{text:"Combee.. a good combee-nation, I'll say!",year:"2021"},{text:"No pan.. but we have a lot of pun",year:"2021"},{text:"Do not leaf me! Beleaf in me!",year:"2021"},{text:"It's jolly(bee)!",year:"2021"},{text:"I sure do see a horse!",year:"2021"},{text:"Is it a PUNishment",year:"2022"},{text:"You can't spell world domination without INA",year:"2021"},{text:"You can't spell determination without INA",year:"2021"},{text:"Inafinite Pun Works",year:"2021"},{text:"Learn Chili Tail? Wouldn't that be like Ice Tail.. cus it's chilly? Ha ha ha ha ha...",year:"2023"},{text:"I've never been picked for the spelling bee.. and for good reason",year:"2023"},{text:"you can finally become a bell.. a tako bell!",year:"2023"},{text:"I can't be-leaf it!",year:"2023"},{text:"Yuul B Alright, heh get it? YUBI Alright...",year:"2021"},{text:"wood doko.. wood, dogo.. wood no go... wood.. DONKEY",year:"2023"}],L=(e,t)=>{var a,i;return!!e&&!!t&&e.text===t.text&&e.year===t.year&&(null!==(a=e.author)&&void 0!==a?a:"")===(null!==(i=t.author)&&void 0!==i?i:"")},O=e=>{var t,a;const i=e?D.filter(t=>{var a,i;return t.text!==e.text||t.year!==e.year||(null!==(a=t.author)&&void 0!==a?a:"")!==(null!==(i=e.author)&&void 0!==i?i:"")}):D;return null!==(t=null!==(a=i[Math.floor(Math.random()*i.length)])&&void 0!==a?a:e)&&void 0!==t?t:D[0]},_=()=>{var e;const[t,a]=(0,i.useState)(!1),[n,o]=(0,i.useState)(null),[r,s]=(0,i.useState)(null),[l,d]=(0,i.useState)(!1),[h,p]=(0,i.useState)(0),c=(0,i.useCallback)(()=>{const e=(e=>{if(Math.random()>=.1)return null!==e&&void 0!==e?e:null;const t=O(e);return L(e,t)?O(e):t})(r),t=!!e&&!L(r,e);s(e),t?(d(!0),window.setTimeout(()=>d(!1),3e3)):p(e=>e+1)},[r]),m=(0,i.useCallback)(()=>{a(e=>(e&&o(e=>(null!==e&&void 0!==e?e:0)+1),!e))},[]);return(0,x.jsxs)(z,{$grayscale:t,children:[(0,x.jsxs)(G,{children:[(0,x.jsx)(T,{src:"/InaInaIna.png",$grayscale:t,alt:"Ina"}),null!==n&&(0,x.jsx)(B,{children:"Miraculously preserved"},n)]}),(0,x.jsxs)(M,{style:t?{filter:"grayscale(1)"}:{},children:[r?(0,x.jsxs)(N,{style:{fontSize:(f=r.text.length,Math.max(9,Math.min(22,1500/f)))},children:['"',r.text,'"']}):(0,x.jsx)("img",{alt:"WAH",src:"/WAH.png",style:t?{filter:"grayscale(1)"}:{}}),(0,x.jsx)("br",{}),r&&null!==(e=r.author)&&void 0!==e?e:"Ninomae Ina'nis",(0,x.jsx)("br",{}),r?r.year:"12\xb709\xb72020",(0,x.jsx)("br",{})]}),(0,x.jsxs)(C,{children:[(0,x.jsx)(S,{$active:l,onClick:c,children:"Gacha"},h),(0,x.jsx)(P,{onClick:m,children:t?"Give her an elixir of the undying":"Ina saw this button!!"})]})]});var f},R=n.Ay.div`
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
  @media only screen and (max-width: ${r.fi.mobile}px) {
    font-size: 12px;
    padding: 2px 7px;
  }
`,U=n.i7`
  0% { transform: rotate(0deg);}
  20% { transform: rotate(-8deg);}
  40% { transform: rotate(8deg);}
  60% { transform: rotate(-4deg);}
  80% { transform: rotate(4deg);}
  100% { transform: rotate(0deg);}
`,X=n.Ay.div`
  text-align: center;
  padding-top: 50px;
  padding-bottom: 10rem;
  background: var(--background) url(${""}/Pattern2.png) 0 0;
  background-attachment: fixed;
  background-size: 180px;
  z-index: 1;
  @media only screen and (max-width: ${r.fi.mobile}px) {
    padding-top: 0;
    padding-bottom: 50px;
  }
`,F=n.Ay.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 48px;
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  @media only screen and (max-width: ${r.fi.tablet}px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
    max-width: 100%;
  }
`,q=n.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  flex: 1 1 0;
  min-width: 10vw;
  max-width: 700px;
  margin-top: 50px;
  @media only screen and (max-width: ${r.fi.tablet}px) {
    max-width: 100%;
    margin-top: 25px;
    gap: 24px;
  }
  @media only screen and (max-width: ${r.fi.mobile}px) {
    margin-top: 15px;
    gap: 16px;
  }
`,V=n.Ay.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(160px, 1fr));
  gap: 28px 32px;
  justify-content: center;
  align-items: start;
  width: 100%;
  @media only screen and (max-width: ${r.fi.tablet}px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px 24px;
  }
  @media only screen and (max-width: ${r.fi.mobile}px) {
    grid-template-columns: repeat(2, 150px);
    gap: 12px 16px;
    width: fit-content;
    max-width: 100%;
    margin: 0 auto;
    justify-items: center;
  }
`,K=n.Ay.div`
  position: relative;
  width: min(100%, 520px);
  padding: 14px 18px 0;
  box-sizing: border-box;
  border: 8px solid #6e4a2e;
  border-bottom: none;
  border-radius: 10px 10px 0 0;
  background: linear-gradient(180deg, #3a2515 0%, #4d3220 100%);
  box-shadow:
    inset 0 8px 18px rgba(0, 0, 0, 0.45),
    0 6px 14px var(--shadow);
`,J=n.Ay.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 6px;
  height: 190px;
  @media only screen and (max-width: ${r.fi.mobile}px) {
    height: 160px;
  }
`,Z=n.Ay.div`
  height: 20px;
  margin: 0 -18px;
  border-radius: 0 0 4px 4px;
  background: linear-gradient(180deg, #b07a4c 0%, #7d5233 100%);
  box-shadow: 0 4px 0 #4d3220;
`,Q=n.Ay.div`
  position: relative;
  flex: none;
  width: ${e=>{let{$w:t}=e;return t}}px;
  height: ${e=>{let{$h:t}=e;return t}}px;
  border-radius: 3px 3px 1px 1px;
  background: var(--dark-background);
  box-shadow: inset -4px 0 0 rgba(0, 0, 0, 0.25);
  transform: rotate(${e=>{let{$tilt:t}=e;return null!==t&&void 0!==t?t:0}}deg);
  transform-origin: bottom center;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 5px;
    background: var(--light-highlight);
    opacity: 0.85;
  }
  &::before {
    top: 14%;
  }
  &::after {
    bottom: 14%;
  }
`,ee=(0,n.Ay)(o.N_)`
  position: relative;
  flex: none;
  display: block;
  height: 100%;
  cursor: pointer;
  transition: transform 0.25s ease;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.5));

  &:hover,
  &:focus-visible {
    transform: translateY(-12px) rotate(-2deg);
  }
`,te=n.Ay.img`
  display: block;
  height: 100%;
  width: auto;
  border-radius: 2px;
`,ae=n.Ay.div`
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
  @media only screen and (max-width: ${r.fi.tablet}px) {
    width: 160px;
    height: 160px;
    padding-top: 25px;
  }
  @media only screen and (max-width: ${r.fi.mobile}px) {
    width: 150px;
    height: 150px;
    padding-top: 15px;
  }
`,ie=n.Ay.img`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 80px;
  pointer-events: none;
  z-index: 0;
  transition: ${e=>e.$active?"transform 0.4s cubic-bezier(.4,2,.6,1)":"none"};
  transform: translate(-50%, -50%)
    translateY(${e=>e.$active?"-5.1vw":"4vw"})
    scale(${e=>e.$active?1.1:.5});
  @media only screen and (max-width: ${r.fi.mobile}px) {
    width: 60px;
    transform: translate(-50%, -50%)
      translateY(${e=>e.$active?"-15vw":"4vw"})
      scale(${e=>e.$active?1.1:.5});
  }
`,ne=n.Ay.button`
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
  ${e=>{let{$shaking:t}=e;return t&&n.AH`
      animation: ${U} 0.4s linear;
    `}}
  @media only screen and (max-width: ${r.fi.tablet}px) {
    max-width: 180px;
    max-height: 180px;
  }
  @media only screen and (max-width: ${r.fi.mobile}px) {
    width: 150px;
    height: 150px;
  }
`,oe=n.Ay.img`
  display: block;
  margin: 0 auto;
  width: 148px;
  height: 148px;
  transition: transform 0.2s;
  @media only screen and (max-width: ${r.fi.tablet}px) {
    width: min(46vw, 166px);
    height: min(46vw, 166px);
  }
  @media only screen and (max-width: ${r.fi.mobile}px) {
    width: 138px;
    height: 138px;
  }
`,re=n.Ay.span`
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

  @media only screen and (max-width: ${r.fi.tablet}px) {
    font-size: clamp(13px, 3vw, 18px);
    max-width: 90%;
  }
  @media only screen and (max-width: ${r.fi.mobile}px) {
    font-size: clamp(12px, 4vw, 16px);
    max-width: 90%;
  }
`,se=(0,n.Ay)(o.N_)`
  all: unset;
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,le=n.Ay.a`
  all: unset;
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;var de=a(2958),xe=a(5402),he=a(993);const pe=[{to:"/momentsgallery",label:"Moments Gallery"},{to:"/wahrld",label:"Ina around the WAHrld"},{to:"/playlist",label:"The Ultimate Ina Playlist"},{to:"/inaoutfit",label:"Ina Ina Outfit!"},{to:"/timeline",label:"Ina's Timeline"},{to:"/takodex",label:"Takodex"},{to:"/messages",label:"Artworks & Messages"},{to:"/letters",label:"Letters for Ina"},{href:"Ina Cookbook.pdf",label:"Tako Cookbook"},{to:"/collages",label:"Takollages"},{to:"/moments",label:"Ina Moments (2024)"},{to:"/wah",label:"WAH (2024)"}],ce=["Ina Ina Outfit!","Moments Gallery","Ina around the WAHrld"],me=["The Ultimate Ina Playlist","Ina's Timeline","Takodex","Takollages"],fe=()=>{const[e,t]=(0,i.useState)(null),[a,n]=(0,i.useState)(""),[o,r]=(0,i.useState)(null);return(0,x.jsx)(X,{children:(0,x.jsxs)(F,{children:[(0,x.jsx)(v.wA,{children:(0,x.jsxs)("div",{className:"Menu-text",children:[(0,x.jsxs)("p",{children:["This site was developed by the ",(0,x.jsx)("b",{children:"Tentacult"})," to celebrate"," ",(0,x.jsx)("b",{children:"Ina's milestones"}),"!"]}),(0,x.jsx)("p",{children:(0,x.jsx)("b",{children:"Congratulations on the Abyssal Hymn MV INA!!!"})}),(0,x.jsxs)("p",{children:["We have used the full power of the shared braincell to put together the amazing story and lore you have been sharing with us. The new section of the site is"," ",(0,x.jsx)("b",{children:'"The Takodachi Lorebook: Takonomicon"'})," which contains the stories and secrets behind Re:Vision and your extended lore, written and illustrated by takos."]}),(0,x.jsx)("p",{children:"Thank you so much for your hard work, Ninomae Ina'nis you are amazing!"}),(0,x.jsx)("hr",{style:{border:0,borderTop:"2px solid currentColor",opacity:.35,margin:"20px 0"}}),(0,x.jsxs)("p",{children:["It is ",(0,x.jsx)("b",{children:"TAKOTIME"})," to celebrate your"," ",(0,x.jsx)("b",{children:"6th debut anniversary"}),", Ina!!"]}),(0,x.jsxs)("p",{children:["This time, we collected all sorts of things from all over, from artwork to photos! From the world to you, takos share their support!! ",(0,x.jsx)("b",{children:"World Domination!!"})," In the"," ",(0,x.jsx)("b",{children:"Ina Around the WAHld"})," section, takos showed that we are everywhere!! ",(0,x.jsx)("b",{children:"WE ARE HERE!!"})]}),(0,x.jsxs)("p",{children:["We made tributes for all the amazing and fun moments that we spent over these six years. These can be found in the"," ",(0,x.jsx)("b",{children:"Moment Gallery"})," so we can remember them forever. Each moment is like a piece of art made by you, your friends, and us, and we will all cherish them always."]}),(0,x.jsxs)("p",{children:["Of course, as always, there are updates to other pages of the site as well! New outfits illustrated by talented takos, new song entries in the playlist, a timeline that is now up to date, and new tako variants registered in the ",(0,x.jsx)("b",{children:"Takodex"}),"!"]}),(0,x.jsxs)("p",{children:["Things have changed so much as the years have gone by, but you will always have our support. We couldn't be prouder to be"," ",(0,x.jsx)("b",{children:"Takodachis"}),", since we have such an amazing ",(0,x.jsx)("b",{children:"priestess"}),"."]}),(0,x.jsxs)("p",{children:[(0,x.jsx)("b",{children:"From many takos around the world, thank you so much!"}),(0,x.jsx)("br",{}),(0,x.jsx)("b",{children:"With all our love, Happy Anniversary, Ina! \ud83d\udc9c\ud83d\udc19"})]})]})}),(0,x.jsxs)(q,{children:[(0,x.jsxs)(K,{children:[(0,x.jsxs)(J,{children:[(0,x.jsx)(Q,{$w:30,$h:128,$tilt:-1}),(0,x.jsx)(Q,{$w:26,$h:150}),(0,x.jsx)(Q,{$w:34,$h:118}),(0,x.jsxs)(ee,{to:"/takonomicon",title:"Tako Lore Book","aria-label":"Tako Lore Book",children:[(0,x.jsx)(R,{children:"New!"}),(0,x.jsx)(te,{src:de.Cy,alt:""})]}),(0,x.jsx)(Q,{$w:28,$h:140}),(0,x.jsx)(Q,{$w:32,$h:122,$tilt:2})]}),(0,x.jsx)(Z,{})]}),(0,x.jsx)(V,{children:pe.map((i,s)=>(0,x.jsxs)(ae,{onMouseEnter:()=>{t(s),(e=>{r(e),setTimeout(()=>r(null),400),n(""),setTimeout(()=>{const e=xe.Ar[Math.floor(Math.random()*xe.Ar.length)];n((0,he.c)("takos",e))},120)})(s)},onMouseLeave:()=>t(null),style:{position:"relative"},children:[ce.includes(i.label)&&(0,x.jsx)(R,{children:"New!"}),me.includes(i.label)&&(0,x.jsx)(R,{children:"Update!"}),(0,x.jsx)(ie,{className:"tako-peek",src:a,alt:"peeking tako",$active:e===s&&!!a,style:{visibility:a?"visible":"hidden"}}),"to"in i?(0,x.jsx)(se,{to:i.to,role:"button",children:(0,x.jsxs)(ne,{title:i.label,$shaking:o===s,children:[(0,x.jsx)(oe,{src:"/cookie.png",alt:"cookie"}),(0,x.jsx)(re,{children:i.label})]})}):(0,x.jsx)(le,{href:i.href,role:"button",target:"Takollages"===i.label?"_blank":void 0,rel:"Takollages"===i.label?"noopener noreferrer":void 0,children:(0,x.jsxs)(ne,{title:i.label,$shaking:o===s,children:[(0,x.jsx)(oe,{src:"/cookie.png",alt:"cookie"}),(0,x.jsx)(re,{children:i.label})]})})]},i.label))})]})]})})},ge=60,ye=n.Ay.div`
  --divider-top-gap: ${e=>{let{$topGap:t}=e;return null!==t&&void 0!==t?t:"0px"}};

  width: 100%;
  height: ${ge}px;
  overflow: hidden;
  position: relative;
  background: var(--background) url(${""}/Pattern2.png) 0 0;
  background-attachment: fixed;
  background-size: 180px;
  padding-top: calc(var(--divider-top-gap) + 20px);
  padding-bottom: 10px;
`,ue=n.Ay.img`
  width: ${ge}px;
  height: ${ge}px;
  position: absolute;
  top: var(--divider-top-gap);
  left: 0;

  animation: ${e=>{let{$mirror:t}=e;return a=t,n.i7`
  from {
    transform: translateX(${a?"calc(100vw + 60px)":"-60px"}) scaleX(${a?-1:1});
  }
  to {
    transform: translateX(${a?"-60px":"calc(100vw + 60px)"}) scaleX(${a?-1:1});
  }
`;var a}} ${10}s linear infinite;
  animation-delay: ${e=>{let{$delay:t}=e;return t}}s;
`,be=e=>{let{mirror:t,topGap:a}=e;return(0,x.jsx)(ye,{$topGap:a,children:Array(8).fill(0).map((e,a)=>(0,x.jsx)(ue,{src:"/takoflap.gif",alt:"gif",$delay:-1.25*a,$mirror:t,draggable:"false"},a))})};var we=a(1472),ve=a(9773),ke=a(4530),je=a(7114);const $e=n.Ay.div`
  position: relative;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  min-height: 100vh;
  background: var(--background);
`,Ie=()=>{const{muted:e}=(0,we.d2)(),t=(0,ve.G)({muted:e,autoPlay:!0});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("audio",{ref:t,src:"/\u660e\u65e5\u3082\u6674\u308c\u308b\u3068\u3044\u3044\u306d.mp3",loop:!0,preload:"auto",style:{display:"none"}}),(0,x.jsxs)($e,{children:[(0,x.jsx)(je.A,{}),(0,x.jsx)(ke.A,{}),(0,x.jsx)(c.A,{}),(0,x.jsx)(_,{}),(0,x.jsx)(be,{mirror:!0,topGap:"48px"}),(0,x.jsx)(A,{}),(0,x.jsx)(be,{topGap:"48px"}),(0,x.jsx)(fe,{}),(0,x.jsx)(p,{})]})]})}}}]);
//# sourceMappingURL=507.4b3ed141.chunk.js.map
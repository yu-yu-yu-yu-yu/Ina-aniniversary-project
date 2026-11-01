"use strict";(globalThis.webpackChunkina=globalThis.webpackChunkina||[]).push([[417],{2117(e,t,r){r.d(t,{X:()=>n});r(5043);var i=r(579);const n=e=>{let{what:t,error:r}=e;return(0,i.jsxs)("div",{children:["Error loading ",t,": ",r.message]})}},5011(e,t,r){r.d(t,{d:()=>d});r(5043);var i=r(403),n=r(579);const o=i.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  padding: 0.1em;
  cursor: pointer;
`,a=i.Ay.div`
  position: relative;
  border-radius: 100px;
  width: 38px;
  min-width: 38px;
  height: 24px;
  flex-shrink: 0;
  background-color: ${e=>{let{$active:t,$color:r}=e;return t?r:"var(--dark-highlight)"}};
  transition: background-color 0.2s linear;
  &.mobile {
    width: 28px;
    min-width: 28px;
    height: 16px;
  }
`,l=i.Ay.div`
  position: absolute;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  box-sizing: border-box;
  background: var(--text-color);
  border: 2px solid ${e=>{let{$color:t}=e;return t}};
  top: 50%;
  left: 3px;
  transform: translateY(-50%)
    translateX(${e=>{let{$active:t}=e;return t?"14px":"0px"}});
  transition: transform 0.2s linear;
  &.mobile {
    width: 12px;
    height: 12px;
    left: 2px;
    transform: translateY(-50%)
      translateX(${e=>{let{$active:t}=e;return t?"12px":"0px"}});
  }
`,s=i.Ay.span`
  color: ${e=>{let{$labelColor:t}=e;return null!==t&&void 0!==t?t:"var(--text-color)"}};
  text-align: left;
  font: normal normal 300 25px/26px Montserrat;
  letter-spacing: 0;
  &.mobile {
    font: normal normal 300 13px/16px Montserrat;
  }
`,d=e=>{let{label:t,value:r,onChange:i,color:d="var(--dark-highlight)",labelColor:c,mobile:u}=e;const p=u?"mobile":"";return(0,n.jsxs)(o,{onClick:()=>i(!r),children:[(0,n.jsx)(a,{$active:r,$color:d,className:p,children:(0,n.jsx)(l,{$active:r,$color:d,className:p})}),(0,n.jsx)(s,{$labelColor:c,className:p,children:t})]})}},417(e,t,r){r.r(t),r.d(t,{default:()=>Ie});var i=r(5043),n=r(1688),o=r(6088),a=r(8893),l=r(4709),s=r(984),d=r(5011),c=r(2218),u=r(403),p=r(5019),h=r(7362);const g="clamp(130px, 20vh, 240px)",x=u.Ay.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: linear-gradient(
      rgba(255, 255, 255, 0.14),
      rgba(255, 255, 255, 0.14)
    ),
    radial-gradient(
      ellipse at center 40%,
      var(--light-background) 0%,
      transparent 60%
    ),
    linear-gradient(
      180deg,
      var(--dark-background) 0%,
      var(--dark-background) 78%,
      var(--dark-highlight) 100%
    );
`,m=u.Ay.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex: 1;
  min-height: 0;
  box-sizing: border-box;
  cursor: grab;
  user-select: none;
  gap: 20px;
  padding: calc(${"clamp(70px, 9vh, 96px)"} + 12px) clamp(48px, 7vw, 120px)
    calc(${g} + 48px);
  overflow-x: scroll;
  overflow-y: visible;
  touch-action: pan-x;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;
  --pivot-w: min(1700px, max(320px, calc(100% - 280px)));
  --neighbor-w: clamp(160px, 10vw, 240px);
  --edge-w: ${e=>{let{$dragging:t}=e;return t?"var(--neighbor-w)":"var(--pivot-w)"}};
  &::-webkit-scrollbar {
    display: none;
  }
  &::before,
  &::after {
    content: "";
    display: block;
    flex: 0 0 max(0px, calc(50% - var(--edge-w) / 2));
  }
`,f=u.Ay.div`
  position: relative;
  flex-shrink: 0;
  height: 100%;
  width: ${e=>{let{$isPivot:t,$dragging:r,$isNear:i}=e;return t&&!r?"var(--pivot-w)":r||i?"var(--neighbor-w)":"0px"}};
  max-width: 90vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  scroll-snap-align: ${e=>{let{$isPivot:t,$dragging:r,$isNear:i}=e;return t||r||i?"center":"none"}};
  scroll-snap-stop: always;
  opacity: ${e=>{let{$isPivot:t,$dragging:r}=e;return t&&!r?1:.5}};
  transform: ${e=>{let{$isPivot:t,$dragging:r}=e;return t&&!r?"scale(1)":"scale(0.55)"}};
  transition: ${e=>{let{$dragging:t}=e;return t?u.AH`
          opacity 0.35s,
          transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)
        `:u.AH`
          width 0.4s ease,
          opacity 0.35s,
          transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)
        `}};
  cursor: ${e=>{let{$isPivot:t}=e;return t?"default":"pointer"}};
`,b=u.Ay.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--text-color);
`,v=u.Ay.div`
  width: min(100%, calc(clamp(70px, 8vh, 110px) * 16 / 9));
  height: auto;
  aspect-ratio: 16 / 9;
  border-radius: 6px;
  border: 3px solid var(--light-highlight);
  background-color: var(--lightdark);
  background-image: ${e=>{let{$src:t}=e;return t?`url(${t})`:"none"}};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
`,y=u.Ay.small`
  font-size: clamp(11px, 0.6vw + 0.3vh, 17px);
  text-align: center;
  overflow-wrap: anywhere;
`,$=u.Ay.div`
  color: var(--text-color);
  text-align: center;
  padding: 4rem 0;
  opacity: 0.7;
`,k=u.Ay.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  z-index: 1;
`,w=u.Ay.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  background: var(--dark-background);
  padding: 3px clamp(12px, 4vw, 48px);
  box-sizing: border-box;
`,j=u.Ay.input`
  height: 32px;
  width: 200px;
  max-width: 60vw;
  padding: 0 14px;
  border-radius: 999px;
  border: 1px solid var(--dark-highlight);
  background: var(--dark-background);
  color: var(--text-color);
  font-size: 13px;
  box-sizing: border-box;

  &::placeholder {
    color: var(--text-color);
    opacity: 0.6;
  }
`,A=u.Ay.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  background: var(--lightdark);
  padding: 3px clamp(12px, 4vw, 48px) 4px;
  box-sizing: border-box;
`,z=u.Ay.button`
  background: ${e=>{let{$active:t}=e;return t?"var(--dark-highlight)":"transparent"}};
  color: ${e=>{let{$active:t}=e;return t?"var(--text-color)":"var(--dark-highlight)"}};
  border: 1px solid var(--dark-highlight);
  border-radius: 8px;
  padding: 1px 7px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.15s,
    color 0.15s;
  &:hover {
    background: var(--dark-highlight);
    color: var(--text-color);
  }
`,M=u.Ay.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${g};
  z-index: 0;
  background-image: url("${""}/gallery_assets/WoodFloor_placeholder.png");
  background-size: 100% 340%;
  background-position: center bottom;
  background-repeat: no-repeat;
  pointer-events: none;
`,S=u.Ay.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 32px;
  height: 100%;
  width: 100%;
  @media only screen and (max-width: ${p.fi.tablet}px) {
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
  }
`,T=u.Ay.div`
  position: relative;
  flex: 1 1 auto;
  min-width: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: ${p.fi.tablet}px) {
    width: 100%;
    flex: 0 0 auto;
  }
`,_=u.Ay.div`
  position: relative;
  flex: 1 1 auto;
  min-height: 0;
  max-height: 720px;
  width: auto;
  max-width: 100%;
  aspect-ratio: 16 / 9;
  box-sizing: border-box;
  border: 10px solid var(--light-highlight);
  outline: 3px solid var(--lightdark);
  outline-offset: -14px;
  border-radius: 6px;
  background: #000;
  box-shadow:
    0 0 40px rgba(0, 0, 0, 0.5),
    0 22px 50px rgba(0, 0, 0, 0.55);
  overflow: hidden;
`,C=u.Ay.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  iframe,
  video,
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border: 0;
  }
`,E=u.Ay.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 24px;
  text-align: center;
  background: var(--light-background);
  color: var(--dark-highlight);
  font-weight: 600;
  text-decoration: underline;
  box-sizing: border-box;
`,L=u.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
  color: var(--text-color);
  font-size: 0.85em;
  z-index: 2;
`,I=u.Ay.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${g};
  z-index: 2;
  pointer-events: none;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`,N=u.i7`
  0%, 100% { margin-top: 0; }
  50% { margin-top: -6px; }
`,H=u.i7`
  0%, 92%, 100% { opacity: 0; }
  95% { opacity: 0.9; }
`,D=u.Ay.img`
  position: absolute;
  left: ${e=>{let{$left:t}=e;return t}}%;
  bottom: ${e=>{let{$bottom:t}=e;return t}}%;
  height: clamp(56px, 10vh, 150px);
  width: auto;
  pointer-events: ${e=>{let{$interactive:t}=e;return t?"auto":"none"}};
  z-index: ${e=>{let{$front:t}=e;return t?5:1}};
  transform-origin: 50% 100%;
  filter: ${e=>{let{$dim:t}=e;return t?"brightness(0.72)":"none"}};
  opacity: ${e=>{let{$hidden:t}=e;return t?0:1}};
  transform: translateX(-50%)
    scale(${e=>{let{$hidden:t,$scale:r}=e;return t?.4*r:r}})
    scaleX(${e=>{let{$flip:t}=e;return t?-1:1}})
    rotateY(${e=>{let{$hidden:t}=e;return t?180:0}}deg);
  transition:
    left 0.6s ease,
    bottom 0.6s ease,
    transform 0.6s ease,
    opacity 0.5s ease;
  animation: ${N} 3.2s ease-in-out infinite;
  animation-delay: ${e=>{let{$delay:t}=e;return t}}s;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: opacity 0.3s ease;
    transform: translateX(-50%) scale(${e=>{let{$scale:t}=e;return t}})
      scaleX(${e=>{let{$flip:t}=e;return t?-1:1}});
  }
`,F=u.Ay.div`
  position: absolute;
  left: ${e=>{let{$left:t}=e;return t}}%;
  bottom: ${e=>{let{$bottom:t}=e;return t}}%;
  transform: translate(${e=>{let{$flip:t}=e;return t?"-140%":"40%"}}, -10%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: radial-gradient(circle, #fff, transparent 70%);
  pointer-events: none;
  opacity: 0;
  animation: ${H} 6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`,P=u.i7`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
`,V=u.Ay.div`
  position: absolute;
  left: ${e=>{let{$left:t}=e;return t}}%;
  bottom: ${e=>{let{$bottom:t}=e;return t}}%;
  transform: translateX(-50%);
  transition:
    left 0.6s ease,
    bottom 0.6s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  z-index: 3;
  pointer-events: auto;
  animation: ${P} 4s ease-in-out infinite;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,X=u.i7`
  0%, 100% { transform: rotate(0deg) scale(1); opacity: 0.82; }
  30% { transform: rotate(-3deg) scale(1.02); opacity: 1; }
  60% { transform: rotate(2deg) scale(0.99); opacity: 0.88; }
`,W=u.Ay.div`
  position: relative;
  max-width: ${e=>{let{$expanded:t}=e;return t?280:190}}px;
  background: color-mix(in srgb, var(--light-background) 72%, transparent);
  color: var(--ink-black);
  border-radius: 20px;
  padding: 8px 14px;
  font-size: 12.5px;
  line-height: 1.35;
  text-align: center;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
  cursor: default;
  transform-origin: 50% 100%;
  transition:
    max-width 0.35s ease,
    opacity 0.35s ease,
    transform 0.35s ease;
  animation: ${e=>{let{$expanded:t}=e;return t?"none":X}} 3.6s
    ease-in-out infinite;
  ${e=>{let{$expanded:t}=e;return t&&"transform: none; opacity: 1;"}}
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -6px;
    width: 12px;
    height: 12px;
    background: color-mix(in srgb, var(--light-background) 72%, transparent);
    border-radius: 0 0 4px 0;
    transform: translateX(-50%) rotate(45deg);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,O=u.Ay.span`
  display: block;
  max-height: ${e=>{let{$expanded:t}=e;return t?"600px":"4.2em"}};
  overflow: hidden;
  transition: max-height 0.35s ease;
`,R=u.Ay.span`
  font-size: 10px;
  color: var(--text-color);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
  max-width: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,U=u.Ay.div`
  flex: 0 0 380px;
  align-self: center;
  max-width: 460px;
  height: min(360px, calc((100vh - 320px) / 2));
  font-size: clamp(13px, 0.85vw + 0.4vh, 22px);
  background: var(--dark-highlight);
  color: var(--text-color);
  border: 2px solid var(--light-highlight);
  border-radius: 10px;
  padding: 14px 16px;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
  @media only screen and (max-width: ${p.fi.tablet}px) {
    max-width: 90vw;
    width: 100%;
    flex: 0 0 auto;
  }
`,Y=u.Ay.h3`
  margin: 0;
  min-width: 0;
  font-size: 1.05em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
`,q=u.Ay.small`
  display: block;
  flex-shrink: 0;
  opacity: 0.75;
`,B=u.Ay.p`
  margin: 0;
  line-height: 1.5;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  scrollbar-width: thin;
  mask-image: linear-gradient(to bottom, black 82%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 82%, transparent 100%);
`,G=u.Ay.div`
  font-size: 0.85em;
  flex-shrink: 0;
  opacity: 0.85;
  border-top: 1px solid var(--light-highlight);
  padding-top: 6px;
`,K=u.Ay.a`
  color: var(--text-color);
  text-decoration: underline;
  &:hover {
    color: var(--light-highlight);
  }
`,Q=u.Ay.ul`
  display: none;
  margin: 0;
  padding: 0;
  list-style: none;
  flex-direction: column;
  gap: 6px;
  font-size: 0.85em;
  @media only screen and (max-width: 900px) {
    display: flex;
  }
`,J=u.Ay.li`
  display: flex;
  align-items: center;
  gap: 8px;
`,Z=u.Ay.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`,ee=u.Ay.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
`,te=u.Ay.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  background: transparent;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  width: 74px;
  ${e=>{let{$active:t}=e;return t?u.AH`
          opacity: 1;
        `:u.AH`
          opacity: 0.65;
        `}}
`,re=u.Ay.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid
    ${e=>{let{$active:t}=e;return t?"var(--light-highlight)":"transparent"}};
  object-fit: cover;
`,ie=u.Ay.span`
  font-size: 0.72em;
  text-align: center;
  overflow-wrap: anywhere;
`;var ne=r(993),oe=r(579);const ae={tako_back:"takomonty_tako_back.png",chumbud_back:"takomonty_chumbud_back.png",teamate_back:"takomonty_teamate_back.png",kfp:"takomonty_kfp_front.png",deadbeat:"takomonty_deadbeat_front.png",takostretch:"takomonty_takostretch_front.png",flowertako:"takomonty_flowertako_front.png",sstako:"takomonty_sstako_front.png",takopoint:"takomonty_takopoint_front.png"},le=["tako_back","chumbud_back","teamate_back"],se=["deadbeat","takostretch","flowertako","sstako"],de=e=>1.25+Math.min(Math.max(e,0),76)/76*-.39,ce=[{left:18,bottom:68,flip:!0},{left:50,bottom:74,flip:!1},{left:82,bottom:68,flip:!1}],ue=[{left:12,bottom:20,flip:!0},{left:50,bottom:20,flip:!1},{left:88,bottom:20,flip:!1}],pe=[12,23,34,45,56,67,78,88],he=(e,t)=>{const r=[],i=[...pe];for(let n=0;n<t&&i.length>0;n++){const t=[...e,...r];let n=i[0],o=-1;i.forEach(e=>{const r=0===t.length?100:Math.min(...t.map(t=>Math.abs(t-e)));r>o&&(o=r,n=e)}),r.push(n),i.splice(i.indexOf(n),1)}return r.sort((e,t)=>e-t)},ge=(e,t)=>e+(2*Math.random()-1)*t,xe=e=>{const t=[...e];for(let r=t.length-1;r>0;r--){const e=Math.floor(Math.random()*(r+1));[t[r],t[e]]=[t[e],t[r]]}return t},me=()=>{const e=1+Math.floor(3*Math.random()),t=xe(le).slice(0,e).map((e,t)=>({id:e,slot:{...ce[t],left:ge(ce[t].left,4),bottom:ge(ce[t].bottom,3)},dim:!0})),r=Math.random()<.5,{kfp:i,subjects:n}=(e=>{const t=e?70:30;return{kfp:{left:t,bottom:2,flip:e},subjects:[{left:t-6,bottom:6,flip:!1},{left:t+6,bottom:6,flip:!1}]}})(r),o=ge(0,5),a=ge(0,2),l={...i,left:i.left+o,bottom:i.bottom+a},s=n.map(e=>({...e,left:e.left+o,bottom:e.bottom+a})),d=xe(se),c=Math.random()<.5?1:2,u=d.slice(0,c),p=d.slice(c);return[...t,...[{id:"kfp",slot:l},...u.map((e,t)=>({id:e,slot:s[t]}))],...xe([...p,"takopoint"]).slice(0,ue.length).map((e,t)=>({id:e,slot:{left:ge(ue[t].left,4),bottom:ge(ue[t].bottom,3),flip:"takopoint"===e&&ue[t].flip}}))]},fe=e=>{var t;let{momentKey:r,reactions:n}=e;const o=Math.min(3,null!==(t=null===n||void 0===n?void 0:n.length)&&void 0!==t?t:0),[a,l]=(0,i.useState)(()=>((e,t)=>e.map(e=>({...e,phase:t})))(me(),"idle")),[s,d]=(0,i.useState)(()=>he(a.map(e=>e.slot.left),o));(0,i.useEffect)(()=>{const e=me();l(t=>{const r=new Set(t.map(e=>e.id)),i=new Set(e.map(e=>e.id)),n=e.map(e=>({...e,phase:r.has(e.id)?"idle":"entering"}));return t.forEach(e=>{i.has(e.id)||n.push({...e,phase:"leaving"})}),n}),d(he(e.map(e=>e.slot.left),o));let t=0;const r=requestAnimationFrame(()=>{t=requestAnimationFrame(()=>{l(e=>e.map(e=>"entering"===e.phase?{...e,phase:"idle"}:e))})}),i=window.setTimeout(()=>{l(e=>e.filter(e=>"leaving"!==e.phase))},700);return()=>{cancelAnimationFrame(r),cancelAnimationFrame(t),window.clearTimeout(i)}},[r]);const c=(null!==n&&void 0!==n?n:[]).slice(0,o),[u,p]=(0,i.useState)(null);return(0,i.useEffect)(()=>{p(null)},[r]),(0,oe.jsxs)(I,{children:[a.map((e,t)=>(0,oe.jsx)(D,{src:`/gallery_assets/${ae[e.id]}`,alt:"",$left:e.slot.left,$bottom:e.slot.bottom,$scale:de(e.slot.bottom),$flip:!!e.slot.flip,$dim:e.dim,$hidden:"idle"!==e.phase,$delay:.35*t,$front:"kfp"===e.id},e.id)),a.filter(e=>"kfp"===e.id&&"leaving"!==e.phase).map(e=>(0,oe.jsx)(F,{$left:e.slot.left,$bottom:e.slot.bottom,$flip:!!e.slot.flip},"flash")),c.map((e,t)=>{var r;const i=null!==(r=s[t])&&void 0!==r?r:50;return(0,oe.jsx)(D,{src:(0,ne.V)(e.author,t),alt:e.author,onError:e=>{e.currentTarget.onerror=null,e.currentTarget.src=(0,ne.V)(null,t)},$left:i,$bottom:5,$scale:de(5),$flip:!1,$hidden:!1,$delay:.2*t,$interactive:!0,onMouseEnter:()=>p(t),onMouseLeave:()=>p(e=>e===t?null:e)},`commenter-${t}`)}),c.map((e,t)=>{var r;const i=null!==(r=s[t])&&void 0!==r?r:50,n=u===t;return(0,oe.jsxs)(V,{$left:i,$bottom:60,onMouseEnter:()=>p(t),onMouseLeave:()=>p(e=>e===t?null:e),children:[(0,oe.jsx)(W,{$expanded:n,children:(0,oe.jsx)(O,{$expanded:n,children:e.text})}),(0,oe.jsx)(R,{children:e.author})]},`bubble-${t}`)})]})};var be=r(2449),ve=r(9944),ye=r(1472);const $e={milestone:"Ina's Milestones",myth:"Myth Moments",funny:"Funny Moments"},ke=e=>{var t;let{moment:r,view:o}=e;const a=function(e){let{min:t=11,max:r=16,step:n=.5}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const o=(0,i.useRef)(null),a=(0,i.useCallback)(()=>{const e=o.current;if(!e)return;let i=r;for(e.style.fontSize=`${i}px`;e.scrollHeight>e.clientHeight&&i>t;)i-=n,e.style.fontSize=`${i}px`},[t,r,n]);return(0,i.useEffect)(a,[...e,a]),(0,i.useEffect)(()=>{const e=o.current;if(!e)return;const t=new ResizeObserver(a);return t.observe(e),()=>t.disconnect()},[a]),o}([r.slug],{min:12,max:22}),{hash:l}=(0,n.zy)(),[s,d]=(0,i.useState)(null);return(0,i.useEffect)(()=>{if(!l)return;const e=l.replace("#","");d(e);const t=setTimeout(()=>d(null),1800);return()=>clearTimeout(t)},[l]),(0,oe.jsx)(U,{children:(0,oe.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:6,overflow:"hidden",height:"100%"},children:[(0,oe.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:8,flexShrink:0},children:[(0,oe.jsx)(Y,{children:r.title}),(0,oe.jsx)(h.A,{slug:r.slug,label:"Copy link to this moment"})]}),(0,oe.jsxs)(q,{children:[r.date," \xb7 ",$e[r.category]]}),(0,oe.jsx)(B,{ref:a,children:r.context}),(0,oe.jsxs)(G,{children:[o.creditPrefix,o.creditHref?(0,oe.jsx)(K,{href:o.creditHref,target:"_blank",rel:"noopener noreferrer",children:o.creditText}):o.creditText]}),r.submittedBy&&(0,oe.jsxs)(G,{children:["Submitted by: ",r.submittedBy]}),!(null===(t=r.reactions)||void 0===t||!t.length)&&(0,oe.jsx)(Q,{children:r.reactions.map((e,t)=>{const i=((e,t)=>`${r.slug}-r-${(0,ve.L)(e)}-${t}`)(e.author,t);return(0,oe.jsxs)(J,{id:i,style:s===i?{outline:"3px solid var(--light-highlight)"}:void 0,children:[(0,oe.jsx)(Z,{src:(0,ne.V)(e.author,t),alt:e.author,onError:e=>{e.currentTarget.onerror=null,e.currentTarget.src=(0,ne.V)(null,t)}}),(0,oe.jsx)("span",{children:e.text}),(0,oe.jsx)(h.A,{slug:i,label:`Copy link to ${e.author}'s reaction`})]},i)})})]})})},we=e=>{let{tributes:t,activeIndex:r,onSelect:i,momentSlug:n}=e;return(0,oe.jsx)(ee,{children:t.map((e,t)=>(0,oe.jsxs)("div",{style:{position:"relative"},children:[(0,oe.jsxs)(te,{type:"button",$active:r===t+1,onClick:()=>i(t+1),title:`View tribute by ${e.author}`,children:[(0,oe.jsx)(re,{$active:r===t+1,src:(0,ne.V)(e.author,t),alt:e.author,onError:e=>{e.currentTarget.onerror=null,e.currentTarget.src=(0,ne.V)(null,t)}}),(0,oe.jsx)(ie,{children:e.author})]}),(0,oe.jsx)("div",{style:{position:"absolute",top:-4,right:-4,transform:"scale(0.75)"},children:(0,oe.jsx)(h.A,{slug:`${n}-t-${(0,ve.L)(e.author)}`,label:`Copy link to ${e.author}'s tribute`})})]},`${e.author}-${t}`))})},je=e=>{try{return new URL(e).href}catch{return null}},Ae=e=>{try{return new URL(e).hostname.replace(/^www\./,"")}catch{return e}},ze=e=>{const t=(0,be.pu)(e.sourceUrl),r=((e,t,r)=>{const i=e?je(e):null;if(i)return{text:Ae(i),href:i};const n=t?je(t):null;return e?{text:e,href:null!==n&&void 0!==n?n:void 0}:{text:r,href:null!==n&&void 0!==n?n:void 0}})(e.sourceLabel,e.sourceUrl,e.title),i={creditPrefix:"Original: ",creditText:r.text,creditHref:r.href};return[t?{kind:"original-video",src:(0,be.ZS)(e.sourceUrl),label:"Original",...i}:e.image?{kind:"original-image",src:e.image,label:"Original",...i}:{kind:"original-link",src:e.sourceUrl,label:"Original",...i},...e.tributes.slice(0,e.cap).filter(e=>!!e.file).map(t=>{return{kind:"video"===t.kind?"tribute-video":"tribute-image",src:(r=e.slug,i=t.file,i.startsWith("http")?i:`/momentTributes/${r}/${i}`),label:`Tribute by ${t.author}`,creditPrefix:"Tribute by ",creditText:`${t.author}${t.handle?` (@${t.handle})`:""}`,creditHref:t.url,tribute:t};var r,i})]},Me=e=>{var t,r,o;let{moment:a}=e;const l=ze(a),d="original-link"!==l[0].kind,[c,u]=(0,i.useState)(()=>!d&&l.length>1?1:0),[p,h]=(0,i.useState)(null),{reportVideoPlaying:g}=(0,ye.d2)(),x=null!==(t=l[c])&&void 0!==t?t:l[0],m=l.slice(1),f=p===x.src,b=l.some(e=>"original-link"!==e.kind);(0,i.useEffect)(()=>{if("original-video"===x.kind)return()=>g(!1)},[x.kind,x.src,g]);const{hash:v}=(0,n.zy)(),y=(0,i.useRef)(!1);return(0,i.useEffect)(()=>{if(y.current||!v)return;const e=v.replace("#",""),t=`${a.slug}-t-`;if(!e.startsWith(t))return;const r=e.slice(t.length),i=m.findIndex(e=>e.tribute&&(0,ve.L)(e.tribute.author)===r);i>=0&&(y.current=!0,u(i+1))},[v,a.slug,m]),(0,oe.jsxs)(S,{children:[b&&(0,oe.jsxs)(T,{children:[(0,oe.jsx)(_,{children:(0,oe.jsxs)(C,{children:["original-video"===x.kind&&(0,oe.jsx)("iframe",{src:x.src,title:a.sourceLabel||a.title,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,onLoad:e=>(0,be.cb)(e.currentTarget)},x.src),"original-image"===x.kind&&(f?(0,oe.jsx)(E,{href:a.sourceUrl,target:"_blank",rel:"noopener noreferrer",children:a.sourceLabel||"View the original"}):(0,oe.jsx)("img",{src:x.src,alt:a.title,onError:()=>h(x.src)})),"original-link"===x.kind&&(0,oe.jsx)(E,{href:x.src,target:"_blank",rel:"noopener noreferrer",children:a.sourceLabel||"View the original"}),"tribute-image"===x.kind&&(f?(0,oe.jsxs)(E,{href:(null===(r=x.tribute)||void 0===r?void 0:r.url)||x.src,target:"_blank",rel:"noopener noreferrer",children:["View tribute by ",null===(o=x.tribute)||void 0===o?void 0:o.author]}):(0,oe.jsx)("img",{src:x.src,alt:x.label,onError:()=>h(x.src)})),"tribute-video"===x.kind&&(0,oe.jsx)("video",{src:x.src,controls:!0,preload:"none"})]})}),m.length>0&&(0,oe.jsxs)(oe.Fragment,{children:[(0,oe.jsxs)(L,{children:[(0,oe.jsx)(s.fu,{onClick:()=>u(0===c?1:0),title:0===c?"See tributes":"See original","aria-label":0===c?"See tributes":"See original",children:(0,oe.jsx)("i",{className:"fa fa-exchange","aria-hidden":"true"})}),0===c?"See tributes":"See original"]}),(0,oe.jsx)(we,{tributes:m.map(e=>e.tribute),activeIndex:c,onSelect:u,momentSlug:a.slug})]})]}),(0,oe.jsx)(ke,{moment:a,view:x})]})},Se=e=>{if(e.image)return e.image;const t=(0,be.pu)(e.sourceUrl);return t?`https://i.ytimg.com/vi/${t.id}/hqdefault.jpg`:void 0},Te=e=>{let{moments:t,carousel:r}=e;const i=t.length,{pivotIndex:n,dragging:o,goTo:a,containerRef:l,itemRefs:s,isLoaded:d,containerHandlers:c}=r;return 0===i?(0,oe.jsx)($,{children:"No moments yet, check back soon!"}):(0,oe.jsx)(m,{ref:l,$dragging:o,...c,children:t.map((e,t)=>{const r=t===n,i=r&&!o,l=Math.abs(t-n)<=2;return(0,oe.jsx)(f,{id:e.slug,$isPivot:r,$dragging:o,$isNear:l,ref:e=>{s.current[t]=e},onClick:r?void 0:()=>a(t),children:i?(0,oe.jsx)(Me,{moment:e},e.slug):(0,oe.jsxs)(b,{children:[(0,oe.jsx)(v,{$src:d(t)?Se(e):void 0}),(0,oe.jsxs)(y,{children:[e.title," \xb7 ",e.date]})]})},e.slug)})})};var _e=r(3402),Ce=r(2117);const Ee={milestone:"Ina's Milestones",myth:"Myth Moments",funny:"Funny Moments"},Le=Object.keys(Ee),Ie=()=>{var e;const{data:t,loading:r,error:u}=(0,o.s)("/data/momentsData.json"),[p,h]=(0,i.useState)(null),[g,m]=(0,i.useState)(!1),[f,b]=(0,i.useState)(""),v=(0,i.useMemo)(()=>[...null!==t&&void 0!==t?t:[]].sort((e,t)=>new Date(e.date).getTime()-new Date(t.date).getTime()),[t]),y=(0,i.useMemo)(()=>v.filter(e=>(!p||e.category===p)&&(!g||e.tributes.length>0)),[v,p,g]),$=(0,i.useMemo)(()=>{const e=f.trim();if(!e)return y;if(e.length>=2&&e.startsWith('"')&&e.endsWith('"')){const t=e.slice(1,-1).toLowerCase();return y.filter(e=>e.context.toLowerCase().includes(t))}const t=e.toLowerCase();return y.filter(e=>e.title.toLowerCase().includes(t)||e.tributes.some(e=>e.author.toLowerCase().includes(t)))},[y,f]),S=(0,i.useMemo)(()=>Array.from(new Set($.map(e=>new Date(e.date).getFullYear()))).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t),[$]),T=(0,a.H)($.length,2,`${null!==p&&void 0!==p?p:"all"}-${g?"tributes":"any"}-${f}`),_=$[T.pivotIndex],C=_?new Date(_.date).getFullYear():null,{hash:E}=(0,n.zy)(),L=(0,i.useRef)(!1),{goTo:I}=T;(0,i.useEffect)(()=>{if(L.current||!E||0===v.length)return;const e=E.replace("#",""),t=v.find(t=>t.slug===e||e.startsWith(`${t.slug}-t-`)||e.startsWith(`${t.slug}-r-`));if(!t)return;if(p&&t.category!==p)return void h(null);if(g&&0===t.tributes.length)return void m(!1);const r=$.indexOf(t);r>=0&&(L.current=!0,I(r))},[E,v,$,p,g,I]);return(0,oe.jsxs)(x,{children:[(0,oe.jsx)(M,{}),(0,oe.jsx)(fe,{momentKey:null!==(e=null===_||void 0===_?void 0:_.slug)&&void 0!==e?e:"",reactions:null===_||void 0===_?void 0:_.reactions}),(0,oe.jsx)(_e.W,{src:"/Vanilla.mp3"}),(0,oe.jsxs)(l.Fp,{children:[(0,oe.jsx)(l.Pn,{}),(0,oe.jsx)(s.DG,{children:"Moments Gallery"}),(0,oe.jsxs)(k,{children:[(0,oe.jsxs)(w,{children:[Le.map(e=>{return(0,oe.jsx)(d.d,{label:Ee[e],value:p===e,onChange:(t=e,e=>h(e?t:null)),labelColor:"var(--text-color)"},e);var t}),(0,oe.jsx)(d.d,{label:"With Tributes",value:g,onChange:m,labelColor:"var(--text-color)"}),(0,oe.jsx)(j,{type:"search",value:f,onChange:e=>b(e.target.value),placeholder:'Title, tributer, or "keyword"',"aria-label":"Search moments"})]}),S.length>1&&(0,oe.jsx)(A,{children:S.map(e=>(0,oe.jsx)(z,{type:"button",$active:e===C,onClick:()=>(e=>{const t=$.findIndex(t=>new Date(t.date).getFullYear()===e);t>=0&&T.goTo(t)})(e),children:e},e))})]}),(0,oe.jsxs)(l.lU,{label:"Show gallery usage hint",children:[(0,oe.jsx)("p",{children:"Walk the wall with the arrows at either edge of the screen, or drag the exhibits directly. A piece with fan tributes shows a swap button underneath its frame: cycle it to compare the original against every tribute, or tap a tribute's avatar to jump straight to it."}),(0,oe.jsxs)("p",{children:["Mascot art by ",(0,oe.jsx)("b",{children:"takomonty"}),"."]})]})]}),r?(0,oe.jsx)(c.c,{}):u?(0,oe.jsx)(Ce.X,{what:"moments",error:u}):(0,oe.jsx)(s.gQ,{style:{flex:1,minHeight:0,display:"flex",flexDirection:"column",position:"relative",zIndex:1,background:"transparent",paddingLeft:0,paddingRight:0},children:(0,oe.jsx)(Te,{moments:$,carousel:T})}),$.length>0&&(0,oe.jsxs)(s.wQ,{children:[T.pivotIndex+1," / ",$.length]}),T.dragging&&(0,oe.jsx)(s.hf,{}),(0,oe.jsx)(s.Xj,{$side:"left",onMouseDown:e=>e.preventDefault(),onClick:()=>T.goTo(T.pivotIndex-1),disabled:0===T.pivotIndex,"aria-label":"Previous moment",children:(0,oe.jsx)("i",{className:"fa fa-chevron-left","aria-hidden":"true"})}),(0,oe.jsx)(s.Xj,{$side:"right",onMouseDown:e=>e.preventDefault(),onClick:()=>T.goTo(T.pivotIndex+1),disabled:T.pivotIndex>=$.length-1,"aria-label":"Next moment",children:(0,oe.jsx)("i",{className:"fa fa-chevron-right","aria-hidden":"true"})})]})}},6088(e,t,r){r.d(t,{s:()=>n});var i=r(5043);const n=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const[r,n]=(0,i.useState)(null),[o,a]=(0,i.useState)(!0),[l,s]=(0,i.useState)(null),d=async r=>{a(!0),s(null);try{const i=await fetch(e,{...t,signal:r});if(!i.ok)throw new Error(`HTTP error! status: ${i.status}`);const o=await i.json();if(null!==r&&void 0!==r&&r.aborted)return;n(o)}catch(i){if(null!==r&&void 0!==r&&r.aborted)return;s(i)}finally{null!==r&&void 0!==r&&r.aborted||a(!1)}};(0,i.useEffect)(()=>{const e=new AbortController;return d(e.signal),()=>e.abort()},[e,JSON.stringify(t)]);return{data:r,loading:o,error:l,refetch:()=>{d()}}}}}]);
//# sourceMappingURL=417.be622996.chunk.js.map
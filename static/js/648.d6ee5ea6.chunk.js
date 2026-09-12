"use strict";(globalThis.webpackChunkina=globalThis.webpackChunkina||[]).push([[648],{3155(e,t,o){o.d(t,{v:()=>h});var n=o(5043),a=o(403),i=o(579);const r=a.Ay.img`
  width: 75px;
  margin-right: 10px;
  filter: drop-shadow(2px 2px 1px darkgray);
  opacity: 1;
`,s=a.Ay.div`
  display: flex;
`,l=a.Ay.div`
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
`,d=a.Ay.span`
  color: var(--dark-highlight);
`,c=a.Ay.div`
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
`,h=e=>{let{id:t,pun:o,index:a}=e;const h=["8-bit Tako.png","Hollow Tako.png","Ikadachi.png","Mori Tako.png","Robodachi.png","Tako Amelia (Takoson).png","Tako Gura (Chum Tako).png","Tako Ina.png","Tako Kiara (Tako Bell).png","Tako Ross.png","Takodachi.png","Takomfy.png","Tophat Tako.png","Violet Tako.png","Wonder Tako.png","Yuul B. Tako.png"],g=!t?`/icon/${h[p=a,16807*p%2147483647%h.length]}`:`/takos/${t}`;var p;const[u,x]=(0,n.useState)(!1);return(0,i.jsxs)(s,{onClick:o?()=>{x(!u)}:void 0,children:[o&&!u&&(0,i.jsx)(c,{children:"..."}),(0,i.jsx)(r,{alt:`tako-icon-${t}`,src:g}),u&&(0,i.jsx)(l,{onClick:e=>e.stopPropagation(),children:(0,i.jsx)(d,{children:o})})]})}},3648(e,t,o){o.r(t),o.d(t,{default:()=>y});var n=o(5043),a=o(1688),i=o(4997),r=o(2218),s=o(9372),l=o(3536),d=o(3269),c=o(4709),h=o(303),g=o.n(h),p=o(3155),u=o(2449),x=o(7362),m=o(9944),b=o(579);const v=e=>(0,m.L)(e.user,e.image),k=e=>{let{submissions:t,highlightSlug:o}=e;(0,n.useLayoutEffect)(()=>{window.scrollTo(0,0)},[]);const[a,i]=(0,n.useState)(null);return(0,n.useEffect)(()=>{if(null==o)return;const e=document.getElementById(`video-${o}`);if(!e)return;e.scrollIntoView({behavior:"smooth",block:"center"}),i(o);const t=setTimeout(()=>i(null),1800);return()=>clearTimeout(t)},[o,t]),(0,b.jsx)(g(),{options:{gutter:40,columnWidth:1,fitWidth:!0,transitionDuration:0},style:{margin:"0 auto"},children:t.map((e,t)=>{const{message:o,user:n,icon:i,image:r,pun:s,sub:l}=e,c=v(e);return(0,b.jsx)(d.Id,{id:`video-${c}`,style:a===c?{outline:"3px solid var(--light-highlight)",borderRadius:15}:void 0,children:(0,b.jsxs)(d.q1,{children:[(0,b.jsxs)(d.b8,{children:[(0,b.jsx)(p.v,{id:i,pun:s,index:t}),n||"Anonymous Tako",(0,b.jsx)("div",{style:{marginLeft:"auto"},children:(0,b.jsx)(x.A,{slug:c,label:"Copy link to this video"})})]}),(0,b.jsxs)("div",{style:{padding:"0.75rem"},children:[r.includes("http")?(0,b.jsx)(d.Zy,{width:"100%",height:"315",src:r,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,onLoad:e=>(0,u.cb)(e.currentTarget)}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(d.JX,{children:r}),(0,b.jsx)("hr",{})]}),l&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(d.JX,{children:l}),(0,b.jsx)("hr",{})]}),(0,b.jsx)(d.JX,{children:o})]})]})},t)})})};var f=o(6088);const j=10,y=e=>{let{mode:t}=e;const{data:o,loading:h,error:g}=(0,f.s)("/data/video.json"),[p,u]=(0,n.useState)([]),[x,m]=(0,n.useState)([]),[y,w]=(0,n.useState)(0),[T,A]=(0,n.useState)(!0),[I,C]=(0,n.useState)(null),S=(0,n.useRef)(p);S.current=p;const{hash:L}=(0,a.zy)(),M=(0,n.useRef)(!1);(0,n.useEffect)(()=>{if(o){const e=o.map(e=>{let o=e["moments"===t?"moment":"wah"];if(o.includes("http")&&!o.includes("clip")){const e=/(?:\/|v=)([a-z_0-9-]{6,16}).*?(?:t=(\d+))?.*$/gim.exec(o),t=e?e[1]:"",n=e?e[2]:"";t||console.log(o);o=`https://www.youtube.com/embed/${t}?${n?`start=${n}&enablejsapi=1`:"enablejsapi=1"}`}return"wah"===t&&(e.sub=e.wah_sub,e.message=""),e.image=o,e});u(e);const n=e.slice(0,j);m(n),w(j)}},[o,t]),(0,n.useEffect)(()=>{if(M.current||!L||0===p.length)return;const e=L.replace("#",""),t=p.findIndex(t=>v(t)===e);if(t<0)return;M.current=!0;const o=p.slice(0,t+1);m(o),w(t+1),A(p.length>t+1),C(e)},[L,p]);const $=async()=>{if(x.length){const e=p.slice(y,j+y);e.length||A(!1),m(x.concat(e)),w(j+y)}};(0,n.useEffect)(()=>{if(T&&x.length>0){document.documentElement.scrollHeight>window.innerHeight||$()}},[x.length,T]);const E=(0,n.useCallback)((0,l.debounce)(e=>{const t=S.current;if(e){const o=t.filter(t=>t.user.toLowerCase().includes(e.toLowerCase())||t.message.toLowerCase().includes(e.toLowerCase()));A(!1),m(o),w(0)}else{const e=t.slice(0,j);A(!0),m(e),w(j)}},1e3),[]),H=(0,n.useCallback)(e=>{E(e.target.value)},[E]);return(0,b.jsxs)("div",{style:{minHeight:"100vh",background:"var(--background)"},children:[(0,b.jsxs)(c.Fp,{children:[(0,b.jsx)(c.Pn,{}),(0,b.jsx)(d.ue,{children:"wah"===t?"Ina around the WAH (2024)":"Ina's Moments (2024)"})]}),h?(0,b.jsx)(r.c,{}):g?(0,b.jsxs)("div",{children:["Error loading videos: ",g.message]}):(0,b.jsxs)(d.gQ,{children:[(0,b.jsx)(d.Jj,{children:(0,b.jsx)(d.IW,{onChange:H,placeholder:"Search..."})}),(0,b.jsx)(i.A,{style:{overflow:"hidden"},scrollThreshold:"50px",dataLength:x.length,next:$,hasMore:T,loader:(0,b.jsx)(d.aH,{children:(0,b.jsx)(r.c,{})}),endMessage:(0,b.jsx)("p",{style:{textAlign:"center",color:"var(--ink-black)"},children:"Yay! You have seen it all"}),children:(0,b.jsx)(k,{submissions:x,isToggledOnlyImg:!1,isToggledTextOnly:!1,highlightSlug:I})}),(0,b.jsx)(s.A,{})]})]})}},3269(e,t,o){o.d(t,{IW:()=>a.IW,Id:()=>a.Id,JX:()=>s,Jj:()=>a.Jj,Zy:()=>a.Zy,aH:()=>a.aH,b8:()=>r,gQ:()=>a.gQ,iM:()=>a.iM,q1:()=>i,ue:()=>a.ue});var n=o(403),a=o(984);const i=n.Ay.div`
  background: var(--light-background);
  border: 2px solid var(--dark-background);
  border-radius: 15px;
  overflow: hidden;
`,r=n.Ay.div`
  background: var(--dark-highlight);
  color: var(--text-color);
  font: 700 clamp(22px, 1.3vw, 28px) / 1.35 Montserrat;
  padding: 10px 12px;
  border-bottom: 2px solid var(--light-highlight);
  display: flex;
  align-items: center;
`,s=n.Ay.div`
  padding-top: 5px;
  overflow-wrap: break-word;
  color: var(--ink-black);
  text-align: left;
  font: normal normal 300 clamp(20px, 1.1vw, 25px) / 1.3 Mulish;
  letter-spacing: 0px;
  opacity: 1;
  white-space: pre-line;
`}}]);
//# sourceMappingURL=648.d6ee5ea6.chunk.js.map
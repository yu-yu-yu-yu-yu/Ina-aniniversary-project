"use strict";(globalThis.webpackChunkina=globalThis.webpackChunkina||[]).push([[648],{3155(e,t,a){a.d(t,{v:()=>h});var o=a(5043),n=a(403),i=a(579);const s=n.Ay.img`
    width: 75px;
    margin-right: 10px;
    filter: drop-shadow(2px 2px 1px darkgray);
    opacity: 1;
`,r=n.Ay.div`
  display: flex;
`,l=n.Ay.div`
  &:after {
    content: '';
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
  border-radius: .4em;
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
`,d=n.Ay.span`
  color: var(--dark-highlight);
`,c=n.Ay.div`
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
    top: clamp(0%,var(--p) - var(--b)/4,100% - var(--b)/2);
    width: var(--b);
    aspect-ratio: 1;
    background: inherit;
    --g:#000 calc(100% - 1px),#0000;
    -webkit-mask:
            radial-gradient(circle closest-side at 88% 88%,var(--g)),
            radial-gradient(20% 20% at 55% 48%,var(--g)),
            radial-gradient(25% 25% at 0 25%,var(--g));
  }
`,h=e=>{let{id:t,pun:a,index:n}=e;const h=["8-bit Tako.png","Hollow Tako.png","Ikadachi.png","Mori Tako.png","Robodachi.png","Tako Amelia (Takoson).png","Tako Gura (Chum Tako).png","Tako Ina.png","Tako Kiara (Tako Bell).png","Tako Ross.png","Takodachi.png","Takomfy.png","Tophat Tako.png","Violet Tako.png","Wonder Tako.png","Yuul B. Tako.png"],g=!t?`/icon/${h[p=n,16807*p%2147483647%h.length]}`:`/takos/${t}`;var p;const[u,x]=(0,o.useState)(!1);return(0,i.jsxs)(r,{onClick:a?()=>{x(!u)}:void 0,children:[a&&!u&&(0,i.jsx)(c,{children:"..."}),(0,i.jsx)(s,{alt:`tako-icon-${t}`,src:g}),u&&(0,i.jsx)(l,{onClick:e=>e.stopPropagation(),children:(0,i.jsx)(d,{children:a})})]})}},3648(e,t,a){a.r(t),a.d(t,{default:()=>b});var o=a(5043),n=a(4997),i=a(2218),s=a(9372),r=a(3536),l=a(3269),d=a(4709),c=a(303),h=a.n(c),g=a(3155),p=a(579);const u=e=>{let{submissions:t}=e;return(0,o.useLayoutEffect)(()=>{window.scrollTo(0,0)},[]),(0,p.jsx)(h(),{options:{gutter:40,columnWidth:1,fitWidth:!0,transitionDuration:0},style:{margin:"0 auto"},children:t.map((e,t)=>{let{message:a,user:o,icon:n,image:i,pun:s,sub:r}=e;return(0,p.jsx)(l.Id,{children:(0,p.jsxs)(l.hP,{children:[(0,p.jsxs)(l.wI,{children:[(0,p.jsx)(g.v,{id:n,pun:s,index:t}),(0,p.jsx)(l.HM,{children:o||"Anonymous Tako"})]}),(0,p.jsx)("hr",{}),i.includes("http")?(0,p.jsx)(l.Zy,{width:"100%",height:"315",src:i,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l.a3,{children:i}),(0,p.jsx)("hr",{})]}),r&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l.a3,{children:r}),(0,p.jsx)("hr",{})]}),(0,p.jsx)(l.a3,{children:a})]})},t)})})};var x=a(6088);const m=10,b=e=>{let{mode:t}=e;const{data:a,loading:c,error:h}=(0,x.s)("/data/video.json"),[g,b]=(0,o.useState)([]),[k,j]=(0,o.useState)([]),[v,w]=(0,o.useState)(0),[y,f]=(0,o.useState)(!0);(0,o.useEffect)(()=>{if(a){const e=a.map(e=>{let a=e["moments"===t?"moment":"wah"];if(a.includes("http")&&!a.includes("clip")){const e=/(?:\/|v=)([a-z_0-9-]{6,16}).*?(?:t=(\d+))?.*$/gim.exec(a),t=e?e[1]:"",o=e?e[2]:"";t||console.log(a),a=`https://www.youtube.com/embed/${t}?start${o}`}return"wah"===t&&(e.sub=e.wah_sub,e.message=""),e.image=a,e});b(e);const o=e.slice(0,m);j(o),w(m)}},[a,t]);const T=async()=>{if(k.length){const e=g.slice(v,m+v);e.length||f(!1),j(k.concat(e)),w(m+v)}};(0,o.useEffect)(()=>{if(y&&k.length>0){document.documentElement.scrollHeight>window.innerHeight||T()}},[k.length,y]);const I=(0,r.debounce)(async e=>{if(e.target.value){const t=g.filter(t=>t.user.toLowerCase().includes(e.target.value.toLowerCase())||t.message.toLowerCase().includes(e.target.value.toLowerCase()));f(!1),j(t),w(0)}else{const e=g.slice(0,m);f(!0),j(e),w(m)}},1e3);return(0,p.jsxs)("div",{style:{minHeight:"100vh",background:"var(--background)"},children:[(0,p.jsxs)(d.Fp,{children:[(0,p.jsx)(d.Pn,{}),(0,p.jsx)(l.ue,{children:"Moments and WAH"})]}),c?(0,p.jsx)(i.c,{}):h?(0,p.jsxs)("div",{children:["Error loading videos: ",h.message]}):(0,p.jsxs)(l.gQ,{children:[(0,p.jsx)(l.Jj,{children:(0,p.jsx)(l.IW,{onChange:I,placeholder:"Search..."})}),(0,p.jsx)(n.A,{style:{overflow:"hidden"},scrollThreshold:"50px",dataLength:k.length,next:T,hasMore:y,loader:(0,p.jsx)(l.aH,{children:(0,p.jsx)(i.c,{})}),endMessage:(0,p.jsx)("p",{style:{textAlign:"center",color:"var(--ink-black)"},children:"Yay! You have seen it all"}),children:(0,p.jsx)(u,{submissions:k,isToggledOnlyImg:!1,isToggledTextOnly:!1})}),(0,p.jsx)(s.A,{})]})]})}},3269(e,t,a){a.d(t,{HM:()=>o.HM,IW:()=>o.IW,Id:()=>o.Id,Jj:()=>o.Jj,Zy:()=>o.Zy,a3:()=>o.a3,aH:()=>o.aH,gQ:()=>o.gQ,hP:()=>o.hP,iM:()=>o.iM,ue:()=>o.ue,wI:()=>o.wI});var o=a(984)}}]);
//# sourceMappingURL=648.9e5a7aa9.chunk.js.map
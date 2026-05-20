"use strict";(globalThis.webpackChunkina=globalThis.webpackChunkina||[]).push([[648],{3155(e,t,a){a.d(t,{v:()=>g});var o=a(5043),r=a(403),i=a(579);const n=r.Ay.img`
    width: 75px;
    margin-right: 10px;
    filter: drop-shadow(2px 2px 1px darkgray);
    opacity: 1;
`,s=r.Ay.div`
  display: flex;
`,l=r.Ay.div`
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
`,d=r.Ay.span`
  color: var(--dark-highlight);
`,c=r.Ay.div`
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
`,g=e=>{let{id:t,pun:a,index:r}=e;const g=["8-bit Tako.png","Hollow Tako.png","Ikadachi.png","Mori Tako.png","Robodachi.png","Tako Amelia (Takoson).png","Tako Gura (Chum Tako).png","Tako Ina.png","Tako Kiara (Tako Bell).png","Tako Ross.png","Takodachi.png","Takomfy.png","Tophat Tako.png","Violet Tako.png","Wonder Tako.png","Yuul B. Tako.png"],p=!t?`/icon/${g[h=r,16807*h%2147483647%g.length]}`:`/takos/${t}`;var h;const[x,u]=(0,o.useState)(!1);return(0,i.jsxs)(s,{onClick:a?()=>{u(!x)}:void 0,children:[a&&!x&&(0,i.jsx)(c,{children:"..."}),(0,i.jsx)(n,{alt:`tako-icon-${t}`,src:p}),x&&(0,i.jsx)(l,{onClick:e=>e.stopPropagation(),children:(0,i.jsx)(d,{children:a})})]})}},3648(e,t,a){a.r(t),a.d(t,{default:()=>b});var o=a(5043),r=a(4997),i=a(2218),n=a(9372),s=a(3536),l=a(3269),d=a(4709),c=a(303),g=a.n(c),p=a(3155),h=a(579);const x=e=>{let{submissions:t}=e;return(0,o.useLayoutEffect)(()=>{window.scrollTo(0,0)},[]),(0,h.jsx)(g(),{options:{gutter:40,columnWidth:1,fitWidth:!0,transitionDuration:0},style:{margin:"0 auto"},children:t.map((e,t)=>{let{message:a,user:o,icon:r,image:i,pun:n,sub:s}=e;return(0,h.jsx)(l.Id,{children:(0,h.jsxs)(l.q1,{children:[(0,h.jsxs)(l.b8,{children:[(0,h.jsx)(p.v,{id:r,pun:n,index:t}),o||"Anonymous Tako"]}),(0,h.jsxs)("div",{style:{padding:"0.75rem"},children:[i.includes("http")?(0,h.jsx)(l.Zy,{width:"100%",height:"315",src:i,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l.JX,{children:i}),(0,h.jsx)("hr",{})]}),s&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l.JX,{children:s}),(0,h.jsx)("hr",{})]}),(0,h.jsx)(l.JX,{children:a})]})]})},t)})})};var u=a(6088);const m=10,b=e=>{let{mode:t}=e;const{data:a,loading:c,error:g}=(0,u.s)("/data/video.json"),[p,b]=(0,o.useState)([]),[v,k]=(0,o.useState)([]),[j,y]=(0,o.useState)(0),[w,f]=(0,o.useState)(!0);(0,o.useEffect)(()=>{if(a){const e=a.map(e=>{let a=e["moments"===t?"moment":"wah"];if(a.includes("http")&&!a.includes("clip")){const e=/(?:\/|v=)([a-z_0-9-]{6,16}).*?(?:t=(\d+))?.*$/gim.exec(a),t=e?e[1]:"",o=e?e[2]:"";t||console.log(a),a=`https://www.youtube.com/embed/${t}?start${o}`}return"wah"===t&&(e.sub=e.wah_sub,e.message=""),e.image=a,e});b(e);const o=e.slice(0,m);k(o),y(m)}},[a,t]);const T=async()=>{if(v.length){const e=p.slice(j,m+j);e.length||f(!1),k(v.concat(e)),y(m+j)}};(0,o.useEffect)(()=>{if(w&&v.length>0){document.documentElement.scrollHeight>window.innerHeight||T()}},[v.length,w]);const A=(0,s.debounce)(async e=>{if(e.target.value){const t=p.filter(t=>t.user.toLowerCase().includes(e.target.value.toLowerCase())||t.message.toLowerCase().includes(e.target.value.toLowerCase()));f(!1),k(t),y(0)}else{const e=p.slice(0,m);f(!0),k(e),y(m)}},1e3);return(0,h.jsxs)("div",{style:{minHeight:"100vh",background:"var(--background)"},children:[(0,h.jsxs)(d.Fp,{children:[(0,h.jsx)(d.Pn,{}),(0,h.jsx)(l.ue,{children:"Moments and WAH"})]}),c?(0,h.jsx)(i.c,{}):g?(0,h.jsxs)("div",{children:["Error loading videos: ",g.message]}):(0,h.jsxs)(l.gQ,{children:[(0,h.jsx)(l.Jj,{children:(0,h.jsx)(l.IW,{onChange:A,placeholder:"Search..."})}),(0,h.jsx)(r.A,{style:{overflow:"hidden"},scrollThreshold:"50px",dataLength:v.length,next:T,hasMore:w,loader:(0,h.jsx)(l.aH,{children:(0,h.jsx)(i.c,{})}),endMessage:(0,h.jsx)("p",{style:{textAlign:"center",color:"var(--ink-black)"},children:"Yay! You have seen it all"}),children:(0,h.jsx)(x,{submissions:v,isToggledOnlyImg:!1,isToggledTextOnly:!1})}),(0,h.jsx)(n.A,{})]})]})}},3269(e,t,a){a.d(t,{IW:()=>r.IW,Id:()=>r.Id,JX:()=>s,Jj:()=>r.Jj,Zy:()=>r.Zy,aH:()=>r.aH,b8:()=>n,gQ:()=>r.gQ,iM:()=>r.iM,q1:()=>i,ue:()=>r.ue});var o=a(403),r=a(984);const i=o.Ay.div`
  background: var(--light-background);
  border: 2px solid var(--dark-background);
  border-radius: 15px;
  overflow: hidden;
`,n=o.Ay.div`
  background: var(--dark-highlight);
  color: var(--text-color);
  font: 700 22px/30px Montserrat;
  padding: 10px 12px;
  border-bottom: 2px solid var(--light-highlight);
  display: flex;
  align-items: center;
`,s=o.Ay.div`
  padding-top: 5px;
  overflow-wrap: break-word;
  color: var(--ink-black);
  text-align: left;
  font: normal normal 300 20px/25px Mulish;
  letter-spacing: 0px;
  opacity: 1;
  white-space: pre-line;
`}}]);
//# sourceMappingURL=648.d454e414.chunk.js.map
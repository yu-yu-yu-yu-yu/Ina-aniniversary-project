"use strict";(globalThis.webpackChunkina=globalThis.webpackChunkina||[]).push([[852],{5011(e,r,i){i.d(r,{d:()=>d});i(5043);var t=i(403),n=i(579);const l=t.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  padding: 0.1em;
  cursor: pointer;
`,o=t.Ay.div`
  position: relative;
  border-radius: 100px;
  width: 38px;
  min-width: 38px;
  height: 24px;
  flex-shrink: 0;
  background-color: ${e=>{let{active:r,color:i}=e;return r?i:"var(--dark-highlight)"}};
  transition: background-color 0.2s linear;
  &.mobile {
    width: 28px;
    min-width: 28px;
    height: 16px;
  }
`,a=t.Ay.div`
  position: absolute;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  box-sizing: border-box;
  background: var(--text-color);
  border: 2px solid ${e=>{let{color:r}=e;return r}};
  top: 50%;
  left: 3px;
  transform: translateY(-50%)
    translateX(${e=>{let{active:r}=e;return r?"14px":"0px"}});
  transition: transform 0.2s linear;
  &.mobile {
    width: 12px;
    height: 12px;
    left: 2px;
    transform: translateY(-50%)
      translateX(${e=>{let{active:r}=e;return r?"12px":"0px"}});
  }
`,s=t.Ay.span`
  color: ${e=>{let{labelColor:r}=e;return null!==r&&void 0!==r?r:"var(--text-color)"}};
  text-align: left;
  font: normal normal 300 25px/26px Montserrat;
  letter-spacing: 0;
  &.mobile {
    font: normal normal 300 13px/16px Montserrat;
  }
`,d=e=>{let{label:r,value:i,onChange:t,color:d="var(--dark-highlight)",labelColor:c,mobile:h}=e;const g=h?"mobile":"";return(0,n.jsxs)(l,{onClick:()=>t(!i),children:[(0,n.jsx)(o,{active:i,color:d,className:g,children:(0,n.jsx)(a,{active:i,color:d,className:g})}),(0,n.jsx)(s,{labelColor:c,className:g,children:r})]})}},9852(e,r,i){i.r(r),i.d(r,{default:()=>U});var t=i(5043),n=i(1688),l=i(6088),o=i(8893),a=i(2154),s=i(9944),d=i(4709),c=i(984),h=i(5011),g=i(2218),x=i(1472),p=i(6321),u=i(1452);const f=127462-"A".charCodeAt(0),v=e=>{const r=(e||"").trim().toUpperCase();return/^[A-Z]{2}$/.test(r)?r.split("").map(e=>String.fromCodePoint(e.charCodeAt(0)+f)).join(""):"\ud83d\udc19"};var m=i(7362),b=i(403);const y=b.Ay.div`
  width: 100%;
  position: relative;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,j=b.Ay.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  flex: 1;
  min-height: 0;
  cursor: grab;
  user-select: none;
  gap: 32px;
  padding: 1.5rem 0;
  overflow-x: scroll;
  overflow-y: hidden;
  touch-action: pan-x;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;
  --pivot-w: min(760px, max(320px, calc(100% - 320px)));
  --neighbor-w: 200px;
  --edge-w: ${e=>{let{$dragging:r}=e;return r?"var(--neighbor-w)":"var(--pivot-w)"}};
  &::-webkit-scrollbar {
    display: none;
  }
  &::before,
  &::after {
    content: "";
    display: block;
    flex: 0 0 max(0px, calc(50% - var(--edge-w) / 2));
  }
`,w=b.Ay.div`
  position: relative;
  flex-shrink: 0;
  height: 100%;
  width: ${e=>{let{$isPivot:r,$dragging:i}=e;return r&&!i?"var(--pivot-w)":"var(--neighbor-w)"}};
  max-width: 90vw;
  display: flex;
  flex-direction: column;
  scroll-snap-align: center;
  scroll-snap-stop: always;
  opacity: ${e=>{let{$isPivot:r,$dragging:i}=e;return r&&!i?1:.45}};
  transform: ${e=>{let{$isPivot:r,$dragging:i}=e;return r&&!i?"scale(1)":"scale(0.55)"}};
  transition:
    width 0.4s ease,
    opacity 0.35s,
    transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: ${e=>{let{$isPivot:r}=e;return r?"default":"pointer"}};
`,k=b.Ay.div`
  background: var(--dark-highlight);
  color: var(--text-color);
  border: 2px solid var(--light-highlight);
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`,$=b.Ay.div`
  background: var(--dark-highlight);
  color: var(--text-color);
  border: 2px solid var(--light-highlight);
  border-radius: 20px;
  padding: clamp(12px, 3vw, 24px);
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  overflow-y: auto;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
`,A=b.Ay.div`
  border-radius: 14px;
  overflow: hidden;
  background: #000;
  flex: 1 1 auto;
  min-height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`,C=b.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`,P=b.Ay.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid var(--light-highlight);
  object-fit: cover;
`,T=b.Ay.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid var(--light-highlight);
  object-fit: cover;
`,E=b.Ay.span`
  font-weight: 700;
`,S=b.Ay.span`
  font-size: 20px;
  line-height: 1;
`,V=b.Ay.p`
  margin: 0;
  line-height: 1.5;
  text-align: center;
`,H=b.Ay.a`
  align-self: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 36px;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  border: 1px solid var(--light-highlight);
  background: var(--light-highlight);
  color: var(--dark-highlight);
  font-weight: 700;
  text-decoration: none;
  transition:
    transform 0.15s ease,
    opacity 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    opacity: 0.9;
  }
`,N=b.Ay.div`
  text-align: center;
  padding: 4rem 0;
  opacity: 0.7;
`,I=b.Ay.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 12px 0 0;
`;var R=i(579);const z=(e,r,i)=>e?`/takos/${encodeURIComponent(e)}`:(0,p.VV)(r,i),D=e=>{let{entry:r,index:i,slug:n}=e;const{reportVideoPlaying:l}=(0,x.d2)(),[o,a]=(0,t.useState)(!1),s=r.socials?(()=>{try{const e=new URL(r.socials).pathname.replace(/^\//,"").replace(/\/$/,"");return e?`@${e}`:"Social link"}catch{return"Social link"}})():"",d=r.file?`/wahrldSubmissions/${r.file}`:"";return(0,t.useEffect)(()=>{a(!1)},[r.file]),(0,t.useEffect)(()=>{if("video"===r.kind)return()=>l(!1)},[r.kind,r.file,l]),(0,R.jsxs)($,{children:[(0,R.jsx)(A,{children:"video"===r.kind?(0,R.jsx)("video",{controls:!0,preload:"none",onPlay:()=>l(!0),onPause:()=>l(!1),onEnded:()=>l(!1),onError:()=>{console.error(`WAHrld video failed to load: ${r.file}`),a(!0)},children:(0,R.jsx)("source",{src:d,type:"video/mp4"})}):o||!d?(0,R.jsx)("div",{role:"alert",style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:180,padding:"1rem",color:"var(--light-highlight)",textAlign:"center"},children:r.file?`Could not load image: ${r.file}`:"This submission is missing its file asset."}):(0,R.jsx)("img",{src:d,alt:r.user,onError:e=>{e.currentTarget.onerror=null,console.error(`WAHrld image failed to load: ${r.file}`),a(!0)}})}),(0,R.jsxs)(C,{children:[(0,R.jsx)(P,{src:z(r.icon,r.user,i),alt:r.user,onError:e=>{e.currentTarget.onerror=null,e.currentTarget.src=(0,p.VV)(null,i)}}),(0,R.jsx)(E,{children:r.user}),(0,R.jsx)(S,{role:"img","aria-label":r.country||"The Void",children:v(r.country)}),(0,R.jsx)(m.A,{slug:n,label:"Copy link to this submission"})]}),r.message&&(0,R.jsx)(V,{children:r.message}),r.socials&&(0,R.jsx)(H,{href:r.socials,target:"_blank",rel:"noopener noreferrer",children:s})]})},M={image:"Images",video:"Videos"},X=Object.keys(M),U=()=>{const{muted:e}=(0,x.d2)(),r=(0,a.G)({muted:e,autoPlay:!0}),{data:i,loading:f,error:v}=(0,l.s)("/data/wahrldData.json"),[m,b]=(0,t.useState)(null),$=(0,t.useMemo)(()=>(null!==i&&void 0!==i?i:[]).filter(e=>Boolean(e.file)),[i]),A=(0,t.useMemo)(()=>m?$.filter(e=>e.kind===m):$,[$,m]),C=A.length,{pivotIndex:P,dragging:E,goTo:S,containerRef:V,itemRefs:H,containerHandlers:U}=(0,o.H)(C,2,null!==m&&void 0!==m?m:"all"),W=e=>(0,s.L)(e.user,e.country),{hash:Y}=(0,n.zy)(),G=(0,t.useRef)(!1);return(0,t.useEffect)(()=>{if(G.current||!Y||0===$.length)return;const e=Y.replace("#",""),r=$.find(r=>W(r)===e);if(!r)return;if(m&&r.kind!==m)return void b(null);const i=A.findIndex(r=>W(r)===e);i>=0&&(G.current=!0,S(i))},[Y,$,A,m,S]),(0,R.jsxs)("div",{style:{position:"relative",height:"100vh",display:"flex",flexDirection:"column",overflow:"hidden",background:"var(--background)"},children:[(0,R.jsx)("audio",{ref:r,src:"/\u663c\u5bdd\u306e\u30b9\u30b9\u30e1.mp3",loop:!0,preload:"auto",style:{display:"none"}}),(0,R.jsxs)(d.Fp,{children:[(0,R.jsx)(d.Pn,{}),(0,R.jsx)(c.DG,{children:"Ina around the WAHrld"})]}),f?(0,R.jsx)(g.c,{}):v?(0,R.jsxs)("div",{children:["Error loading submissions: ",v.message]}):(0,R.jsxs)(c.gQ,{style:{flex:1,minHeight:0,display:"flex",flexDirection:"column"},children:[(0,R.jsx)(I,{children:X.map(e=>{return(0,R.jsx)(h.d,{label:M[e],value:m===e,onChange:(r=e,e=>b(e?r:null)),labelColor:"var(--dark-highlight)"},e);var r})}),0===C?(0,R.jsx)(N,{children:"No submissions yet, check back soon!"}):(0,R.jsxs)(y,{children:[(0,R.jsxs)(u.wQ,{children:[P+1," / ",C]}),(0,R.jsx)(u.Xj,{$side:"left",onClick:()=>S(P-1),disabled:0===P,"aria-label":"Previous submission",children:(0,R.jsx)("i",{className:"fa fa-chevron-left","aria-hidden":"true"})}),(0,R.jsx)(u.Xj,{$side:"right",onClick:()=>S(P+1),disabled:P>=C-1,"aria-label":"Next submission",children:(0,R.jsx)("i",{className:"fa fa-chevron-right","aria-hidden":"true"})}),E&&(0,R.jsx)(c.hf,{}),(0,R.jsx)(j,{ref:V,$dragging:E,...U,children:A.map((e,r)=>{const i=r===P,t=i&&!E,n=W(e);return(0,R.jsx)(w,{id:n,$isPivot:i,$dragging:E,ref:e=>{H.current[r]=e},onClick:i?void 0:()=>S(r),children:t?(0,R.jsx)(D,{entry:e,index:r,slug:n}):(0,R.jsxs)(k,{children:[(0,R.jsx)(T,{src:z(e.icon,e.user,r),alt:e.user,onError:e=>{e.currentTarget.onerror=null,e.currentTarget.src=(0,p.VV)(null,r)}}),(0,R.jsx)("span",{children:e.user})]})},`${e.user}-${r}`)})})]})]})]})}},6088(e,r,i){i.d(r,{s:()=>n});var t=i(5043);const n=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const[i,n]=(0,t.useState)(null),[l,o]=(0,t.useState)(!0),[a,s]=(0,t.useState)(null),d=async()=>{o(!0),s(null);try{const i=await fetch(e,r);if(!i.ok)throw new Error(`HTTP error! status: ${i.status}`);const t=await i.json();n(t)}catch(i){s(i)}finally{o(!1)}};(0,t.useEffect)(()=>{d()},[e,JSON.stringify(r)]);return{data:i,loading:l,error:a,refetch:()=>{d()}}}}}]);
//# sourceMappingURL=852.0e4aa224.chunk.js.map
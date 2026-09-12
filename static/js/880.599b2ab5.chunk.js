"use strict";(globalThis.webpackChunkina=globalThis.webpackChunkina||[]).push([[880],{5011(e,t,r){r.d(t,{d:()=>c});r(5043);var i=r(403),n=r(579);const o=i.Ay.div`
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
  background-color: ${e=>{let{active:t,color:r}=e;return t?r:"var(--dark-highlight)"}};
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
  border: 2px solid ${e=>{let{color:t}=e;return t}};
  top: 50%;
  left: 3px;
  transform: translateY(-50%)
    translateX(${e=>{let{active:t}=e;return t?"14px":"0px"}});
  transition: transform 0.2s linear;
  &.mobile {
    width: 12px;
    height: 12px;
    left: 2px;
    transform: translateY(-50%)
      translateX(${e=>{let{active:t}=e;return t?"12px":"0px"}});
  }
`,s=i.Ay.span`
  color: ${e=>{let{labelColor:t}=e;return null!==t&&void 0!==t?t:"var(--text-color)"}};
  text-align: left;
  font: normal normal 300 25px/26px Montserrat;
  letter-spacing: 0;
  &.mobile {
    font: normal normal 300 13px/16px Montserrat;
  }
`,c=e=>{let{label:t,value:r,onChange:i,color:c="var(--dark-highlight)",labelColor:d,mobile:u}=e;const h=u?"mobile":"";return(0,n.jsxs)(o,{onClick:()=>i(!r),children:[(0,n.jsx)(a,{active:r,color:c,className:h,children:(0,n.jsx)(l,{active:r,color:c,className:h})}),(0,n.jsx)(s,{labelColor:d,className:h,children:t})]})}},3880(e,t,r){r.r(t),r.d(t,{default:()=>O});var i=r(5043),n=r(1688),o=r(6088),a=r(8893),l=r(4709),s=r(984),c=r(5011),d=r(2218),u=r(1472),h=r(2154),p=r(6321),g=r(1452),m=r(579);const f={tako_back:"takomonty_tako_back.png",chumbud_back:"takomonty_chumbud_back.png",teamate_back:"takomonty_teamate_back.png",kfp:"takomonty_kfp_front.png",deadbeat:"takomonty_deadbeat_front.png",takostretch:"takomonty_takostretch_front.png",flowertako:"takomonty_flowertako_front.png",sstako:"takomonty_sstako_front.png",takopoint:"takomonty_takopoint_front.png"},x=["tako_back","chumbud_back","teamate_back"],b=["deadbeat","takostretch","flowertako","sstako"],v=e=>1.25+Math.min(Math.max(e,0),76)/76*-.39,y=[{left:18,bottom:68,flip:!0},{left:50,bottom:74,flip:!1},{left:82,bottom:68,flip:!1}],k=[{left:12,bottom:20,flip:!0},{left:50,bottom:20,flip:!1},{left:88,bottom:20,flip:!1}],j=[12,23,34,45,56,67,78,88],w=(e,t)=>{const r=[],i=[...j];for(let n=0;n<t&&i.length>0;n++){const t=[...e,...r];let n=i[0],o=-1;i.forEach(e=>{const r=0===t.length?100:Math.min(...t.map(t=>Math.abs(t-e)));r>o&&(o=r,n=e)}),r.push(n),i.splice(i.indexOf(n),1)}return r.sort((e,t)=>e-t)},$=(e,t)=>e+(2*Math.random()-1)*t,M=e=>{const t=[...e];for(let r=t.length-1;r>0;r--){const e=Math.floor(Math.random()*(r+1));[t[r],t[e]]=[t[e],t[r]]}return t},S=()=>{const e=1+Math.floor(3*Math.random()),t=M(x).slice(0,e).map((e,t)=>({id:e,slot:{...y[t],left:$(y[t].left,4),bottom:$(y[t].bottom,3)},dim:!0})),r=Math.random()<.5,{kfp:i,subjects:n}=(e=>{const t=e?70:30;return{kfp:{left:t,bottom:2,flip:e},subjects:[{left:t-6,bottom:6,flip:!1},{left:t+6,bottom:6,flip:!1}]}})(r),o=$(0,5),a=$(0,2),l={...i,left:i.left+o,bottom:i.bottom+a},s=n.map(e=>({...e,left:e.left+o,bottom:e.bottom+a})),c=M(b),d=Math.random()<.5?1:2,u=c.slice(0,d),h=c.slice(d);return[...t,...[{id:"kfp",slot:l},...u.map((e,t)=>({id:e,slot:s[t]}))],...M([...h,"takopoint"]).slice(0,k.length).map((e,t)=>({id:e,slot:{left:$(k[t].left,4),bottom:$(k[t].bottom,3),flip:"takopoint"===e&&k[t].flip}}))]},A=e=>{var t;let{momentKey:r,reactions:n}=e;const o=Math.min(3,null!==(t=null===n||void 0===n?void 0:n.length)&&void 0!==t?t:0),[a,l]=(0,i.useState)(()=>((e,t)=>e.map(e=>({...e,phase:t})))(S(),"idle")),[s,c]=(0,i.useState)(()=>w(a.map(e=>e.slot.left),o));(0,i.useEffect)(()=>{const e=S();l(t=>{const r=new Set(t.map(e=>e.id)),i=new Set(e.map(e=>e.id)),n=e.map(e=>({...e,phase:r.has(e.id)?"idle":"entering"}));return t.forEach(e=>{i.has(e.id)||n.push({...e,phase:"leaving"})}),n}),c(w(e.map(e=>e.slot.left),o));let t=0;const r=requestAnimationFrame(()=>{t=requestAnimationFrame(()=>{l(e=>e.map(e=>"entering"===e.phase?{...e,phase:"idle"}:e))})}),i=window.setTimeout(()=>{l(e=>e.filter(e=>"leaving"!==e.phase))},700);return()=>{cancelAnimationFrame(r),cancelAnimationFrame(t),window.clearTimeout(i)}},[r]);const d=(null!==n&&void 0!==n?n:[]).slice(0,o),u=(0,i.useRef)([]),h=(0,i.useRef)({}),[x,b]=(0,i.useState)([]);(0,i.useEffect)(()=>{const e=d.map((e,t)=>{const r=u.current[t];return!!r&&r.scrollHeight-r.clientHeight>2});b(e)},[r,d.length]);const y=(e,t)=>{const r=u.current[e];if(!r)return;h.current[e]&&cancelAnimationFrame(h.current[e]);const i=r.scrollTop,n=t-i;if(Math.abs(n)<1)return;const o=Math.min(6e3,Math.max(1200,35*Math.abs(n))),a=performance.now(),l=t=>{const s=Math.min(1,(t-a)/o);r.scrollTop=i+n*s,s<1&&(h.current[e]=requestAnimationFrame(l))};h.current[e]=requestAnimationFrame(l)},k=e=>{const t=u.current[e];t&&y(e,t.scrollHeight-t.clientHeight)},j=e=>{y(e,0)};return(0,m.jsxs)(g.OA,{children:[a.map((e,t)=>(0,m.jsx)(g.TQ,{src:`/gallery_assets/${f[e.id]}`,alt:"",$left:e.slot.left,$bottom:e.slot.bottom,$scale:v(e.slot.bottom),$flip:!!e.slot.flip,$dim:e.dim,$hidden:"idle"!==e.phase,$delay:.35*t,$front:"kfp"===e.id},e.id)),a.filter(e=>"kfp"===e.id&&"leaving"!==e.phase).map(e=>(0,m.jsx)(g.kx,{$left:e.slot.left,$bottom:e.slot.bottom,$flip:!!e.slot.flip},"flash")),d.map((e,t)=>{var r;const i=null!==(r=s[t])&&void 0!==r?r:50;return(0,m.jsx)(g.TQ,{src:(0,p.VV)(e.author,t),alt:e.author,onError:e=>{e.currentTarget.onerror=null,e.currentTarget.src=(0,p.VV)(null,t)},$left:i,$bottom:5,$scale:v(5),$flip:!1,$hidden:!1,$delay:.2*t,$interactive:!0,onMouseEnter:()=>k(t),onMouseLeave:()=>j(t)},`commenter-${t}`)}),d.map((e,t)=>{var r;const i=null!==(r=s[t])&&void 0!==r?r:50;return(0,m.jsxs)(g.JD,{$left:i,$bottom:60,onMouseEnter:()=>k(t),onMouseLeave:()=>j(t),children:[(0,m.jsxs)(g.Zh,{children:[(0,m.jsx)(g.Wm,{ref:e=>{u.current[t]=e},children:e.text}),x[t]&&(0,m.jsx)(g.VE,{children:"\xb7\xb7\xb7"})]}),(0,m.jsx)(g.XJ,{children:e.author})]},`bubble-${t}`)})]})};var T=r(2449),_=r(9944),z=r(7825),C=r(7362);const E={milestone:"Ina's Milestones",myth:"Myth Moments",funny:"Funny Moments"},V=e=>{var t;let{moment:r,view:o}=e;const a=function(e){let{min:t=11,max:r=16,step:n=.5}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const o=(0,i.useRef)(null),a=(0,i.useCallback)(()=>{const e=o.current;if(!e)return;let i=r;for(e.style.fontSize=`${i}px`;e.scrollHeight>e.clientHeight&&i>t;)i-=n,e.style.fontSize=`${i}px`},[t,r,n]);return(0,i.useEffect)(a,[...e,a]),(0,i.useEffect)(()=>{const e=o.current;if(!e)return;const t=new ResizeObserver(a);return t.observe(e),()=>t.disconnect()},[a]),o}([r.slug],{min:12,max:22}),{hash:l}=(0,n.zy)(),[s,c]=(0,i.useState)(null);return(0,i.useEffect)(()=>{if(!l)return;const e=l.replace("#","");c(e);const t=setTimeout(()=>c(null),1800);return()=>clearTimeout(t)},[l]),(0,m.jsx)(g.SG,{children:(0,m.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:6,overflow:"hidden",height:"100%"},children:[(0,m.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:8,flexShrink:0},children:[(0,m.jsx)(g.q4,{children:r.title}),(0,m.jsx)(C.A,{slug:r.slug,label:"Copy link to this moment"})]}),(0,m.jsxs)(g.Rz,{children:[r.date," \xb7 ",E[r.category]]}),(0,m.jsx)(g.T5,{ref:a,children:r.context}),(0,m.jsx)(g.vQ,{children:o.credit}),!(null===(t=r.reactions)||void 0===t||!t.length)&&(0,m.jsx)(g.ZQ,{children:r.reactions.map((e,t)=>{const i=((e,t)=>`${r.slug}-r-${(0,_.L)(e)}-${t}`)(e.author,t);return(0,m.jsxs)(g.Hw,{id:i,style:s===i?{outline:"3px solid var(--light-highlight)"}:void 0,children:[(0,m.jsx)(g.iG,{src:(0,p.VV)(e.author,t),alt:e.author,onError:e=>{e.currentTarget.onerror=null,e.currentTarget.src=(0,p.VV)(null,t)}}),(0,m.jsx)("span",{children:e.text}),(0,m.jsx)(C.A,{slug:i,label:`Copy link to ${e.author}'s reaction`})]},i)})})]})})},I=e=>{let{tributes:t,activeIndex:r,onSelect:i,momentSlug:n}=e;return(0,m.jsx)(g.G6,{children:t.map((e,t)=>(0,m.jsxs)("div",{style:{position:"relative"},children:[(0,m.jsxs)(g.oA,{type:"button",$active:r===t+1,onClick:()=>i(t+1),title:`View tribute by ${e.author}`,children:[(0,m.jsx)(g.dS,{$active:r===t+1,src:(0,p.VV)(e.author,t),alt:e.author,onError:e=>{e.currentTarget.onerror=null,e.currentTarget.src=(0,p.VV)(null,t)}}),(0,m.jsx)(g.qr,{children:e.author})]}),(0,m.jsx)("div",{style:{position:"absolute",top:-4,right:-4,transform:"scale(0.75)"},children:(0,m.jsx)(C.A,{slug:`${n}-t-${(0,_.L)(e.author)}`,label:`Copy link to ${e.author}'s tribute`})})]},`${e.author}-${t}`))})},N=e=>{var t,r,o;let{moment:a}=e;const l=(e=>{const t=(0,T.pu)(e.sourceUrl),r=`Original: ${e.sourceLabel||e.title}`;return[t?{kind:"original-video",src:(0,T.ZS)(e.sourceUrl),label:"Original",credit:r}:e.image?{kind:"original-image",src:e.image,label:"Original",credit:r}:{kind:"original-link",src:e.sourceUrl,label:"Original",credit:r},...e.tributes.slice(0,e.cap).filter(e=>!!e.file).map(t=>{return{kind:"video"===t.kind?"tribute-video":"tribute-image",src:(r=e.slug,i=t.file,i.startsWith("http")?i:`/momentTributes/${r}/${i}`),label:`Tribute by ${t.author}`,credit:`Tribute by ${t.author}${t.handle?` (@${t.handle})`:""}`,tribute:t};var r,i})]})(a),s="original-link"!==l[0].kind,[c,d]=(0,i.useState)(()=>!s&&l.length>1?1:0),[h,p]=(0,i.useState)(null),{reportVideoPlaying:f}=(0,u.d2)(),x=null!==(t=l[c])&&void 0!==t?t:l[0],b=l.slice(1),v=h===x.src,y=l.some(e=>"original-link"!==e.kind);(0,i.useEffect)(()=>{if("original-video"===x.kind)return()=>f(!1)},[x.kind,x.src,f]);const{hash:k}=(0,n.zy)(),j=(0,i.useRef)(!1);return(0,i.useEffect)(()=>{if(j.current||!k)return;const e=k.replace("#",""),t=`${a.slug}-t-`;if(!e.startsWith(t))return;const r=e.slice(t.length),i=b.findIndex(e=>e.tribute&&(0,_.L)(e.tribute.author)===r);i>=0&&(j.current=!0,d(i+1))},[k,a.slug,b]),(0,m.jsxs)(g._I,{children:[y&&(0,m.jsxs)(g.ir,{children:[(0,m.jsx)(g.wI,{children:(0,m.jsxs)(g.I4,{children:["original-video"===x.kind&&(0,m.jsx)("iframe",{src:x.src,title:a.sourceLabel||a.title,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,onLoad:e=>(0,T.cb)(e.currentTarget)},x.src),"original-image"===x.kind&&(v?(0,m.jsx)(g.cD,{href:a.sourceUrl,target:"_blank",rel:"noopener noreferrer",children:a.sourceLabel||"View the original"}):(0,m.jsx)("img",{src:x.src,alt:a.title,onError:()=>p(x.src)})),"original-link"===x.kind&&(0,m.jsx)(g.cD,{href:x.src,target:"_blank",rel:"noopener noreferrer",children:a.sourceLabel||"View the original"}),"tribute-image"===x.kind&&(v?(0,m.jsxs)(g.cD,{href:(null===(r=x.tribute)||void 0===r?void 0:r.url)||x.src,target:"_blank",rel:"noopener noreferrer",children:["View tribute by ",null===(o=x.tribute)||void 0===o?void 0:o.author]}):(0,m.jsx)("img",{src:x.src,alt:x.label,onError:()=>p(x.src)})),"tribute-video"===x.kind&&(0,m.jsx)("video",{src:x.src,controls:!0,preload:"none"})]})}),b.length>0&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(g.M4,{children:[(0,m.jsx)(z.fu,{onClick:()=>d(0===c?1:0),title:0===c?"See tributes":"See original","aria-label":0===c?"See tributes":"See original",children:(0,m.jsx)("i",{className:"fa fa-exchange","aria-hidden":"true"})}),0===c?"See tributes":"See original"]}),(0,m.jsx)(I,{tributes:b.map(e=>e.tribute),activeIndex:c,onSelect:d,momentSlug:a.slug})]})]}),(0,m.jsx)(V,{moment:a,view:x})]})},D=e=>{if(e.image)return e.image;const t=(0,T.pu)(e.sourceUrl);return t?`https://i.ytimg.com/vi/${t.id}/hqdefault.jpg`:void 0},F=e=>{let{moments:t,carousel:r}=e;const i=t.length,{pivotIndex:n,dragging:o,goTo:a,containerRef:l,itemRefs:s,isLoaded:c,containerHandlers:d}=r;return 0===i?(0,m.jsx)(g.Np,{children:"No moments yet, check back soon!"}):(0,m.jsx)(g.d5,{ref:l,$dragging:o,...d,children:t.map((e,t)=>{const r=t===n,i=r&&!o,l=Math.abs(t-n)<=2;return(0,m.jsx)(g.tm,{id:e.slug,$isPivot:r,$dragging:o,$isNear:l,ref:e=>{s.current[t]=e},onClick:r?void 0:()=>a(t),children:i?(0,m.jsx)(N,{moment:e},e.slug):(0,m.jsxs)(g.ie,{children:[(0,m.jsx)(g.OL,{$src:c(t)?D(e):void 0}),(0,m.jsxs)(g.jG,{children:[e.title," \xb7 ",e.date]})]})},e.slug)})})},L={milestone:"Ina's Milestones",myth:"Myth Moments",funny:"Funny Moments"},H=Object.keys(L),O=()=>{var e;const{muted:t}=(0,u.d2)(),r=(0,h.G)({muted:t,autoPlay:!0}),{data:p,loading:f,error:x}=(0,o.s)("/data/momentsData.json"),[b,v]=(0,i.useState)(null),[y,k]=(0,i.useState)(!1),j=(0,i.useMemo)(()=>[...null!==p&&void 0!==p?p:[]].sort((e,t)=>new Date(e.date).getTime()-new Date(t.date).getTime()),[p]),w=(0,i.useMemo)(()=>b?j.filter(e=>e.category===b):j,[j,b]),$=(0,i.useMemo)(()=>Array.from(new Set(w.map(e=>new Date(e.date).getFullYear()))).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t),[w]),M=(0,a.H)(w.length,2,`${null!==b&&void 0!==b?b:"all"}-${$.join("|")}`),S=w[M.pivotIndex],T=S?new Date(S.date).getFullYear():null,{hash:_}=(0,n.zy)(),z=(0,i.useRef)(!1),{goTo:C}=M;(0,i.useEffect)(()=>{if(z.current||!_||0===j.length)return;const e=_.replace("#",""),t=j.find(t=>t.slug===e||e.startsWith(`${t.slug}-t-`)||e.startsWith(`${t.slug}-r-`));if(!t)return;if(b&&t.category!==b)return void v(null);const r=w.findIndex(t=>t.slug===e);r>=0&&(z.current=!0,C(r))},[_,j,w,b,C]);return(0,m.jsxs)(g.YZ,{children:[(0,m.jsx)(g.KP,{}),(0,m.jsx)(A,{momentKey:null!==(e=null===S||void 0===S?void 0:S.slug)&&void 0!==e?e:"",reactions:null===S||void 0===S?void 0:S.reactions}),(0,m.jsx)("audio",{ref:r,src:"/Vanilla.mp3",loop:!0,preload:"auto",style:{display:"none"}}),(0,m.jsxs)(l.Fp,{children:[(0,m.jsx)(l.Pn,{}),(0,m.jsx)(s.DG,{children:"Moments Gallery"}),(0,m.jsxs)(g.dr,{children:[(0,m.jsx)(g.Z5,{children:H.map(e=>{return(0,m.jsx)(c.d,{label:L[e],value:b===e,onChange:(t=e,e=>v(e?t:null)),labelColor:"var(--text-color)",mobile:!0},e);var t})}),$.length>1&&(0,m.jsx)(g.tB,{children:$.map(e=>(0,m.jsx)(g.cX,{type:"button",$active:e===T,onClick:()=>(e=>{const t=w.findIndex(t=>new Date(t.date).getFullYear()===e);t>=0&&M.goTo(t)})(e),children:e},e))})]}),(0,m.jsxs)("div",{style:{flex:"0 0 auto",position:"relative"},children:[(0,m.jsxs)(l.uW,{"aria-label":"Show gallery usage hint",onClick:()=>k(e=>!e),title:"Show gallery usage hint",children:[(0,m.jsx)("i",{className:"fa fa-question-circle","aria-hidden":"true"}),(0,m.jsx)("span",{className:"btn-text",children:"Help"})]}),y&&(0,m.jsxs)(l.JY,{onClick:()=>k(!1),children:[(0,m.jsx)("p",{children:"Walk the wall with the arrows at either edge of the screen, or drag the exhibits directly. A piece with fan tributes shows a swap button underneath its frame: cycle it to compare the original against every tribute, or tap a tribute's avatar to jump straight to it."}),(0,m.jsxs)("p",{children:["Mascot art by ",(0,m.jsx)("b",{children:"takomonty"}),"."]})]})]})]}),f?(0,m.jsx)(d.c,{}):x?(0,m.jsxs)("div",{children:["Error loading moments: ",x.message]}):(0,m.jsx)(s.gQ,{style:{flex:1,minHeight:0,display:"flex",flexDirection:"column",position:"relative",zIndex:1,background:"transparent",paddingLeft:0,paddingRight:0},children:(0,m.jsx)(F,{moments:w,carousel:M})}),w.length>0&&(0,m.jsxs)(g.wQ,{children:[M.pivotIndex+1," / ",w.length]}),M.dragging&&(0,m.jsx)(s.hf,{}),(0,m.jsx)(g.Xj,{$side:"left",onClick:()=>M.goTo(M.pivotIndex-1),disabled:0===M.pivotIndex,"aria-label":"Previous moment",children:(0,m.jsx)("i",{className:"fa fa-chevron-left","aria-hidden":"true"})}),(0,m.jsx)(g.Xj,{$side:"right",onClick:()=>M.goTo(M.pivotIndex+1),disabled:M.pivotIndex>=w.length-1,"aria-label":"Next moment",children:(0,m.jsx)("i",{className:"fa fa-chevron-right","aria-hidden":"true"})})]})}},7825(e,t,r){r.d(t,{DB:()=>g,NE:()=>h,OL:()=>c,QS:()=>s,Vx:()=>x,Ys:()=>u,_u:()=>f,cm:()=>p,fu:()=>m,mc:()=>d,tD:()=>o});var i=r(403),n=r(5659);const o=(0,i.Ay)(n.LN)`
  height: 100vh;
  overflow-y: auto;
`,a=i.i7`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.15; }
`,l=i.i7`
  from { opacity: 0; transform: scale(0.96); }
  to   { opacity: 1; transform: scale(1); }
`,s=i.Ay.div`
  width: 100%;
  position: relative;
  flex: 1;
  min-height: 45vh;
  margin-top: 8px;
  overflow: visible;
  background: transparent;
`,c=i.Ay.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 60%;
  transform: translate(-50%, -50%);
  background: var(--dark-highlight);
  filter: blur(50px) brightness(2) saturate(1.2);
  opacity: 0.8;
  z-index: 0;
  pointer-events: none;
`,d=i.Ay.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 100%;
  cursor: grab;
  user-select: none;
  gap: 48px;
  padding: 0.5rem 0 0.75rem;
  overflow-x: scroll;
  overflow-y: hidden;
  touch-action: pan-x;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  &::before,
  &::after {
    content: "";
    display: block;
    flex: 0 0 max(0px, calc(50% - 240px));
  }
`,u=i.Ay.a`
  color: var(--light-highlight);
  font-style: italic;
  font-weight: bold;
  transition: color 0.2s;
  &:hover {
    color: var(--text-color);
    background: var(--light-highlight);
    text-decoration: underline;
    border-radius: 4px;
    padding: 0 4px;
  }
`,h=i.Ay.div`
  position: relative;
  flex-shrink: 0;
  width: 480px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  scroll-snap-align: center;
  scroll-snap-stop: always;
  transform-origin: 50% 100%;
  transition:
    transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1),
    filter 0.45s;
  z-index: ${e=>{let{$isPivot:t}=e;return t?5:1}};
  ${e=>{let{$isPivot:t}=e;return t?"\n    transform: scale(1.22);\n    filter:\n      drop-shadow(0 0 22px var(--light-highlight))\n      drop-shadow(0 16px 40px rgba(0, 0, 0, 0.55));\n  ":""}}
  &:hover {
    z-index: 6;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 55%;
    height: 14px;
    transform: translateX(-50%);
    border-radius: 50%;
    background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0.5),
      transparent 70%
    );
    filter: blur(2px);
    z-index: 0;
    pointer-events: none;
  }
`,p=i.Ay.img`
  width: auto;
  height: auto;
  max-height: 75%;
  -webkit-user-drag: none;
  border: 3px solid transparent;
  cursor: pointer;
  transition: transform 0.2s;
  position: relative;
  z-index: 1;
  ${e=>{let{$loaded:t}=e;return t?i.AH`
          animation: ${l} 0.4s ease-out;
        `:""}}
  &:hover {
    transform: scale(1.06);
  }
`,g=i.Ay.div`
  width: 320px;
  height: 80%;
  border-radius: 10px;
  background: var(--dark-highlight);
  animation: ${a} 1.6s ease-in-out infinite;
  cursor: pointer;
  position: relative;
  z-index: 1;
  &::after {
    content: "•••";
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--light-highlight);
    font-size: 2em;
    letter-spacing: 8px;
    opacity: 0.4;
  }
`,m=i.Ay.button`
  background: rgba(0, 0, 0, 0.52);
  color: var(--light-highlight);
  border: 1px solid var(--light-highlight);
  border-radius: 50%;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 10px;
  opacity: 0.72;
  transition:
    opacity 0.18s,
    background 0.18s;
  flex-shrink: 0;
  &:hover {
    opacity: 1;
    background: rgba(0, 0, 0, 0.78);
  }
`,f=i.Ay.div`
  box-sizing: border-box;
  width: 480px;
  margin: 24px auto 0;
  background: var(--dark-highlight);
  color: var(--text-color);
  border: 2px solid var(--light-highlight);
  border-radius: 12px;
  box-shadow: 0 4px 16px var(--shadow);
  padding: 12px 18px;
  font-size: 15px;
`,x=i.Ay.div`
  align-self: center;
  width: fit-content;
  max-width: 60vw;
  margin: 10px auto 0;
  background: var(--dark-highlight);
  color: var(--text-color);
  border-radius: 12px;
  padding: 6px 18px;
  box-shadow: 0 2px 8px #0002;
  font-size: 1.25em;
  font-weight: 600;
  text-align: center;
  overflow-wrap: anywhere;
`},6088(e,t,r){r.d(t,{s:()=>n});var i=r(5043);const n=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const[r,n]=(0,i.useState)(null),[o,a]=(0,i.useState)(!0),[l,s]=(0,i.useState)(null),c=async()=>{a(!0),s(null);try{const r=await fetch(e,t);if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);const i=await r.json();n(i)}catch(r){s(r)}finally{a(!1)}};(0,i.useEffect)(()=>{c()},[e,JSON.stringify(t)]);return{data:r,loading:o,error:l,refetch:()=>{c()}}}}}]);
//# sourceMappingURL=880.599b2ab5.chunk.js.map
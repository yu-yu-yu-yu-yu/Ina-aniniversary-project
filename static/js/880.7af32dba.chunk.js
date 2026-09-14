"use strict";(globalThis.webpackChunkina=globalThis.webpackChunkina||[]).push([[880],{5011(e,t,r){r.d(t,{d:()=>c});r(5043);var i=r(403),o=r(579);const n=i.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  padding: 0.1em;
  cursor: pointer;
`,l=i.Ay.div`
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
`,a=i.Ay.div`
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
`,c=e=>{let{label:t,value:r,onChange:i,color:c="var(--dark-highlight)",labelColor:d,mobile:u}=e;const h=u?"mobile":"";return(0,o.jsxs)(n,{onClick:()=>i(!r),children:[(0,o.jsx)(l,{active:r,color:c,className:h,children:(0,o.jsx)(a,{active:r,color:c,className:h})}),(0,o.jsx)(s,{labelColor:d,className:h,children:t})]})}},3880(e,t,r){r.r(t),r.d(t,{default:()=>W});var i=r(5043),o=r(1688),n=r(6088),l=r(8893),a=r(4709),s=r(984),c=r(5011),d=r(2218),u=r(1472),h=r(2154),p=r(6321),g=r(1452),f=r(579);const x={tako_back:"takomonty_tako_back.png",chumbud_back:"takomonty_chumbud_back.png",teamate_back:"takomonty_teamate_back.png",kfp:"takomonty_kfp_front.png",deadbeat:"takomonty_deadbeat_front.png",takostretch:"takomonty_takostretch_front.png",flowertako:"takomonty_flowertako_front.png",sstako:"takomonty_sstako_front.png",takopoint:"takomonty_takopoint_front.png"},m=["tako_back","chumbud_back","teamate_back"],b=["deadbeat","takostretch","flowertako","sstako"],v=e=>1.25+Math.min(Math.max(e,0),76)/76*-.39,y=[{left:18,bottom:68,flip:!0},{left:50,bottom:74,flip:!1},{left:82,bottom:68,flip:!1}],k=[{left:12,bottom:20,flip:!0},{left:50,bottom:20,flip:!1},{left:88,bottom:20,flip:!1}],j=[12,23,34,45,56,67,78,88],w=(e,t)=>{const r=[],i=[...j];for(let o=0;o<t&&i.length>0;o++){const t=[...e,...r];let o=i[0],n=-1;i.forEach(e=>{const r=0===t.length?100:Math.min(...t.map(t=>Math.abs(t-e)));r>n&&(n=r,o=e)}),r.push(o),i.splice(i.indexOf(o),1)}return r.sort((e,t)=>e-t)},$=(e,t)=>e+(2*Math.random()-1)*t,S=e=>{const t=[...e];for(let r=t.length-1;r>0;r--){const e=Math.floor(Math.random()*(r+1));[t[r],t[e]]=[t[e],t[r]]}return t},M=()=>{const e=1+Math.floor(3*Math.random()),t=S(m).slice(0,e).map((e,t)=>({id:e,slot:{...y[t],left:$(y[t].left,4),bottom:$(y[t].bottom,3)},dim:!0})),r=Math.random()<.5,{kfp:i,subjects:o}=(e=>{const t=e?70:30;return{kfp:{left:t,bottom:2,flip:e},subjects:[{left:t-6,bottom:6,flip:!1},{left:t+6,bottom:6,flip:!1}]}})(r),n=$(0,5),l=$(0,2),a={...i,left:i.left+n,bottom:i.bottom+l},s=o.map(e=>({...e,left:e.left+n,bottom:e.bottom+l})),c=S(b),d=Math.random()<.5?1:2,u=c.slice(0,d),h=c.slice(d);return[...t,...[{id:"kfp",slot:a},...u.map((e,t)=>({id:e,slot:s[t]}))],...S([...h,"takopoint"]).slice(0,k.length).map((e,t)=>({id:e,slot:{left:$(k[t].left,4),bottom:$(k[t].bottom,3),flip:"takopoint"===e&&k[t].flip}}))]},T=e=>{var t;let{momentKey:r,reactions:o}=e;const n=Math.min(3,null!==(t=null===o||void 0===o?void 0:o.length)&&void 0!==t?t:0),[l,a]=(0,i.useState)(()=>((e,t)=>e.map(e=>({...e,phase:t})))(M(),"idle")),[s,c]=(0,i.useState)(()=>w(l.map(e=>e.slot.left),n));(0,i.useEffect)(()=>{const e=M();a(t=>{const r=new Set(t.map(e=>e.id)),i=new Set(e.map(e=>e.id)),o=e.map(e=>({...e,phase:r.has(e.id)?"idle":"entering"}));return t.forEach(e=>{i.has(e.id)||o.push({...e,phase:"leaving"})}),o}),c(w(e.map(e=>e.slot.left),n));let t=0;const r=requestAnimationFrame(()=>{t=requestAnimationFrame(()=>{a(e=>e.map(e=>"entering"===e.phase?{...e,phase:"idle"}:e))})}),i=window.setTimeout(()=>{a(e=>e.filter(e=>"leaving"!==e.phase))},700);return()=>{cancelAnimationFrame(r),cancelAnimationFrame(t),window.clearTimeout(i)}},[r]);const d=(null!==o&&void 0!==o?o:[]).slice(0,n),[u,h]=(0,i.useState)(null);return(0,i.useEffect)(()=>{h(null)},[r]),(0,f.jsxs)(g.OA,{children:[l.map((e,t)=>(0,f.jsx)(g.TQ,{src:`/gallery_assets/${x[e.id]}`,alt:"",$left:e.slot.left,$bottom:e.slot.bottom,$scale:v(e.slot.bottom),$flip:!!e.slot.flip,$dim:e.dim,$hidden:"idle"!==e.phase,$delay:.35*t,$front:"kfp"===e.id},e.id)),l.filter(e=>"kfp"===e.id&&"leaving"!==e.phase).map(e=>(0,f.jsx)(g.kx,{$left:e.slot.left,$bottom:e.slot.bottom,$flip:!!e.slot.flip},"flash")),d.map((e,t)=>{var r;const i=null!==(r=s[t])&&void 0!==r?r:50;return(0,f.jsx)(g.TQ,{src:(0,p.VV)(e.author,t),alt:e.author,onError:e=>{e.currentTarget.onerror=null,e.currentTarget.src=(0,p.VV)(null,t)},$left:i,$bottom:5,$scale:v(5),$flip:!1,$hidden:!1,$delay:.2*t,$interactive:!0,onMouseEnter:()=>h(t),onMouseLeave:()=>h(e=>e===t?null:e)},`commenter-${t}`)}),d.map((e,t)=>{var r;const i=null!==(r=s[t])&&void 0!==r?r:50,o=u===t;return(0,f.jsxs)(g.JD,{$left:i,$bottom:60,onMouseEnter:()=>h(t),onMouseLeave:()=>h(e=>e===t?null:e),children:[(0,f.jsx)(g.Zh,{$expanded:o,children:(0,f.jsx)(g.Wm,{$expanded:o,children:e.text})}),(0,f.jsx)(g.XJ,{children:e.author})]},`bubble-${t}`)})]})};var _=r(2449),C=r(9944),A=r(7825),z=r(7362);const L={milestone:"Ina's Milestones",myth:"Myth Moments",funny:"Funny Moments"},E=e=>{var t;let{moment:r,view:n}=e;const l=function(e){let{min:t=11,max:r=16,step:o=.5}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=(0,i.useRef)(null),l=(0,i.useCallback)(()=>{const e=n.current;if(!e)return;let i=r;for(e.style.fontSize=`${i}px`;e.scrollHeight>e.clientHeight&&i>t;)i-=o,e.style.fontSize=`${i}px`},[t,r,o]);return(0,i.useEffect)(l,[...e,l]),(0,i.useEffect)(()=>{const e=n.current;if(!e)return;const t=new ResizeObserver(l);return t.observe(e),()=>t.disconnect()},[l]),n}([r.slug],{min:12,max:22}),{hash:a}=(0,o.zy)(),[s,c]=(0,i.useState)(null);return(0,i.useEffect)(()=>{if(!a)return;const e=a.replace("#","");c(e);const t=setTimeout(()=>c(null),1800);return()=>clearTimeout(t)},[a]),(0,f.jsx)(g.SG,{children:(0,f.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:6,overflow:"hidden",height:"100%"},children:[(0,f.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:8,flexShrink:0},children:[(0,f.jsx)(g.q4,{children:r.title}),(0,f.jsx)(z.A,{slug:r.slug,label:"Copy link to this moment"})]}),(0,f.jsxs)(g.Rz,{children:[r.date," \xb7 ",L[r.category]]}),(0,f.jsx)(g.T5,{ref:l,children:r.context}),(0,f.jsxs)(g.vQ,{children:[n.creditPrefix,n.creditHref?(0,f.jsx)(g.ZV,{href:n.creditHref,target:"_blank",rel:"noopener noreferrer",children:n.creditText}):n.creditText]}),!(null===(t=r.reactions)||void 0===t||!t.length)&&(0,f.jsx)(g.ZQ,{children:r.reactions.map((e,t)=>{const i=((e,t)=>`${r.slug}-r-${(0,C.L)(e)}-${t}`)(e.author,t);return(0,f.jsxs)(g.Hw,{id:i,style:s===i?{outline:"3px solid var(--light-highlight)"}:void 0,children:[(0,f.jsx)(g.iG,{src:(0,p.VV)(e.author,t),alt:e.author,onError:e=>{e.currentTarget.onerror=null,e.currentTarget.src=(0,p.VV)(null,t)}}),(0,f.jsx)("span",{children:e.text}),(0,f.jsx)(z.A,{slug:i,label:`Copy link to ${e.author}'s reaction`})]},i)})})]})})},D=e=>{let{tributes:t,activeIndex:r,onSelect:i,momentSlug:o}=e;return(0,f.jsx)(g.G6,{children:t.map((e,t)=>(0,f.jsxs)("div",{style:{position:"relative"},children:[(0,f.jsxs)(g.oA,{type:"button",$active:r===t+1,onClick:()=>i(t+1),title:`View tribute by ${e.author}`,children:[(0,f.jsx)(g.dS,{$active:r===t+1,src:(0,p.VV)(e.author,t),alt:e.author,onError:e=>{e.currentTarget.onerror=null,e.currentTarget.src=(0,p.VV)(null,t)}}),(0,f.jsx)(g.qr,{children:e.author})]}),(0,f.jsx)("div",{style:{position:"absolute",top:-4,right:-4,transform:"scale(0.75)"},children:(0,f.jsx)(z.A,{slug:`${o}-t-${(0,C.L)(e.author)}`,label:`Copy link to ${e.author}'s tribute`})})]},`${e.author}-${t}`))})},V=e=>{try{return new URL(e).href}catch{return null}},I=e=>{try{return new URL(e).hostname.replace(/^www\./,"")}catch{return e}},N=e=>{const t=(0,_.pu)(e.sourceUrl),r=((e,t,r)=>{const i=e?V(e):null;if(i)return{text:I(i),href:i};const o=t?V(t):null;return e?{text:e,href:null!==o&&void 0!==o?o:void 0}:{text:r,href:null!==o&&void 0!==o?o:void 0}})(e.sourceLabel,e.sourceUrl,e.title),i={creditPrefix:"Original: ",creditText:r.text,creditHref:r.href};return[t?{kind:"original-video",src:(0,_.ZS)(e.sourceUrl),label:"Original",...i}:e.image?{kind:"original-image",src:e.image,label:"Original",...i}:{kind:"original-link",src:e.sourceUrl,label:"Original",...i},...e.tributes.slice(0,e.cap).filter(e=>!!e.file).map(t=>{return{kind:"video"===t.kind?"tribute-video":"tribute-image",src:(r=e.slug,i=t.file,i.startsWith("http")?i:`/momentTributes/${r}/${i}`),label:`Tribute by ${t.author}`,creditPrefix:"Tribute by ",creditText:`${t.author}${t.handle?` (@${t.handle})`:""}`,creditHref:t.url,tribute:t};var r,i})]},H=e=>{var t,r,n;let{moment:l}=e;const a=N(l),s="original-link"!==a[0].kind,[c,d]=(0,i.useState)(()=>!s&&a.length>1?1:0),[h,p]=(0,i.useState)(null),{reportVideoPlaying:x}=(0,u.d2)(),m=null!==(t=a[c])&&void 0!==t?t:a[0],b=a.slice(1),v=h===m.src,y=a.some(e=>"original-link"!==e.kind);(0,i.useEffect)(()=>{if("original-video"===m.kind)return()=>x(!1)},[m.kind,m.src,x]);const{hash:k}=(0,o.zy)(),j=(0,i.useRef)(!1);return(0,i.useEffect)(()=>{if(j.current||!k)return;const e=k.replace("#",""),t=`${l.slug}-t-`;if(!e.startsWith(t))return;const r=e.slice(t.length),i=b.findIndex(e=>e.tribute&&(0,C.L)(e.tribute.author)===r);i>=0&&(j.current=!0,d(i+1))},[k,l.slug,b]),(0,f.jsxs)(g._I,{children:[y&&(0,f.jsxs)(g.ir,{children:[(0,f.jsx)(g.wI,{children:(0,f.jsxs)(g.I4,{children:["original-video"===m.kind&&(0,f.jsx)("iframe",{src:m.src,title:l.sourceLabel||l.title,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,onLoad:e=>(0,_.cb)(e.currentTarget)},m.src),"original-image"===m.kind&&(v?(0,f.jsx)(g.cD,{href:l.sourceUrl,target:"_blank",rel:"noopener noreferrer",children:l.sourceLabel||"View the original"}):(0,f.jsx)("img",{src:m.src,alt:l.title,onError:()=>p(m.src)})),"original-link"===m.kind&&(0,f.jsx)(g.cD,{href:m.src,target:"_blank",rel:"noopener noreferrer",children:l.sourceLabel||"View the original"}),"tribute-image"===m.kind&&(v?(0,f.jsxs)(g.cD,{href:(null===(r=m.tribute)||void 0===r?void 0:r.url)||m.src,target:"_blank",rel:"noopener noreferrer",children:["View tribute by ",null===(n=m.tribute)||void 0===n?void 0:n.author]}):(0,f.jsx)("img",{src:m.src,alt:m.label,onError:()=>p(m.src)})),"tribute-video"===m.kind&&(0,f.jsx)("video",{src:m.src,controls:!0,preload:"none"})]})}),b.length>0&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(g.M4,{children:[(0,f.jsx)(A.fu,{onClick:()=>d(0===c?1:0),title:0===c?"See tributes":"See original","aria-label":0===c?"See tributes":"See original",children:(0,f.jsx)("i",{className:"fa fa-exchange","aria-hidden":"true"})}),0===c?"See tributes":"See original"]}),(0,f.jsx)(D,{tributes:b.map(e=>e.tribute),activeIndex:c,onSelect:d,momentSlug:l.slug})]})]}),(0,f.jsx)(E,{moment:l,view:m})]})},O=e=>{if(e.image)return e.image;const t=(0,_.pu)(e.sourceUrl);return t?`https://i.ytimg.com/vi/${t.id}/hqdefault.jpg`:void 0},F=e=>{let{moments:t,carousel:r}=e;const i=t.length,{pivotIndex:o,dragging:n,goTo:l,containerRef:a,itemRefs:s,isLoaded:c,containerHandlers:d}=r;return 0===i?(0,f.jsx)(g.Np,{children:"No moments yet, check back soon!"}):(0,f.jsx)(g.d5,{ref:a,$dragging:n,...d,children:t.map((e,t)=>{const r=t===o,i=r&&!n,a=Math.abs(t-o)<=2;return(0,f.jsx)(g.tm,{id:e.slug,$isPivot:r,$dragging:n,$isNear:a,ref:e=>{s.current[t]=e},onClick:r?void 0:()=>l(t),children:i?(0,f.jsx)(H,{moment:e},e.slug):(0,f.jsxs)(g.ie,{children:[(0,f.jsx)(g.OL,{$src:c(t)?O(e):void 0}),(0,f.jsxs)(g.jG,{children:[e.title," \xb7 ",e.date]})]})},e.slug)})})},P={milestone:"Ina's Milestones",myth:"Myth Moments",funny:"Funny Moments"},R=Object.keys(P),W=()=>{var e;const{muted:t}=(0,u.d2)(),r=(0,h.G)({muted:t,autoPlay:!0}),{data:p,loading:x,error:m}=(0,n.s)("/data/momentsData.json"),[b,v]=(0,i.useState)(null),[y,k]=(0,i.useState)(!1),[j,w]=(0,i.useState)(!1),[$,S]=(0,i.useState)(""),M=(0,i.useMemo)(()=>[...null!==p&&void 0!==p?p:[]].sort((e,t)=>new Date(e.date).getTime()-new Date(t.date).getTime()),[p]),_=(0,i.useMemo)(()=>M.filter(e=>(!b||e.category===b)&&(!y||e.tributes.length>0)),[M,b,y]),C=(0,i.useMemo)(()=>{const e=$.trim();if(!e)return _;if(e.length>=2&&e.startsWith('"')&&e.endsWith('"')){const t=e.slice(1,-1).toLowerCase();return _.filter(e=>e.context.toLowerCase().includes(t))}const t=e.toLowerCase();return _.filter(e=>e.title.toLowerCase().includes(t)||e.tributes.some(e=>e.author.toLowerCase().includes(t)))},[_,$]),A=(0,i.useMemo)(()=>Array.from(new Set(C.map(e=>new Date(e.date).getFullYear()))).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t),[C]),z=(0,l.H)(C.length,2,`${null!==b&&void 0!==b?b:"all"}-${y?"tributes":"any"}-${$}`),L=C[z.pivotIndex],E=L?new Date(L.date).getFullYear():null,{hash:D}=(0,o.zy)(),V=(0,i.useRef)(!1),{goTo:I}=z;(0,i.useEffect)(()=>{if(V.current||!D||0===M.length)return;const e=D.replace("#",""),t=M.find(t=>t.slug===e||e.startsWith(`${t.slug}-t-`)||e.startsWith(`${t.slug}-r-`));if(!t)return;if(b&&t.category!==b)return void v(null);if(y&&0===t.tributes.length)return void k(!1);const r=C.indexOf(t);r>=0&&(V.current=!0,I(r))},[D,M,C,b,y,I]);return(0,f.jsxs)(g.YZ,{children:[(0,f.jsx)(g.KP,{}),(0,f.jsx)(T,{momentKey:null!==(e=null===L||void 0===L?void 0:L.slug)&&void 0!==e?e:"",reactions:null===L||void 0===L?void 0:L.reactions}),(0,f.jsx)("audio",{ref:r,src:"/Vanilla.mp3",loop:!0,preload:"auto",style:{display:"none"}}),(0,f.jsxs)(a.Fp,{children:[(0,f.jsx)(a.Pn,{}),(0,f.jsx)(s.DG,{children:"Moments Gallery"}),(0,f.jsxs)(g.dr,{children:[(0,f.jsxs)(g.Z5,{children:[R.map(e=>{return(0,f.jsx)(c.d,{label:P[e],value:b===e,onChange:(t=e,e=>v(e?t:null)),labelColor:"var(--text-color)"},e);var t}),(0,f.jsx)(c.d,{label:"With Tributes",value:y,onChange:k,labelColor:"var(--text-color)"}),(0,f.jsx)(g.DO,{type:"search",value:$,onChange:e=>S(e.target.value),placeholder:'Title, tributer, or "keyword"',"aria-label":"Search moments"})]}),A.length>1&&(0,f.jsx)(g.tB,{children:A.map(e=>(0,f.jsx)(g.cX,{type:"button",$active:e===E,onClick:()=>(e=>{const t=C.findIndex(t=>new Date(t.date).getFullYear()===e);t>=0&&z.goTo(t)})(e),children:e},e))})]}),(0,f.jsxs)("div",{style:{flex:"0 0 auto",position:"relative"},children:[(0,f.jsxs)(a.uW,{"aria-label":"Show gallery usage hint",onClick:()=>w(e=>!e),title:"Show gallery usage hint",children:[(0,f.jsx)("i",{className:"fa fa-question-circle","aria-hidden":"true"}),(0,f.jsx)("span",{className:"btn-text",children:"Help"})]}),j&&(0,f.jsxs)(a.JY,{onClick:()=>w(!1),children:[(0,f.jsx)("p",{children:"Walk the wall with the arrows at either edge of the screen, or drag the exhibits directly. A piece with fan tributes shows a swap button underneath its frame: cycle it to compare the original against every tribute, or tap a tribute's avatar to jump straight to it."}),(0,f.jsxs)("p",{children:["Mascot art by ",(0,f.jsx)("b",{children:"takomonty"}),"."]})]})]})]}),x?(0,f.jsx)(d.c,{}):m?(0,f.jsxs)("div",{children:["Error loading moments: ",m.message]}):(0,f.jsx)(s.gQ,{style:{flex:1,minHeight:0,display:"flex",flexDirection:"column",position:"relative",zIndex:1,background:"transparent",paddingLeft:0,paddingRight:0},children:(0,f.jsx)(F,{moments:C,carousel:z})}),C.length>0&&(0,f.jsxs)(g.wQ,{children:[z.pivotIndex+1," / ",C.length]}),z.dragging&&(0,f.jsx)(s.hf,{}),(0,f.jsx)(g.Xj,{$side:"left",onMouseDown:e=>e.preventDefault(),onClick:()=>z.goTo(z.pivotIndex-1),disabled:0===z.pivotIndex,"aria-label":"Previous moment",children:(0,f.jsx)("i",{className:"fa fa-chevron-left","aria-hidden":"true"})}),(0,f.jsx)(g.Xj,{$side:"right",onMouseDown:e=>e.preventDefault(),onClick:()=>z.goTo(z.pivotIndex+1),disabled:z.pivotIndex>=C.length-1,"aria-label":"Next moment",children:(0,f.jsx)("i",{className:"fa fa-chevron-right","aria-hidden":"true"})})]})}},7825(e,t,r){r.d(t,{DB:()=>g,NE:()=>h,OL:()=>c,QS:()=>s,Vx:()=>m,Ys:()=>u,_u:()=>x,cm:()=>p,fu:()=>f,mc:()=>d,tD:()=>n});var i=r(403),o=r(5659);const n=(0,i.Ay)(o.LN)`
  height: 100vh;
  overflow-y: auto;
`,l=i.i7`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.15; }
`,a=i.i7`
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
          animation: ${a} 0.4s ease-out;
        `:""}}
  &:hover {
    transform: scale(1.06);
  }
`,g=i.Ay.div`
  width: 320px;
  height: 80%;
  border-radius: 10px;
  background: var(--dark-highlight);
  animation: ${l} 1.6s ease-in-out infinite;
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
`,f=i.Ay.button`
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
`,x=i.Ay.div`
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
`,m=i.Ay.div`
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
`},6088(e,t,r){r.d(t,{s:()=>o});var i=r(5043);const o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const[r,o]=(0,i.useState)(null),[n,l]=(0,i.useState)(!0),[a,s]=(0,i.useState)(null),c=async()=>{l(!0),s(null);try{const r=await fetch(e,t);if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);const i=await r.json();o(i)}catch(r){s(r)}finally{l(!1)}};(0,i.useEffect)(()=>{c()},[e,JSON.stringify(t)]);return{data:r,loading:n,error:a,refetch:()=>{c()}}}}}]);
//# sourceMappingURL=880.7af32dba.chunk.js.map
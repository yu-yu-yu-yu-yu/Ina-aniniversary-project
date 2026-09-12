"use strict";(globalThis.webpackChunkina=globalThis.webpackChunkina||[]).push([[389],{5011(e,r,n){n.d(r,{d:()=>c});n(5043);var o=n(403),t=n(579);const l=o.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  padding: 0.1em;
  cursor: pointer;
`,a=o.Ay.div`
  position: relative;
  border-radius: 100px;
  width: 38px;
  min-width: 38px;
  height: 24px;
  flex-shrink: 0;
  background-color: ${e=>{let{active:r,color:n}=e;return r?n:"var(--dark-highlight)"}};
  transition: background-color 0.2s linear;
  &.mobile {
    width: 28px;
    min-width: 28px;
    height: 16px;
  }
`,i=o.Ay.div`
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
`,s=o.Ay.span`
  color: ${e=>{let{labelColor:r}=e;return null!==r&&void 0!==r?r:"var(--text-color)"}};
  text-align: left;
  font: normal normal 300 25px/26px Montserrat;
  letter-spacing: 0;
  &.mobile {
    font: normal normal 300 13px/16px Montserrat;
  }
`,c=e=>{let{label:r,value:n,onChange:o,color:c="var(--dark-highlight)",labelColor:d,mobile:h}=e;const g=h?"mobile":"";return(0,t.jsxs)(l,{onClick:()=>o(!n),children:[(0,t.jsx)(a,{active:n,color:c,className:g,children:(0,t.jsx)(i,{active:n,color:c,className:g})}),(0,t.jsx)(s,{labelColor:d,className:g,children:r})]})}},9389(e,r,n){n.r(r),n.d(r,{default:()=>ne});var o=n(5043),t=n(7950),l=n(1688);const a=e=>e.performances.some(e=>"archived"===e.status)?"archived":e.performances.some(e=>"unofficially archived"===e.status)?"unofficially archived":"unarchived";var i=n(1472),s=n(2449),c=n(7362),d=n(403),h=n(984);const g={release:"#E91E8C",cover:"#9B59B6","Ina's original":"#E91E8C","Hololive's original":"#8E44AD","3rd Party":"#3498DB",karaoke:"#F39C12",concert:"#E74C3C",featured:"#F1C40F",banana:"#FFE135",archived:"#95A5A6","unofficially archived":"#E67E22",unarchived:"#C0392B",duo:"#1ABC9C",group:"#27AE60"},u=d.Ay.span`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 200;
  background-color: rgba(0, 0, 0, 0.7);
`,p=d.Ay.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 201;
  background: var(--light-background);
  border-radius: 15px;
  padding: 20px;
  width: min(90vw, 360px);
  max-height: 85vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,x=d.Ay.div`
  display: none;
  gap: 8px;
  align-items: center;
  flex-shrink: 0;

  @media only screen and (max-width: 700px) {
    display: flex;
  }
`,m=d.Ay.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  margin-bottom: 20px;
  @media only screen and (max-width: 700px) {
    display: none;
  }
`,f=d.Ay.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;
  padding-bottom: 4px;

  @media only screen and (max-width: 700px) {
    display: none;
  }
`,v=d.Ay.h3`
  font: normal normal 700 18px/24px Montserrat;
  color: var(--dark-highlight);
  letter-spacing: 0.5px;
  margin: 28px 0 12px;
  padding-bottom: 6px;
  border-bottom: 2px solid var(--dark-highlight);
`,b=d.Ay.button`
  font: normal normal 700 13px/18px Montserrat;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  background: ${e=>{let{active:r}=e;return r?"var(--light-highlight)":"var(--dark-highlight)"}};
  color: ${e=>{let{active:r}=e;return r?"var(--dark-highlight)":"var(--text-color)"}};
  border: 2px solid var(--light-highlight);
  border-radius: 10px;
  padding: 8px 16px;
  min-width: 120px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  flex-shrink: 0;
  &:hover {
    opacity: 0.8;
  }
`,y=d.Ay.button`
  background: none;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  width: 100%;
  text-align: center;
  font: normal normal 500 9px/13px Montserrat;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--text-color);
  opacity: ${e=>{let{canToggle:r}=e;return r?.85:.45}};
  cursor: ${e=>{let{canToggle:r}=e;return r?"pointer":"default"}};
  padding: 5px 0 2px;
  margin-top: 4px;
  display: block;
  transition:
    background-color 0.15s ease,
    color 0.15s ease,
    opacity 0.15s ease;
  &:hover {
    opacity: ${e=>{let{canToggle:r}=e;return r?1:.45}};
    ${e=>{let{canToggle:r}=e;return r&&"\n      background: var(--text-color);\n      color: var(--dark-highlight);\n    "}}
  }
`,j=d.Ay.div`
  z-index: 201;
  background: var(--light-background);
  border-radius: 12px;
  padding: 16px;
  width: 260px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35);
  border: 1px solid var(--dark-highlight);
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media only screen and (min-width: 701px) {
    width: auto;
    max-width: min(90vw, 680px);
    max-height: unset;
    overflow-y: visible;
  }
`,w=d.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media only screen and (min-width: 701px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,k=(d.Ay.i`
  color: var(--text-color);
  padding-right: 15px;
  font-size: 1.2em;
  cursor: pointer;
  flex-shrink: 0;
  &:hover {
    opacity: 0.7;
  }
`,d.Ay.div`
  font: normal normal 700 13px/18px Montserrat;
  letter-spacing: 0.5px;
  background: var(--dark-highlight);
  color: var(--text-color);
  border: 2px solid var(--light-highlight);
  border-radius: 10px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 7px;
  flex-shrink: 0;
  cursor: default;
  user-select: none;
`),C=d.Ay.div`
  font: normal normal 300 13px/16px Montserrat;
  color: var(--text-color);
  border-bottom: 1px solid var(--text-color);
  padding-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,A=d.Ay.div`
  padding-top: 5px;
  overflow-wrap: break-word;
  color: var(--text-color);
  text-align: left;
  font: normal normal 300 clamp(16px, 1vw, 20px) / 1.35 Mulish;
  letter-spacing: 0px;
  opacity: 1;
  white-space: pre-line;
`,F=d.Ay.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`,S=d.Ay.div`
  position: relative;
  background: var(--dark-highlight);
  color: var(--text-color);
  text-align: center;
  font: normal normal 700 clamp(18px, 1.1vw, 23px) / 1.3 Montserrat;
  letter-spacing: 0.5px;
  display: block;
  padding: 10px 12px;
  margin: -0.5rem -0.5rem 6px -0.5rem;
  border-bottom: 2px solid var(--light-highlight);

  & > * {
    color: inherit;
    -webkit-text-stroke: 0.5px var(--title-stroke);
    text-shadow: 0 1px 6px rgba(0, 0, 0, 0.35);
    overflow-wrap: break-word;
    word-break: break-word;
  }
`,I=d.Ay.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;

  @media only screen and (min-width: 2200px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media only screen and (min-width: 1700px) and (max-width: 2199px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`,E=d.Ay.div`
  display: flex;
  flex-direction: column;
  border: 2px solid var(--dark-background);
  border-radius: 15px;
  overflow: hidden;
  background: var(--light-background);
  min-width: 0;
`,$=d.Ay.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: var(--dark-background);

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0;
  }
`,M=d.Ay.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`,L=d.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
  padding-top: 8px;
`,P=(d.Ay.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 0;
  flex-wrap: wrap;
`,d.Ay.button`
  font: normal normal 600 10px/13px Montserrat;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  border: 1px solid var(--dark-highlight);
  border-radius: 5px;
  padding: 2px 7px;
  cursor: pointer;
  background: ${e=>{let{active:r}=e;return r?"var(--dark-highlight)":"transparent"}};
  color: ${e=>{let{active:r}=e;return r?"var(--text-color)":"var(--dark-highlight)"}};
  &:hover {
    opacity: 0.75;
  }
`,d.Ay.span`
  font: normal normal 600 10px/13px Montserrat;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: var(--dark-highlight);
  flex: 1;
  text-align: center;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,d.Ay.span`
  font: normal normal 600 11px/14px Montserrat;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: white;
  background: ${e=>{let{tagColor:r}=e;return r||"var(--dark-highlight)"}};
  border-radius: 6px;
  padding: 2px 8px;
`);var H=n(579);const O=e=>{const r=e.match(/[?&]v=([^&]+)/);return r?`https://www.youtube.com/embed/${r[1]}`:e},B=e=>{const r=e.match(/youtube\.com\/embed\/([^?&#]+)/);if(!r)return e;const n=e.match(/[?&]start=(\d+)/),o=`https://www.youtube.com/watch?v=${r[1]}`;return n?`${o}&t=${n[1]}`:o},N={karaoke:"Karaoke",concert:"Concert",cover:"Cover",release:"Release",featured:"Featured",banana:"Banana"},T=e=>{var r;if(e.label)return e.label;const n=null!==(r=N[e.context])&&void 0!==r?r:e.context;return e.name?`${n} \xb7 ${e.name}`:n},R=e=>{var r;return null!==(r=g[e.name?"concert":e.context])&&void 0!==r?r:g.concert},G=e=>{var r,n,t;let{song:d,globalShowOriginal:u=!1}=e;const{reportVideoPlaying:p}=(0,i.d2)(),{hash:x}=(0,l.zy)(),m=o.useRef(null),f=d.songName.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");const[v,b]=(0,o.useState)(!1),j=d.performances.filter(e=>e.link);(0,o.useEffect)(()=>{var e;if(x!==`#${f}`)return;null===(e=m.current)||void 0===e||e.scrollIntoView({behavior:"smooth",block:"center"}),b(!0);const r=setTimeout(()=>b(!1),1800);return()=>clearTimeout(r)},[x,f]);const w=(0,o.useMemo)(()=>{const e=j.map(e=>({link:e.link,label:T(e),isOriginal:!1})),r=d.originalSongLink?[{link:O(d.originalSongLink),label:"Original ver.",isOriginal:!0}]:[];return"Ina's original"===d.origin?[...r,...e]:[...e,...r]},[d]),[k,C]=(0,o.useState)(0);(0,o.useEffect)(()=>{const e=u||"Ina's original"===d.origin,r=w.findIndex(r=>e?r.isOriginal:!r.isOriginal);C(r>=0?r:0)},[u,w]);const I=null!==(r=w[k])&&void 0!==r?r:null,N=w.length>1,G=null!==(n=null===I||void 0===I?void 0:I.link)&&void 0!==n?n:null,D=null!==(t=null===I||void 0===I?void 0:I.label)&&void 0!==t?t:"",z=a(d),Y=(()=>{const e=new Set;return d.performances.filter(r=>{if("release"===r.context)return!1;const n=T(r);return!e.has(n)&&(e.add(n),!0)})})();return(0,H.jsxs)(E,{ref:m,id:f,style:v?{outline:"3px solid var(--light-highlight)"}:void 0,children:[G&&(0,H.jsx)($,{children:(e=>{return e.includes("youtube")?(0,H.jsx)(h.Zy,{src:(r=e,r.includes("?")?`${r}&enablejsapi=1`:`${r}?enablejsapi=1`),title:d.songName,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,onLoad:e=>(0,s.cb)(e.currentTarget)}):e.includes("mp4")?(0,H.jsx)("video",{style:{width:"100%",height:"100%",objectFit:"contain"},controls:!0,onPlay:()=>p(!0),onPause:()=>p(!1),onEnded:()=>p(!1),children:(0,H.jsx)("source",{src:"/songLinks/"+e,type:"video/mp4"})}):(0,H.jsx)(F,{src:"/songLinks/"+e,alt:d.songName});var r})(G)}),(0,H.jsxs)(M,{children:[(0,H.jsxs)(S,{children:[(0,H.jsx)(h.HM,{children:d.songName}),w.length>0&&(0,H.jsx)(y,{canToggle:N,onClick:N?()=>{N&&C(e=>(e+1)%w.length)}:void 0,children:N?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)("i",{className:"fa fa-chevron-left"})," ",D," ",(0,H.jsx)("i",{className:"fa fa-chevron-right"})]}):D}),(0,H.jsx)("div",{style:{position:"absolute",top:"50%",right:"10px",transform:"translateY(-50%)"},children:(0,H.jsx)(c.A,{slug:f,label:"Copy link to this song"})})]}),d.songInfo&&(0,H.jsx)(A,{children:d.originalSongLink?(0,H.jsx)("a",{href:B(d.originalSongLink),target:"_blank",rel:"noopener noreferrer",style:{color:"inherit",textDecoration:"underline"},children:d.songInfo}):d.songInfo}),d.coverInfo&&(0,H.jsx)(A,{children:d.coverInfo}),(0,H.jsxs)(L,{children:["Ina's original"===d.origin&&(0,H.jsx)(P,{tagColor:g["Ina's original"],children:"Ina's Original"}),"Hololive's original"===d.origin&&(0,H.jsx)(P,{tagColor:g["Hololive's original"],children:"Hololive's Original"}),Y.map((e,r)=>(0,H.jsx)(P,{tagColor:R(e),children:T(e)},r)),"unarchived"!==z&&(0,H.jsx)(P,{tagColor:g[z],children:z}),0===j.length&&"Ina's original"!==d.origin&&"Hololive's original"!==d.origin&&(0,H.jsx)(P,{tagColor:g.unarchived,children:"Unarchived"}),"solo"!==d.collab&&(0,H.jsx)(P,{tagColor:g[d.collab],children:d.collab})]})]})]})},D=e=>{let{SongData:r,showOriginal:n}=e;return(0,H.jsx)(I,{children:r.map((e,r)=>(0,H.jsx)(G,{song:e,globalShowOriginal:n},`${e.songName}${r}`))})};var z=n(4997),Y=n(2218),W=n(9372),U=n(5011),K=n(3536),q=n(4709),V=n(2154),X=n(6088);const Q=(e,r)=>{if("type"===r){const r=e.filter(e=>"Ina's original"===e.origin),n=e.filter(e=>"Hololive's original"===e.origin),o=e.filter(e=>"3rd Party"===e.origin&&e.performances.some(e=>"cover"===e.context)),t=e.filter(e=>"3rd Party"===e.origin&&!e.performances.some(e=>"cover"===e.context)),l=e.filter(e=>"banana"===e.origin);return[...r.length?[{label:"Ina's Original",songs:r}]:[],...o.length?[{label:"Covers",songs:o}]:[],...n.length?[{label:"Hololive's Original",songs:n}]:[],...t.length?[{label:"3rd Party",songs:t}]:[],...l.length?[{label:"Banana",songs:l}]:[]]}if("archive"===r){const r=e.filter(e=>"archived"===a(e)),n=e.filter(e=>"unofficially archived"===a(e)),o=e.filter(e=>"unarchived"===a(e));return[...r.length?[{label:"Archived",songs:r}]:[],...n.length?[{label:"Unofficially Archived",songs:n}]:[],...o.length?[{label:"Unarchived",songs:o}]:[]]}if("collab"===r){const r=e.filter(e=>"solo"===e.collab),n=e.filter(e=>"duo"===e.collab),o=e.filter(e=>"group"===e.collab);return[...r.length?[{label:"Solo",songs:r}]:[],...n.length?[{label:"Duo",songs:n}]:[],...o.length?[{label:"Group",songs:o}]:[]]}if("performance"===r){const r=[],n=e.filter(e=>e.performances.some(e=>"karaoke"===e.context)),o=e.filter(e=>e.performances.some(e=>"featured"===e.context)),t=e.filter(e=>e.performances.some(e=>"banana"===e.context));n.length&&r.push({label:"Karaoke",songs:n}),o.length&&r.push({label:"Featured",songs:o}),t.length&&r.push({label:"Banana",songs:t});const l=Array.from(new Set(e.flatMap(e=>e.performances.filter(e=>e.name).map(e=>e.name)))).sort();for(const a of l){const n=e.filter(e=>e.performances.some(e=>e.name===a));n.length&&r.push({label:a,songs:n})}return r}return[]},Z=async e=>{const r=e.filter(e=>{const r=e.performances[0];return(null===r||void 0===r?void 0:r.link)&&!r.link.includes("youtube")}).map(e=>new Promise(r=>{const n=new Image;n.src=`/songLinks/${e.performances[0].link}`,n.onerror=()=>r(),n.onload=()=>r()}));await Promise.allSettled(r)},_=e=>{let{label:r,icon:n,children:l}=e;const[a,i]=(0,o.useState)(!1),[s,c]=(0,o.useState)({top:0,left:0}),d=(0,o.useRef)(null),h=(0,o.useRef)(null);return(0,o.useEffect)(()=>{if(!a)return;const e=e=>{h.current&&!h.current.contains(e.target)&&d.current&&!d.current.contains(e.target)&&i(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[a]),(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(b,{ref:d,onClick:()=>{if(!a&&d.current){const e=d.current.getBoundingClientRect();c({top:e.bottom+8,left:e.left})}i(e=>!e)},children:[(0,H.jsx)("i",{className:`fa ${n}`})," ",r]}),a&&t.createPortal((0,H.jsx)(j,{ref:h,style:{position:"fixed",top:s.top,left:s.left},children:l}),document.body)]})},J=e=>{let{originFilter:r,setOrigin:n,contextFilter:o,setContext:t,sourceFilter:l,setSource:a,archiveFilter:i,setArchive:s,sources:c}=e;return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(w,{children:[(0,H.jsx)(U.d,{label:"Ina's Originals",value:"Ina's original"===r,onChange:n("Ina's original"),color:g["Ina's original"],mobile:!0}),(0,H.jsx)(U.d,{label:"Hololive's Originals",value:"Hololive's original"===r,onChange:n("Hololive's original"),color:g["Hololive's original"],mobile:!0}),(0,H.jsx)(U.d,{label:"3rd Partys",value:"3rd Party"===r,onChange:n("3rd Party"),color:g["3rd Party"],mobile:!0}),(0,H.jsx)(U.d,{label:"Banana",value:"banana"===r,onChange:n("banana"),color:g.banana,mobile:!0}),(0,H.jsx)(U.d,{label:"Covers",value:"cover"===o,onChange:t("cover"),color:g.cover,mobile:!0}),(0,H.jsx)(U.d,{label:"Karaoke",value:"karaoke"===o,onChange:t("karaoke"),color:g.karaoke,mobile:!0}),(0,H.jsx)(U.d,{label:"Concert",value:"concert"===o,onChange:t("concert"),color:g.concert,mobile:!0}),(0,H.jsx)(U.d,{label:"Featured",value:"featured"===o,onChange:t("featured"),color:g.featured,mobile:!0})]}),(0,H.jsx)(C,{children:"Archive"}),(0,H.jsxs)(w,{children:[(0,H.jsx)(U.d,{label:"Archived",value:"archived"===i,onChange:s("archived"),color:g.archived,mobile:!0}),(0,H.jsx)(U.d,{label:"Unofficial",value:"unofficially archived"===i,onChange:s("unofficially archived"),color:g["unofficially archived"],mobile:!0})]}),c.length>0&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(C,{children:"Source"}),(0,H.jsx)(w,{children:c.map(e=>(0,H.jsx)(U.d,{label:e,value:l===e,onChange:a(e),color:g.concert,mobile:!0},e))})]})]})},ee=e=>{let{groupBy:r,setGroupBy:n}=e;return(0,H.jsxs)(w,{children:[(0,H.jsx)(U.d,{label:"By Type",value:"type"===r,onChange:n("type"),color:g["Ina's original"],mobile:!0}),(0,H.jsx)(U.d,{label:"By Archive",value:"archive"===r,onChange:n("archive"),color:g.archived,mobile:!0}),(0,H.jsx)(U.d,{label:"By Collab",value:"collab"===r,onChange:n("collab"),color:g.duo,mobile:!0}),(0,H.jsx)(U.d,{label:"By Performance",value:"performance"===r,onChange:n("performance"),color:g.concert,mobile:!0})]})},re=()=>(0,H.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px",fontSize:"13px",color:"var(--text-color)",maxWidth:"280px"},children:[(0,H.jsxs)("div",{children:[(0,H.jsx)("strong",{style:{color:"var(--dark-highlight)"},children:"Search"}),(0,H.jsx)("p",{style:{margin:"4px 0 0"},children:"Type to filter by song name, artist, or performance source."})]}),(0,H.jsxs)("div",{children:[(0,H.jsx)("strong",{style:{color:"var(--dark-highlight)"},children:"Filters"}),(0,H.jsx)("p",{style:{margin:"4px 0 0"},children:"Filter by origin (Ina's, Hololive's, 3rd Party), performance type (Cover, Karaoke, Concert), or archive status."})]}),(0,H.jsxs)("div",{children:[(0,H.jsx)("strong",{style:{color:"var(--dark-highlight)"},children:"Group"}),(0,H.jsx)("p",{style:{margin:"4px 0 0"},children:"Group all songs by origin, archive status, collab type, or performance venue."})]}),(0,H.jsxs)("div",{children:[(0,H.jsx)("strong",{style:{color:"var(--dark-highlight)"},children:"Ina ver. / Orig. ver."}),(0,H.jsx)("p",{style:{margin:"4px 0 0"},children:"Globally switches all cards to show the original song version. Click the subtitle on any individual card to cycle through all available performances for that song."})]})]}),ne=()=>{const{muted:e,videoPlaying:r}=(0,i.d2)(),n=(0,V.G)({muted:e,autoPlay:!0,videoPaused:r}),{data:l,loading:s,error:c}=(0,X.s)("/data/songInfoData.json"),[d,g]=(0,o.useState)([]),[y,j]=(0,o.useState)([]),[w,A]=(0,o.useState)(!0),[F,S]=(0,o.useState)(""),I=(0,o.useRef)(0),E=(0,o.useRef)([]),[$,M]=(0,o.useState)(!1),[L,P]=(0,o.useState)(!1),[O,B]=(0,o.useState)(null),[N,T]=(0,o.useState)(null),[R,G]=(0,o.useState)(null),[U,ne]=(0,o.useState)("archived"),[oe,te]=(0,o.useState)("type"),[le,ae]=(0,o.useState)(4),ie=(0,o.useRef)(4),se=(0,o.useRef)(!1);(0,o.useEffect)(()=>{l&&g([...l].reverse())},[l]);const ce=(0,o.useMemo)(()=>{const e=new Set;return d.forEach(r=>r.performances.forEach(r=>{r.name&&e.add(r.name)})),Array.from(e).sort()},[d]),de=(0,o.useMemo)(()=>((e,r,n)=>{let o=e;if(r.originFilter&&(o=o.filter(e=>e.origin===r.originFilter)),r.contextFilter&&(o=o.filter(e=>e.performances.some(e=>e.context===r.contextFilter))),r.sourceFilter&&(o=o.filter(e=>e.performances.some(e=>e.name===r.sourceFilter))),r.archiveFilter&&(o=o.filter(e=>a(e)===r.archiveFilter)),n){const e=n.toLowerCase();o=o.filter(r=>{var n,o,t;return(null===(n=r.songName)||void 0===n?void 0:n.toLowerCase().includes(e))||(null===(o=r.songInfo)||void 0===o?void 0:o.toLowerCase().includes(e))||(null===(t=r.coverInfo)||void 0===t?void 0:t.toLowerCase().includes(e))||r.origin.toLowerCase().includes(e)||r.collab.toLowerCase().includes(e)||r.performances.some(r=>{var n;return r.context.toLowerCase().includes(e)||(null===(n=r.name)||void 0===n?void 0:n.toLowerCase().includes(e))})})}return o})(d,{originFilter:O,contextFilter:N,sourceFilter:R,archiveFilter:U},F),[d,O,N,R,U,F]);E.current=de,(0,o.useEffect)(()=>{if(!d.length||oe)return;const e=de.slice(0,4);Z(e).then(()=>{I.current=4,j(e),A(de.length>4)})},[de,oe]),(0,o.useEffect)(()=>{if(w&&y.length>0&&!oe){const e=requestAnimationFrame(()=>{document.documentElement.scrollHeight>window.innerHeight||he()});return()=>cancelAnimationFrame(e)}},[y.length,w,oe]);const he=async()=>{const e=E.current.slice(I.current,4+I.current);0!==e.length?(await Z(e),I.current+=4,j(r=>r.concat(e))):A(!1)},ge=(0,o.useMemo)(()=>oe?Q(de,oe):null,[de,oe]),ue=(0,o.useMemo)(()=>ge?ge.flatMap(e=>e.songs):[],[ge]),pe=(0,o.useRef)([]);pe.current=ue,(0,o.useEffect)(()=>{oe&&(ie.current=4,se.current=!1,ae(4))},[de,oe]);const xe=async()=>{if(se.current)return;se.current=!0;const e=pe.current.slice(ie.current,ie.current+4);e.length?(await Z(e),ie.current+=4,ae(ie.current),se.current=!1):se.current=!1};(0,o.useEffect)(()=>{if(!oe)return;if(le>=pe.current.length)return;const e=requestAnimationFrame(()=>{document.documentElement.scrollHeight>window.innerHeight||xe()});return()=>cancelAnimationFrame(e)},[le,oe,ue.length]);const me=(0,o.useMemo)(()=>oe?Q(ue.slice(0,le),oe):null,[ue,oe,le]),fe=(0,o.useCallback)((0,K.debounce)(e=>{S(e.target.value)},500),[]),ve={originFilter:O,setOrigin:e=>r=>B(r?e:null),contextFilter:N,setContext:e=>r=>T(r?e:null),sourceFilter:R,setSource:e=>r=>G(r?e:null),archiveFilter:U,setArchive:e=>r=>ne(r?e:null),sources:ce},be={groupBy:oe,setGroupBy:e=>r=>te(r?e:null)},ye=(0,H.jsx)(_,{label:"Filters",icon:"fa-filter",children:(0,H.jsx)(J,{...ve})}),je=(0,H.jsx)(_,{label:"Group",icon:"fa-th-list",children:(0,H.jsx)(ee,{...be})}),we=(0,H.jsx)(_,{label:"Help",icon:"fa-question-circle",children:(0,H.jsx)(re,{})}),ke=(0,H.jsxs)(b,{active:$,onClick:()=>M(e=>!e),children:[(0,H.jsx)("i",{className:"fa fa-exchange"}),$?"Orig. ver.":"Ina ver."]});return(0,H.jsxs)("div",{style:{minHeight:"100vh",background:"var(--background)"},children:[(0,H.jsx)("audio",{ref:n,src:"/\u6ce8\u6587\u306e\u5c11\u306a\u3044\u55ab\u8336\u5e97.mp3",loop:!0,preload:"auto",style:{display:"none"}}),(0,H.jsxs)(q.Fp,{children:[(0,H.jsx)(q.Pn,{}),(0,H.jsx)(h.ue,{children:"Ultimate Ina Playlist"}),(0,H.jsx)(x,{children:(0,H.jsxs)(q.uW,{onClick:()=>P(!0),children:[(0,H.jsx)("i",{className:"fa fa-filter"}),(0,H.jsx)("span",{className:"btn-text",children:" Filters"})]})})]}),L&&t.createPortal((0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(u,{onClick:()=>P(!1)}),(0,H.jsxs)(p,{children:[(0,H.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,H.jsx)("span",{style:{font:"normal normal 700 16px/20px Montserrat",color:"var(--text-color)"},children:"Filters & Search"}),(0,H.jsx)(b,{onClick:()=>P(!1),style:{minWidth:"unset",padding:"6px 12px"},children:(0,H.jsx)("i",{className:"fa fa-times"})})]}),d.length>0&&(0,H.jsxs)(k,{style:{justifyContent:"center"},children:[(0,H.jsx)("i",{className:"fa fa-music"})," Ina has sung:"," ",d.length," songs!"]}),(0,H.jsx)(h.IW,{onChange:fe,placeholder:"Search...",style:{marginBottom:0}}),(0,H.jsx)(C,{children:"Filters"}),(0,H.jsx)(J,{...ve}),(0,H.jsx)(C,{children:"Group"}),(0,H.jsx)(ee,{...be}),(0,H.jsx)(C,{children:"Version"}),(0,H.jsxs)(b,{active:$,onClick:()=>M(e=>!e),style:{width:"100%"},children:[(0,H.jsx)("i",{className:"fa fa-exchange"}),$?"Orig. ver.":"Ina ver."]}),(0,H.jsx)(C,{children:"Help"}),(0,H.jsx)(re,{})]})]}),document.body),s?(0,H.jsx)(Y.c,{}):c?(0,H.jsxs)("div",{children:["Error loading: ",c.message]}):(0,H.jsxs)(h.gQ,{children:[(0,H.jsxs)(m,{children:[(0,H.jsxs)(f,{children:[ye,je,ke,we,d.length>0&&(0,H.jsxs)(k,{children:[(0,H.jsx)("i",{className:"fa fa-music"})," Ina has sung:"," ",d.length," songs!"]})]}),(0,H.jsx)(h.IW,{onChange:fe,placeholder:"Search...",style:{marginBottom:0,flex:"1 1 0",maxWidth:"50%",marginLeft:"auto"}})]}),me?(0,H.jsx)(z.A,{style:{overflow:"hidden"},scrollThreshold:"50px",dataLength:Math.min(le,ue.length),next:xe,hasMore:le<ue.length,loader:(0,H.jsx)(h.aH,{children:(0,H.jsx)(Y.c,{})}),endMessage:(0,H.jsx)("p",{style:{textAlign:"center",color:"var(--ink-black)"},children:"Yay! You have seen it all"}),children:me.map(e=>{let{label:r,songs:n}=e;return(0,H.jsxs)(o.Fragment,{children:[(0,H.jsx)(v,{children:r}),(0,H.jsx)(D,{SongData:n,showOriginal:$})]},r)})}):(0,H.jsx)(z.A,{style:{overflow:"hidden"},scrollThreshold:"50px",dataLength:y.length,next:he,hasMore:w,loader:(0,H.jsx)(h.aH,{children:(0,H.jsx)(Y.c,{})}),endMessage:(0,H.jsx)("p",{style:{textAlign:"center",color:"var(--ink-black)"},children:"Yay! You have seen it all"}),children:(0,H.jsx)(D,{SongData:y,showOriginal:$})}),(0,H.jsx)(W.A,{})]})]})}},2154(e,r,n){n.d(r,{G:()=>t});var o=n(5043);const t=e=>{let{muted:r,volume:n=.1,autoPlay:t=!1,videoPaused:l=!1}=e;const a=(0,o.useRef)(null);return(0,o.useEffect)(()=>{a.current&&(a.current.volume=n)},[n]),(0,o.useEffect)(()=>{const e=a.current;e&&(l?e.pause():(r||e.paused)&&(r?e.pause():e.play().catch(()=>{})))},[r,l]),(0,o.useEffect)(()=>{if(!t)return;let e=null,n=!1;return a.current&&!r&&a.current.play().catch(()=>{n||(e=()=>{a.current&&!r&&a.current.play().catch(()=>{}),e&&window.removeEventListener("click",e)},window.addEventListener("click",e))}),()=>{n=!0,e&&window.removeEventListener("click",e)}},[t,r]),a}}}]);
//# sourceMappingURL=389.70309498.chunk.js.map
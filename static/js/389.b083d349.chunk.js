"use strict";(globalThis.webpackChunkina=globalThis.webpackChunkina||[]).push([[389],{5011(e,r,n){n.d(r,{d:()=>c});n(5043);var o=n(403),l=n(579);const t=o.Ay.div`
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
  transform: translateY(-50%) translateX(${e=>{let{active:r}=e;return r?"14px":"0px"}});
  transition: transform 0.2s linear;
  &.mobile {
    width: 12px;
    height: 12px;
    left: 2px;
    transform: translateY(-50%) translateX(${e=>{let{active:r}=e;return r?"12px":"0px"}});
  }
`,s=o.Ay.span`
  color: ${e=>{let{labelColor:r}=e;return null!==r&&void 0!==r?r:"var(--text-color)"}};
  text-align: left;
  font: normal normal 300 25px/26px Montserrat;
  letter-spacing: 0;
  &.mobile {
    font: normal normal 300 13px/16px Montserrat;
  }
`,c=e=>{let{label:r,value:n,onChange:o,color:c="var(--dark-highlight)",labelColor:d,mobile:h}=e;const g=h?"mobile":"";return(0,l.jsxs)(t,{onClick:()=>o(!n),children:[(0,l.jsx)(a,{active:n,color:c,className:g,children:(0,l.jsx)(i,{active:n,color:c,className:g})}),(0,l.jsx)(s,{labelColor:d,className:g,children:r})]})}},9389(e,r,n){n.r(r),n.d(r,{default:()=>J});var o=n(5043),l=n(7950);const t=e=>e.performances.some(e=>"archived"===e.status)?"archived":e.performances.some(e=>"unofficially archived"===e.status)?"unofficially archived":"unarchived";var a=n(1472),i=n(403),s=n(984);const c={release:"#E91E8C",cover:"#9B59B6","Ina's original":"#E91E8C","Hololive's original":"#8E44AD","3rd Party":"#3498DB",karaoke:"#F39C12",concert:"#E74C3C",featured:"#F1C40F",banana:"#FFE135",archived:"#95A5A6","unofficially archived":"#E67E22",unarchived:"#C0392B",duo:"#1ABC9C",group:"#27AE60"},d=i.Ay.span`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 200;
  background-color: rgba(0, 0, 0, 0.7);
`,h=i.Ay.div`
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
`,g=i.Ay.div`
  display: none;
  gap: 8px;
  align-items: center;
  flex-shrink: 0;

  @media only screen and (max-width: 700px) {
    display: flex;
  }
`,x=i.Ay.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  margin-bottom: 20px;
  @media only screen and (max-width: 700px) {
    display: none;
  }
`,u=i.Ay.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;
  padding-bottom: 4px;

  @media only screen and (max-width: 700px) {
    display: none;
  }
`,p=i.Ay.h3`
  font: normal normal 700 18px/24px Montserrat;
  color: var(--dark-highlight);
  letter-spacing: 0.5px;
  margin: 28px 0 12px;
  padding-bottom: 6px;
  border-bottom: 2px solid var(--dark-highlight);
`,m=i.Ay.button`
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
`,f=i.Ay.button`
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
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
  &:hover {
    opacity: ${e=>{let{canToggle:r}=e;return r?1:.45}};
    ${e=>{let{canToggle:r}=e;return r&&"\n      background: var(--text-color);\n      color: var(--dark-highlight);\n    "}}
  }
`,v=i.Ay.div`
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
`,b=i.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media only screen and (min-width: 701px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,y=(i.Ay.i`
  color: var(--text-color);
  padding-right: 15px;
  font-size: 1.2em;
  cursor: pointer;
  flex-shrink: 0;
  &:hover {
    opacity: 0.7;
  }
`,i.Ay.div`
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
`),j=i.Ay.div`
  font: normal normal 300 13px/16px Montserrat;
  color: var(--text-color);
  border-bottom: 1px solid var(--text-color);
  padding-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,k=i.Ay.div`
  padding-top: 5px;
  overflow-wrap: break-word;
   color: var(--text-color);
  text-align: left;
  font: normal normal 300 16px/22px Mulish;
  letter-spacing: 0px;
  opacity: 1;
  white-space: pre-line;
`,w=i.Ay.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,C=i.Ay.div`
  background: var(--dark-highlight);
  color: var(--text-color);
  text-align: center;
  font: normal normal 700 18px/24px Montserrat;
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
`,A=i.Ay.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`,F=i.Ay.div`
  display: flex;
  flex-direction: column;
  border: 2px solid var(--dark-background);
  border-radius: 15px;
  overflow: hidden;
  background: var(--light-background);
  min-width: 0;
`,S=i.Ay.div`
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
`,I=i.Ay.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`,E=i.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
  padding-top: 8px;
`,M=(i.Ay.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 0;
  flex-wrap: wrap;
`,i.Ay.button`
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
`,i.Ay.span`
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
`,i.Ay.span`
  font: normal normal 600 11px/14px Montserrat;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: white;
  background: ${e=>{let{tagColor:r}=e;return r||"var(--dark-highlight)"}};
  border-radius: 6px;
  padding: 2px 8px;
`);var $=n(579);const P=e=>{const r=e.match(/[?&]v=([^&]+)/);return r?`https://www.youtube.com/embed/${r[1]}`:e},L=e=>{const r=e.match(/youtube\.com\/embed\/([^?&#]+)/);if(!r)return e;const n=e.match(/[?&]start=(\d+)/),o=`https://www.youtube.com/watch?v=${r[1]}`;return n?`${o}&t=${n[1]}`:o},H={karaoke:"Karaoke",concert:"Concert",cover:"Cover",release:"Release",featured:"Featured",banana:"Banana"},O=e=>{var r;if(e.label)return e.label;const n=null!==(r=H[e.context])&&void 0!==r?r:e.context;return e.name?`${n} \xb7 ${e.name}`:n},B=e=>{var r;return null!==(r=c[e.name?"concert":e.context])&&void 0!==r?r:c.concert},N=e=>{var r,n,l;let{song:i,globalShowOriginal:d=!1}=e;const{reportVideoPlaying:h}=(0,a.d2)(),g=i.performances.filter(e=>e.link),x=(0,o.useMemo)(()=>{const e=g.map(e=>({link:e.link,label:O(e),isOriginal:!1})),r=i.originalSongLink?[{link:P(i.originalSongLink),label:"Original ver.",isOriginal:!0}]:[];return"Ina's original"===i.origin?[...r,...e]:[...e,...r]},[i]),[u,p]=(0,o.useState)(0);(0,o.useEffect)(()=>{if(d){const e=x.findIndex(e=>e.isOriginal);p(e>=0?e:0)}else{const e=x.findIndex(e=>!e.isOriginal);p(e>=0?e:0)}},[d,x]);const m=null!==(r=x[u])&&void 0!==r?r:null,v=x.length>1,b=null!==(n=null===m||void 0===m?void 0:m.link)&&void 0!==n?n:null,y=null!==(l=null===m||void 0===m?void 0:m.label)&&void 0!==l?l:"",j=t(i),A=(()=>{const e=new Set;return i.performances.filter(r=>{if("release"===r.context)return!1;const n=O(r);return!e.has(n)&&(e.add(n),!0)})})();return(0,$.jsxs)(F,{children:[b&&(0,$.jsx)(S,{children:(e=>{return e.includes("youtube")?(0,$.jsx)(s.Zy,{src:(r=e,r.includes("?")?`${r}&enablejsapi=1`:`${r}?enablejsapi=1`),title:i.songName,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):e.includes("mp4")?(0,$.jsx)("video",{style:{width:"100%",height:"100%",objectFit:"cover"},controls:!0,onPlay:()=>h(!0),onPause:()=>h(!1),onEnded:()=>h(!1),children:(0,$.jsx)("source",{src:"/songLinks/"+e,type:"video/mp4"})}):(0,$.jsx)(w,{src:"/songLinks/"+e,alt:i.songName});var r})(b)}),(0,$.jsxs)(I,{children:[(0,$.jsxs)(C,{children:[(0,$.jsx)(s.HM,{children:i.songName}),x.length>0&&(0,$.jsx)(f,{canToggle:v,onClick:v?()=>{v&&p(e=>(e+1)%x.length)}:void 0,children:v?(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)("i",{className:"fa fa-chevron-left"})," ",y," ",(0,$.jsx)("i",{className:"fa fa-chevron-right"})]}):y})]}),i.songInfo&&(0,$.jsx)(k,{children:i.originalSongLink?(0,$.jsx)("a",{href:L(i.originalSongLink),target:"_blank",rel:"noopener noreferrer",style:{color:"inherit",textDecoration:"underline"},children:i.songInfo}):i.songInfo}),i.coverInfo&&(0,$.jsx)(k,{children:i.coverInfo}),(0,$.jsxs)(E,{children:["Ina's original"===i.origin&&(0,$.jsx)(M,{tagColor:c["Ina's original"],children:"Ina's Original"}),"Hololive's original"===i.origin&&(0,$.jsx)(M,{tagColor:c["Hololive's original"],children:"Hololive's Original"}),A.map((e,r)=>(0,$.jsx)(M,{tagColor:B(e),children:O(e)},r)),"unarchived"!==j&&(0,$.jsx)(M,{tagColor:c[j],children:j}),0===g.length&&"Ina's original"!==i.origin&&"Hololive's original"!==i.origin&&(0,$.jsx)(M,{tagColor:c.unarchived,children:"Unarchived"}),"solo"!==i.collab&&(0,$.jsx)(M,{tagColor:c[i.collab],children:i.collab})]})]})]})},T=e=>{let{SongData:r,showOriginal:n}=e;return(0,$.jsx)(A,{children:r.map((e,r)=>(0,$.jsx)(N,{song:e,globalShowOriginal:n},`${e.songName}${r}`))})};var G=n(4997),R=n(2218),D=n(9372),z=n(5011),W=n(3536),Y=n(4709),U=n(2154),K=n(6088);const q=(e,r)=>{if("type"===r){const r=e.filter(e=>"Ina's original"===e.origin),n=e.filter(e=>"Hololive's original"===e.origin),o=e.filter(e=>"3rd Party"===e.origin&&e.performances.some(e=>"cover"===e.context)),l=e.filter(e=>"3rd Party"===e.origin&&!e.performances.some(e=>"cover"===e.context)),t=e.filter(e=>"banana"===e.origin);return[...r.length?[{label:"Ina's Original",songs:r}]:[],...o.length?[{label:"Covers",songs:o}]:[],...n.length?[{label:"Hololive's Original",songs:n}]:[],...l.length?[{label:"3rd Party",songs:l}]:[],...t.length?[{label:"Banana",songs:t}]:[]]}if("archive"===r){const r=e.filter(e=>"archived"===t(e)),n=e.filter(e=>"unofficially archived"===t(e)),o=e.filter(e=>"unarchived"===t(e));return[...r.length?[{label:"Archived",songs:r}]:[],...n.length?[{label:"Unofficially Archived",songs:n}]:[],...o.length?[{label:"Unarchived",songs:o}]:[]]}if("collab"===r){const r=e.filter(e=>"solo"===e.collab),n=e.filter(e=>"duo"===e.collab),o=e.filter(e=>"group"===e.collab);return[...r.length?[{label:"Solo",songs:r}]:[],...n.length?[{label:"Duo",songs:n}]:[],...o.length?[{label:"Group",songs:o}]:[]]}if("performance"===r){const r=[],n=e.filter(e=>e.performances.some(e=>"karaoke"===e.context)),o=e.filter(e=>e.performances.some(e=>"featured"===e.context)),l=e.filter(e=>e.performances.some(e=>"banana"===e.context));n.length&&r.push({label:"Karaoke",songs:n}),o.length&&r.push({label:"Featured",songs:o}),l.length&&r.push({label:"Banana",songs:l});const t=Array.from(new Set(e.flatMap(e=>e.performances.filter(e=>e.name).map(e=>e.name)))).sort();for(const a of t){const n=e.filter(e=>e.performances.some(e=>e.name===a));n.length&&r.push({label:a,songs:n})}return r}return[]},V=async e=>{const r=e.filter(e=>{const r=e.performances[0];return(null===r||void 0===r?void 0:r.link)&&!r.link.includes("youtube")}).map(e=>new Promise(r=>{const n=new Image;n.src=`/songLinks/${e.performances[0].link}`,n.onerror=()=>r(),n.onload=()=>r()}));await Promise.allSettled(r)},X=e=>{let{label:r,icon:n,children:t}=e;const[a,i]=(0,o.useState)(!1),[s,c]=(0,o.useState)({top:0,left:0}),d=(0,o.useRef)(null),h=(0,o.useRef)(null);return(0,o.useEffect)(()=>{if(!a)return;const e=e=>{h.current&&!h.current.contains(e.target)&&d.current&&!d.current.contains(e.target)&&i(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[a]),(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(m,{ref:d,onClick:()=>{if(!a&&d.current){const e=d.current.getBoundingClientRect();c({top:e.bottom+8,left:e.left})}i(e=>!e)},children:[(0,$.jsx)("i",{className:`fa ${n}`})," ",r]}),a&&l.createPortal((0,$.jsx)(v,{ref:h,style:{position:"fixed",top:s.top,left:s.left},children:t}),document.body)]})},Q=e=>{let{originFilter:r,setOrigin:n,contextFilter:o,setContext:l,sourceFilter:t,setSource:a,archiveFilter:i,setArchive:s,sources:d}=e;return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(b,{children:[(0,$.jsx)(z.d,{label:"Ina's Originals",value:"Ina's original"===r,onChange:n("Ina's original"),color:c["Ina's original"],mobile:!0}),(0,$.jsx)(z.d,{label:"Hololive's Originals",value:"Hololive's original"===r,onChange:n("Hololive's original"),color:c["Hololive's original"],mobile:!0}),(0,$.jsx)(z.d,{label:"3rd Partys",value:"3rd Party"===r,onChange:n("3rd Party"),color:c["3rd Party"],mobile:!0}),(0,$.jsx)(z.d,{label:"Banana",value:"banana"===r,onChange:n("banana"),color:c.banana,mobile:!0}),(0,$.jsx)(z.d,{label:"Covers",value:"cover"===o,onChange:l("cover"),color:c.cover,mobile:!0}),(0,$.jsx)(z.d,{label:"Karaoke",value:"karaoke"===o,onChange:l("karaoke"),color:c.karaoke,mobile:!0}),(0,$.jsx)(z.d,{label:"Concert",value:"concert"===o,onChange:l("concert"),color:c.concert,mobile:!0}),(0,$.jsx)(z.d,{label:"Featured",value:"featured"===o,onChange:l("featured"),color:c.featured,mobile:!0})]}),(0,$.jsx)(j,{children:"Archive"}),(0,$.jsxs)(b,{children:[(0,$.jsx)(z.d,{label:"Archived",value:"archived"===i,onChange:s("archived"),color:c.archived,mobile:!0}),(0,$.jsx)(z.d,{label:"Unofficial",value:"unofficially archived"===i,onChange:s("unofficially archived"),color:c["unofficially archived"],mobile:!0})]}),d.length>0&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(j,{children:"Source"}),(0,$.jsx)(b,{children:d.map(e=>(0,$.jsx)(z.d,{label:e,value:t===e,onChange:a(e),color:c.concert,mobile:!0},e))})]})]})},Z=e=>{let{groupBy:r,setGroupBy:n}=e;return(0,$.jsxs)(b,{children:[(0,$.jsx)(z.d,{label:"By Type",value:"type"===r,onChange:n("type"),color:c["Ina's original"],mobile:!0}),(0,$.jsx)(z.d,{label:"By Archive",value:"archive"===r,onChange:n("archive"),color:c.archived,mobile:!0}),(0,$.jsx)(z.d,{label:"By Collab",value:"collab"===r,onChange:n("collab"),color:c.duo,mobile:!0}),(0,$.jsx)(z.d,{label:"By Performance",value:"performance"===r,onChange:n("performance"),color:c.concert,mobile:!0})]})},_=()=>(0,$.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px",fontSize:"13px",color:"var(--text-color)",maxWidth:"280px"},children:[(0,$.jsxs)("div",{children:[(0,$.jsx)("strong",{style:{color:"var(--dark-highlight)"},children:"Search"}),(0,$.jsx)("p",{style:{margin:"4px 0 0"},children:"Type to filter by song name, artist, or performance source."})]}),(0,$.jsxs)("div",{children:[(0,$.jsx)("strong",{style:{color:"var(--dark-highlight)"},children:"Filters"}),(0,$.jsx)("p",{style:{margin:"4px 0 0"},children:"Filter by origin (Ina's, Hololive's, 3rd Party), performance type (Cover, Karaoke, Concert), or archive status."})]}),(0,$.jsxs)("div",{children:[(0,$.jsx)("strong",{style:{color:"var(--dark-highlight)"},children:"Group"}),(0,$.jsx)("p",{style:{margin:"4px 0 0"},children:"Group all songs by origin, archive status, collab type, or performance venue."})]}),(0,$.jsxs)("div",{children:[(0,$.jsx)("strong",{style:{color:"var(--dark-highlight)"},children:"Ina ver. / Orig. ver."}),(0,$.jsx)("p",{style:{margin:"4px 0 0"},children:"Globally switches all cards to show the original song version. Click the subtitle on any individual card to cycle through all available performances for that song."})]})]}),J=()=>{const{muted:e,videoPlaying:r}=(0,a.d2)(),n=(0,U.G)({muted:e,autoPlay:!0,videoPaused:r}),{data:i,loading:c,error:f}=(0,K.s)("/data/songInfoData.json"),[v,b]=(0,o.useState)([]),[k,w]=(0,o.useState)([]),[C,A]=(0,o.useState)(!0),[F,S]=(0,o.useState)(""),I=(0,o.useRef)(0),E=(0,o.useRef)([]),[M,P]=(0,o.useState)(!1),[L,H]=(0,o.useState)(!1),[O,B]=(0,o.useState)(null),[N,z]=(0,o.useState)(null),[J,ee]=(0,o.useState)(null),[re,ne]=(0,o.useState)("archived"),[oe,le]=(0,o.useState)("type"),[te,ae]=(0,o.useState)(4),ie=(0,o.useRef)(4),se=(0,o.useRef)(!1);(0,o.useEffect)(()=>{i&&b([...i].reverse())},[i]);const ce=(0,o.useMemo)(()=>{const e=new Set;return v.forEach(r=>r.performances.forEach(r=>{r.name&&e.add(r.name)})),Array.from(e).sort()},[v]),de=(0,o.useMemo)(()=>((e,r,n)=>{let o=e;if(r.originFilter&&(o=o.filter(e=>e.origin===r.originFilter)),r.contextFilter&&(o=o.filter(e=>e.performances.some(e=>e.context===r.contextFilter))),r.sourceFilter&&(o=o.filter(e=>e.performances.some(e=>e.name===r.sourceFilter))),r.archiveFilter&&(o=o.filter(e=>t(e)===r.archiveFilter)),n){const e=n.toLowerCase();o=o.filter(r=>{var n,o,l;return(null===(n=r.songName)||void 0===n?void 0:n.toLowerCase().includes(e))||(null===(o=r.songInfo)||void 0===o?void 0:o.toLowerCase().includes(e))||(null===(l=r.coverInfo)||void 0===l?void 0:l.toLowerCase().includes(e))||r.origin.toLowerCase().includes(e)||r.collab.toLowerCase().includes(e)||r.performances.some(r=>{var n;return r.context.toLowerCase().includes(e)||(null===(n=r.name)||void 0===n?void 0:n.toLowerCase().includes(e))})})}return o})(v,{originFilter:O,contextFilter:N,sourceFilter:J,archiveFilter:re},F),[v,O,N,J,re,F]);E.current=de,(0,o.useEffect)(()=>{if(!v.length||oe)return;const e=de.slice(0,4);V(e).then(()=>{I.current=4,w(e),A(de.length>4)})},[de,oe]),(0,o.useEffect)(()=>{if(C&&k.length>0&&!oe){const e=requestAnimationFrame(()=>{document.documentElement.scrollHeight>window.innerHeight||he()});return()=>cancelAnimationFrame(e)}},[k.length,C,oe]);const he=async()=>{const e=E.current.slice(I.current,4+I.current);0!==e.length?(await V(e),I.current+=4,w(r=>r.concat(e))):A(!1)},ge=(0,o.useMemo)(()=>oe?q(de,oe):null,[de,oe]),xe=(0,o.useMemo)(()=>ge?ge.flatMap(e=>e.songs):[],[ge]),ue=(0,o.useRef)([]);ue.current=xe,(0,o.useEffect)(()=>{oe&&(ie.current=4,se.current=!1,ae(4))},[de,oe]);const pe=async()=>{if(se.current)return;se.current=!0;const e=ue.current.slice(ie.current,ie.current+4);e.length?(await V(e),ie.current+=4,ae(ie.current),se.current=!1):se.current=!1};(0,o.useEffect)(()=>{if(!oe)return;if(te>=ue.current.length)return;const e=requestAnimationFrame(()=>{document.documentElement.scrollHeight>window.innerHeight||pe()});return()=>cancelAnimationFrame(e)},[te,oe,xe.length]);const me=(0,o.useMemo)(()=>oe?q(xe.slice(0,te),oe):null,[xe,oe,te]),fe=(0,o.useCallback)((0,W.debounce)(e=>{S(e.target.value)},500),[]),ve={originFilter:O,setOrigin:e=>r=>B(r?e:null),contextFilter:N,setContext:e=>r=>z(r?e:null),sourceFilter:J,setSource:e=>r=>ee(r?e:null),archiveFilter:re,setArchive:e=>r=>ne(r?e:null),sources:ce},be={groupBy:oe,setGroupBy:e=>r=>le(r?e:null)},ye=(0,$.jsx)(X,{label:"Filters",icon:"fa-filter",children:(0,$.jsx)(Q,{...ve})}),je=(0,$.jsx)(X,{label:"Group",icon:"fa-th-list",children:(0,$.jsx)(Z,{...be})}),ke=(0,$.jsx)(X,{label:"Help",icon:"fa-question-circle",children:(0,$.jsx)(_,{})}),we=(0,$.jsxs)(m,{active:M,onClick:()=>P(e=>!e),children:[(0,$.jsx)("i",{className:"fa fa-exchange"}),M?"Orig. ver.":"Ina ver."]});return(0,$.jsxs)("div",{style:{minHeight:"100vh",background:"var(--background)"},children:[(0,$.jsx)("audio",{ref:n,src:"/Vanilla.mp3",loop:!0,preload:"auto",style:{display:"none"}}),(0,$.jsxs)(Y.Fp,{children:[(0,$.jsx)(Y.Pn,{}),(0,$.jsx)(s.ue,{children:"Ultimate Ina Playlist"}),(0,$.jsx)(g,{children:(0,$.jsxs)(Y.uW,{onClick:()=>H(!0),children:[(0,$.jsx)("i",{className:"fa fa-filter"}),(0,$.jsx)("span",{className:"btn-text",children:" Filters"})]})})]}),L&&l.createPortal((0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(d,{onClick:()=>H(!1)}),(0,$.jsxs)(h,{children:[(0,$.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,$.jsx)("span",{style:{font:"normal normal 700 16px/20px Montserrat",color:"var(--text-color)"},children:"Filters & Search"}),(0,$.jsx)(m,{onClick:()=>H(!1),style:{minWidth:"unset",padding:"6px 12px"},children:(0,$.jsx)("i",{className:"fa fa-times"})})]}),v.length>0&&(0,$.jsxs)(y,{style:{justifyContent:"center"},children:[(0,$.jsx)("i",{className:"fa fa-music"})," Ina has sung: ",v.length," songs!"]}),(0,$.jsx)(s.IW,{onChange:fe,placeholder:"Search...",style:{marginBottom:0}}),(0,$.jsx)(j,{children:"Filters"}),(0,$.jsx)(Q,{...ve}),(0,$.jsx)(j,{children:"Group"}),(0,$.jsx)(Z,{...be}),(0,$.jsx)(j,{children:"Version"}),(0,$.jsxs)(m,{active:M,onClick:()=>P(e=>!e),style:{width:"100%"},children:[(0,$.jsx)("i",{className:"fa fa-exchange"}),M?"Orig. ver.":"Ina ver."]}),(0,$.jsx)(j,{children:"Help"}),(0,$.jsx)(_,{})]})]}),document.body),c?(0,$.jsx)(R.c,{}):f?(0,$.jsxs)("div",{children:["Error loading: ",f.message]}):(0,$.jsxs)(s.gQ,{children:[(0,$.jsxs)(x,{children:[(0,$.jsxs)(u,{children:[ye,je,we,ke,v.length>0&&(0,$.jsxs)(y,{children:[(0,$.jsx)("i",{className:"fa fa-music"})," Ina has sung: ",v.length," songs!"]})]}),(0,$.jsx)(s.IW,{onChange:fe,placeholder:"Search...",style:{marginBottom:0,flex:"1 1 0",maxWidth:"50%",marginLeft:"auto"}})]}),me?(0,$.jsx)(G.A,{style:{overflow:"hidden"},scrollThreshold:"50px",dataLength:Math.min(te,xe.length),next:pe,hasMore:te<xe.length,loader:(0,$.jsx)(s.aH,{children:(0,$.jsx)(R.c,{})}),endMessage:(0,$.jsx)("p",{style:{textAlign:"center",color:"var(--ink-black)"},children:"Yay! You have seen it all"}),children:me.map(e=>{let{label:r,songs:n}=e;return(0,$.jsxs)(o.Fragment,{children:[(0,$.jsx)(p,{children:r}),(0,$.jsx)(T,{SongData:n,showOriginal:M})]},r)})}):(0,$.jsx)(G.A,{style:{overflow:"hidden"},scrollThreshold:"50px",dataLength:k.length,next:he,hasMore:C,loader:(0,$.jsx)(s.aH,{children:(0,$.jsx)(R.c,{})}),endMessage:(0,$.jsx)("p",{style:{textAlign:"center",color:"var(--ink-black)"},children:"Yay! You have seen it all"}),children:(0,$.jsx)(T,{SongData:k,showOriginal:M})}),(0,$.jsx)(D.A,{})]})]})}},2154(e,r,n){n.d(r,{G:()=>l});var o=n(5043);const l=e=>{let{muted:r,volume:n=.1,autoPlay:l=!1,videoPaused:t=!1}=e;const a=(0,o.useRef)(null);return(0,o.useEffect)(()=>{a.current&&(a.current.volume=n)},[n]),(0,o.useEffect)(()=>{const e=a.current;e&&(t?e.pause():(r||e.paused)&&(r?e.pause():e.play().catch(()=>{})))},[r,t]),(0,o.useEffect)(()=>{if(!l)return;let e=null,n=!1;return a.current&&!r&&a.current.play().catch(()=>{n||(e=()=>{a.current&&!r&&a.current.play().catch(()=>{}),e&&window.removeEventListener("click",e)},window.addEventListener("click",e))}),()=>{n=!0,e&&window.removeEventListener("click",e)}},[l,r]),a}}}]);
//# sourceMappingURL=389.b083d349.chunk.js.map
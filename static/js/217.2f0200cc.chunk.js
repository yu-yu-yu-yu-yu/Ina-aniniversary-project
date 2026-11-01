"use strict";(globalThis.webpackChunkina=globalThis.webpackChunkina||[]).push([[217],{3402(e,r,n){n.d(r,{W:()=>t});n(5043);var l=n(9773),o=n(1472),a=n(579);const t=e=>{let{src:r,pauseOnVideo:n=!1}=e;const{muted:t,videoPlaying:i}=(0,o.d2)(),s=(0,l.G)({muted:t,autoPlay:!0,videoPaused:n&&i});return(0,a.jsx)("audio",{ref:s,src:""+r,loop:!0,preload:"auto",style:{display:"none"}})}},5011(e,r,n){n.d(r,{d:()=>c});n(5043);var l=n(403),o=n(579);const a=l.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  padding: 0.1em;
  cursor: pointer;
`,t=l.Ay.div`
  position: relative;
  border-radius: 100px;
  width: 38px;
  min-width: 38px;
  height: 24px;
  flex-shrink: 0;
  background-color: ${e=>{let{$active:r,$color:n}=e;return r?n:"var(--dark-highlight)"}};
  transition: background-color 0.2s linear;
  &.mobile {
    width: 28px;
    min-width: 28px;
    height: 16px;
  }
`,i=l.Ay.div`
  position: absolute;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  box-sizing: border-box;
  background: var(--text-color);
  border: 2px solid ${e=>{let{$color:r}=e;return r}};
  top: 50%;
  left: 3px;
  transform: translateY(-50%)
    translateX(${e=>{let{$active:r}=e;return r?"14px":"0px"}});
  transition: transform 0.2s linear;
  &.mobile {
    width: 12px;
    height: 12px;
    left: 2px;
    transform: translateY(-50%)
      translateX(${e=>{let{$active:r}=e;return r?"12px":"0px"}});
  }
`,s=l.Ay.span`
  color: ${e=>{let{$labelColor:r}=e;return null!==r&&void 0!==r?r:"var(--text-color)"}};
  text-align: left;
  font: normal normal 300 25px/26px Montserrat;
  letter-spacing: 0;
  &.mobile {
    font: normal normal 300 13px/16px Montserrat;
  }
`,c=e=>{let{label:r,value:n,onChange:l,color:c="var(--dark-highlight)",labelColor:d,mobile:g}=e;const h=g?"mobile":"";return(0,o.jsxs)(a,{onClick:()=>l(!n),children:[(0,o.jsx)(t,{$active:n,$color:c,className:h,children:(0,o.jsx)(i,{$active:n,$color:c,className:h})}),(0,o.jsx)(s,{$labelColor:d,className:h,children:r})]})}},7217(e,r,n){n.r(r),n.d(r,{default:()=>le});var l=n(5043),o=n(7950),a=n(1688);const t=e=>e.performances.some(e=>"archived"===e.status)?"archived":e.performances.some(e=>"unofficially archived"===e.status)?"unofficially archived":"unarchived";var i=n(1472),s=n(2449),c=n(7362),d=n(403),g=n(5019),h=n(984);const u={release:"#E91E8C",cover:"#9B59B6","Ina's original":"#E91E8C","Hololive's original":"#8E44AD","3rd Party":"#3498DB",karaoke:"#F39C12",concert:"#E74C3C",featured:"#F1C40F",banana:"#FFE135",archived:"#95A5A6","unofficially archived":"#E67E22",unarchived:"#C0392B",duo:"#1ABC9C",group:"#27AE60"},x=d.Ay.span`
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
`,m=d.Ay.div`
  display: none;
  gap: 8px;
  align-items: center;
  flex-shrink: 0;

  @media only screen and (max-width: ${g.fi.mobile}px) {
    display: flex;
  }
`,f=d.Ay.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  margin-bottom: 20px;
  @media only screen and (max-width: ${g.fi.mobile}px) {
    display: none;
  }
`,v=d.Ay.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;
  padding-bottom: 4px;

  @media only screen and (max-width: ${g.fi.mobile}px) {
    display: none;
  }
`,b=d.Ay.h3`
  font: normal normal 700 18px/24px Montserrat;
  color: var(--dark-highlight);
  letter-spacing: 0.5px;
  margin: 28px 0 12px;
  padding-bottom: 6px;
  border-bottom: 2px solid var(--dark-highlight);
`,y=d.Ay.button`
  font: normal normal 700 13px/18px Montserrat;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  background: ${e=>{let{$active:r}=e;return r?"var(--light-highlight)":"var(--dark-highlight)"}};
  color: ${e=>{let{$active:r}=e;return r?"var(--dark-highlight)":"var(--text-color)"}};
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
`,j=d.Ay.button`
  background: none;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  width: 100%;
  text-align: center;
  font: normal normal 500 9px/13px Montserrat;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--text-color);
  opacity: ${e=>{let{$canToggle:r}=e;return r?.85:.45}};
  cursor: ${e=>{let{$canToggle:r}=e;return r?"pointer":"default"}};
  padding: 5px 0 2px;
  margin-top: 4px;
  display: block;
  transition:
    background-color 0.15s ease,
    color 0.15s ease,
    opacity 0.15s ease;
  &:hover {
    opacity: ${e=>{let{$canToggle:r}=e;return r?1:.45}};
    ${e=>{let{$canToggle:r}=e;return r&&"\n      background: var(--text-color);\n      color: var(--dark-highlight);\n    "}}
  }
`,k=d.Ay.div`
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

  @media only screen and (min-width: ${g.fi.mobile+1}px) {
    width: auto;
    max-width: min(90vw, 680px);
    max-height: unset;
    overflow-y: visible;
  }
`,w=d.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media only screen and (min-width: ${g.fi.mobile+1}px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,C=d.Ay.div`
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
`,$=d.Ay.div`
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
`,L=d.Ay.div`
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
`,P=d.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
  padding-top: 8px;
`,O=d.Ay.span`
  font: normal normal 600 11px/14px Montserrat;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: white;
  background: ${e=>{let{$tagColor:r}=e;return r||"var(--dark-highlight)"}};
  border-radius: 6px;
  padding: 2px 8px;
`;var H=n(579);const B={karaoke:"Karaoke",concert:"Concert",cover:"Cover",release:"Release",featured:"Featured",banana:"Banana"},N=e=>{var r;if(e.label)return e.label;const n=null!==(r=B[e.context])&&void 0!==r?r:e.context;return e.name?`${n} \xb7 ${e.name}`:n},T=e=>{var r;return null!==(r=u[e.name?"concert":e.context])&&void 0!==r?r:u.concert},R=e=>{var r,n,o;let{song:d,globalShowOriginal:g=!1}=e;const{reportVideoPlaying:x}=(0,i.d2)(),{hash:p}=(0,a.zy)(),m=l.useRef(null),f=d.songName.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");const[v,b]=(0,l.useState)(!1),y=d.performances.filter(e=>e.link);(0,l.useEffect)(()=>{var e;if(p!==`#${f}`)return;null===(e=m.current)||void 0===e||e.scrollIntoView({behavior:"smooth",block:"center"}),b(!0);const r=setTimeout(()=>b(!1),1800);return()=>clearTimeout(r)},[p,f]);const k=(0,l.useMemo)(()=>{const e=y.map(e=>({link:e.link,label:N(e),isOriginal:!1})),r=d.originalSongLink?[{link:(0,s.ZS)(d.originalSongLink),label:"Original ver.",isOriginal:!0}]:[];return"Ina's original"===d.origin?[...r,...e]:[...e,...r]},[d]),[w,C]=(0,l.useState)(0);(0,l.useEffect)(()=>{const e=g||"Ina's original"===d.origin,r=k.findIndex(r=>e?r.isOriginal:!r.isOriginal);C(r>=0?r:0)},[g,k]);const $=null!==(r=k[w])&&void 0!==r?r:null,I=k.length>1,B=null!==(n=null===$||void 0===$?void 0:$.link)&&void 0!==n?n:null,R=null!==(o=null===$||void 0===$?void 0:$.label)&&void 0!==o?o:"",G=t(d),D=(()=>{const e=new Set;return d.performances.filter(r=>{if("release"===r.context)return!1;const n=N(r);return!e.has(n)&&(e.add(n),!0)})})();return(0,H.jsxs)(E,{ref:m,id:f,style:v?{outline:"3px solid var(--light-highlight)"}:void 0,children:[B&&(0,H.jsx)(L,{children:(e=>{return e.includes("youtube")?(0,H.jsx)(h.Zy,{src:(r=e,r.includes("enablejsapi")?r:r.includes("?")?`${r}&enablejsapi=1`:`${r}?enablejsapi=1`),title:d.songName,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,onLoad:e=>(0,s.cb)(e.currentTarget)}):e.includes("mp4")?(0,H.jsx)("video",{style:{width:"100%",height:"100%",objectFit:"contain"},controls:!0,onPlay:()=>x(!0),onPause:()=>x(!1),onEnded:()=>x(!1),children:(0,H.jsx)("source",{src:"/songLinks/"+e,type:"video/mp4"})}):(0,H.jsx)(F,{src:"/songLinks/"+e,alt:d.songName});var r})(B)}),(0,H.jsxs)(M,{children:[(0,H.jsxs)(S,{children:[(0,H.jsx)(h.HM,{children:d.songName}),k.length>0&&(0,H.jsx)(j,{$canToggle:I,onClick:I?()=>{I&&C(e=>(e+1)%k.length)}:void 0,children:I?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)("i",{className:"fa fa-chevron-left"})," ",R," ",(0,H.jsx)("i",{className:"fa fa-chevron-right"})]}):R}),(0,H.jsx)("div",{style:{position:"absolute",top:"50%",right:"10px",transform:"translateY(-50%)"},children:(0,H.jsx)(c.A,{slug:f,label:"Copy link to this song"})})]}),d.songInfo&&(0,H.jsx)(A,{children:d.originalSongLink?(0,H.jsx)("a",{href:(0,s.PA)(d.originalSongLink),target:"_blank",rel:"noopener noreferrer",style:{color:"inherit",textDecoration:"underline"},children:d.songInfo}):d.songInfo}),d.coverInfo&&(0,H.jsx)(A,{children:d.coverInfo}),(0,H.jsxs)(P,{children:["Ina's original"===d.origin&&(0,H.jsx)(O,{$tagColor:u["Ina's original"],children:"Ina's Original"}),"Hololive's original"===d.origin&&(0,H.jsx)(O,{$tagColor:u["Hololive's original"],children:"Hololive's Original"}),D.map((e,r)=>(0,H.jsx)(O,{$tagColor:T(e),children:N(e)},r)),"unarchived"!==G&&(0,H.jsx)(O,{$tagColor:u[G],children:G}),0===y.length&&"Ina's original"!==d.origin&&"Hololive's original"!==d.origin&&(0,H.jsx)(O,{$tagColor:u.unarchived,children:"Unarchived"}),"solo"!==d.collab&&(0,H.jsx)(O,{$tagColor:u[d.collab],children:d.collab})]})]})]})},G=e=>{let{SongData:r,showOriginal:n}=e;return(0,H.jsx)(I,{children:r.map((e,r)=>(0,H.jsx)(R,{song:e,globalShowOriginal:n},`${e.songName}${r}`))})};var D=n(4997),W=n(2218),z=n(1061),Y=n(5011),U=n(3536),V=n(4709),K=n(6088),q=n(3402),X=n(2117),Q=n(4499);const Z=(e,r)=>{if("type"===r){const r=e.filter(e=>"Ina's original"===e.origin),n=e.filter(e=>"Hololive's original"===e.origin),l=e.filter(e=>"3rd Party"===e.origin&&e.performances.some(e=>"cover"===e.context)),o=e.filter(e=>"3rd Party"===e.origin&&!e.performances.some(e=>"cover"===e.context)),a=e.filter(e=>"banana"===e.origin);return[...r.length?[{label:"Ina's Original",songs:r}]:[],...l.length?[{label:"Covers",songs:l}]:[],...n.length?[{label:"Hololive's Original",songs:n}]:[],...o.length?[{label:"3rd Party",songs:o}]:[],...a.length?[{label:"Banana",songs:a}]:[]]}if("archive"===r){const r=e.filter(e=>"archived"===t(e)),n=e.filter(e=>"unofficially archived"===t(e)),l=e.filter(e=>"unarchived"===t(e));return[...r.length?[{label:"Archived",songs:r}]:[],...n.length?[{label:"Unofficially Archived",songs:n}]:[],...l.length?[{label:"Unarchived",songs:l}]:[]]}if("collab"===r){const r=e.filter(e=>"solo"===e.collab),n=e.filter(e=>"duo"===e.collab),l=e.filter(e=>"group"===e.collab);return[...r.length?[{label:"Solo",songs:r}]:[],...n.length?[{label:"Duo",songs:n}]:[],...l.length?[{label:"Group",songs:l}]:[]]}if("performance"===r){const r=[],n=e.filter(e=>e.performances.some(e=>"karaoke"===e.context)),l=e.filter(e=>e.performances.some(e=>"featured"===e.context)),o=e.filter(e=>e.performances.some(e=>"banana"===e.context));n.length&&r.push({label:"Karaoke",songs:n}),l.length&&r.push({label:"Featured",songs:l}),o.length&&r.push({label:"Banana",songs:o});const a=Array.from(new Set(e.flatMap(e=>e.performances.filter(e=>e.name).map(e=>e.name)))).sort();for(const t of a){const n=e.filter(e=>e.performances.some(e=>e.name===t));n.length&&r.push({label:t,songs:n})}return r}return[]},_=e=>(0,Q.a)(e.filter(e=>{const r=e.performances[0];return(null===r||void 0===r?void 0:r.link)&&!r.link.includes("youtube")}).map(e=>`/songLinks/${e.performances[0].link}`)),J=e=>{let{label:r,icon:n,children:a}=e;const[t,i]=(0,l.useState)(!1),[s,c]=(0,l.useState)({top:0,left:0}),d=(0,l.useRef)(null),g=(0,l.useRef)(null);return(0,l.useEffect)(()=>{if(!t)return;const e=e=>{g.current&&!g.current.contains(e.target)&&d.current&&!d.current.contains(e.target)&&i(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[t]),(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(y,{ref:d,onClick:()=>{if(!t&&d.current){const e=d.current.getBoundingClientRect();c({top:e.bottom+8,left:e.left})}i(e=>!e)},children:[(0,H.jsx)("i",{className:`fa ${n}`})," ",r]}),t&&o.createPortal((0,H.jsx)(k,{ref:g,style:{position:"fixed",top:s.top,left:s.left},children:a}),document.body)]})},ee=e=>{let{originFilter:r,setOrigin:n,contextFilter:l,setContext:o,sourceFilter:a,setSource:t,archiveFilter:i,setArchive:s,sources:c}=e;return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(w,{children:[(0,H.jsx)(Y.d,{label:"Ina's Originals",value:"Ina's original"===r,onChange:n("Ina's original"),color:u["Ina's original"],mobile:!0}),(0,H.jsx)(Y.d,{label:"Hololive's Originals",value:"Hololive's original"===r,onChange:n("Hololive's original"),color:u["Hololive's original"],mobile:!0}),(0,H.jsx)(Y.d,{label:"3rd Partys",value:"3rd Party"===r,onChange:n("3rd Party"),color:u["3rd Party"],mobile:!0}),(0,H.jsx)(Y.d,{label:"Banana",value:"banana"===r,onChange:n("banana"),color:u.banana,mobile:!0}),(0,H.jsx)(Y.d,{label:"Covers",value:"cover"===l,onChange:o("cover"),color:u.cover,mobile:!0}),(0,H.jsx)(Y.d,{label:"Karaoke",value:"karaoke"===l,onChange:o("karaoke"),color:u.karaoke,mobile:!0}),(0,H.jsx)(Y.d,{label:"Concert",value:"concert"===l,onChange:o("concert"),color:u.concert,mobile:!0}),(0,H.jsx)(Y.d,{label:"Featured",value:"featured"===l,onChange:o("featured"),color:u.featured,mobile:!0})]}),(0,H.jsx)($,{children:"Archive"}),(0,H.jsxs)(w,{children:[(0,H.jsx)(Y.d,{label:"Archived",value:"archived"===i,onChange:s("archived"),color:u.archived,mobile:!0}),(0,H.jsx)(Y.d,{label:"Unofficial",value:"unofficially archived"===i,onChange:s("unofficially archived"),color:u["unofficially archived"],mobile:!0})]}),c.length>0&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)($,{children:"Source"}),(0,H.jsx)(w,{children:c.map(e=>(0,H.jsx)(Y.d,{label:e,value:a===e,onChange:t(e),color:u.concert,mobile:!0},e))})]})]})},re=e=>{let{groupBy:r,setGroupBy:n}=e;return(0,H.jsxs)(w,{children:[(0,H.jsx)(Y.d,{label:"By Type",value:"type"===r,onChange:n("type"),color:u["Ina's original"],mobile:!0}),(0,H.jsx)(Y.d,{label:"By Archive",value:"archive"===r,onChange:n("archive"),color:u.archived,mobile:!0}),(0,H.jsx)(Y.d,{label:"By Collab",value:"collab"===r,onChange:n("collab"),color:u.duo,mobile:!0}),(0,H.jsx)(Y.d,{label:"By Performance",value:"performance"===r,onChange:n("performance"),color:u.concert,mobile:!0})]})},ne=()=>(0,H.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px",fontSize:"13px",color:"var(--text-color)",maxWidth:"280px"},children:[(0,H.jsxs)("div",{children:[(0,H.jsx)("strong",{style:{color:"var(--dark-highlight)"},children:"Search"}),(0,H.jsx)("p",{style:{margin:"4px 0 0"},children:"Type to filter by song name, artist, or performance source."})]}),(0,H.jsxs)("div",{children:[(0,H.jsx)("strong",{style:{color:"var(--dark-highlight)"},children:"Filters"}),(0,H.jsx)("p",{style:{margin:"4px 0 0"},children:"Filter by origin (Ina's, Hololive's, 3rd Party), performance type (Cover, Karaoke, Concert), or archive status."})]}),(0,H.jsxs)("div",{children:[(0,H.jsx)("strong",{style:{color:"var(--dark-highlight)"},children:"Group"}),(0,H.jsx)("p",{style:{margin:"4px 0 0"},children:"Group all songs by origin, archive status, collab type, or performance venue."})]}),(0,H.jsxs)("div",{children:[(0,H.jsx)("strong",{style:{color:"var(--dark-highlight)"},children:"Ina ver. / Orig. ver."}),(0,H.jsx)("p",{style:{margin:"4px 0 0"},children:"Globally switches all cards to show the original song version. Click the subtitle on any individual card to cycle through all available performances for that song."})]})]}),le=()=>{const{data:e,loading:r,error:n}=(0,K.s)("/data/songInfoData.json"),[a,i]=(0,l.useState)([]),[s,c]=(0,l.useState)([]),[d,g]=(0,l.useState)(!0),[u,j]=(0,l.useState)(""),k=(0,l.useRef)(0),w=(0,l.useRef)([]),[A,F]=(0,l.useState)(!1),[S,I]=(0,l.useState)(!1),[E,L]=(0,l.useState)(null),[M,P]=(0,l.useState)(null),[O,B]=(0,l.useState)(null),[N,T]=(0,l.useState)("archived"),[R,Y]=(0,l.useState)("type"),[Q,le]=(0,l.useState)(4),oe=(0,l.useRef)(4),ae=(0,l.useRef)(!1);(0,l.useEffect)(()=>{e&&i([...e].reverse())},[e]);const te=(0,l.useMemo)(()=>{const e=new Set;return a.forEach(r=>r.performances.forEach(r=>{r.name&&e.add(r.name)})),Array.from(e).sort()},[a]),ie=(0,l.useMemo)(()=>((e,r,n)=>{let l=e;if(r.originFilter&&(l=l.filter(e=>e.origin===r.originFilter)),r.contextFilter&&(l=l.filter(e=>e.performances.some(e=>e.context===r.contextFilter))),r.sourceFilter&&(l=l.filter(e=>e.performances.some(e=>e.name===r.sourceFilter))),r.archiveFilter&&(l=l.filter(e=>t(e)===r.archiveFilter)),n){const e=n.toLowerCase();l=l.filter(r=>{var n,l,o;return(null===(n=r.songName)||void 0===n?void 0:n.toLowerCase().includes(e))||(null===(l=r.songInfo)||void 0===l?void 0:l.toLowerCase().includes(e))||(null===(o=r.coverInfo)||void 0===o?void 0:o.toLowerCase().includes(e))||r.origin.toLowerCase().includes(e)||r.collab.toLowerCase().includes(e)||r.performances.some(r=>{var n;return r.context.toLowerCase().includes(e)||(null===(n=r.name)||void 0===n?void 0:n.toLowerCase().includes(e))})})}return l})(a,{originFilter:E,contextFilter:M,sourceFilter:O,archiveFilter:N},u),[a,E,M,O,N,u]);w.current=ie,(0,l.useEffect)(()=>{if(!a.length||R)return;const e=ie.slice(0,4);_(e).then(()=>{k.current=4,c(e),g(ie.length>4)})},[ie,R]),(0,l.useEffect)(()=>{if(d&&s.length>0&&!R){const e=requestAnimationFrame(()=>{document.documentElement.scrollHeight>window.innerHeight||se()});return()=>cancelAnimationFrame(e)}},[s.length,d,R]);const se=async()=>{const e=w.current.slice(k.current,4+k.current);0!==e.length?(await _(e),k.current+=4,c(r=>r.concat(e))):g(!1)},ce=(0,l.useMemo)(()=>R?Z(ie,R):null,[ie,R]),de=(0,l.useMemo)(()=>ce?ce.flatMap(e=>e.songs):[],[ce]),ge=(0,l.useRef)([]);ge.current=de,(0,l.useEffect)(()=>{R&&(oe.current=4,ae.current=!1,le(4))},[ie,R]);const he=async()=>{if(ae.current)return;ae.current=!0;const e=ge.current.slice(oe.current,oe.current+4);e.length?(await _(e),oe.current+=4,le(oe.current),ae.current=!1):ae.current=!1};(0,l.useEffect)(()=>{if(!R)return;if(Q>=ge.current.length)return;const e=requestAnimationFrame(()=>{document.documentElement.scrollHeight>window.innerHeight||he()});return()=>cancelAnimationFrame(e)},[Q,R,de.length]);const ue=(0,l.useMemo)(()=>R?Z(de.slice(0,Q),R):null,[de,R,Q]),xe=(0,l.useCallback)((0,U.debounce)(e=>{j(e.target.value)},500),[]),pe={originFilter:E,setOrigin:e=>r=>L(r?e:null),contextFilter:M,setContext:e=>r=>P(r?e:null),sourceFilter:O,setSource:e=>r=>B(r?e:null),archiveFilter:N,setArchive:e=>r=>T(r?e:null),sources:te},me={groupBy:R,setGroupBy:e=>r=>Y(r?e:null)},fe=(0,H.jsx)(J,{label:"Filters",icon:"fa-filter",children:(0,H.jsx)(ee,{...pe})}),ve=(0,H.jsx)(J,{label:"Group",icon:"fa-th-list",children:(0,H.jsx)(re,{...me})}),be=(0,H.jsx)(J,{label:"Help",icon:"fa-question-circle",children:(0,H.jsx)(ne,{})}),ye=(0,H.jsxs)(y,{$active:A,onClick:()=>F(e=>!e),children:[(0,H.jsx)("i",{className:"fa fa-exchange"}),A?"Orig. ver.":"Ina ver."]});return(0,H.jsxs)(h.Qs,{children:[(0,H.jsx)(q.W,{src:"/\u6ce8\u6587\u306e\u5c11\u306a\u3044\u55ab\u8336\u5e97.mp3",pauseOnVideo:!0}),(0,H.jsxs)(V.Fp,{children:[(0,H.jsx)(V.Pn,{}),(0,H.jsx)(h.ue,{children:"Ultimate Ina Playlist"}),(0,H.jsx)(m,{children:(0,H.jsxs)(V.uW,{onClick:()=>I(!0),children:[(0,H.jsx)("i",{className:"fa fa-filter"}),(0,H.jsx)("span",{className:"btn-text",children:" Filters"})]})})]}),S&&o.createPortal((0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(x,{onClick:()=>I(!1)}),(0,H.jsxs)(p,{children:[(0,H.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,H.jsx)("span",{style:{font:"normal normal 700 16px/20px Montserrat",color:"var(--text-color)"},children:"Filters & Search"}),(0,H.jsx)(y,{onClick:()=>I(!1),style:{minWidth:"unset",padding:"6px 12px"},children:(0,H.jsx)("i",{className:"fa fa-times"})})]}),a.length>0&&(0,H.jsxs)(C,{style:{justifyContent:"center"},children:[(0,H.jsx)("i",{className:"fa fa-music"})," Ina has sung:"," ",a.length," songs!"]}),(0,H.jsx)(h.IW,{onChange:xe,placeholder:"Search...",style:{marginBottom:0}}),(0,H.jsx)($,{children:"Filters"}),(0,H.jsx)(ee,{...pe}),(0,H.jsx)($,{children:"Group"}),(0,H.jsx)(re,{...me}),(0,H.jsx)($,{children:"Version"}),(0,H.jsxs)(y,{$active:A,onClick:()=>F(e=>!e),style:{width:"100%"},children:[(0,H.jsx)("i",{className:"fa fa-exchange"}),A?"Orig. ver.":"Ina ver."]}),(0,H.jsx)($,{children:"Help"}),(0,H.jsx)(ne,{})]})]}),document.body),r?(0,H.jsx)(W.c,{}):n?(0,H.jsx)(X.X,{what:"songs",error:n}):(0,H.jsxs)(h.gQ,{children:[(0,H.jsxs)(f,{children:[(0,H.jsxs)(v,{children:[fe,ve,ye,be,a.length>0&&(0,H.jsxs)(C,{children:[(0,H.jsx)("i",{className:"fa fa-music"})," Ina has sung:"," ",a.length," songs!"]})]}),(0,H.jsx)(h.IW,{onChange:xe,placeholder:"Search...",style:{marginBottom:0,flex:"1 1 0",maxWidth:"50%",marginLeft:"auto"}})]}),ue?(0,H.jsx)(D.A,{style:{overflow:"hidden"},scrollThreshold:"50px",dataLength:Math.min(Q,de.length),next:he,hasMore:Q<de.length,loader:(0,H.jsx)(h.aH,{children:(0,H.jsx)(W.c,{})}),endMessage:(0,H.jsx)("p",{style:{textAlign:"center",color:"var(--ink-black)"},children:"Yay! You have seen it all"}),children:ue.map(e=>{let{label:r,songs:n}=e;return(0,H.jsxs)(l.Fragment,{children:[(0,H.jsx)(b,{children:r}),(0,H.jsx)(G,{SongData:n,showOriginal:A})]},r)})}):(0,H.jsx)(D.A,{style:{overflow:"hidden"},scrollThreshold:"50px",dataLength:s.length,next:se,hasMore:d,loader:(0,H.jsx)(h.aH,{children:(0,H.jsx)(W.c,{})}),endMessage:(0,H.jsx)("p",{style:{textAlign:"center",color:"var(--ink-black)"},children:"Yay! You have seen it all"}),children:(0,H.jsx)(G,{SongData:s,showOriginal:A})}),(0,H.jsx)(z.A,{})]})]})}},9773(e,r,n){n.d(r,{G:()=>o});var l=n(5043);const o=e=>{let{muted:r,volume:n=.1,autoPlay:o=!1,videoPaused:a=!1}=e;const t=(0,l.useRef)(null);return(0,l.useEffect)(()=>{t.current&&(t.current.volume=n)},[n]),(0,l.useEffect)(()=>{const e=t.current;e&&(a||r?e.pause():e.paused&&e.play().catch(()=>{}))},[r,a]),(0,l.useEffect)(()=>{if(!o)return;let e=null,n=!1;return t.current&&!r&&t.current.play().catch(()=>{n||(e=()=>{t.current&&!r&&t.current.play().catch(()=>{}),e&&window.removeEventListener("click",e)},window.addEventListener("click",e))}),()=>{n=!0,e&&window.removeEventListener("click",e)}},[o,r]),t}},4499(e,r,n){n.d(r,{a:()=>l});const l=async e=>{await Promise.all(e.map(e=>new Promise(r=>{const n=new Image;n.onload=()=>r(),n.onerror=()=>r(),n.src=e})))}}}]);
//# sourceMappingURL=217.2f0200cc.chunk.js.map
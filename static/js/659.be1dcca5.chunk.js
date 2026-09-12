"use strict";(globalThis.webpackChunkina=globalThis.webpackChunkina||[]).push([[659],{5659(t,o,r){r.d(o,{zs:()=>T,ZM:()=>Q,x1:()=>S,TK:()=>z,j2:()=>P,MD:()=>j,x5:()=>D,xC:()=>R,tc:()=>E,GQ:()=>A,jp:()=>W,Jz:()=>X,LN:()=>Y,sT:()=>_,h$:()=>u,L$:()=>v,DO:()=>b,hG:()=>F,oX:()=>G,U7:()=>O,XB:()=>J,jh:()=>K,pC:()=>I,fg:()=>Z,a4:()=>q,BT:()=>U,sW:()=>B,jd:()=>N,fT:()=>H,ji:()=>w,wC:()=>C,d7:()=>y,PX:()=>m,OP:()=>L,Z5:()=>M,AA:()=>$});var e,i,n=r(403),a=r(5043),l=function(t,o){return(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var r in o)o.hasOwnProperty(r)&&(t[r]=o[r])})(t,o)},p=(i=e={path:void 0,exports:{},require:function(t,o){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==o&&e.path)}},e.exports,function(){var t={}.hasOwnProperty;function o(){for(var r=[],e=0;e<arguments.length;e++){var i=arguments[e];if(i){var n=typeof i;if("string"===n||"number"===n)r.push(i);else if(Array.isArray(i)&&i.length){var a=o.apply(null,i);a&&r.push(a)}else if("object"===n)for(var l in i)t.call(i,l)&&i[l]&&r.push(l)}}return r.join(" ")}i.exports?(o.default=o,i.exports=o):window.classNames=o}(),e.exports);function s(t,o,r){var e,i,n,a,l;function p(){var s=Date.now()-a;s<o&&s>=0?e=setTimeout(p,o-s):(e=null,r||(l=t.apply(n,i),n=i=null))}null==o&&(o=100);var s=function(){n=this,i=arguments,a=Date.now();var s=r&&!e;return e||(e=setTimeout(p,o)),s&&(l=t.apply(n,i),n=i=null),l};return s.clear=function(){e&&(clearTimeout(e),e=null)},s.flush=function(){e&&(l=t.apply(n,i),n=i=null,clearTimeout(e),e=null)},s}s.debounce=s;var d=s;!function(t,o){void 0===o&&(o={});var r=o.insertAt;if(t&&"undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===r&&e.firstChild?e.insertBefore(i,e.firstChild):e.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}(".indiana-scroll-container {\n  overflow: auto; }\n  .indiana-scroll-container--dragging {\n    scroll-behavior: auto !important; }\n    .indiana-scroll-container--dragging > * {\n      pointer-events: none;\n      cursor: -webkit-grab;\n      cursor: grab; }\n  .indiana-scroll-container--hide-scrollbars {\n    overflow: hidden;\n    overflow: -moz-scrollbars-none;\n    -ms-overflow-style: none;\n    scrollbar-width: none; }\n    .indiana-scroll-container--hide-scrollbars::-webkit-scrollbar {\n      display: none !important;\n      height: 0 !important;\n      width: 0 !important;\n      background: transparent !important;\n      -webkit-appearance: none !important; }\n  .indiana-scroll-container--native-scroll {\n    overflow: auto; }\n\n.indiana-dragging {\n  cursor: -webkit-grab;\n  cursor: grab; }\n");var h,c=(h="indiana-scroll-container",function(t,o){if(!t)return h;var r;"string"==typeof t?r=t:o=t;var e=h;return r&&(e+="__"+r),e+(o?Object.keys(o).reduce(function(t,r){var i=o[r];return i&&(t+=" "+("boolean"==typeof i?e+"--"+r:e+"--"+r+"_"+i)),t},""):"")}),x=function(t){function o(o){var r=t.call(this,o)||this;return r.onEndScroll=function(){r.scrolling=!1,!r.pressed&&r.started&&r.processEnd()},r.onScroll=function(t){var o=r.container.current;o.scrollLeft===r.scrollLeft&&o.scrollTop===r.scrollTop||(r.scrolling=!0,r.processScroll(t),r.onEndScroll())},r.onTouchStart=function(t){var o=r.props.nativeMobileScroll;if(r.isDraggable(t.target))if(r.internal=!0,o&&r.scrolling)r.pressed=!0;else{var e=t.touches[0];r.processClick(t,e.clientX,e.clientY),!o&&r.props.stopPropagation&&t.stopPropagation()}},r.onTouchEnd=function(t){var o=r.props.nativeMobileScroll;r.pressed&&(!r.started||r.scrolling&&o?r.pressed=!1:r.processEnd(),r.forceUpdate())},r.onTouchMove=function(t){var o=r.props.nativeMobileScroll;if(r.pressed&&(!o||!r.isMobile)){var e=t.touches[0];e&&r.processMove(t,e.clientX,e.clientY),t.preventDefault(),r.props.stopPropagation&&t.stopPropagation()}},r.onMouseDown=function(t){r.isDraggable(t.target)&&r.isScrollable()&&(r.internal=!0,-1!==r.props.buttons.indexOf(t.button)&&(r.processClick(t,t.clientX,t.clientY),t.preventDefault(),r.props.stopPropagation&&t.stopPropagation()))},r.onMouseMove=function(t){r.pressed&&(r.processMove(t,t.clientX,t.clientY),t.preventDefault(),r.props.stopPropagation&&t.stopPropagation())},r.onMouseUp=function(t){r.pressed&&(r.started?r.processEnd():(r.internal=!1,r.pressed=!1,r.forceUpdate(),r.props.onClick&&r.props.onClick(t)),t.preventDefault(),r.props.stopPropagation&&t.stopPropagation())},r.container=a.createRef(),r.onEndScroll=d(r.onEndScroll,300),r.scrolling=!1,r.started=!1,r.pressed=!1,r.internal=!1,r.getRef=r.getRef.bind(r),r}return function(t,o){function r(){this.constructor=t}l(t,o),t.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}(o,t),o.prototype.componentDidMount=function(){var t=this.props.nativeMobileScroll,o=this.container.current;window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove,{passive:!1}),window.addEventListener("touchend",this.onTouchEnd),o.addEventListener("touchstart",this.onTouchStart,{passive:!1}),o.addEventListener("mousedown",this.onMouseDown,{passive:!1}),t&&(this.isMobile=this.isMobileDevice(),this.isMobile&&this.forceUpdate())},o.prototype.componentWillUnmount=function(){window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onTouchEnd)},o.prototype.getElement=function(){return this.container.current},o.prototype.isMobileDevice=function(){return void 0!==window.orientation||-1!==navigator.userAgent.indexOf("IEMobile")},o.prototype.isDraggable=function(t){var o=this.props.ignoreElements;if(o){var r=t.closest(o);return null===r||r.contains(this.getElement())}return!0},o.prototype.isScrollable=function(){var t=this.container.current;return t&&(t.scrollWidth>t.clientWidth||t.scrollHeight>t.clientHeight)},o.prototype.processClick=function(t,o,r){var e=this.container.current;this.scrollLeft=e.scrollLeft,this.scrollTop=e.scrollTop,this.clientX=o,this.clientY=r,this.pressed=!0},o.prototype.processStart=function(t){void 0===t&&(t=!0);var o=this.props.onStartScroll;this.started=!0,t&&document.body.classList.add("indiana-dragging"),o&&o({external:!this.internal}),this.forceUpdate()},o.prototype.processScroll=function(t){if(this.started){var o=this.props.onScroll;o&&o({external:!this.internal})}else this.processStart(!1)},o.prototype.processMove=function(t,o,r){var e=this.props,i=e.horizontal,n=e.vertical,a=e.activationDistance,l=e.onScroll,p=this.container.current;this.started?(i&&(p.scrollLeft-=o-this.clientX),n&&(p.scrollTop-=r-this.clientY),l&&l({external:!this.internal}),this.clientX=o,this.clientY=r,this.scrollLeft=p.scrollLeft,this.scrollTop=p.scrollTop):(i&&Math.abs(o-this.clientX)>a||n&&Math.abs(r-this.clientY)>a)&&(this.clientX=o,this.clientY=r,this.processStart())},o.prototype.processEnd=function(){var t=this.props.onEndScroll;this.container.current&&t&&t({external:!this.internal}),this.pressed=!1,this.started=!1,this.scrolling=!1,this.internal=!1,document.body.classList.remove("indiana-dragging"),this.forceUpdate()},o.prototype.getRef=function(t){[this.container,this.props.innerRef].forEach(function(o){o&&("function"==typeof o?o(t):o.current=t)})},o.prototype.render=function(){var t=this.props,o=t.children,r=t.draggingClassName,e=t.className,i=t.style,n=t.hideScrollbars,l=t.component;return a.createElement(l,{className:p(e,this.pressed&&r,c({dragging:this.pressed,"hide-scrollbars":n,"native-scroll":this.isMobile})),style:i,ref:this.getRef,onScroll:this.onScroll},o)},o.defaultProps={nativeMobileScroll:!0,hideScrollbars:!0,activationDistance:10,vertical:!0,horizontal:!0,stopPropagation:!1,style:{},component:"div",buttons:[0]},o}(a.PureComponent);const g=x,f=n.Ay.span`
  border-top: 5px solid var(--dark-highlight);
  position: relative;
  bottom: 16px;
  width: 500px;
  left: 245px;
  &.mobile {
    border-left: 4px solid var(--dark-highlight);
    position: relative;
    bottom: unset;
    height: 160px;
    top: 80px;
    left: -16px;
    width: 0;
  }
`,u=n.Ay.div`
  display: flex;
  flex: 1;
  min-height: 0;
  width: 100vw;
  overflow: hidden;
  flex-direction: column;
  &.mobile {
    height: 100vh;
  }
`,m=n.Ay.div`
  margin: clamp(16px, 3vh, 38px) 145px 0;
  padding-bottom: clamp(14px, 2.5vh, 32px);
  @media (max-width: 1200px) {
    margin: clamp(16px, 3vh, 38px) auto 0;
  }
`,v=n.Ay.div`
  flex: 1;
  min-width: 0;
  border-bottom: 1px solid var(--dark-highlight);
`,b=n.Ay.input`
  color: var(--dark-highlight);
  text-align: left;
  font: normal normal normal 30px/37px Montserrat;
  letter-spacing: 0;
  opacity: 1;
  width: 100%;
  height: 1em;
  padding: 0 0 3px;
  border: none;
  background: none;
  outline: none;

  :focus {
    outline: none;
  }
`,w=n.Ay.div``,y=n.Ay.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
`,k=(n.Ay.span`
  background: var(--text-color);
  border: 3px solid var(--color);
  border-radius: 50%;
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  z-index: 2;
`,n.Ay.img`
  background: var(--dark-highlight);
  width: 410px;
  height: 229px;
  border-radius: 5px;
  margin-bottom: 26px;
  z-index: 2;
  border: 5px solid transparent;
  ${t=>{let{outline:o}=t;return o.startsWith("linear-gradient")?`\n    border-image: ${o} 1;\n    border-image-slice: 1;\n  `:`\n    border-color: ${o};\n  `}}
  &.mobile {
    width: 253px;
    height: 141px;
    margin-bottom: 5px;
  }
`,n.Ay.div`
  --color: ${t=>{let{highlight:o}=t;return o?"var(--light-highlight)":"var(--dark-highlight)"}};
  display: flex;
  flex-direction: column;
  margin-right: 90px;
  width: 410px;
  cursor: grab;
  &.mobile {
    margin: 0;
    width: unset;
    align-items: center;
    flex-direction: row;
  }
`),A=(n.Ay.div`
  display: block;
  height: 20px;
  width: 20px;
  border: inherit;
  position: relative;
  bottom: 36px;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);

  border-radius: 0 0 0 0.25em;
  background-color: var(--color);
  &.mobile {
    display: none;
  }
`,n.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 0;
`,(0,n.Ay)(g)`
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 100vw;
  align-items: flex-end;
  padding-bottom: 100px;
  scroll-behavior: smooth;
  transition: all linear;
  @media (max-width: 1200px) {
    padding-bottom: 150px;
  }
  :not(&.mobile) > ${k}:first-child {
    padding-left: 0;
  }
  > ${k}:last-child {
    ${f} {
      visibility: hidden;
    }
  }
  &.mobile {
    padding-bottom: 0;
    width: unset;
    flex-direction: column;
    align-items: center;
  }
  img {
    cursor: pointer;
  }
`,n.Ay.div`
  display: flex;
  flex-direction: row;
  background-color: var(--dark-highlight);
  height: clamp(52px, 8vh, 111px);
  padding: clamp(8px, 1.6vh, 19px) clamp(14px, 3vw, 35px);
  border-radius: 15px 15px 0 0;
  opacity: 1;
  flex: 0 1;
  margin: 0 111px;
  justify-content: space-between;
  border: 3px solid var(--ink-black);
  @media (max-width: 1400px) {
    margin: 0 auto;
  }
  z-index: 1;
`),M=n.Ay.div`
  display: flex;
  flex-direction: row;
  background-color: var(--dark-highlight);
  border-radius: 10px;
  border: 3px solid var(--ink-black);
  padding: 0 12px;
  margin: 0 auto clamp(6px, 1.2vh, 12px) auto;
  width: fit-content;
  position: relative;
  z-index: 0;
`,$=n.Ay.div`
  padding: 5px;
  color: ${t=>{let{selected:o}=t;return o?"var(--light-highlight)":"var(--text-color)"}};
  text-align: center;
  letter-spacing: 0;
  font: normal normal ${t=>{let{selected:o}=t;return o?"bold":"light"}} 30px
    Roboto;
  font-size: ${t=>{let{selected:o}=t;return o?"clamp(16px, 2.2vh, 30px)":"clamp(14px, 1.9vh, 26px)"}};
  opacity: 1;
  margin: auto 0;
  position: relative;
  :hover {
    cursor: pointer;
  }
  & + & {
    padding-left: 14px;
  }
  & + &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 55%;
    width: 1px;
    background: var(--text-color);
    opacity: 0.35;
  }
  ${t=>{let{selected:o}=t;return o&&"\n      text-shadow:\n        -1px -1px 0 var(--shadow),\n         1px -1px 0 var(--shadow),\n        -1px  1px 0 var(--shadow),\n         1px  1px 0 var(--shadow);\n    "}}
`,E=n.Ay.span`
  color: ${t=>{let{highlight:o}=t;return o?"var(--light-highlight)":"var(--text-color)"}};
  text-align: center;
  font: normal normal
    ${t=>{let{highlight:o,passed:r}=t;return o?"bold":r?"light":"100"}}
    30px/37px Roboto;
  font-size: ${t=>{let{highlight:o}=t;return o?"clamp(15px, 2.1vh, 30px)":"clamp(13px, 1.85vh, 27px)"}};
  opacity: 1;
  margin: auto 0;
  position: relative;
  :hover {
    cursor: pointer;
  }
  & + & {
    padding-left: 14px;
  }
  & + &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 55%;
    width: 1px;
    background: var(--text-color);
    opacity: 0.35;
  }
  ${t=>{let{highlight:o}=t;return o&&"\n      text-shadow:\n        -2px -2px 0 var(--shadow),\n         2px -2px 0 var(--shadow),\n        -2px  2px 0 var(--shadow),\n         2px  2px 0 var(--shadow);\n    "}}
`,S=(n.Ay.span`
  font: normal normal 300 2em Roboto;
  color: var(--light-highlight);
  border-left: 2px solid var(--light-highlight);
  padding-left: 5px;
  margin-left: 5px;
  margin-bottom: 5px;
  &.mobile {
    border: none;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    direction: rtl;
    font: normal normal 300 15px/18px Roboto;
    margin: 0;
    padding: 0;
    width: 0;
    position: relative;
    left: -23px;
  }
`,n.Ay.span`
  color: var(--color);
  text-align: center;
  font: normal normal 300 30px/37px Roboto;
  letter-spacing: 1.5px;
  width: 430px;
  height: 74px;
  display: block;
  overflow-y: auto;
  overflow-x: hidden;
  white-space: normal;
  word-break: break-word;
  text-overflow: unset;

  scrollbar-width: thin;
  scrollbar-color: var(--dark-highlight) transparent;

  &::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--dark-highlight);
    border-radius: 8px;
    min-height: 16px;
    box-shadow: none;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &.mobile {
    text-align: left;
    font: normal normal 400 20px/24px Roboto;
    letter-spacing: 1px;
    width: 240px;
    height: 48px;
  }
`,n.Ay.span`
  color: var(--color);
  text-align: center;
  font: normal normal 300 30px/37px Roboto;
  letter-spacing: 1.5px;
  &.mobile {
    text-align: right;
    font: normal normal 300 13px/15px Roboto;
    letter-spacing: 0.65px;
  }
`,n.Ay.div`
  display: flex;
  flex-direction: column;
`,n.Ay.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--light-background);
  border-radius: 15px;
  z-index: 69;
  width: min(90vw, 380px);
  max-height: 85vh;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  > ${m} {
    margin: 0;
    padding: 0;
  }
  ${b} {
    font: normal normal normal 16px/19px Montserrat;
    color: var(--text-color);
    ::placeholder {
      color: var(--text-color);
    }
  }
  ${v} {
    border-bottom-color: var(--text-color);
    margin: 0;
  }
  ${w} {
    margin: 0;
  }
  ${y} {
    flex-direction: column;
  }
  ${A} {
    height: auto;
    min-height: unset;
    margin: 0;
    background: transparent;
    border: none;
    border-radius: 0;
    padding: 0;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 6px;
    justify-content: flex-start;
  }
  ${E} {
    font-size: 13px;
    line-height: 15px;
    padding: 5px 10px;
    border-radius: 20px;
    background: var(--dark-highlight);
    text-shadow: none;
    & + & {
      padding-left: 10px;
    }
    & + &::before {
      display: none;
    }
  }
  ${M} {
    border-width: 1px;
    margin: 0 auto 4px;
    padding: 0 8px;
  }
  ${$} {
    font-size: 18px;
    padding: 4px 6px;
  }
`),T=n.Ay.span`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 69;
  background-color: rgba(0, 0, 0, 0.7);
`,z=n.Ay.span`
  display: block;
  font: normal normal 300 13px/16px Montserrat;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: var(--text-color);
  border-bottom: 1px solid var(--text-color);
  padding-bottom: 4px;
`,P=n.Ay.button`
  font: normal normal 700 13px/18px Montserrat;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  background: var(--dark-highlight);
  color: var(--text-color);
  border: 2px solid var(--light-highlight);
  border-radius: 10px;
  padding: 8px 14px;
  margin-right: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  flex-shrink: 0;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.8;
  }
`,L=(n.Ay.div`
  flex-grow: 2;
`,n.Ay.div`
  padding-left: 60px;
  display: flex;
  width: 640px;
  max-width: 100%;
  flex-direction: row;
  padding-bottom: 10px;
  &.mobile {
    width: unset;
    padding: 0 30px;
    flex-direction: column;
  }
`,n.Ay.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  &.mobile {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 2px solid var(--text-color);
    flex-direction: row;
    padding: 0;
  }
`,n.Ay.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background: var(--light-background);
  color: var(--text-color);
  border: 2px solid var(--light-highlight);
  border-radius: 12px;
  box-shadow: 0 4px 16px var(--shadow);
  padding: 24px 32px;
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`,n.Ay.iframe`
  width: 100%;
  box-shadow: 0px 5px 5px var(--shadow);
`,n.Ay.img`
  width: 100%;
  box-shadow: 0px 5px 5px var(--shadow);
`,n.Ay.p`
  font: normal normal 300 15px/18px Roboto;
  width: 335px;
  border-left: 2px solid var(--text-color);
  padding-left: 20px;
  flex: 3;
  &.mobile {
    width: unset;
    padding: 0;
    border: none;
  }
`,n.Ay.a`
  text-align: right;
  font: normal normal normal 30px/40px Montserrat;
  letter-spacing: 0;
  padding-top: 10px;
  color: var(--text-color);
  text-shadow: 0 5px 6px var(--shadow);
  overflow: hidden;
  width: 300px;
  &.mobile {
    font: normal normal normal 22px/27px Montserrat;
    text-align: left;
    text-shadow: unset;
  }
  text-decoration: underline;
`,n.Ay.span`
  text-align: right;
  font: normal normal 300 25px/30px Roboto;
  letter-spacing: 1.25px;
  color: var(--text-color);
  padding-top: 10px;
  text-shadow: 0px 5px 6px var(--shadow);
  &.mobile {
    font: normal normal 300 13px/15px Roboto;
    letter-spacing: 0.65px;
  }
`,n.Ay.div`
  position: absolute;
  left: 50%;
  top: -10px;
  transform: translateX(-50%) translateY(-100%);
  min-width: 250px;
  max-width: 300px;
  background: var(--dark-highlight);
  color: var(--text-color);
  border: 2px solid var(--light-highlight);
  border-radius: 12px;
  box-shadow: 0 4px 16px var(--shadow);
  padding: 16px 22px;
  font-size: 16px;
  z-index: 20;
  opacity: 1;
  pointer-events: none;
  transition: opacity 0.15s;
  white-space: pre-line;
  word-break: break-word;
  overflow-wrap: anywhere;
`,n.Ay.div`
  display: flex;
  align-items: center;
  gap: 16px;
`),D=n.Ay.div`
  position: relative;
  flex-shrink: 0;
`,j=n.Ay.button`
  font: normal normal 700 15px/18px Montserrat;
  letter-spacing: 0.5px;
  background: var(--dark-highlight);
  color: var(--text-color);
  border: 2px solid
    ${t=>{let{$active:o}=t;return o?"var(--light-highlight)":"var(--dark-highlight)"}};
  border-radius: 10px;
  padding: 9px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.8;
  }
`,R=n.Ay.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: var(--dark-highlight);
  border: 2px solid var(--light-highlight);
  border-radius: 12px;
  box-shadow: 0 4px 16px var(--shadow);
  padding: 16px 18px;
  z-index: 100;
  width: max-content;
  max-width: min(90vw, 320px);
  max-height: 70vh;
  overflow-y: auto;
`,C=n.Ay.select`
  background: var(--dark-highlight);
  color: white;
  border: 2px solid var(--light-highlight);
  border-radius: 8px;
  font-size: ${t=>{let{mobile:o}=t;return o?16:22}}px;
  padding: 6px 16px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  width: 100%;
  outline: none;
`,X=n.Ay.button`
  background: var(--dark-highlight);
  border: 2px solid var(--light-highlight);
  border-radius: 50%;
  width: 2.2em;
  height: 2.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  color: var(--light-highlight);
  font-size: 1.1em;
  flex-shrink: 0;
  transition:
    background 0.2s,
    color 0.2s,
    border 0.2s;
  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background: var(--light-highlight);
    color: var(--dark-highlight);
  }
`,Y=n.Ay.div`
  flex-direction: column;
  display: flex;
  flex: 1;
  min-height: 100vh;
  background: var(--background);
  color: var(--dark-highlight);
`,_=n.Ay.h2`
  margin: 0;
  color: var(--dark-highlight);
  text-shadow:
    0 0 0.03em #ffffff7b,
    0.03em 0 0 #ffffff7b,
    -0.03em 0 0 #ffffff7b,
    0 0.03em 0 #ffffff7b,
    0 -0.03em 0 #ffffff7b,
    0.03em 0.03em 0 #ffffff7b,
    -0.03em -0.03em 0 #ffffff7b,
    0.03em -0.03em 0 #ffffff7b,
    -0.03em 0.03em 0 #ffffff7b;
  text-align: center;
  font: normal normal bold clamp(48px, 3vw, 60px) / 1.15 Montserrat;
  flex: 1;
  @media only screen and (max-width: 1000px) {
    font: normal normal bold 32px/40px Montserrat;
    letter-spacing: 1.25px;
  }
  @media only screen and (max-width: 768px) {
    font: normal normal bold 24px/30px Montserrat;
    letter-spacing: 1px;
  }
`,O=n.Ay.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex: 1;
  min-height: 0;
  padding: 12px 0 32px;
`,U=n.Ay.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex: 1;
  min-height: 0;
  cursor: grab;
  user-select: none;
  gap: 40px;
  padding: 1.2rem 0;
  overflow-x: scroll;
  overflow-y: visible;
  touch-action: pan-x;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;
  --pivot-w: min(1400px, max(320px, calc(100% - 520px)));
  --neighbor-w: 220px;
  --edge-w: ${t=>{let{$dragging:o}=t;return o?"var(--neighbor-w)":"var(--pivot-w)"}};
  &::-webkit-scrollbar {
    display: none;
  }
  &::before,
  &::after {
    content: "";
    display: block;
    flex: 0 0 max(0px, calc(50% - var(--edge-w) / 2));
  }
`,N=n.Ay.div`
  position: relative;
  flex-shrink: 0;
  height: 100%;
  overflow: visible;
  width: ${t=>{let{$isPivot:o,$dragging:r}=t;return o&&!r?"var(--pivot-w)":"var(--neighbor-w)"}};
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-align: center;
  scroll-snap-stop: always;
  opacity: ${t=>{let{$isPivot:o,$dragging:r}=t;return o&&!r?1:.45}};
  transform: ${t=>{let{$isPivot:o,$dragging:r}=t;return o&&!r?"scale(1)":"scale(0.55)"}};
  transition:
    width 0.4s ease,
    opacity 0.35s,
    transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: ${t=>{let{$isPivot:o}=t;return o?"default":"pointer"}};
`,W=n.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background: var(--dark-highlight);
  border: 2px solid var(--light-highlight);
  border-radius: 12px;
  padding: 14px;
  color: var(--text-color);
  text-align: center;
  width: 100%;

  img {
    width: 100%;
    max-height: 120px;
    object-fit: contain;
    border-radius: 8px;
  }
`,B=n.Ay.div`
  width: 100%;
  height: 120px;
  border-radius: 8px;
  background: var(--light-highlight);
  opacity: 0.35;
`,q=n.Ay.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
  width: min(1400px, 92vw);
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`,G=n.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  min-width: 300px;
`,H=n.Ay.iframe`
  aspect-ratio: 16 / 9;
  width: auto;
  max-width: min(1200px, 90vw);
  height: min(40vh, 640px);
  border: 0;
  border-radius: 12px;
  box-shadow: 0 8px 24px var(--shadow);
`,Z=n.Ay.img`
  width: auto;
  height: auto;
  max-width: min(1200px, 90vw);
  max-height: min(40vh, 640px);
  border-radius: 12px;
  box-shadow: 0 8px 24px var(--shadow);
`,I=n.Ay.a`
  margin-top: 12px;
  font: normal normal bold 22px/28px Montserrat;
  color: var(--dark-highlight);
  text-align: center;
  text-decoration: none;
`,J=n.Ay.span`
  color: var(--dark-highlight);
  opacity: 0.75;
`,K=n.Ay.p`
  margin: 16px 0 0;
  text-align: center;
  line-height: 1.6;
  color: var(--dark-highlight);
  max-width: 700px;
`,Q=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 260px;
  flex-shrink: 0;
  @media (max-width: 900px) {
    width: 100%;
    max-width: 400px;
    align-items: center;
  }
`,F=n.Ay.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  background: var(--dark-highlight);
  color: var(--text-color);
  border: 2px solid var(--light-highlight);
  border-radius: 14px;
  padding: 10px 14px;
  max-width: 260px;
  font-size: 14px;

  img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 2px solid var(--light-highlight);
    flex-shrink: 0;
  }

  &::after {
    content: "";
    position: absolute;
    top: 16px;
    width: 0;
    height: 0;
    border: 8px solid transparent;
  }

  &.left::after {
    right: -16px;
    border-left-color: var(--dark-highlight);
  }

  &.right::after {
    left: -16px;
    border-right-color: var(--dark-highlight);
  }
`}}]);
//# sourceMappingURL=659.be1dcca5.chunk.js.map
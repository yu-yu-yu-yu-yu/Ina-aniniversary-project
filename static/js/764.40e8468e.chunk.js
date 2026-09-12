/*! For license information please see 764.40e8468e.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkina=globalThis.webpackChunkina||[]).push([[764],{9372(t,e,o){o.d(e,{A:()=>l});var r=o(5043),n=o(403),i=o(579);const s=n.Ay.button`
  display: none;
  background: var(--dark-highlight) 0% 0% no-repeat padding-box;
  position: fixed;
  cursor: pointer;
  bottom: 20px;
  right: 30px;
  z-index: 500;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  border: 0px;

  font-size: 2.5em;
  height: 80px;
  width: 80px;

  @media only screen and (max-width: 768px) {
    font-size: 2em;
    height: 60px;
    width: 60px;
  }
`,l=()=>{const[t,e]=(0,r.useState)(!1);return window.addEventListener("scroll",()=>{!t&&window.pageYOffset>400?e(!0):t&&window.pageYOffset<=400&&e(!1)}),(0,i.jsx)(s,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},style:{display:t?"flex":"none"},children:(0,i.jsx)("i",{className:"fa fa-arrow-up","aria-hidden":"true",style:{color:"white"}})})}},4709(t,e,o){o.d(e,{Fp:()=>s,JY:()=>h,Pn:()=>c,uW:()=>a});var r=o(403),n=o(2582),i=(o(5043),o(579));const s=r.Ay.nav`
  background: transparent
    linear-gradient(
      180deg,
      var(--light-background) 90%,
      var(--dark-highlight) 100%
    )
    0% 0% no-repeat padding-box;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 100;
  flex: 0 1;
  padding: 0.25rem 1rem;
  text-align: left;
  font: normal normal normal 30px/34px montserrat;
  letter-spacing: 0;
  justify-content: space-between;
  align-items: center;
  &.mobile {
    font: normal normal normal 20px/25px Montserrat;
  }
  bottom-shadow: 0px 4px 4px var(--shadow);

  @media only screen and (max-width: 700px) {
    font: normal normal normal 22px/26px montserrat;
  }
`,l=r.Ay.button`
  possition: fixed;
  font-size: inherit;
  background: var(--dark-highlight);
  border: 2px solid var(--light-highlight);
  border-radius: 50%;
  width: 1.4em;
  height: 1.4em;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  transition:
    background 0.2s,
    color 0.2s,
    border 0.2s;

  .fa-home {
    color: var(--light-highlight);
  }

  &:hover {
    background: var(--dark-highlight);
    border: 2px solid var(--light-highlight);
  }
`,a=r.Ay.button`
  font: normal normal 700 13px/18px Montserrat;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  background: var(--dark-highlight);
  color: var(--text-color);
  border: 2px solid var(--light-highlight);
  border-radius: 10px;
  padding: 8px 14px;
  margin-left: 8px;
  margin-right: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  flex-shrink: 0;
  transition: opacity 0.2s;
  @media only screen and (max-width: 700px) {
    padding: 8px 10px;
    gap: 0;
    .btn-text {
      display: none;
    }
  }
  &:hover {
    opacity: 0.8;
  }
`,h=r.Ay.div`
  position: absolute;
  top: 60px;
  right: 10px;
  background: var(--dark-highlight);
  color: var(--text-color);
  border: 2px solid var(--light-highlight);
  border-radius: 12px;
  box-shadow: 0 4px 16px var(--shadow);
  padding: 16px 20px;
  font-size: clamp(12px, 0.5em, 15px);
  z-index: 100;
  min-width: 260px;
  max-width: min(90vw, 460px);
  max-height: 80vh;
  overflow-y: auto;
`,c=()=>(0,i.jsx)(l,{children:(0,i.jsx)(n.k2,{exact:!0,to:"/",children:(0,i.jsx)("i",{className:"fa fa-home"})})})},7362(t,e,o){o.d(e,{A:()=>c});var r=o(5043),n=o(403),i=o(9944),s=o(579);const l=n.Ay.button`
  flex-shrink: 0;
  background: transparent;
  border: 2px solid var(--light-highlight);
  color: var(--light-highlight);
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s;
  &:hover {
    background: var(--light-highlight);
    color: var(--dark-highlight);
  }
`,a=n.Ay.div`
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
`,h=n.Ay.span`
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  background: var(--dark-highlight);
  color: var(--background);
  font-size: 12px;
  white-space: nowrap;
  padding: 4px 8px;
  border-radius: 6px;
  pointer-events: none;
  z-index: 1;
`,c=t=>{let{slug:e,label:o,className:n}=t;const[c,p]=(0,r.useState)(!1);return(0,s.jsxs)(a,{className:n,children:[(0,s.jsx)(l,{type:"button",onClick:async()=>{await(0,i.c)(e)&&(p(!0),setTimeout(()=>p(!1),1600))},title:o,"aria-label":o,children:(0,s.jsx)("i",{className:"fa fa-share","aria-hidden":"true"})}),c&&(0,s.jsx)(h,{children:"Link copied!"})]})}},6088(t,e,o){o.d(e,{s:()=>n});var r=o(5043);const n=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const[o,n]=(0,r.useState)(null),[i,s]=(0,r.useState)(!0),[l,a]=(0,r.useState)(null),h=async()=>{s(!0),a(null);try{const o=await fetch(t,e);if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);const r=await o.json();n(r)}catch(o){a(o)}finally{s(!1)}};(0,r.useEffect)(()=>{h()},[t,JSON.stringify(e)]);return{data:o,loading:i,error:l,refetch:()=>{h()}}}},9944(t,e,o){o.d(e,{L:()=>r,c:()=>n});const r=function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];const r=e.filter(Boolean).join(" ");return`${r.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,40)}-${(t=>{let e=2166136261;for(let o=0;o<t.length;o++)e^=t.charCodeAt(o),e=Math.imul(e,16777619);return(e>>>0).toString(36)})(r)}`},n=async t=>{const e=`${window.location.origin}${window.location.pathname}#${t}`;try{var o;return await(null===(o=navigator.clipboard)||void 0===o?void 0:o.writeText(e)),!0}catch{return!1}}},4997(t,e,o){o.d(e,{A:()=>p});var r=o(5043),n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},n(t,e)};var i=function(){return i=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},i.apply(this,arguments)};var s="Pixel",l="Percent",a={unit:l,value:.8};function h(t){return"number"===typeof t?{unit:l,value:100*t}:"string"===typeof t?t.match(/^(\d*(\.\d+)?)px$/)?{unit:s,value:parseFloat(t)}:t.match(/^(\d*(\.\d+)?)%$/)?{unit:l,value:parseFloat(t)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),a):(console.warn("scrollThreshold should be string or number"),a)}var c=function(t){function e(e){var o=t.call(this,e)||this;return o.lastScrollTop=0,o.actionTriggered=!1,o.startY=0,o.currentY=0,o.dragging=!1,o.maxPullDownDistance=0,o.getScrollableTarget=function(){return o.props.scrollableTarget instanceof HTMLElement?o.props.scrollableTarget:"string"===typeof o.props.scrollableTarget?document.getElementById(o.props.scrollableTarget):(null===o.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},o.onStart=function(t){o.lastScrollTop||(o.dragging=!0,t instanceof MouseEvent?o.startY=t.pageY:t instanceof TouchEvent&&(o.startY=t.touches[0].pageY),o.currentY=o.startY,o._infScroll&&(o._infScroll.style.willChange="transform",o._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},o.onMove=function(t){o.dragging&&(t instanceof MouseEvent?o.currentY=t.pageY:t instanceof TouchEvent&&(o.currentY=t.touches[0].pageY),o.currentY<o.startY||(o.currentY-o.startY>=Number(o.props.pullDownToRefreshThreshold)&&o.setState({pullToRefreshThresholdBreached:!0}),o.currentY-o.startY>1.5*o.maxPullDownDistance||o._infScroll&&(o._infScroll.style.overflow="visible",o._infScroll.style.transform="translate3d(0px, "+(o.currentY-o.startY)+"px, 0px)")))},o.onEnd=function(){o.startY=0,o.currentY=0,o.dragging=!1,o.state.pullToRefreshThresholdBreached&&(o.props.refreshFunction&&o.props.refreshFunction(),o.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame(function(){o._infScroll&&(o._infScroll.style.overflow="auto",o._infScroll.style.transform="none",o._infScroll.style.willChange="unset")})},o.onScrollListener=function(t){"function"===typeof o.props.onScroll&&setTimeout(function(){return o.props.onScroll&&o.props.onScroll(t)},0);var e=o.props.height||o._scrollableNode?t.target:document.documentElement.scrollTop?document.documentElement:document.body;o.actionTriggered||((o.props.inverse?o.isElementAtTop(e,o.props.scrollThreshold):o.isElementAtBottom(e,o.props.scrollThreshold))&&o.props.hasMore&&(o.actionTriggered=!0,o.setState({showLoader:!0}),o.props.next&&o.props.next()),o.lastScrollTop=e.scrollTop)},o.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:e.dataLength},o.throttledOnScrollListener=function(t,e,o,r){var n,i=!1,s=0;function l(){n&&clearTimeout(n)}function a(){var a=this,h=Date.now()-s,c=arguments;function p(){s=Date.now(),o.apply(a,c)}i||(r&&!n&&p(),l(),void 0===r&&h>t?p():!0!==e&&(n=setTimeout(r?function(){n=void 0}:p,void 0===r?t-h:t)))}return"boolean"!==typeof e&&(r=o,o=e,e=void 0),a.cancel=function(){l(),i=!0},a}(150,o.onScrollListener).bind(o),o.onStart=o.onStart.bind(o),o.onMove=o.onMove.bind(o),o.onEnd=o.onEnd.bind(o),o}return function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}(e,t),e.prototype.componentDidMount=function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},e.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},e.prototype.componentDidUpdate=function(t){this.props.dataLength!==t.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},e.getDerivedStateFromProps=function(t,e){return t.dataLength!==e.prevDataLength?i(i({},e),{prevDataLength:t.dataLength}):null},e.prototype.isElementAtTop=function(t,e){void 0===e&&(e=.8);var o=t===document.body||t===document.documentElement?window.screen.availHeight:t.clientHeight,r=h(e);return r.unit===s?t.scrollTop<=r.value+o-t.scrollHeight+1:t.scrollTop<=r.value/100+o-t.scrollHeight+1},e.prototype.isElementAtBottom=function(t,e){void 0===e&&(e=.8);var o=t===document.body||t===document.documentElement?window.screen.availHeight:t.clientHeight,r=h(e);return r.unit===s?t.scrollTop+o>=t.scrollHeight-r.value:t.scrollTop+o>=r.value/100*t.scrollHeight},e.prototype.render=function(){var t=this,e=i({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),o=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),n=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return r.createElement("div",{style:n,className:"infinite-scroll-component__outerdiv"},r.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(e){return t._infScroll=e},style:e},this.props.pullDownToRefresh&&r.createElement("div",{style:{position:"relative"},ref:function(e){return t._pullDown=e}},r.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!o&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},e}(r.Component);const p=c}}]);
//# sourceMappingURL=764.40e8468e.chunk.js.map
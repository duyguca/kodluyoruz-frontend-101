(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{KbG7:function(e,n,t){"use strict";t.d(n,"a",(function(){return pe}));var i=t("q1tI"),r=t.n(i),a=t("vOnD"),o=t("DUc8"),c=t("MW5B"),l=t("msns"),u=(t("2B1R"),t("zKZe"),t("o6BI")),s=t("LTAh"),d=a.d.div.withConfig({displayName:"ThumbnailsTrackstyles__ThumbnailsContainer",componentId:"sc-141n2vw-0"})(["\n  display: flex;\n  flex-direction: ",";\n  align-items: center;\n  justify-content: ",";\n  height: 100%;\n  opacity: ",";\n"],(function(e){return e.vertical?"column":"row"}),(function(e){return e.vertical?"flex-start":"center"}),(function(e){return e.mounted?1:0})),f=a.d.button.withConfig({displayName:"ThumbnailsTrackstyles__ChevronWrapper",componentId:"sc-141n2vw-1"})(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: ",";\n  cursor: pointer;\n  padding: ",";\n\n  transition: opacity 0.2s ease-in-out;\n\n  ","\n\n  ",";\n"],(function(e){return e.disabled?.3:1}),(function(e){return e.theme.sizing("4xs")}),(function(e){return e.vertical?Object(a.c)(["\n          width: 100%;\n          ","\n        "],"right"===e.chevronDirection&&Object(a.c)(["\n            padding-top: 0;\n          "])):Object(a.c)(["\n          height: 100%;\n        "])}),(function(e){return"hidden"===e.type?Object(a.c)(["\n          visibility: hidden;\n          pointer-events: none;\n          opacity: 0;\n        "]):"disabled"===e.type?Object(a.c)(["\n          opacity: 0.6;\n          pointer-events: none;\n        "]):""})),h=Object(a.d)(s.a).withConfig({displayName:"ThumbnailsTrackstyles__StyledChevron",componentId:"sc-141n2vw-2"})(["\n  color: ",";\n  opacity: 0.75;\n\n  ",";\n"],(function(e){return e.theme.color("grey_dark")}),(function(e){return e.vertical&&Object(a.c)(["\n      transform: rotate(",");\n    "],"left"===e.chevronDirection?"-90deg":"90deg")})),m=a.d.div.withConfig({displayName:"ThumbnailsTrackstyles__TrackContainer",componentId:"sc-141n2vw-3"})(["\n  max-height: ",";\n  max-width: 100%;\n  margin: 0;\n  overflow: hidden;\n"],(function(e){return e.vertical?"100%":"none"})),p=a.d.ol.withConfig({displayName:"ThumbnailsTrackstyles__Track",componentId:"sc-141n2vw-4"})(["\n  display: inline-flex;\n  flex-direction: ",";\n  align-items: center;\n  list-style-type: none;\n\n  transition: transform 0.2s ease-in-out;\n"],(function(e){return e.vertical?"column":"row"})),v=a.d.li.withConfig({displayName:"ThumbnailsTrackstyles__Thumbnail",componentId:"sc-141n2vw-5"})(["\n  height: ",";\n  padding: ",";\n"],(function(e){return e.vertical?"auto":"100%"}),(function(e){return e.vertical?"2px 2px "+e.theme.sizing("xxs")+" 2px":"2px "+e.theme.sizing("3xs")}));var g=function(e){var n=e.fullscreen,t=e.activeIndex,a=e.children,o=e.chevrons,l=e.vertical,s=a.length,g=Object(i.useState)(0),b=g[0],y=g[1],w=Object(i.useState)(0),x=w[0],O=w[1],j=Object(i.useState)(null),E=j[0],I=j[1],C=Object(i.useState)(!1),_=C[0],S=C[1],k=Object(i.useState)(!1),z=k[0],N=k[1],T=Object(i.useRef)(),F=Object(i.useRef)(),B=function(e){return T.current?T.current.getBoundingClientRect()[e]:0},P=function(e){return F.current?F.current.getBoundingClientRect()[e]:0},M=Object(i.useCallback)((function(e){if(!E)return e;var n=E/2,t=Math.min(Math.max(e,n),s-n);O(t)}),[s,E]),W=Object(i.useCallback)((function(){if(!E||E>=s)return y(0);var e=E/2,n=B(l?"height":"width")/E;y(Math.ceil(x-e)*-n)}),[s,E,l,x]),D=Object(i.useCallback)((function(){S(!1),I(Math.floor(l?B("height")/P("height"):B("width")/P("width")))}),[l]),q=function(e){if(!E||E>=s)return"hidden";var n=E/2;return"prev"===e&&x<=n||"next"===e&&x>=Math.floor(s-n)?"disabled":"active"},R=function(e){if(!E||_)return"auto ";var n=P(l?"height":"width")*E;return"width"===e&&l||"height"===e&&!l?"auto":n},L=Object(i.useCallback)((function(){return S(!0)}),[]);Object(i.useEffect)((function(){return window.addEventListener("resize",L,{passive:!0}),function(){window.removeEventListener("resize",L,{passive:!0})}}),[L]),Object(u.a)((function(){_&&D()}),[_,D]),Object(i.useEffect)((function(){N(!0)}),[]),Object(i.useEffect)((function(){W()}),[W]),Object(i.useEffect)((function(){M(t)}),[t,M]),Object(i.useEffect)((function(){L()}),[n,L]);var V=function(e){if(!o||!_&&E&&E>=s)return null;var t="prev"===e?"left":"right";return r.a.createElement(f,{type:q(e),onClick:function(){return M("next"===e?x+1:x-1)},tabIndex:n?0:-1,vertical:l,chevronDirection:t},r.a.createElement(c.a,null,"Scroll thumbnails ","prev"===e?"left":"right"),r.a.createElement(h,{vertical:l,chevronDirection:t,width:18,height:18}))};return r.a.createElement(d,{fullscreen:n,vertical:l,mounted:z},V("prev"),r.a.createElement(m,{vertical:l,ref:T},r.a.createElement(p,{style:{width:R("width"),height:R("height"),transform:"translate"+(l?"Y":"X")+"("+b+"px)"},vertical:l},a.map((function(e,n){return r.a.createElement(v,{key:n,ref:0===n?F:null,vertical:l},e)})))),V("next"))};var b=function(e){var n=e.renderThumbnail,t=e.chevrons,a=void 0===t||t,o=e.vertical,c=void 0!==o&&o,l=Object(i.useContext)(pe),u=l.data,s=l.activeIndex,d=l.fullscreen;return r.a.createElement(g,{vertical:c,chevrons:a,activeIndex:s,fullscreen:d},u.map((function(e,t){return n({index:t,data:Object.assign({},e)})})))},y=t("RlS9"),w=t("+DQ/"),x=a.d.button.withConfig({displayName:"Thumbnail__Button",componentId:"e7z052-0"})(["\n  width: ",";\n  height: ",";\n  display: block;\n  position: relative;\n  background: ",";\n  ",";\n\n  cursor: pointer;\n\n  box-shadow: 0px 0px 0px 1px ",";\n\n  transition: box-shadow 0.2s linear;\n\n  ",";\n"],"4.0625rem","2.8125rem",(function(e){return e.theme.color("white")}),(function(e){return e.theme.zIndex("high")}),(function(e){return e.theme.color("grey_light")}),(function(e){return e.selected&&Object(a.c)(["\n      box-shadow: 0px 0px 0px 2px ",";\n    "],e.theme.color("blue_light"))})),O=Object(a.d)(y.b).withConfig({displayName:"Thumbnail__StyledImage",componentId:"e7z052-1"})(["\n  max-height: 100%;\n"]),j=Object(a.c)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  height: ",";\n  width: ",";\n  left: 4px;\n  bottom: 4px;\n  background: ",";\n  opacity: 0.8;\n  border-radius: 50%;\n"],(function(e){return e.theme.sizing("md")}),(function(e){return e.theme.sizing("md")}),(function(e){return e.theme.color("black")})),E=a.d.div.withConfig({displayName:"Thumbnail__VideoOverlay",componentId:"e7z052-2"})(["\n  ",";\n  border: none;\n  overflow: hidden;\n\n  &::after {\n    display: block;\n    content: '';\n\n    box-sizing: border-box;\n    position: relative;\n    left: 2px;\n    width: ",";\n    height: ",";\n    margin: auto;\n    border-width: "," 0px\n      ","\n      ",";\n    border-color: transparent transparent transparent\n      ",";\n    border-style: solid;\n  }\n"],j,(function(e){return e.theme.sizing(-.3)}),(function(e){return e.theme.sizing(-.3)}),(function(e){return e.theme.sizing(3*-.3)}),(function(e){return e.theme.sizing(3*-.3)}),(function(e){return e.theme.sizing(-.3)}),(function(e){return e.theme.color("grey_light")})),I=a.d.div.withConfig({displayName:"Thumbnail__SpinsetOverlayBackground",componentId:"e7z052-3"})(["\n  ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ",";\n\n  & > svg {\n    width: ",";\n    height: ",";\n  }\n"],j,(function(e){return e.theme.color("grey_light")}),(function(e){return e.theme.sizing(.2)}),(function(e){return e.theme.sizing(.1)})),C=function(){return r.a.createElement(I,null,r.a.createElement(w.a,null))},_=function(e){var n=e.index,t=e.imgUrl,a=e.type,o=e.onClick,l=Object(i.useContext)(pe),u=l.activeIndex,s=l.updateIndex;return r.a.createElement(x,{selected:u===n,onClick:function(){o&&o(),s(n)},"data-test":"mediaviewer-thumbnail"},t&&r.a.createElement(O,{src:{url:t},alt:""}),"video"===a&&r.a.createElement(E,null),"spinset"===a&&r.a.createElement(C,null),r.a.createElement(c.a,null,"Slide "+(n+1)),u===n&&r.a.createElement(c.a,null,"(Current slide)"))},S=t("m4Mt"),k=t("mJdZ"),z=t("PX05"),N=t("loQ3"),T=(t("ma9I"),t("fJOk")),F=["focused","position","onFocus","onBlur","onClick"];function B(e,n){return(B=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function P(){return(P=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var M=a.d.button.withConfig({displayName:"Chevrons__ChevronWrapper",componentId:"ibq7e4-0"})(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  ",";\n  margin: auto ",";\n  width: ",";\n  height: ",";\n  cursor: pointer;\n\n  opacity: ",";\n  transform: ",";\n\n  transition: all 0.2s ease-in-out;\n\n  /* prettier 😖 */\n  ",";\n"],(function(e){return e.theme.zIndex("medium")}),(function(e){return e.theme.sizing("xs")}),(function(e){return e.theme.sizing("lg")}),(function(e){return e.theme.sizing("lg")}),(function(e){return e.focused?.6:0}),(function(e){return e.focused?"scale(1)":"scale(0.8)"}),(function(e){return"left"===e.position?Object(a.c)(["\n          left: 0;\n        "]):"right"===e.position?Object(a.c)(["\n          right: 0;\n        "]):null})),W=function(e){var n=e.focused,t=e.position,r=e.onFocus,a=e.onBlur,o=e.onClick,l=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,F);return i.createElement(M,P({focused:n,position:t,onFocus:r,onBlur:a,onClick:o},l),i.createElement(c.a,null,"left"===t?"Previous Slide":"Next Slide"),i.createElement(T.a,{rotate:"left"===t?180:0,"aria-hidden":!0,width:"2rem",height:"2rem"}))},D=function(e){var n,t;function r(){for(var n,t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return(n=e.call.apply(e,[this].concat(i))||this).state={focused:!1},n.handleFocus=function(){n.setState({focused:!0})},n.handleBlur=function(){n.setState({focused:!1})},n}return t=e,(n=r).prototype=Object.create(t.prototype),n.prototype.constructor=n,B(n,t),r.prototype.render=function(){var e={onFocus:this.handleFocus,onBlur:this.handleBlur,focused:this.state.focused};return i.createElement(i.Fragment,null,i.createElement(W,P({position:"left",onClick:this.props.prevSlide,"data-test":"mediaviewer-chevron-prev"},e)),i.createElement(W,P({position:"right",onClick:this.props.nextSlide,"data-test":"mediaviewer-chevron-next"},e)))},r}(i.Component),q=a.d.li.withConfig({displayName:"Slidestyles__SlideWrapper",componentId:"sc-1350oo9-0"})(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  max-width: 100%;\n  margin: auto;\n\n  ",";\n\n  opacity: ",";\n  transition: opacity 0.2s linear;\n"],(function(e){return e.theme.zIndex(e.active?"low":"base")}),(function(e){return e.active?1:0}));var R=function(e){var n=e.index,t=e.children;return r.a.createElement(pe.Consumer,null,(function(e){var i=e.activeIndex,a=e.fullscreen;return r.a.createElement(q,{active:i===n,fullscreen:a,"data-test":"mediaviewer-slide"},t)}))},L=t("xYCZ"),V=t("9WQf"),A=a.d.div.withConfig({displayName:"Slidesstyles__Container",componentId:"sc-1104kcq-0"})(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n\n  ",";\n\n  :hover {\n    "," {\n      opacity: 0.6;\n      transform: scale(1);\n    }\n  }\n  :focus {\n    outline: none;\n    box-shadow: none;\n  }\n"],(function(e){return e.fullscreen&&Object(a.c)(["\n      flex: 1;\n      display: flex;\n    "])}),M),J=a.d.ul.withConfig({displayName:"Slidesstyles__SlidesList",componentId:"sc-1104kcq-1"})(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n\n  list-style-type: none;\n\n  ",";\n"],(function(e){return!e.fullscreen&&Object(a.c)(["\n      :before {\n        display: block;\n        content: '';\n        width: 100%;\n        padding-top: 80%;\n      }\n    "])})),Z=a.d.button.withConfig({displayName:"Slidesstyles__MaximiseButton",componentId:"sc-1104kcq-2"})(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  ",";\n  color: ",";\n  cursor: pointer;\n  ",";\n"],(function(e){return e.theme.font("sm1")}),(function(e){return e.theme.color(e.fullscreen?"black":"blue")}),(function(e){return e.theme.zIndex("low")})),K=a.d.div.withConfig({displayName:"Slidesstyles__IconWrapper",componentId:"sc-1104kcq-3"})(["\n  display: flex;\n  padding: ",";\n  background: ",";\n  border-radius: 50%;\n"],(function(e){return e.theme.sizing("3xs")}),(function(e){return e.theme.color("grey_extra_light")})),Q=Object(a.c)(["\n  width: ",";\n  height: ",";\n"],(function(e){return e.theme.sizing("sm")}),(function(e){return e.theme.sizing("sm")})),G=Object(a.d)(L.a).withConfig({displayName:"Slidesstyles__MaximiseIcon",componentId:"sc-1104kcq-4"})(["\n  ","\n"],Q),U=Object(a.d)(V.a).withConfig({displayName:"Slidesstyles__CloseIcon",componentId:"sc-1104kcq-5"})(["\n  ","\n"],Q),X=t("W6uD");var Y=function(e){var n=Object(k.i)().triggerEvent,t=e.renderMedia,a=Object(i.useContext)(pe),o=a.fullscreen,c=a.allowFullscreen,l=a.toggleFullscreen,u=a.swipingEnabled,s=a.activeIndex,d=a.prevSlide,f=a.nextSlide,h=a.data,m=Object(S.a)();return r.a.createElement(A,{fullscreen:o},r.a.createElement(X.a,{activeIndex:s,prevSlide:d,nextSlide:f,isSwipeable:u},r.a.createElement(J,{fullscreen:o},h.map((function(e,n){return r.a.createElement(R,{key:n,index:n},t({data:Object.assign({},e),index:n}))})))),r.a.createElement(z.a,{breakpoint:"medium",matchWidth:"min"},!o&&r.a.createElement(D,{nextSlide:f,prevSlide:d})),c?r.a.createElement(Z,{onClick:function(){l(),n({label:"pdpFullScreenGallery",eventType:["custom"]})},fullscreen:o,"data-test":"mediaviewer-fullscreen","aria-label":m("mediaViewer.slides.zoom")},r.a.createElement(K,null,o?r.a.createElement(U,null):r.a.createElement(G,null)),!o&&r.a.createElement(z.a,{breakpoint:"small",matchWidth:"min"},r.a.createElement(N.a,{id:"mediaViewer.slides.zoom"}))):null)},H=t("s1Dy"),$=t("V21w"),ee=a.d.div.withConfig({displayName:"StaticImagestyles__Outer",componentId:"sc-1atjhv8-0"})(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n"]),ne=a.d.div.withConfig({displayName:"StaticImagestyles__Inner",componentId:"sc-1atjhv8-1"})(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n"]),te=a.d.div.withConfig({displayName:"StaticImagestyles__DefaultImgWrapper",componentId:"sc-1atjhv8-2"})(["\n  height: 100%;\n  width: 100%;\n"]),ie=Object(a.d)($.a).withConfig({displayName:"StaticImagestyles__StyledLazyImage",componentId:"sc-1atjhv8-3"})(["\n  height: 100%;\n  width: 100%;\n  position: relative;\n\n  & picture {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    width: 100%;\n\n    & img {\n      max-height: 100%;\n      max-width: 100%;\n      flex: 0 0 auto;\n    }\n  }\n"]),re=function(e){var n=e.shouldLoad,t=e.url;return r.a.createElement(ee,null,r.a.createElement(ne,null,n?r.a.createElement(te,{"data-test":"mediaviewer-image-lowres"},r.a.createElement(ie,{srcset:[{url:t}],alt:"",objectFit:"contain"})):null))},ae=["index"];function oe(){return(oe=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var ce=t("cnW9"),le=["index","autoPlay"];function ue(){return(ue=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var se=t("rHgq"),de=["index"];function fe(){return(fe=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var he=a.d.div.withConfig({displayName:"MediaViewer__Wrapper",componentId:"sc-12y8s5i-0"})(["\n  position: relative;\n  outline: none;\n  user-select: none;\n  height: 100%;\n\n  ","\n"],(function(e){return e.fullscreen&&Object(a.c)(["\n      width: 100%;\n      height: 100%;\n      overflow-y: auto;\n      -webkit-overflow-scrolling: touch;\n    "])})),me=a.d.div.withConfig({displayName:"MediaViewer__FullscreenWrapper",componentId:"sc-12y8s5i-1"})(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  ","\n"],(function(e){return e.theme.zIndex("high")})),pe=Object(i.createContext)({data:[],activeIndex:0,fullscreen:!1,allowFullscreen:!0,swipingEnabled:!0,toggleFullscreen:function(){},setSwipeEvents:function(){},nextSlide:function(){},prevSlide:function(){},updateIndex:function(){}});function ve(e){var n=e.data,t=e.autoplay,a=e.interval,u=e.onPrevSlide,s=e.onNextSlide,d=e.onFullscreen,f=e.allowFullscreen,h=void 0===f||f,m=e.children,p=Object(i.useRef)(),v=Object(i.useRef)(),g=Object(i.useState)(0),b=g[0],y=g[1],w=Object(i.useState)(!1),x=w[0],O=w[1],j=Object(i.useState)(!0),E=j[0],I=j[1],C=n.length-1,_=function(){u&&u(),y(b-1<0?C:b-1)},S=Object(i.useCallback)((function(){s&&s(),y(b+1>C?0:b+1)}),[s,b,C]),k=Object(i.useCallback)((function(){t&&(p.current&&clearInterval(p.current),p.current=setInterval(S,a))}),[S,t,a]),z=Object(i.useCallback)((function(e){y(e),k()}),[k]);Object(i.useEffect)((function(){k()}),[k]),Object(i.useEffect)((function(){d&&d(x)}),[x,d]);var N={data:n,activeIndex:b,fullscreen:x,allowFullscreen:h,toggleFullscreen:function(){x?(O(!1),k()):(O(!0),p.current&&clearInterval(p.current))},nextSlide:S,prevSlide:_,updateIndex:z,swipingEnabled:E,setSwipeEvents:I},T=r.a.createElement(he,{onKeyDown:function(e){var n=e.key;return"ArrowRight"===n?S():"ArrowLeft"===n?_():"Escape"===n&&x?O(!1):void 0},tabIndex:"-1",role:"region",ref:v,fullscreen:x},m,r.a.createElement(c.a,{"aria-live":"polite","aria-atomic":"true"},"Item ",b+1," of ",n.length));return r.a.createElement(pe.Provider,{value:N},x?r.a.createElement(o.a,null,r.a.createElement(l.a,null),r.a.createElement(me,null,T)):T)}ve.defaultProps={interval:3e3,autoplay:!1},ve.Slides=Y,ve.Thumbnails=b,ve.Thumbnail=_,ve.ZoomableImage=H.a,ve.StaticImage=function(e){var n=e.index,t=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,ae),a=Object(i.useContext)(pe).activeIndex;return r.a.createElement(re,oe({},t,{active:a===n,shouldLoad:Math.abs(n-a)<=1}))},ve.VideoPlayer=function(e){var n=e.index,t=e.autoPlay,a=void 0!==t&&t,o=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,le),c=Object(i.useContext)(pe).activeIndex;return r.a.createElement(ce.a,ue({},o,{autoPlay:a,active:n===c}))},ve.SpinSet=function(e){var n=e.index,t=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,de),a=Object(i.useContext)(pe),o=a.activeIndex,c=a.fullscreen,l=a.setSwipeEvents;return Object(i.useEffect)((function(){l(n!==o)}),[l,n,o]),r.a.createElement(se.a,fe({fullscreen:c,active:n===o},t))};n.b=ve}}]);
//# sourceMappingURL=74158fa4f13bd65c1e0d.16.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{B33w:function(e,n,t){"use strict";t.d(n,"d",(function(){return s})),t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return g})),t.d(n,"c",(function(){return A}));var a=t("NFLX"),c=t("q1tI"),r=t.n(c),o=t("vftj"),i=t.n(o),l=t("mJdZ");var u,s=function(){var e=Object(l.g)().cookieSettings,n=Object(c.useState)(!1),t=n[0],o=n[1];Object(c.useEffect)((function(){var n,t=null==e||null===(n=e.preferences)||void 0===n?void 0:n.some((function(e){return"analytics"===e.label&&!0===e.value}));o(t)}),[e]);var u=a.a.nps&&a.a.nps.url;return"undefined"!=typeof window&&u&&t?r.a.createElement(i.a,null,r.a.createElement("script",{type:"text/javascript",async:!0,src:u})):null},f=(t("rB9j"),t("Rm1S"),t("hByQ"),t("c/gA")),d=t("lN9A"),p=t("Ps6z"),b=t("l4gV"),m=function(){var e=Object(f.a)(),n=Object(d.a)(),t=n.search,a=n.path,o=Object(l.f)().setAdultAgeGateShown,i=Object(c.useRef)(null),u=Object(c.useState)(null),s=u[0],m=u[1],v=Object(c.useState)(!1),k=v[0],h=v[1],y=Object(c.useState)(!1),C=y[0],O=y[1],E=(null==t?void 0:t.match(/(cmp|CMP)=[^&]*(SHOP|AFC|EMC)/))||!1,g=[/^(L|l)(I|i)(F|f)(E|e)\/(S|s)(U|u)(B|b)(S|s)(C|c)(R|r)(I|i)(P|p)(T|t)(I|i)(O|o)(N|n)\/(L|l)(E|e)(G|g)(A|a)(C|c)(Y|y)($|\/.*)/i,/^(L|l)(E|e)(G|g)(A|a)(L|l)($|\/.*)/i,/^(V|v)(I|i)(P|p)\/(J|j)(O|o)(I|i)(N|n)($|\/.*)/i,/^(V|v)(I|i)(P|p)\/(R|r)(E|e)(G|g)(I|i)(S|s)(T|t)(E|e)(R|r)($|\/.*)/i,/^(A|a)(B|b)(O|o)(U|u)(T|t)(U|u)(S|s)\/(C|c)(A|a)(R|r)(E|e)(E|e)(R|r)(S|s)($|\/.*)/i,/^(C|c)(A|a)(R|r)(E|e)(E|e)(R|r)(S|s)($|\/.*)/i];i.current||"undefined"==typeof document||(m(Object(p.e)("AGE_GATE")),i.current=!0);var j=Object(c.useCallback)((function(){o(!0),h(!1),O(!1),Object(p.h)({name:"AGE_GATE",value:"grown_up",domain:".lego.com"}),m("grown_up")}),[o]),I=function(){Object(p.h)({name:"AGE_GATE",value:"kids",domain:".lego.com"}),Object(l.e)("kids")},A=Object(c.useCallback)((function(){i.current&&("grown_up"===s||E||a&&g.some((function(e){return a.match(e)}))?j():(h(!1),O(!0),o(!0)))}),[s,E,a,g,j,o]);return Object(c.useEffect)((function(){e.fetched&&(e.isLid?e.isAdult?A():(h(!0),O(!1)):A())}),[e,j,A]),C?r.a.createElement(b.a,{showKidsOnlyOverlay:!1,selectGrownUps:j,selectKids:I}):k&&r.a.createElement(b.a,{showKidsOnlyOverlay:!0,selectGrownUps:function(){},selectKids:I})},v=(t("fbCW"),t("2B1R"),t("zKZe"),t("UxlC"),t("o54f")),k=t("QmTW"),h=t("lTCR");var y,C,O=t.n(h)()(u||(y=["\n  query CookieModalSettings($reconsentDate: String) {\n    cookieModalSettings(reconsentDate: $reconsentDate) {\n      categories {\n        channelID\n        channelType\n        title\n        parentChannel\n        statementID\n        description\n      }\n      translations {\n        strictlyNecessaryName\n        strictlyNecessaryDescription\n        acceptAllCookiesText\n        rejectAllCookiesText\n        savePreferenceText\n        closeTranslation\n        consentOptInText\n        consentOptOutText\n        moreInformationTranslation\n      }\n      reconsentDate\n      forceModal\n    }\n  }\n"],C||(C=y.slice(0)),y.raw=C,u=y)),E=function(e,n){return null!=e&&e.categories?e.categories.map((function(e){var t=null==n?void 0:n.find((function(n){return n.label===(null==e?void 0:e.parentChannel)}));return Object.assign({},e,{label:(null==t?void 0:t.label)||(null==e?void 0:e.parentChannel),value:(null==t?void 0:t.value)||!1})})):[]},g=function(){var e=Object(d.a)(),n=e.query,t=e.pathname,a=e.replace,o=Object(c.useState)("show"===n["consent-modal"]),i=o[0],u=o[1],s=Object(c.useState)(!1),f=s[0],b=s[1],m=Object(c.useState)(null),h=m[0],y=m[1],C=Object(c.useState)(!1),g=C[0],j=C[1],I=Object(l.i)().triggerEvent,A=Object(l.g)().cookieSettings,S=Object(l.f)(),T=S.saveConsentSelection,G=S.modalRenderable,D=Object(v.e)(O,{variables:{reconsentDate:null==A?void 0:A.reconsentDate},skip:!G||h}).data;Object(c.useEffect)((function(){"show"===n["consent-modal"]&&(u(!0),j(!1))}),[n]);var P=Object(c.useCallback)((function(e){var n=e.preferences,t=n.find((function(e){return"legomarketing"===e.label&&e.value})),a=n.find((function(e){return"thirdparty"===e.label&&e.value})),c=[{label:"acceptCookiesAnalytics",eventType:["custom"],options:{intercept:!0}},{label:"acceptCookiesLEGOMarketing",eventType:["custom"],options:{intercept:!0}},{label:"acceptCookiesThirdParty",eventType:["custom"],options:{intercept:!0}},{label:"acceptCookiesThirdPartyAdCloud",eventType:["custom"],options:{intercept:!0}}];t||c.push({label:"noCookiesLEGOMarketing",eventType:["custom"],options:{intercept:!0}}),a||c.push({label:"noCookiesThirdParty",eventType:["custom"],options:{intercept:!0}}),I(c)}),[I]),w=Object(c.useCallback)((function(){if(j(!0),I([{label:"consentModalShown",eventType:["analyticsLayer"],data:{shownModal:!0}}]),u(!1),"show"===n["consent-modal"]){var e=Object.assign({},n);delete e["consent-modal"],a({pathname:t,query:e})}}),[t,n,a,I]),M=Object(c.useCallback)((function(e){var n,t={preferences:e.map((function(e){return{label:e.label,value:e.value,channelID:e.channelID,statementID:e.statementID}})),reconsentDate:null==h||null===(n=h.cookieModalSettings)||void 0===n?void 0:n.reconsentDate};T(t),P(t),w()}),[w,h,T,P]);return Object(c.useEffect)((function(){var e;if(Object(p.c)("LEGO_COOKIE_SETTINGS")&&h&&A&&null!=A&&A.preferences&&(null==A||null===(e=A.preferences)||void 0===e||!e.every((function(e){return e.hasOwnProperty("channelID")})))){var n=E(h.cookieModalSettings,A.preferences);M(n)}}),[A,h,M]),Object(c.useEffect)((function(){h&&(h.cookieModalSettings.forceModal&&!f&&(b(!0),u(!0),j(!1)))}),[h,f]),Object(c.useEffect)((function(){D&&y(D)}),[D]),h?r.a.createElement(k.a,{saveCookiePreferences:M,isOpen:i,translations:h.cookieModalSettings.translations,categories:E(h.cookieModalSettings,null==A?void 0:A.preferences),ctaDisabled:g}):null},j=(t("E9XD"),t("m4Mt")),I=t("ex86"),A=function(){var e,n=Object(d.a)(),t=n.query,a=n.replace,c=n.pathname,o=Object(j.a)(),i=function(e){if(e){var n=e.reduce((function(e,n){return e[n.label]=n.value,e}),{}),t=n.analytics,a=n.legomarketing,c=n.thirdparty;return t?a?c?"":"cookie.recs.accept.thirdparty":c?"cookie.recs.accept.legomarketing":"cookie.recs.accept.legomarketing.thirdparty":a?c?"cookie.recs.accept.analytics":"cookie.recs.accept.analytics.thirdparty":c?"cookie.recs.accept.analytics.legomarketing":"cookie.recs.accept.all"}return""}(null===(e=Object(p.d)())||void 0===e?void 0:e.preferences);return i?r.a.createElement(I.a,{title:o(i+".title"),subtitle:o(i+".subtitle"),primaryLink:o("cookie.recs.lets.do.this"),secondaryLink:o("cookie.recs.tell.more"),onPrimaryLinkClick:function(){a({pathname:c,query:Object.assign({},t,{"consent-modal":"show"})})}}):null}},DklV:function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return m}));t("4mDm"),t("oVuX"),t("07d7"),t("5s+n"),t("PKPk"),t("3bBZ");var a=t("33yf"),c=t.n(a),r=t("lY48"),o=t.n(r),i=t("q1tI"),l=t.n(i),u=t("Gr0I"),s=t.n(u),f=t("Jivp"),d=t("m3ks"),p=t("FNVC"),b=s()((function(){return o()({id:"./ExternalLineItem",load:function(){return Promise.all([t.e(110).then(t.bind(null,"SGyS"))]).then((function(e){return e[0]}))},path:function(){return c.a.join(e,"./ExternalLineItem")},resolve:function(){return"SGyS"},chunkName:function(){return"ExternalLineItem"}})}),{loading:p.a}),m=function(){return[l.a.createElement(f.b,{key:d.b.EXTERNAL_LINE_ITEM,path:d.b.EXTERNAL_LINE_ITEM,component:b})]}}).call(this,"packages/feature-external-line-item/src")},Iy8y:function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return m}));t("4mDm"),t("oVuX"),t("07d7"),t("5s+n"),t("PKPk"),t("3bBZ");var a=t("33yf"),c=t.n(a),r=t("lY48"),o=t.n(r),i=t("q1tI"),l=t.n(i),u=t("Gr0I"),s=t.n(u),f=t("m3ks"),d=t("Jivp"),p=t("FNVC"),b=s()((function(){return o()({id:"./CartContainer",load:function(){return Promise.all([Promise.all([t.e(89),t.e(107)]).then(t.bind(null,"Ae/L"))]).then((function(e){return e[0]}))},path:function(){return c.a.join(e,"./CartContainer")},resolve:function(){return"Ae/L"},chunkName:function(){return"CartContainer"}})}),{loading:p.a}),m=function(){return[l.a.createElement(d.b,{key:f.b.CART,path:f.b.CART,exact:!0,component:b})]}}).call(this,"packages/feature-cart/src")},VgpM:function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return m}));t("4mDm"),t("oVuX"),t("07d7"),t("5s+n"),t("PKPk"),t("3bBZ");var a=t("33yf"),c=t.n(a),r=t("lY48"),o=t.n(r),i=t("q1tI"),l=t.n(i),u=t("Gr0I"),s=t.n(u),f=t("m3ks"),d=t("FNVC"),p=t("Jivp"),b=s()((function(){return o()({id:"./DynamicContentContainer",load:function(){return Promise.all([Promise.all([t.e(24),t.e(15),t.e(13),t.e(26),t.e(34),t.e(32),t.e(0),t.e(7),t.e(36),t.e(28),t.e(5),t.e(6),t.e(23),t.e(11),t.e(35),t.e(39),t.e(29),t.e(25),t.e(27),t.e(21),t.e(8),t.e(37),t.e(9),t.e(38),t.e(1),t.e(12),t.e(17),t.e(14),t.e(2),t.e(30),t.e(4),t.e(16),t.e(18),t.e(3),t.e(31),t.e(22),t.e(10),t.e(19),t.e(20),t.e(33),t.e(40),t.e(57),t.e(54),t.e(53),t.e(45),t.e(56),t.e(47),t.e(50),t.e(55),t.e(44),t.e(51),t.e(49),t.e(48),t.e(52),t.e(46),t.e(58),t.e(41),t.e(42),t.e(109)]).then(t.bind(null,"OxRC"))]).then((function(e){return e[0]}))},path:function(){return c.a.join(e,"./DynamicContentContainer")},resolve:function(){return"OxRC"},chunkName:function(){return"DynamicContentContainer"}})}),{loading:d.a}),m=function(){return[l.a.createElement(p.b,{exact:!0,key:"dynamic",path:[f.b.DYNAMIC_PAGE,f.b.DYNAMIC_PAGE_CATEGORY,f.b.DYNAMIC_PAGE_PAGE,f.b.DYNAMIC_PAGE_THEME,f.b.DYNAMIC_PAGE_SEO],component:b})]}}).call(this,"packages/feature-dynamic-content/src")},aJeL:function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return m}));t("4mDm"),t("oVuX"),t("07d7"),t("5s+n"),t("PKPk"),t("3bBZ");var a=t("33yf"),c=t.n(a),r=t("lY48"),o=t.n(r),i=t("q1tI"),l=t.n(i),u=t("Gr0I"),s=t.n(u),f=t("Jivp"),d=t("m3ks"),p=t("FNVC"),b=s()((function(){return o()({id:"./GiftCard",load:function(){return Promise.all([t.e(111).then(t.bind(null,"fxXF"))]).then((function(e){return e[0]}))},path:function(){return c.a.join(e,"./GiftCard")},resolve:function(){return"fxXF"},chunkName:function(){return"GiftCard"}})}),{loading:p.a}),m=function(){return[l.a.createElement(f.b,{key:d.b.GIFT_CARDS,path:d.b.GIFT_CARDS,component:b})]}}).call(this,"packages/feature-gift-card/src")}}]);
//# sourceMappingURL=7f7996fc5b52008386a0.131.js.map
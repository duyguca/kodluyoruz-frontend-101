(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{"8awM":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return d}));var r=n("vOnD"),a=n("gNbk"),o=Object(r.d)(a.a).withConfig({displayName:"ProductDetailsPagestyles__Breadcrumbs",componentId:"sc-1waehzg-0"})(["\n  max-width: ",";\n  padding: ",";\n  background: ",";\n\n  & > li:last-child {\n    overflow: hidden;\n  }\n\n  & > li > span {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n"],(function(e){return e.theme.maxWidth()}),(function(e){return e.theme.sizing("ms")}),(function(e){return e.theme.color("white")})),c=r.d.div.withConfig({displayName:"ProductDetailsPagestyles__ProductOverviewContainer",componentId:"sc-1waehzg-1"})(["\n  width: 100%;\n  max-width: ",";\n  padding: 0 ",";\n  margin: 0 auto;\n"],(function(e){return e.theme.maxWidth()}),(function(e){return e.theme.sizing("ms")})),i=r.d.div.withConfig({displayName:"ProductDetailsPagestyles__ProductOverviewLayout",componentId:"sc-1waehzg-2"})(["\n  display: flex;\n  flex-direction: column;\n\n  ","\n"],(function(e){return e.theme.media.min("medium")(Object(r.c)(["\n      flex-direction: row;\n      align-items: flex-start;\n      padding: 0;\n      border-top: 1px solid ",";\n    "],e.theme.color("grey_light")))})),u=r.d.span.withConfig({displayName:"ProductDetailsPagestyles__LoadingSpinnerWrapper",componentId:"sc-1waehzg-3"})(["\n  display: flex;\n  justify-content: center;\n"]),l=r.d.div.withConfig({displayName:"ProductDetailsPagestyles__GalleryAttributesWrapper",componentId:"sc-1waehzg-4"})(["\n  width: 100%;\n  display: flex;\n\n  ","\n"],(function(e){return e.theme.media.min("medium")(Object(r.c)(["\n      flex-direction: column;\n      border-right: 1px solid ",";\n    "],e.theme.color("grey_light")))})),d=r.d.div.withConfig({displayName:"ProductDetailsPagestyles__ProductDynamicContentContainer",componentId:"sc-1waehzg-5"})(["\n  padding: "," 0;\n"],(function(e){return e.theme.sizing("md")}))},XPtP:function(e,t,n){"use strict";n.r(t);n("uqXc"),n("zKZe"),n("rB9j"),n("UxlC");var r,a,o=n("q1tI"),c=n.n(o),i=n("lN9A"),u=n("qFJY"),l=n("FNVC"),d=n("mfTF"),s=n("XIbt"),p=(n("TeQF"),n("x0AG"),n("yq1k"),n("2B1R"),n("sMBO"),n("JTJg"),n("yWo2"),n("NFLX")),m=n("qfJt"),f=n("PX05"),g=n("1aUu"),v=n("vOnD"),y=n("Ifwf"),b=n("ttZb"),h=n("FkZz"),w=n("0nSe"),O=n("+eAc"),C=n("m4Mt"),P=n("c/gA"),E=n("6ewN"),j=n("mJdZ"),I=n("MTJR"),T=n("ljv4"),S=n("fMER"),x=n("8r3A"),R=n("TrQZ"),_=n("YD25"),D=n("hyGp"),V=n("gdfo"),k=n("fkuv"),N=n("fYqM"),B=n("29xT"),U=n("xioW"),z=n("OQiI"),M=n("ihpV"),Q=n("uj1l"),F=n("VWs9"),L=n("5Qam"),q=n("8awM"),A=n("FdIz"),W=Object(I.f)(Object(I.e)((function(e){var t,n,r,a=e.product,u=e.updateProductDetailsQuery,l=e.productDetailsContentQuery,d=Object(C.a)(),s=Object(o.useContext)(v.a).media,I=Object(i.a)(),W=I.locale,J=I.pathname,$=I.query,X=I.country,Z=Object(P.a)(),G=Object(j.i)().triggerEvent,Y=Object(o.useState)(null),K=Y[0],H=Y[1],ee=Object(o.useState)(Object(z.a)(a,K)),te=ee[0],ne=ee[1],re=Object(o.useState)(!1),ae=re[0],oe=re[1],ce=Object(o.useRef)(null),ie=Object(o.useState)({reviewsCount:null,reviewsRating:Object(z.b)(te,"rating")}),ue=ie[0],le=ie[1],de=Object(o.useRef)(!1),se=Object(o.useRef)(!1),pe=Object(b.b)(l,{onCompleted:function(e){var t,n,r=(null!=(n=e)&&null!=(n=n.productContent)?n.contentBody:n)||[],a=null!=(t=e)&&null!=(t=t.productContent)?t.promo:t;u((function(e){return r.length||a?Object(A.a)(r,a,e):e}))}})[0],me=a.productCode,fe=a.ugcBlock?a.ugcBlock.ugcType:null,ge=a.ugcBlock?a.ugcBlock.ugcKey:null,ve=!(!fe||!ge),ye="ReadOnlyProduct"===a.__typename,be=Z&&Z.isOver18yo,he=Z&&Z.isOver16yo,we=Z&&Z.isVip,Oe=Object(w.b)(te,we).availabilityStatus,Ce=Object(M.b)(te),Pe=Ce.currencyCode,Ee=Ce.formattedValue,je=Ce.centAmount,Ie=a.contentBody.some((function(e){return Boolean(e.section)})),Te=""!==a.featuresText,Se=Oe===O.a.retired,xe=O.a.outOfStock.includes(Oe),Re=Se||xe,_e=ue.reviewsRating,De=ue.reviewsCount,Ve=Object(z.b)(te,"showReviews")||!1,ke=p.a.partners[W],Ne=ke?ke.productUrl.replace("[PRODUCT CODE]",me):"";Object(o.useEffect)((function(){void 0!==$[U.b]&&oe(!0)}),[$]),Object(o.useEffect)((function(){ae&&G({label:"pdpScroll",eventType:["custom"],data:{sectionName:"customer reviews"}})}),[ae,G]),Object(o.useEffect)((function(){ne(Object(z.a)(a,K))}),[K,a]),Object(o.useEffect)((function(){if(!de.current&&me&&te){de.current=!0;var e=Object(z.b)(te,"isNew")||!1,t=Object(z.b)(te,"onSale")||!1,n=Object(z.b)(te,"featuredFlags")||[],r=Object(Q.a)(n),a={productId:me,price:Ee,currency:Pe,availability:Oe,rating:_e||"no rating",reviewCount:De||0,isNew:e,onSale:t,flag:r};G({label:"pdpView",eventType:["analyticsLayer"],data:{pageName:a.productId,pageType:"product",productDetail:a,siteSection:"products",siteSectionLvl2:a.productId},options:{queue:!0}})}}),[me,te,Ee,Pe,Oe,De,_e,de,G]),Object(o.useEffect)((function(){!se.current&&me&&(se.current=!0,G([{label:"viewProduct",eventType:["custom"],data:{page_type:"product detail",products:{id:me,price:Ee},country:X}},{label:"viewProductInfinity",eventType:["custom"],data:{page_type:"product detail",products:{id:me,price:Ee}}}]))}),[me,Ee,se,G,X]);var Be=function(e){return G({label:"pdpScroll",eventType:["custom"],data:{sectionName:e}})},Ue=function(){return be&&c.a.createElement(L.a,null,c.a.createElement(m.a,{siteArea:"PRODUCT_DETAIL_PAGE",productCode:me,onIntersection:function(){return Be("recommendations")}}))},ze=(null===(t=a.brandCategory)||void 0===t?void 0:t.name)||a.name,Me=(null===(n=a.brandCategory)||void 0===n?void 0:n.url)||"",Qe=Object(E.a)("@media screen and (max-width: "+s.breakpoints.small+")"),Fe=[{label:d("breadcrumbs.home"),url:"/"},{label:ze,url:Me}];Qe&&Fe.shift(),null!==(r=a.brandCategory)&&void 0!==r&&r.name&&Fe.push({label:a.name,url:""});var Le={locale:W,availabilityStatus:Oe,price:Ee,currency:Pe,productCode:me};return c.a.createElement(h.b.Provider,{currentlyViewedProduct:a},Object(F.a)(a,te,Le,J),c.a.createElement("div",{itemScope:!0,itemType:"http://schema.org/Product"},c.a.createElement(q.a,{items:Fe,"data-test":"breadcrumbs"}),c.a.createElement(q.e,null,c.a.createElement(q.f,null,c.a.createElement(q.b,null,c.a.createElement(S.a,{media:a}),c.a.createElement(f.a,{breakpoint:"medium",matchWidth:"min"},c.a.createElement(R.a,{product:a,variantIndex:K,isOver18yo:be,isVipUser:we,handleOnIntersection:Be}))),c.a.createElement(x.a,{product:a,variantIndex:K,isReadOnlyProduct:ye,isOver18yo:be,isOver16yo:he,isVipUser:we,shouldShowReviews:Ve,reviewsCount:De,reviewsRating:_e,partnerProductUrl:Ne,onVariantSelect:function(e){if("MultiVariantProduct"===a.__typename){var t=a.variants,n=(void 0===t?[]:t).findIndex((function(t){return(void 0===t?{}:t).id===e}));H(-1===n?null:n)}},onClickReviewsLink:function(e){if(ce.current){var t=ce.current.offsetTop-(null!=e?e:0);window.scrollTo(0,t),oe(!0)}}}),c.a.createElement(f.a,{breakpoint:"medium",matchWidth:"max"},c.a.createElement(R.a,{product:a,variantIndex:K,isOver18yo:be,isVipUser:we,handleOnIntersection:Be})))),Re&&Ue(),Ie&&c.a.createElement(g.a,{onIntersection:function(){return Be("features")},threshold:.25},(function(e){var t=e.onRef;return c.a.createElement(V.a,{id:"pdp-features",title:"product.features.title",active:!0,ref:t,onToggle:function(e){return e&&G({label:"pdpFeaturesOpen",eventType:["custom"]})}},c.a.createElement(q.d,null,c.a.createElement(T.a,{id:a.id,analyticsLayerPageName:a.productCode,containers:a.contentBody,onIsRefetchRequired:function(e){var t=e?{productCode:me}:void 0,n=y.a.getInstance().isLoggedIn()&&te&&te.promo&&te.promo.fetchOnClient?{productCode:me,productPrice:je,productCategoryKeys:a.productCategories?a.productCategories.map((function(e){return e.key})).filter(Boolean):[]}:void 0;(t||n)&&pe({variables:{contentSectionVars:t,promoSectionVars:n}})}})))})),ve&&c.a.createElement(g.a,{onIntersection:function(){return Be("ugc")},threshold:.25},(function(e){var t=e.onRef;return c.a.createElement(V.a,{id:"pdp-ugc",title:"product.ugc.title",active:!Ie,ref:t,onToggle:function(e){return e&&G({label:"pdpFanMomentsOpen",eventType:["custom"]})}},a.ugcBlock&&c.a.createElement(k.b,{ugcBlockData:a.ugcBlock}))})),Te&&c.a.createElement(g.a,{onIntersection:function(){return Be("specifications")},threshold:.25},(function(e){var t=e.onRef;return c.a.createElement(V.a,{id:"pdp-specifications",title:"product.specifications.title",active:!Ie&&!ve,ref:t,onToggle:function(e){return e&&G({label:"pdpSpecificationsOpen",eventType:["custom"]})}},c.a.createElement(_.a,{product:a}))})),!ye&&Ve?c.a.createElement(V.a,{id:"pdp-reviews",title:"product.reviews.title",titleSuffix:c.a.createElement(B.a,{productName:a.name,reviewsCount:De,reviewsRating:_e,isOver16yo:he,showLabel:!0,showOnlyText:!0}),ref:ce,active:!Ie&&!ve&&!Te||ae,onToggle:function(e){oe(e),e&&G({label:"pdpCustomerReviewsOpen",eventType:["custom"]})},directMount:!0},c.a.createElement(D.a,{productName:a.name||"",productCode:me,primaryImage:a.primaryImage||"",onCompleted:function(e){var t={reviewsCount:e.reviewsCount,reviewsRating:null===e.reviewsRating?_e:e.reviewsRating};le(t)},isOver16yo:he})):null,c.a.createElement(N.a,{product:a}),!Re&&Ue()))})),{pageType:"product"}),J=n("5P45"),$=n("lTCR"),X=n.n($),Z=n("7aaB"),G=n("WuLY");function Y(e,t){return t||(t=e.slice(0)),e.raw=t,e}var K=X()(r||(r=Y(["\n  query ProductDetailsQuery($slug: String!, $visibility: ProductVisibility) {\n    product(slug: $slug, visibility: $visibility) {\n      ...ProductDetails_Product\n      ...ProductFeatures_Product\n      ...ProductUgc_Product\n      ...ProductOverview_Product\n      ...ProductMediaViewer_Media\n      ...Product_ProductItem\n      contentBody {\n        ...ContentContainerData\n      }\n      colorVariantProducts {\n        ... on ColorVariantProduct {\n          id\n          productCode\n          name\n          slug\n          primaryImage(size: THUMBNAIL)\n          overrideUrl\n        }\n      }\n    }\n  }\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),J.a.fragments.product,Z.a,R.b.product,_.b.product,k.a.product,x.b.product,S.b.fragments.media),H=X()(a||(a=Y(["\n  query ProductDetailsContentQuery(\n    $contentSectionVars: ContentSectionVars\n    $promoSectionVars: PromoSectionVars\n  ) {\n    productContent(\n      contentSectionVars: $contentSectionVars\n      promoSectionVars: $promoSectionVars\n    ) {\n      contentBody {\n        ...ContentContainerData\n      }\n      promo {\n        ...TargetedPromotionSection\n      }\n    }\n  }\n\n  ","\n  ","\n  ","\n"])),J.a.fragments.product,G.a,Z.a),ee=function(e){var t=e.slug,n=e.children,r=Object(b.d)(K,{variables:{slug:t},errorPolicy:"all",fetchPolicy:"cache-first"});return n(Object.assign({},r,{productDetailsContentQuery:H}))},te=n("lRFE");t.default=function(e){var t=e.slug,n=Object(i.a)(),r=n.pathname,a=n.location,p=n.createHref,m=n.locale,f=n.replace,g=Object(o.useCallback)((function(e){var t;t="override"===e.type&&m?"/"+m+e.url:r.replace(r.substring(r.lastIndexOf("/")+1),e.url);var n=p(Object.assign({},a,{pathname:t}));return f({pathname:n,redirectPermanently:!0})}),[m,r,f,p,a]);return c.a.createElement(d.a,null,c.a.createElement(ee,{slug:t},(function(e){var n=e.data,r=e.loading,a=e.updateQuery,o=e.productDetailsContentQuery,i=e.error;return r?c.a.createElement(l.a,null):i?c.a.createElement(u.a,{title:"dynamicPage.error.title",body:"dynamicPage.error.body",linkName:"dynamicPage.error.link"}):n&&n.product&&n.product.productCode?n.product.overrideUrl?(g({type:"override",url:n.product.overrideUrl}),null):n.product.slug&&n.product.slug!==t?(g({type:"slug",url:n.product.slug}),null):c.a.createElement(te.b,{productCode:n.product.productCode},c.a.createElement(W,{product:n.product,updateProductDetailsQuery:a,productDetailsContentQuery:o})):c.a.createElement(s.b,null)})))}}}]);
//# sourceMappingURL=8671b17190505a6fe8b5.81.js.map
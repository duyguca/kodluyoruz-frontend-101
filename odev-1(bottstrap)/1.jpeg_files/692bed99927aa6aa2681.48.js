(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{ps4d:function(e,a,t){"use strict";t.d(a,"a",(function(){return oe}));t("zKZe");var r=t("q1tI"),n=t.n(r),c=t("0TKJ"),o=t("PSKO"),i=t("qfJt"),d=t("X4xA"),l=t("vLsu"),u=(t("rRgP"),t("RD9a")),s=t("+wht"),k=t("aZUc"),m=t("TVXX"),y=t("HO0q"),E=t("LQ6k"),S=t("JxI0"),C=t("5fY5"),g=t("Gjhe"),p=t("kCyl"),D=t("JD0c"),v=t("pgn0"),f=t("k4U1"),w=t("gtsw"),P=t("3H/r"),b=t("LAIc"),B=t("WwvK"),h=t("tuQn"),T=t("OpCg"),x=t("PhdP"),A=t("+def"),L=t("6f8z"),O=t("J9tO"),W=t("xSDu"),j=t("Aql3"),G=t("10jj"),I=t("NMr6"),J=t("RuOb"),M=t("LzCX"),R=t("w8w9"),q=t("+JjS"),N=t("BuE2"),Q=t("HEvS"),X=t("gGMA"),z=t("7gxo"),H=t("7auo"),K=t("APuB"),F=t("OQ7D"),U=t("QbF2"),V=t("bZLz"),Z=t("SzVi"),_=t("0r8m"),Y=t("Coo3"),$=t("EfgX"),ee=t("mRqF"),ae=["id"],te=["productCarouselProducts"],re=["productCarouselProducts","backgroundColor"];function ne(){return(ne=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function ce(e,a){if(null==e)return{};var t,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}var oe=function(e){var a,t=e.section,r=e.codedSections,oe=e.layoutLegacy,ie=e.pageType;if(!t)return null;switch(t.__typename){case"CardContentSection":return n.a.createElement(E.a,{key:t.id,cardContentData:t});case"CardCarouselSection":return n.a.createElement(E.a,{key:t.id,cardContentData:t,preferCarousel:!0});case"CardContentRTWSection":return n.a.createElement(y.a,{key:t.id,cardContentData:t});case"CopyContentSection":return n.a.createElement(C.a,{key:t.id,copyContentData:t,layout:oe});case"CopySection":return n.a.createElement(S.a,{key:t.id,copyBlockData:t,layout:oe});case"ContentBlockMixed":return n.a.createElement(p.a,{key:t.id,contentBlockMixedData:t,layout:oe});case"TextBlock":return n.a.createElement(z.a,{key:t.id,textBlockData:t,layout:oe});case"TextBlockSEO":return n.a.createElement(H.a,{key:t.id,textBlockData:t,layout:oe});case"QuickLinkSection":return n.a.createElement(J.a,{key:t.id,quickLinksData:t});case"HeroBanner":return n.a.createElement(b.a,{key:t.id,heroBannerData:t});case"SidekickBanner":return n.a.createElement(q.a,{key:t.id,sidekickBannerData:t});case"MotionBanner":return n.a.createElement(A.a,{key:t.id,motionBannerData:t});case"MotionSidekick":return n.a.createElement(L.a,{key:t.id,motionSidekickData:t});case"InPageNav":return n.a.createElement(B.a,{key:t.id,inPageNavData:t});case"Gallery":return n.a.createElement(b.a,{key:t.id,heroBannerData:t});case"ListingBannerSection":return n.a.createElement(o.a,{key:t.id,banner:t});case"CountdownBanner":return n.a.createElement(g.a,{key:t.id,countdownBannerData:t});case"BasicProductSection":case"DisruptorProductSection":case"CountdownProductSection":var de=t.id,le=ce(t,ae),ue={fullWidth:(a=le).fullWidth,removePadding:a.removePadding,backgroundColor:a.backgroundColor};return ue.fullWidth=!0,ue.removePadding=!0,n.a.createElement(l.a,{key:de,id:de,layoutSectionData:ue,pageType:ie,sectionType:"ProductSection"},n.a.createElement(Z.a,{productSection:t}));case"RecommendationSection":var se=t.recommendationType,ke=t.title,me=t.showTitle;return n.a.createElement(i.a,{key:t.id,siteArea:se,title:ke,displayTitle:me,cmsContent:!0,layout:oe});case"TableSection":return n.a.createElement(l.a,{key:t.id,id:t.id},n.a.createElement(X.a,{tableData:t}));case"AccordionSection":var ye=t.title,Ee=t.showTitle,Se=t.accordionBlocks;return null!=Se&&Se.length?n.a.createElement(l.a,{key:t.id,id:t.id},n.a.createElement(c.a,{id:t.id,title:ye,showTitle:Ee,accordionBlocks:Se})):null;case"ProductCarouselSection":var Ce=t.productCarouselProducts,ge=ce(t,te);return n.a.createElement(l.a,{key:t.id,id:t.id},n.a.createElement(G.a,ne({},ge,{products:Ce})));case"CustomProductCarouselSection":var pe=t.productCarouselProducts,De=t.backgroundColor,ve=ce(t,re);return n.a.createElement(l.a,{key:t.id,id:t.id,layoutSectionData:{fullWidth:!1,removePadding:!1,backgroundColor:De}},n.a.createElement(G.a,ne({},ve,{backgroundColor:De,customProducts:pe})));case"CategoryListingSection":return n.a.createElement(l.a,{key:t.id,id:t.id,layoutSectionData:{fullWidth:!1,removePadding:!1,backgroundColor:u.b.color("white")}},n.a.createElement(V.a,{categoryListing:t}));case"CrowdTwistWidgetSection":return n.a.createElement(_.a,ne({key:t.id},t));case"CrowdTwistToggleWidgetSection":return n.a.createElement(Y.a,ne({key:t.id},t));case"CrowdTwistCodeRedemptionBanner":return n.a.createElement($.a,ne({key:t.id},t));case"CodedSection":var fe=r&&r[t.componentName];return fe?n.a.createElement(fe,{key:t.id,id:t.id,section:t}):n.a.createElement(ee.a,{key:t.id,id:t.id,section:t});case"UserGeneratedContent":return n.a.createElement(d.a,{userGeneratedContentData:t,layout:oe});case"GridSection":return n.a.createElement(P.a,{key:t.id,grid:t});case"StickyCTASection":return n.a.createElement(N.a,{key:t.id,stickyCTA:Object.assign({},t.item,{fullWidth:Boolean(null==oe?void 0:oe.fullWidth)})});case"AudioSection":return n.a.createElement(m.a,{key:t.id,data:t});case"MotionSidekick1x1":return n.a.createElement(O.a,{key:t.id,motionSidekickData:t});case"ImageTransitionSlider":return n.a.createElement(h.a,{key:t.id,data:t});case"ImageXrayViewer":return n.a.createElement(x.a,{key:t.id,data:t});case"PollsSection":return n.a.createElement(I.a,{key:t.id,data:t});case"ArtNavigation":return n.a.createElement(k.a,{key:t.id,data:t});case"MotionBanner16x9":return n.a.createElement(W.a,{key:t.id,motionBannerData:t});case"QuickLinkAdvancedSection":return n.a.createElement(M.a,{quickLinksAdvancedData:t,key:t.id});case"ArticleSection":return n.a.createElement(s.a,{data:t,key:t.id});case"RelatedArticleSection":return n.a.createElement(l.a,{key:t.id,id:t.id,layoutSectionData:{fullWidth:!1,removePadding:!1,backgroundColor:t.backgroundColor}},n.a.createElement(R.a,{title:t.title,articles:t.articles,backgroundColor:t.backgroundColor}));case"FeatureExplorerSection":return n.a.createElement(w.a,{data:t,key:t.id});case"IdeaGeneratorSection":return n.a.createElement(T.a,{data:t,key:t.id});case"TabbedContentExplorerSection":return n.a.createElement(Q.a,{data:t,key:t.id});case"ExpandedCardContentSection":return n.a.createElement(v.a,{data:t,key:t.id});case"ArticleTextSection":return n.a.createElement(K.a,{data:t,key:t.id});case"ArticleImageSection":return n.a.createElement(F.a,{data:t,key:t.id});case"ExpandedProductLeafSection":return n.a.createElement(f.a,{data:t,key:t.id});case"Dots3DSection":return n.a.createElement(D.a,{data:t,key:t.id});case"NinetiethAnniversaryExperienceSection":return n.a.createElement(j.a,{data:t,key:t.id});case"ArticleGroupSection":return n.a.createElement(U.a,{data:t,key:t.id});default:return null}}}}]);
//# sourceMappingURL=692bed99927aa6aa2681.48.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{syth:function(e,t,n){"use strict";var i=n("q1tI"),r=n.n(i),a=n("CUie"),o=n("Zf+v"),l=n("loQ3"),c=n("m4Mt"),s=n("lTCR"),d=n.n(s),u=n("ttZb"),m=n("aw1k"),p=n("4BAa"),g=(n("fbCW"),n("x0AG"),n("yq1k"),n("qePV"),n("zKZe"),n("tkto"),n("FZtP"),n("NFLX")),v=n("c/gA"),f=n("o6BI"),b=n("uVGu"),h=n("m3ks"),w=n("mJdZ"),y=n("o8aK"),E=n("jW9q"),x=n("D+++"),_=(n("4mDm"),n("07d7"),n("3bBZ"),n("UGp+")),S=n("mKCh"),C=n("IkKt"),O=n("vOnD"),j=n("lIzU"),k=n("tLjC"),z=n("rnSS"),I=n("Vg9e"),R=O.d.div.withConfig({displayName:"Stepsstyles__Field",componentId:"sc-1fih4gp-0"})(["\n  margin-bottom: ",";\n\n  & "," {\n    padding-left: ",";\n\n    ","\n  }\n"],(function(e){return e.theme.sizing("xs")}),k.c,(function(e){return e.theme.sizing("xs")}),(function(e){return e.theme.media.max("small")(Object(O.c)(["\n        max-width: ",";\n      "],e.theme.sizing("4xl")))})),N=Object(O.d)(p.b).withConfig({displayName:"Stepsstyles__FieldTitle",componentId:"sc-1fih4gp-1"})(["\n  display: block;\n  margin: 0;\n  margin-bottom: ",";\n"],(function(e){return e.theme.sizing("4xs")})),T=O.d.div.withConfig({displayName:"Stepsstyles__FieldSet",componentId:"sc-1fih4gp-2"})(["\n  border-bottom: 1px solid ",";\n  margin-bottom: ",";\n"],(function(e){return e.theme.color("grey_light")}),(function(e){return e.theme.sizing("ms")})),F=O.d.span.attrs((function(){return{role:"alert"}})).withConfig({displayName:"Stepsstyles__ErrorText",componentId:"sc-1fih4gp-3"})(["\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n"],(function(e){return e.theme.color("red")}),(function(e){return e.theme.fontSize("sm2")}),(function(e){return e.theme.fontWeight("semiBold")})),B=O.d.div.withConfig({displayName:"Stepsstyles__Wrapper",componentId:"sc-1fih4gp-4"})(["\n  display: ",";\n  padding: 0 ",";\n  margin-bottom: ",";\n"],(function(e){return e.active?"block":"none"}),(function(e){return e.theme.sizing("sm")}),(function(e){return e.theme.sizing("sm")})),P=(O.d.div.withConfig({displayName:"Stepsstyles__TooltipContainer",componentId:"sc-1fih4gp-5"})(["\n  display: flex;\n  justify-content: flex-end;\n"]),O.d.span.withConfig({displayName:"Stepsstyles__TooltipText",componentId:"sc-1fih4gp-6"})(["\n  color: ",";\n  font-size: ",";\n"],(function(e){return e.theme.color("blue")}),(function(e){return e.theme.sizing("xxs")})),Object(O.d)(z.a).withConfig({displayName:"Stepsstyles__StyledRatingBar",componentId:"sc-1fih4gp-7"})(["\n  margin-bottom: ",";\n"],(function(e){return e.theme.sizing("4xs")}))),D=Object(O.d)(I.a).withConfig({displayName:"Stepsstyles__StyledRadioInput",componentId:"sc-1fih4gp-8"})(["\n  display: inline-flex;\n\n  margin: 0;\n  margin-right: ",";\n  &:last-child {\n    margin-right: 0;\n  }\n"],(function(e){return e.theme.sizing("xxl")})),$=O.d.div.withConfig({displayName:"Stepsstyles__NextButtonContainer",componentId:"sc-1fih4gp-9"})(["\n  text-align: right;\n"]),A=Object(O.d)(j.a).withConfig({displayName:"Stepsstyles__StyledTextArea",componentId:"sc-1fih4gp-10"})(["\n  & > textarea {\n    padding-top: ",";\n  }\n"],(function(e){return e.theme.sizing("sm")})),q=(n("sMBO"),n("XLgQ")),L=n("8GMi"),M=["error"];function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var V=function(e,t){if(!e||!t)return null;var n=t.error,i=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(t,M);switch(e.type){case"select":return r.a.createElement(R,{"data-test":"review-field-"+i.name},e.label&&r.a.createElement(N,{tag:"label",htmlFor:"review-field-"+i.name+"-select"},e.label," ",e.required&&" *"),r.a.createElement(q.a,U({},i,{id:"review-field-"+i.name+"-select","data-test":"review-field-"+i.name+"-select",hideLabel:!0,label:"",options:e.options})),n?r.a.createElement(F,null,n):null);case"number":return r.a.createElement(R,{"data-test":"review-field-"+i.name},e.label&&r.a.createElement(N,{tag:"p"},e.label," ",e.required&&" *"),r.a.createElement(P,U({},i,{name:i.name,"data-test":"review-field-"+i.name+"-rating",type:"bricks",size:"lg",onSegmentClick:function(e){i.onChange&&i.onChange({target:{name:i.name,value:e}})},ratingText:["product.review.rating.poor","product.review.rating.fair","product.review.rating.average","product.review.rating.good","product.review.rating.excellent"],mode:"interactive",rating:i.value||0})),n?r.a.createElement(F,null,n):null);case"textarea":return r.a.createElement(R,{"data-test":"review-field-"+i.name},e.label&&r.a.createElement(N,{tag:"label",htmlFor:"review-field-"+i.name+"-textarea"},e.label," ",e.required&&" *"),r.a.createElement(A,U({},i,{id:"review-field-"+i.name+"-textarea","data-test":"review-field-"+i.name+"-textarea",hideLabel:!0,label:"",error:n})));case"radio":return r.a.createElement(R,{"data-test":"review-field-"+i.name},e.label&&r.a.createElement(N,{tag:"p"},e.label," ",e.required&&" *"),r.a.createElement(D,U({},i,{onChange:function(){return i.onChange({target:{name:i.name,value:"yes"}})},name:i.name,value:"yes",checked:"yes"===i.value,label:"common.yes","data-test":"review-field-"+i.name+"-radio-yes"})),r.a.createElement(D,U({},i,{onChange:function(){return i.onChange({target:{name:i.name,value:"no"}})},name:i.name,value:"no",checked:"no"===i.value,label:"common.no","data-test":"review-field-"+i.name+"-radio-no"})),n?r.a.createElement(F,null,n):null);case"text":return r.a.createElement(R,{"data-test":"review-field-"+i.name},e.label&&r.a.createElement(N,{tag:"label",htmlFor:"review-field-text-input-"+i.name},e.label," ",e.required&&" *"),r.a.createElement(L.a,U({},i,{id:"review-field-text-input-"+i.name,"data-test":"review-field-text-input-"+i.name,hideLabel:!0,label:""})),n?r.a.createElement(F,null,n):null)}},W=n("IOjz"),G=Object(W.a)(),X=G.useMachineState,H=G.useMachineTransition,K=function(e){var t=e.currentState,n=e.errors,a=e.fields,s=e.valuesRef,d=H(),u=Object(c.a)(),m=Object(w.i)().triggerEvent,p=Object(_.d)({rating:Object(_.g)().required(u("product.review.required.field")),playExperience:Object(_.g)(),buildExperience:Object(_.g)(),valueForMoney:Object(_.g)(),wouldRecommend:Object(_.g)(),incentivizedReview:Object(_.g)(),legoEmployee:Object(_.g)()}),g=Object(C.a)(p,(null==s?void 0:s.current)||null),v=g[0],f=g[1],b=(g[2],g[3]),h=g[4];Object(i.useEffect)((function(){Object.keys(n).length&&b(n)}),[n,b]);return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),h(),void 0!==s&&(s.current=v.values),v.isValid&&(d({type:"NEXT_STEP"}),m({label:"pdp-reviews-next-step-click",eventType:["custom"]}))},id:"rating-section","aria-labelledby":"rating-title"},r.a.createElement(S.a,null,r.a.createElement(B,{active:"rating"===t},r.a.createElement(T,null,V(a.rating,f("rating"))),r.a.createElement(T,null,V(a.buildExperience,f("buildExperience")),V(a.playExperience,f("playExperience")),V(a.valueForMoney,f("valueForMoney"))),r.a.createElement(T,null,V(a.wouldRecommend,f("wouldRecommend")),V(a.incentivizedReview,f("incentivizedReview")),V(a.legoEmployee,f("legoEmployee"))),r.a.createElement($,null,r.a.createElement(o.b,{type:"primary","data-test":"go-to-next-step"},r.a.createElement(l.a,{id:"product.review.step.next"}))))))},Z=(n("E9XD"),function(e){return e.fields.reduce((function(e,t){var n;return t&&t.id?Object.assign({},e,((n={})[t.id]=t,n)):e}),{})}),J=function(e){var t=e.currentState,n=e.errors,a=e.fields,s=e.valuesRef,d=H(),u=Object(c.a)(),m=Object(w.i)().triggerEvent,p=Object(_.d)({nickname:Object(_.g)().required(u("product.review.required.field")).max(25,u("product.review.maximum.characters",{max:25})),country:Object(_.g)().required(u("product.review.required.field")),ageRange:Object(_.g)().required(u("product.review.required.field")),bestDescription:Object(_.g)(),purchasedFor:Object(_.g)(),skillLevel:Object(_.g)()}),g=Object(C.a)(p,(null==s?void 0:s.current)||null),v=g[0],f=g[1],b=(g[2],g[3]),h=g[4];Object(i.useEffect)((function(){Object.keys(n).length&&b(n)}),[n,b]);return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),h(),void 0!==s&&(s.current=v.values),v.isValid&&(d({type:"NEXT_STEP"}),m({label:"pdp-reviews-next-step-click",eventType:["custom"]}))},id:"about-section","aria-labelledby":"about-title"},r.a.createElement(S.a,null,r.a.createElement(B,{active:"about"===t},r.a.createElement(T,null,V(a.nickname,f("nickname")),V(a.country,f("country")),V(a.ageRange,f("ageRange"))),r.a.createElement(T,null,V(a.bestDescription,f("bestDescription")),V(a.purchasedFor,f("purchasedFor")),V(a.skillLevel,f("skillLevel"))),r.a.createElement($,null,r.a.createElement(o.b,{type:"primary","data-test":"go-to-next-step"},r.a.createElement(l.a,{id:"product.review.step.next"}))))))},Q=function(e){var t=e.currentState,n=e.errors,a=e.fields,s=e.valuesRef,d=H(),u=Object(w.i)().triggerEvent,m=Object(c.a)(),p=Object(_.d)({title:Object(_.g)().max(50,m("product.review.maximum.characters",{max:50})).required(m("product.review.required.field")),reviewContent:Object(_.g)().min(50,m("product.review.minimum.characters",{min:50})).required(m("product.review.required.field"))}),g=Object(C.a)(p,(null==s?void 0:s.current)||null),v=g[0],f=g[1],b=(g[2],g[3]),h=g[4];Object(i.useEffect)((function(){Object.keys(n).length&&b(n)}),[n,b]);return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),h(),void 0!==s&&(s.current=v.values),v.isValid&&(u({label:"pdp-reviews-next-step-click",eventType:["custom"]}),d({type:"NEXT_STEP"}))},id:"review-section","aria-labelledby":"review-title"},r.a.createElement(S.a,null,r.a.createElement(B,{active:"review"===t},r.a.createElement(T,null,V(a.title,f("title")),V(a.reviewContent,f("reviewContent"))),r.a.createElement($,null,r.a.createElement(o.b,{type:"primary","data-test":"go-to-next-step"},r.a.createElement(l.a,{id:"product.review.step.next"}))))))},Y=(n("ma9I"),n("TeQF"),n("2B1R"),n("5s+n"),n("vDqi")),ee=n.n(Y),te=n("lUvy"),ne=n("RlS9"),ie=n("Astw"),re=n("S21J"),ae=n("lRFE"),oe=n("HT2s"),le=O.d.section.withConfig({displayName:"PhotoStepstyles__Section",componentId:"sc-1555ew6-0"})(["\n  border-top: 1px solid ",";\n  border-bottom: 1px solid ",";\n  margin-bottom: ",";\n  padding: "," 0;\n"],(function(e){return e.theme.color("grey_light")}),(function(e){return e.theme.color("grey_light")}),(function(e){return e.theme.sizing("xs")}),(function(e){return e.theme.sizing("xs")})),ce=O.d.div.withConfig({displayName:"PhotoStepstyles__GuidelineContainer",componentId:"sc-1555ew6-1"})(["\n  background-color: ",";\n  padding: ",";\n"],(function(e){return e.theme.color("blue_extra_light")}),(function(e){return e.theme.sizing("sm")})),se=Object(O.d)(oe.a).withConfig({displayName:"PhotoStepstyles__ConsentCheckbox",componentId:"sc-1555ew6-2"})(["\n  margin-bottom: ",";\n"],(function(e){return e.theme.sizing("sm")})),de=O.d.ul.withConfig({displayName:"PhotoStepstyles__Previews",componentId:"sc-1555ew6-3"})(["\n  max-width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n"]),ue=O.d.li.withConfig({displayName:"PhotoStepstyles__PreviewContainer",componentId:"sc-1555ew6-4"})(["\n  position: relative;\n  display: inline-block;\n  max-width: 33%;\n  padding: 0;\n  margin-right: ",";\n  margin-bottom: ",";\n  border: 1px solid ",";\n"],(function(e){return e.theme.sizing("sm")}),(function(e){return e.theme.sizing("sm")}),(function(e){return e.theme.color("grey_light")})),me=O.d.button.withConfig({displayName:"PhotoStepstyles__PreviewRemove",componentId:"sc-1555ew6-5"})(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer;\n  background: ",";\n  color: ",";\n  border-radius: 50%;\n  width: ",";\n  height: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"],(function(e){return e.theme.color("black")}),(function(e){return e.theme.color("white")}),(function(e){return e.theme.sizing("xs")}),(function(e){return e.theme.sizing("xs")})),pe=Object(O.d)(p.b).withConfig({displayName:"PhotoStepstyles__SubHeader",componentId:"sc-1555ew6-6"})(["\n  margin-top: 0;\n"]),ge=O.d.div.withConfig({displayName:"PhotoStepstyles__UnorderedListWrapper",componentId:"sc-1555ew6-7"})(["\n  ul {\n    list-style-position: inside;\n    margin: 0;\n    padding: 0;\n\n    li {\n      list-style-type: disc;\n      font-size: ",";\n      span {\n        font-weight: ",";\n      }\n    }\n  }\n"],(function(e){return e.theme.sizing("xs")}),(function(e){return e.theme.fontWeight("bold")}));O.d.div.withConfig({displayName:"PhotoStepstyles__ErrorText",componentId:"sc-1555ew6-8"})(["\n  color: ",";\n  font-size: ",";\n  margin-bottom: ",";\n"],(function(e){return e.theme.color("red")}),(function(e){return e.theme.sizing("xs")}),(function(e){return e.theme.sizing("3xs")}));var ve,fe=function(e){var t=e.currentState,n=e.valuesRef,a=e.expires,s=e.signature,d=e.productCode,u=e.submitPreview,p=e.submissionLoading,v=Object(i.useContext)(ae.a).bazaarvoiceToken,f=Object(i.useState)([]),b=f[0],h=f[1],y=Object(i.useState)(n.current.consent),E=y[0],x=y[1],_=Object(i.useState)(!1),C=_[0],O=_[1],j=Object(i.useState)(!1),k=j[0],z=j[1],I=Object(i.useState)(n.current.photoUrls),R=I[0],N=I[1],T=Object(w.i)().triggerEvent,P=Object(c.a)();return r.a.createElement(S.a,null,r.a.createElement(B,{active:"photo"===t,id:"photo-section","aria-labelledby":"photo-title"},r.a.createElement(le,null,r.a.createElement(se,{checked:E,onChange:function(){return x((function(e){return!e}))},label:P("product.review.photo.image.consent")}),C?r.a.createElement(F,null,P("product.review.required.field")):null,r.a.createElement(te.a,{disabled:!E||R.length>=6||k,onChange:function(e){try{var t=e.target.files[0];if(!t)return h([P("product.review.photo.error.file.missing")]),Promise.resolve();z(!0);var i=new FormData;return i.append("file",t),Promise.resolve(function(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}((function(){return Promise.resolve(ee()({url:g.a.bazaarvoice.imageUploadUrl,method:"POST",data:i,params:{signature:s,expires:a,productId:d,profileId:v},headers:{"content-type":"multipart/form-data"}})).then((function(e){if(z(!1),e.data.errors)h([P("product.review.photo.error")]);else{var t=[].concat(R,[e.data.Url]);N(t),n.current.photoUrls=t,h([])}}))}),(function(){h([P("product.review.photo.error")]),z(!1)})))}catch(e){return Promise.reject(e)}},"data-test":"review-field-upload-photo-button"},k?r.a.createElement(m.a,{color:"white",size:"sm"}):r.a.createElement(l.a,{id:"product.review.upload.image"})),(null==R?void 0:R.length)>0&&r.a.createElement(de,null,R.map((function(e){return r.a.createElement(ue,{key:e},r.a.createElement(ne.b,{src:e,alt:"","data-test":"photo-preview"}),r.a.createElement(me,{onClick:function(){return t=e,i=R.filter((function(e){return e!==t})),N(i),void(n.current.photoUrls=i);var t,i},"aria-label":P("product.review.photo.remove"),"data-test":"photo-remove"},r.a.createElement(ie.a,{type:"cross",width:10,height:10})))}))),b.length?b.map((function(e){return r.a.createElement(F,{key:e},e)})):null,r.a.createElement(ce,{"data-test":"review-field-upload-photo-guidelines"},r.a.createElement(pe,{tag:"p",size:"s2"},r.a.createElement(l.a,{id:"product.review.photo.upload.guidelines.title"})),r.a.createElement(ge,null,r.a.createElement(re.a,{markup:P("product.review.photo.upload.guidelines.content"),as:"div"})))),r.a.createElement($,null,r.a.createElement(o.b,{type:"primary","data-test":"go-to-preview",onClick:function(){n.current={consent:E,photoUrls:R},R.length>0&&!E?O(!0):(O(!1),T({label:"pdp-reviews-preview-click",eventType:["custom"]}),u())},disabled:p},p?r.a.createElement(m.a,{color:"white",size:"sm"}):r.a.createElement(l.a,{id:"product.review.go.to.preview"})))))},be=n("qXzM"),he=(O.d.div.withConfig({displayName:"StepTitlestyles__Wrapper",componentId:"znmyrf-0"})(["\n  display: ",";\n"],(function(e){return e.active?"block":"none"})),O.d.div.withConfig({displayName:"StepTitlestyles__Container",componentId:"znmyrf-1"})(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: ",";\n  margin-bottom: ",";\n  background-color: ",";\n"],(function(e){return e.theme.sizing("sm")}),(function(e){return e.isActive?e.theme.sizing("sm"):0}),(function(e){return e.isActive?"transparent":e.theme.color("grey_extra_light")}))),we=O.d.h3.withConfig({displayName:"StepTitlestyles__Title",componentId:"znmyrf-2"})(["\n  text-transform: uppercase;\n  font-weight: ",";\n  margin: 0 auto 0 ",";\n  color: ",";\n  overflow: hidden;\n"],(function(e){return e.theme.fontWeight("semiBold")}),(function(e){return e.theme.sizing("3xs")}),(function(e){return e.isActive?"inherit":e.theme.color("grey_medium")})),ye=Object(O.d)(o.b).withConfig({displayName:"StepTitlestyles__EditButton",componentId:"znmyrf-3"})(["\n  color: ",";\n  font-weight: ",";\n  ",";\n"],(function(e){return e.theme.color("blue")}),(function(e){return e.theme.fontWeight("semiBold")}),(function(e){return e.theme.font("s0")})),Ee=function(e){var t=e.step,n=e.isActive,i=e.totalSteps,a=e.changeStep,o=e.title,c=e.stepName,s=e.hasSuccess,d=n?"display":s?"success":"disabled";return r.a.createElement(he,{id:c+"-title",isActive:n,"aria-expanded":n},r.a.createElement(be.a,{type:d},t),r.a.createElement(we,{isActive:n},o),n?r.a.createElement(p.b,{color:"grey",tag:"span"},r.a.createElement(l.a,{id:"product.review.step.title",values:{currentStep:t,totalSteps:i}})):s?r.a.createElement(ye,{type:"link","aria-controls":c+"-section",onClick:a},r.a.createElement(l.a,{id:"product.review.step.edit"})):null)},xe=n("LTAh"),_e=n("4MrQ"),Se=O.d.div.withConfig({displayName:"Previewstyles__Container",componentId:"sc-1edtqdd-0"})(["\n  padding: ",";\n  position: relative;\n  width: 100%;\n  height: 100%;\n  ",";\n"],(function(e){return e.theme.sizing("sm")}),(function(e){return e.theme.media.min("medium")(Object(O.c)(["\n      min-height: 80vh;\n      width: ",";\n    "],"31.25rem"))})),Ce=Object(O.d)(o.b).withConfig({displayName:"Previewstyles__ButtonLink",componentId:"sc-1edtqdd-1"})(["\n  display: flex;\n  align-items: center;\n\n  padding-bottom: ",";\n  border-bottom: 1px solid ",";\n  color: ",";\n  ",";\n\n  & > svg {\n    margin-right: ",";\n  }\n"],(function(e){return e.theme.sizing("xxs")}),(function(e){return e.theme.color("grey_light")}),(function(e){return e.theme.color("blue")}),(function(e){return e.theme.font("s0")}),(function(e){return e.theme.sizing("3xs")})),Oe=Object(O.d)(z.a).withConfig({displayName:"Previewstyles__StyledRatingBar",componentId:"sc-1edtqdd-2"})(["\n  margin-bottom: ",";\n"],(function(e){return e.theme.sizing("xs")})),je=O.d.div.withConfig({displayName:"Previewstyles__Gallery",componentId:"sc-1edtqdd-3"})(["\n  padding-top: ",";\n  padding-bottom: ",";\n  max-width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n"],(function(e){return e.theme.sizing("xs")}),(function(e){return e.theme.sizing("xs")})),ke=Object(O.d)(ne.b).withConfig({displayName:"Previewstyles__ImageGallery",componentId:"sc-1edtqdd-4"})(["\n  max-width: 33%;\n  padding: 0;\n  margin-right: ",";\n  margin-bottom: ",";\n  border: 1px solid ",";\n"],(function(e){return e.theme.sizing("sm")}),(function(e){return e.theme.sizing("sm")}),(function(e){return e.theme.color("grey_light")})),ze=O.d.div.withConfig({displayName:"Previewstyles__ActionContainer",componentId:"sc-1edtqdd-5"})(["\n  border-top: 2px solid ",";\n  padding: "," 0;\n  display: flex;\n  justify-content: flex-end;\n"],(function(e){return e.theme.color("grey_light")}),(function(e){return e.theme.sizing("sm")})),Ie=function(e){var t=e.reviewFields,n=e.submitReview,i=e.backToEdit,a=e.submissionLoading,s=t.rating,d=t.buildExperience,u=t.playExperience,g=t.valueForMoney,v=t.wouldRecommend,f=t.incentivizedReview,b=t.legoEmployee,h=t.nickname,w=t.countryLabel,y=t.ageRange,E=t.bestDescription,x=t.purchasedFor,_=t.skillLevel,S=t.title,C=t.reviewContent,O=t.photos,j=Object(c.a)();return r.a.createElement(Se,{"data-test":"review-preview-container"},r.a.createElement(Ce,{type:"link",onClick:i,"data-test":"review-preview-back-to-editing"},r.a.createElement(xe.a,{chevronDirection:"left",width:15,height:15}),r.a.createElement(l.a,{id:"product.review.back.to.editing"})),r.a.createElement(p.b,{tag:"p",size:"s0",weight:"semiBold",uppercase:!0},r.a.createElement(l.a,{id:"product.review.review.preview"})),r.a.createElement(T,{"data-test":"review-preview-rating-fields"},r.a.createElement(Oe,{label:j("product.review.overall.rating"),mode:"display",rating:s,type:"bricks",size:"lg","data-test":"review-preview-rating-rating",hideOutput:!0}),d?r.a.createElement(Oe,{label:j("product.review.rating.build.experience"),mode:"display",rating:d,type:"bricks",size:"lg","data-test":"review-preview-rating-buildExperience",hideOutput:!0}):null,u?r.a.createElement(Oe,{label:j("product.review.rating.play"),mode:"display",rating:u,type:"bricks",size:"lg","data-test":"review-preview-rating-playExperience",hideOutput:!0}):null,g?r.a.createElement(Oe,{label:j("product.review.rating.price"),mode:"display",rating:g,type:"bricks",size:"lg","data-test":"review-preview-rating-valueForMoney",hideOutput:!0}):null,v&&r.a.createElement(p.b,{tag:"p",size:"s0",color:"green","data-test":"review-preview-rating-wouldRecommend"},r.a.createElement(l.a,{id:"product.details.reviews.user.would.recommend"})),f&&r.a.createElement("p",{"data-test":"review-preview-rating-incentivizedReview"},r.a.createElement(p.b,{size:"s0",weight:"semiBold"},r.a.createElement(l.a,{id:"product.review.received.free"}),":")," ",r.a.createElement(l.a,{id:"common.yes"})),b&&r.a.createElement("p",{"data-test":"review-preview-rating-legoEmployee"},r.a.createElement(p.b,{size:"s0",weight:"semiBold"},r.a.createElement(l.a,{id:"product.review.lego.employee"}),":")," ",r.a.createElement(l.a,{id:"common.yes"}))),r.a.createElement(T,{"data-test":"review-preview-about-me-fields"},r.a.createElement("p",{"data-test":"review-preview-about-me-nickname"},r.a.createElement(p.b,{size:"s0",weight:"semiBold"},r.a.createElement(l.a,{id:"product.review.nickname"}),":")," ",h),r.a.createElement("p",{"data-test":"review-preview-about-me-country"},r.a.createElement(p.b,{size:"s0",weight:"semiBold"},r.a.createElement(l.a,{id:"product.review.country"}),":")," ",w),r.a.createElement("p",{"data-test":"review-preview-about-me-age"},r.a.createElement(p.b,{size:"s0",weight:"semiBold"},r.a.createElement(l.a,{id:"product.review.age"}),":")," ",r.a.createElement(l.a,{id:"product.review.age."+y.toLowerCase()})),E&&r.a.createElement("p",{"data-test":"review-preview-about-me-bestDescription"},r.a.createElement(p.b,{size:"s0",weight:"semiBold"},r.a.createElement(l.a,{id:"product.review.best.description"}),":")," ",E),x&&r.a.createElement("p",{"data-test":"review-preview-about-me-purchasedFor"},r.a.createElement(p.b,{size:"s0",weight:"semiBold"},r.a.createElement(l.a,{id:"product.review.purchased.for"}),":")," ",x),_&&r.a.createElement("p",{"data-test":"review-preview-about-me-skillLevel"},r.a.createElement(p.b,{size:"s0",weight:"semiBold"},r.a.createElement(l.a,{id:"product.review.skill.level"}),":")," ",_)),r.a.createElement(p.b,{tag:"p",size:"s1",weight:"semiBold","data-test":"review-preview-title"},S),r.a.createElement(_e.a,{breakpoint:9999,lineHeight:"s0",fontSize:"s0",maxLines:8,text:C,"data-test":"review-preview-content"}),O&&r.a.createElement(je,{"data-test":"review-preview-photo-gallery"},O.map((function(e,t){return r.a.createElement(ke,{key:e,src:e,"data-test":"review-preview-photo-"+t})}))),r.a.createElement(ze,null,r.a.createElement(o.b,{"data-test":"submit-preview",onClick:function(){n()},disabled:a},a?r.a.createElement(m.a,{color:"white",size:"sm"}):r.a.createElement(l.a,{id:"product.review.submit.review"}))))};var Re,Ne,Te,Fe=d()(ve||(Re=["\n  mutation SubmitReview(\n    $preview: Boolean!\n    $productCode: String!\n    $rating: Int!\n    $wouldRecommend: Boolean!\n    $incentivizedReview: Boolean!\n    $legoEmployee: Boolean!\n    $playExperience: Int\n    $buildExperience: Int\n    $valueForMoney: Int\n    $purchasedFor: String\n    $reviewContent: String!\n    $title: String!\n    $nickname: String!\n    $ageRange: String!\n    $bestDescription: String\n    $skillLevel: String\n    $country: String\n    $photos: [String!]\n    $fp: String!\n  ) {\n    submitReview(\n      input: {\n        preview: $preview\n        productCode: $productCode\n        rating: $rating\n        wouldRecommend: $wouldRecommend\n        incentivizedReview: $incentivizedReview\n        legoEmployee: $legoEmployee\n        playExperience: $playExperience\n        buildExperience: $buildExperience\n        valueForMoney: $valueForMoney\n        purchasedFor: $purchasedFor\n        reviewContent: $reviewContent\n        title: $title\n        nickname: $nickname\n        ageRange: $ageRange\n        bestDescription: $bestDescription\n        skillLevel: $skillLevel\n        country: $country\n        photos: $photos\n        fp: $fp\n      }\n    ) {\n      preview\n      success\n      formErrors {\n        field\n        message\n        code\n      }\n      error {\n        message\n        code\n      }\n    }\n  }\n"],Ne||(Ne=Re.slice(0)),Re.raw=Ne,ve=Re)),Be=n("GcUl"),Pe=n("zuA3"),De=O.d.div.withConfig({displayName:"SubmissionContainerstyles__Header",componentId:"sc-747kam-0"})(["\n  margin-bottom: ",";\n  padding: ",";\n  padding-bottom: 0;\n  display: flex;\n  align-items: center;\n\n  ","\n"],(function(e){return e.theme.sizing("xs")}),(function(e){return e.theme.sizing("sm")}),(function(e){return e.theme.media.max("small")(Object(O.c)(["\n      margin: 0;\n    "]))})),$e=O.d.div.withConfig({displayName:"SubmissionContainerstyles__Footer",componentId:"sc-747kam-1"})(["\n  padding: ","\n    ",";\n  display: flex;\n\n  ","\n"],(function(e){return e.theme.sizing("sm")}),(function(e){return e.theme.sizing("sm")}),(function(e){return e.theme.media.max("small")(Object(O.c)(["\n      flex-direction: column;\n      align-items: flex-start;\n    "]))})),Ae=Object(O.d)(Pe.a).withConfig({displayName:"SubmissionContainerstyles__StyledLink",componentId:"sc-747kam-2"})(["\n  margin-right: ",";\n  text-transform: uppercase;\n"],(function(e){return e.theme.sizing("xs")})),qe=Object(O.d)(ne.b).withConfig({displayName:"SubmissionContainerstyles__Img",componentId:"sc-747kam-3"})(["\n  max-width: calc(50% - ",");\n  margin-right: ",";\n\n  ","\n\n  ","\n"],(function(e){return e.theme.sizing("xs")}),(function(e){return e.theme.sizing("xs")}),(function(e){return e.theme.media.max("small")(Object(O.c)(["\n      width: ",";\n    "],"7.8125rem"))}),(function(e){return e.theme.media.max("small")(Object(O.c)(["\n      margin: 0;\n    "]))})),Le=O.d.div.withConfig({displayName:"SubmissionContainerstyles__Wrapper",componentId:"sc-747kam-4"})(["\n  border-top: 1px solid ",";\n  border-bottom: 1px solid ",";\n  padding: "," 0;\n"],(function(e){return e.theme.color("grey_light")}),(function(e){return e.theme.color("grey_light")}),(function(e){return e.theme.sizing("sm")})),Me=O.d.div.withConfig({displayName:"SubmissionContainerstyles__ContentWrapper",componentId:"sc-747kam-5"})(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  ",";\n"],(function(e){return e.theme.media.min("medium")(Object(O.c)(["\n      min-height: 80vh;\n      width: ",";\n    "],"31.25rem"))})),Ue=O.d.div.withConfig({displayName:"SubmissionContainerstyles__CentreSpinner",componentId:"sc-747kam-6"})(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]),Ve=O.d.div.withConfig({displayName:"SubmissionContainerstyles__NotifySubmitWrapper",componentId:"sc-747kam-7"})(["\n  padding: ","\n    ",";\n"],(function(e){return e.theme.sizing("ms")}),(function(e){return e.theme.sizing("xl")})),We=Object(O.d)(p.b).withConfig({displayName:"SubmissionContainerstyles__NotifySubmitHeader",componentId:"sc-747kam-8"})(["\n  margin: 0;\n"]),Ge=Object(O.d)(ie.a).withConfig({displayName:"SubmissionContainerstyles__StyledIcon",componentId:"sc-747kam-9"})(["\n  display: inline-block;\n  vertical-align: middle;\n  color: ",";\n  border-radius: 50%;\n  border: 2px solid ",";\n  background-color: ",";\n  padding: ",";\n  height: ",";\n  width: ",";\n  margin-right: ",";\n"],(function(e){return e.theme.color("white")}),(function(e){return e.theme.color("white")}),(function(e){return e.theme.color(e.hasError?"red":"green")}),(function(e){return e.theme.sizing("xxs")}),(function(e){return e.theme.sizing("xl")}),(function(e){return e.theme.sizing("xl")}),(function(e){return e.theme.sizing("xxs")})),Xe=Object(O.d)(o.b).withConfig({displayName:"SubmissionContainerstyles__NotifySubmitButton",componentId:"sc-747kam-10"})(["\n  margin-left: auto;\n  display: block;\n  padding: ","\n    ",";\n"],(function(e){return e.theme.sizing("3xs")}),(function(e){return e.theme.sizing("ms")})),He=O.d.div.withConfig({displayName:"SubmissionContainerstyles__ToastWrapper",componentId:"sc-747kam-11"})(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n"]),Ke=Object(O.d)(Be.a).withConfig({displayName:"SubmissionContainerstyles__StyledToastHeader",componentId:"sc-747kam-12"})(["\n  position: sticky;\n  top: 0;\n  left: 0;\n  width: 100%;\n  ","\n"],(function(e){return e.theme.zIndex("medium")})),Ze={id:"Review Form",initial:"open",states:{open:{on:{NEXT_STEP:"rating"}},rating:{on:{NEXT_STEP:"about",EDIT_RATING:"rating"}},about:{on:{NEXT_STEP:"review",EDIT_RATING:"rating"}},review:{on:{NEXT_STEP:"photo",EDIT_RATING:"rating",EDIT_ABOUT:"about"}},photo:{on:{NEXT_STEP:"preview",EDIT_RATING:"rating",EDIT_ABOUT:"about",EDIT_REVIEW:"review"}},preview:{on:{BACK_TO_EDIT:"photo",SUCCESS:"complete"}},complete:{on:{}}}},Je=["rating","about","review","photo"],Qe=Je.length,Ye=function(e){var t,n,a=e.fields,o=e.productCode,s=e.productName,d=e.primaryImage,m=e.expires,_=e.signature,S=Object(i.useContext)(y.b),C=S.notification,O=S.displayNotification,j=Object(i.useContext)(ae.a),k=j.submitReviewModalOpen,z=j.closeSubmitReviewModal,I=Object(v.a)(),R=Object(c.a)(),N=Object(w.i)().triggerEvent,T=X(Ze),F=T[0],B=T[1],P=T[2],D=Object(u.c)(Fe),$=D[0],A=D[1],q=A.loading,L=A.data,M=A.error;Object(i.useEffect)((function(){k&&"open"===F&&B({type:"NEXT_STEP"})}),[k,F,B]);var U=Object(i.useRef)(null);Object(f.a)((function(){Je.includes(F)&&U.current&&U.current.scrollIntoView&&U.current.scrollIntoView(!0)}),[F]);var V=Object(i.useRef)(""),W=g.a.iovation.scriptUrl;Object(b.a)((function(){window.io_install_stm=!1,window.io_exclude_stm=12,window.io_install_flash=!1,window.io_enable_rip=!0}));var G=Object(E.a)(W),H=G[0],Z=G[1],Y=function(){if(H&&""===V.current){var e=Object(x.a)()||"";V.current=encodeURIComponent(e),Pe&&(Pe.fp=V.current)}};Object(i.useEffect)((function(){Y()}),[H,Z]);var ee=Object(i.useRef)({wouldRecommend:"",incentivizedReview:"no",legoEmployee:"no",rating:"",playExperience:"",valueForMoney:"",buildExperience:""}),te=Object(i.useState)({}),ne=te[0],ie=te[1],re=Object(i.useRef)({nickname:(null==a||null===(t=a.nickname)||void 0===t?void 0:t.value)||(null==I?void 0:I.username)||"",ageRange:"",country:"",bestDescription:"",purchasedFor:"",skillLevel:""}),oe=Object(i.useState)({}),le=oe[0],ce=oe[1],se=Object(i.useRef)({title:"",reviewContent:""}),de=Object(i.useState)({}),ue=de[0],me=de[1],pe=Object(i.useRef)({consent:!1,photoUrls:[]});Object(i.useEffect)((function(){if(!q&&null!=L&&L.submitReview){var e=L.submitReview,t=e.success,n=e.preview,i=e.formErrors,r=e.error;if(t&&n)return void B({type:"NEXT_STEP"});if(t&&!1===n)return B({type:"SUCCESS"}),void N({label:"pdp-reviews-submit",eventType:["custom"]});if(r&&O("error",r.message,!0),i){var a={},o={},l={};i.forEach((function(e){void 0!==ee.current[e.field]&&(a[e.field]=e.message),void 0!==re.current[e.field]&&(o[e.field]=e.message),void 0!==se.current[e.field]&&(l[e.field]=e.message)})),ie(a),ce(o),me(l);var c=Object.keys(a).length,s=Object.keys(o).length,d=Object.keys(l).length;c?B({type:"EDIT_RATING"}):s?B({type:"EDIT_ABOUT"}):d&&B({type:"EDIT_REVIEW"})}}}),[L,q,M,B,N,O]);var ge=ee.current,ve=ge.rating,be=ge.playExperience,he=ge.valueForMoney,we=ge.buildExperience,ye=se.current,xe=ye.reviewContent,_e=ye.title,Se=re.current,Ce=Se.nickname,Oe=Se.ageRange,je=Se.country,ke=Se.bestDescription,ze=Se.purchasedFor,Re=Se.skillLevel,Ne="yes"===ee.current.wouldRecommend,Te="yes"===ee.current.incentivizedReview,Be="yes"===ee.current.legoEmployee,Pe={productCode:o,rating:Number(ve),wouldRecommend:Ne,incentivizedReview:Te,legoEmployee:Be,playExperience:"number"==typeof be?be:null,valueForMoney:"number"==typeof he?he:null,buildExperience:"number"==typeof we?we:null,purchasedFor:ze,reviewContent:xe,title:_e,nickname:Ce,ageRange:Oe,bestDescription:ke,skillLevel:Re,country:je,photos:pe.current.photoUrls,fp:V.current},Ue=(null===(n=a.country.options.find((function(e){return e.value===je})))||void 0===n?void 0:n.label)||"";return r.a.createElement(P,null,(null==C?void 0:C.isVisible)&&(null==C?void 0:C.isModalOpen)&&r.a.createElement(He,null,r.a.createElement(Ke,{type:C.type,message:C.message})),"preview"===F&&r.a.createElement(Ie,{backToEdit:function(){return B({type:"BACK_TO_EDIT"})},submitReview:function(){Y(),$({variables:Object.assign({},Pe,{preview:!1,agreedtotermsandconditions:!0})}).catch((function(){O("error","product.review.error",!0)}))},reviewFields:Object.assign({},Pe,{countryLabel:Ue}),submissionLoading:q}),"complete"===F&&r.a.createElement(Ve,null,r.a.createElement(We,{tag:"h3",size:"s0",weight:"bold"},r.a.createElement(Ge,{type:"tick"}),r.a.createElement(l.a,{id:"product.review.successful.submission.title"})),r.a.createElement(p.b,{tag:"p",size:"sm"},r.a.createElement(l.a,{id:"product.review.successful.submission.text"})),r.a.createElement(Xe,{onClick:function(){z()},"data-test":"review-success-confirm-button"},r.a.createElement(l.a,{id:"product.review.successful.submission.cta"}))),"preview"!==F&&"complete"!==F&&r.a.createElement(Me,{ref:U},r.a.createElement(De,null,r.a.createElement(qe,{src:d,alt:""}),r.a.createElement(p.b,{size:"s2",weight:"semiBold"},s)),r.a.createElement(Le,null,r.a.createElement(Ee,{changeStep:function(){return B({type:"EDIT_RATING"})},isActive:"rating"===F,hasSuccess:Je.findIndex((function(e){return e===F}))>0,step:1,title:R("product.review.step.rating.title"),totalSteps:Qe,stepName:"rating"}),r.a.createElement(K,{currentState:F,errors:ne,fields:a,valuesRef:ee}),r.a.createElement(Ee,{changeStep:function(){return B({type:"EDIT_ABOUT"})},isActive:"about"===F,hasSuccess:Je.findIndex((function(e){return e===F}))>1,step:2,title:R("product.review.step.about.title"),totalSteps:Qe,stepName:"about"}),r.a.createElement(J,{currentState:F,errors:le,fields:a,valuesRef:re}),r.a.createElement(Ee,{changeStep:function(){return B({type:"EDIT_REVIEW"})},isActive:"review"===F,hasSuccess:Je.findIndex((function(e){return e===F}))>2,step:3,title:R("product.review.step.review.title"),totalSteps:Qe,stepName:"review"}),r.a.createElement(Q,{currentState:F,errors:ue,fields:a,valuesRef:se}),r.a.createElement(Ee,{changeStep:function(){return B({type:"NEXT_STEP"})},isActive:"photo"===F,hasSuccess:Je.findIndex((function(e){return e===F}))>3,step:4,title:R("product.review.step.photo.title"),totalSteps:Qe,stepName:"photo"}),r.a.createElement(fe,{currentState:F,errors:ue,fields:a,valuesRef:pe,expires:m,signature:_,productCode:o,submissionLoading:q,submitPreview:function(){Y(),$({variables:Object.assign({},Pe,{preview:!0,agreedtotermsandconditions:!0})}).catch((function(){O("error","product.review.error",!0)}))}})),r.a.createElement($e,null,r.a.createElement(Ae,{to:h.a.BV_REVIEW_TERMS_AND_CONDITIONS,target:"_blank",rel:"noopener noreferrer","data-test":"review-terms-conditions-link"},r.a.createElement(l.a,{id:"product.review.terms"})),r.a.createElement(Ae,{to:h.a.BV_REVIEW_GUIDELINES,target:"_blank",rel:"noopener noreferrer","data-test":"review-guidelines-link"},r.a.createElement(l.a,{id:"product.review.guidelines"})))))};var et=d()(Te||(Te=function(e,t){return t||(t=e.slice(0)),e.raw=t,e}(["\n  query reviewFields($productCode: String!) {\n    reviewFields(productCode: $productCode) {\n      error {\n        message\n        code\n      }\n      fields {\n        id\n        value\n        label\n        options {\n          label\n          value\n        }\n        type\n        required\n      }\n      BVAuth {\n        signature\n        expires\n      }\n    }\n  }\n"]))),tt=function(e){var t,n,a,o=e.productCode,c=e.productName,s=e.primaryImage,d=Object(i.useContext)(ae.a).closeSubmitReviewModal,g=Object(u.d)(et,{variables:{productCode:o},fetchPolicy:"network-only"}),v=g.data,f=g.loading,b=g.error;if(!o)return null;if(f)return r.a.createElement(Me,null,r.a.createElement(Ue,null,r.a.createElement(m.a,{size:3,color:"yellow"})));if(b||null!=v&&null!==(t=v.reviewFields)&&void 0!==t&&t.error){var h,w,y,E,x="ERROR_DUPLICATE_SUBMISSION"!==(null==v||null===(h=v.reviewFields)||void 0===h||null===(w=h.error)||void 0===w?void 0:w.code);return r.a.createElement(Ve,null,x&&r.a.createElement(We,{tag:"p",size:"s0",weight:"bold"},r.a.createElement(Ge,{type:"cross",hasError:!0}),r.a.createElement(l.a,{id:"product.review.error"})),r.a.createElement(p.b,{tag:"p",size:"sm"},b?r.a.createElement(l.a,{id:"product.review.error"}):null==v||null===(y=v.reviewFields)||void 0===y||null===(E=y.error)||void 0===E?void 0:E.message),r.a.createElement(Xe,{onClick:function(){d()}},r.a.createElement(l.a,{id:"common.close"})))}if(null==v||null===(n=v.reviewFields)||void 0===n||null===(a=n.fields)||void 0===a||!a.length)return null;var _=Z(v.reviewFields);return r.a.createElement(Ye,{productCode:o,productName:c,primaryImage:s,fields:_,signature:v.reviewFields.BVAuth.signature,expires:v.reviewFields.BVAuth.expires,user:v.reviewFields.BVAuth.user})};t.a=function(e){var t=e.productCode,n=e.productName,s=e.primaryImage,d=Object(i.useContext)(ae.a),u=d.submitReviewModalOpen,m=d.openSubmitReviewModal,p=d.closeSubmitReviewModal,g=Object(c.a)();return r.a.createElement(a.a,{isOpen:u,onRequestClose:p,renderTrigger:function(e){var t=e.onRef;return r.a.createElement(o.b,{onClick:function(){m()},innerRef:t,type:"primary","data-test":"submit-review"},r.a.createElement(l.a,{id:"product.reviews.submit"}))},label:g("product.reviews.submit"),closeLabel:g("element.modal.closeLabel")},r.a.createElement(tt,{productCode:t,productName:n,primaryImage:s}))}}}]);
//# sourceMappingURL=eb054b26c4662816d20c.82.js.map
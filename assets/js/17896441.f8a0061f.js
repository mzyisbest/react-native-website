"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[27918],{48880:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var n=a(27378),l=a(99213),i=a(38944),r=a(81884);var s=function(e){var t=e.navLink,a=e.next;return n.createElement(r.Z,{className:(0,i.Z)("pagination-nav__link"),to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},a?n.createElement(l.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"):n.createElement(l.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},t.title))};var o=function(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(s,{navLink:t})),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(s,{navLink:a,next:!0})))},c=a(50353),d=a(76889),m=a(92373);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(l.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(l.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function h(e){var t=e.versionLabel,a=e.to,i=e.onClick;return n.createElement(l.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(r.Z,{to:a,onClick:i},n.createElement(l.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function E(e){var t,a=e.className,l=e.versionMetadata,r=(0,c.Z)().siteConfig.title,s=(0,d.gA)({failfast:!0}).pluginId,o=(0,m.J)(s).savePreferredVersionName,u=(0,d.Jo)(s),E=u.latestDocSuggestion,g=u.latestVersionSuggestion,p=null!=E?E:(t=g).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,i.Z)(a,m.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:r,versionMetadata:l})),n.createElement("div",{className:"margin-top--md"},n.createElement(h,{versionLabel:g.label,to:p.path,onClick:function(){return o(g.name)}})))}function g(e){var t=e.className,a=(0,m.E6)();return a.banner?n.createElement(E,{className:t,versionMetadata:a}):null}var p=a(71956);function b(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(l.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function f(e){var t=e.lastUpdatedBy;return n.createElement(l.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function N(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,i=e.lastUpdatedBy;return n.createElement("span",{className:m.kM.common.lastUpdated},n.createElement(l.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(b,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:i?n.createElement(f,{lastUpdatedBy:i}):""}},"Last updated{atDate}{byUser}"),!1)}var k=a(66200),L=a(52685),_=a(1244),Z="iconEdit_1CBY",U=["className"];var T=function(e){var t=e.className,a=(0,_.Z)(e,U);return n.createElement("svg",(0,L.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(Z,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function w(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},n.createElement(T,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var C=a(23635),y="docItemContainer_1EXp",A="lastUpdated_1szQ",M="docItemCol_2rXS";var x=function(e){var t,a=e.content,l=e.versionMetadata,r=a.metadata,s=a.frontMatter,c=s.image,m=s.keywords,u=s.hide_title,v=s.hide_table_of_contents,h=r.description,E=r.title,b=r.editUrl,f=r.lastUpdatedAt,L=r.formattedLastUpdatedAt,_=r.lastUpdatedBy,Z=(0,d.gA)({failfast:!0}).pluginId,U=(0,d.gB)(Z),T=(0,d.zu)(Z),x=U.length>1&&!T.isLast,H=!u&&void 0===a.contentTitle;return n.createElement(n.Fragment,null,n.createElement(p.Z,{title:E,description:h,keywords:m,image:c}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,i.Z)("col",(t={},t[M]=!v,t))},n.createElement(g,{versionMetadata:l}),n.createElement("div",{className:y},n.createElement("article",null,x&&n.createElement("div",null,n.createElement("span",{className:"badge badge--secondary"},"\u7248\u672c: ",l.label)),n.createElement("div",{className:"markdown"},H&&n.createElement(C.N,null,E),n.createElement(a,null)),(b||f||_)&&n.createElement("footer",{className:"docMetadata row docusaurus-mt-lg"},n.createElement("div",{className:"col"},b&&n.createElement(w,{editUrl:b})),n.createElement("div",{className:(0,i.Z)("col",A)},(f||_)&&n.createElement(N,{lastUpdatedAt:f,formattedLastUpdatedAt:L,lastUpdatedBy:_})))),n.createElement(o,{metadata:r}))),!v&&a.toc&&n.createElement("div",{className:"col col--3"},n.createElement(k.Z,{toc:a.toc}))))}},66200:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(52685),l=a(1244),i=a(27378),r=a(38944),s=a(92373),o=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function c(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?i.createElement("ul",{className:l?void 0:a},t.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(c,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function d(e){var t=e.toc,a=e.className,r=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,v=void 0===u?void 0:u,h=e.minHeadingLevel,E=e.maxHeadingLevel,g=(0,l.Z)(e,o),p=(0,s.LU)(),b=null!=h?h:p.tableOfContents.minHeadingLevel,f=null!=E?E:p.tableOfContents.maxHeadingLevel,N=(0,s.DA)({toc:t,minHeadingLevel:b,maxHeadingLevel:f}),k=(0,i.useMemo)((function(){if(m&&v)return{linkClassName:m,linkActiveClassName:v,minHeadingLevel:b,maxHeadingLevel:f}}),[m,v,b,f]);return(0,s.Si)(k),i.createElement(c,(0,n.Z)({toc:N,className:r,linkClassName:m},g))}var m="tableOfContents_rbnR",u=["className"];var v=function(e){var t=e.className,a=(0,l.Z)(e,u);return i.createElement("div",{className:(0,r.Z)(m,"thin-scrollbar",t)},i.createElement(d,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})),i.createElement("div",{className:"wwads-cn wwads-vertical","data-id":"58",style:{maxWidth:200,marginTop:20}}))}},23635:function(e,t,a){a.d(t,{N:function(){return u},Z:function(){return v}});var n=a(1244),l=a(52685),i=a(27378),r=a(38944),s=a(99213),o=a(92373),c="anchorWithStickyNavbar_23Bc",d="anchorWithHideOnScrollNavbar_3Dj-",m=["id"],u=function(e){var t=Object.assign({},e);return i.createElement("header",null,i.createElement("h1",(0,l.Z)({},t,{id:void 0}),t.children))},v=function(e){return"h1"===e?u:(t=e,function(e){var a,u=e.id,v=(0,n.Z)(e,m),h=(0,o.LU)().navbar.hideOnScroll;return u?i.createElement(t,(0,l.Z)({},v,{className:(0,r.Z)("anchor",(a={},a[d]=h,a[c]=!h,a)),id:u}),v.children,i.createElement("a",{className:"hash-link",href:"#"+u,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):i.createElement(t,v)});var t}}}]);
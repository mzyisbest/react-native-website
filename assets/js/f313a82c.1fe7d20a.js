"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[56650],{35318:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},68571:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=r(52685),a=r(1244),o=(r(27378),r(35318)),i=["components"],s={id:"xplat-implementation",title:"\u8de8\u5e73\u53f0\u7684\u5b9e\u73b0"},l=void 0,c={unversionedId:"xplat-implementation",id:"xplat-implementation",title:"\u8de8\u5e73\u53f0\u7684\u5b9e\u73b0",description:"This document refers to the architecture of the new renderer, Fabric, that is in active roll-out.",source:"@site/../cndocs/xplat-implementation.md",sourceDirName:".",slug:"/xplat-implementation",permalink:"/docs/next/xplat-implementation",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/xplat-implementation.md",tags:[],version:"current",frontMatter:{id:"xplat-implementation",title:"\u8de8\u5e73\u53f0\u7684\u5b9e\u73b0"},sidebar:"\u67b6\u6784",previous:{title:"\u6e32\u67d3\uff0c\u63d0\u4ea4\u4e0e\u88c5\u8f7d\uff08\u6e32\u67d3\u7ba1\u7ebf\uff09",permalink:"/docs/next/render-pipeline"},next:{title:"\u89c6\u56fe\u5c42\u5408\u5e76\u4f18\u5316",permalink:"/docs/next/view-flattening"}},p=[{value:"The React Native renderer utilizes a core render implementation to be shared across platforms",id:"the-react-native-renderer-utilizes-a-core-render-implementation-to-be-shared-across-platforms",children:[],level:4}],m={toc:p};function u(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This document refers to the architecture of the new renderer, ",(0,o.kt)("a",{parentName:"p",href:"fabric-renderer"},"Fabric"),", that is in active roll-out.")),(0,o.kt)("h4",{id:"the-react-native-renderer-utilizes-a-core-render-implementation-to-be-shared-across-platforms"},"The React Native renderer utilizes a core render implementation to be shared across platforms"),(0,o.kt)("p",null,"In the previous render system of React Native, the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"glossary#react-shadow-tree-and-react-shadow-node"},"React Shadow Tree")),", layout logic, and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/next/view-flattening"},"View Flattening"))," algorithm were implemented once for each platform. The current renderer was designed to be a cross-platform solution by sharing a core C++ implementation."),(0,o.kt)("p",null,"The React Native team intends to incorporate an animation system into the render system and also extend the React Native render system to new platforms such as Windows, and operating systems in game consoles, televisions, and more."),(0,o.kt)("p",null,"Leveraging C++ for the core render system introduces several advantages. A single implementation reduces the cost of development and maintenance. It improves the performance of creating React Shadow Trees and layout calculation because the overhead of integrating ",(0,o.kt)("a",{parentName:"p",href:"glossary#yoga-tree-and-yoga-node"},"Yoga")," with the renderer is minimized on Android (i.e. no more ",(0,o.kt)("a",{parentName:"p",href:"glossary#java-native-interface-jni"},"JNI")," for Yoga). Finally, the memory footprint of each React Shadow Node is smaller in C++ than it would be if allocated from Kotlin or Swift."),(0,o.kt)("p",null,"The team is also leveraging C++ features that enforce immutability to ensure there are no issues related to concurrent access to shared but not protected resources."),(0,o.kt)("p",null,"It is important to recognize that the renderer use case for Android still incurs the cost of ",(0,o.kt)("a",{parentName:"p",href:"glossary#java-native-interface-jni"},"JNI")," for two primary use cases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Layout calculation of complex views (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"Text"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"TextInput"),", etc.) requires sending props over JNI."),(0,o.kt)("li",{parentName:"ul"},"The mount phase requires sending mutation operations over JNI.")),(0,o.kt)("p",null,"The team is exploring replacing ",(0,o.kt)("inlineCode",{parentName:"p"},"ReadableMap")," with a new mechanism to serialize data using ",(0,o.kt)("inlineCode",{parentName:"p"},"ByteBuffer")," to reduce overhead of JNI. Our goal is to reduce overhead of JNI by 35\u201350%."),(0,o.kt)("p",null,"The renderer provides two sides of its C++ APIs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"(i)")," to communicate with React"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"(ii)")," to communicate with the host platform")),(0,o.kt)("p",null,"For ",(0,o.kt)("strong",{parentName:"p"},"(i)"),", React communicates with the renderer to ",(0,o.kt)("strong",{parentName:"p"},"render")," a React Tree and to \u201clisten\u201d for ",(0,o.kt)("strong",{parentName:"p"},"events")," (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"onLayout"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"onKeyPress"),", touch, etc)."),(0,o.kt)("p",null,"For ",(0,o.kt)("strong",{parentName:"p"},"(ii)"),", the React Native renderer communicates with the host platform to mount host views on the screen (create, insert, update or delete of host views) and it listens for ",(0,o.kt)("strong",{parentName:"p"},"events")," that are generated by the user on the host platform."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Cross-platform implementation diagram",src:r(23729).Z})))}u.isMDXComponent=!0},23729:function(e,t,r){t.Z=r.p+"assets/images/xplat-implementation-diagram-7611cf9dfb6d15667365630147d83ca5.png"}}]);
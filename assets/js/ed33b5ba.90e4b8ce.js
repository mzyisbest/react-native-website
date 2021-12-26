"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[31357],{35318:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(h,c(c({ref:t},p),{},{components:r})):n.createElement(h,c({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17177:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var n=r(52685),o=r(1244),a=(r(27378),r(35318)),c=["components"],i={id:"usecolorscheme",title:"useColorScheme"},l=void 0,s={unversionedId:"usecolorscheme",id:"version-0.64/usecolorscheme",title:"useColorScheme",description:"The useColorScheme React hook provides and subscribes to color scheme updates from the Appearance module. The return value indicates the current user preferred color scheme. The value may be updated later, either through direct user action (e.g. theme selection in device settings) or on a schedule (e.g. light and dark themes that follow the day/night cycle).",source:"@site/versioned_docs/version-0.64/usecolorscheme.md",sourceDirName:".",slug:"/usecolorscheme",permalink:"/docs/0.64/usecolorscheme",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/usecolorscheme.md",tags:[],version:"0.64",frontMatter:{id:"usecolorscheme",title:"useColorScheme"},sidebar:"version-0.64/api",previous:{title:"Vibration",permalink:"/docs/0.64/vibration"},next:{title:"useWindowDimensions",permalink:"/docs/0.64/usewindowdimensions"}},p=[{value:"Supported color schemes",id:"supported-color-schemes",children:[],level:3},{value:"Example",id:"example",children:[],level:2}],u={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useColorScheme } from 'react-native';\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useColorScheme")," React hook provides and subscribes to color scheme updates from the ",(0,a.kt)("a",{parentName:"p",href:"appearance"},(0,a.kt)("inlineCode",{parentName:"a"},"Appearance"))," module. The return value indicates the current user preferred color scheme. The value may be updated later, either through direct user action (e.g. theme selection in device settings) or on a schedule (e.g. light and dark themes that follow the day/night cycle)."),(0,a.kt)("h3",{id:"supported-color-schemes"},"Supported color schemes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"light"'),": The user prefers a light color theme."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"dark"'),": The user prefers a dark color theme."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"null"),": The user has not indicated a preferred color theme.")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20StyleSheet%2C%20useColorScheme%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20colorScheme%20%3D%20useColorScheme()%3B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3EuseColorScheme()%3A%20%7BcolorScheme%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),(0,a.kt)("p",null,"You can find a complete example that demonstrates the use of this hook alongside a React context to add support for light and dark themes to your application in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/master/packages/rn-tester/js/examples/Appearance/AppearanceExample.js"},(0,a.kt)("inlineCode",{parentName:"a"},"AppearanceExample.js")),"."))}m.isMDXComponent=!0}}]);
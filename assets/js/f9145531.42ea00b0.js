"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[21875],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return v}});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),v=o,f=d["".concat(s,".").concat(v)]||d[v]||p[v]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45981:function(e,t,n){var a=n(161),o=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=o?"ios":"android",l=o?"macos":r?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},70517:function(e,t,n){var a=n(27378);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},12120:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(52685),o=n(27378),r=n(76457),i=n(84956);var l=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(92373),u=n(38944),c="tabItem_c0e5";function p(e){var t,n,r,i=e.lazy,p=e.block,d=e.defaultValue,v=e.values,f=e.groupId,m=e.className,g=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=v?v:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.lx)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=g[0])?void 0:r.props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=l(),w=k.tabGroupChoices,N=k.setTabGroupChoices,T=(0,o.useState)(y),C=T[0],R=T[1],x=[],O=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var E=w[f];null!=E&&E!==C&&h.some((function(e){return e.value===E}))&&R(E)}var P=function(e){var t=e.currentTarget,n=x.indexOf(t),a=h[n].value;a!==C&&(O(t),R(a),null!=f&&N(f,a))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var o=x.indexOf(e.currentTarget)-1;n=x[o]||x[x.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":p},m)},h.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return x.push(e)},onKeyDown:j,onFocus:P,onClick:P},r,{className:(0,u.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),i?(0,o.cloneElement)(g.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function d(e){var t=(0,r.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}},99990:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var a=n(52685),o=n(1244),r=(n(27378),n(35318)),i=(n(12120),n(70517),n(45981),["components"]),l={id:"roottag",title:"RootTag"},s=void 0,u={unversionedId:"roottag",id:"roottag",title:"RootTag",description:"RootTag \u662f\u7528\u4e8e\u6807\u8bb0 React Native \u539f\u751f\u6839\u89c6\u56fe\u5c42\u7684\u4e0d\u900f\u660e\u6807\u8bc6\u7b26\uff08opaque identifier\uff09\u3002\u5177\u4f53\u6765\u8bf4\u5c31\u662f ReactRootView(android) \u6216\u662f RCTRootView(iOS) \u7684\u5b9e\u4f8b ID.",source:"@site/../cndocs/roottag.md",sourceDirName:".",slug:"/roottag",permalink:"/docs/next/roottag",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/roottag.md",tags:[],version:"current",frontMatter:{id:"roottag",title:"RootTag"},sidebar:"api",previous:{title:"PlatformColor",permalink:"/docs/next/platformcolor"},next:{title:"Share",permalink:"/docs/next/share"}},c=[{value:"\u4ec0\u4e48\u65f6\u5019\u4f7f\u7528 RootTag?",id:"\u4ec0\u4e48\u65f6\u5019\u4f7f\u7528-roottag",children:[],level:2},{value:"\u5982\u4f55\u4f7f\u7528 RootTag \uff08\u5982\u679c\u4f60\u786e\u5b9e\u8981\u7528\u7684\u8bdd\uff09",id:"\u5982\u4f55\u4f7f\u7528-roottag-\u5982\u679c\u4f60\u786e\u5b9e\u8981\u7528\u7684\u8bdd",children:[{value:"0.65 \u7248\u672c\u4e2d\u7684\u4e0d\u517c\u5bb9\u53d8\u66f4",id:"065-\u7248\u672c\u4e2d\u7684\u4e0d\u517c\u5bb9\u53d8\u66f4",children:[],level:3},{value:"0.66 \u7248\u672c\u4e2d\u7684\u4e0d\u517c\u5bb9\u53d8\u66f4",id:"066-\u7248\u672c\u4e2d\u7684\u4e0d\u517c\u5bb9\u53d8\u66f4",children:[],level:3}],level:2},{value:"\u672a\u6765\u7684\u8ba1\u5212",id:"\u672a\u6765\u7684\u8ba1\u5212",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RootTag")," \u662f\u7528\u4e8e\u6807\u8bb0 React Native \u539f\u751f\u6839\u89c6\u56fe\u5c42\u7684\u4e0d\u900f\u660e\u6807\u8bc6\u7b26\uff08opaque identifier\uff09\u3002\u5177\u4f53\u6765\u8bf4\u5c31\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"ReactRootView"),"(android) \u6216\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"RCTRootView"),"(iOS) \u7684\u5b9e\u4f8b ID."),(0,r.kt)("h2",{id:"\u4ec0\u4e48\u65f6\u5019\u4f7f\u7528-roottag"},"\u4ec0\u4e48\u65f6\u5019\u4f7f\u7528 RootTag?"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u7edd\u5927\u591a\u6570 React Native \u5f00\u53d1\u8005\u6765\u8bf4\uff0c\u4e00\u822c\u4f60\u5e76\u4e0d\u9700\u8981\u7528\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"RootTag"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RootTag"),"s are useful for when an app renders ",(0,r.kt)("strong",{parentName:"p"},"multiple React Native root views")," and you need to handle native API calls differently depending on the surface. An example of this is when an app is using native navigation and each screen is a separate React Native root view."),(0,r.kt)("p",null,"In native navigation, every React Native root view is rendered in a platform\u2019s navigation view (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"Activity")," for Android, ",(0,r.kt)("inlineCode",{parentName:"p"},"UINavigationViewController")," for iOS). By this, you are able to leverage the navigation paradigms of the platform such as native look and feel and navigation transitions. The functionality to interact with the native navigation APIs can be exposed to React Native via a ",(0,r.kt)("a",{parentName:"p",href:"native-modules-intro"},"native module"),"."),(0,r.kt)("p",null,"For example, to update the title bar of a screen, you would call the navigation module\u2019s API ",(0,r.kt)("inlineCode",{parentName:"p"},'setTitle("Updated Title")'),", but it would need to know which screen in the stack to update. A ",(0,r.kt)("inlineCode",{parentName:"p"},"RootTag")," is necessary here to identify the root view and its hosting container."),(0,r.kt)("p",null,"Another use case for ",(0,r.kt)("inlineCode",{parentName:"p"},"RootTag")," is when your app needs to attribute a certain JavaScript call to native based on its originating root view. A ",(0,r.kt)("inlineCode",{parentName:"p"},"RootTag")," is necessary to differentiate the source of the call from different surfaces."),(0,r.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528-roottag-\u5982\u679c\u4f60\u786e\u5b9e\u8981\u7528\u7684\u8bdd"},"\u5982\u4f55\u4f7f\u7528 RootTag \uff08\u5982\u679c\u4f60\u786e\u5b9e\u8981\u7528\u7684\u8bdd\uff09"),(0,r.kt)("p",null,"In versions 0.65 and below, RootTag is accessed via a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/v0.64.1/Libraries/ReactNative/AppContainer.js#L56"},"legacy context"),". To prepare React Native for Concurrent features coming in React 18 and beyond, we are migrating to the latest ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html#api"},"Context API")," via ",(0,r.kt)("inlineCode",{parentName:"p"},"RootTagContext")," in 0.66. Version 0.65 supports both the legacy context and the recommended ",(0,r.kt)("inlineCode",{parentName:"p"},"RootTagContext")," to allow developers time to migrate their call-sites. See the breaking changes summary."),(0,r.kt)("p",null,"How to access ",(0,r.kt)("inlineCode",{parentName:"p"},"RootTag")," via the ",(0,r.kt)("inlineCode",{parentName:"p"},"RootTagContext"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { RootTagContext } from 'react-native';\nimport NativeAnalytics from 'native-analytics';\nimport NativeNavigation from 'native-navigation';\n\nfunction ScreenA() {\n  const rootTag = useContext(RootTagContext);\n\n  const updateTitle = (title) => {\n    NativeNavigation.setTitle(rootTag, title);\n  };\n\n  const handleOneEvent = () => {\n    NativeAnalytics.logEvent(rootTag, 'one_event');\n  };\n\n  // ...\n}\n\nclass ScreenB extends React.Component {\n  static contextType: typeof RootTagContext = RootTagContext;\n\n  updateTitle(title) {\n    NativeNavigation.setTitle(this.context, title);\n  }\n\n  handleOneEvent() {\n    NativeAnalytics.logEvent(this.context, 'one_event');\n  }\n\n  // ...\n}\n")),(0,r.kt)("p",null,"Learn more about the Context API for ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html#classcontexttype"},"classes")," and ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#usecontext"},"hooks")," from the React docs."),(0,r.kt)("h3",{id:"065-\u7248\u672c\u4e2d\u7684\u4e0d\u517c\u5bb9\u53d8\u66f4"},"0.65 \u7248\u672c\u4e2d\u7684\u4e0d\u517c\u5bb9\u53d8\u66f4"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RootTagContext")," was formerly named ",(0,r.kt)("inlineCode",{parentName:"p"},"unstable_RootTagContext")," and changed to ",(0,r.kt)("inlineCode",{parentName:"p"},"RootTagContext")," in 0.65. Please update any usages of ",(0,r.kt)("inlineCode",{parentName:"p"},"unstable_RootTagContext")," in your codebase."),(0,r.kt)("h3",{id:"066-\u7248\u672c\u4e2d\u7684\u4e0d\u517c\u5bb9\u53d8\u66f4"},"0.66 \u7248\u672c\u4e2d\u7684\u4e0d\u517c\u5bb9\u53d8\u66f4"),(0,r.kt)("p",null,"The legacy context access to ",(0,r.kt)("inlineCode",{parentName:"p"},"RootTag")," will be removed and replaced by ",(0,r.kt)("inlineCode",{parentName:"p"},"RootTagContext"),". Beginning in 0.65, we encourage developers to proactively migrate ",(0,r.kt)("inlineCode",{parentName:"p"},"RootTag")," accesses to ",(0,r.kt)("inlineCode",{parentName:"p"},"RootTagContext"),"."),(0,r.kt)("h2",{id:"\u672a\u6765\u7684\u8ba1\u5212"},"\u672a\u6765\u7684\u8ba1\u5212"),(0,r.kt)("p",null,"With the new React Native architecture progressing, there will be future iterations to ",(0,r.kt)("inlineCode",{parentName:"p"},"RootTag"),", with the intention to keep the ",(0,r.kt)("inlineCode",{parentName:"p"},"RootTag")," type opaque and prevent thrash in React Native codebases. Please do not rely on the fact that RootTag currently aliases to a number! If your app relies on RootTags, keep an eye on our version change logs, which you can find ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/releases/blob/master/CHANGELOG.md"},"here"),"."))}d.isMDXComponent=!0}}]);
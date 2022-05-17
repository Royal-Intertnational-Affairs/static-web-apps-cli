"use strict";(self.webpackChunk_azure_static_web_apps_cli_docs=self.webpackChunk_azure_static_web_apps_cli_docs||[]).push([[823],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(g,l(l({ref:t},c),{},{components:n})):i.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},525:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),l=["components"],o={sidebar_position:5,title:"swa login"},s=void 0,p={unversionedId:"cli/swa-login",id:"cli/swa-login",title:"swa login",description:"Synopsis",source:"@site/docs/cli/swa-login.md",sourceDirName:"cli",slug:"/cli/swa-login",permalink:"/static-web-apps-cli/docs/cli/swa-login",editUrl:"https://github.com/azure/static-web-apps-cli/tree/main/docs/www/docs/cli/swa-login.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"swa login"},sidebar:"tutorialSidebar",previous:{title:"swa start",permalink:"/static-web-apps-cli/docs/cli/swa-start"},next:{title:"swa deploy",permalink:"/static-web-apps-cli/docs/cli/swa-deploy"}},c={},u=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"Usage",id:"usage",level:2},{value:"See Also",id:"see-also",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"synopsis"},"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swa login [options]\n")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Used to login to Azure."),(0,r.kt)("p",null,"This command is used to authenticate with Azure and get a deployment token that can be used to deploy to Azure Static Web Apps, using the ",(0,r.kt)("a",{parentName:"p",href:"swa-deploy"},(0,r.kt)("inlineCode",{parentName:"a"},"swa deploy"))," command."),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,"Here are the options you can use with ",(0,r.kt)("inlineCode",{parentName:"p"},"swa login"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-S, --subscription-id <subscriptionId>"),": Azure subscription ID used by this project (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"process.env.AZURE_SUBSCRIPTION_ID"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-R, --resource-group <resourceGroupName>"),": Azure resource group used by this project"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-T, --tenant-id <tenantId>"),": Azure tenant ID (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"process.env.AZURE_TENANT_ID"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-C, --client-id <clientId>"),": Azure client ID"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-CS, --client-secret <clientSecret>"),": Azure client secret"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-n, --app-name <appName>"),": Azure Static Web App application name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-cc, --clear-credentials"),": clear persisted credentials before login (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-u, --use-keychain"),": enable using the operating system native keychain for persistent credentials (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-u, --no-use-keychain"),": disable using the operating system native keychain"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-h, --help"),": display help for command")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Interactive login"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swa login\n")),(0,r.kt)("p",null,"Interactive login without persisting credentials"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swa login --no-use-keychain\n")),(0,r.kt)("p",null,"Log in into specific tenant"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swa login --tenant-id 00000000-0000-0000-0000-000000000000\n")),(0,r.kt)("p",null,"Log in using a specific subscription, resource group or an application"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swa login --subscription my-subscription \\\n          --resource-group my-resource-group \\\n          --app-name my-static-site\n")),(0,r.kt)("p",null,"Login using service principal"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swa login --tenant-id 00000000-0000-0000-0000-000000000000 \\\n          --client-id 00000000-0000-0000-0000-000000000000 \\\n          --client-secret 0000000000000000000000000000000000000000000000000000000000000000\n")),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"docs/cli/swa-deploy"},"swa deploy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"docs/cli/swa"},"swa"))))}m.isMDXComponent=!0}}]);
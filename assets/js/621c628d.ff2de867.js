"use strict";(self.webpackChunk_azure_static_web_apps_cli_docs=self.webpackChunk_azure_static_web_apps_cli_docs||[]).push([[50],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,h=d["".concat(l,".").concat(u)]||d[u]||c[u]||o;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},264:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],s={sidebar_position:2},l="Build From Source",p={unversionedId:"contribute/developer",id:"contribute/developer",title:"Build From Source",description:"This document describes how to set up your development environment to build and test the Azure Static Web Apps CLI. In the documentation we may refer to it interchangeably as SWA CLI or simply as swa.",source:"@site/docs/contribute/2-developer.md",sourceDirName:"contribute",slug:"/contribute/developer",permalink:"/static-web-apps-cli/docs/contribute/developer",editUrl:"https://github.com/azure/static-web-apps-cli/tree/main/docs/www/docs/contribute/2-developer.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Review Guidelines",permalink:"/static-web-apps-cli/docs/contribute/intro"},next:{title:"Contributors",permalink:"/static-web-apps-cli/docs/contribute/contributors"}},m={},c=[{value:"1. Build Requirements",id:"1-build-requirements",level:2},{value:"Install Git",id:"install-git",level:3},{value:"2. Clone The Project",id:"2-clone-the-project",level:2},{value:"3. Build The Project",id:"3-build-the-project",level:2},{value:"Install Deps",id:"install-deps",level:3},{value:"Build Dist",id:"build-dist",level:3},{value:"Validate CLI",id:"validate-cli",level:3},{value:"4. Prep Contributions",id:"4-prep-contributions",level:2},{value:"Run Tests",id:"run-tests",level:3},{value:"Create Symlink",id:"create-symlink",level:3}],d={toc:c};function u(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"build-from-source"},"Build From Source"),(0,o.kt)("p",null,"This document describes how to set up your development environment to build and test the Azure Static Web Apps CLI. In the documentation we may refer to it interchangeably as ",(0,o.kt)("strong",{parentName:"p"},"SWA CLI")," or simply as ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"swa")),"."),(0,o.kt)("p",null,"Please ",(0,o.kt)("a",{parentName:"p",href:"/docs/contribute/intro"},(0,o.kt)("strong",{parentName:"a"},"review the Contribution Guidelines"))," if you plan to contribute back to the project codebase (by fixing issues, editing docs etc.)."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"1-build-requirements"},"1. Build Requirements"),(0,o.kt)("h3",{id:"install-git"},"Install Git"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("blockquote",{parentName:"div"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Installation Guide: ")," Follow the ",(0,o.kt)("a",{parentName:"p",href:"https://help.github.com/articles/set-up-git"},"GitHub's Guide to Installing Git")," guidance for setup.\n:::")),(0,o.kt)("p",{parentName:"div"},"The SWA CLI codebase contains both ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Azure/static-web-apps-cli/tree/main/src"},"source code"),"\nand ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Azure/static-web-apps-cli/tree/main/docs"},"documentation files")," for the project - all hosted ",(0,o.kt)("strong",{parentName:"p"},"in the same GitHub repository"),"."),(0,o.kt)("p",{parentName:"div"},"You will need to install ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/"},(0,o.kt)("strong",{parentName:"a"},"Git"))," (command-line utility) or ",(0,o.kt)("a",{parentName:"p",href:"https://desktop.github.com/"},(0,o.kt)("strong",{parentName:"a"},"GitHub Desktop"))," (IDE for Windows/macOS only) to work with our codebase. This allows you to:"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"fork and clone the SWA CLI codebase for local development"),(0,o.kt)("li",{parentName:"ul"},"maintain source code and version control over files in your fork"),(0,o.kt)("li",{parentName:"ul"},"streamline pull request (PR) workflows to contribute back changes")),(0,o.kt)("p",{parentName:"div"},"If you're new to Git, we recommend the and follow the instructions for your preferred development platform (Linux, Windows, macOS or other), to set this up."),(0,o.kt)("h3",{parentName:"div",id:"install-nodejs"},"Install Node.js"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Installation Guide: ")," Follow the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"Downloading & installing Node.js and npm")," guidance for setup.\n:::")),(0,o.kt)("p",null,"The SWA CLI is written in JavaScript/TypeScript and built for execution in a ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},(0,o.kt)("strong",{parentName:"a"},"Node.js"))," runtime on the desktop. The SWA CLI is also packaged and distributed as ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@azure/static-web-apps-cli"},"@azure/static-web-apps-cli")," in the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm registry"),"."),(0,o.kt)("p",null,"You will need to install ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org"},(0,o.kt)("strong",{parentName:"a"},"Node.js"))," to preview, run, and test, the SWA CLI. You'll also need to install ",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v8/using-npm/developers"},(0,o.kt)("strong",{parentName:"a"},"npm"))," to handle package dependencies and configure scripts to streamline developer workflows with Node.js."),(0,o.kt)("p",null,"This allows you to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"use ",(0,o.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/cli/v8/commands/npm-install"},"npm install")," to install SWA CLI dependencies in ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,o.kt)("li",{parentName:"ul"},"use ",(0,o.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/cli/v8/commands/npm-run-script"},"npm run"),' to execute "scripts" defined in ',(0,o.kt)("inlineCode",{parentName:"li"},"package.json")),(0,o.kt)("li",{parentName:"ul"},"use ",(0,o.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/cli/v8/commands/npm-test"},"npm test"),' to run the "test" script in ',(0,o.kt)("inlineCode",{parentName:"li"},"package.json")),(0,o.kt)("li",{parentName:"ul"},"use ",(0,o.kt)("a",{parentName:"li",href:"#formatting-your-source-code"},"npm run format")," to format source when getting ready to PR.")),(0,o.kt)("p",null,"We strongly agree with the recommendation to ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"use the Node Version Manager (nvm)"))," to manage your installs - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"nvm")," makes it easy to install, and switch between, ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/about/releases/"},"multiple versions")," of Node, directly from the command line."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Version Requirements: "),"\nInstalled versions must meet the ",(0,o.kt)("inlineCode",{parentName:"p"},"engines")," requirements for this project."))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"engines")," object defines the minimum versions of Node.js and npm that are required for SWA CLI, in this ",(0,o.kt)("a",{target:"_blank",href:n(3225).Z},"package.json"),". The object looks something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  "engines": {\n    "node": ">=14.0.0",\n    "npm": ">=6.0.0"\n  }\n')),(0,o.kt)("p",null,"This indicates that the current SWA CLI works with a minimum version of Node.js v14.0.0 and npm v6.0.0. Check your current dev environment versions by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--version")," option. Here's an example of usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ node --version\nv16.2.0\n\n$ npm --version\n7.13.0\n")),(0,o.kt)("p",null,"Need to change versions to meet requirements? Use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"nvm"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"// List locally-installed versions\nnvm list\n\n// Switch to an installed version (if requirement met)\nnvm use <installed-version>\n\n// .. Or find version to install (that meets requirement)\nnvm ls-remote\n\n// .. And install it locally\nnvm install <remote-version>\n\n// .. Then validate install worked\nnvm which <remote-version>\n\n// .. And switch to use it\nnvm use <remote-version>\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"2-clone-the-project"},"2. Clone The Project"),(0,o.kt)("p",null,"Once you've met the build requirements, you can download the SWA CLI codebase and configure it for local development using these steps:"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The SWA CLI codebase is hosted ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/azure/static-web-apps-cli"},"here on GitHub")," and contains both the ",(0,o.kt)("strong",{parentName:"p"},"source code")," and the ",(0,o.kt)("strong",{parentName:"p"},"documentation files")," for the project."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"First"),", fork the repository and clone it for local development."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/{YOUR_GITHUB_ACCOUNT}/static-web-apps-cli.git\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Optionally"),", clone a specific branch using ",(0,o.kt)("inlineCode",{parentName:"p"},"-b BRANCH_NAME"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone -b BRANCH_NAME https://github.com/{YOUR_GITHUB_ACCOUNT}/static-web-apps-cli.git\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Next"),", switch your working directory to the ",(0,o.kt)("em",{parentName:"p"},"SWA CLI")," project root:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd static-web-apps-cli\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Next"),", add an ",(0,o.kt)("inlineCode",{parentName:"p"},"upstream")," remote pointing back to the original SWA CLI repository. This makes it easier to fetch updates and contribute PRs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git remote add upstream https://github.com/azure/static-web-apps-cli.git\n")),(0,o.kt)("h2",{id:"3-build-the-project"},"3. Build The Project"),(0,o.kt)("h3",{id:"install-deps"},"Install Deps"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{target:"_blank",href:n(3225).Z},(0,o.kt)("code",null,"package.json"))," file describes the project's dependencies. Use the following command to setup your local development environment. The process may take a few minutes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,o.kt)("h3",{id:"build-dist"},"Build Dist"),(0,o.kt)("p",null,"To build the SWA CLI distribution, run the folllowing command. This may take a few minutes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,o.kt)("p",null,"On successful completion, it creates a ",(0,o.kt)("inlineCode",{parentName:"p"},"dist/")," folder with the following contents (output cleaned up for clarity)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$  ls dist\n\n  cli/\n  config.d.ts.map\n  config.js.map\n  msha/\n  schema/\n  config.d.ts\n  config.js\n  core/\n  public/\n")),(0,o.kt)("h3",{id:"validate-cli"},"Validate CLI"),(0,o.kt)("p",null,"Validate that the CLI build works by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"node dist/cli/bin.js -h\n")),(0,o.kt)("p",null,"You should see ",(0,o.kt)("em",{parentName:"p"},"something like this"),". Your exact output will depend on the release version you are working with."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'Welcome to Azure Static Web Apps CLI\n\nUsage: swa [command] [options]\n\nOptions:\n  -v, --version                                                output the version number\n  -V, --verbose [prefix]                                       enable verbose output. Values are: silly,info,log,silent (default: "log", preset: "log")\n  -c, --config <path>                                          path to swa-cli.config.json file to use (default: "swa-cli.config.json")\n  -cn, --config-name <name>                                    name of the configuration to use\n  -g, --print-config                                           print all resolved options (default: false)\n  -h, --help                                                   display help for command\n\nCommands:\n  login [options]                                              login into Azure\n  start [options] [configName|outputLocation|appDevserverUrl]  start the emulator from a directory or bind to a dev server\n  deploy [options] [configName|outputLocation]                 deploy the current project to Azure Static Web Apps\n  init [options] [configName]                                  initialize a new static web app project\n  build [options] [configName|appLocation]                     build your project\n\n  Type "swa" to get started and deploy your project.\n\n  Documentation:\n    https://aka.ms/swa/cli-local-development\n\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Congratulations!!")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You have successfully built and run the SWA CLI in your local env."))),(0,o.kt)("h2",{id:"4-prep-contributions"},"4. Prep Contributions"),(0,o.kt)("p",null,"If you forked the project with the intent of contributing back to the original codebase, we have three steps you need to take:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/contribute/intro"},(0,o.kt)("strong",{parentName:"a"},"Review the Contribution Guidelines"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#run-tests"},(0,o.kt)("strong",{parentName:"a"},"Test your changes against a local project"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#4-format-source"},(0,o.kt)("strong",{parentName:"a"},"Format your source to align with our guidelines")))),(0,o.kt)("h3",{id:"run-tests"},"Run Tests"),(0,o.kt)("p",null,"Use this command to run all test suites on your project's PR-ready branch before you initiate the pull request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm test\n")),(0,o.kt)("p",null,"The process may take a few minutes to complete all test suites - track progress by monitoring the (verbose) test output. A successful run will likely end with something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"..\n..\nTest Suites: 27 passed, 27 total\nTests:       5 skipped, 423 passed, 428 total\nSnapshots:   5 passed, 5 total\nTime:        37.658 s\n")),(0,o.kt)("h3",{id:"create-symlink"},"Create Symlink"),(0,o.kt)("p",null,"A good way to validate the changes you make is to use with with a real application project that can benefit from using the Static Web Apps CLI. The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v8/commands/npm-link"},(0,o.kt)("inlineCode",{parentName:"a"},"npm link"))," command can help you setup your local development environment to do this transparently."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Using npm link")),(0,o.kt)("p",null,"Run the following command in the root folder where ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," is located:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm link ./\n")),(0,o.kt)("p",null,"Once command completes successfully,run ",(0,o.kt)("inlineCode",{parentName:"p"},"swa")," from any directory on your local development system."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd <some-project-dir>\nswa --h\n")),(0,o.kt)("p",null,"You should see the ",(0,o.kt)("inlineCode",{parentName:"p"},"swa")," output reflect the version and functionality provided by the locally-built distribution previously linked. You can now test the ",(0,o.kt)("inlineCode",{parentName:"p"},"swa")," capability with real projects in your local development device, to validate your changes."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"How does npm link work?")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v8/commands/npm-link"},(0,o.kt)("inlineCode",{parentName:"a"},"npm link"))," docs have more detail, but here's a short overview that can help you debug any issues with usage later."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Your local dev environment has a global folder for installed node packages. It's located at ",(0,o.kt)("inlineCode",{parentName:"p"},"{prefix}/lib/node_modules/")," - find the prefix for your local dev setup using ",(0,o.kt)("inlineCode",{parentName:"p"},"npm prefix -g"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Installing a package ",(0,o.kt)("inlineCode",{parentName:"p"},"xyz")," globally (e.g., with ",(0,o.kt)("inlineCode",{parentName:"p"},"npm -g install xyz"),") creates a subfolder ",(0,o.kt)("inlineCode",{parentName:"p"},"{prefix}/lib/node_modules/xyz")," - making it possible for local projects with this dependency, to find and use it transparently.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For a local implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"xyz"),", use ",(0,o.kt)("inlineCode",{parentName:"p"},"npm link ./")," in the root folder (location of ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"). This converts ",(0,o.kt)("inlineCode",{parentName:"p"},"{prefix}/lib/node_modules/xyz")," to a ",(0,o.kt)("em",{parentName:"p"},"symbolic link")," to your local distribution, making it the default for resolving that dependency."))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Troubleshooting")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"npm unlink")," command is an alias for ",(0,o.kt)("inlineCode",{parentName:"p"},"npm uninstall")," which may not work as intuitively as you might expect ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/npm/npm/issues/4005"},"(",(0,o.kt)("em",{parentName:"a"},"see issue"),")"),". As recommended there,"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"use ",(0,o.kt)("inlineCode",{parentName:"li"},"npm unlink **-g**")," to remove symbolic link from global folder"),(0,o.kt)("li",{parentName:"ul"},"verify there is no symlink at ",(0,o.kt)("inlineCode",{parentName:"li"},"{prefix}/lib/node_modules/<pkg>"),"\n:::")),(0,o.kt)("h3",{parentName:"div",id:"watch-mode"},"Watch Mode"),(0,o.kt)("p",{parentName:"div"},"When making multiple changes to project source files, you might want to get instantaneous feedback on how these impact the project build. Use the following command instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run build"),":"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run watch\n")),(0,o.kt)("p",{parentName:"div"},"You should see console output similar to that shown below. Now, as you make changes to files (and save them), the project will be automatically rebuilt and status updated on the terminal."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Starting compilation in watch mode...\n\nFound 0 errors. Watching for file changes.\n")),(0,o.kt)("h2",{parentName:"div",id:"4-format-source"},"4. Format Source"),(0,o.kt)("p",{parentName:"div"},"SWA CLI uses ",(0,o.kt)("a",{parentName:"p",href:"https://prettier.io/"},"prettier")," to format the source code. We require code to be formatted properly in the Pull Request (PR) - else the CI workflow will fail and your PR cannot be merged. To resolve this, ",(0,o.kt)("strong",{parentName:"p"},"run this command to format ",(0,o.kt)("em",{parentName:"strong"},"all")," source code")),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run format\n")),(0,o.kt)("p",{parentName:"div"},"A better approach is to configure the settings in your preferred IDE to auto-format your source code files on each ",(0,o.kt)("em",{parentName:"p"},"Save"),". Check out the relevant links for popular IDEs below. ",(0,o.kt)("strong",{parentName:"p"},"Don't see your favorite IDE listed?")," ",(0,o.kt)("em",{parentName:"p"},"Try ",(0,o.kt)("a",{parentName:"em",href:"/docs/contribute/intro"},"contributing to the project!"),"!"),"."),(0,o.kt)("h3",{parentName:"div",id:"atom"},"Atom"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/prettier/prettier-atom"},"https://github.com/prettier/prettier-atom")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/t9md/atom-mprettier"},"https://github.com/t9md/atom-mprettier")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/duailibe/atom-miniprettier"},"https://github.com/duailibe/atom-miniprettier"))),(0,o.kt)("h3",{parentName:"div",id:"emacs"},"Emacs"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/prettier/prettier-emacs"},"https://github.com/prettier/prettier-emacs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/jscheid/prettier.el"},"https://github.com/jscheid/prettier.el")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/raxod502/apheleia"},"https://github.com/raxod502/apheleia"))),(0,o.kt)("h3",{parentName:"div",id:"espresso"},"Espresso"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/eablokker/espresso-prettier"},"https://github.com/eablokker/espresso-prettier"))),(0,o.kt)("h3",{parentName:"div",id:"nova"},"Nova"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://extensions.panic.com/extensions/alexanderweiss/alexanderweiss.prettier"},"https://extensions.panic.com/extensions/alexanderweiss/alexanderweiss.prettier"))),(0,o.kt)("h3",{parentName:"div",id:"sublime-text"},"Sublime Text"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://packagecontrol.io/packages/JsPrettier"},"https://packagecontrol.io/packages/JsPrettier"))),(0,o.kt)("h3",{parentName:"div",id:"vim"},"Vim"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/prettier/vim-prettier"},"https://github.com/prettier/vim-prettier")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/sbdchd/neoformat"},"https://github.com/sbdchd/neoformat")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/w0rp/ale"},"https://github.com/w0rp/ale")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/neoclide/coc-prettier"},"https://github.com/neoclide/coc-prettier"))),(0,o.kt)("h3",{parentName:"div",id:"visual-studio"},"Visual Studio"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/madskristensen/JavaScriptPrettier"},"https://github.com/madskristensen/JavaScriptPrettier"))),(0,o.kt)("h3",{parentName:"div",id:"vs-code"},"VS Code"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/prettier/prettier-vscode"},"https://github.com/prettier/prettier-vscode"))),(0,o.kt)("h3",{parentName:"div",id:"webstorm"},"WebStorm"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://prettier.io/docs/en/webstorm.html"},"https://prettier.io/docs/en/webstorm.html"))))))}u.isMDXComponent=!0},3225:function(e,t,n){t.Z=n.p+"assets/files/package-9bcf2cf604a1509d8e7e53306411cb2d.json"}}]);
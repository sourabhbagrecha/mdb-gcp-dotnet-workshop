"use strict";(self.webpackChunkmdb_gcp_dotnet_workshop=self.webpackChunkmdb_gcp_dotnet_workshop||[]).push([[939],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(o),f=r,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return o?n.createElement(m,i(i({ref:t},c),{},{components:o})):n.createElement(m,i({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},7033:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=o(7462),r=(o(7294),o(3905));o(4996);const a={sidebar_position:3},i="3. Clone Repository and Install Dependencies",p={unversionedId:"setup/github-repository",id:"setup/github-repository",title:"3. Clone Repository and Install Dependencies",description:"Clone this Repository from GitHub.",source:"@site/docs/1-setup/github-repository.mdx",sourceDirName:"1-setup",slug:"/setup/github-repository",permalink:"/setup/github-repository",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/1-setup/github-repository.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2. VS Code for .Net",permalink:"/setup/set-up-vscode-for-dotnet"},next:{title:"4. Configure and run your MongoDB .Net app",permalink:"/setup/configuration-run-server"}},s={},l=[{value:"Choose any one of the 2 options:",id:"choose-any-one-of-the-2-options",level:3},{value:"Install Dependencies",id:"install-dependencies",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"3-clone-repository-and-install-dependencies"},"3. Clone Repository and Install Dependencies"),(0,r.kt)("p",null,"Clone this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mongodb-developer/workshop-mongodb-csharp-azure"},"Repository")," from GitHub."),(0,r.kt)("h3",{id:"choose-any-one-of-the-2-options"},"Choose any one of the 2 options:"),(0,r.kt)("p",null,"If you have SSH enabled, use the following command to clone:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone git@github.com:mongodb-developer/workshop-mongodb-csharp-azure.git\n")),(0,r.kt)("p",null,"If not, you can clone it through HTTPS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/mongodb-developer/workshop-mongodb-csharp-azure.git\n")),(0,r.kt)("h2",{id:"install-dependencies"},"Install Dependencies"),(0,r.kt)("p",null,"Run the following commands from the root folder to install MongoDB's .Net Driver and Swashbuckle(Swagger):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dotnet add package MongoDB.Driver\ndotnet add package Swashbuckle.AspNetCore -v 6.2.3\n")))}d.isMDXComponent=!0}}]);
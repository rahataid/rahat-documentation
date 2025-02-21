"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[2310],{603905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var a=r(667294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),h=n,m=d["".concat(p,".").concat(h)]||d[h]||s[h]||o;return r?a.createElement(m,l(l({ref:t},c),{},{components:r})):a.createElement(m,l({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},631996:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var a=r(487462),n=r(263366),o=(r(667294),r(603905)),l=["components"],i={id:"referral_voucher_project"},p="Referral Voucher Project",u={unversionedId:"Projects/referral_voucher_project",id:"Projects/referral_voucher_project",isDocsHomePage:!1,title:"Referral Voucher Project",description:"Overview",source:"@site/docs/Projects/Referral_voucher_project.md",sourceDirName:"Projects",slug:"/Projects/referral_voucher_project",permalink:"/docs/next/Projects/referral_voucher_project",editUrl:"https://github.com/rahataid/rahat-documentation/blob/main/docs/Projects/Referral_voucher_project.md",tags:[],version:"current",lastUpdatedAt:1740128742,formattedLastUpdatedAt:"2/21/2025",frontMatter:{id:"referral_voucher_project"},sidebar:"myAutogeneratedSidebar",previous:{title:"Crypto Transfer Project",permalink:"/docs/next/Projects/crypto_transfer_project"},next:{title:"Code of Conduct",permalink:"/docs/next/Community/code_of_conduct"}},c=[{value:"Overview",id:"overview",children:[{value:"Prerequisites",id:"prerequisites",children:[],level:3}],level:2},{value:"Run locally",id:"run-locally",children:[{value:"Deployment Checklist",id:"deployment-checklist",children:[],level:3},{value:"Deployment of Subgraph",id:"deployment-of-subgraph",children:[{value:"For further information follow graph documentation",id:"for-further-information-follow-graph-documentation",children:[],level:4}],level:3},{value:"About Graph Sdk",id:"about-graph-sdk",children:[],level:3}],level:2}],s={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"referral-voucher-project"},"Referral Voucher Project"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Referral Project provides Voucher Redemption support to affiliated vendors during the voucher distribution and referral management projects Instead of traditional in-kind aid, such as distributing physical vouchers, the Referral Voucher system gives beneficiaries the flexibility to redeem and refer into the project."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before you begin, go to the rahat-core repo and run the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rahataid/rahat-platform"},"rahat-core")," project. This project is dependent on the rahat-core project."),(0,o.kt)("p",null,"Also ensure your system has the following dependencies installed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Docker: Version 20.10.7 or higher"),(0,o.kt)("li",{parentName:"ul"},"Node.js: Version 20.10.0 or higher"),(0,o.kt)("li",{parentName:"ul"},"pnpm (Package Manager): Version 6.16.1 or higher")),(0,o.kt)("h2",{id:"run-locally"},"Run locally"),(0,o.kt)("p",null,"Step1: Clone project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:rahataid/rahat-platform.git\n")),(0,o.kt)("p",null,"Step2: Go to the project directory and bootstrap the project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm bootstrap\n")),(0,o.kt)("p",null,"Step3: Run the project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm start\n")),(0,o.kt)("h3",{id:"deployment-checklist"},"Deployment Checklist"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Deploy and verify contracts in public chain from local machine")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Deploy subgraph for the deployed contract")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update .env file of Rahat-Core(rahat-platform)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Update blockchain network details"),(0,o.kt)("li",{parentName:"ul"},"Update communication message sender API"),(0,o.kt)("li",{parentName:"ul"},"Update ERC2771Frowarder contract address and Rahat Admin Private Key"),(0,o.kt)("li",{parentName:"ul"},"Update subgraph URL"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run seed script in Rahat-Core to create the users, roles and permissions and update the settings"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Settings should include CHAIN_SETTINGS and SUBGRPAH_URL"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a project in Rahat-Core and get the Project-Id")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update .env file of Rahat-Project-El"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Update blockchain network details"),(0,o.kt)("li",{parentName:"ul"},"Update Rahat-Admin-Private-Key"),(0,o.kt)("li",{parentName:"ul"},"Update Project-Id"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run production seed script in Rahat-Project-El to create the project and update the settings"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Settings should include CONTRACT, BLOCKCHAIN and SUBGRPAH_URL"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update the .env in rahat-ui frontend"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Update the API_URL"),(0,o.kt)("li",{parentName:"ul"},"Update the Communication API and application Id"),(0,o.kt)("li",{parentName:"ul"},"Update chain-settings and subgraph-url")))),(0,o.kt)("h3",{id:"deployment-of-subgraph"},"Deployment of Subgraph"),(0,o.kt)("li",null,"Update the contract addresses in the network.json file, following the specified format in the file."),(0,o.kt)("li",null,"Authorize the graph using the authorization key available in your Subgraph Studio account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"    graph auth --studio <Authorization_key>\n")),(0,o.kt)("li",null,"Deploy the graph"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"graph deploy --studio <subgraph_slug_name>\n")),(0,o.kt)("h4",{id:"for-further-information-follow-graph-documentation"},"For further information follow ",(0,o.kt)("a",{parentName:"h4",href:"https://thegraph.com/docs/en/quick-start/#5-deploy-to-subgraph-studio"},"graph documentation")),(0,o.kt)("h3",{id:"about-graph-sdk"},"About Graph Sdk"),(0,o.kt)("p",null,"Sdk for graph query is designed for referral project\nYou need to install graph sdk in rahat-ui for graph query"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm install @rahataid/el-subgraph\n")),(0,o.kt)("p",null,"You need to import graph query from the sdk you imported"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"import { GraphQuery } from '@rahataid/el-subgraph';\n")),(0,o.kt)("p",null,"You need to create the sub graph provider"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"    <GraphContext.Provider\n      value={{\n        queryService: new GraphQuery(\n          <SUBGRAPH_API>,\n        ),\n      }}\n    >\n      {children}\n    </GraphContext.Provider>\n")),(0,o.kt)("p",null,"You need to wrap the above created provider in your project layout"),(0,o.kt)("p",null,"You can call the function from GraphQuery Within your project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  const { queryService } = useGraphService();\n")),(0,o.kt)("p",null,"You can access required function"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"queryService.useProjectTransaction()\n")))}d.isMDXComponent=!0}}]);
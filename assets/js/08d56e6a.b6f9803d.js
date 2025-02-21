"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[6389],{603905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return s}});var a=n(667294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),o=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=o(t.components);return a.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=o(n),s=r,g=u["".concat(d,".").concat(s)]||u[s]||k[s]||l;return n?a.createElement(g,i(i({ref:e},m),{},{components:n})):a.createElement(g,i({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},443579:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return o},toc:function(){return m},default:function(){return u}});var a=n(487462),r=n(263366),l=(n(667294),n(603905)),i=["components"],p={id:"targets"},d="Targeting",o={unversionedId:"Rahat StandAlone Apps/Community Tool/sdk-documentation/targets",id:"Rahat StandAlone Apps/Community Tool/sdk-documentation/targets",isDocsHomePage:!1,title:"Targeting",description:"To use targeting sdk client we need retrive from the SDK using rumsanService.client",source:"@site/docs/Rahat StandAlone Apps/Community Tool/sdk-documentation/targets.md",sourceDirName:"Rahat StandAlone Apps/Community Tool/sdk-documentation",slug:"/Rahat StandAlone Apps/Community Tool/sdk-documentation/targets",permalink:"/docs/next/Rahat StandAlone Apps/Community Tool/sdk-documentation/targets",editUrl:"https://github.com/rahataid/rahat-documentation/blob/dev/docs/Rahat StandAlone Apps/Community Tool/sdk-documentation/targets.md",tags:[],version:"current",lastUpdatedAt:1740129400,formattedLastUpdatedAt:"2/21/2025",frontMatter:{id:"targets"},sidebar:"myAutogeneratedSidebar",previous:{title:"Source",permalink:"/docs/next/Rahat StandAlone Apps/Community Tool/sdk-documentation/source"},next:{title:"AA Project",permalink:"/docs/next/Projects/aa_project"}},m=[],k={toc:m};function u(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"targeting"},"Targeting"),(0,l.kt)("p",null,"To use targeting sdk client we need retrive from the SDK using ",(0,l.kt)("inlineCode",{parentName:"p"},"rumsanService.client")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  const targetingClient =  getAppClient(rumsanService.client);\n\n")),(0,l.kt)("p",null,"As the mutation function or query function may contain some payload to be pass which are the parmaeter."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"create"},"create"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"targetingClient.create\n\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"filterOptions")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"any"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," success: true\n data:     {\n                message:string\n           }\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"list"},"list"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"targetingClient.list(payload)\n\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"page")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"Required")," number of page to be displayed on in")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"perPage")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"Required")," list the number of data in a page")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"sort")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"for sorting the data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"order")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"asc or desc")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Response")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," success: true\n data:     [\n            {\n\n               id: number\n               updatedAt: Date\n               createdAt: Date\n               uuid: UUID\n               label: string\n               createdBy: UUID\n               user: {\n                   name: string\n               }\n            }\n          ]\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"export-grouped-beneficiaries"},"export grouped beneficiaries"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"targetingClient.exportTargetBeneficiary(inputData)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"}," groupUUID")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"UUID")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uuid identifying the group")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"appURL")),(0,l.kt)("td",{parentName:"tr",align:"left"},"`string``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"appurl for export")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Response")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," success: true\n data:     [\n            {\n               message:string\n            }\n          ]\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"list-by-target-uuid"},"list by target uuid"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"targetingClient.listByTargetUuid({\n          target_uuid: target_uuid,\n          query: payload,\n        }),\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"}," target_uuid")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uuid identifying the targets")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"page")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"Required")," number of page to be displayed on in")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"perPage")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"Required")," list the number of data in a page")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"sort")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"for sorting the data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"order")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"asc or desc")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Response")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," success: true\n data:     [\n            {\n\n              id: number\n              benefUuid: `${string}-${string}-${string}-${string}-${string}\n              targetUuid: UUID\n              createdAt: Date\n              updatedAt: Date\n              beneficiary: {\n                     id: string\n                     uuid: string\n                     firstName: string\n                     lastName: string\n                     gender: string\n                     birthDate: string\n                     walletAddress: string\n                     phone: string\n                     email: string\n                     location: string\n                     latitude: number\n                     longitude: number\n                     govtIDNumber: string\n                     notes: string\n                     bankedStatus: string\n                     internetStatus: string\n                     phoneStatus: string\n                     extras: {}\n                     createdAt: string\n                     updatedAt: string\n                     deletedAt: string\n              }\n            }\n          ]\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"target-search"},"target Search"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"targetingClient.search\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"}," filterOptions")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"any"))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Response")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," success: true\n data:     [\n                 {\n                     id: string\n                     uuid: string\n                     firstName: string\n                     lastName: string\n                     gender: string\n                     birthDate: string\n                     walletAddress: string\n                     phone: string\n                     email: string\n                     location: string\n                     latitude: number\n                     longitude: number\n                     govtIDNumber: string\n                     notes: string\n                     bankedStatus: string\n                     internetStatus: string\n                     phoneStatus: string\n                     extras: {}\n                     createdAt: string\n                     updatedAt: string\n                     deletedAt: string\n\n                   }\n          ]\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"targets-result"},"targets Result"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"targetingClient.targetResult\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"}," filterOptions")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"any"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"}," targetUuid")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string"))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Response")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," success: true\n data:\n                 {\n\n                     message:string\n                 }\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"patch-label"},"patch label"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"targetingClient.patchLabel\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"}," uuid")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"}," payload")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"any"))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Response")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," success: true\n data:\n                 {\n\n                      id: number\n                      updatedAt: Date\n                      createdAt: Date\n                      uuid: UUID\n                      label: string\n                      filterOptions:any\n                      status: enum\n                      createdAt: Date\n                      updatedAt: Date\n\n                 }\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"export"},"export"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"targetingClient.export\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"}," targetUuid")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"uuid identifying the targets"))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Response")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," success: true\n data:\n                 {\n\n                     message:string\n                 }\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"download-pinned-beneficiary"},"download Pinned Beneficiary"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"targetingClient.downloadPinnedBeneficiary\n\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"}," target_uuid")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"uuid identifying the targets"))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Response")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," success: true\n")))}u.isMDXComponent=!0}}]);
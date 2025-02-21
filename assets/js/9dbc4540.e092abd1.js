"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[4978],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},386160:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var o=n(487462),a=n(263366),r=(n(667294),n(603905)),i=["components"],s={id:"communication-tool"},c="Communication Tool",l={unversionedId:"Rahat StandAlone Apps/Communication Tool/communication-tool",id:"Rahat StandAlone Apps/Communication Tool/communication-tool",isDocsHomePage:!1,title:"Communication Tool",description:"Introduction",source:"@site/docs/Rahat StandAlone Apps/Communication Tool/Communication_tool.md",sourceDirName:"Rahat StandAlone Apps/Communication Tool",slug:"/Rahat StandAlone Apps/Communication Tool/communication-tool",permalink:"/docs/next/Rahat StandAlone Apps/Communication Tool/communication-tool",editUrl:"https://github.com/rahataid/rahat-documentation/blob/main/docs/Rahat StandAlone Apps/Communication Tool/Communication_tool.md",tags:[],version:"current",lastUpdatedAt:1740128742,formattedLastUpdatedAt:"2/21/2025",frontMatter:{id:"communication-tool"},sidebar:"myAutogeneratedSidebar",previous:{title:"Overview",permalink:"/docs/next/Core Repository/overview"},next:{title:"Overview",permalink:"/docs/next/Rahat StandAlone Apps/Community Tool/community-tool"}},u=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"System Architecture",id:"system-architecture",children:[],level:2},{value:"Input Interface",id:"input-interface",children:[{value:"Example Data",id:"example-data",children:[],level:3}],level:2}],p={toc:u};function m(e){var t=e.components,s=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"communication-tool"},"Communication Tool"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"RS Communication Tool is application that integrates various external services and\nprovides a unified interface to interact with them. It can be implemented as a\nstandalone application or as a library. Here are few service types that can be\nintegrated with RS Communications:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Email"),(0,r.kt)("li",{parentName:"ul"},"SMS"),(0,r.kt)("li",{parentName:"ul"},"Push Notifications"),(0,r.kt)("li",{parentName:"ul"},"WhatsApp"),(0,r.kt)("li",{parentName:"ul"},"Voice Broadcast"),(0,r.kt)("li",{parentName:"ul"},"Interactive Voice Response (IVR)")),(0,r.kt)("h2",{id:"system-architecture"},"System Architecture"),(0,r.kt)("p",null,"RS Communications is designed to be modular and extensible. Each external\nservice is registered as transport implementing a common interface. It\nencaupsulates the logic and authentication secrets to interact with the external\nservice. The application can be configured to use one or more transports to send\nmessages."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"System Architecture",src:n(932367).Z})),(0,r.kt)("h2",{id:"input-interface"},"Input Interface"),(0,r.kt)("p",null,"To broadcast messages to the intended audience, RS Comms implements standard\ninterface to receive instruction. This instrution is then processed by the\napplication to send messages using the configured transports. Here is the\nspecification for the inststruction template:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n  transport: {\n    type: "email" | "sms" | "whatsapp" | "voice",\n    subject?: string,\n    message?: string,\n    fileUrl?: string,\n    extras?: Record<string, any>\n  },\n  audience: string []  //address - email, phone number, whatsapp number\n  options: {\n    trigger: "immediate" | "scheduled" | "manual",\n    scheduledTimestamp?: Date,\n    retries: number, //default:0\n    retryIntervalMinutes?: string, //default: 60 or 15,60,120,240\n    webhookUrl?: string\n  }\n}\n')),(0,r.kt)("p",null,"Once the system recevies the instruction, several steps are taken to process the\ninstruction and send intended messages to the audience. The steps are as\nfollows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Validate the instruction. Ensure that the instruction is well-formed and\ncontains all the required fields. Validation is provided by each transport."),(0,r.kt)("li",{parentName:"ol"},"If the instruction is valid, RS Comms creates a session with unique UUID\n(SessionId)."),(0,r.kt)("li",{parentName:"ol"},"The session is stored in the database for tracking and logging purposes."),(0,r.kt)("li",{parentName:"ol"},"The instruction is processed by the application and added to transport queue."),(0,r.kt)("li",{parentName:"ol"},"The transport queue is processed by the transport worker or external service\napi to send messages to the intended audience."),(0,r.kt)("li",{parentName:"ol"},"Once the message is processed, post processing happens updating logs or\ncalling webhook.")),(0,r.kt)("h3",{id:"example-data"},"Example Data"),(0,r.kt)("p",null,"Here is the sample data. This data can be used to send voice broadcast message\nto the audience of 7 phone numbers in Nepal. The message is scheduled to be sent\nafter 5 days."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "transport": {\n    "type": "voice",\n    "message": "Hello, this is a test message from RS Comms.",\n    "fileUrl": "https://example.com/voice.mp3"\n  },\n  "audience": [\n    "+9779812345678",\n    "+9779812345679",\n    "+9779812345680",\n    "+9779812345681",\n    "+9779812345682",\n    "+9779812345683",\n    "+9779812345684"\n  ],\n  "options": {\n    "trigger": "scheduled",\n    "scheduledTimestamp": "2021-12-31T23:59:59",\n    "retries": 3,\n    "retryIntervalMinutes": "60,180,600",\n    "webhookUrl": "https://example.com/webhook"\n  }\n}\n')),(0,r.kt)("p",null,"Detailed Implementation documents will be updated soon. Stay tuned!"))}m.isMDXComponent=!0},932367:function(e,t,n){t.Z=n.p+"assets/images/communication-architecture-2a8f907d84b77dbabdbf542492e8863a.svg"}}]);
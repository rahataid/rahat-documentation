"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[203],{603905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(a),m=r,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||o;return a?n.createElement(d,s(s({ref:t},c),{},{components:a})):n.createElement(d,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},221336:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return m}});var n=a(487462),r=a(263366),o=(a(667294),a(603905)),s=["components"],i={id:"2-2-0"},l=void 0,p={permalink:"/blog/2021/08/30/ Release 2.2.0",source:"@site/blog/2021-08-30 Release 2.2.0.md",title:" Release 2.2.0",description:"Rahat 2.2.0- Change Log",date:"2021-08-30T00:00:00.000Z",formattedDate:"August 30, 2021",tags:[],readingTime:2.85,truncated:!1,authors:[],prevItem:{title:" Release 2.3.0",permalink:"/blog/2021/09/29/ Release 2.3.0"},nextItem:{title:" Release 2.1.0",permalink:"/blog/2021/07/28/ Release 2.1.0"}},c={authorsImageUrls:[]},u=[],h={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Rahat 2.2.0- Change Log"),"\xa0"),(0,o.kt)("p",null,"Welcome to the August Release of Rahat. In this Rahat v2.2.0 release, our major focus is on Smart Contract Testing and improvement in UI/UX of Rahat agency web-app."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Quality Assurance"),"\xa0"),(0,o.kt)("p",null,"Developers of Rahat have manually checked all the functionalities and analyzed the vulnerability of the application. We have used automated tools like",(0,o.kt)("a",{parentName:"p",href:"https://github.com/crytic/slither/wiki"},"\xa0Slither"),"\xa0 and \xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/trailofbits/manticore/wiki"},"Manticore"),"\xa0to visualize and analyze the smart contract code structure. On the part of Unit testing,",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest"),"was for all smart contracts and",(0,o.kt)("a",{parentName:"p",href:"https://www.mongodb.com/"},"\xa0MongoDB"),"\xa0controller functions testing with several data points. Each function code was tested to get the result."),(0,o.kt)("p",null,"In case of User acceptance testing, altogether 102 test cases were developed for the Agency app where 72 test cases passed whereas 29 test cases failed. Here is the detailed documentation of UAT.",(0,o.kt)("a",{parentName:"p",href:"https://bit.ly/3zmWGVj"},"Rahat_UAT_Agency_App.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"User Interface Updates"),"\xa0"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.rumsan.com/rumsan-group/userinterfaceupdates.png",alt:"user Interface Updates"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Figure: Project Details Page")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.rumsan.com/rumsan-group/vendor-detail-page.png",alt:"vendor Detail Page"}),"\n",(0,o.kt)("em",{parentName:"p"},"Figure: Vendor Details Page")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.rumsan.com/rumsan-group/beneficiary-details-page.png",alt:"beneficiary detail page"}),"\n",(0,o.kt)("em",{parentName:"p"},"Figure: Beneficiary Details Page")),(0,o.kt)("p",null,"We had initiated the changes of UI/UX in Rahat Agency app last month. This update is the extension of the previous release. All the requirements gathered from feedbacks and suggestions are coming in the implementation phase. In Rahat 2.2.0 release, you can see major updates from the User Interface point of View. We have redesigned the detail page of Project, Beneficiary, and Vendor. We have also added some more detailed information about the respective system users. You can view the changes in the pictures down below. With the changes in User Interface, the API of the Project and Vendors has been realigned.\xa0\xa0"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"User Experience Updates"),"\xa0"),(0,o.kt)("p",null,"Along with the update in User Interface, there is an enhancement in User Experience as well. Rahat 2.2.0 release has a new feature where system users can easily upload the files of Beneficiaries and Vendors in the agency app. The files are stored in a private IPFS swarm. The data stored in private IPFS can only be viewed by people with a shared secret key. Hence, the documents uploaded in Rahat are secure. The data table of Rahat has also been redesigned according to the changes in the application. Similarly, we have redesigned the Passcode modal window with a better view for users to enter the passcode.\xa0"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.rumsan.com/rumsan-group/user-experience-update.png",alt:"user experience update"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Figure: Passcode Modal")),(0,o.kt)("p",null,"Previously, the beneficiaries assigned to the projects were only visible in the Beneficiary section. Now, you can also view the Beneficiaries in the project details section as well. This will ease the Agency app Users to study the project through a sole screen display.\xa0"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"User Management"),"\xa0"),(0,o.kt)("p",null,"In the previous Release, user roles were updated. Admin and Manager were created as a user role in the Agency web app. In this release, we have a minor enhancement in the User management module. From now onwards, when the Admin of the Agency app creates a project, he/she can assign a Project Manager to a particular project. The Project Manager assigned to the project will only be able to oversee the particular project. However, this feature will be upgraded in later releases."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Bug fixes"),"\xa0"),(0,o.kt)("p",null,"Along with the improvements, we have resolved some of the minor bugs in the application. Here are the bug fixes."),(0,o.kt)("p",null,"-"," \xa0 Fix the payload data validations in Projects AP."),(0,o.kt)("p",null,"-"," \xa0 Fix image uploads to IPFS."),(0,o.kt)("p",null,"-"," \xa0 Issue tokens to beneficiaries from beneficiary involved projects only."),(0,o.kt)("p",null,"For more details, you can view our\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/esatya/rahat/releases/tag/v2.2.0"},"Release Note.")),(0,o.kt)("p",null,"To know about our next release updates, you can go through our",(0,o.kt)("a",{parentName:"p",href:"https://github.com/esatya/rahat/issues"},"\xa0Issue Board.\xa0")),(0,o.kt)("p",null,"Last Update: 08/30/20"))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[9837],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},23037:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(487462),o=n(263366),i=(n(667294),n(603905)),a=["components"],s={id:"core_components"},l="Core Components",p={unversionedId:"core_components",id:"version-2.1/core_components",isDocsHomePage:!1,title:"Core Components",description:"Description of Key Components",source:"@site/versioned_docs/version-2.1/Core_components.md",sourceDirName:".",slug:"/core_components",permalink:"/docs/core_components",editUrl:"https://github.com/rahataid/rahat-documentation/blob/main/versioned_docs/version-2.1/Core_components.md",tags:[],version:"2.1",lastUpdatedAt:1740040681,formattedLastUpdatedAt:"2/20/2025",frontMatter:{id:"core_components"},sidebar:"version-2.1/tutorialSidebar",previous:{title:"Overview",permalink:"/docs/overview"},next:{title:"Integration",permalink:"/docs/integration"}},c=[{value:"Description of Key Components",id:"description-of-key-components",children:[],level:2}],m={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"core-components"},"Core Components"),(0,i.kt)("h2",{id:"description-of-key-components"},"Description of Key Components"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Applications (apps/)"),": Contains the various applications, each with its own configuration and source code. For example, the ",(0,i.kt)("inlineCode",{parentName:"li"},"beneficiary")," application includes specific services, controllers, and modules necessary for its functionality."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Libraries (libs/)"),": Shared libraries that can be utilized by multiple applications to promote code reuse and consistency."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Prisma (prisma/)"),": Manages database migrations and schema definitions, ensuring data integrity and ease of database management."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tools (tools/)"),": Scripts and configurations for development tools, such as Docker compose files and utility scripts for setting up and managing the development environment.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"docker-compose/"),": Contains Docker Compose configurations for setting up various development environments.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"dev-tools/"),": Configuration files and scripts for setting up development tools using Docker Compose.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},".env.example"),": Example environment variables file."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"docker-compose.yml"),": Docker Compose configuration file for development tools."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},".env"),": Environment variables file."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"graph/"),": Configuration files for setting up graph-related services using Docker Compose.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"docker-compose.yml"),": Docker Compose configuration file for graph services."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"scripts/"),": Utility scripts for setting up, managing, and maintaining the development environment.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"getEth.ts"),": Script to obtain test ETH for development purposes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"setupDevTools.sh"),": Shell script to set up development tools."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"utils.sh"),": Shell script containing utility functions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"bootstrap.sh"),": Shell script to bootstrap the development environment."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"mn.ts"),": Script for managing mnemonic phrases for test accounts."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"publish.mjs"),": Script to publish packages."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"reset.sh"),": Shell script to reset the development environment."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Configuration Files"),": Includes ESLint, Prettier, Jest, and other configuration files (",(0,i.kt)("inlineCode",{parentName:"li"},".eslintrc.json"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"jest.config.ts"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"tsconfig.base.json"),", etc.) to enforce coding standards and streamline the development workflow."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Documentation (README.md, CONTRIBUTING.md)"),": Provides guidelines for contributing to the repository, setup instructions, and an overview of the repository's purpose and structure.")))}u.isMDXComponent=!0}}]);
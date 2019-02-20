(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"./src/components/Button/Button.css":function(e,n,t){},"./src/components/Button/Button.jsx":function(e,n,t){"use strict";var r=t("./node_modules/react/index.js"),o=t.n(r),i=t("./node_modules/classnames/index.js"),a=t.n(i);t("./src/components/Button/Button.css");function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function s(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,n){return!n||"object"!==c(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,n){return(d=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var f=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),l(this,p(n).apply(this,arguments))}var t,i,c;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&d(e,n)}(n,r["Component"]),t=n,(i=[{key:"render",value:function(){var e=this,n=this.props,t=n.className,r=n.icon,i=n.label,c=n.children,s=(n.primary,n.secondary,n.link,n.round,n.active,n.raised,n.fixed,n.loading),l=u(n,["className","icon","label","children","primary","secondary","link","round","active","raised","fixed","loading"]),p=["primary","secondary","link","round","active","raised","fixed"].reduce(function(n,t){return e.props[t]&&(n[t]=e.props[t]?"true":"false"),n},{});return s&&(p.disabled=!0),o.a.createElement("button",Object.assign({className:a()("btn",t)},p,l),s?o.a.createElement("span",null,o.a.createElement("i",{className:"fas fa-spinner fa-spin"})):o.a.createElement(o.a.Fragment,null,r&&o.a.createElement("i",{className:"material-icons"},r),i&&o.a.createElement("span",null,i),c&&o.a.createElement("span",null,c)))}}])&&s(t.prototype,i),c&&s(t,c),n}();n.a=f,f.__docgenInfo={description:"",methods:[],displayName:"Button",props:{className:{type:{name:"string"},required:!1,description:""},icon:{type:{name:"string"},required:!1,description:""},label:{type:{name:"node"},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""},primary:{type:{name:"bool"},required:!1,description:""},secondary:{type:{name:"bool"},required:!1,description:""},link:{type:{name:"bool"},required:!1,description:""},round:{type:{name:"bool"},required:!1,description:""},active:{type:{name:"bool"},required:!1,description:""},raised:{type:{name:"bool"},required:!1,description:""},disabled:{type:{name:"bool"},required:!1,description:""},fixed:{type:{name:"bool"},required:!1,description:""}}}},"./src/components/Button/index.js":function(e,n,t){"use strict";var r=t("./src/components/Button/Button.jsx");t.d(n,"a",function(){return r.a})},"./src/components/Pagination/Pagination.css":function(e,n,t){},"./src/components/Pagination/Pagination.mdx":function(e,n,t){"use strict";t.r(n);var r=t("./node_modules/react/index.js"),o=t.n(r),i=t("./node_modules/@mdx-js/tag/dist/index.js"),a=t("./node_modules/docz/dist/index.m.js"),c=t("./src/components/Button/index.js"),u=t("./node_modules/lodash/clamp.js"),s=t.n(u);function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function p(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var d=function(e){var n=e.nbPages,t=e.current,r=e.onPageSelected,i=e.renderPage,a=e.renderEllipsis,c=e.renderNav,u=l(e,["nbPages","current","onPageSelected","renderPage","renderEllipsis","renderNav"]);n=Math.max(n,1),t=s()(t,1,n);var d=function(e,n){return p(Array(e)).map(function(e,n){return n+1}).reduce(function(t,r){return[].concat(p(t),1===r||r===e||r>=n-2&&r<=n+2?[r]:[null])},[]).reduce(function(e,n,t,r){return null==n?null!=r[t+1]?[].concat(p(e),["..."]):e:[].concat(p(e),[n])},[])}(n,t).map(function(e,n){if("..."===e)return a({key:"ellipsis-".concat(n)});var o=e===t;return i({index:e,isCurrent:o,onClick:function(){return!o&&r(e)}})}),f=c({type:"previous",disabled:1===t,onClick:function(){return t>1&&r(t-1)}}),m=c({type:"next",disabled:t===n,onClick:function(){return t<n&&r(t+1)}});return o.a.createElement("div",u,f,d,m)},f=d;d.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{nbPages:{type:{name:"number"},required:!1,description:""},current:{type:{name:"number"},required:!1,description:""},onPageSelected:{type:{name:"func"},required:!1,description:""},renderPage:{type:{name:"func"},required:!1,description:""},renderEllipsis:{type:{name:"func"},required:!1,description:""},renderNav:{type:{name:"func"},required:!1,description:""}}};t("./src/components/Pagination/Pagination.css");var m=function(e){var n=e.index,t=e.isCurrent,r=e.onClick;return o.a.createElement(c.a,{key:n,label:n,link:!t,primary:t,active:t,raised:!0,onClick:r})},y=function(e){var n=e.key;return o.a.createElement(c.a,{key:n,label:"\u22ef",disabled:!0})},b=function(e){var n=e.type,t=e.disabled,r=e.onClick;return o.a.createElement(c.a,{key:n,icon:"previous"===n?"chevron_left":"chevron_right",disabled:t,raised:!0,link:!0,onClick:r})},g=function(e){var n=e.nbPages,t=e.current,r=e.onPageSelected;return o.a.createElement(f,{nbPages:n,current:t,onPageSelected:r,renderPage:m,renderEllipsis:y,renderNav:b,className:"pagination"})},v=g;function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function O(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,n){return!n||"object"!==h(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,n){return(E=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}g.__docgenInfo={description:"",methods:[],displayName:"DefaultPagination",props:{nbPages:{type:{name:"number"},required:!1,description:""},current:{type:{name:"number"},required:!1,description:""},onPageSelected:{type:{name:"func"},required:!1,description:""}}},t.d(n,"default",function(){return w});var w=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=j(this,_(n).call(this,e))).layout=null,t}var t,r,c;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&E(e,n)}(n,o.a.Component),t=n,(r=[{key:"render",value:function(){var e=this.props,n=e.components,t=P(e,["components"]);return o.a.createElement(i.MDXTag,{name:"wrapper",components:n},o.a.createElement(i.MDXTag,{name:"h1",components:n,props:{id:"pagination"}},"Pagination"),o.a.createElement(i.MDXTag,{name:"pre",components:n},o.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import { DefaultPagination } from 'components'\n")),o.a.createElement(i.MDXTag,{name:"h2",components:n,props:{id:"basic-usage"}},"Basic usage"),o.a.createElement(a.e,{__position:0,__code:"<DefaultPagination nbPages={5} current={1} />\n<br />\n<DefaultPagination nbPages={20} current={10} />",__scope:{props:this?this.props:t,DefaultPagination:v}},o.a.createElement(v,{nbPages:5,current:1}),o.a.createElement("br",null),o.a.createElement(v,{nbPages:20,current:10})),o.a.createElement(i.MDXTag,{name:"h2",components:n,props:{id:"properties"}},"Properties"),o.a.createElement(a.f,{of:v}))}}])&&O(t.prototype,r),c&&O(t,c),n}();w.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=src-components-pagination-pagination.3c20eb5c79dcc9a25e78.js.map
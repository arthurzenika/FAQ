(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./src/components/Checkbox/Checkbox.css":function(e,n,o){},"./src/components/Checkbox/Checkbox.mdx":function(e,n,o){"use strict";o.r(n);var a=o("./node_modules/react/index.js"),t=o.n(a),c=o("./node_modules/@mdx-js/tag/dist/index.js"),r=o("./node_modules/docz/dist/index.m.js"),s=(o("./src/components/Checkbox/Checkbox.css"),function(e){var n=e.label,o=e.checked,a=e.onChange;return t.a.createElement("label",{className:"checkbox"},t.a.createElement("span",null,n),t.a.createElement("input",{type:"checkbox",checked:o,onChange:a}),t.a.createElement("span",{className:"checkmark"}))}),l=s;function p(e,n){if(null==e)return{};var o,a,t=function(e,n){if(null==e)return{};var o,a,t={},c=Object.keys(e);for(a=0;a<c.length;a++)o=c[a],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)o=c[a],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}s.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{type:{name:"node"},required:!0,description:""},checked:{type:{name:"bool"},required:!0,description:""},onChange:{type:{name:"func"},required:!0,description:""}}};n.default=function(e){var n=e.components,o=p(e,["components"]);return t.a.createElement(c.MDXTag,{name:"wrapper",components:n},t.a.createElement(c.MDXTag,{name:"h1",components:n,props:{id:"checkbox"}},"Checkbox"),t.a.createElement(c.MDXTag,{name:"pre",components:n},t.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js",metastring:""}},"import { Checkbox } from 'components'\n")),t.a.createElement(c.MDXTag,{name:"h2",components:n,props:{id:"basic-usage"}},"Basic usage"),t.a.createElement(r.Playground,{__position:0,__code:'<Checkbox label="Vanilla" />\n<Checkbox label="Chocolate" />',__scope:{props:o,Checkbox:l}},t.a.createElement(l,{label:"Vanilla"}),t.a.createElement(l,{label:"Chocolate"})),t.a.createElement(c.MDXTag,{name:"h2",components:n,props:{id:"properties"}},"Properties"),t.a.createElement(r.PropsTable,{of:l}))}}}]);
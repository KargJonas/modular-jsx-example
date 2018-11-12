!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);
/** @license Modular-UI
* Copyright (c) 2018 Jonas Karg
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var o=function(){const e={0:["Info","You are using the development build of Modular. Make sure to use the production build when deploying this app."],1:["Invalid Attribute","Unable to create Modular element.","Invalid attribute.",'The attribute "__config__" is reserved for Modular.',"el"],2:["Invalid Input","An object, which is not a Modular-element, was passed into Modular.core.getHtml().","( Modular.core.getHtml() was called by Modular.render() )","Modular does not know how how to handle this.","core.getHtml"],3:["Invalid Input","A value, which is not a [String], [Number], [Element] (html), [Function], [Object] or [Array], was passed into Modular.core.getHtml().","( Modular.core.getHtml() was called by Modular.render() )","This error might be caused by a invalid child-element in Modular.render() or Modular.el().","Modular does not know how how to handle this.","core.getHtml"],4:["Invalid or Missing Input","Unable to scan.","A invalid value was passed into Modular.scan().","Modular.scan() expects a [String].","scan"],5:["Missing TagName","Unable to create Modular element.","Missing tag.","( The tag of a Modular-element is the first attribute of Modular.el() )","el"],6:["Invalid Style","Unable to convert given value to CSS.","An invalid value passed into Modular.core.getStyle().","Modular.core.getStyle() expects a [String] (already containing inline style), an [Object] (containing valid style) or a [Function] (returning an object that contains valid style)","Empty or invalid styles should be avoided.","core.getStyle"],7:["Invalid Input","Unable to render.","Modular.render() is missing a root-element or a container-element","( A root-element can be: a [Modular-element], [String], [Number], [Element] (html), [Array] (which contains any of the mentioned) or [Function] (which returns any of the mentioned) )","A container-element has to be an html-element or a valid CSS-selector ( [String] ).","Keep in mind - if the container-element is not a child of the page, you probably won't be able to see much.","render"],8:["Invalid Render-Container","Unable to render","Modular.render() received an invalid container-element.","A container-element has to be an html-element or a valid CSS-selector ( [String] ).","Keep in mind - if the container-element is not a child of the page, you probably won't be able to see much.","render"],9:["Invalid configuration","Could not get route.","Modular.router.routes must be an object or null.",'The routes-object should be structured like this this:\nModular.router.routes = {\n  "path/of/the/page": MyElement,\n  "path/of/the/other/page": MyOtherElement\n}',"router.routeChange"]},n=document.createElement("style");n.setAttribute("modular-style","");const t={bindings:{},preRender:new Event("prerender"),postRender:new Event("postrender"),errors:e,tempStyle:[],styleElement:n,tempElCount:[]};var o=Object.freeze({data:t});function r(e){if(!t.errors)return"🚨 (Modular): ";let n,o,r=t.errors[e],i=`[${r[0]}]`,a="";return r.shift(),r.length>1&&(a=`\n@ ${r.pop()}()\n`),o=`🚨 (Modular): ${[i,n=r.map(e=>`\n--\x3e ${e}`).join("\n"),a].join("\n")}`}function i(e){const n={};return Array.from(e).map(e=>{n[e.name]=e.value}),n}function a(e){if((e=e||"")instanceof Element)return e;if(e instanceof Function)return a(e());if(e instanceof Array){if(!e.length)return a();const n=document.createElement("div");return e.map(e=>n.appendChild(a(e))),n}if(e.constructor===String||e.constructor===Number)return document.createTextNode(e);if(e instanceof Object){if(e.__config__&&"modular-element"!==e.__config__.type)throw r(2);return e.__config__.render()}throw r(3)}function l(e){return e==e.toUpperCase()}function d(e,n){let t="";const o=[];return Object.entries(e).map(e=>{const r=e[0],i=e[1];if(":"===r[0]&&void 0!==n){let e;e=i.constructor===String?i:d(i),o.push(`[data-modular-id="${n}"]${r}{${e} }`)}else t+=`${function(e){let n="";for(let t=0;t<e.length;t++)t>1&&l(e[t])&&/[a-zA-Z]/.test(e[t])?(n+="-",n+=e[t].toLowerCase()):n+=e[t];return n}(e[0])}:${i};`}),n&&(t=`[data-modular-id="${n}"]{${t}}${o.join("")}`),t}function s(e,n){let t=e;if(t.constructor===String)return`[data-modular-id="${n}"]{${t}}`;if(t instanceof Function&&(t=t()),t instanceof Object){const e=Object.entries(t);if(!e.length)return console.warn(r(6)),"";e[0][1]instanceof Object?(t="",e.map(e=>{t+=`[data-modular-id="${n}"] ${e[0]}{${d(e[1])}}`})):t=d(t,n)}if(t.constructor===String)return t;console.warn(r(6))}function u(e,n,o){const r=document.createElement(e);return n&&n.style&&(t.tempElCount[t.tempElCount.length-1]++,t.tempStyle[t.tempStyle.length-1]+=s(n.style,t.tempElCount[t.tempElCount.length-1]),n["data-modular-id"]=t.tempElCount[t.tempElCount.length-1],delete n.style),Object.entries(n).map(e=>{r.setAttribute(e[0],e[1])}),Object.assign(r,n),o&&r.appendChild(o),r}var c=Object.freeze({err:r,getAttr:i,getHtml:a,getStyle:s,makeEl:u});function g(){let e=Array.from(arguments),n=e[0].toLowerCase(),o=e[1]||{};if(e.splice(0,2),1===e.length&&(e=e[0]),"string"!=typeof n)throw new Error(r(5));if(void 0!==o.__config__)throw Error(r(1));return o.__config__={type:"modular-element",tag:n,content:e,bindings:o.$bind,element:null},o.__config__.render=(()=>{const e={};return Object.assign(e,o||{}),delete e.__config__,delete e.$bind,o.__config__.element=u(o.__config__.tag,e,a(o.__config__.content)),o.__config__.bindings instanceof Object&&(o.__config__.change=(()=>{Object.entries(o.__config__.bindings).map(e=>{let n=o.__config__.element[e[0]];"true"==n?n=!0:"false"==n&&(n=!1),f(e[1],n),(t.bindings[e[1]].value!==t.bindings[e[1]].lastValue||t.bindings[e[1]].value instanceof Object||t.bindings[e[1]].value instanceof Array)&&t.bindings[e[1]].listeners.map(n=>{n(_(e[1]))})})}),Object.entries(o.__config__.bindings).map(e=>{t.bindings[e[1]]||(t.bindings[e[1]]={elements:[],lastValue:void 0,value:void 0,listeners:[]}),t.bindings[e[1]].elements.push({element:o.__config__.element,value:e[0]})}),o.__config__.element.addEventListener("mouseover",e=>o.__config__.change(e)),o.__config__.element.addEventListener("mouseout",e=>o.__config__.change(e)),o.__config__.element.addEventListener("click",e=>o.__config__.change(e)),o.__config__.element.addEventListener("change",e=>o.__config__.change(e)),o.__config__.element.addEventListener("keyup",e=>o.__config__.change(e)),o.__config__.element.addEventListener("keydown",e=>o.__config__.change(e)),o.__config__.element.addEventListener("contextmenu",e=>o.__config__.change(e)),o.__config__.change()),o.__config__.element}),o}var m=Object.freeze({el:g});function f(e,n){t.bindings[e]||(t.bindings[e]={elements:[],lastValue:void 0,value:void 0,listeners:[]}),t.bindings[e].lastValue=t.bindings[e].value,t.bindings[e].value=n,t.bindings[e].elements.map(n=>{n.element[n.value]=t.bindings[e].value})}function _(e){if(t.bindings[e])return t.bindings[e].value}var p=Object.freeze({getBinding:_,setBinding:f,listenBinding:function(e,n){t.bindings[e]||f(e,void 0),t.bindings[e].listeners.push(n)},scan:function e(n){if(n.constructor!==String)throw new Error(r(4));let t=document.createElement("div");return t.innerHTML=n.trim(),Array.from(t.childNodes).map(n=>n instanceof Element?g(n.tagName,i(n.attributes),e(n.innerHTML)):n.textContent)},render:function(e,n){if(t.tempStyle.push(""),t.tempElCount.push(0),window.dispatchEvent(t.preRender),!e||!n)throw new Error(r(7));let o;if(!((o=n.constructor===String?document.querySelector(n):n)instanceof Element))throw r(8);o.innerHTML="",o.appendChild(a(e)),document.querySelector("style[modular-style]")||document.head.appendChild(t.styleElement),t.styleElement.innerHTML=t.tempStyle[t.tempStyle.length-1],t.tempStyle.pop(),t.tempElCount.pop(),window.dispatchEvent(t.postRender)}});const h={newRouteEvent:new Event("newroute"),routes:void 0,page:void 0,getRoute(e){let n=e;return n=(n=n.replace(/(^\/+|\/+$)/g,"")).split("/")},routeChange(){if(!h.routes)return;if(h.routes.constructor!==Object)throw r(9);const e=h.getRoute(window.location.pathname),n=Object.entries(h.routes);for(let t=0;t<n.length;t++){const o=h.getRoute(n[t][0]);let r=!0;for(let n=0;n<o.length;n++)if(void 0===e[n]||"**"!==o[n]&&o[t]!==e[t]){r=!1;break}if(r)return h.page=n[t][1],void window.dispatchEvent(h.newRouteEvent)}},init(){window.addEventListener("popstate",h.routeChange),h.routeChange()},navigate(e){window.history.pushState(null,e,e),h.routeChange()}};var b=Object.freeze({router:h});return{data:o,core:c,getBinding:p.getBinding,setBinding:p.setBinding,listenBinding:p.listenBinding,scan:p.scan,render:p.render,el:m.el,router:b}}();var r={"*":{fontFamily:"monoSpace",textAlign:"center"},".top-container":{backgroundColor:"#ccddff",padding:"20px 0",borderBottom:"5px solid #335588"},".logo":{width:"30%",height:"30%",minWidth:"250px",minHeight:"250px",position:"absolute",transform:"translate(-50%, -30%)",top:"50%"},h1:{fontSize:"40px",color:"#335588"}};let i=0;o.render(function(){return o.el("div",{style:r},[o.el("div",{className:"top-container"},[o.el("h1",null,["Welcome to Modular!"]),o.el("h2",null,["You've been on this page for ",o.el("span",{$bind:{innerHTML:"timer"}})," seconds!"])]),o.el("img",{src:"assets/modular-logo.svg",className:"logo"})])},"#root"),function e(){o.setBinding("timer",i),i++,window.setTimeout(()=>{window.requestAnimationFrame(e)},1e3)}()}]);
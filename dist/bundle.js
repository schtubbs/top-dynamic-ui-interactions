(()=>{"use strict";var n={696:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"ul {\n    padding: 0;\n    margin: 0;\n}\n\nli {\n    border: 0px;\n    list-style-type: none;\n}\n\na {\n    color: goldenrod;\n    text-decoration: none;\n}\n\n.tabs {\n    position: relative;\n    width: 100%;\n}\n\n.tabs .menu.horizontal {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    width: 100%;\n    top: 100px;\n}\n\n.menu.horizontal>.menuItem:hover {\n    font-weight: 400;\n}\n\n.tabs .menu.horizontal > .menuItem {\n    height: 50px;\n    background-color: black;\n    display: flex;\n    align-items: center;\n}\n\n.tabs .menu.horizontal > .menuItem.hidden {\n    display: none;\n}\n\n.tabs .menu.horizontal > li >a,\n.tabs .menu.horizontal > li >button {\n    flex-grow: 1;\n    border-radius: 0;\n    white-space: nowrap;\n    padding: 0 10px;\n}\n\n.tabs .secondary {\n    display: none;\n    position: absolute;\n    top: 100%;\n    right: 0;\n}\n\n.tabs.show-secondary .secondary {\n    display: block;\n}\n\n.more > button > span {\n    display: inline-block;\n}\n\n.tabs .hidden,\n.tabs.show-secondary .secondary > .hidden {\n    display: none;\n}\n\n.menuButton {\n    background-color: goldenrod;\n    border: 2px solid goldenrod;\n    height: 50px;\n    padding: 0;\n    margin: 0;\n    font-weight: 600;\n}\n\n.tabs .menu.horizontal > li > button:hover,\n.tabs.show-secondary .secondary > li:hover {\n    cursor: pointer;\n    background-color: rgb(0, 0, 0);\n    border: 2px solid goldenrod;\n    color: goldenrod;;\n}\n\n.tabs.show-secondary .secondary > li {\n    height: 25px;\n    padding: 0 10px;\n    background-color: black;\n    border: 2px solid black;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    text-align: right;\n}\n\n.secondary > li:last-of-type {\n    border-radius: 0 0 5px 5px;\n}",""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=o.base?c[0]+o.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=r(f,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=o(n,r),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),s=t(565),c=t.n(s),d=t(216),l=t.n(d),u=t(589),p=t.n(u),f=t(696),h={};function m(n){const e=document.createElement("ul");return e.classList=n,e}function b(n){const e=document.createElement("li");return e.classList=n,e}function y(n,e){const t=document.createElement("a");return t.setAttribute("href",e||"#"),t.textContent=n,t}h.styleTagTransform=p(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals,function(n){const e=function(){const n=document.createElement("nav");return n.classList="tabs",n}(),t=m("menu horizontal"),o=b("more"),r=function(){const n=document.createElement("button");return n.setAttribute("aria-haspopup","true"),n.setAttribute("aria-expanded","false"),n.classList="menuButton",n.innerHTML="More &#8595;",n}(),a=m("secondary");[{text:"About",link:"#"},{text:"About",link:"#"},{text:"About",link:"#"},{text:"About",link:"#"},{text:"About",link:"#"},{text:"About",link:"#"},{text:"About",link:"#"}].forEach((n=>{const e=b("menuItem"),o=y(n.text,n.link);e.appendChild(o),t.appendChild(e);const r=b("menuItem hidden"),i=y(n.text,n.link);r.appendChild(i),a.appendChild(r)})),o.appendChild(r),o.appendChild(a),t.appendChild(o),e.appendChild(t),document.body.appendChild(e)}(),function(){const n=document.querySelector(".tabs"),e=document.querySelector(".menu.horizontal"),t=n.querySelectorAll(".menu.horizontal > li:not(.more)"),o=n.querySelector(".secondary"),r=o.querySelectorAll("li"),a=n.querySelectorAll("li"),i=e.querySelector(".more"),s=i.querySelector(".menuButton");function c(){a.forEach((n=>{n.classList.remove("hidden")}));let o=s.offsetWidth,c=[];const d=e.offsetWidth;t.forEach(((n,e)=>{d>=o+n.offsetWidth?o+=n.offsetWidth:(n.classList.add("hidden"),c.push(e))})),c.length?r.forEach(((n,e)=>{c.includes(e)||n.classList.add("hidden")})):(i.classList.add("hidden"),n.classList.remove("show-secondary"),s.setAttribute("aria-expanded",!1))}s.addEventListener("click",(e=>{e.preventDefault(),n.classList.toggle("show-secondary"),s.setAttribute("aria-expanded",n.classList.contains("show-secondary"))})),c(),window.addEventListener("resize",c),document.addEventListener("click",(e=>{let t=e.target;for(;t;){if(t===o||t===s)return;t=t.parentNode}n.classList.remove("show-secondary"),s.setAttribute("aria-expanded",!1)}))}()})()})();
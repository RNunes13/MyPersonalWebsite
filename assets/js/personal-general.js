!function i(s,a,l){function c(t,e){if(!a[t]){if(!s[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(u)return u(t,!0);var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}var r=a[t]={exports:{}};s[t][0].call(r.exports,function(e){return c(s[t][1][e]||e)},r,r.exports,i,s,a,l)}return a[t].exports}for(var u="function"==typeof require&&require,e=0;e<l.length;e++)c(l[e]);return c}({1:[function(e,n,o){!function(e,t){"use strict";"function"==typeof define&&define.amd?define(t):"object"==typeof o&&"object"==typeof n?n.exports=t():e.smoothScroll=t()}(this,function(){"use strict";if("object"==typeof window&&void 0!==document.querySelectorAll&&void 0!==window.pageYOffset&&void 0!==history.pushState){var d=function(e,t,n,o){return o<n?t:e+(t-e)*((r=n/o)<.5?4*r*r*r:(r-1)*(2*r-2)*(2*r-2)+1);var r},n=function(t,n,o,r){n=n||500;var e,i,s=(r=r||window).scrollTop||window.pageYOffset;if("number"==typeof t)var a=parseInt(t);else a=(i=s,"HTML"===(e=t).nodeName?-i:e.getBoundingClientRect().top+i);var l=Date.now(),c=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(e){window.setTimeout(e,15)},u=function(){var e=Date.now()-l;r!==window?r.scrollTop=d(s,a,e,n):window.scroll(0,d(s,a,e,n)),n<e?"function"==typeof o&&o(t):c(u)};u()},o=function(e){if(!e.defaultPrevented){e.preventDefault(),location.hash!==this.hash&&window.history.pushState(null,null,this.hash);var t=document.getElementById(this.hash.substring(1));if(!t)return;n(t,500,function(e){location.replace("#"+e.id)})}};return document.addEventListener("DOMContentLoaded",function(){for(var e,t=document.querySelectorAll('a[href^="#"]:not([href="#"])'),n=t.length;e=t[--n];)e.addEventListener("click",o,!1)}),n}})},{}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.footer={year:document.querySelector(".js--footer-year")}},{}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("./__cache-selectors");n.default={init:function(){this.setYearCopyright()},setYearCopyright:function(){var e=(new Date).getFullYear();o.footer.year.textContent=e+"."}}},{"./__cache-selectors":2}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={init:function(){this.onClickMenu(),this.fillHeader(),this.onScroll(),this.onWindowResize()},onClickMenu:function(){Personal.menuBtn.addEventListener("click",function(e){e.target.classList.toggle("is--open"),Personal.navbar.classList.toggle("is--open"),Personal.overlay.classList.toggle("is--active"),Personal.body.classList.toggle("has--no-scroll")})},fillHeader:function(){window.innerHeight*(1-.9)<window.scrollY?Personal.header.classList.add("is--fill"):Personal.header.classList.remove("is--fill")},onScroll:function(){window.addEventListener("scroll",this.fillHeader)},onWindowResize:function(){window.addEventListener("resize",function(e){768<=window.innerWidth&&Personal.closeMenus(!0)})}}},{}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.navbar={items:document.querySelector(".js--navbar-items"),link:document.querySelectorAll(".js--navbar-link")}},{}],6:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o,r=e("./__cache-selectors"),i=e("smoothscroll"),s=(o=i)&&o.__esModule?o:{default:o};n.default={init:function(){var t=this;r.navbar.link.forEach(function(e){return e.addEventListener("click",t.onClick)}),window.addEventListener("scroll",this.onScroll)},onClick:function(e){e.preventDefault();var t=document.querySelector(this.hash);t&&((0,s.default)(t.offsetTop-Personal.navbarHeight,1e3),Personal.closeMenus(!0))},onScroll:function(){r.navbar.link.forEach(function(e){var t=document.querySelector(e.getAttribute("href")).offsetTop-Personal.navbarHeight,n=r.navbar.items.querySelector(".is--active");window.scrollY>=t&&(n&&n.classList.remove("is--active"),e.parentElement.classList.add("is--active"))})}}},{"./__cache-selectors":5,smoothscroll:1}],7:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=s(e("./Header/header-methods")),r=s(e("./Navbar/navbar-methods")),i=s(e("./Footer/footer-methods"));function s(e){return e&&e.__esModule?e:{default:e}}n.default={init:function(){o.default.init(),r.default.init(),i.default.init()}}},{"./Footer/footer-methods":3,"./Header/header-methods":4,"./Navbar/navbar-methods":6}],8:[function(e,t,n){"use strict";var o,r=e("./pages/General/general-base"),i=(o=r)&&o.__esModule?o:{default:o};document.addEventListener("DOMContentLoaded",i.default.init)},{"./pages/General/general-base":7}]},{},[8]);
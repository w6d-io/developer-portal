(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[128],{8052:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return l},default:function(){return u}});var r=n(5893),s=n(7294),a=n(6969),i=n(4053),o=n(1664),c=n(4823),l=!0;function u(e){var t=e.posts,n=(0,s.useState)(""),l=n[0],u=n[1],d=[];return console.log(l),l?d.push((0,c.RE)(t,l)):d.push(t),console.log(t),console.log(d),(0,r.jsxs)("div",{className:"home-container",children:[(0,r.jsx)("title",{children:"Blog - Wildcard Portal"}),(0,r.jsx)(i.default,{}),(0,r.jsxs)("div",{className:"blog_container",children:[(0,r.jsx)("div",{className:"posts_list",children:d[0].map((function(e,t){return(0,r.jsxs)("div",{className:"posts_preview",children:[(0,r.jsx)("div",{children:(0,r.jsx)("img",{className:"posts_previewimg",src:e.frontmatter.post_logo})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(o.default,{href:"developer-portal/Blog/".concat(e.slug),children:(0,r.jsx)("a",{className:"posts_title",children:e.frontmatter.title})}),(0,r.jsxs)("p",{className:"posts_previewtext-date",children:[e.frontmatter.date," \u2022 ",e.frontmatter.reading_time]}),(0,r.jsx)("p",{className:"posts_previewtext",children:e.frontmatter.preview}),e.frontmatter.preview?(0,r.jsx)(o.default,{href:"/developer-portal/Blog/".concat(e.slug),children:(0,r.jsx)("a",{className:"posts_seemore",children:"read more"})}):""]})]},t)}))}),(0,r.jsx)("div",{children:(0,r.jsx)(a.default,{posts:t,changeValue:function(e){return u(e)}})})]})]})}},6969:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(9227),s=n(5893),a=(n(7294),n(2907)),i=n(4823);function o(e){var t=e.leftElement,n=e.title,r=e.rightElement;return(0,s.jsxs)("div",{className:"ownnavlink_container",children:[(0,s.jsx)("img",{className:"ownnavlink_container_img",src:t}),(0,s.jsx)("p",{className:"ownnavlink_container_title",children:n}),(0,s.jsx)("p",{className:"ownnavlink_container_span",children:r})]})}function c(e){var t=e.posts,n=e.changeValue,i=[];t.map((function(e){i.push(e.frontmatter.category)}));var o=i.reduce((function(e,t){return e[t]?++e[t]:e[t]=1,e}),{}),c=Object.entries(o).map((function(e){var t=(0,r.Z)(e,2);return{title:t[0],count:t[1]}}));return(0,s.jsxs)("div",{className:"categories_container",children:[(0,s.jsx)(a.TopBarTitle,{className:"categories_container_title",children:"Categories"}),(0,s.jsx)(a.NavLink,{className:"categories_container_item",onClick:function(){return n("All")},children:"All"}),c.map((function(e,t){return(0,s.jsx)(a.NavLink,{rightEl:e.count,className:"categories_container_item",onClick:function(){return n(e.title)},children:e.title},t)}))]})}function l(e){var t=e.posts,n=[];return t.map((function(e){n.push(e.frontmatter)})),n.sort(i.UI),(0,s.jsxs)("div",{className:"categories_container",children:[(0,s.jsx)(a.TopBarTitle,{className:"categories_container_title",children:"Latest Releases"}),n.map((function(e,t){return(0,s.jsx)(o,{leftElement:e.post_logo,title:e.app,rightElement:e.type},t)}))]})}function u(e){var t=e.posts,n=e.changeValue;return(0,s.jsxs)("div",{children:[(0,s.jsx)(c,{posts:t,changeValue:n}),(0,s.jsx)(l,{posts:t})]})}},4053:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(5893),s=(n(7294),n(1664)),a=n(2907),i=(n(5404),n(6893));function o(){return(0,r.jsx)("div",{children:(0,r.jsxs)(a.TopBar,{className:"box",children:[(0,r.jsx)(a.TopBarSection,{children:(0,r.jsx)(a.TopBarTitle,{children:(0,r.jsx)(a.TopBarLink,{href:"/developer-portal/",children:(0,r.jsx)(a.Avatar,{imgUrl:"https://media-exp1.licdn.com/dms/image/C4D0BAQHca9scvFTn_g/company-logo_200_200/0/1575039115252?e=2159024400&v=beta&t=lhQfV9RKT_iydx97uugwZtvsL_zgPoTU_fxFC11nkaI",name:(0,r.jsxs)("h2",{children:[(0,r.jsx)("b",{children:"Wildcard"}),(0,r.jsx)("b",{className:"header-secondary",children:"portal"})]}),pill:(0,r.jsx)("span",{children:"O"})})})})}),(0,r.jsx)(a.TopBarSection,{className:"menu",children:(0,r.jsxs)(a.TopBarLinkContainer,{children:[(0,r.jsx)(i.jRj,{}),(0,r.jsx)("div",{className:"vl"}),[{title:"Blog",to:""}].map((function(e){return(0,r.jsx)(s.default,{href:"../developer-portal/".concat(e.to),passHref:!0,children:(0,r.jsx)("a",{className:"menu-item",children:e.title})},e.title)}))]})}),(0,r.jsx)(a.TopBarSection,{className:"push"})]})})}},4823:function(e,t,n){"use strict";n.d(t,{UI:function(){return r},RE:function(){return s}});var r=function(e,t){return new Date(t.date)-new Date(e.date)},s=function(e,t){console.log("ARRAY ",e," VALUE ",t);var n=[];return"All"!=t?e.map((function(e){e.frontmatter.category==t&&n.push(e)})):e.map((function(e){n.push(e)})),console.log("POSTS ",n),n}},6008:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Blog",function(){return n(8052)}])},9227:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,s=!1,a=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){s=!0,a=c}finally{try{r||null==o.return||o.return()}finally{if(s)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return s}})}},function(e){e.O(0,[774,907,28,888,179],(function(){return t=6008,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
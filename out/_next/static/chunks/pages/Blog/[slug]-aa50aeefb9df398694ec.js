(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[418],{6289:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return u},default:function(){return d}});var r=t(5893),s=t(7294),a=t(7084),i=t.n(a),c=t(6969),l=t(4053),o=t(4823),u=!0;function d(e){var n=e.frontmatter,t=n.title,a=n.date,u=n.reading_time,d=(e.slug,e.content),h=e.posts,p=(0,s.useState)(""),m=p[0],f=p[1],x=[];return console.log(m),m?x.push((0,o.RE)(h,m)):x.push(h),(0,r.jsxs)("div",{className:"home-container",children:[(0,r.jsxs)("title",{children:[t," - Wildcard Portal"]}),(0,r.jsx)(l.default,{}),(0,r.jsxs)("div",{className:"blog_container",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:"post_container_title",children:t}),(0,r.jsxs)("p",{children:[a," \u2022 ",u]}),(0,r.jsx)("div",{className:"post_container",children:(0,r.jsx)("div",{className:"test",dangerouslySetInnerHTML:{__html:i()(d)}})})]}),(0,r.jsx)("div",{children:(0,r.jsx)(c.default,{posts:h,changeValue:function(e){return f(e)}})})]})]})}},6969:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var r=t(9227),s=t(5893),a=(t(7294),t(2907)),i=t(4823);function c(e){var n=e.leftElement,t=e.title,r=e.rightElement;return(0,s.jsxs)("div",{className:"ownnavlink_container",children:[(0,s.jsx)("img",{className:"ownnavlink_container_img",src:n}),(0,s.jsx)("p",{className:"ownnavlink_container_title",children:t}),(0,s.jsx)("p",{className:"ownnavlink_container_span",children:r})]})}function l(e){var n=e.posts,t=e.changeValue,i=[];n.map((function(e){i.push(e.frontmatter.category)}));var c=i.reduce((function(e,n){return e[n]?++e[n]:e[n]=1,e}),{}),l=Object.entries(c).map((function(e){var n=(0,r.Z)(e,2);return{title:n[0],count:n[1]}}));return(0,s.jsxs)("div",{className:"categories_container",children:[(0,s.jsx)(a.TopBarTitle,{className:"categories_container_title",children:"Categories"}),(0,s.jsx)(a.NavLink,{className:"categories_container_item",onClick:function(){return t("All")},children:"All"}),l.map((function(e,n){return(0,s.jsx)(a.NavLink,{rightEl:e.count,className:"categories_container_item",onClick:function(){return t(e.title)},children:e.title},n)}))]})}function o(e){var n=e.posts,t=[];return n.map((function(e){t.push(e.frontmatter)})),t.sort(i.UI),(0,s.jsxs)("div",{className:"categories_container",children:[(0,s.jsx)(a.TopBarTitle,{className:"categories_container_title",children:"Latest Releases"}),t.map((function(e,n){return(0,s.jsx)(c,{leftElement:e.post_logo,title:e.app,rightElement:e.type},n)}))]})}function u(e){var n=e.posts,t=e.changeValue;return(0,s.jsxs)("div",{children:[(0,s.jsx)(l,{posts:n,changeValue:t}),(0,s.jsx)(o,{posts:n})]})}},4053:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var r=t(5893),s=(t(7294),t(1664)),a=t(2907),i=(t(5404),t(6893));function c(){return(0,r.jsx)("div",{children:(0,r.jsxs)(a.TopBar,{className:"box",children:[(0,r.jsx)(a.TopBarSection,{children:(0,r.jsx)(a.TopBarTitle,{children:(0,r.jsx)(a.TopBarLink,{href:"/developer-portal/",children:(0,r.jsx)(a.Avatar,{imgUrl:"https://media-exp1.licdn.com/dms/image/C4D0BAQHca9scvFTn_g/company-logo_200_200/0/1575039115252?e=2159024400&v=beta&t=lhQfV9RKT_iydx97uugwZtvsL_zgPoTU_fxFC11nkaI",name:(0,r.jsxs)("h2",{children:[(0,r.jsx)("b",{children:"Wildcard"}),(0,r.jsx)("b",{className:"header-secondary",children:"portal"})]}),pill:(0,r.jsx)("span",{children:"O"})})})})}),(0,r.jsx)(a.TopBarSection,{className:"menu",children:(0,r.jsxs)(a.TopBarLinkContainer,{children:[(0,r.jsx)(i.jRj,{}),(0,r.jsx)("div",{className:"vl"}),[{title:"Blog",to:"blog"}].map((function(e){return(0,r.jsx)(s.default,{href:"../developer-portal/".concat(e.title),passHref:!0,children:(0,r.jsx)("a",{className:"menu-item",children:e.title})},e.title)}))]})}),(0,r.jsx)(a.TopBarSection,{className:"push"})]})})}},4823:function(e,n,t){"use strict";t.d(n,{UI:function(){return r},RE:function(){return s}});var r=function(e,n){return new Date(n.date)-new Date(e.date)},s=function(e,n){console.log("ARRAY ",e," VALUE ",n);var t=[];return"All"!=n?e.map((function(e){e.frontmatter.category==n&&t.push(e)})):e.map((function(e){t.push(e)})),console.log("POSTS ",t),t}},2899:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Blog/[slug]",function(){return t(6289)}])}},function(e){e.O(0,[774,907,28,138,888,179],(function(){return n=2899,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
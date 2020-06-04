(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{796:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return c}),n.d(t,"default",function(){return d});n(8),n(9),n(7),n(14),n(15),n(0);var a=n(113),o=n(805),l=n(4),r=n(61),i=n(16),s=n(36);var c={},m={_frontmatter:c},u=o.a;function d(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(u,Object.assign({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Events are a mechanism supporting decoupled communication between components. They are part of the underlying ",Object(a.b)(l.n,{href:"/development/api",mdxType:"Link"},"API abstract class")," meaning they are available to all child classes. The usage for Events is simple and familiar."),Object(a.b)("p",null,"On a given service, you can subscribe to a topic using the ",Object(a.b)("inlineCode",{parentName:"p"},"on()")," method, or you can fire an event using ",Object(a.b)("inlineCode",{parentName:"p"},"trigger()"),"."),Object(a.b)("p",null,"The best example of this is the usage as part of the ",Object(a.b)(l.n,{href:"/architecture/authentication",mdxType:"Link"},"authentication flow"),"."),Object(a.b)("p",null,"In a number of the methods within the Auth API, the ",Object(a.b)("inlineCode",{parentName:"p"},"trigger()")," method is called."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"this.trigger('auth_updated', {\n    method: 'switch_context',\n    data: {\n        user: body.data.user,\n        business: body.data.business,\n        refresh_token: body.data.tokens.refresh,\n        access_token: body.data.tokens.access,\n    }\n});\n")),Object(a.b)(r.a,{mdxType:"Caption"},Object(a.b)(s.a,{href:"https://github.com/xedi/sdk-js/blob/master/src/Services/Auth.ts#L144",mdxType:"ExternalLink"},"Auth.switchContexts")),Object(a.b)("p",null,"Subscribing to the ",Object(a.b)("inlineCode",{parentName:"p"},"auth_updated")," topic is also as straightforward as this."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"Xedi.Auth.on('auth_updated', (event) => {\n    console.log(`Auth state updated by ${ event.model }`);\n    console.log(`Current user: ${ event.data.user.first_name });\n    if (event.data.hasOwnProperty('business')) {\n        console.log(`Current business: ${ event.data.business.name }`);\n    }\n});\n")),Object(a.b)(l.j,{mdxType:"Flash"},Object(a.b)(i.h,{mr:2,mdxType:"InfoIcon"}),"These are not DOMEvents, nor do they implement the JavaScript Event interface."))}d.isMDXComponent=!0},805:function(e,t,n){"use strict";var a=n(2),o=n(4),l=n(16),r=n(0),i=n.n(r),s=n(125),c=n(71),m=n(188),u=n(126),d=n(186),b=n(187),p=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function h(e){var t=e.items,n=e.depth;return i.a.createElement(p,{as:"ul",m:0,p:0},t.map(function(e){return i.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(o.n,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(h,{items:e.items,depth:n+1}):null)}))}h.defaultProps={depth:0};var f=h,g=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),y=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),O=Object(a.f)(o.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),E=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),j=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,r=a.title,p=a.description,h=a.status,v=a.source,x=a.additionalContributors,k=void 0===x?[]:x;return i.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(s.a,{title:r,description:p}),i.a.createElement(c.b,null),i.a.createElement(g,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(o.e,{display:["none",null,null,"block"]},i.a.createElement(u.a,null)),i.a.createElement(y,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(O,{border:0,borderBottom:1,borderRadius:0,pb:2},i.a.createElement(o.m,null,r)),n.tableOfContents.items?i.a.createElement(E,{display:["none",null,"block"],position:"sticky",top:c.a+24,maxHeight:"calc(100vh - "+c.a+"px - 24px)"},i.a.createElement(o.t,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(f,{items:n.tableOfContents.items})):null,i.a.createElement(j,null,h||v?i.a.createElement(o.k,{mb:3,alignItems:"center"},h?i.a.createElement(b.a,{status:h}):null,i.a.createElement(o.e,{mx:"auto"}),v?i.a.createElement(d.a,{href:v}):null):null,n.tableOfContents.items?i.a.createElement(o.e,{display:["block",null,"none"],mb:3},i.a.createElement(o.h,null,function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.t,{as:"summary",fontWeight:"bold"},t?i.a.createElement(l.b,{mr:2}):i.a.createElement(l.c,{mr:2}),"Table of contents"),i.a.createElement(o.e,{pt:1},i.a.createElement(f,{items:n.tableOfContents.items})))})):null,t,i.a.createElement(m.a,{editUrl:n.editUrl,contributors:n.contributors.concat(k.map(function(e){return{login:e}}))})))))}}}]);
//# sourceMappingURL=component---content-development-events-mdx-41f3585fbc69a73b04ac.js.map
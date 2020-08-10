(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{845:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return c}),n.d(t,"default",function(){return m});n(10),n(11),n(8),n(13),n(18),n(0);var a=n(118),r=n(852),l=n(4),i=n(9),o=n(16);var c={},b={_frontmatter:c},s=r.a;function m(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(s,Object.assign({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Sometimes you need a more specific or complex dataset than our standard RESTful APIs can provide. For this reason, we have also provided a GraphQL API."),Object(a.b)(l.j,{mdxType:"Flash"},Object(a.b)(i.h,{mr:1,mdxType:"InfoIcon"})," If you are unfamiliar with GraphQL, click ",Object(a.b)(o.a,{href:"https://graphql.org/",mdxType:"ExternalLink"},"here")," to learn more."),Object(a.b)("h2",null,"Usage"),Object(a.b)("h3",null,"query"),Object(a.b)("p",null,"Allows you to perform ",Object(a.b)("inlineCode",{parentName:"p"},"query")," operations on the Graph."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"query"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(a.b)(i.a,{color:"green.5",mdxType:"CheckIcon"})),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),Object(a.b)("inlineCode",{parentName:"td"},"query whoami($id: String!) { user(_id: $id) { display_name } }"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"variables"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Object"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),Object(a.b)("inlineCode",{parentName:"td"},'{ id: "92ac7274-9369-11ea-9521-01002da17977" }'))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"headers"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Object"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),Object(a.b)("inlineCode",{parentName:"td"},'{ Accept-Language: "es" }'))))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Usage")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),'const myName = await Xedi.GraphQL.query(\n    `query whoami($id: String!) {\n        me: user(_id: $id) {\n            display_name\n        }\n    }`,\n    {\n        id: "92ac7274-9369-11ea-9521-01002da17977"\n    },\n    {\n        "Accept-Language": "es"\n    }\n);\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Response")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "me": {\n        "display_name": "Anthony Stark"\n    }\n}\n')),Object(a.b)("p",null,"If you are wanting to use our GraphQL API, we recommend using ",Object(a.b)(o.a,{href:"https://github.com/graphql/graphiql",mdxType:"ExternalLink"},"GraphiQL")," or ",Object(a.b)(o.a,{href:"https://github.com/getinsomnia/insomnia",mdxType:"ExternalLink"},"Insomia")," as great starting points. Our API supports introspection which means it can provide these clients with uptodate documentation."))}m.isMDXComponent=!0},852:function(e,t,n){"use strict";var a=n(2),r=n(4),l=n(9),i=n(0),o=n.n(i),c=n(130),b=n(76),s=n(199),m=n(131),p=n(197),d=n(198),u=Object(a.f)(r.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function g(e){var t=e.items,n=e.depth;return o.a.createElement(u,{as:"ul",m:0,p:0},t.map(function(e){return o.a.createElement(r.e,{as:"li",key:e.url,pl:n>0?3:0},o.a.createElement(r.o,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?o.a.createElement(g,{items:e.items,depth:n+1}):null)}))}g.defaultProps={depth:0};var O=g,j=Object(a.f)(r.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),f=Object(a.f)(r.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),h=Object(a.f)(r.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),y=Object(a.f)(r.p).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),N=Object(a.f)(r.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,i=a.title,u=a.description,g=a.status,E=a.source,x=a.additionalContributors,k=void 0===x?[]:x;return o.a.createElement(r.k,{flexDirection:"column",minHeight:"100vh"},o.a.createElement(c.a,{title:i,description:u}),o.a.createElement(b.b,null),o.a.createElement(j,{flex:"1 1 auto",flexDirection:"row"},o.a.createElement(r.e,{display:["none",null,null,"block"]},o.a.createElement(m.a,null)),o.a.createElement(f,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},o.a.createElement(h,{border:0,borderBottom:1,borderRadius:0,pb:2},o.a.createElement(r.m,null,i)),n.tableOfContents.items?o.a.createElement(y,{display:["none",null,"block"],position:"sticky",top:b.a+24,maxHeight:"calc(100vh - "+b.a+"px - 24px)"},o.a.createElement(r.u,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),o.a.createElement(O,{items:n.tableOfContents.items})):null,o.a.createElement(N,null,g||E?o.a.createElement(r.k,{mb:3,alignItems:"center"},g?o.a.createElement(d.a,{status:g}):null,o.a.createElement(r.e,{mx:"auto"}),E?o.a.createElement(p.a,{href:E}):null):null,n.tableOfContents.items?o.a.createElement(r.e,{display:["block",null,"none"],mb:3},o.a.createElement(r.h,null,function(e){var t=e.open;return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.u,{as:"summary",fontWeight:"bold"},t?o.a.createElement(l.b,{mr:2}):o.a.createElement(l.c,{mr:2}),"Table of contents"),o.a.createElement(r.e,{pt:1},o.a.createElement(O,{items:n.tableOfContents.items})))})):null,t,o.a.createElement(s.a,{editUrl:n.editUrl,contributors:n.contributors.concat(k.map(function(e){return{login:e}}))})))))}}}]);
//# sourceMappingURL=component---content-usage-graphql-mdx-fb1e9f8c8e5dfd06decd.js.map
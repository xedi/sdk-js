(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{839:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",function(){return o}),a.d(t,"default",function(){return p});a(10),a(11),a(8),a(13),a(18),a(0);var n=a(118),r=a(853),b=a(9),l=a(4),c=a(50);var o={},s={_frontmatter:o},i=r.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(i,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Introduction"),Object(n.b)("p",null,"The Groups API allows you to interact with our groups data"),Object(n.b)("h2",null,"Usage"),Object(n.b)("h3",null,"list"),Object(n.b)("p",null,"List all Groups that the user has the authority to see withing the context of a Business"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"pageNumber"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"number"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"1")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Usage")),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const groups = await Xedi.Groups.list();\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Response")),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'[\n    {\n        "_id": "96GE2a3e-boi0-11e9-b308-013533e48b37",\n        "name": "Team Cap",\n        "owner": "c52abc50-b499-11ea-a48c-0100f1a50c6e",\n        "group_type_id": "79fb3a3e-fcc0-11e9-b308-010060e48b37",\n        "created_at": "2020-07-04 12:00:00",\n        "updated_at": "2020-07-28 02:21:48"\n    },\n    {\n        "_id": "69PD8a3e-nic0-11e9-b308-010060e48b37",\n        "name": "Team Iron Man",\n        "owner": "c52abc50-b499-11ea-a48c-0100f1a50c6e",\n        "group_type_id": "79fb3a3e-fcc0-11e9-b308-010060e48b37",\n        "created_at": "2020-07-04 12:00:00",\n        "updated_at": "2020-08-01 21:32:53"\n    }\n]\n')),Object(n.b)("h3",null,"Get"),Object(n.b)("p",null,"Retrieve a Group by ID that the user has the authority to see withing the context of a Business"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"id"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(n.b)(b.a,{color:"green.5",mdxType:"CheckIcon"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'96GE2a3e-boi0-11e9-b308-013533e48b37'")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Usage")),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const group = await Xedi.Groups.get('96GE2a3e-boi0-11e9-b308-013533e48b37');\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Response")),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "_id": "96GE2a3e-boi0-11e9-b308-013533e48b37",\n    "name": "Team Cap",\n    "owner": "c52abc50-b499-11ea-a48c-0100f1a50c6e",\n    "group_type_id": "79fb3a3e-fcc0-11e9-b308-010060e48b37",\n    "created_at": "2020-07-04 12:00:00",\n    "updated_at": "2020-07-28 02:21:48"\n}\n')),Object(n.b)(l.k,{alignItems:"center",mdxType:"Flex"},Object(n.b)(c.c,{mdxType:"H3"},"Get by User"),Object(n.b)(l.e,{mx:"auto",mdxType:"Box"}),Object(n.b)(l.n,{bg:"#A575FF",mdxType:"Label"},"Pagination Enabled")),Object(n.b)("p",null,"List all the groups a particular user is associated with."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"user_id"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"UUID"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(n.b)(b.a,{color:"green.5",mdxType:"CheckIcon"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"f3ce14b8-b542-11ea-aded-01002da17977")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"pageNumber"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"number"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"1")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Usage")),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"const groups = await Xedi.Groups.getByUser('f3ce14b8-b542-11ea-aded-01002da17977');\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Response")),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "current_page": 1,\n    "data": [\n        {\n            "_id": "f3ce14b8-b542-11ea-aded-01002da17977",\n            "name": "users",\n            "owner": "d8cde5a8-3eaa-11ea-9ad1-0100f1a50c6e",\n            "group_type_id": "79fb3a3e-fcc0-11e9-b308-010060e48b37",\n            "created_at": "2020-07-03 13:58:10",\n            "updated_at": "2020-07-03 13:58:10"\n        }\n    ],\n    "first_page_url": "https://api.xedi.com/1/groups?page=1",\n    "from": 1,\n    "last_page": "https://api.xedi.com/1/groups?page=1",\n    "last_page_url": null,\n    "next_page_url": null,\n    "path": "https://api.xedi.com/1/groups",\n    "per_page": 15,\n    "prev_page_url": null,\n    "to": 1,\n    "total": 1\n}\n')))}p.isMDXComponent=!0},853:function(e,t,a){"use strict";var n=a(2),r=a(4),b=a(9),l=a(0),c=a.n(l),o=a(130),s=a(76),i=a(199),p=a(131),m=a(197),u=a(198),d=Object(n.f)(r.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function g(e){var t=e.items,a=e.depth;return c.a.createElement(d,{as:"ul",m:0,p:0},t.map(function(e){return c.a.createElement(r.e,{as:"li",key:e.url,pl:a>0?3:0},c.a.createElement(r.o,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?c.a.createElement(g,{items:e.items,depth:a+1}):null)}))}g.defaultProps={depth:0};var j=g,O=Object(n.f)(r.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),f=Object(n.f)(r.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),h=Object(n.f)(r.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),N=Object(n.f)(r.p).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),y=Object(n.f)(r.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=a.frontmatter,l=n.title,d=n.description,g=n.status,_=n.source,E=n.additionalContributors,x=void 0===E?[]:E;return c.a.createElement(r.k,{flexDirection:"column",minHeight:"100vh"},c.a.createElement(o.a,{title:l,description:d}),c.a.createElement(s.b,null),c.a.createElement(O,{flex:"1 1 auto",flexDirection:"row"},c.a.createElement(r.e,{display:["none",null,null,"block"]},c.a.createElement(p.a,null)),c.a.createElement(f,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},c.a.createElement(h,{border:0,borderBottom:1,borderRadius:0,pb:2},c.a.createElement(r.m,null,l)),a.tableOfContents.items?c.a.createElement(N,{display:["none",null,"block"],position:"sticky",top:s.a+24,maxHeight:"calc(100vh - "+s.a+"px - 24px)"},c.a.createElement(r.u,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),c.a.createElement(j,{items:a.tableOfContents.items})):null,c.a.createElement(y,null,g||_?c.a.createElement(r.k,{mb:3,alignItems:"center"},g?c.a.createElement(u.a,{status:g}):null,c.a.createElement(r.e,{mx:"auto"}),_?c.a.createElement(m.a,{href:_}):null):null,a.tableOfContents.items?c.a.createElement(r.e,{display:["block",null,"none"],mb:3},c.a.createElement(r.h,null,function(e){var t=e.open;return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.u,{as:"summary",fontWeight:"bold"},t?c.a.createElement(b.b,{mr:2}):c.a.createElement(b.c,{mr:2}),"Table of contents"),c.a.createElement(r.e,{pt:1},c.a.createElement(j,{items:a.tableOfContents.items})))})):null,t,c.a.createElement(i.a,{editUrl:a.editUrl,contributors:a.contributors.concat(x.map(function(e){return{login:e}}))})))))}}}]);
//# sourceMappingURL=component---content-usage-groups-mdx-755fc62cee81f6132ae5.js.map
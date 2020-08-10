(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{816:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",function(){return c}),a.d(t,"default",function(){return s});a(10),a(11),a(8),a(13),a(18),a(0);var n=a(118),b=a(853),r=a(9);var c={},l={_frontmatter:c},i=b.a;function s(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,["components"]);return Object(n.b)(i,Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Introduction"),Object(n.b)("p",null,"An Network Connection API allows you to set up and retrieve network connection information."),Object(n.b)("h2",null,"Usage"),Object(n.b)("h3",null,"list"),Object(n.b)("p",null,"Retrieve a list of NetworkConnections."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"pageNumber"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"number"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"1")))),Object(n.b)("h4",null,"Usage"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const networkConnections = await Xedi.NetworkConnections.list();\n")),Object(n.b)("h4",null,"Response"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'\n{\n    "current_page": 1,\n    "data": [\n        {\n         "_id": "af6d8dfc-88b5-41f6-bbf5-825130390d64",\n         "partnership_id": "af6d8dfc-88b5-41f6-bbf5-825130390d64",\n         "from_mailbox": "cefda3331-ds33-41f6-bbf5-825130390d64",\n         "to_mailbox" : "e939d2d7-1376-4ecb-bff4-e32356e3ae78",\n         "network_status": "PENDING",\n         "connection_type": "FTP",\n         "created_at": "2020-05-11 10:27:03",\n         "updated_at": "2020-05-11 10:27:03"\n        },\n        {\n          "_id": "4asda4sda-88b5-41f6-bbf5-j43423432432j",\n          "partnership_id": "af6d8dfc-88b5-41f6-bbf5-825130390d64",\n          "from_mailbox": "cefda3331-ds33-41f6-bbf5-825130390d64",\n          "to_mailbox" : "e939d2d7-1376-4ecb-bff4-e32356e3ae78",\n          "network_status": "inactive",\n          "connection_type": "FTP",\n          "created_at": "2020-05-11 10:27:03",\n          "updated_at": "2020-05-11 10:27:03"\n        }\n    ]\n}\n\n')),Object(n.b)("h3",null,"get"),Object(n.b)("p",null,"Retrieve a Network Connection by Id."),Object(n.b)("h4",null,"Parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"id"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(n.b)(r.a,{color:"green.5",mdxType:"CheckIcon"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'af6d8dfc-88b5-41f6-bbf5-825130390d64'")))),Object(n.b)("h4",null,"Usage"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const networkConnection = await Xedi.NetworkConnections.get('af6d8dfc-88b5-41f6-bbf5-825130390d64');\n")),Object(n.b)("h4",null,"Response"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n   "_id": "af6d8dfc-88b5-41f6-bbf5-825130390d64",\n   "partnership_id": "af6d8dfc-88b5-41f6-bbf5-825130390d64",\n   "from_mailbox": "cefda3331-ds33-41f6-bbf5-825130390d64",\n   "to_mailbox" : "e939d2d7-1376-4ecb-bff4-e32356e3ae78",\n   "network_status": "PENDING",\n   "connection_type": "FTP",\n   "created_at": "2020-05-11 10:27:03",\n   "updated_at": "2020-05-11 10:27:03"\n}\n')),Object(n.b)("h3",null,"Create"),Object(n.b)("p",null,"Create a new Network Connection"),Object(n.b)("h4",null,"Parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"partnership_id"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(n.b)(r.a,{color:"green.5",mdxType:"CheckIcon"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'hsahdhasd-88b5-41f6-bbf5-432423432re'")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"to_mailbox"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(n.b)(r.a,{color:"green.5",mdxType:"CheckIcon"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'ddasdasd-88b5-41f6-bbf5-far3q42444'")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"from_mailbox"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(n.b)(r.a,{color:"green.5",mdxType:"CheckIcon"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'sfafafasd-88b5-41f6-bbf5-432432432'")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"network_status"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'pending'")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"connection_type"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'FTP'")))),Object(n.b)("h4",null,"Usage"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),'const networkConnection = await Xedi.NetworkConnections.create(\n    {\n      "partnership_id": "af6d8dfc-88b5-41f6-bbf5-825130390d64",\n      "from_mailbox": "cefda3331-ds33-41f6-bbf5-825130390d64",\n      "to_mailbox" : "e939d2d7-1376-4ecb-bff4-e32356e3ae78",\n      "network_status": "PENDING",\n      "connection_type": "FTP"\n    }\n);\n')),Object(n.b)("h4",null,"Response"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n     "_id": "af6d8dfc-88b5-41f6-bbf5-825130390d64",\n     "partnership_id": "af6d8dfc-88b5-41f6-bbf5-825130390d64",\n     "from_mailbox": "cefda3331-ds33-41f6-bbf5-825130390d64",\n     "to_mailbox" : "e939d2d7-1376-4ecb-bff4-e32356e3ae78",\n     "network_status": "PENDING",\n     "connection_type": "FTP",\n     "created_at": "2020-05-11 10:27:03",\n     "updated_at": "2020-05-11 10:27:03"\n}\n')),Object(n.b)("h3",null,"Update"),Object(n.b)("p",null,"Update an existing Network Connection"),Object(n.b)("h4",null,"Parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"id"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(n.b)(r.a,{color:"green.5",mdxType:"CheckIcon"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'af6d8dfc-88b5-41f6-bbf5-825130390d64'")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"partnership_id"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'hsahdhasd-88b5-41f6-bbf5-432423432re'")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"to_mailbox"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'ddasdasd-88b5-41f6-bbf5-far3q42444'")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"from_mailbox"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'sfafafasd-88b5-41f6-bbf5-432432432'")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"network_status"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'pending'")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"connection_type"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'FTP'")))),Object(n.b)("h4",null,"Usage"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),'const networkConnections = await Xedi.NetworkConnections.update(\n    {\n         "_id": "af6d8dfc-88b5-41f6-bbf5-825130390d64",\n         "partnership_id": "af6d8dfc-88b5-41f6-bbf5-825130390d64",\n         "from_mailbox": "cefda3331-ds33-41f6-bbf5-825130390d64",\n         "to_mailbox" : "e939d2d7-1376-4ecb-bff4-e32356e3ae78",\n         "network_status": "INACTIVE",\n         "connection_type": "FTP",\n    }\n);\n')),Object(n.b)("h4",null,"Response"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'    {\n       "_id": "af6d8dfc-88b5-41f6-bbf5-825130390d64",\n       "partnership_id": "af6d8dfc-88b5-41f6-bbf5-825130390d64",\n       "from_mailbox": "cefda3331-ds33-41f6-bbf5-825130390d64",\n       "to_mailbox" : "e939d2d7-1376-4ecb-bff4-e32356e3ae78",\n       "network_status": "INACTIVE",\n       "connection_type": "FTP",\n       "created_at": "2020-05-11 10:27:03",\n       "updated_at": "2020-05-11 10:27:03"\n    }\n')),Object(n.b)("h3",null,"Delete"),Object(n.b)("p",null,"Delete a Network Connection. Response contains a deleted_at flag which signifies it has been deleted."),Object(n.b)("h4",null,"Parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"id"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(n.b)(r.a,{color:"green.5",mdxType:"CheckIcon"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'3n1jnj13-88b5-41f6-bbf5-m31kmk31mk1m31'")))),Object(n.b)("h4",null,"Usage"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const networkConnection = await Xedi.NetworkConnections.delete('3n1jnj13-88b5-41f6-bbf5-m31kmk31mk1m31');\n")),Object(n.b)("h4",null,"Response"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'    {\n        "_id": "3n1jnj13-88b5-41f6-bbf5-m31kmk31mk1m31"\n    }\n')))}s.isMDXComponent=!0},853:function(e,t,a){"use strict";var n=a(2),b=a(4),r=a(9),c=a(0),l=a.n(c),i=a(130),s=a(76),o=a(199),d=a(131),j=a(197),m=a(198),p=Object(n.f)(b.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function O(e){var t=e.items,a=e.depth;return l.a.createElement(p,{as:"ul",m:0,p:0},t.map(function(e){return l.a.createElement(b.e,{as:"li",key:e.url,pl:a>0?3:0},l.a.createElement(b.o,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?l.a.createElement(O,{items:e.items,depth:a+1}):null)}))}O.defaultProps={depth:0};var g=O,f=Object(n.f)(b.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),u=Object(n.f)(b.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),N=Object(n.f)(b.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),h=Object(n.f)(b.p).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),_=Object(n.f)(b.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=a.frontmatter,c=n.title,p=n.description,O=n.status,y=n.source,k=n.additionalContributors,w=void 0===k?[]:k;return l.a.createElement(b.k,{flexDirection:"column",minHeight:"100vh"},l.a.createElement(i.a,{title:c,description:p}),l.a.createElement(s.b,null),l.a.createElement(f,{flex:"1 1 auto",flexDirection:"row"},l.a.createElement(b.e,{display:["none",null,null,"block"]},l.a.createElement(d.a,null)),l.a.createElement(u,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},l.a.createElement(N,{border:0,borderBottom:1,borderRadius:0,pb:2},l.a.createElement(b.m,null,c)),a.tableOfContents.items?l.a.createElement(h,{display:["none",null,"block"],position:"sticky",top:s.a+24,maxHeight:"calc(100vh - "+s.a+"px - 24px)"},l.a.createElement(b.u,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),l.a.createElement(g,{items:a.tableOfContents.items})):null,l.a.createElement(_,null,O||y?l.a.createElement(b.k,{mb:3,alignItems:"center"},O?l.a.createElement(m.a,{status:O}):null,l.a.createElement(b.e,{mx:"auto"}),y?l.a.createElement(j.a,{href:y}):null):null,a.tableOfContents.items?l.a.createElement(b.e,{display:["block",null,"none"],mb:3},l.a.createElement(b.h,null,function(e){var t=e.open;return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.u,{as:"summary",fontWeight:"bold"},t?l.a.createElement(r.b,{mr:2}):l.a.createElement(r.c,{mr:2}),"Table of contents"),l.a.createElement(b.e,{pt:1},l.a.createElement(g,{items:a.tableOfContents.items})))})):null,t,l.a.createElement(o.a,{editUrl:a.editUrl,contributors:a.contributors.concat(w.map(function(e){return{login:e}}))})))))}}}]);
//# sourceMappingURL=component---content-usage-networkconnections-mdx-31149e8b435c2e83a357.js.map
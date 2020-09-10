(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{EOzp:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a("8o2o"),b=(a("q1tI"),a("7ljp")),c=a("HjAN"),r=a("FH/S"),l={},d={_frontmatter:l},i=c.a;function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)(i,Object.assign({},d,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",null,"Introduction"),Object(b.b)("p",null,"A workflow can be of be a type of instance or template. A workflow without a business defined is referred to as a template (link)"),Object(b.b)("h2",null,"Usage"),Object(b.b)("h3",null,"list"),Object(b.b)("p",null,"Retrieve a list of Templates."),Object(b.b)("h4",null,"Usage"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const templates = await Xedi.Templates.list();\n")),Object(b.b)("h4",null,"Response"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'\n[\n    {\n        "_id": "c490e097-b232-4ee7-8958-2310a6060063",\n        "name": "template name (order)",\n        "is_template": 1,\n        "creator_id": "fe615d30-05aa-448a-bd2a-0859816f0922",\n        "connection_id": "4cd84112-bd8b-481b-adc8-3fd9483c3d71",\n        "document_group_id" : "71aff4cc-9de2-4f4f-b140-d6d25982dd09",\n        "owner_id": "8b3e0c15-65fd-4588-afd6-ae4fa0f40351",\n        "created_at": "2020-05-11 10:27:03",\n        "updated_at": "2020-05-11 10:27:03"\n    },\n    {\n        "_id": "e997904e-6a3b-40db-b1e0-19c13b541ed7",\n        "name": "template name (invoice)",\n        "is_template": 1,\n        "creator_id": "33e887f0-1709-4475-b78d-95bae3ac0349",\n        "connection_id": "2ece6a69-8d57-4f77-9e3e-55a017ba66b0",\n        "document_group_id" : "42c30ce2-1463-4877-b8a4-9d9b6e294859",\n        "owner_id": "ab994a41-db9d-4583-8b80-080029c0c569",\n        "created_at": "2020-05-11 10:27:03",\n        "updated_at": "2020-05-11 10:27:03"\n    }\n]\n\n')),Object(b.b)("h3",null,"get"),Object(b.b)("p",null,"Retrieve a template by Id."),Object(b.b)("h4",null,"Parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"id"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(b.b)(r.a,{color:"green.5",mdxType:"CheckIcon"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'af6d8dfc-88b5-41f6-bbf5-825130390d64'")))),Object(b.b)("h4",null,"Usage"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const template = await Xedi.Templates.get('c490e097-b232-4ee7-8958-2310a6060063');\n")),Object(b.b)("h4",null,"Response"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n   "_id": "c490e097-b232-4ee7-8958-2310a6060063",\n   "name": "template name (order)",\n   "is_template": 1,\n   "creator_id": "fe615d30-05aa-448a-bd2a-0859816f0922",\n   "connection_id": "4cd84112-bd8b-481b-adc8-3fd9483c3d71",\n   "document_group_id" : "71aff4cc-9de2-4f4f-b140-d6d25982dd09",\n   "owner_id": "8b3e0c15-65fd-4588-afd6-ae4fa0f40351",\n   "created_at": "2020-05-11 10:27:03",\n   "updated_at": "2020-05-11 10:27:03"\n}\n')),Object(b.b)("h3",null,"Create"),Object(b.b)("p",null,"Create a new template"),Object(b.b)("h4",null,"Parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"id"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(b.b)(r.a,{color:"green.5",mdxType:"CheckIcon"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'af6d8dfc-88b5-41f6-bbf5-825130390d64'")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"name"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"string"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'template name (order)'")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"is_template"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"boolean"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(b.b)(r.a,{color:"green.5",mdxType:"CheckIcon"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"true")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"creator_id"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'af6d8dfc-88b5-41f6-bbf5-825130390d64'")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"connection_id"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'af6d8dfc-88b5-41f6-bbf5-825130390d64'")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"document_group_id"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'af6d8dfc-88b5-41f6-bbf5-825130390d64'")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"owner_id"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'af6d8dfc-88b5-41f6-bbf5-825130390d64'")))),Object(b.b)("h4",null,"Usage"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),'const template = await Xedi.Templates.create(\n    {\n         "name": "template name (order)",\n         "is_template": 1,\n         "creator_id": "fe615d30-05aa-448a-bd2a-0859816f0922",\n         "connection_id": "4cd84112-bd8b-481b-adc8-3fd9483c3d71",\n         "document_group_id" : "71aff4cc-9de2-4f4f-b140-d6d25982dd09",\n         "owner_id": "8b3e0c15-65fd-4588-afd6-ae4fa0f40351",\n    }\n);\n')),Object(b.b)("h4",null,"Response"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n   "_id": "c490e097-b232-4ee7-8958-2310a6060063",\n   "name": "template name (order)",\n   "is_template": 1,\n   "creator_id": "fe615d30-05aa-448a-bd2a-0859816f0922",\n   "connection_id": "4cd84112-bd8b-481b-adc8-3fd9483c3d71",\n   "document_group_id" : "71aff4cc-9de2-4f4f-b140-d6d25982dd09",\n   "owner_id": "8b3e0c15-65fd-4588-afd6-ae4fa0f40351",\n   "created_at": "2020-05-11 10:27:03",\n   "updated_at": "2020-05-11 10:27:03"\n}\n')),Object(b.b)("h3",null,"Update"),Object(b.b)("p",null,"Update an existing Template."),Object(b.b)("h4",null,"Parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"id"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(b.b)(r.a,{color:"green.5",mdxType:"CheckIcon"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'af6d8dfc-88b5-41f6-bbf5-825130390d64'")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"name"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"string"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'template name (order)'")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"is_template"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"boolean"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"true")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"creator_id"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'af6d8dfc-88b5-41f6-bbf5-825130390d64'")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"connection_id"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'af6d8dfc-88b5-41f6-bbf5-825130390d64'")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"document_group_id"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'af6d8dfc-88b5-41f6-bbf5-825130390d64'")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"owner_id"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'af6d8dfc-88b5-41f6-bbf5-825130390d64'")))),Object(b.b)("h4",null,"Usage"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),'const template = await Xedi.Templates.update(\n    {\n        "_id": "c490e097-b232-4ee7-8958-2310a6060063",\n        "name": "template name (order) v2",\n        "is_template": 1,\n        "creator_id": "fe615d30-05aa-448a-bd2a-0859816f0922",\n        "connection_id": "4cd84112-bd8b-481b-adc8-3fd9483c3d71",\n        "document_group_id" : "71aff4cc-9de2-4f4f-b140-d6d25982dd09",\n        "owner_id": "8b3e0c15-65fd-4588-afd6-ae4fa0f40351",\n    }\n);\n')),Object(b.b)("h4",null,"Response"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'    {\n      "_id": "c490e097-b232-4ee7-8958-2310a6060063",\n      "name": "template name (order) v2",\n      "is_template": 1,\n      "creator_id": "fe615d30-05aa-448a-bd2a-0859816f0922",\n      "connection_id": "4cd84112-bd8b-481b-adc8-3fd9483c3d71",\n      "document_group_id" : "71aff4cc-9de2-4f4f-b140-d6d25982dd09",\n      "owner_id": "8b3e0c15-65fd-4588-afd6-ae4fa0f40351",\n      "created_at": "2020-05-11 10:27:03",\n      "updated_at": "2020-05-11 10:27:03"\n    }\n')),Object(b.b)("h3",null,"Delete"),Object(b.b)("p",null,"Delete a Template. Response contains a deleted_at flag which signifies it has been deleted."),Object(b.b)("h4",null,"Parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"id"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(b.b)(r.a,{color:"green.5",mdxType:"CheckIcon"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'af6d8dfc-88b5-41f6-bbf5-825130390d64'")))),Object(b.b)("h4",null,"Usage"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const template = await Xedi.Templates.delete('c490e097-b232-4ee7-8958-2310a6060063');\n")),Object(b.b)("h4",null,"Response"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'   {\n      "_id": "c490e097-b232-4ee7-8958-2310a6060063"\n   }\n')),Object(b.b)("h3",null,"Restore"),Object(b.b)("p",null,"Restore will reinstate a deleted template."),Object(b.b)("h4",null,"Parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"id"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(b.b)(r.a,{color:"green.5",mdxType:"CheckIcon"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'af6d8dfc-88b5-41f6-bbf5-825130390d64'")))),Object(b.b)("h4",null,"Usage"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const template = await Xedi.Templates.restore('c490e097-b232-4ee7-8958-2310a6060063');\n")),Object(b.b)("h4",null,"Response"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'   {\n      "_id": "c490e097-b232-4ee7-8958-2310a6060063",\n      "name": "template name (order) v2",\n      "is_template": 1,\n      "creator_id": "fe615d30-05aa-448a-bd2a-0859816f0922",\n      "connection_id": "4cd84112-bd8b-481b-adc8-3fd9483c3d71",\n      "document_group_id" : "71aff4cc-9de2-4f4f-b140-d6d25982dd09",\n      "owner_id": "8b3e0c15-65fd-4588-afd6-ae4fa0f40351",\n      "created_at": "2020-05-11 10:27:03",\n      "updated_at": "2020-05-11 10:27:03"\n   }\n')))}s.isMDXComponent=!0},HjAN:function(e,t,a){"use strict";var n=a("vOnD"),b=a("oW+c"),c=a("FH/S"),r=a("q1tI"),l=a.n(r),d=a("8gyx"),i=a("ESUP"),s=a("oo4l"),m=a("Evc+"),p=a("og4h"),j=a("sqpL"),o=Object(n.f)(b.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function O(e){var t=e.items,a=e.depth;return l.a.createElement(o,{as:"ul",m:0,p:0},t.map((function(e){return l.a.createElement(b.e,{as:"li",key:e.url,pl:a>0?3:0},l.a.createElement(b.o,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?l.a.createElement(O,{items:e.items,depth:a+1}):null)})))}O.defaultProps={depth:0};var g=O,f=Object(n.f)(b.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),u=Object(n.f)(b.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),N=Object(n.f)(b.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),_=Object(n.f)(b.p).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),h=Object(n.f)(b.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=a.frontmatter,r=n.title,o=n.description,O=n.status,y=n.source,w=n.additionalContributors,E=void 0===w?[]:w;return l.a.createElement(b.k,{flexDirection:"column",minHeight:"100vh"},l.a.createElement(d.a,{title:r,description:o}),l.a.createElement(i.b,null),l.a.createElement(f,{flex:"1 1 auto",flexDirection:"row"},l.a.createElement(b.e,{display:["none",null,null,"block"]},l.a.createElement(m.a,null)),l.a.createElement(u,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},l.a.createElement(N,{border:0,borderBottom:1,borderRadius:0,pb:2},l.a.createElement(b.m,null,r)),a.tableOfContents.items?l.a.createElement(_,{display:["none",null,"block"],position:"sticky",top:i.a+24,maxHeight:"calc(100vh - "+i.a+"px - 24px)"},l.a.createElement(b.u,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),l.a.createElement(g,{items:a.tableOfContents.items})):null,l.a.createElement(h,null,O||y?l.a.createElement(b.k,{mb:3,alignItems:"center"},O?l.a.createElement(j.a,{status:O}):null,l.a.createElement(b.e,{mx:"auto"}),y?l.a.createElement(p.a,{href:y}):null):null,a.tableOfContents.items?l.a.createElement(b.e,{display:["block",null,"none"],mb:3},l.a.createElement(b.h,null,(function(e){var t=e.open;return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.u,{as:"summary",fontWeight:"bold"},t?l.a.createElement(c.b,{mr:2}):l.a.createElement(c.c,{mr:2}),"Table of contents"),l.a.createElement(b.e,{pt:1},l.a.createElement(g,{items:a.tableOfContents.items})))}))):null,t,l.a.createElement(s.a,{editUrl:a.editUrl,contributors:a.contributors.concat(E.map((function(e){return{login:e}})))})))))}}}]);
//# sourceMappingURL=component---content-usage-templates-mdx-2b9b22371b8db15c96e3.js.map
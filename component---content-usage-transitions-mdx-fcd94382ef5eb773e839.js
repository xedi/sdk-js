(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{814:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",function(){return l}),a.d(t,"default",function(){return o});a(10),a(11),a(8),a(13),a(18),a(0);var n=a(118),c=a(853),b=a(9),r=a(19);var l={},i={_frontmatter:l},s=c.a;function o(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,c={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,["components"]);return Object(n.b)(s,Object.assign({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Introduction"),Object(n.b)("p",null,"The transitions api gives the ability to fully configure each transition between the ",Object(n.b)(r.Link,{to:"/docs/usage/stages",mdxType:"Link"},"stages")," of a work flow ",Object(n.b)(r.Link,{to:"/docs/usage/templates",mdxType:"Link"},"template"),"."),Object(n.b)("h2",null,"Usage"),Object(n.b)("h3",null,"list"),Object(n.b)("p",null,"retreive the list of transitions."),Object(n.b)("h4",null,"Usage"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const transitions = await Xedi.Transitions.list();\n")),Object(n.b)("h4",null,"Response"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'[\n  {\n      "_id": "5076455a-a18e-11ea-8618-0242ac120002",\n      "from_id": "9cabdeca-a0fe-11ea-8530-0242ac120002",\n      "to_id": "a099e2de-a0fe-11ea-b9be-0242ac120002",\n      "workflow_id": "9c82245e-a0fe-11ea-b1cf-01009cb3fa40",\n      "workflow_type": "template",\n      "description": "My first transition",\n      "is_automtic": 1,\n      "created_at": "2020-05-11 10:27:03",\n      "updated_at": "2020-05-11 10:27:03"\n  }\n  {\n    "_id": "574612ac-a18e-11ea-ac77-0242ac120002",\n    "from_id": "9cabdeca-a0fe-11ea-8530-0242ac120002",\n    "to_id": "a099e2de-a0fe-11ea-b9be-0242ac120002",\n    "workflow_id": "9c82245e-a0fe-11ea-b1cf-01009cb3fa40",\n    "workflow_type": "template",\n    "description": "My second transition",\n    "is_automtic": 1,\n    "created_at": "2020-05-11 10:27:03",\n    "updated_at": "2020-05-11 10:27:03"\n  }\n]\n')),Object(n.b)("h3",null,"get"),Object(n.b)("p",null,"retrieve a transition by Id."),Object(n.b)("h4",null,"Parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"id"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(n.b)(b.a,{color:"green.5",mdxType:"CheckIcon"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'5076455a-a18e-11ea-8618-0242ac120002'")))),Object(n.b)("h4",null,"Usage"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const transition = await Xedi.Transitions.get('5076455a-a18e-11ea-8618-0242ac120002');\n")),Object(n.b)("h4",null,"Response"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "_id": "5076455a-a18e-11ea-8618-0242ac120002",\n    "from_id": "9cabdeca-a0fe-11ea-8530-0242ac120002",\n    "to_id": "a099e2de-a0fe-11ea-b9be-0242ac120002",\n    "workflow_id": "9c82245e-a0fe-11ea-b1cf-01009cb3fa40",\n    "workflow_type": "template",\n    "description": "My first transition",\n    "is_automtic": 1,\n    "created_at": "2020-05-11 10:27:03",\n    "updated_at": "2020-05-11 10:27:03"\n}\n')),Object(n.b)("h3",null,"create"),Object(n.b)("p",null,"Create a transition"),Object(n.b)("h4",null,"Parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"from_id"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),'"9cabdeca-a0fe-11ea-8530-0242ac120002"')),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"to_id"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(n.b)(b.a,{color:"green.5",mdxType:"CheckIcon"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),'"a099e2de-a0fe-11ea-b9be-0242ac120002"')),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"workflow_id"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(n.b)(b.a,{color:"green.5",mdxType:"CheckIcon"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),'"9c82245e-a0fe-11ea-b1cf-01009cb3fa40"')),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"description"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"My first transition")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"is_automtic"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"bool"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(n.b)(b.a,{color:"green.5",mdxType:"CheckIcon"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"1")))),Object(n.b)("h4",null,"Usage"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const transition = await Xedi.Transitions.create(\n  {\n    from_id: '9cabdeca-a0fe-11ea-8530-0242ac120002',\n    to_id: 'a099e2de-a0fe-11ea-b9be-0242ac120002',\n    workflow_id: '9c82245e-a0fe-11ea-b1cf-01009cb3fa40',\n    workflow_type: 'template',\n    description: 'My first transition',\n    is_automtic: 1\n  }\n);\n")),Object(n.b)("h4",null,"Response"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "_id": "5076455a-a18e-11ea-8618-0242ac120002",\n    "from_id": "9cabdeca-a0fe-11ea-8530-0242ac120002",\n    "to_id": "a099e2de-a0fe-11ea-b9be-0242ac120002",\n    "workflow_id": "9c82245e-a0fe-11ea-b1cf-01009cb3fa40",\n    "workflow_type": "template",\n    "description": "My first transition",\n    "is_automtic": 1,\n    "created_at": "2020-05-11 10:27:03",\n    "updated_at": "2020-05-11 10:27:03"\n}\n')),Object(n.b)("h3",null,"update"),Object(n.b)("p",null,"Update a transition"),Object(n.b)("h4",null,"Parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"_id"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(n.b)(b.a,{color:"green.5",mdxType:"CheckIcon"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),'"5076455a-a18e-11ea-8618-0242ac120002"')),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"from_id"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),'"9cabdeca-a0fe-11ea-8530-0242ac120002"')),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"to_id"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(n.b)(b.a,{color:"green.5",mdxType:"CheckIcon"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),'"a099e2de-a0fe-11ea-b9be-0242ac120002"')),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"workflow_id"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(n.b)(b.a,{color:"green.5",mdxType:"CheckIcon"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),'"9c82245e-a0fe-11ea-b1cf-01009cb3fa40"')),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"description"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"My first transition")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"is_automtic"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"bool"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(n.b)(b.a,{color:"green.5",mdxType:"CheckIcon"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"1")))),Object(n.b)("h4",null,"Usage"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const transition = await Xedi.Transitions.create(\n  {\n    _id: '5076455a-a18e-11ea-8618-0242ac120002',\n    from_id: '9cabdeca-a0fe-11ea-8530-0242ac120002',\n    to_id: 'a099e2de-a0fe-11ea-b9be-0242ac120002',\n    workflow_id: '9c82245e-a0fe-11ea-b1cf-01009cb3fa40',\n    workflow_type: 'template',\n    description: My updated transition,\n    is_automtic: 1\n  }\n);\n")),Object(n.b)("h4",null,"Response"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "_id": "5076455a-a18e-11ea-8618-0242ac120002",\n    "from_id": "9cabdeca-a0fe-11ea-8530-0242ac120002",\n    "to_id": "a099e2de-a0fe-11ea-b9be-0242ac120002",\n    "workflow_id": "9c82245e-a0fe-11ea-b1cf-01009cb3fa40",\n    "workflow_type": "template",\n    "description": "My updated transition",\n    "is_automtic": 1,\n    "created_at": "2020-05-11 10:27:03",\n    "updated_at": "2020-05-11 10:27:03"\n}\n')),Object(n.b)("h3",null,"Delete"),Object(n.b)("p",null,"Delete a transiton."),Object(n.b)("h4",null,"Parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"id"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(n.b)(b.a,{color:"green.5",mdxType:"CheckIcon"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'5076455a-a18e-11ea-8618-0242ac120002'")))),Object(n.b)("h4",null,"Usage"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const transition = await Xedi.Transitions.delete('5076455a-a18e-11ea-8618-0242ac120002');\n")),Object(n.b)("h4",null,"Response"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "_id": "5076455a-a18e-11ea-8618-0242ac120002"  \n}\n')))}o.isMDXComponent=!0},853:function(e,t,a){"use strict";var n=a(2),c=a(4),b=a(9),r=a(0),l=a.n(r),i=a(130),s=a(76),o=a(199),d=a(131),j=a(197),p=a(198),O=Object(n.f)(c.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function m(e){var t=e.items,a=e.depth;return l.a.createElement(O,{as:"ul",m:0,p:0},t.map(function(e){return l.a.createElement(c.e,{as:"li",key:e.url,pl:a>0?3:0},l.a.createElement(c.o,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?l.a.createElement(m,{items:e.items,depth:a+1}):null)}))}m.defaultProps={depth:0};var g=m,f=Object(n.f)(c.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),u=Object(n.f)(c.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),N=Object(n.f)(c.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),h=Object(n.f)(c.p).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),y=Object(n.f)(c.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=a.frontmatter,r=n.title,O=n.description,m=n.status,_=n.source,w=n.additionalContributors,k=void 0===w?[]:w;return l.a.createElement(c.k,{flexDirection:"column",minHeight:"100vh"},l.a.createElement(i.a,{title:r,description:O}),l.a.createElement(s.b,null),l.a.createElement(f,{flex:"1 1 auto",flexDirection:"row"},l.a.createElement(c.e,{display:["none",null,null,"block"]},l.a.createElement(d.a,null)),l.a.createElement(u,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},l.a.createElement(N,{border:0,borderBottom:1,borderRadius:0,pb:2},l.a.createElement(c.m,null,r)),a.tableOfContents.items?l.a.createElement(h,{display:["none",null,"block"],position:"sticky",top:s.a+24,maxHeight:"calc(100vh - "+s.a+"px - 24px)"},l.a.createElement(c.u,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),l.a.createElement(g,{items:a.tableOfContents.items})):null,l.a.createElement(y,null,m||_?l.a.createElement(c.k,{mb:3,alignItems:"center"},m?l.a.createElement(p.a,{status:m}):null,l.a.createElement(c.e,{mx:"auto"}),_?l.a.createElement(j.a,{href:_}):null):null,a.tableOfContents.items?l.a.createElement(c.e,{display:["block",null,"none"],mb:3},l.a.createElement(c.h,null,function(e){var t=e.open;return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.u,{as:"summary",fontWeight:"bold"},t?l.a.createElement(b.b,{mr:2}):l.a.createElement(b.c,{mr:2}),"Table of contents"),l.a.createElement(c.e,{pt:1},l.a.createElement(g,{items:a.tableOfContents.items})))})):null,t,l.a.createElement(o.a,{editUrl:a.editUrl,contributors:a.contributors.concat(k.map(function(e){return{login:e}}))})))))}}}]);
//# sourceMappingURL=component---content-usage-transitions-mdx-fcd94382ef5eb773e839.js.map
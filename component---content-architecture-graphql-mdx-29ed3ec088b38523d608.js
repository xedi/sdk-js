(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{HjAN:function(e,t,n){"use strict";var a=n("vOnD"),o=n("oW+c"),l=n("FH/S"),r=n("q1tI"),i=n.n(r),c=n("8gyx"),m=n("ESUP"),s=n("oo4l"),u=n("Evc+"),d=n("og4h"),p=n("sqpL"),b=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function f(e){var t=e.items,n=e.depth;return i.a.createElement(b,{as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(o.o,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(f,{items:e.items,depth:n+1}):null)})))}f.defaultProps={depth:0};var g=f,h=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),y=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),E=Object(a.f)(o.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),x=Object(a.f)(o.p).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),k=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,r=a.title,b=a.description,f=a.status,_=a.source,j=a.additionalContributors,v=void 0===j?[]:j;return i.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(c.a,{title:r,description:b}),i.a.createElement(m.b,null),i.a.createElement(h,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(o.e,{display:["none",null,null,"block"]},i.a.createElement(u.a,null)),i.a.createElement(y,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(E,{border:0,borderBottom:1,borderRadius:0,pb:2},i.a.createElement(o.m,null,r)),n.tableOfContents.items?i.a.createElement(x,{display:["none",null,"block"],position:"sticky",top:m.a+24,maxHeight:"calc(100vh - "+m.a+"px - 24px)"},i.a.createElement(o.u,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(g,{items:n.tableOfContents.items})):null,i.a.createElement(k,null,f||_?i.a.createElement(o.k,{mb:3,alignItems:"center"},f?i.a.createElement(p.a,{status:f}):null,i.a.createElement(o.e,{mx:"auto"}),_?i.a.createElement(d.a,{href:_}):null):null,n.tableOfContents.items?i.a.createElement(o.e,{display:["block",null,"none"],mb:3},i.a.createElement(o.h,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.u,{as:"summary",fontWeight:"bold"},t?i.a.createElement(l.b,{mr:2}):i.a.createElement(l.c,{mr:2}),"Table of contents"),i.a.createElement(o.e,{pt:1},i.a.createElement(g,{items:n.tableOfContents.items})))}))):null,t,i.a.createElement(s.a,{editUrl:n.editUrl,contributors:n.contributors.concat(v.map((function(e){return{login:e}})))})))))}},Hz8b:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return m})),n.d(t,"default",(function(){return d}));var a=n("8o2o"),o=(n("q1tI"),n("7ljp")),l=n("HjAN"),r=n("oW+c"),i=n("FH/S"),c=n("Kvkj"),m={},s={_frontmatter:m},u=l.a;function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(u,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Sometimes you need a more specific or complex dataset than our standard RESTful APIs can provide. For this reason, we have also provided a GraphQL API."),Object(o.b)(r.j,{mdxType:"Flash"},Object(o.b)(i.h,{mr:1,mdxType:"InfoIcon"})," For more information about GraphQL click ",Object(o.b)(c.a,{href:"https://graphql.org/",mdxType:"ExternalLink"},"here")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-architecture-graphql-mdx-29ed3ec088b38523d608.js.map
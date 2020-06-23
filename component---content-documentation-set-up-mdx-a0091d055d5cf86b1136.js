(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{802:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return m}),n.d(t,"default",function(){return b});n(9),n(10),n(8),n(13),n(17),n(0);var a=n(118),l=n(838),o=n(4),i=n(34),r=n(42),c=n(11),s=n(18);var m={},u={_frontmatter:m},d=l.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(a.b)(d,Object.assign({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"All documentation, including the framework and it's dependencies, are in the ",Object(a.b)("inlineCode",{parentName:"p"},"docs/")," directory. This should be your working directory."),Object(a.b)("h2",null,"Environment"),Object(a.b)(o.j,{mb:2,mdxType:"Flash"},Object(a.b)(c.h,{mr:1,mdxType:"InfoIcon"}),"At present, you must use a copy of node locally on your machine to compile and use XEDI.js documentation. In the future, this will be containerized.",Object(a.b)(o.d,{mt:1,bg:"white",mdxType:"BorderBox"},Object(a.b)(s.b,{issueId:"58",mdxType:"GithubIssue"}))),Object(a.b)("p",null,"Due to runtime bug in node 14.3, one our dependencies is unable to build. As such, you must use either:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"10.20.1")," (",Object(a.b)("inlineCode",{parentName:"li"},"lts/dubnium"),")"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"12.17.0")," (",Object(a.b)("inlineCode",{parentName:"li"},"lts/erbium"),")")),Object(a.b)("p",null,"As soon as this is rectified, this requirement will be removed."),Object(a.b)("h3",null,"Variables"),Object(a.b)("p",null,"To allow various functionalities of the documentation to work, a personal access token is required. This should be placed within a ",Object(a.b)("inlineCode",{parentName:"p"},".env")," file in the root of the ",Object(a.b)("inlineCode",{parentName:"p"},"docs/")," directory."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"GITHUB_TOKEN=<my personal access token>\n")),Object(a.b)(i.a,{mdxType:"Caption"},".env"),Object(a.b)("h2",null,"Local Builds"),Object(a.b)("p",null,"The documentation framework ships with a development server that allows hotswap development."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"npm run develop\n")),Object(a.b)(i.a,{mdxType:"Caption"},"Launching the development server"),"This triggers a build, followed by the provision of a localhost link. It defaults to port ",Object(a.b)(r.a,{mdxType:"InlineCode"},"8000"),", however if something is already using that port, the framework will use the next numerically available port.",Object(a.b)(o.j,{mt:2,mdxType:"Flash"},Object(a.b)(c.h,{mr:1,mdxType:"InfoIcon"}),"If you are XEDI staff, when you go to ",Object(a.b)(r.a,{mdxType:"InlineCode"},"http://localhost:8000")," you may find that your browser automatically may redirect your to ",Object(a.b)(r.a,{mdxType:"InlineCode"},"http://localhost:8000/dashboard"),". This is because Traefik, our development loadbalancer issues a ",Object(a.b)(r.a,{mdxType:"InlineCode"},"308 Permanent Redirect")," response when you go to ",Object(a.b)(r.a,{mdxType:"InlineCode"},"http://localhost:8000"),Object(a.b)("p",null,'In this event, you will be greeted with a "Development 404" page. Simply select one of the pages in the site map displayed centrally in the page.'),Object(a.b)(o.d,{bg:"white",mdxType:"BorderBox"},Object(a.b)(s.b,{issueId:"57",mdxType:"GithubIssue"}))))}b.isMDXComponent=!0},838:function(e,t,n){"use strict";var a=n(2),l=n(4),o=n(11),i=n(0),r=n.n(i),c=n(130),s=n(76),m=n(199),u=n(131),d=n(197),b=n(198),p=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function h(e){var t=e.items,n=e.depth;return r.a.createElement(p,{as:"ul",m:0,p:0},t.map(function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.o,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(h,{items:e.items,depth:n+1}):null)}))}h.defaultProps={depth:0};var y=h,f=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),g=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),O=Object(a.f)(l.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),j=Object(a.f)(l.p).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),w=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,i=a.title,p=a.description,h=a.status,x=a.source,E=a.additionalContributors,v=void 0===E?[]:E;return r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(c.a,{title:i,description:p}),r.a.createElement(s.b,null),r.a.createElement(f,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(u.a,null)),r.a.createElement(g,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(O,{border:0,borderBottom:1,borderRadius:0,pb:2},r.a.createElement(l.m,null,i)),n.tableOfContents.items?r.a.createElement(j,{display:["none",null,"block"],position:"sticky",top:s.a+24,maxHeight:"calc(100vh - "+s.a+"px - 24px)"},r.a.createElement(l.u,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(y,{items:n.tableOfContents.items})):null,r.a.createElement(w,null,h||x?r.a.createElement(l.k,{mb:3,alignItems:"center"},h?r.a.createElement(b.a,{status:h}):null,r.a.createElement(l.e,{mx:"auto"}),x?r.a.createElement(d.a,{href:x}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.u,{as:"summary",fontWeight:"bold"},t?r.a.createElement(o.b,{mr:2}):r.a.createElement(o.c,{mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(y,{items:n.tableOfContents.items})))})):null,t,r.a.createElement(m.a,{editUrl:n.editUrl,contributors:n.contributors.concat(v.map(function(e){return{login:e}}))})))))}}}]);
//# sourceMappingURL=component---content-documentation-set-up-mdx-a0091d055d5cf86b1136.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{805:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return i}),n.d(t,"default",function(){return m});n(9),n(10),n(8),n(13),n(17),n(0);var a=n(118),l=n(844),o=n(4),r=n(34);var i={},c={_frontmatter:i},s=l.a;function m(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(a.b)(s,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"As previously mentioned, it has been required that a number of components be built to make the documentation better.\nHere is quick breakdown of each one."),Object(a.b)("h2",null,"External Link"),Object(a.b)(o.e,{mb:2,mdxType:"Box"},Object(a.b)(r.g,{status:"New",mdxType:"StatusLabel"})),Object(a.b)("p",null,"Useful for defining a link external of this site that will cause the browser to load a new page."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'Click <ExternalLink href="https://xedi.com">here</ExternalLink> to learn about an awesome EDI company!\n')),Object(a.b)("h2",null,"Github Issue"),Object(a.b)(o.e,{mb:2,mdxType:"Box"},Object(a.b)(r.g,{status:"New",mdxType:"StatusLabel"})),Object(a.b)("p",null,"Provides information about a specific Github Issue."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<GithubIssue issue-id="2" />\n')),Object(a.b)("p",null,"Works well when combines with a ",Object(a.b)("inlineCode",{parentName:"p"},"<BorderBox></BorderBox>")))}m.isMDXComponent=!0},844:function(e,t,n){"use strict";var a=n(2),l=n(4),o=n(11),r=n(0),i=n.n(r),c=n(130),s=n(76),m=n(199),u=n(131),b=n(197),d=n(198),p=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function f(e){var t=e.items,n=e.depth;return i.a.createElement(p,{as:"ul",m:0,p:0},t.map(function(e){return i.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(l.o,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(f,{items:e.items,depth:n+1}):null)}))}f.defaultProps={depth:0};var g=f,h=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),y=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),x=Object(a.f)(l.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),E=Object(a.f)(l.p).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),O=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,r=a.title,p=a.description,f=a.status,j=a.source,k=a.additionalContributors,w=void 0===k?[]:k;return i.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(c.a,{title:r,description:p}),i.a.createElement(s.b,null),i.a.createElement(h,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(l.e,{display:["none",null,null,"block"]},i.a.createElement(u.a,null)),i.a.createElement(y,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(x,{border:0,borderBottom:1,borderRadius:0,pb:2},i.a.createElement(l.m,null,r)),n.tableOfContents.items?i.a.createElement(E,{display:["none",null,"block"],position:"sticky",top:s.a+24,maxHeight:"calc(100vh - "+s.a+"px - 24px)"},i.a.createElement(l.u,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(g,{items:n.tableOfContents.items})):null,i.a.createElement(O,null,f||j?i.a.createElement(l.k,{mb:3,alignItems:"center"},f?i.a.createElement(d.a,{status:f}):null,i.a.createElement(l.e,{mx:"auto"}),j?i.a.createElement(b.a,{href:j}):null):null,n.tableOfContents.items?i.a.createElement(l.e,{display:["block",null,"none"],mb:3},i.a.createElement(l.h,null,function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.u,{as:"summary",fontWeight:"bold"},t?i.a.createElement(o.b,{mr:2}):i.a.createElement(o.c,{mr:2}),"Table of contents"),i.a.createElement(l.e,{pt:1},i.a.createElement(g,{items:n.tableOfContents.items})))})):null,t,i.a.createElement(m.a,{editUrl:n.editUrl,contributors:n.contributors.concat(w.map(function(e){return{login:e}}))})))))}}}]);
//# sourceMappingURL=component---content-documentation-components-mdx-54fe359d3f313140e886.js.map
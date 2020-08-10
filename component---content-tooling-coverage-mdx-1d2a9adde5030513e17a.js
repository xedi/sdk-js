(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{820:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return s}),n.d(t,"default",function(){return u});n(9),n(10),n(8),n(13),n(17),n(0);var a=n(118),o=n(844),l=n(4),r=n(11),i=n(36),c=n(19);var s={},d={_frontmatter:s},m=o.a;function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(m,Object.assign({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"When writing tests it can often prove difficult to ensure we have sufficient coverage across all our code.\nIn this section we will look at using a coverage report to allow us to determine if further testing is required."),Object(a.b)("h2",null,"Generating a report"),Object(a.b)("p",null,"It is first important to ensure the tests are passing and to a high standard. Read the ",Object(a.b)(c.Link,{to:"/tooling/testing",mdxType:"Link"},"testing")," section more information.\nOnce that is done a coverage report can be generated by simply running: ",Object(a.b)(i.a,{mdxType:"InlineCode"},"npm run coverage"),"."),Object(a.b)(l.j,{scheme:"base",mb:2,mdxType:"Flash"},Object(a.b)(r.h,{mr:2,mdxType:"InfoIcon"}),"Running a coverage report will create a coverage directory where the generated files are stored."),Object(a.b)(l.j,{scheme:"yellow",mdxType:"Flash"},Object(a.b)(r.h,{mr:2,mdxType:"InfoIcon"}),"Please ensure coverage folder has been .gitignored."),Object(a.b)("h2",null,"Viewing a report"),Object(a.b)("p",null,"To see the results of the report you will need to locate the index.html file that will have been generated and placed in the coverage folder and open this in your browser."),Object(a.b)("h2",null,"Understanding a report."),Object(a.b)("p",null,"Once open you will see a breakdown of the project and an indicator as a percentage of how good the test coverage is. We strive to maintain a code coverage of at least 80%."),Object(a.b)("p",null,"Where code coverage is not up to that standard we can click individual sections and drill down further so we are able to easily see which aspects of the code require further testing."))}u.isMDXComponent=!0},844:function(e,t,n){"use strict";var a=n(2),o=n(4),l=n(11),r=n(0),i=n.n(r),c=n(130),s=n(76),d=n(199),m=n(131),u=n(197),p=n(198),b=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function f(e){var t=e.items,n=e.depth;return i.a.createElement(b,{as:"ul",m:0,p:0},t.map(function(e){return i.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(o.o,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(f,{items:e.items,depth:n+1}):null)}))}f.defaultProps={depth:0};var g=f,h=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),y=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),w=Object(a.f)(o.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),v=Object(a.f)(o.p).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),E=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,r=a.title,b=a.description,f=a.status,O=a.source,j=a.additionalContributors,x=void 0===j?[]:j;return i.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(c.a,{title:r,description:b}),i.a.createElement(s.b,null),i.a.createElement(h,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(o.e,{display:["none",null,null,"block"]},i.a.createElement(m.a,null)),i.a.createElement(y,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(w,{border:0,borderBottom:1,borderRadius:0,pb:2},i.a.createElement(o.m,null,r)),n.tableOfContents.items?i.a.createElement(v,{display:["none",null,"block"],position:"sticky",top:s.a+24,maxHeight:"calc(100vh - "+s.a+"px - 24px)"},i.a.createElement(o.u,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(g,{items:n.tableOfContents.items})):null,i.a.createElement(E,null,f||O?i.a.createElement(o.k,{mb:3,alignItems:"center"},f?i.a.createElement(p.a,{status:f}):null,i.a.createElement(o.e,{mx:"auto"}),O?i.a.createElement(u.a,{href:O}):null):null,n.tableOfContents.items?i.a.createElement(o.e,{display:["block",null,"none"],mb:3},i.a.createElement(o.h,null,function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.u,{as:"summary",fontWeight:"bold"},t?i.a.createElement(l.b,{mr:2}):i.a.createElement(l.c,{mr:2}),"Table of contents"),i.a.createElement(o.e,{pt:1},i.a.createElement(g,{items:n.tableOfContents.items})))})):null,t,i.a.createElement(d.a,{editUrl:n.editUrl,contributors:n.contributors.concat(x.map(function(e){return{login:e}}))})))))}}}]);
//# sourceMappingURL=component---content-tooling-coverage-mdx-1d2a9adde5030513e17a.js.map
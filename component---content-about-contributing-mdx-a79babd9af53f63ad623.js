(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{832:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return c}),n.d(t,"default",function(){return m});n(9),n(10),n(8),n(13),n(17),n(0);var a=n(118),o=n(838),l=n(18),i=n(4),r=n(19);var c={},s={_frontmatter:c},u=o.a;function m(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(u,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A great place to start is our issues tracker! Anything without a ",Object(a.b)(i.n,{bg:"#e99695",mdxType:"Label"},"triage")," label has been reviewed by our team and is considered as a valid issue."),Object(a.b)("h2",null,"Contributing code"),Object(a.b)("p",null,'When opening a pull request, please make sure you link the respective issue into the Pull Request via the "Linked Issues" section or using closing terms in your description.'),Object(a.b)("p",null,"Please note that as per our ",Object(a.b)(l.a,{href:"https://github.com/xedi/sdk-js/blob/master/CONTRIBUTING.md",mdxType:"ExternalLink"},"contribution guide")," pull requests that fail testing, linting or that cause our coverage to decrease significantly may not be accepted."),Object(a.b)("h2",null,"Non code contributions"),Object(a.b)("p",null,"If you find a bug, have a feature request, or think there is a better way to do something please open an issue. When you create an issue there will be a number of options. Please select the one most appropriate to your issue. If you find a security vulnerability, please consult our ",Object(a.b)(l.a,{href:"https://github.com/xedi/sdk-js/blob/master/SECURITY.md",mdxType:"ExternalLink"},"security policy"),"."),Object(a.b)("h2",null,"Contributing Documentation"),Object(a.b)("p",null,"Please feel free to add to or fix this documentation. For more information about contributing to this documentation check out the ",Object(a.b)(r.Link,{to:"/documentation/contributing",mdxType:"Link"},"Contributing section"),"."),Object(a.b)(l.c,{sort:"created",direction:"asc",renderLabels:!0,assignee:"none",mdxType:"GithubIssues"}))}m.isMDXComponent=!0},838:function(e,t,n){"use strict";var a=n(2),o=n(4),l=n(11),i=n(0),r=n.n(i),c=n(130),s=n(76),u=n(199),m=n(131),d=n(197),b=n(198),p=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function f(e){var t=e.items,n=e.depth;return r.a.createElement(p,{as:"ul",m:0,p:0},t.map(function(e){return r.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(o.o,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(f,{items:e.items,depth:n+1}):null)}))}f.defaultProps={depth:0};var h=f,g=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),y=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),E=Object(a.f)(o.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),k=Object(a.f)(o.p).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),x=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,i=a.title,p=a.description,f=a.status,O=a.source,j=a.additionalContributors,v=void 0===j?[]:j;return r.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(c.a,{title:i,description:p}),r.a.createElement(s.b,null),r.a.createElement(g,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(o.e,{display:["none",null,null,"block"]},r.a.createElement(m.a,null)),r.a.createElement(y,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(E,{border:0,borderBottom:1,borderRadius:0,pb:2},r.a.createElement(o.m,null,i)),n.tableOfContents.items?r.a.createElement(k,{display:["none",null,"block"],position:"sticky",top:s.a+24,maxHeight:"calc(100vh - "+s.a+"px - 24px)"},r.a.createElement(o.u,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(h,{items:n.tableOfContents.items})):null,r.a.createElement(x,null,f||O?r.a.createElement(o.k,{mb:3,alignItems:"center"},f?r.a.createElement(b.a,{status:f}):null,r.a.createElement(o.e,{mx:"auto"}),O?r.a.createElement(d.a,{href:O}):null):null,n.tableOfContents.items?r.a.createElement(o.e,{display:["block",null,"none"],mb:3},r.a.createElement(o.h,null,function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.u,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.b,{mr:2}):r.a.createElement(l.c,{mr:2}),"Table of contents"),r.a.createElement(o.e,{pt:1},r.a.createElement(h,{items:n.tableOfContents.items})))})):null,t,r.a.createElement(u.a,{editUrl:n.editUrl,contributors:n.contributors.concat(v.map(function(e){return{login:e}}))})))))}}}]);
//# sourceMappingURL=component---content-about-contributing-mdx-a79babd9af53f63ad623.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{813:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return b}),n.d(t,"default",function(){return d});n(9),n(10),n(8),n(13),n(17),n(0);var a=n(118),l=n(847),i=n(4),o=n(11),r=n(18),c=n(19);var b={},s={_frontmatter:b},m=l.a;function d(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(a.b)(m,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"Installation"),Object(a.b)(i.j,{mb:2,mdxType:"Flash"},Object(a.b)(o.h,{ml:1,mdxType:"InfoIcon"})," XEDI.js is currently published to the GitHub Package Repository. You can find out more about the GitHub Package Repository ",Object(a.b)(r.a,{href:"https://help.github.com/en/packages",mdxType:"ExternalLink"},"here"),".",Object(a.b)(i.d,{mt:1,bg:"white",mdxType:"BorderBox"},Object(a.b)(r.b,{issueId:"29",mdxType:"GithubIssue"}))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Using NPM")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"npm install @xedi/sdk-js\n")),Object(a.b)("p",null,"XEDI.js also ships with TypeScript typings!"),Object(a.b)("h2",null,"Configuration"),Object(a.b)("p",null,"You can configure the SDK using the ",Object(a.b)("inlineCode",{parentName:"p"},"Xedi.Config")," class. This class extends a JavaScript ",Object(a.b)("inlineCode",{parentName:"p"},"Map")," object, so the usual ",Object(a.b)("inlineCode",{parentName:"p"},"get"),", ",Object(a.b)("inlineCode",{parentName:"p"},"set"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"delete")," methods will work as per the original object. For example, you can configure which ",Object(a.b)("inlineCode",{parentName:"p"},"base_url")," should be used to contact a API Gateway instance."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"Xedi.Config.set('base_url', 'https://api.staging.xedi.com');\n")),Object(a.b)("p",null,"Below you will find a list of all configurations."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object.assign({parentName:"tr"},{align:null}),"Configuration"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:null}),"Default Value"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:null}),"Comments"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"base_url")),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"https://api.xedi.com")),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"refresh_token")),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null})),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"Set and managed by ",Object(a.b)("inlineCode",{parentName:"td"},"Xedi.Auth"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"access_token")),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null})),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"Set and managed by ",Object(a.b)("inlineCode",{parentName:"td"},"Xedi.Auth"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"mode")),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"production")),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}))))),Object(a.b)("p",null,"Learn more about using the ",Object(a.b)("inlineCode",{parentName:"p"},"Xedi.Config")," class ",Object(a.b)(c.Link,{to:"development/configuration",mdxType:"Link"},"here"),"."))}d.isMDXComponent=!0},847:function(e,t,n){"use strict";var a=n(2),l=n(4),i=n(11),o=n(0),r=n.n(o),c=n(130),b=n(76),s=n(199),m=n(131),d=n(197),p=n(198),u=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function g(e){var t=e.items,n=e.depth;return r.a.createElement(u,{as:"ul",m:0,p:0},t.map(function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.o,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(g,{items:e.items,depth:n+1}):null)}))}g.defaultProps={depth:0};var j=g,O=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),f=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),h=Object(a.f)(l.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),y=Object(a.f)(l.p).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),N=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,o=a.title,u=a.description,g=a.status,C=a.source,E=a.additionalContributors,x=void 0===E?[]:E;return r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(c.a,{title:o,description:u}),r.a.createElement(b.b,null),r.a.createElement(O,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(m.a,null)),r.a.createElement(f,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(h,{border:0,borderBottom:1,borderRadius:0,pb:2},r.a.createElement(l.m,null,o)),n.tableOfContents.items?r.a.createElement(y,{display:["none",null,"block"],position:"sticky",top:b.a+24,maxHeight:"calc(100vh - "+b.a+"px - 24px)"},r.a.createElement(l.u,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(j,{items:n.tableOfContents.items})):null,r.a.createElement(N,null,g||C?r.a.createElement(l.k,{mb:3,alignItems:"center"},g?r.a.createElement(p.a,{status:g}):null,r.a.createElement(l.e,{mx:"auto"}),C?r.a.createElement(d.a,{href:C}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.u,{as:"summary",fontWeight:"bold"},t?r.a.createElement(i.b,{mr:2}):r.a.createElement(i.c,{mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(j,{items:n.tableOfContents.items})))})):null,t,r.a.createElement(s.a,{editUrl:n.editUrl,contributors:n.contributors.concat(x.map(function(e){return{login:e}}))})))))}}}]);
//# sourceMappingURL=component---content-about-getting-started-mdx-7f43515f1c7db8c057ac.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{817:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return c}),n.d(t,"default",function(){return m});n(10),n(11),n(8),n(13),n(18),n(0);var a=n(118),l=n(852),o=n(19),i=n(16),r=n(36);var c={},s={_frontmatter:c},u=l.a;function m(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(a.b)(u,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"There are different types of linking within this framework. Here is a run down of each one and when to use it."),Object(a.b)("h2",null,"Internal Links"),Object(a.b)("p",null,"If you want to link to something internally, you should use the ",Object(a.b)(i.a,{href:"https://www.gatsbyjs.org/docs/gatsby-link/",mdxType:"ExternalLink"},"Gatsby Link component")," as it enables the SPA-like browsing experience."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'Click <Link to="/documentation/recipes/adding-links#internal-links">here</Link> to learn about Links.\n')),Object(a.b)("h2",null,"External Links"),Object(a.b)("p",null,"If you want to link to something external of the documentation, you should use the ",Object(a.b)(o.Link,{to:"/documentation/components#external-link",mdxType:"Link"},"ExternalLink")," component."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'Click <ExternalLink href="https://xedi.github.io/sdk-js/documentation/components#external-link">here</ExternalLink> to learn about external links\n')),Object(a.b)("h2",null,"Source Links"),Object(a.b)("p",null,"If you want to link to source code, you should use the ",Object(a.b)(r.a,{mdxType:"InlineCode"},"<","SourceLink",">")," component."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<SourceLink href="https://github.com/xedi/sdk-js/blob/master/docs/src/components/source_link.js">View Source</SourceLink>\n')),Object(a.b)("h2",null,"Repo Links"),Object(a.b)("p",null,"If you want to link to a page within the GitHub repository then use the ",Object(a.b)(r.a,{mdxType:"InlineCode"},"<","RepoLink",">")," component."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<RepoLink href="packages">Packages on GitHub</RepoLink>\n')),Object(a.b)("h3",null,"Different Icon"),Object(a.b)("p",null,"You can also change the icon using the ",Object(a.b)(r.a,{mdxType:"InlineCode"},"icon")," property."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<RepoLink icon={Package} href="packages">Packages on GitHub</RepoLink>\n')))}m.isMDXComponent=!0},852:function(e,t,n){"use strict";var a=n(2),l=n(4),o=n(9),i=n(0),r=n.n(i),c=n(130),s=n(76),u=n(199),m=n(131),b=n(197),p=n(198),d=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function g(e){var t=e.items,n=e.depth;return r.a.createElement(d,{as:"ul",m:0,p:0},t.map(function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.o,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(g,{items:e.items,depth:n+1}):null)}))}g.defaultProps={depth:0};var f=g,h=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),k=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),y=Object(a.f)(l.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),j=Object(a.f)(l.p).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),O=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,i=a.title,d=a.description,g=a.status,x=a.source,E=a.additionalContributors,w=void 0===E?[]:E;return r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(c.a,{title:i,description:d}),r.a.createElement(s.b,null),r.a.createElement(h,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(m.a,null)),r.a.createElement(k,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(y,{border:0,borderBottom:1,borderRadius:0,pb:2},r.a.createElement(l.m,null,i)),n.tableOfContents.items?r.a.createElement(j,{display:["none",null,"block"],position:"sticky",top:s.a+24,maxHeight:"calc(100vh - "+s.a+"px - 24px)"},r.a.createElement(l.u,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(f,{items:n.tableOfContents.items})):null,r.a.createElement(O,null,g||x?r.a.createElement(l.k,{mb:3,alignItems:"center"},g?r.a.createElement(p.a,{status:g}):null,r.a.createElement(l.e,{mx:"auto"}),x?r.a.createElement(b.a,{href:x}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.u,{as:"summary",fontWeight:"bold"},t?r.a.createElement(o.b,{mr:2}):r.a.createElement(o.c,{mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(f,{items:n.tableOfContents.items})))})):null,t,r.a.createElement(u.a,{editUrl:n.editUrl,contributors:n.contributors.concat(w.map(function(e){return{login:e}}))})))))}}}]);
//# sourceMappingURL=component---content-documentation-recipes-adding-links-mdx-5ca7c4340a8e53a0e2e2.js.map
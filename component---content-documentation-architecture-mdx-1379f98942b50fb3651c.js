(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{805:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return c}),n.d(t,"default",function(){return d});n(9),n(10),n(8),n(13),n(17);var o=n(2),a=(n(0),n(118)),r=n(834),l=n(18),i=n(4),s=n(148);var c={},m={_frontmatter:c},b=r.a,p=Object(o.f)(s.a).withConfig({displayName:"architecture___StyledBlockquote",componentId:"tozzao-0"})(["margin-bottom:0"]);function d(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(a.b)(b,Object.assign({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,'There are several elements to this "framework":'),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"GatsbyJS - Site Generator (uses React)"),Object(a.b)("li",{parentName:"ol"},"Primer.Doctocat - Theme by GitHub"),Object(a.b)("li",{parentName:"ol"},"Primer.Components - React Components"),Object(a.b)("li",{parentName:"ol"},"Primer.StyledOcticons - GitHub Icons (SVG)"),Object(a.b)("li",{parentName:"ol"},"MDX - Extended Markdown")),Object(a.b)("h2",null,"GatsbyJS"),Object(a.b)("p",null,'GatsbyJS is a site generator that uses modern web technologies to produce in their words "blazing fast websites and apps".'),Object(a.b)("p",null,"It is based on the React JavaScript framework from Facebook and uses Webpack, GraphQL and the latest development techniques to provide really fast user experiences."),Object(a.b)(l.a,{href:"https://gatsbyjs.org",mdxType:"ExternalLink"},"Click here to learn more"),Object(a.b)("h2",null,"Primer"),Object(a.b)("p",null,"Primer is the design system built by, and for GitHub. It encompasses everything from Iconography and Web Components, through to the companies presentation master slides. We use a small subset of their open-source tools which are detailed below."),Object(a.b)(l.a,{href:"https://primer.style",mdxType:"ExternalLink"},"Click here to learn more"),Object(a.b)("h3",null,"Doctocat"),Object(a.b)("p",null,"Doctocat is the GatsbyJS theme GitHub have developed for their documentation. It is preconfigured for working within the Primer team, so requires some modification out-of-the-box to remove branding etc."),Object(a.b)("p",null,"It also contains a number of useful components and datasources that link back to GitHub data such as the list of Contributors at the bottom of each page."),Object(a.b)(l.a,{href:"https://primer.style/doctocat",mdxType:"ExternalLink"},"Click here to learn more"),Object(a.b)("h3",null,"Components"),Object(a.b)("p",null,"Primer Components are useful implementations of the Primer CSS library, implemented as ReactJS Components."),Object(a.b)(l.a,{href:"https://primer.style/components",mdxType:"ExternalLink"},"Click here to learn more"),Object(a.b)("h3",null,"StyledOcticons"),Object(a.b)("p",null,"Primer StyledOcticons are ReactJs Components that are wrapped with system props from the ",Object(a.b)(l.a,{href:"https://styled-system.com",mdxType:"ExternalLink"},"styled-system")," package."),Object(a.b)("p",null,"Not only are these easy to style, but the base package, ",Object(a.b)("inlineCode",{parentName:"p"},"@primer/octicons-react")," supports tree-shaking to ensure only used components are bundled."),Object(a.b)(l.a,{href:"https://primer.style/octicons",mdxType:"ExternalLink"},"Click here to learn more"),Object(a.b)("h2",null,"MDX"),Object(a.b)(i.e,{mb:2,mdxType:"Box"},Object(a.b)(p,{cite:"https://www.gatsbyjs.org/docs/mdx/",mdxType:"Blockquote"},"MDX is Markdown for the component era. It lets you write JSX embedded inside Markdown. It's a great combination because it allows you to use Markdown's terse syntax (such as `# Heading`) for your content and JSX for more advanced, or reusable components."),Object(a.b)(l.a,{ml:3,href:"https://www.gatsbyjs.org/docs/mdx/",mdxType:"ExternalLink"},"Adding Components to Markdown with MDX | GatsbyJS")))}d.isMDXComponent=!0},834:function(e,t,n){"use strict";var o=n(2),a=n(4),r=n(11),l=n(0),i=n.n(l),s=n(130),c=n(76),m=n(197),b=n(131),p=n(195),d=n(196),u=Object(o.f)(a.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function h(e){var t=e.items,n=e.depth;return i.a.createElement(u,{as:"ul",m:0,p:0},t.map(function(e){return i.a.createElement(a.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(a.o,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(h,{items:e.items,depth:n+1}):null)}))}h.defaultProps={depth:0};var f=h,y=Object(o.f)(a.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),g=Object(o.f)(a.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),O=Object(o.f)(a.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),k=Object(o.f)(a.p).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),j=Object(o.f)(a.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,o=n.frontmatter,l=o.title,u=o.description,h=o.status,x=o.source,w=o.additionalContributors,E=void 0===w?[]:w;return i.a.createElement(a.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(s.a,{title:l,description:u}),i.a.createElement(c.b,null),i.a.createElement(y,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(a.e,{display:["none",null,null,"block"]},i.a.createElement(b.a,null)),i.a.createElement(g,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(O,{border:0,borderBottom:1,borderRadius:0,pb:2},i.a.createElement(a.m,null,l)),n.tableOfContents.items?i.a.createElement(k,{display:["none",null,"block"],position:"sticky",top:c.a+24,maxHeight:"calc(100vh - "+c.a+"px - 24px)"},i.a.createElement(a.u,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(f,{items:n.tableOfContents.items})):null,i.a.createElement(j,null,h||x?i.a.createElement(a.k,{mb:3,alignItems:"center"},h?i.a.createElement(d.a,{status:h}):null,i.a.createElement(a.e,{mx:"auto"}),x?i.a.createElement(p.a,{href:x}):null):null,n.tableOfContents.items?i.a.createElement(a.e,{display:["block",null,"none"],mb:3},i.a.createElement(a.h,null,function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(a.u,{as:"summary",fontWeight:"bold"},t?i.a.createElement(r.b,{mr:2}):i.a.createElement(r.c,{mr:2}),"Table of contents"),i.a.createElement(a.e,{pt:1},i.a.createElement(f,{items:n.tableOfContents.items})))})):null,t,i.a.createElement(m.a,{editUrl:n.editUrl,contributors:n.contributors.concat(E.map(function(e){return{login:e}}))})))))}}}]);
//# sourceMappingURL=component---content-documentation-architecture-mdx-1379f98942b50fb3651c.js.map
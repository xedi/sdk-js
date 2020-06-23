(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{821:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return p}),n.d(t,"default",function(){return u});n(9),n(10),n(8),n(13),n(17),n(0);var a=n(118),o=n(838),i=n(4),l=n(18),r=n(34),c=n(11),s=n(42),d=n(19);var p={},b={_frontmatter:p},m=o.a;function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(m,Object.assign({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"Step 1 - Create a page"),Object(a.b)("p",null,"Within the ",Object(a.b)("inlineCode",{parentName:"p"},"docs/content")," directory is where all the pages are stored. From ",Object(a.b)("inlineCode",{parentName:"p"},"docs/content/")," the folder structure should match the desired URL. For this particular page, a recipe for adding pages, I wanted the URL to be something like ",Object(a.b)("inlineCode",{parentName:"p"},"documentation/recipes/adding-a-page"),". This meant I would need to add a directory with ",Object(a.b)("inlineCode",{parentName:"p"},"docs/content/documentation")," called recipes."),Object(a.b)("h2",null,"Step 2 - Front matter"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Front Matter"),' is information about the page you are authoring. There are four "variables" that are supported.'),Object(a.b)("h3",null,"Title and description"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"title")," is used to render the page heading and generate the ",Object(a.b)(l.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title",mdxType:"ExternalLink"},"page title"),"."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"description")," is used to create a ",Object(a.b)(l.a,{href:"https://moz.com/learn/seo/meta-description",mdxType:"ExternalLink"},"meta description tag"),"\nwhich is important for SEO. ",Object(a.b)("strong",{parentName:"p"},"These are required on every page")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-mdx"}),"---\ntitle: Adding a Page\ndescription: Adding Documentation\n---\n")),Object(a.b)("h3",null,"Status"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"status")," variable is provided by the ",Object(a.b)(l.a,{href:"https://primer.style/doctocat/usage/front-matter#status",mdxType:"ExternalLink"},"doctocat theme")," and provides a label at the top of the page indicating the status of your subject."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-mdx"}),"---\nstatus: New\n---\n")),Object(a.b)("h3",null,"Source"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"source")," variable is provided by the ",Object(a.b)(l.a,{href:"https://primer.style/doctocat/usage/front-matter#status",mdxType:"ExternalLink"},"doctocat theme")," and provides a link at the top of the page back to the source code of your subject."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-mdx"}),"---\nsource: https://github.com/xedi/sdk-js/blob/master/docs/content/documentation/recipes/adding-a-page.mdx\n---\n")),Object(a.b)("h3",null,"Additional contributors"),Object(a.b)("p",null,"At the bottom of each page is a list of people who have contributed to that page. From time to time, you may find yourself needing to use code or content from other authors. For example, you may choose to use fixtures written by another developer. In this situation, its nice to recognise those contributions. You can do this by adding the ",Object(a.b)("inlineCode",{parentName:"p"},"additionalContributors")," variable."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-mdx"}),"---\nadditionalContributors:\n  - midmiddlton\n  - ehtishamSaleem\n---\n")),Object(a.b)("h2",null,"Step 3 - Adding to the nav"),Object(a.b)("p",null,"If you want your page to appear within the sites navigation, you will need to place an entry within the ",Object(a.b)("inlineCode",{parentName:"p"},"nav.yml")," file thats in ",Object(a.b)("inlineCode",{parentName:"p"},"docs/src/@primer/gatsby-theme-doctocat/"),"."),Object(a.b)("p",null,"Inside the file, find the where you want your page to appear in the listing (the nav is rendered in the order defined). You ",Object(a.b)("strong",{parentName:"p"},"should")," provide a ",Object(a.b)("inlineCode",{parentName:"p"},"title")," and ",Object(a.b)("inlineCode",{parentName:"p"},"url"),". If you are defining a new section, then you should also provide a list of ",Object(a.b)("inlineCode",{parentName:"p"},"children"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-yml"}),"- title: Recipe - Adding a Page\n  url: documentation/recipes/adding-a-page\n")),Object(a.b)(r.a,{mdxType:"Caption"},"Adding a page"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-yml"}),"- title: Recipes\n  url: documentation/recipes\n  children:\n    - title: Recipe - Adding a Page\n      url: documentation/recipes/adding-a-page\n")),Object(a.b)(r.a,{mdxType:"Caption"},"Adding a new section"),Object(a.b)(i.j,{mdxType:"Flash"},Object(a.b)(c.h,{mr:1,mdxType:"InfoIcon"}),"When defining a new section there are a couple of caveats to be aware of, and these are covered in the ",Object(a.b)(d.Link,{to:"/documentation/structure#sidebar-navigation",mdxType:"Link"},"section about the Sidebar"),"."),Object(a.b)("h2",null,"Step 4 - Authoring"),Object(a.b)("p",null,"Depending what you are writing about, how you write about it and the components you will use will differ."),Object(a.b)("p",null,"API documentation is relatively simplistic compared to technical documentation. Here are some general guidelines."),Object(a.b)(r.d,{stacked:!0,mdxType:"DoDontContainer"},Object(a.b)(r.c,{mdxType:"Do"},"Complete front-matter as completely as is necessary."),Object(a.b)(r.c,{mdxType:"Do"},"Document all issues and workarounds."),Object(a.b)(r.c,{mdxType:"Do"},"Provide links to all issues use the ",Object(a.b)(s.a,{mdxType:"InlineCode"},"<GithubIssue>")," component."),Object(a.b)(r.e,{mdxType:"Dont"},"Put sensitive information like keys, access tokens or passwords into documentation."),Object(a.b)(r.c,{mdxType:"Do"},"Use the ",Object(a.b)(s.a,{mdxType:"InlineCode"},"<Flash>")," component to emphasis important sections.")))}u.isMDXComponent=!0},838:function(e,t,n){"use strict";var a=n(2),o=n(4),i=n(11),l=n(0),r=n.n(l),c=n(130),s=n(76),d=n(199),p=n(131),b=n(197),m=n(198),u=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function h(e){var t=e.items,n=e.depth;return r.a.createElement(u,{as:"ul",m:0,p:0},t.map(function(e){return r.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(o.o,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(h,{items:e.items,depth:n+1}):null)}))}h.defaultProps={depth:0};var g=h,f=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),O=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),j=Object(a.f)(o.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),y=Object(a.f)(o.p).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),x=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,l=a.title,u=a.description,h=a.status,w=a.source,v=a.additionalContributors,C=void 0===v?[]:v;return r.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(c.a,{title:l,description:u}),r.a.createElement(s.b,null),r.a.createElement(f,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(o.e,{display:["none",null,null,"block"]},r.a.createElement(p.a,null)),r.a.createElement(O,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(j,{border:0,borderBottom:1,borderRadius:0,pb:2},r.a.createElement(o.m,null,l)),n.tableOfContents.items?r.a.createElement(y,{display:["none",null,"block"],position:"sticky",top:s.a+24,maxHeight:"calc(100vh - "+s.a+"px - 24px)"},r.a.createElement(o.u,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(g,{items:n.tableOfContents.items})):null,r.a.createElement(x,null,h||w?r.a.createElement(o.k,{mb:3,alignItems:"center"},h?r.a.createElement(m.a,{status:h}):null,r.a.createElement(o.e,{mx:"auto"}),w?r.a.createElement(b.a,{href:w}):null):null,n.tableOfContents.items?r.a.createElement(o.e,{display:["block",null,"none"],mb:3},r.a.createElement(o.h,null,function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.u,{as:"summary",fontWeight:"bold"},t?r.a.createElement(i.b,{mr:2}):r.a.createElement(i.c,{mr:2}),"Table of contents"),r.a.createElement(o.e,{pt:1},r.a.createElement(g,{items:n.tableOfContents.items})))})):null,t,r.a.createElement(d.a,{editUrl:n.editUrl,contributors:n.contributors.concat(C.map(function(e){return{login:e}}))})))))}}}]);
//# sourceMappingURL=component---content-documentation-recipes-adding-a-page-mdx-daeadce8124f2a739ef0.js.map
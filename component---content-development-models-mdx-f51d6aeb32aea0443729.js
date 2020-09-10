(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"5D0G":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n("8o2o"),i=(n("q1tI"),n("7ljp")),l=n("HjAN"),o=n("oW+c"),r=n("FH/S"),c=n("Wbzz"),s=(n("Kvkj"),{}),d={_frontmatter:s},m=l.a;function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(m,Object.assign({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Models mean a lot of things to a lot of people. Here, they are simple definitions of the data we expect when we refer to a certain entity. At runtime, they provide little benefit, however, in TypeScript, they can help us understand the code that uses them, and ensures we use the correct attribute names when interacting with the data."),Object(i.b)("h2",null,"Authoring a Model"),Object(i.b)("p",null,"Models can be found in the ",Object(i.b)("inlineCode",{parentName:"p"},"src/Models")," directory. Model files ",Object(i.b)(o.u,{as:"em",mdxType:"Text"},"should")," be in title-case, for example ",Object(i.b)("inlineCode",{parentName:"p"},"Example.ts")," rather than ",Object(i.b)("inlineCode",{parentName:"p"},"example.ts"),". These files should also then be imported into ",Object(i.b)("inlineCode",{parentName:"p"},"Models.ts")," and added to the union type defining ",Object(i.b)("inlineCode",{parentName:"p"},"Models"),"."),Object(i.b)("p",null,"Lets break down the User model and examine how its built."),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"import Xuid, { SupportedXuid } from '../Utils/Xuid';\n\n\n/**\n * User\n */\nexport default interface User extends Object {\n    _id: Xuid<SupportedXuid.User>;\n    first_name: string;\n    last_name: string;\n    email: string;\n    contact_no?: number;\n    job_title?: string;\n    avatar?: string;\n    is_active: boolean;\n}\n")),Object(i.b)(o.o,{href:"https://github.com/xedi/sdk-js/blob/master/src/Models/User.ts",lineHeight:"condensedUltra",fontSize:1,mdxType:"PrimerLink"},Object(i.b)(r.e,{mr:2,mdxType:"CodeIcon"}),"View Source"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Note that whilst this looks like your everyday household JavaScript object, after each line, there is a semi-colon. This tells TypeScript that we have finished defining that attribute."),Object(i.b)("li",{parentName:"ul"},"Some attributes have a ",Object(i.b)("inlineCode",{parentName:"li"},"?")," at the end of the attribute name. This denotes that it is optional."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"_id")," is using a custom type definition. It is an ",Object(i.b)(c.Link,{to:"/development/utilities#xuid",mdxType:"Link"},"XUID")," of type ",Object(i.b)("inlineCode",{parentName:"li"},"User")," as enumerated by the ",Object(i.b)(c.Link,{to:"/development/utilities#supported-xuid",mdxType:"Link"},"SupportedXuid")," enum.")))}u.isMDXComponent=!0},HjAN:function(e,t,n){"use strict";var a=n("vOnD"),i=n("oW+c"),l=n("FH/S"),o=n("q1tI"),r=n.n(o),c=n("8gyx"),s=n("ESUP"),d=n("oo4l"),m=n("Evc+"),u=n("og4h"),p=n("sqpL"),b=Object(a.f)(i.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function h(e){var t=e.items,n=e.depth;return r.a.createElement(b,{as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(i.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(i.o,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(h,{items:e.items,depth:n+1}):null)})))}h.defaultProps={depth:0};var f=h,g=Object(a.f)(i.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),y=Object(a.f)(i.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),j=Object(a.f)(i.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),O=Object(a.f)(i.p).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),x=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,o=a.title,b=a.description,h=a.status,E=a.source,k=a.additionalContributors,w=void 0===k?[]:k;return r.a.createElement(i.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(c.a,{title:o,description:b}),r.a.createElement(s.b,null),r.a.createElement(g,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(i.e,{display:["none",null,null,"block"]},r.a.createElement(m.a,null)),r.a.createElement(y,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(j,{border:0,borderBottom:1,borderRadius:0,pb:2},r.a.createElement(i.m,null,o)),n.tableOfContents.items?r.a.createElement(O,{display:["none",null,"block"],position:"sticky",top:s.a+24,maxHeight:"calc(100vh - "+s.a+"px - 24px)"},r.a.createElement(i.u,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(f,{items:n.tableOfContents.items})):null,r.a.createElement(x,null,h||E?r.a.createElement(i.k,{mb:3,alignItems:"center"},h?r.a.createElement(p.a,{status:h}):null,r.a.createElement(i.e,{mx:"auto"}),E?r.a.createElement(u.a,{href:E}):null):null,n.tableOfContents.items?r.a.createElement(i.e,{display:["block",null,"none"],mb:3},r.a.createElement(i.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.u,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.b,{mr:2}):r.a.createElement(l.c,{mr:2}),"Table of contents"),r.a.createElement(i.e,{pt:1},r.a.createElement(f,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(d.a,{editUrl:n.editUrl,contributors:n.contributors.concat(w.map((function(e){return{login:e}})))})))))}}}]);
//# sourceMappingURL=component---content-development-models-mdx-f51d6aeb32aea0443729.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{831:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return b}),n.d(t,"default",function(){return u});n(9),n(10),n(8),n(13),n(17),n(0);var a=n(118),i=n(847),o=n(4),l=n(32),s=n(11),r=n(36),c=n(18),p=n(19);var b={},m={_frontmatter:b},d=i.a;function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(d,Object.assign({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",null,"Adding API Classes"),Object(a.b)("p",null,"There are three main stages to adding a API class:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Definition"),Object(a.b)("li",{parentName:"ol"},"Resolution"),Object(a.b)("li",{parentName:"ol"},"Invocation")),Object(a.b)("h2",null,"Definition"),Object(a.b)("p",null,"Within the ",Object(a.b)("inlineCode",{parentName:"p"},"src/Services/")," directory you should find a number of files. Most notable for us is the ",Object(a.b)("inlineCode",{parentName:"p"},"Service.ts")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Services.ts")," files."),Object(a.b)(o.d,{mb:2,mdxType:"BorderBox"},Object(a.b)(c.b,{issueId:"24",mdxType:"GithubIssue"})),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Service.ts"),' is the abstract class from which all our "Service" classes extend. It is responsible for the construction of the class, for handling the ',Object(a.b)(p.Link,{to:"architecture/events",mdxType:"Link"},"classes events"),", and holding memory references to the ",Object(a.b)(p.Link,{to:"architecture/configuration",mdxType:"Link"},"config bag")," and the ",Object(a.b)(p.Link,{to:"architecture/http_requests",mdxType:"Link"},"HTTP client"),"."),Object(a.b)("p",null,"Within ",Object(a.b)("inlineCode",{parentName:"p"},"src/Services")," create a new file with the same name as the entity it will host. For example, ",Object(a.b)("inlineCode",{parentName:"p"},"Example.ts")," should look like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"import Service from  './Service';\n\n\n/**\n * Example class\n */\nclass Example extends Service\n{\n}\n\nexport default Example;\n")),Object(a.b)("h2",null,"Resolution"),Object(a.b)("p",null,"Remember ",Object(a.b)("inlineCode",{parentName:"p"},"src/Services/Services.ts"),"? This is the first step of building the resolution root for our new class.\n",Object(a.b)("inlineCode",{parentName:"p"},"Services.ts"),' exports a TypeScript namespace, which allows use to easily import all our "Services" into our main class.'),Object(a.b)("p",null,'Firstly, import your newly created "Service" class.'),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-diff"}),"diff a/src/Services/Services.ts b/src/Services/Services.ts\n import Accounts from './Accounts';\n+import Example from './Example';\n")),Object(a.b)("p",null,"Then, you should add the imported class to the end of the ",Object(a.b)("inlineCode",{parentName:"p"},"export")," object."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-diff"}),"diff a/src/Services/Services.ts b/src/Services/Services.ts\n     Accounts,\n-}\n+    Example,\n+}\n")),Object(a.b)("p",null,"Next, you need to register your ",Object(a.b)(p.Link,{to:"architecture/singletons",mdxType:"Link"},"singleton"),". This will ensure configuration and state persistence."),Object(a.b)("h2",null,"Invocation"),Object(a.b)("p",null,"This is where things start to come together. Locate ",Object(a.b)("inlineCode",{parentName:"p"},"src/index.ts")," and open it. Inside here, you will find our root object. It is the home of our application container."),Object(a.b)("p",null,"The first step here is to register a ",Object(a.b)(p.Link,{to:"architecture/singletons",mdxType:"Link"},"singleton"),' for your "Service" class.\nFind the ',Object(a.b)("inlineCode",{parentName:"p"},"boot")," method, and go to the bottom of that method. Here we are going to add a binding that the container will use to build a single instance of your class."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"this.singleton(\n    'services.example',\n    (app: ContainerInterface, config: Config) => {\n        return new Services.Example(\n            config,\n            app.resolve('client')\n        );\n    }\n);\n")),Object(a.b)("p",null,"The counterpart to this registration is the resolution of its abstract definition; here ",Object(a.b)("inlineCode",{parentName:"p"},"'services.example'"),"."),Object(a.b)("p",null,"Near the bottom of the root ",Object(a.b)("inlineCode",{parentName:"p"},"Xedi")," class, add the following function."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"static get Example(): Services.Example\n{\n    return this.resolveInstance()\n        .resolve('services.example');\n}\n\n")),Object(a.b)("p",null,"Congratulations! You can now resolve you new class. If you want, go ahead and jump into the ",Object(a.b)(p.Link,{to:"tooling/debugging",mdxType:"Link"},"playground")," and type ",Object(a.b)("inlineCode",{parentName:"p"},"Xedi.Example"),". It should resolve you an instance of your new class and inside, you will find a ",Object(a.b)(p.Link,{to:"architecture/config",mdxType:"Link"},"config bag")," and a ",Object(a.b)(p.Link,{to:"architecture/http_requests",mdxType:"Link"},"HTTP client"),"."),Object(a.b)("h1",null,"Modifying API Classes"),Object(a.b)("p",null,"You want to start giving your class some abilities. Depending on your situation you might be adding a series of CRUD endpoints, or something entirely different. In most cases, you will be sending HTTP requests to an instance of the XEDI API Gateway. Most endpoints are the same, but there will be a few caveats and edge-cases. Consider the following examples:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"list() {\n    return this.client\n        .get<JsonResponse<Example>>(`1/examples`)\n        .then((response: AxiosResponse<JsonResponse<Example>>) => {\n            return response.data.data;\n        });\n}\n")),Object(a.b)(l.a,{mdxType:"Caption"},"An indexing method"),Object(a.b)("p",null,"Lets look at line three of the above example. In JavaScript this would look like ",Object(a.b)(r.a,{mdxType:"InlineCode"},".get('1/examples')"),", so whats the extra stuff? This how we tell TypeScript, what we expect the ",Object(a.b)(p.Link,{to:"architecture/http_requests",mdxType:"Link"},"HTTP Client")," to return in the promise. Here we tell it we want a ",Object(a.b)("inlineCode",{parentName:"p"},"JsonResponse")," which itself, must contain an ",Object(a.b)("inlineCode",{parentName:"p"},"Example"),"."),Object(a.b)(o.j,{varient:"info",mb:2,mdxType:"Flash"},Object(a.b)(o.u,{fontWeight:"bold",mdxType:"Text"},Object(a.b)(s.h,{mdxType:"InfoIcon"})," What is an ",Object(a.b)(r.a,{mdxType:"InlineCode"},"Example"),"?"),Object(a.b)("p",null,"In this instance, Example is a ",Object(a.b)(p.Link,{to:"development/models",mdxType:"Link"},"model"),". A model is a simple definition of the data structure we expect. If you aren't familiar with this concept, read the section on ",Object(a.b)(p.Link,{to:"development/models",mdxType:"Link"},"models"),".")),Object(a.b)("p",null,"On line four, we see that our response expectation is defined again, but this time within an ",Object(a.b)(p.Link,{to:"architecture/http_requests",mdxType:"Link"},Object(a.b)(r.a,{mdxType:"InlineCode"},"AxiosResponse")),". Translated to plain english this reads: ",Object(a.b)(o.u,{as:"em",mdxType:"Text"},"Where ",Object(a.b)(r.a,{mdxType:"InlineCode"},"response")," is a JSON representation of a Example within an AxiosResponse"),". Again, at runtime, this compiles down to nothing, but here in TypeScript it helps us understand the intent of the code."))}u.isMDXComponent=!0},847:function(e,t,n){"use strict";var a=n(2),i=n(4),o=n(11),l=n(0),s=n.n(l),r=n(130),c=n(76),p=n(199),b=n(131),m=n(197),d=n(198),u=Object(a.f)(i.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function h(e){var t=e.items,n=e.depth;return s.a.createElement(u,{as:"ul",m:0,p:0},t.map(function(e){return s.a.createElement(i.e,{as:"li",key:e.url,pl:n>0?3:0},s.a.createElement(i.o,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?s.a.createElement(h,{items:e.items,depth:n+1}):null)}))}h.defaultProps={depth:0};var f=h,g=Object(a.f)(i.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),O=Object(a.f)(i.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),j=Object(a.f)(i.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),y=Object(a.f)(i.p).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),x=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,l=a.title,u=a.description,h=a.status,v=a.source,w=a.additionalContributors,T=void 0===w?[]:w;return s.a.createElement(i.k,{flexDirection:"column",minHeight:"100vh"},s.a.createElement(r.a,{title:l,description:u}),s.a.createElement(c.b,null),s.a.createElement(g,{flex:"1 1 auto",flexDirection:"row"},s.a.createElement(i.e,{display:["none",null,null,"block"]},s.a.createElement(b.a,null)),s.a.createElement(O,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},s.a.createElement(j,{border:0,borderBottom:1,borderRadius:0,pb:2},s.a.createElement(i.m,null,l)),n.tableOfContents.items?s.a.createElement(y,{display:["none",null,"block"],position:"sticky",top:c.a+24,maxHeight:"calc(100vh - "+c.a+"px - 24px)"},s.a.createElement(i.u,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),s.a.createElement(f,{items:n.tableOfContents.items})):null,s.a.createElement(x,null,h||v?s.a.createElement(i.k,{mb:3,alignItems:"center"},h?s.a.createElement(d.a,{status:h}):null,s.a.createElement(i.e,{mx:"auto"}),v?s.a.createElement(m.a,{href:v}):null):null,n.tableOfContents.items?s.a.createElement(i.e,{display:["block",null,"none"],mb:3},s.a.createElement(i.h,null,function(e){var t=e.open;return s.a.createElement(s.a.Fragment,null,s.a.createElement(i.u,{as:"summary",fontWeight:"bold"},t?s.a.createElement(o.b,{mr:2}):s.a.createElement(o.c,{mr:2}),"Table of contents"),s.a.createElement(i.e,{pt:1},s.a.createElement(f,{items:n.tableOfContents.items})))})):null,t,s.a.createElement(p.a,{editUrl:n.editUrl,contributors:n.contributors.concat(T.map(function(e){return{login:e}}))})))))}}}]);
//# sourceMappingURL=component---content-development-api-mdx-ec2e3b543ac36c5ab840.js.map
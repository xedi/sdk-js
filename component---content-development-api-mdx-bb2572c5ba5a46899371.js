(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{HjAN:function(e,t,n){"use strict";var a=n("vOnD"),i=n("oW+c"),o=n("FH/S"),l=n("q1tI"),s=n.n(l),r=n("8gyx"),c=n("ESUP"),p=n("oo4l"),b=n("Evc+"),m=n("og4h"),d=n("sqpL"),u=Object(a.f)(i.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function h(e){var t=e.items,n=e.depth;return s.a.createElement(u,{as:"ul",m:0,p:0},t.map((function(e){return s.a.createElement(i.e,{as:"li",key:e.url,pl:n>0?3:0},s.a.createElement(i.o,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?s.a.createElement(h,{items:e.items,depth:n+1}):null)})))}h.defaultProps={depth:0};var f=h,g=Object(a.f)(i.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),j=Object(a.f)(i.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),O=Object(a.f)(i.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),y=Object(a.f)(i.p).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),x=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,l=a.title,u=a.description,h=a.status,v=a.source,w=a.additionalContributors,E=void 0===w?[]:w;return s.a.createElement(i.k,{flexDirection:"column",minHeight:"100vh"},s.a.createElement(r.a,{title:l,description:u}),s.a.createElement(c.b,null),s.a.createElement(g,{flex:"1 1 auto",flexDirection:"row"},s.a.createElement(i.e,{display:["none",null,null,"block"]},s.a.createElement(b.a,null)),s.a.createElement(j,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},s.a.createElement(O,{border:0,borderBottom:1,borderRadius:0,pb:2},s.a.createElement(i.m,null,l)),n.tableOfContents.items?s.a.createElement(y,{display:["none",null,"block"],position:"sticky",top:c.a+24,maxHeight:"calc(100vh - "+c.a+"px - 24px)"},s.a.createElement(i.u,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),s.a.createElement(f,{items:n.tableOfContents.items})):null,s.a.createElement(x,null,h||v?s.a.createElement(i.k,{mb:3,alignItems:"center"},h?s.a.createElement(d.a,{status:h}):null,s.a.createElement(i.e,{mx:"auto"}),v?s.a.createElement(m.a,{href:v}):null):null,n.tableOfContents.items?s.a.createElement(i.e,{display:["block",null,"none"],mb:3},s.a.createElement(i.h,null,(function(e){var t=e.open;return s.a.createElement(s.a.Fragment,null,s.a.createElement(i.u,{as:"summary",fontWeight:"bold"},t?s.a.createElement(o.b,{mr:2}):s.a.createElement(o.c,{mr:2}),"Table of contents"),s.a.createElement(i.e,{pt:1},s.a.createElement(f,{items:n.tableOfContents.items})))}))):null,t,s.a.createElement(p.a,{editUrl:n.editUrl,contributors:n.contributors.concat(E.map((function(e){return{login:e}})))})))))}},X6rx:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return m})),n.d(t,"default",(function(){return h}));var a=n("8o2o"),i=(n("q1tI"),n("7ljp")),o=n("HjAN"),l=n("oW+c"),s=n("4hS9"),r=n("FH/S"),c=n("OaND"),p=n("Kvkj"),b=n("Wbzz"),m={},d={_frontmatter:m},u=o.a;function h(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(u,Object.assign({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",null,"Adding API Classes"),Object(i.b)("p",null,"There are three main stages to adding an API class:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Definition"),Object(i.b)("li",{parentName:"ol"},"Resolution"),Object(i.b)("li",{parentName:"ol"},"Invocation")),Object(i.b)("h2",null,"Definition"),Object(i.b)("p",null,"Within the ",Object(i.b)("inlineCode",{parentName:"p"},"src/Services/")," directory you should find a number of files. Most notable for us is the ",Object(i.b)("inlineCode",{parentName:"p"},"Service.ts")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Services.ts")," files."),Object(i.b)(l.d,{mb:2,mdxType:"BorderBox"},Object(i.b)(p.b,{issueId:"24",mdxType:"GithubIssue"})),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Service.ts"),' is the abstract class from which all our "Service" classes extend. It is responsible for the construction of the class, for handling the ',Object(i.b)(b.Link,{to:"architecture/events",mdxType:"Link"},"classes events"),", and holding memory references to the ",Object(i.b)(b.Link,{to:"architecture/configuration",mdxType:"Link"},"config bag")," and the ",Object(i.b)(b.Link,{to:"architecture/http_requests",mdxType:"Link"},"HTTP client"),"."),Object(i.b)("p",null,"Within ",Object(i.b)("inlineCode",{parentName:"p"},"src/Services")," create a new file with the same name as the entity it will host. For example, ",Object(i.b)("inlineCode",{parentName:"p"},"Example.ts")," should look like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"import Service from  './Service';\n\n\n/**\n * Example class\n */\nclass Example extends Service\n{\n}\n\nexport default Example;\n")),Object(i.b)("h2",null,"Resolution"),Object(i.b)("p",null,"Remember ",Object(i.b)("inlineCode",{parentName:"p"},"src/Services/Services.ts"),"? This is the first step of building the resolution root for our new class.\n",Object(i.b)("inlineCode",{parentName:"p"},"Services.ts"),' exports a TypeScript namespace, which allows use to easily import all our "Services" into our main class.'),Object(i.b)("p",null,'Firstly, import your newly created "Service" class.'),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-diff"}),"diff a/src/Services/Services.ts b/src/Services/Services.ts\n import Accounts from './Accounts';\n+import Example from './Example';\n")),Object(i.b)("p",null,"Then, you should add the imported class to the end of the ",Object(i.b)("inlineCode",{parentName:"p"},"export")," object."),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-diff"}),"diff a/src/Services/Services.ts b/src/Services/Services.ts\n     Accounts,\n-}\n+    Example,\n+}\n")),Object(i.b)("p",null,"Next, you need to register your ",Object(i.b)(b.Link,{to:"architecture/singletons",mdxType:"Link"},"singleton"),". This will ensure configuration and state persistence."),Object(i.b)("h2",null,"Invocation"),Object(i.b)("p",null,"This is where things start to come together. Locate ",Object(i.b)("inlineCode",{parentName:"p"},"src/index.ts")," and open it. Inside here, you will find our root object. It is the home of our application container."),Object(i.b)("p",null,"The first step here is to register a ",Object(i.b)(b.Link,{to:"architecture/singletons",mdxType:"Link"},"singleton"),' for your "Service" class.\nFind the ',Object(i.b)("inlineCode",{parentName:"p"},"boot")," method, and go to the bottom of that method. Here we are going to add a binding that the container will use to build a single instance of your class."),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"this.singleton(\n    'services.example',\n    (app: ContainerInterface, config: Config) => {\n        return new Services.Example(\n            config,\n            app.resolve('client')\n        );\n    }\n);\n")),Object(i.b)("p",null,"The counterpart to this registration is the resolution of its abstract definition; here ",Object(i.b)("inlineCode",{parentName:"p"},"'services.example'"),"."),Object(i.b)("p",null,"Near the bottom of the root ",Object(i.b)("inlineCode",{parentName:"p"},"Xedi")," class, add the following function."),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"static get Example(): Services.Example\n{\n    return this.resolveInstance()\n        .resolve('services.example');\n}\n\n")),Object(i.b)("p",null,"Congratulations! You can now resolve you new class. If you want, go ahead and jump into the ",Object(i.b)(b.Link,{to:"tooling/debugging",mdxType:"Link"},"playground")," and type ",Object(i.b)("inlineCode",{parentName:"p"},"Xedi.Example"),". It should resolve you an instance of your new class and inside, you will find a ",Object(i.b)(b.Link,{to:"architecture/config",mdxType:"Link"},"config bag")," and a ",Object(i.b)(b.Link,{to:"architecture/http_requests",mdxType:"Link"},"HTTP client"),"."),Object(i.b)("h1",null,"Modifying API Classes"),Object(i.b)("p",null,"You want to start giving your class some abilities. Depending on your situation you might be adding a series of CRUD endpoints, or something entirely different. In most cases, you will be sending HTTP requests to an instance of the XEDI API Gateway. Most endpoints are the same, but there will be a few caveats and edge-cases. Consider the following examples:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"list() {\n    return this.client\n        .get<JsonResponse<Example>>(`1/examples`)\n        .then((response: AxiosResponse<JsonResponse<Example>>) => {\n            return response.data.data;\n        });\n}\n")),Object(i.b)(s.a,{mdxType:"Caption"},"An indexing method"),Object(i.b)("p",null,"Lets look at line three of the above example. In JavaScript this would look like ",Object(i.b)(c.a,{mdxType:"InlineCode"},".get('1/examples')"),", so whats the extra stuff? This how we tell TypeScript, what we expect the ",Object(i.b)(b.Link,{to:"architecture/http_requests",mdxType:"Link"},"HTTP Client")," to return in the promise. Here we tell it we want a ",Object(i.b)("inlineCode",{parentName:"p"},"JsonResponse")," which itself, must contain an ",Object(i.b)("inlineCode",{parentName:"p"},"Example"),"."),Object(i.b)(l.j,{varient:"info",mb:2,mdxType:"Flash"},Object(i.b)(l.u,{fontWeight:"bold",mdxType:"Text"},Object(i.b)(r.h,{mdxType:"InfoIcon"})," What is an ",Object(i.b)(c.a,{mdxType:"InlineCode"},"Example"),"?"),Object(i.b)("p",null,"In this instance, Example is a ",Object(i.b)(b.Link,{to:"development/models",mdxType:"Link"},"model"),". A model is a simple definition of the data structure we expect. If you aren't familiar with this concept, read the section on ",Object(i.b)(b.Link,{to:"development/models",mdxType:"Link"},"models"),".")),Object(i.b)("p",null,"On line four, we see that our response expectation is defined again, but this time within an ",Object(i.b)(b.Link,{to:"architecture/http_requests",mdxType:"Link"},Object(i.b)(c.a,{mdxType:"InlineCode"},"AxiosResponse")),". Translated to plain english this reads: ",Object(i.b)(l.u,{as:"em",mdxType:"Text"},"Where ",Object(i.b)(c.a,{mdxType:"InlineCode"},"response")," is a JSON representation of a Example within an AxiosResponse"),". Again, at runtime, this compiles down to nothing, but here in TypeScript it helps us understand the intent of the code."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-development-api-mdx-bb2572c5ba5a46899371.js.map
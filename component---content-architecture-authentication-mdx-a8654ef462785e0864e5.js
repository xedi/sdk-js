(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{806:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return l}),n.d(t,"default",function(){return u});n(8),n(9),n(7),n(12),n(16),n(0);var a=n(114),o=n(817),i=n(4),r=n(26);var l={},s={_frontmatter:l},c=o.a;function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(c,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"Background"),Object(a.b)("h3",null,"Rationale"),Object(a.b)("p",null,"Security is of paramount importance. Customers trust XEDI with sensitive business data, and legislation such as the ",Object(a.b)(r.a,{href:"http://www.legislation.gov.uk/ukpga/2018/12/contents/enacted",mdxType:"ExternalLink"},"Data Protection Act 2018")," obligate XEDI to ensure the maximum possible security of data and best practices for access. For more information on these obligations, read ",Object(a.b)(r.a,{href:"https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/",mdxType:"ExternalLink"},"this guide from the Information Commissioners Office"),"."),Object(a.b)("p",null,"As part of these obligations, we've not only looked at current best practices, but also industry futures. Many names within the authentication tech-space are moving to using JWT tokens as part of the Open Authentication 2.0 standard. As such we have chosen JWT tokens as our defacto authentication mechanism."),Object(a.b)("h3",null,"Tokens"),Object(a.b)("p",null,"When you authenticate with an API Gateway, you will be provisioned two ",Object(a.b)(r.a,{href:"https://tools.ietf.org/html/rfc7519",mdxType:"ExternalLink"},"JWT tokens"),". These are known as short-life tokens and are considered to be more secure than traditional OAuth tokens."),Object(a.b)("p",null,"The first token, the ",Object(a.b)(i.t,{as:"em",mdxType:"Text"},"Access Token")," is the token which should be sent in the ",Object(a.b)("inlineCode",{parentName:"p"},"Authenticate")," header using the ",Object(a.b)(r.a,{href:"https://tools.ietf.org/html/rfc6750",mdxType:"ExternalLink"},Object(a.b)("inlineCode",{parentName:"p"},"Bearer")," scheme"),"."),Object(a.b)("p",null,"The second, and most important is the ",Object(a.b)(i.t,{as:"em",mdxType:"Text"},"Refresh Token"),'. This should be kept safe and only used when prompted. As the name suggests it is used to securely generate new access tokens when your current one expires. To ensure this not subject to "replay attacks", refresh tokens are single use. Once it is used, it is revoked and a new one issued.'),Object(a.b)("p",null,"For extra security, our tokens are also encrypted. This means that the signature part of the token is encrypted using 4096-bit encryption. The signature hashes the payload and headers of the token, which prevents the token from being manipulated by a third-party."),Object(a.b)("h2",null,"Token Lifecycle"),Object(a.b)(i.d,{mdxType:"BorderBox"},Object(a.b)(r.b,{issueId:"30",mdxType:"GithubIssue"})),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"One authenticated successfully, access and refresh tokens will be issued to the user."),Object(a.b)("li",{parentName:"ul"},"The user should use the access token in the ",Object(a.b)("inlineCode",{parentName:"li"},"Authenticate")," header for every request."),Object(a.b)("li",{parentName:"ul"},"When the access token expires, any request it is used with will respond with a ",Object(a.b)("inlineCode",{parentName:"li"},"401 Not Authorized")," error.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Within the responses headers will be the ",Object(a.b)("inlineCode",{parentName:"li"},"WWW-Authenticate")," header providing detail of the error.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"If the token is expired, the refresh token should be sent to ",Object(a.b)("inlineCode",{parentName:"li"},"1/api/auth/token")," using the ",Object(a.b)("inlineCode",{parentName:"li"},"POST")," verb."),Object(a.b)("li",{parentName:"ul"},"If the token is invalid, the refresh token should be sent to ",Object(a.b)("inlineCode",{parentName:"li"},"1/api/auth/token")," using the ",Object(a.b)("inlineCode",{parentName:"li"},"POST")," verb."),Object(a.b)("li",{parentName:"ul"},"New tokens will be issued to the user if the refresh token is valid."))))),Object(a.b)("li",{parentName:"ul"},"If the refresh token itself is invalid, expired or revoked, the user should re-authenticate.")))}u.isMDXComponent=!0},817:function(e,t,n){"use strict";var a=n(2),o=n(4),i=n(13),r=n(0),l=n.n(r),s=n(126),c=n(73),u=n(192),d=n(127),h=n(190),m=n(191),b=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function p(e){var t=e.items,n=e.depth;return l.a.createElement(b,{as:"ul",m:0,p:0},t.map(function(e){return l.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},l.a.createElement(o.n,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?l.a.createElement(p,{items:e.items,depth:n+1}):null)}))}p.defaultProps={depth:0};var f=p,g=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),k=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),y=Object(a.f)(o.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),O=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),j=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,r=a.title,b=a.description,p=a.status,w=a.source,x=a.additionalContributors,E=void 0===x?[]:x;return l.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},l.a.createElement(s.a,{title:r,description:b}),l.a.createElement(c.b,null),l.a.createElement(g,{flex:"1 1 auto",flexDirection:"row"},l.a.createElement(o.e,{display:["none",null,null,"block"]},l.a.createElement(d.a,null)),l.a.createElement(k,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},l.a.createElement(y,{border:0,borderBottom:1,borderRadius:0,pb:2},l.a.createElement(o.m,null,r)),n.tableOfContents.items?l.a.createElement(O,{display:["none",null,"block"],position:"sticky",top:c.a+24,maxHeight:"calc(100vh - "+c.a+"px - 24px)"},l.a.createElement(o.t,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),l.a.createElement(f,{items:n.tableOfContents.items})):null,l.a.createElement(j,null,p||w?l.a.createElement(o.k,{mb:3,alignItems:"center"},p?l.a.createElement(m.a,{status:p}):null,l.a.createElement(o.e,{mx:"auto"}),w?l.a.createElement(h.a,{href:w}):null):null,n.tableOfContents.items?l.a.createElement(o.e,{display:["block",null,"none"],mb:3},l.a.createElement(o.h,null,function(e){var t=e.open;return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.t,{as:"summary",fontWeight:"bold"},t?l.a.createElement(i.b,{mr:2}):l.a.createElement(i.c,{mr:2}),"Table of contents"),l.a.createElement(o.e,{pt:1},l.a.createElement(f,{items:n.tableOfContents.items})))})):null,t,l.a.createElement(u.a,{editUrl:n.editUrl,contributors:n.contributors.concat(E.map(function(e){return{login:e}}))})))))}}}]);
//# sourceMappingURL=component---content-architecture-authentication-mdx-a8654ef462785e0864e5.js.map
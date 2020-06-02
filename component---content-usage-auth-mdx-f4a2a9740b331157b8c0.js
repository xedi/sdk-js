(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{739:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return l}),n.d(t,"default",function(){return b});n(10),n(11),n(7),n(13),n(12),n(0);var c=n(103),a=n(753),r=n(5),s=n(99);var l={},i={_frontmatter:l},p=a.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,c,a={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(c.c)(p,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.c)("h1",null,"Introduction"),Object(c.c)("p",null,"The Auth api controls access to the system. Read more about our ",Object(c.c)(r.l,{href:"/architecture/authentication",mdxType:"Link"},"authentication architecture here"),"."),Object(c.c)("h1",null,"Events"),Object(c.c)("p",null,"This service emits events. To learn more about events ",Object(c.c)(r.l,{href:"/architecture/events",mdxType:"Link"},"here"),"."),Object(c.c)("h2",null,"auth_updated"),Object(c.c)("p",null,"When the authentication state changes; ",Object(c.c)("inlineCode",{parentName:"p"},"auth_updated")," is emitted."),Object(c.c)("pre",null,Object(c.c)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"type AuthenticationUpdatedEvent {\n    method: string;\n    date: {\n        user: User;\n        business?: Business;\n        refresh_token: RefreshToken;\n        access_token: AccessToken;\n    }\n}\n")),Object(c.c)("h2",null,"auth_deleted"),Object(c.c)("p",null,"When the authentication state is revoked; ",Object(c.c)("inlineCode",{parentName:"p"},"auth_deleted")," is emitted."),Object(c.c)("pre",null,Object(c.c)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"type AuthenticationDeletedEvent {\n    method: string;\n}\n")),Object(c.c)("h1",null,"Properties"),Object(c.c)("h2",null,"business"),Object(c.c)("p",null,"Gets the current business context."),Object(c.c)("pre",null,Object(c.c)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const currentBusiness: Business = Xedi.Auth.business;\n")),Object(c.c)("h2",null,"users"),Object(c.c)("p",null,"Gets the logged in user."),Object(c.c)("pre",null,Object(c.c)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const currentUser: User = Xedi.Auth.user;\n")),Object(c.c)("h1",null,"Usage"),Object(c.c)("h2",null,"login"),Object(c.c)("p",null,Object(c.c)("strong",{parentName:"p"},"Parameters")),Object(c.c)("table",null,Object(c.c)("thead",{parentName:"table"},Object(c.c)("tr",{parentName:"thead"},Object(c.c)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(c.c)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(c.c)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(c.c)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(c.c)("tbody",{parentName:"table"},Object(c.c)("tr",{parentName:"tbody"},Object(c.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"email"),Object(c.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(c.c)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(c.c)(s.a,{color:"green.5",mdxType:"CheckIcon"})),Object(c.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"t.stark@avengers.org")),Object(c.c)("tr",{parentName:"tbody"},Object(c.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"password"),Object(c.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(c.c)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(c.c)(s.a,{color:"green.5",mdxType:"CheckIcon"})),Object(c.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"izJ7Y0MBwcJ8")))),Object(c.c)("p",null,Object(c.c)("strong",{parentName:"p"},"Usage")),Object(c.c)("pre",null,Object(c.c)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"await Xedi.Auth.login('t.stark@avengers.org', 'izJ7Y0MBwcJ8');\n")),Object(c.c)("p",null,Object(c.c)("strong",{parentName:"p"},"Events")),Object(c.c)("p",null,"Emits ",Object(c.c)("inlineCode",{parentName:"p"},"auth_updated")," on successful authentication."),Object(c.c)("p",null,Object(c.c)("strong",{parentName:"p"},"Response")),Object(c.c)("pre",null,Object(c.c)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"type AuthenticationResponse {\n    data: {\n        tokens: {\n            access: AccessToken;\n            refresh: RefreshToken;\n        };\n        user: User;\n    };\n}\n")),Object(c.c)("h2",null,"withToken"),Object(c.c)("p",null,Object(c.c)("strong",{parentName:"p"},"Parameters")),Object(c.c)("table",null,Object(c.c)("thead",{parentName:"table"},Object(c.c)("tr",{parentName:"thead"},Object(c.c)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(c.c)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(c.c)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(c.c)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(c.c)("tbody",{parentName:"table"},Object(c.c)("tr",{parentName:"tbody"},Object(c.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"refreshToken"),Object(c.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(c.c)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(c.c)(s.a,{color:"green.5",mdxType:"CheckIcon"})),Object(c.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"eyJhbGciO6IkpXVCJ9.e30.Et9HFtf9RY7kkTX1wr4qCyhIf58U")))),Object(c.c)("p",null,Object(c.c)("strong",{parentName:"p"},"Usage")),Object(c.c)("pre",null,Object(c.c)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"await Xedi.Auth.withToken('eyJhbGciO6IkpXVCJ9.e30.Et9HFtf9RY7kkTX1wr4qCyhIf58U');\n")),Object(c.c)("p",null,Object(c.c)("strong",{parentName:"p"},"Events")),Object(c.c)("p",null,"Emits ",Object(c.c)("inlineCode",{parentName:"p"},"auth_updated")," on successful authentication."),Object(c.c)("p",null,Object(c.c)("strong",{parentName:"p"},"Response")),Object(c.c)("pre",null,Object(c.c)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"type AuthenticationResponse {\n    data: {\n        tokens: {\n            access: AccessToken;\n            refresh: RefreshToken;\n        };\n        user: User;\n        business?: Business;\n    };\n}\n")),Object(c.c)("h2",null,"refreshAccessToken"),Object(c.c)("p",null,Object(c.c)("strong",{parentName:"p"},"Parameters")),Object(c.c)("p",null,Object(c.c)("inlineCode",{parentName:"p"},"null")),Object(c.c)("p",null,Object(c.c)("strong",{parentName:"p"},"Usage")),Object(c.c)("pre",null,Object(c.c)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"await Xedi.Auth.refreshAccessToken();\n")),Object(c.c)("p",null,Object(c.c)("strong",{parentName:"p"},"Events")),Object(c.c)("p",null,"Emits ",Object(c.c)("inlineCode",{parentName:"p"},"auth_updated")," on successful renewal of the authentication state."),Object(c.c)("p",null,Object(c.c)("strong",{parentName:"p"},"Response")),Object(c.c)("pre",null,Object(c.c)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"type AuthenticationResponse {\n    data: {\n        tokens: {\n            access: AccessToken;\n            refresh: RefreshToken;\n        };\n        user: User;\n        business?: Business;\n    };\n}\n")),Object(c.c)("h2",null,"switchContexts"),Object(c.c)("p",null,Object(c.c)("strong",{parentName:"p"},"Parameters")),Object(c.c)("table",null,Object(c.c)("thead",{parentName:"table"},Object(c.c)("tr",{parentName:"thead"},Object(c.c)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(c.c)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(c.c)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(c.c)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(c.c)("tbody",{parentName:"table"},Object(c.c)("tr",{parentName:"tbody"},Object(c.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"business_uuid"),Object(c.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(c.c)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(c.c)(s.a,{color:"green.5",mdxType:"CheckIcon"})),Object(c.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"92ac7274-9369-11ea-9521-01002da17977")))),Object(c.c)("p",null,Object(c.c)("strong",{parentName:"p"},"Usage")),Object(c.c)("pre",null,Object(c.c)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"await Xedi.Auth.switchContexts('92ac7274-9369-11ea-9521-01002da17977');\n")),Object(c.c)("p",null,Object(c.c)("strong",{parentName:"p"},"Events")),Object(c.c)("p",null,"Emits ",Object(c.c)("inlineCode",{parentName:"p"},"auth_updated")," on successful updating of the authentication context."),Object(c.c)("p",null,Object(c.c)("strong",{parentName:"p"},"Response")),Object(c.c)("pre",null,Object(c.c)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"type AuthenticationResponse {\n    data: {\n        tokens: {\n            access: AccessToken;\n            refresh: RefreshToken;\n        };\n        user: User;\n        business: Business;\n    };\n}\n")),Object(c.c)("h2",null,"logout"),Object(c.c)("p",null,"Perminently revoke your refresh token."),Object(c.c)("p",null,Object(c.c)("strong",{parentName:"p"},"Parameters")),Object(c.c)("p",null,Object(c.c)("inlineCode",{parentName:"p"},"null")),Object(c.c)("p",null,Object(c.c)("strong",{parentName:"p"},"Usage")),Object(c.c)("pre",null,Object(c.c)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"await Xedi.Auth.logout();\n")),Object(c.c)("p",null,Object(c.c)("strong",{parentName:"p"},"Events")),Object(c.c)("p",null,"Emits ",Object(c.c)("inlineCode",{parentName:"p"},"auth_deleted")," on successful revocation of the refresh token."),Object(c.c)("pre",null,Object(c.c)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "method": "logout"\n}\n')),Object(c.c)("p",null,Object(c.c)("strong",{parentName:"p"},"Response")),Object(c.c)("p",null,Object(c.c)("inlineCode",{parentName:"p"},"null")))}b.isMDXComponent=!0},753:function(e,t,n){"use strict";var c=n(103),a=n(5),r=n(44),s=n(0),l=n.n(s),i=n(90),p=n(117),b=n(119),u=n(118);function o(e){var t=e.items,n=l.a.useContext(c.a),a=n.ul,r=void 0===a?"ul":a,s=n.li,i=void 0===s?"li":s,p=n.a,b=void 0===p?"a":p;return l.a.createElement(r,null,t.map(function(e){return l.a.createElement(i,{key:e.url},l.a.createElement(b,{href:e.url},e.title),e.items?l.a.createElement(o,{items:e.items}):null)}))}var j=function(e){var t=e.items,n=l.a.useContext(c.a).h2,a=void 0===n?"h2":n;return l.a.createElement(l.a.Fragment,null,l.a.createElement(a,null,"Table of contents"),l.a.createElement(o,{items:t}))},O=n(169);t.a=function(e){var t=e.children,n=e.pageContext,s=l.a.useContext(c.a).h1,o=void 0===s?"h1":s;return l.a.createElement(a.j,{flexDirection:"column",minHeight:"100vh"},l.a.createElement(p.a,{title:n.frontmatter.title,description:n.frontmatter.description}),l.a.createElement(b.a,null),l.a.createElement(a.j,{flex:"1 1 auto",flexDirection:"row"},l.a.createElement(a.e,{display:["none",null,null,"block"]},l.a.createElement(u.a,null)),l.a.createElement(i.a,null,l.a.createElement(o,null,n.frontmatter.title),n.frontmatter.status?l.a.createElement(a.e,{mb:4},l.a.createElement(O.a,{status:n.frontmatter.status})):null,n.tableOfContents.items?l.a.createElement(j,{items:n.tableOfContents.items}):null,t,n.editUrl?l.a.createElement(a.e,{my:6},l.a.createElement(a.l,{href:n.editUrl},l.a.createElement(a.p,{icon:r.e,mr:2}),"Edit this page on GitHub")):null)))}}}]);
//# sourceMappingURL=component---content-usage-auth-mdx-f4a2a9740b331157b8c0.js.map
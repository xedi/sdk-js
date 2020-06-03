(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{739:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",function(){return r}),a.d(t,"default",function(){return i});a(9),a(10),a(7),a(13),a(11),a(0);var n=a(99),c=a(747);var r={},s={_frontmatter:r},l=c.a;function i(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,["components"]);return Object(n.c)(l,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.c)("h2",null,"Introduction"),Object(n.c)("p",null,"The Accounts API allows you to register, and verify a user account."),Object(n.c)("h2",null,"Usage"),Object(n.c)("h3",null,"Register"),Object(n.c)("p",null,"Register a User Account"),Object(n.c)("p",null,Object(n.c)("strong",{parentName:"p"},"Parameters")),Object(n.c)("table",null,Object(n.c)("thead",{parentName:"table"},Object(n.c)("tr",{parentName:"thead"},Object(n.c)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(n.c)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(n.c)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(n.c)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(n.c)("tbody",{parentName:"table"},Object(n.c)("tr",{parentName:"tbody"},Object(n.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"email"),Object(n.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(n.c)("td",Object.assign({parentName:"tr"},{align:"center"}),"✔"),Object(n.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"t.stark@avengers.org")),Object(n.c)("tr",{parentName:"tbody"},Object(n.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"first_name"),Object(n.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(n.c)("td",Object.assign({parentName:"tr"},{align:"center"}),"✔"),Object(n.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"Anthony")),Object(n.c)("tr",{parentName:"tbody"},Object(n.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"last_name"),Object(n.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(n.c)("td",Object.assign({parentName:"tr"},{align:"center"}),"✔"),Object(n.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"Stark")),Object(n.c)("tr",{parentName:"tbody"},Object(n.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"password"),Object(n.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(n.c)("td",Object.assign({parentName:"tr"},{align:"center"}),"✔"),Object(n.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"izJ7Y0MBwcJ8")),Object(n.c)("tr",{parentName:"tbody"},Object(n.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"contact_no"),Object(n.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(n.c)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(n.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"(970) 517-1743 x67916")),Object(n.c)("tr",{parentName:"tbody"},Object(n.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"job_title"),Object(n.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(n.c)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(n.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"Iron Man")),Object(n.c)("tr",{parentName:"tbody"},Object(n.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"avatar"),Object(n.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(n.c)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(n.c)("td",Object.assign({parentName:"tr"},{align:"left"}),Object(n.c)("a",Object.assign({parentName:"td"},{href:"https://assets.avengers.org/images/iron_man.png"}),"https://assets.avengers.org/images/iron_man.png"))))),Object(n.c)("p",null,Object(n.c)("strong",{parentName:"p"},"Usage")),Object(n.c)("pre",null,Object(n.c)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const user = await Xedi.Accounts.register({\n    email: 't.stark@avengers.org',\n    first_name: 'Anthony',\n    last_name: 'Stark',\n    password: 'izJ7Y0MBwcJ8',\n    contact_no: '(970) 517-1743 x67916',\n    job_title: 'Iron Man',\n    avatar: 'https://assets.avengers.org/images/iron_man.png'\n});\n")),Object(n.c)("p",null,Object(n.c)("strong",{parentName:"p"},"Response")),Object(n.c)("pre",null,Object(n.c)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "_id": "92ac7274-9369-11ea-9521-01002da17977",\n    "email": "t.stark@avengers.org",\n    "first_name": "Anthony",\n    "last_name": "Stark",\n    "job_title": "Iron Man",\n    "contact_no": "(970) 517-1743 x67916",\n    "avatar": "https://assets.avengers.org/images/iron_man.png",\n    "created_at": "2020-05-11 10:27:03",\n    "is_active": 0\n}\n')),Object(n.c)("hr",null),Object(n.c)("h3",null,"Verify"),Object(n.c)("p",null,"Verify the email address attached to a User account."),Object(n.c)("p",null,Object(n.c)("strong",{parentName:"p"},"Parameters")),Object(n.c)("table",null,Object(n.c)("thead",{parentName:"table"},Object(n.c)("tr",{parentName:"thead"},Object(n.c)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(n.c)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(n.c)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(n.c)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(n.c)("tbody",{parentName:"table"},Object(n.c)("tr",{parentName:"tbody"},Object(n.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"verificationToken"),Object(n.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(n.c)("td",Object.assign({parentName:"tr"},{align:"center"}),"✔︎"),Object(n.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"de99a620c50f2990e87144735cd357e7")))),Object(n.c)("p",null,Object(n.c)("strong",{parentName:"p"},"Usage")),Object(n.c)("pre",null,Object(n.c)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const user = Xedi.Accounts.verify('de99a620c50f2990e87144735cd357e7');\n")),Object(n.c)("p",null,Object(n.c)("strong",{parentName:"p"},"Response")),Object(n.c)("pre",null,Object(n.c)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "_id": "92ac7274-9369-11ea-9521-01002da17977",\n    "email": "t.stark@avengers.org",\n    "first_name": "Anthony",\n    "last_name": "Start",\n    "job_title": "Iron Man",\n    "contact_no": "(970) 517-1743 x67916",\n    "avatar": "https://assets.avengers.org/images/iron_man.png",\n    "created_at": "2020-05-11 10:27:03",\n    "updated_at": "2020-05-11 10:30:14",\n    "is_active": 1\n}\n')))}i.isMDXComponent=!0},747:function(e,t,a){"use strict";var n=a(99),c=a(4),r=a(41),s=a(0),l=a.n(s),i=a(113),b=a(114),g=a(116),m=a(115);function j(e){var t=e.items,a=l.a.useContext(n.a),c=a.ul,r=void 0===c?"ul":c,s=a.li,i=void 0===s?"li":s,b=a.a,g=void 0===b?"a":b;return l.a.createElement(r,null,t.map(function(e){return l.a.createElement(i,{key:e.url},l.a.createElement(g,{href:e.url},e.title),e.items?l.a.createElement(j,{items:e.items}):null)}))}var O=function(e){var t=e.items,a=l.a.useContext(n.a).h2,c=void 0===a?"h2":a;return l.a.createElement(l.a.Fragment,null,l.a.createElement(c,null,"Table of contents"),l.a.createElement(j,{items:t}))},o=a(165);t.a=function(e){var t=e.children,a=e.pageContext,s=l.a.useContext(n.a).h1,j=void 0===s?"h1":s;return l.a.createElement(c.i,{flexDirection:"column",minHeight:"100vh"},l.a.createElement(b.a,{title:a.frontmatter.title,description:a.frontmatter.description}),l.a.createElement(g.a,null),l.a.createElement(c.i,{flex:"1 1 auto",flexDirection:"row"},l.a.createElement(c.e,{display:["none",null,null,"block"]},l.a.createElement(m.a,null)),l.a.createElement(i.a,null,l.a.createElement(j,null,a.frontmatter.title),a.frontmatter.status?l.a.createElement(c.e,{mb:4},l.a.createElement(o.a,{status:a.frontmatter.status})):null,a.tableOfContents.items?l.a.createElement(O,{items:a.tableOfContents.items}):null,t,a.editUrl?l.a.createElement(c.e,{my:6},l.a.createElement(c.k,{href:a.editUrl},l.a.createElement(c.o,{icon:r.e,mr:2}),"Edit this page on GitHub")):null)))}}}]);
//# sourceMappingURL=component---content-usage-accounts-mdx-ece573f7cc75104def55.js.map
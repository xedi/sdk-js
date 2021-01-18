(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"5G8v":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a("8o2o"),b=(a("q1tI"),a("7ljp")),r=a("HjAN"),s=a("FH/S"),c=a("oW+c"),l=a("wITj"),i={},g={_frontmatter:i},o=r.a;function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)(o,Object.assign({},g,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",null,"Introduction"),Object(b.b)("p",null,"The Businesses API allows you to create and access information about businesses."),Object(b.b)("h2",null,"Usage"),Object(b.b)(c.k,{alignItems:"center",mdxType:"Flex"},Object(b.b)(l.c,{mdxType:"H3"},"List"),Object(b.b)(c.e,{mx:"auto",mdxType:"Box"}),Object(b.b)(c.n,{bg:"#A575FF",mdxType:"Label"},"Pagination Enabled")),Object(b.b)("p",null,"List all Businesses that the user has the authority to see."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"pageNumber"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Number"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"1")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"const businesses = await Xedi.Businesses.list();\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Response")),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "current_page": 1,\n    "data": [\n        {\n            "_id": "c52abc50-b499-11ea-a48c-0100f1a50c6e",\n            "business_name": "Avengers",\n            "address_1": "TOP_SECRET",\n            "address_2": "TOP_SECRET",\n            "address_3": "New York",\n            "address_4": null,\n            "post_code": "TOP_SECRET",\n            "currency": "usd",\n            "vat_code": "123",\n            "invoice_name": "123",\n            "country_code": "USA",\n            "contact_name": "Anthony Stark",\n            "contact_email": "t.stark@avengers.org",\n            "contact_no": "(970) 517-1743 x67916",\n            "website": "https://avengers.org",\n            "logo": "https://assets.avengers.org/images/logo.png",\n            "requires_gln": false,\n            "gs1_prefix": "030",\n            "slug": "avengers",\n            "external": false,\n            "public": true\n        },\n        {\n            "_id": "d1dfb302-b53d-11ea-95d2-0100f1a50c6e",\n            "business_name": "Hydra",\n            "address_1": "EVERYWHERE",\n            "address_2": "EVERYWHERE",\n            "address_3": "EVERYWHERE",\n            "address_4": null,\n            "post_code": "EVERYWHERE",\n            "currency": "usd",\n            "vat_code": "456",\n            "invoice_name": "456",\n            "country_code": "USA",\n            "contact_name": null,\n            "contact_email": null,\n            "contact_no": null,\n            "website": null,\n            "logo": null,\n            "requires_gln": false,\n            "gs1_prefix": "030",\n            "slug": "hydra",\n            "external": false,\n            "public": false\n        }\n    ],\n    "first_page_url": "https://api.xedi.com/1/businesses?page=1",\n    "from": 1,\n    "last_page": "https://api.xedi.com/1/businesses?page=1",\n    "last_page_url": null,\n    "next_page_url": null,\n    "path": "https://api.xedi.com/1/businesses",\n    "per_page": 15,\n    "prev_page_url": null,\n    "to": 2,\n    "total": 2\n}\n')),Object(b.b)("h3",null,"Get"),Object(b.b)("p",null,"Get a Business by ID."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"business_id"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"UUID"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(b.b)(s.a,{color:"green.5",mdxType:"CheckIcon"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"c52abc50-b499-11ea-a48c-0100f1a50c6e")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"const business = await Xedi.Businsses.get('c52abc50-b499-11ea-a48c-0100f1a50c6e');\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Response")),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "_id": "c52abc50-b499-11ea-a48c-0100f1a50c6e",\n    "business_name": "Avengers",\n    "address_1": "TOP_SECRET",\n    "address_2": "TOP_SECRET",\n    "address_3": "New York",\n    "address_4": null,\n    "post_code": "TOP_SECRET",\n    "currency": "usd",\n    "vat_code": "123",\n    "invoice_name": "123",\n    "country_code": "USA",\n    "contact_name": "Anthony Stark",\n    "contact_email": "t.stark@avengers.org",\n    "contact_no": "(970) 517-1743 x67916",\n    "website": "https://avengers.org",\n    "logo": "https://assets.avengers.org/images/logo.png",\n    "requires_gln": false,\n    "gs1_prefix": "030",\n    "slug": "avengers",\n    "external": false,\n    "public": true\n}\n')),Object(b.b)("h3",null,"Create"),Object(b.b)("p",null,"Create a Business."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"business_name"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(b.b)(s.a,{color:"green.5",mdxType:"CheckIcon"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Microsoft")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"address_1"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Microsoft Corporation")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"address_2"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"One Microsoft Way")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"address_3"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Redmond")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"address_4"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"WA")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"post_code"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"98052-6399")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"currency"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String (ISO-4217)"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"usd")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"vat_code"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"91-1144442")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"invoice_name"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"MSFT")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"country_code"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String (ISO-3166)"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(b.b)(s.a,{color:"green.5",mdxType:"CheckIcon"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"USA")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"contact_name"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Satya Nadella")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"contact_email"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object.assign({parentName:"td"},{href:"mailto:s.nadella@microsoft.com"}),"s.nadella@microsoft.com"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"contact_no"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"(425) 882-8080")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"website"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object.assign({parentName:"td"},{href:"https://www.microsoft.com"}),"https://www.microsoft.com"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"logo"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object.assign({parentName:"td"},{href:"https://assets.microsoft.com/logo.png"}),"https://assets.microsoft.com/logo.png"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"requires_gln"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Boolean"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"true")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"gs1_prefix"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Number"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"030")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"slug"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"MSFT")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"external"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Boolean"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"true")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"public"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Boolean"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"true")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'const business = Xedi.Businesses.create({\n    business_name: "Microsoft",\n    address_1: "Microsof Corporation",\n    address_2: "One Microsoft Way",\n    address_3: "Redmond",\n    address_4: "WA",\n    post_code: "98052-6399",\n    currency: "usd",\n    vat_code: "91-1144442",\n    invoice_name: "MSFT",\n    country_code: "USA",\n    contact_name: "Satya Nadella",\n    contact_email: "s.nadella@microsoft.com",\n    contact_no: "(425) 882-8080",\n    website: "https://www.microsoft.com",\n    logo: "https://assets.microsoft.com/logo.png",\n    requires_gln: false,\n    gs1_prefix: 030,\n    slug: "MSFT",\n    external: false,\n    public: true,\n});\n')),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Response")),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "_id": "3f580f3e-b542-11ea-a254-0100f1a50c6e",\n    "business_name": "Microsoft",\n    "address_1": "Microsof Corporation",\n    "address_2": "One Microsoft Way",\n    "address_3": "Redmond",\n    "address_4": "WA",\n    "post_code": "98052-6399",\n    "currency": "usd",\n    "vat_code": "91-1144442",\n    "invoice_name": "MSFT",\n    "country_code": "USA",\n    "contact_name": "Satya Nadella",\n    "contact_email": "s.nadella@microsoft.com",\n    "contact_no": "(425) 882-8080",\n    "website": "https://www.microsoft.com",\n    "logo": "https://assets.microsoft.com/logo.png",\n    "requires_gln": false,\n    "gs1_prefix": 030,\n    "slug": "MSFT",\n    "external": false,\n    "public": true,\n    "created_at": "2020-06-23 12:10:16",\n    "updated_at": null\n}\n')),Object(b.b)(c.k,{alignItems:"center",mdxType:"Flex"},Object(b.b)(l.c,{mdxType:"H3"},"Get by User"),Object(b.b)(c.e,{mx:"auto",mdxType:"Box"}),Object(b.b)(c.n,{bg:"#A575FF",mdxType:"Label"},"Pagination Enabled")),Object(b.b)("p",null,"List all the businesses a particular user is associated with."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"user_id"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"UUID"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(b.b)(s.a,{color:"green.5",mdxType:"CheckIcon"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"f3ce14b8-b542-11ea-aded-01002da17977")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"pageNumber"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"number"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"1")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"const businesses = await Xedi.Businesses.getByUser('f3ce14b8-b542-11ea-aded-01002da17977');\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Response")),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "current_page": 1,\n    "data": [\n        {\n            "_id": "c52abc50-b499-11ea-a48c-0100f1a50c6e",\n            "business_name": "Avengers",\n            "address_1": "TOP_SECRET",\n            "address_2": "TOP_SECRET",\n            "address_3": "New York",\n            "address_4": null,\n            "post_code": "TOP_SECRET",\n            "currency": "usd",\n            "vat_code": "123",\n            "invoice_name": "123",\n            "country_code": "USA",\n            "contact_name": "Anthony Stark",\n            "contact_email": "t.stark@avengers.org",\n            "contact_no": "(970) 517-1743 x67916",\n            "website": "https://avengers.org",\n            "logo": "https://assets.avengers.org/images/logo.png",\n            "requires_gln": false,\n            "gs1_prefix": "030",\n            "slug": "avengers",\n            "external": false,\n            "public": true\n        }\n    ],\n    "first_page_url": "https://api.xedi.com/1/businesses?page=1",\n    "from": 1,\n    "last_page": "https://api.xedi.com/1/businesses?page=1",\n    "last_page_url": null,\n    "next_page_url": null,\n    "path": "https://api.xedi.com/1/businesses",\n    "per_page": 15,\n    "prev_page_url": null,\n    "to": 1,\n    "total": 1\n}\n')),Object(b.b)(c.k,{alignItems:"center",mdxType:"Flex"},Object(b.b)(l.c,{mdxType:"H3"},"Remove User From Business"),Object(b.b)(c.e,{mx:"auto",mdxType:"Box"})),Object(b.b)("p",null,"Remove a user from a business, by deleting their businessUser data"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"business_uuid"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"UUID"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(b.b)(s.a,{color:"green.5",mdxType:"CheckIcon"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"f3ce14b8-b542-11ea-aded-01002da17977")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"user_id"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"UUID"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(b.b)(s.a,{color:"green.5",mdxType:"CheckIcon"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"c52abc50-b499-11ea-a48c-0100f1a50c6e")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"await Xedi.Businesses.removeUserFromBusiness('f3ce14b8-b542-11ea-aded-01002da17977', 'c52abc50-b499-11ea-a48c-0100f1a50c6e');\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Response")),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "data": []\n}\n')))}p.isMDXComponent=!0},HjAN:function(e,t,a){"use strict";var n=a("vOnD"),b=a("oW+c"),r=a("FH/S"),s=a("q1tI"),c=a.n(s),l=a("8gyx"),i=a("ESUP"),g=a("oo4l"),o=a("Evc+"),p=a("og4h"),O=a("sqpL"),j=Object(n.f)(b.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function m(e){var t=e.items,a=e.depth;return c.a.createElement(j,{as:"ul",m:0,p:0},t.map((function(e){return c.a.createElement(b.e,{as:"li",key:e.url,pl:a>0?3:0},c.a.createElement(b.o,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?c.a.createElement(m,{items:e.items,depth:a+1}):null)})))}m.defaultProps={depth:0};var d=m,u=Object(n.f)(b.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),N=Object(n.f)(b.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),f=Object(n.f)(b.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),_=Object(n.f)(b.p).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),y=Object(n.f)(b.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=a.frontmatter,s=n.title,j=n.description,m=n.status,h=n.source,x=n.additionalContributors,E=void 0===x?[]:x;return c.a.createElement(b.k,{flexDirection:"column",minHeight:"100vh"},c.a.createElement(l.a,{title:s,description:j}),c.a.createElement(i.b,null),c.a.createElement(u,{flex:"1 1 auto",flexDirection:"row"},c.a.createElement(b.e,{display:["none",null,null,"block"]},c.a.createElement(o.a,null)),c.a.createElement(N,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},c.a.createElement(f,{border:0,borderBottom:1,borderRadius:0,pb:2},c.a.createElement(b.m,null,s)),a.tableOfContents.items?c.a.createElement(_,{display:["none",null,"block"],position:"sticky",top:i.a+24,maxHeight:"calc(100vh - "+i.a+"px - 24px)"},c.a.createElement(b.u,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),c.a.createElement(d,{items:a.tableOfContents.items})):null,c.a.createElement(y,null,m||h?c.a.createElement(b.k,{mb:3,alignItems:"center"},m?c.a.createElement(O.a,{status:m}):null,c.a.createElement(b.e,{mx:"auto"}),h?c.a.createElement(p.a,{href:h}):null):null,a.tableOfContents.items?c.a.createElement(b.e,{display:["block",null,"none"],mb:3},c.a.createElement(b.h,null,(function(e){var t=e.open;return c.a.createElement(c.a.Fragment,null,c.a.createElement(b.u,{as:"summary",fontWeight:"bold"},t?c.a.createElement(r.b,{mr:2}):c.a.createElement(r.c,{mr:2}),"Table of contents"),c.a.createElement(b.e,{pt:1},c.a.createElement(d,{items:a.tableOfContents.items})))}))):null,t,c.a.createElement(g.a,{editUrl:a.editUrl,contributors:a.contributors.concat(E.map((function(e){return{login:e}})))})))))}}}]);
//# sourceMappingURL=component---content-usage-businesses-mdx-af9456caebb165bbb24a.js.map
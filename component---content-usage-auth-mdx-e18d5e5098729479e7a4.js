(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{833:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return l}),n.d(t,"default",function(){return p});n(10),n(11),n(8),n(13),n(18),n(0);var a=n(118),c=n(853),s=n(19),r=n(32),i=n(9);var l={},b={_frontmatter:l},o=c.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,c={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,["components"]);return Object(a.b)(o,Object.assign({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",null,"Introduction"),Object(a.b)("p",null,"The Auth api controls access to the system. Read more about our ",Object(a.b)(s.Link,{to:"/architecture/authentication",mdxType:"Link"},"authentication architecture here"),"."),Object(a.b)("h1",null,"Events"),Object(a.b)("p",null,"This service emits events. To learn more about events ",Object(a.b)(s.Link,{to:"/architecture/events",mdxType:"Link"},"here"),"."),Object(a.b)("h2",null,"auth_updated"),Object(a.b)("p",null,"When the authentication state changes; ",Object(a.b)("inlineCode",{parentName:"p"},"auth_updated")," is emitted."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "method": "switchContexts",\n    "data": {\n        "user": {\n            "_id": "92ac7274-9369-11ea-9521-01002da17977",\n            "email": "t.stark@avengers.org",\n            "first_name": "Anthony",\n            "last_name": "Stark",\n            "job_title": "Iron Man",\n            "contact_no": "(970) 517-1743 x67916",\n            "avatar": "https://assets.avengers.org/images/iron_man.png",\n            "created_at": "2020-05-11 10:27:03",\n            "updated_at": "2020-05-11 10:30:14",\n            "is_active": 1\n        },\n        "business": {\n            "_id": "c52abc50-b499-11ea-a48c-0100f1a50c6e",\n            "business_name": "Avengers",\n            "address_1": "TOP_SECRET",\n            "address_2": "TOP_SECRET",\n            "address_3": "New York",\n            "address_4": null,\n            "post_code": "TOP_SECRET",\n            "currency": "usd",\n            "vat_code": "123",\n            "invoice_name": "123",\n            "country_code": "USA",\n            "contact_name": "Anthony Stark",\n            "contact_email": "t.stark@avengers.org",\n            "contact_no": "(970) 517-1743 x67916",\n            "website": "https://avengers.org",\n            "logo": "https://assets.avengers.org/images/logo.png",\n            "requires_gln": false,\n            "gs1_prefix": "123",\n            "slug": "avengers",\n            "external": false,\n            "public": true\n        },\n        "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImlzcyI6Imh0dHBzOi8vYXBpLnhlZGkuY29tIiwiYXVkIjoiaHR0cHM6Ly9hcGkueGVkaS5jb20ifQ.eyJ1c2VyX3V1aWQiOiI5MmFjNzI3NC05MzY5LTExZWEtOTUyMS0wMTAwMmRhMTc5NzciLCJidXNpbmVzc191dWlkIjoiYzUyYWJjNTAtYjQ5OS0xMWVhLWE0OGMtMDEwMGYxYTUwYzZlIiwiZXhwIjoiMTU5MjkzMDY0MCJ9.e4uj4pCw3qDZqrmWL3ylhThtIEWNAnVnwQOUz67sGys",\n        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImlzcyI6Imh0dHBzOi8vYXBpLnhlZGkuY29tIiwiYXVkIjoiaHR0cHM6Ly9hcGkueGVkaS5jb20ifQ.eyJ1c2VyX3V1aWQiOiI5MmFjNzI3NC05MzY5LTExZWEtOTUyMS0wMTAwMmRhMTc5NzciLCJidXNpbmVzc191dWlkIjoiYzUyYWJjNTAtYjQ5OS0xMWVhLWE0OGMtMDEwMGYxYTUwYzZlIiwiZXhwIjoiMTU5Mjg0MzcwMCJ9.Yapd6upCu_bFHP983WXdbtz5kg2L6lcz_tVp2cSTuOM"\n    }\n}\n')),Object(a.b)("h2",null,"auth_deleted"),Object(a.b)("p",null,"When the authentication state is revoked; ",Object(a.b)("inlineCode",{parentName:"p"},"auth_deleted")," is emitted."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "method": "logout"\n}\n')),Object(a.b)("h2",null,"claim_required"),Object(a.b)("p",null,"When an API reports that a specified claim is required to access it; ",Object(a.b)("inlineCode",{parentName:"p"},"claim_required")," is emitted."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "claim": "billing:manage"\n}\n')),Object(a.b)("h2",null,"claim_granted"),Object(a.b)("p",null,"When a user is granted a claim by successfully confirming their credentials; ",Object(a.b)("inlineCode",{parentName:"p"},"claim_granted")," is emitted."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "claim": "billing:manage"\n}\n')),Object(a.b)("h2",null,"claim_rejected"),Object(a.b)("p",null,"When a user's attempt to confirm their credentials fails; ",Object(a.b)("inlineCode",{parentName:"p"},"claim_rejected")," is emitted."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "code": 401,\n  "message": "Challenge Attempt Failed.",\n  "attempts": 1,\n  "max_attempts": 5,\n  "reason": {\n    "password": [\n      "Password not valid"\n    ]\n  }\n}\n')),Object(a.b)(r.a,{mdxType:"Caption"},"Invalid credentials"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "code": 429,\n  "message": "Too many challenge attempts. You may retry 4 minutes, 57 seconds from now.",\n  "attempts": 5,\n  "remaining_ttl": 298\n}\n')),Object(a.b)(r.a,{mdxType:"Caption"},"Too many challenge attempts."),Object(a.b)("h1",null,"Properties"),Object(a.b)("h2",null,"business"),Object(a.b)("p",null,"Gets the current business context."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "_id": "c52abc50-b499-11ea-a48c-0100f1a50c6e",\n    "business_name": "Avengers",\n    "address_1": "TOP_SECRET",\n    "address_2": "TOP_SECRET",\n    "address_3": "New York",\n    "address_4": null,\n    "post_code": "TOP_SECRET",\n    "currency": "usd",\n    "vat_code": "123",\n    "invoice_name": "123",\n    "country_code": "USA",\n    "contact_name": "Anthony Stark",\n    "contact_email": "t.stark@avengers.org",\n    "contact_no": "(970) 517-1743 x67916",\n    "website": "https://avengers.org",\n    "logo": "https://assets.avengers.org/images/logo.png",\n    "requires_gln": false,\n    "gs1_prefix": "123",\n    "slug": "avengers",\n    "external": false,\n    "public": true\n}\n')),Object(a.b)("h2",null,"user"),Object(a.b)("p",null,"Gets the logged in user."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "_id": "92ac7274-9369-11ea-9521-01002da17977",\n    "email": "t.stark@avengers.org",\n    "first_name": "Anthony",\n    "last_name": "Stark",\n    "job_title": "Iron Man",\n    "contact_no": "(970) 517-1743 x67916",\n    "avatar": "https://assets.avengers.org/images/iron_man.png",\n    "created_at": "2020-05-11 10:27:03",\n    "updated_at": "2020-05-11 10:30:14",\n    "is_active": 1\n}\n')),Object(a.b)("h1",null,"Usage"),Object(a.b)("h2",null,"login"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"email"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(a.b)(i.a,{color:"green.5",mdxType:"CheckIcon"})),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),Object(a.b)("a",Object.assign({parentName:"td"},{href:"mailto:t.stark@avengers.org"}),"t.stark@avengers.org"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"password"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(a.b)(i.a,{color:"green.5",mdxType:"CheckIcon"})),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"izJ7Y0MBwcJ8")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Usage")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"await Xedi.Auth.login('t.stark@avengers.org', 'izJ7Y0MBwcJ8');\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Events")),Object(a.b)("p",null,"Emits ",Object(a.b)("inlineCode",{parentName:"p"},"auth_updated")," on successful authentication."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Response")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "method": "switchContexts",\n    "data": {\n        "user": {\n            "_id": "92ac7274-9369-11ea-9521-01002da17977",\n            "email": "t.stark@avengers.org",\n            "first_name": "Anthony",\n            "last_name": "Stark",\n            "job_title": "Iron Man",\n            "contact_no": "(970) 517-1743 x67916",\n            "avatar": "https://assets.avengers.org/images/iron_man.png",\n            "created_at": "2020-05-11 10:27:03",\n            "updated_at": "2020-05-11 10:30:14",\n            "is_active": 1\n        },\n        "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImlzcyI6Imh0dHBzOi8vYXBpLnhlZGkuY29tIiwiYXVkIjoiaHR0cHM6Ly9hcGkueGVkaS5jb20ifQ.eyJ1c2VyX3V1aWQiOiI5MmFjNzI3NC05MzY5LTExZWEtOTUyMS0wMTAwMmRhMTc5NzciLCJleHAiOiIxNTkyOTMwNjQwIn0.i1ClUUwYB-O9Q1u-u2J9bCu58YFdGJ4ZC8yXl9CGTsg",\n        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImlzcyI6Imh0dHBzOi8vYXBpLnhlZGkuY29tIiwiYXVkIjoiaHR0cHM6Ly9hcGkueGVkaS5jb20ifQ.eyJ1c2VyX3V1aWQiOiI5MmFjNzI3NC05MzY5LTExZWEtOTUyMS0wMTAwMmRhMTc5NzcifQ.zct6dNkNq8QMSvgq4fcYLRyXZTIhVU3QJ2R6oSZorFU"\n    }\n}\n')),Object(a.b)("h2",null,"withToken"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"refreshToken"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(a.b)(i.a,{color:"green.5",mdxType:"CheckIcon"})),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImlzcyI6Imh0dHBzOi8vYXBpLnhlZGkuY29tIiwiYXVkIjoiaHR0cHM6Ly9hcGkueGVkaS5jb20ifQ.eyJ1c2VyX3V1aWQiOiI5MmFjNzI3NC05MzY5LTExZWEtOTUyMS0wMTAwMmRhMTc5NzciLCJleHAiOiIxNTkyOTMwNjQwIn0.i1ClUUwYB-O9Q1u-u2J9bCu58YFdGJ4ZC8yXl9CGTsg")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Usage")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),'const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImlzcyI6Imh0dHBzOi8vYXBpLnhlZGkuY29tIiwiYXVkIjoiaHR0cHM6Ly9hcGkueGVkaS5jb20ifQ.eyJ1c2VyX3V1aWQiOiI5MmFjNzI3NC05MzY5LTExZWEtOTUyMS0wMTAwMmRhMTc5NzciLCJleHAiOiIxNTkyOTMwNjQwIn0.i1ClUUwYB-O9Q1u-u2J9bCu58YFdGJ4ZC8yXl9CGTsg";\n\nawait Xedi.Auth.withToken(token);\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Events")),Object(a.b)("p",null,"Emits ",Object(a.b)("inlineCode",{parentName:"p"},"auth_updated")," on successful authentication."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Response")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "method": "switchContexts",\n    "data": {\n        "user": {\n            "_id": "92ac7274-9369-11ea-9521-01002da17977",\n            "email": "t.stark@avengers.org",\n            "first_name": "Anthony",\n            "last_name": "Stark",\n            "job_title": "Iron Man",\n            "contact_no": "(970) 517-1743 x67916",\n            "avatar": "https://assets.avengers.org/images/iron_man.png",\n            "created_at": "2020-05-11 10:27:03",\n            "updated_at": "2020-05-11 10:30:14",\n            "is_active": 1\n        },\n        "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImlzcyI6Imh0dHBzOi8vYXBpLnhlZGkuY29tIiwiYXVkIjoiaHR0cHM6Ly9hcGkueGVkaS5jb20ifQ.eyJ1c2VyX3V1aWQiOiI5MmFjNzI3NC05MzY5LTExZWEtOTUyMS0wMTAwMmRhMTc5NzciLCJleHAiOiIxNTkyOTMwNjQwIn0.i1ClUUwYB-O9Q1u-u2J9bCu58YFdGJ4ZC8yXl9CGTsg",\n        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImlzcyI6Imh0dHBzOi8vYXBpLnhlZGkuY29tIiwiYXVkIjoiaHR0cHM6Ly9hcGkueGVkaS5jb20ifQ.eyJ1c2VyX3V1aWQiOiI5MmFjNzI3NC05MzY5LTExZWEtOTUyMS0wMTAwMmRhMTc5NzciLCJleHAiOiIxNTkyODQzNzAwIn0.OQcWEyCGNz_oNQGe0BAOgOq4GwIOXH3kevoCpj7sp5w"\n    }\n}\n')),Object(a.b)("h2",null,"refreshAccessToken"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"null")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Usage")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"await Xedi.Auth.refreshAccessToken();\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Events")),Object(a.b)("p",null,"Emits ",Object(a.b)("inlineCode",{parentName:"p"},"auth_updated")," on successful renewal of the authentication state."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Response")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),'{\n    "method": "switchContexts",\n    "data": {\n        "user": {\n            "_id": "92ac7274-9369-11ea-9521-01002da17977",\n            "email": "t.stark@avengers.org",\n            "first_name": "Anthony",\n            "last_name": "Stark",\n            "job_title": "Iron Man",\n            "contact_no": "(970) 517-1743 x67916",\n            "avatar": "https://assets.avengers.org/images/iron_man.png",\n            "created_at": "2020-05-11 10:27:03",\n            "updated_at": "2020-05-11 10:30:14",\n            "is_active": 1\n        },\n        "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImlzcyI6Imh0dHBzOi8vYXBpLnhlZGkuY29tIiwiYXVkIjoiaHR0cHM6Ly9hcGkueGVkaS5jb20ifQ.eyJ1c2VyX3V1aWQiOiI5MmFjNzI3NC05MzY5LTExZWEtOTUyMS0wMTAwMmRhMTc5NzciLCJleHAiOiIxNTkyOTMwNjQwIn0.i1ClUUwYB-O9Q1u-u2J9bCu58YFdGJ4ZC8yXl9CGTsg",\n        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImlzcyI6Imh0dHBzOi8vYXBpLnhlZGkuY29tIiwiYXVkIjoiaHR0cHM6Ly9hcGkueGVkaS5jb20ifQ.eyJ1c2VyX3V1aWQiOiI5MmFjNzI3NC05MzY5LTExZWEtOTUyMS0wMTAwMmRhMTc5NzciLCJleHAiOiIxNTkyODQzNzAwIn0.OQcWEyCGNz_oNQGe0BAOgOq4GwIOXH3kevoCpj7sp5w"\n    }\n}\n')),Object(a.b)("h2",null,"switchContexts"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"business_uuid"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(a.b)(i.a,{color:"green.5",mdxType:"CheckIcon"})),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"92ac7274-9369-11ea-9521-01002da17977")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Usage")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"await Xedi.Auth.switchContexts('92ac7274-9369-11ea-9521-01002da17977');\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Events")),Object(a.b)("p",null,"Emits ",Object(a.b)("inlineCode",{parentName:"p"},"auth_updated")," on successful updating of the authentication context."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Response")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "method": "switchContexts",\n    "data": {\n        "user": {\n            "_id": "92ac7274-9369-11ea-9521-01002da17977",\n            "email": "t.stark@avengers.org",\n            "first_name": "Anthony",\n            "last_name": "Stark",\n            "job_title": "Iron Man",\n            "contact_no": "(970) 517-1743 x67916",\n            "avatar": "https://assets.avengers.org/images/iron_man.png",\n            "created_at": "2020-05-11 10:27:03",\n            "updated_at": "2020-05-11 10:30:14",\n            "is_active": 1\n        },\n        "business": {\n            "_id": "c52abc50-b499-11ea-a48c-0100f1a50c6e",\n            "business_name": "Avengers",\n            "address_1": "TOP_SECRET",\n            "address_2": "TOP_SECRET",\n            "address_3": "New York",\n            "address_4": null,\n            "post_code": "TOP_SECRET",\n            "currency": "usd",\n            "vat_code": "123",\n            "invoice_name": "123",\n            "country_code": "USA",\n            "contact_name": "Anthony Stark",\n            "contact_email": "t.stark@avengers.org",\n            "contact_no": "(970) 517-1743 x67916",\n            "website": "https://avengers.org",\n            "logo": "https://assets.avengers.org/images/logo.png",\n            "requires_gln": false,\n            "gs1_prefix": "123",\n            "slug": "avengers",\n            "external": false,\n            "public": true\n        },\n        "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImlzcyI6Imh0dHBzOi8vYXBpLnhlZGkuY29tIiwiYXVkIjoiaHR0cHM6Ly9hcGkueGVkaS5jb20ifQ.eyJ1c2VyX3V1aWQiOiI5MmFjNzI3NC05MzY5LTExZWEtOTUyMS0wMTAwMmRhMTc5NzciLCJidXNpbmVzc191dWlkIjoiYzUyYWJjNTAtYjQ5OS0xMWVhLWE0OGMtMDEwMGYxYTUwYzZlIiwiZXhwIjoiMTU5MjkzMDY0MCJ9.e4uj4pCw3qDZqrmWL3ylhThtIEWNAnVnwQOUz67sGys",\n        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImlzcyI6Imh0dHBzOi8vYXBpLnhlZGkuY29tIiwiYXVkIjoiaHR0cHM6Ly9hcGkueGVkaS5jb20ifQ.eyJ1c2VyX3V1aWQiOiI5MmFjNzI3NC05MzY5LTExZWEtOTUyMS0wMTAwMmRhMTc5NzciLCJidXNpbmVzc191dWlkIjoiYzUyYWJjNTAtYjQ5OS0xMWVhLWE0OGMtMDEwMGYxYTUwYzZlIiwiZXhwIjoiMTU5Mjg0MzcwMCJ9.Yapd6upCu_bFHP983WXdbtz5kg2L6lcz_tVp2cSTuOM"\n    }\n}\n')),Object(a.b)("h2",null,"requestClaim"),Object(a.b)("p",null,"Request a claim be added to your tokens by confirming your credentials."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"claim"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(a.b)(i.a,{color:"green.5",mdxType:"CheckIcon"})),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"billing:manage")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"password"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(a.b)(i.a,{color:"green.5",mdxType:"CheckIcon"})),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"super-secret-password")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Events")),Object(a.b)("p",null,"Emits ",Object(a.b)("inlineCode",{parentName:"p"},"auth_updated")," and ",Object(a.b)("inlineCode",{parentName:"p"},"claim_granted")," on success.\nEmits ",Object(a.b)("inlineCode",{parentName:"p"},"claim_rejected")," on failure."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Usage")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"Xedi.Auth.requestClaim('billing:manage', 'super-secret-password');\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Response")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "user": {\n        "_id": "92ac7274-9369-11ea-9521-01002da17977",\n        "email": "t.stark@avengers.org",\n        "first_name": "Anthony",\n        "last_name": "Stark",\n        "job_title": "Iron Man",\n        "contact_no": "(970) 517-1743 x67916",\n        "avatar": "https://assets.avengers.org/images/iron_man.png",\n        "created_at": "2020-05-11 10:27:03",\n        "updated_at": "2020-05-11 10:30:14",\n        "is_active": 1\n    },\n    "business": {\n        "_id": "c52abc50-b499-11ea-a48c-0100f1a50c6e",\n        "business_name": "Avengers",\n        "address_1": "TOP_SECRET",\n        "address_2": "TOP_SECRET",\n        "address_3": "New York",\n        "address_4": null,\n        "post_code": "TOP_SECRET",\n        "currency": "usd",\n        "vat_code": "123",\n        "invoice_name": "123",\n        "country_code": "USA",\n        "contact_name": "Anthony Stark",\n        "contact_email": "t.stark@avengers.org",\n        "contact_no": "(970) 517-1743 x67916",\n        "website": "https://avengers.org",\n        "logo": "https://assets.avengers.org/images/logo.png",\n        "requires_gln": false,\n        "gs1_prefix": "123",\n        "slug": "avengers",\n        "external": false,\n        "public": true\n    },\n    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImlzcyI6Imh0dHBzOi8vYXBpLnhlZGkuY29tIiwiYXVkIjoiaHR0cHM6Ly9hcGkueGVkaS5jb20ifQ.eyJ1c2VyX3V1aWQiOiI5MmFjNzI3NC05MzY5LTExZWEtOTUyMS0wMTAwMmRhMTc5NzciLCJidXNpbmVzc191dWlkIjoiYzUyYWJjNTAtYjQ5OS0xMWVhLWE0OGMtMDEwMGYxYTUwYzZlIiwiZXhwIjoiMTU5MjkzMDY0MCIsImNsYWltcyI6eyJiaWxsaW5nOm1hbmFnZSI6ImV5SnBjM01pT2lKb2RIUndPaTh2WVhCcExXZGhkR1YzWVhrdWJHOWpZV3hvYjNOMElpd2lZWFZrSWpvaWFIUjBjRG92TDJGd2FTMW5ZWFJsZDJGNUxteHZZMkZzYUc5emRDSXNJblI1Y0NJNklrcFhWQ0lzSW1Gc1p5STZJa2hUTWpVMkluMC5leUpqYkdGcGJTSTZJbUpwYkd4cGJtYzZiV0Z1WVdkbElpd2lkSGx3WlNJNkltTnNZV2x0SWl3aVpYaHdJam94TlRrMk1URXdOekk1ZlEuQmlkZ29CbTJ5NkZ1aXM3WTc3VVVwYndPdlJ5YkFVY2tBZ2ZWWm5KNHRFMCJ9fQ.2RfsMr_b_oeY3eRwr5iMJkKrcJWN_cAAweFdTmqRj3w",\n    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImlzcyI6Imh0dHBzOi8vYXBpLnhlZGkuY29tIiwiYXVkIjoiaHR0cHM6Ly9hcGkueGVkaS5jb20ifQ.eyJ1c2VyX3V1aWQiOiI5MmFjNzI3NC05MzY5LTExZWEtOTUyMS0wMTAwMmRhMTc5NzciLCJidXNpbmVzc191dWlkIjoiYzUyYWJjNTAtYjQ5OS0xMWVhLWE0OGMtMDEwMGYxYTUwYzZlIiwiZXhwIjoiMTU5Mjg0MzcwMCIsImNsYWltcyI6eyJiaWxsaW5nOm1hbmFnZSI6ImV5SnBjM01pT2lKb2RIUndPaTh2WVhCcExXZGhkR1YzWVhrdWJHOWpZV3hvYjNOMElpd2lZWFZrSWpvaWFIUjBjRG92TDJGd2FTMW5ZWFJsZDJGNUxteHZZMkZzYUc5emRDSXNJblI1Y0NJNklrcFhWQ0lzSW1Gc1p5STZJa2hUTWpVMkluMC5leUpqYkdGcGJTSTZJbUpwYkd4cGJtYzZiV0Z1WVdkbElpd2lkSGx3WlNJNkltTnNZV2x0SWl3aVpYaHdJam94TlRrMk1URXdOekk1ZlEuQmlkZ29CbTJ5NkZ1aXM3WTc3VVVwYndPdlJ5YkFVY2tBZ2ZWWm5KNHRFMCJ9fQ.UgLS557rCWbLxQMy_TcidK-IMymyKxMMcXSAOV3M-H8"\n}\n')),Object(a.b)("h2",null,"logout"),Object(a.b)("p",null,"Perminently revoke your refresh token."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"null")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Usage")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"await Xedi.Auth.logout();\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Events")),Object(a.b)("p",null,"Emits ",Object(a.b)("inlineCode",{parentName:"p"},"auth_deleted")," on successful revocation of the refresh token."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "method": "logout"\n}\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Response")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"null")))}p.isMDXComponent=!0},853:function(e,t,n){"use strict";var a=n(2),c=n(4),s=n(9),r=n(0),i=n.n(r),l=n(130),b=n(76),o=n(199),p=n(131),m=n(197),O=n(198),j=Object(a.f)(c.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function d(e){var t=e.items,n=e.depth;return i.a.createElement(j,{as:"ul",m:0,p:0},t.map(function(e){return i.a.createElement(c.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(c.o,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(d,{items:e.items,depth:n+1}):null)}))}d.defaultProps={depth:0};var u=d,g=Object(a.f)(c.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),h=Object(a.f)(c.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),I=Object(a.f)(c.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),N=Object(a.f)(c.p).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),y=Object(a.f)(c.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,r=a.title,j=a.description,d=a.status,k=a.source,_=a.additionalContributors,M=void 0===_?[]:_;return i.a.createElement(c.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(l.a,{title:r,description:j}),i.a.createElement(b.b,null),i.a.createElement(g,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(c.e,{display:["none",null,null,"block"]},i.a.createElement(p.a,null)),i.a.createElement(h,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(I,{border:0,borderBottom:1,borderRadius:0,pb:2},i.a.createElement(c.m,null,r)),n.tableOfContents.items?i.a.createElement(N,{display:["none",null,"block"],position:"sticky",top:b.a+24,maxHeight:"calc(100vh - "+b.a+"px - 24px)"},i.a.createElement(c.u,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(u,{items:n.tableOfContents.items})):null,i.a.createElement(y,null,d||k?i.a.createElement(c.k,{mb:3,alignItems:"center"},d?i.a.createElement(O.a,{status:d}):null,i.a.createElement(c.e,{mx:"auto"}),k?i.a.createElement(m.a,{href:k}):null):null,n.tableOfContents.items?i.a.createElement(c.e,{display:["block",null,"none"],mb:3},i.a.createElement(c.h,null,function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.u,{as:"summary",fontWeight:"bold"},t?i.a.createElement(s.b,{mr:2}):i.a.createElement(s.c,{mr:2}),"Table of contents"),i.a.createElement(c.e,{pt:1},i.a.createElement(u,{items:n.tableOfContents.items})))})):null,t,i.a.createElement(o.a,{editUrl:n.editUrl,contributors:n.contributors.concat(M.map(function(e){return{login:e}}))})))))}}}]);
//# sourceMappingURL=component---content-usage-auth-mdx-e18d5e5098729479e7a4.js.map
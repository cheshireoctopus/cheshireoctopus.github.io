(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{FWeN:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return s}));var n=a("q1tI"),r=a.n(n),l=a("Bl7J"),o=a("vrFN"),i=a("LyPz"),c=a("oFNA"),s="480602147";t.default=function(e){var t=e.data,a=e.location,n=t.site.siteMetadata.title;return r.a.createElement(l.a,{location:a,title:n},r.a.createElement(o.a,{title:"Notes"}),r.a.createElement(c.a,null,"Notes"),r.a.createElement("p",null,r.a.createElement("i",null,"In a perfect world I set aside 30 minutes at the end of each work day to reflect on something that I learned or found interesting during the day.")),r.a.createElement("hr",{style:{marginBottom:0}}),t.allMarkdownRemark.edges.map((function(e){return r.a.createElement("div",{key:e.node.fields.slug},r.a.createElement(i.a,{post:e.node}))})))}},LyPz:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),o=a("N1om"),i=a.n(o),c=function(e){var t=e.tags;return t.sort(),t.map((function(e){return r.a.createElement("span",{key:e,className:"tag"},r.a.createElement(l.Link,{to:"/tags/"+i()(e)+"/"},e))}))},s=a("p3AD");t.a=function(e){var t=e.post,a=t.fields.slug,n=t.frontmatter,o=n.title,i=n.date,m=n.description,u=n.tags,d=n.isTIL?"/notes"+a:"/writing"+a;return r.a.createElement("div",null,r.a.createElement("h2",{style:{marginBottom:Object(s.a)(.25)}},r.a.createElement(l.Link,{to:d},o)),r.a.createElement("div",{style:{marginBottom:Object(s.a)(1/3)}},r.a.createElement("b",null,i)),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:m||t.excerpt},style:{marginBottom:Object(s.a)(.5)}}),u&&r.a.createElement(c,{tags:u}))}}}]);
//# sourceMappingURL=component---src-pages-notes-js-2525f7ac9a8704db0c6e.js.map
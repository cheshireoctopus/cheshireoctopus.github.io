(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{oFNA:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var i=n("vOnD").c.h1.withConfig({displayName:"styled-components__PageHeading",componentId:"sc-1yn4kvt-0"})(["text-align:center;","{margin:0 -2em;margin-bottom:","px;margin-top:","px;font-size:","px;}"],(function(e){return e.theme.mediaQueries.xl}),(function(e){return e.theme.space[5]}),(function(e){return e.theme.space[6]}),(function(e){return e.theme.fontSizes[10]}))},yZlL:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return g}));var i=n("q1tI"),r=n.n(i),o=n("Wbzz"),a=n("vOnD"),l=n("Bl7J"),c=n("vrFN"),s=n("oFNA"),m=n("p3AD"),u=a.c.div.withConfig({displayName:"blog-post__ScrolledHeading",componentId:"sc-19x53f7-0"})(["background:white;box-shadow:1px 1px 3px black;display:",";left:0;padding:16px;position:fixed;opacity:",";right:0;top:0;z-index:1;"],(function(e){return e.render?"flex":"none"}),(function(e){return e.render?1:0})),p=a.c.h4.withConfig({displayName:"blog-post__ScrolledTitle",componentId:"sc-19x53f7-1"})(["font-size:1em;margin:0;margin-top:","px;"],(function(e){return e.theme.space[1]})),d=Object(a.c)(o.Link).withConfig({displayName:"blog-post__ScrolledHomeLink",componentId:"sc-19x53f7-2"})(["background-image:none;margin-right:16px;"]),f=a.c.p.withConfig({displayName:"blog-post__Date",componentId:"sc-19x53f7-3"})(["font-size:","px;margin-bottom:","px;text-align:center;","{font-size:","px;margin-bottom:","px;}"],(function(e){return e.theme.fontSizes[3]}),(function(e){return e.theme.space[5]}),(function(e){return e.theme.mediaQueries.medium}),(function(e){return e.theme.fontSizes[4]}),(function(e){return e.theme.space[7]}));t.default=function(e){var t=e.data,n=e.location,a=e.pageContext,g=t.markdownRemark,x=g.excerpt,h=g.frontmatter,w=h.date,b=h.description,E=h.isTIL,y=h.title,v=g.html,k=t.site.siteMetadata.title,_=a.previous,z=a.next,L=Object(i.useState)(!1),S=L[0],I=L[1];return Object(i.useEffect)((function(){var e=window.addEventListener("scroll",(function(){window.scrollY>150?I(!0):I(!1)}));return function(){return window.removeEventListener("scroll",e)}}),[]),r.a.createElement(l.a,{location:n,title:k},r.a.createElement(c.a,{title:y,description:b||x}),r.a.createElement(u,{render:S},r.a.createElement(d,{to:"/"},"←"),r.a.createElement(p,null,y)),r.a.createElement(s.a,null,y),r.a.createElement(f,null,r.a.createElement("i",null,w)),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:v}}),r.a.createElement("hr",{style:{marginBottom:Object(m.a)(1)}}),r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,_&&r.a.createElement(o.Link,{to:"/"+(E?"notes":"writing")+_.fields.slug,rel:"prev"},"← ",_.frontmatter.title)),r.a.createElement("li",null,z&&r.a.createElement(o.Link,{to:"/"+(E?"notes":"writing")+z.fields.slug,rel:"next"},z.frontmatter.title," →"))))};var g="1689999955"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-a1d4cfe4238f0dbc6375.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{yZlL:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return u}));n("91GP"),n("Z2Ku"),n("L9s1");var a=n("q1tI"),l=n.n(a),r=n("Wbzz"),i=n("vOnD"),o=n("Bl7J"),c=n("vrFN"),s=n("p3AD"),d=i.c.div.withConfig({displayName:"blog-post__ScrolledHeading",componentId:"sc-19x53f7-0"})(["background:white;box-shadow:1px 1px 3px black;display:",";left:0;padding:16px;position:fixed;opacity:",";right:0;top:0;z-index:1;"],(function(e){return e.render?"flex":"none"}),(function(e){return e.render?1:0})),m=i.c.div.withConfig({displayName:"blog-post__ScrolledTitle",componentId:"sc-19x53f7-1"})(["font-family:'Roboto Slab',sans-serif;font-size:1em;"]),p=Object(i.c)(r.Link).withConfig({displayName:"blog-post__ScrolledHomeLink",componentId:"sc-19x53f7-2"})(["background-image:none;margin-right:16px;"]);t.default=function(e){var t=e.data,n=e.location,i=e.pageContext,u=t.markdownRemark,f=u.excerpt,g=u.frontmatter,b=g.date,w=g.description,E=g.tags,h=g.title,y=u.html,x=t.site.siteMetadata.title,k=i.previous,v=i.next,L=Object(a.useState)(!1),j=L[0],I=L[1],O=E.includes("TIL");return Object(a.useEffect)((function(){var e=window.addEventListener("scroll",(function(){window.scrollY>150?I(!0):I(!1)}));return function(){return window.removeEventListener("scroll",e)}}),[]),l.a.createElement(o.a,{location:n,title:x},l.a.createElement(c.a,{title:h,description:w||f}),l.a.createElement("h1",{style:{marginTop:0}},h),l.a.createElement(d,{render:j},l.a.createElement(p,{to:"/"},"←"),l.a.createElement(m,null,h)),l.a.createElement("p",{style:Object.assign({},Object(s.b)(-.2),{display:"block",marginBottom:Object(s.a)(1),marginTop:Object(s.a)(-1)})},b),O&&l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,l.a.createElement("i",null,"I set aside 30 minutes at the end of each work day to reflect on something that I learned or found interesting during the day. I am making an attempt to write these down.")),l.a.createElement("hr",null)),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:y}}),l.a.createElement("hr",{style:{marginBottom:Object(s.a)(1)}}),l.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},l.a.createElement("li",null,k&&l.a.createElement(r.Link,{to:k.fields.slug,rel:"prev"},"← ",k.frontmatter.title)),l.a.createElement("li",null,v&&l.a.createElement(r.Link,{to:v.fields.slug,rel:"next"},v.frontmatter.title," →"))))};var u="3075597272"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-6b5869086d9613340952.js.map
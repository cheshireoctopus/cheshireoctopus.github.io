(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/9aa":function(e,t,n){var r=n("NykK"),a=n("ExA7"),o="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||a(e)&&r(e)==o}},"3cYt":function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},"6nK8":function(e,t,n){n("SRfc");var r=n("dVn5"),a=n("fo6e"),o=n("dt0z"),i=n("9NmV");e.exports=function(e,t,n){return e=o(e),void 0===(t=n?void 0:t)?a(e)?i(e):r(e):e.match(t)||[]}},"9NmV":function(e,t,n){n("SRfc"),n("Oyvg");var r="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="["+r+"]",o="\\d+",i="[\\u2700-\\u27bf]",u="[a-z\\xdf-\\xf6\\xf8-\\xff]",c="[^\\ud800-\\udfff"+r+o+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",f="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",s="[A-Z\\xc0-\\xd6\\xd8-\\xde]",d="(?:"+u+"|"+c+")",m="(?:"+s+"|"+c+")",p="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",x="[\\ufe0e\\ufe0f]?"+p+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",f,l].join("|")+")[\\ufe0e\\ufe0f]?"+p+")*"),g="(?:"+[i,f,l].join("|")+")"+x,v=RegExp([s+"?"+u+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[a,s,"$"].join("|")+")",m+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[a,s+d,"$"].join("|")+")",s+"?"+d+"+(?:['’](?:d|ll|m|re|s|t|ve))?",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",o,g].join("|"),"g");e.exports=function(e){return e.match(v)||[]}},AP2z:function(e,t,n){n("a1Th"),n("h7Nl"),n("Btvt");var r=n("nmnc"),a=Object.prototype,o=a.hasOwnProperty,i=a.toString,u=r?r.toStringTag:void 0;e.exports=function(e){var t=o.call(e,u),n=e[u];try{e[u]=void 0;var r=!0}catch(c){}var a=i.call(e);return r&&(t?e[u]=n:delete e[u]),a}},ExA7:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},KfNM:function(e,t,n){n("a1Th"),n("h7Nl"),n("Btvt");var r=Object.prototype.toString;e.exports=function(e){return r.call(e)}},Kz5y:function(e,t,n){var r=n("WFqU"),a="object"==typeof self&&self&&self.Object===Object&&self,o=r||a||Function("return this")();e.exports=o},LyPz:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),i=(n("Vd3H"),n("N1om")),u=n.n(i),c=function(e){var t=e.tags;return t.sort(),t.map((function(e){return a.a.createElement("span",{key:e,className:"tag"},a.a.createElement(o.Link,{to:"/tags/"+u()(e)+"/"},e))}))},f=n("p3AD");t.a=function(e){var t=e.post,n=t.fields.slug,r=t.frontmatter,i=r.title,u=r.date,l=r.description,s=r.tags,d=r.isTIL?"til"+n:n;return a.a.createElement("div",null,a.a.createElement("h2",{style:{marginBottom:Object(f.a)(.25)}},a.a.createElement(o.Link,{to:d},i)),a.a.createElement("div",{style:{marginBottom:Object(f.a)(1/3)}},a.a.createElement("b",null,u)),a.a.createElement("p",{dangerouslySetInnerHTML:{__html:l||t.excerpt},style:{marginBottom:Object(f.a)(.5)}}),s&&a.a.createElement(c,{tags:s}))}},N1om:function(e,t,n){var r=n("sgoq")((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=r},NykK:function(e,t,n){var r=n("nmnc"),a=n("AP2z"),o=n("KfNM"),i="[object Null]",u="[object Undefined]",c=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?u:i:c&&c in Object(e)?a(e):o(e)}},SMB2:function(e,t,n){"use strict";n("OGtf")("bold",(function(e){return function(){return e(this,"b","","")}}))},TKrE:function(e,t,n){n("pIFo"),n("Oyvg");var r=n("qRkn"),a=n("dt0z"),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=a(e))&&e.replace(o,r).replace(i,"")}},WFqU:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n("yLpj"))},Z0cm:function(e,t,n){n("LK8F");var r=Array.isArray;e.exports=r},asDA:function(e,t){e.exports=function(e,t,n,r){var a=-1,o=null==e?0:e.length;for(r&&o&&(n=e[++a]);++a<o;)n=t(n,e[a],a,e);return n}},dVn5:function(e,t,n){n("SRfc");var r=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(r)||[]}},dt0z:function(e,t,n){var r=n("zoYe");e.exports=function(e){return null==e?"":r(e)}},eUgh:function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a}},eWDE:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("Bl7J"),i=n("vrFN"),u=n("oFNA"),c=n("Wbzz"),f=n("N1om"),l=n.n(f),s=function(e){var t=e.tags.filter((function(e){return"TIL"!==e.value})).map((function(e){return e.value})),n={index:0,tag:t[0]},o=Object(r.useState)(n),i=o[0],u=o[1];return Object(r.useEffect)((function(){var e=setInterval((function(){var e=i.index,r=t[e+1];u(r?{index:e+1,tag:r}:n)}),2500);return function(){return clearInterval(e)}})),a.a.createElement(c.Link,{to:"/tags/"+l()(i.tag)+"/"},i.tag)},d=n("vOnD"),m=(d.c.h1.withConfig({displayName:"Bio__StyledH1",componentId:"sc-1un4dve-0"})(["font-size:","px;margin-top:0;","{font-size:","px;}"],(function(e){return e.theme.fontSizes[7]}),(function(e){return e.theme.mediaQueries.large}),(function(e){return e.theme.fontSizes[9]})),d.c.p.withConfig({displayName:"Bio__StyledP",componentId:"sc-1un4dve-1"})(["font-size:","px;margin-top:0;margin-bottom:","px;"],(function(e){return e.theme.fontSizes[3]}),(function(e){return e.theme.space[3]}))),p=function(e){var t=e.tags;return a.a.createElement(a.a.Fragment,null,a.a.createElement(u.a,null,"Hello, I'm Chandler"),a.a.createElement(m,null,"I am a software developer in New York City working to reduce friction in healthcare delivery at ",a.a.createElement("a",{href:"https://ro.co"},"Ro"),"."),a.a.createElement(m,null,"I am also working on reducing the friction in design hiring at ",a.a.createElement("a",{href:"https://keming.io"},"Keming.io"),"."),a.a.createElement(m,null,"I write about ",a.a.createElement(s,{tags:t}),"."))},x=(n("XfO3"),n("HEwt"),n("a1Th"),n("Btvt"),n("SMB2"),d.c.div.withConfig({displayName:"Pagination__Container",componentId:"sc-1b7w9bm-0"})(["display:flex;justifyContent:space-between;margin-top:36px;@media screen and (max-width:425px){flex-wrap:wrap;}"])),g=d.c.div.withConfig({displayName:"Pagination__PrevLink",componentId:"sc-1b7w9bm-1"})(["flex-basis:33.33%;@media screen and (max-width:425px){flex-basis:50%;}"]),v=d.c.div.withConfig({displayName:"Pagination__NextLink",componentId:"sc-1b7w9bm-2"})(["flex-basis:33.33%;text-align:right;@media screen and (max-width:425px){flex-basis:50%;}"]),b=d.c.div.withConfig({displayName:"Pagination__PageNumbers",componentId:"sc-1b7w9bm-3"})(["align-items:center;display:flex;flex-basis:33.33%;justify-content:center;@media screen and (max-width:425px){flex-basis:100%;margin-top:16px;order:1;}"]),h=Object(d.c)(c.Link).withConfig({displayName:"Pagination__PageNumber",componentId:"sc-1b7w9bm-4"})(["background-image:none;font-weight:",";font-size:",";margin-left:",";"],(function(e){return e.bold&&"bold"}),(function(e){return e.large&&"24px"}),(function(e){return e.pushLeft&&"24px"})),E=function(e){var t=e.currentPage,n=e.numPages,r=1===t,o=t===n,i=t-1==1?"/":(t-1).toString(),u=(t+1).toString();return a.a.createElement(x,null,a.a.createElement(g,null,!r&&a.a.createElement(c.Link,{to:i,rel:"prev"},"← Previous Page")),a.a.createElement(b,null,Array.from({length:n},(function(e,n){return a.a.createElement(h,{key:"pagination-number"+(n+1),to:"/"+(0===n?"":n+1),bold:n===t-1,large:n===t-1,pushLeft:0!==n},n+1)}))),a.a.createElement(v,null,!o&&a.a.createElement(c.Link,{to:u,rel:"next"},"Next Page →")))},y=n("LyPz");n.d(t,"pageQuery",(function(){return w}));t.default=function(e){var t=e.data,n=e.location,r=e.pageContext,u=t.tags.group,c=t.site.siteMetadata.title,f=1===r.currentPage,l=t.allMarkdownRemark.edges;return a.a.createElement(o.a,{location:n,title:c},a.a.createElement(i.a,{title:"All posts"}),f&&a.a.createElement(p,{tags:u}),l.map((function(e){return a.a.createElement("div",{key:e.node.fields.slug},a.a.createElement(y.a,{post:e.node}))})),a.a.createElement(E,r))};var w="1562094942"},fo6e:function(e,t){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return n.test(e)}},nmnc:function(e,t,n){var r=n("Kz5y").Symbol;e.exports=r},qRkn:function(e,t,n){var r=n("3cYt")({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r},sgoq:function(e,t,n){n("pIFo"),n("Oyvg");var r=n("asDA"),a=n("TKrE"),o=n("6nK8"),i=RegExp("['’]","g");e.exports=function(e){return function(t){return r(o(a(t).replace(i,"")),e,"")}}},zoYe:function(e,t,n){n("a1Th"),n("h7Nl"),n("Btvt");var r=n("nmnc"),a=n("eUgh"),o=n("Z0cm"),i=n("/9aa"),u=1/0,c=r?r.prototype:void 0,f=c?c.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(o(t))return a(t,e)+"";if(i(t))return f?f.call(t):"";var n=t+"";return"0"==n&&1/t==-u?"-0":n}}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-ee3f48fc56fa253bab92.js.map
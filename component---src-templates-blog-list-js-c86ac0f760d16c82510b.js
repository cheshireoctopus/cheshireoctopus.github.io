(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/9aa":function(t,e,n){var r=n("NykK"),a=n("ExA7"),o="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||a(t)&&r(t)==o}},"3cYt":function(t,e){t.exports=function(t){return function(e){return null==t?void 0:t[e]}}},"6nK8":function(t,e,n){n("SRfc");var r=n("dVn5"),a=n("fo6e"),o=n("dt0z"),i=n("9NmV");t.exports=function(t,e,n){return t=o(t),void 0===(e=n?void 0:e)?a(t)?i(t):r(t):t.match(e)||[]}},"9NmV":function(t,e,n){n("SRfc"),n("Oyvg");var r="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="["+r+"]",o="\\d+",i="[\\u2700-\\u27bf]",u="[a-z\\xdf-\\xf6\\xf8-\\xff]",f="[^\\ud800-\\udfff"+r+o+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",s="[A-Z\\xc0-\\xd6\\xd8-\\xde]",d="(?:"+u+"|"+f+")",x="(?:"+s+"|"+f+")",p="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",m="[\\ufe0e\\ufe0f]?"+p+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",c,l].join("|")+")[\\ufe0e\\ufe0f]?"+p+")*"),g="(?:"+[i,c,l].join("|")+")"+m,b=RegExp([s+"?"+u+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[a,s,"$"].join("|")+")",x+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[a,s+d,"$"].join("|")+")",s+"?"+d+"+(?:['’](?:d|ll|m|re|s|t|ve))?",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",o,g].join("|"),"g");t.exports=function(t){return t.match(b)||[]}},AP2z:function(t,e,n){n("a1Th"),n("h7Nl"),n("Btvt");var r=n("nmnc"),a=Object.prototype,o=a.hasOwnProperty,i=a.toString,u=r?r.toStringTag:void 0;t.exports=function(t){var e=o.call(t,u),n=t[u];try{t[u]=void 0;var r=!0}catch(f){}var a=i.call(t);return r&&(e?t[u]=n:delete t[u]),a}},ExA7:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},KfNM:function(t,e,n){n("a1Th"),n("h7Nl"),n("Btvt");var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},Kz5y:function(t,e,n){var r=n("WFqU"),a="object"==typeof self&&self&&self.Object===Object&&self,o=r||a||Function("return this")();t.exports=o},LyPz:function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),i=(n("Vd3H"),n("N1om")),u=n.n(i),f=function(t){var e=t.tags;return e.sort(),e.map((function(t){return a.a.createElement("span",{key:t,className:"tag"},a.a.createElement(o.Link,{to:"/tags/"+u()(t)+"/"},t))}))},c=n("p3AD");e.a=function(t){var e=t.post,n=e.fields.slug,r=e.frontmatter,i=r.title,u=r.date,l=r.description,s=r.tags,d=r.isTIL?"/notes"+n:"/writing"+n;return a.a.createElement("div",null,a.a.createElement("h2",{style:{marginBottom:Object(c.a)(.25)}},a.a.createElement(o.Link,{to:d},i)),a.a.createElement("div",{style:{marginBottom:Object(c.a)(1/3)}},a.a.createElement("b",null,u)),a.a.createElement("p",{dangerouslySetInnerHTML:{__html:l||e.excerpt},style:{marginBottom:Object(c.a)(.5)}}),s&&a.a.createElement(f,{tags:s}))}},N1om:function(t,e,n){var r=n("sgoq")((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()}));t.exports=r},NykK:function(t,e,n){var r=n("nmnc"),a=n("AP2z"),o=n("KfNM"),i="[object Null]",u="[object Undefined]",f=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?u:i:f&&f in Object(t)?a(t):o(t)}},SMB2:function(t,e,n){"use strict";n("OGtf")("bold",(function(t){return function(){return t(this,"b","","")}}))},TKrE:function(t,e,n){n("pIFo"),n("Oyvg");var r=n("qRkn"),a=n("dt0z"),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=a(t))&&t.replace(o,r).replace(i,"")}},WFqU:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("yLpj"))},Z0cm:function(t,e,n){n("LK8F");var r=Array.isArray;t.exports=r},asDA:function(t,e){t.exports=function(t,e,n,r){var a=-1,o=null==t?0:t.length;for(r&&o&&(n=t[++a]);++a<o;)n=e(n,t[a],a,t);return n}},dVn5:function(t,e,n){n("SRfc");var r=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(r)||[]}},dt0z:function(t,e,n){var r=n("zoYe");t.exports=function(t){return null==t?"":r(t)}},eUgh:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,a=Array(r);++n<r;)a[n]=e(t[n],n,t);return a}},eWDE:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),a=n.n(r),o=n("Bl7J"),i=n("vrFN"),u=(n("XfO3"),n("HEwt"),n("a1Th"),n("Btvt"),n("SMB2"),n("Wbzz")),f=n("vOnD"),c=f.c.div.withConfig({displayName:"Pagination__Container",componentId:"sc-1b7w9bm-0"})(["display:flex;justifyContent:space-between;margin-top:36px;@media screen and (max-width:425px){flex-wrap:wrap;}"]),l=f.c.div.withConfig({displayName:"Pagination__PrevLink",componentId:"sc-1b7w9bm-1"})(["flex-basis:33.33%;@media screen and (max-width:425px){flex-basis:50%;}"]),s=f.c.div.withConfig({displayName:"Pagination__NextLink",componentId:"sc-1b7w9bm-2"})(["flex-basis:33.33%;text-align:right;@media screen and (max-width:425px){flex-basis:50%;}"]),d=f.c.div.withConfig({displayName:"Pagination__PageNumbers",componentId:"sc-1b7w9bm-3"})(["align-items:center;display:flex;flex-basis:33.33%;justify-content:center;@media screen and (max-width:425px){flex-basis:100%;margin-top:16px;order:1;}"]),x=Object(f.c)(u.Link).withConfig({displayName:"Pagination__PageNumber",componentId:"sc-1b7w9bm-4"})(["background-image:none;font-weight:",";font-size:",";margin-left:",";"],(function(t){return t.bold&&"bold"}),(function(t){return t.large&&"24px"}),(function(t){return t.pushLeft&&"24px"})),p=function(t){var e=t.currentPage,n=t.numPages,r=1===e,o=e===n,i=e-1==1?"/writing":"/writing/"+(e-1).toString(),f="/writing/"+(e+1).toString();return a.a.createElement(c,null,a.a.createElement(l,null,!r&&a.a.createElement(u.Link,{to:i,rel:"prev"},"← Previous Page")),a.a.createElement(d,null,Array.from({length:n},(function(t,n){return a.a.createElement(x,{key:"pagination-number"+(n+1),to:"/writing/"+(0===n?"":n+1),bold:n===e-1,large:n===e-1,pushLeft:0!==n},n+1)}))),a.a.createElement(s,null,!o&&a.a.createElement(u.Link,{to:f,rel:"next"},"Next Page →")))},m=n("LyPz"),g=n("oFNA");n.d(e,"pageQuery",(function(){return b}));e.default=function(t){var e=t.data,n=t.location,r=t.pageContext,u=(e.tags.group,e.site.siteMetadata.title),f=1===r.currentPage,c=e.allMarkdownRemark.edges;return a.a.createElement(o.a,{location:n,title:u},a.a.createElement(i.a,{title:"Writing"}),f&&a.a.createElement(g.a,null,"Writing"),c.map((function(t){return a.a.createElement("div",{key:t.node.fields.slug},a.a.createElement(m.a,{post:t.node}))})),a.a.createElement(p,r))};var b="1562094942"},fo6e:function(t,e){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return n.test(t)}},nmnc:function(t,e,n){var r=n("Kz5y").Symbol;t.exports=r},qRkn:function(t,e,n){var r=n("3cYt")({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});t.exports=r},sgoq:function(t,e,n){n("pIFo"),n("Oyvg");var r=n("asDA"),a=n("TKrE"),o=n("6nK8"),i=RegExp("['’]","g");t.exports=function(t){return function(e){return r(o(a(e).replace(i,"")),t,"")}}},zoYe:function(t,e,n){n("a1Th"),n("h7Nl"),n("Btvt");var r=n("nmnc"),a=n("eUgh"),o=n("Z0cm"),i=n("/9aa"),u=1/0,f=r?r.prototype:void 0,c=f?f.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(o(e))return a(e,t)+"";if(i(e))return c?c.call(e):"";var n=e+"";return"0"==n&&1/e==-u?"-0":n}}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-c86ac0f760d16c82510b.js.map
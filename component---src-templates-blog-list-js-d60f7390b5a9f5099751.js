(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/9aa":function(t,e,n){var r=n("NykK"),a=n("ExA7"),o="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||a(t)&&r(t)==o}},"3cYt":function(t,e){t.exports=function(t){return function(e){return null==t?void 0:t[e]}}},"6nK8":function(t,e,n){n("SRfc");var r=n("dVn5"),a=n("fo6e"),o=n("dt0z"),u=n("9NmV");t.exports=function(t,e,n){return t=o(t),void 0===(e=n?void 0:e)?a(t)?u(t):r(t):t.match(e)||[]}},"9NmV":function(t,e,n){n("SRfc"),n("Oyvg");var r="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="["+r+"]",o="\\d+",u="[\\u2700-\\u27bf]",i="[a-z\\xdf-\\xf6\\xf8-\\xff]",c="[^\\ud800-\\udfff"+r+o+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",f="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",s="[A-Z\\xc0-\\xd6\\xd8-\\xde]",d="(?:"+i+"|"+c+")",p="(?:"+s+"|"+c+")",x="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",g="[\\ufe0e\\ufe0f]?"+x+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",f,l].join("|")+")[\\ufe0e\\ufe0f]?"+x+")*"),m="(?:"+[u,f,l].join("|")+")"+g,v=RegExp([s+"?"+i+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[a,s,"$"].join("|")+")",p+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[a,s+d,"$"].join("|")+")",s+"?"+d+"+(?:['’](?:d|ll|m|re|s|t|ve))?",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",o,m].join("|"),"g");t.exports=function(t){return t.match(v)||[]}},AP2z:function(t,e,n){n("a1Th"),n("h7Nl"),n("Btvt");var r=n("nmnc"),a=Object.prototype,o=a.hasOwnProperty,u=a.toString,i=r?r.toStringTag:void 0;t.exports=function(t){var e=o.call(t,i),n=t[i];try{t[i]=void 0;var r=!0}catch(c){}var a=u.call(t);return r&&(e?t[i]=n:delete t[i]),a}},ExA7:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},KfNM:function(t,e,n){n("a1Th"),n("h7Nl"),n("Btvt");var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},Kz5y:function(t,e,n){var r=n("WFqU"),a="object"==typeof self&&self&&self.Object===Object&&self,o=r||a||Function("return this")();t.exports=o},N1om:function(t,e,n){var r=n("sgoq")((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()}));t.exports=r},NykK:function(t,e,n){var r=n("nmnc"),a=n("AP2z"),o=n("KfNM"),u="[object Null]",i="[object Undefined]",c=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?i:u:c&&c in Object(t)?a(t):o(t)}},TKrE:function(t,e,n){n("pIFo"),n("Oyvg");var r=n("qRkn"),a=n("dt0z"),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,u=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=a(t))&&t.replace(o,r).replace(u,"")}},WFqU:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("yLpj"))},Z0cm:function(t,e,n){n("LK8F");var r=Array.isArray;t.exports=r},asDA:function(t,e){t.exports=function(t,e,n,r){var a=-1,o=null==t?0:t.length;for(r&&o&&(n=t[++a]);++a<o;)n=e(n,t[a],a,t);return n}},dVn5:function(t,e,n){n("SRfc");var r=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(r)||[]}},dt0z:function(t,e,n){var r=n("zoYe");t.exports=function(t){return null==t?"":r(t)}},eUgh:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,a=Array(r);++n<r;)a[n]=e(t[n],n,t);return a}},eWDE:function(t,e,n){"use strict";n.r(e);n("a1Th"),n("Btvt"),n("Vd3H");var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),u=n("N1om"),i=n.n(u),c=n("Bl7J"),f=n("vrFN"),l=function(t){var e=function(t){return t.group.map((function(t){return t.tag}))}(t.allMarkdownRemark),n={index:0,tag:e[0]},u=Object(r.useState)(n),c=u[0],f=u[1];return Object(r.useEffect)((function(){var t=setInterval((function(){var t=c.index,r=e[t+1];f(r?{index:t+1,tag:r}:n)}),2500);return function(){return clearInterval(t)}})),a.a.createElement(o.Link,{to:"/tags/"+i()(c.tag)+"/"},c.tag)},s=n("p3AD");n.d(e,"pageQuery",(function(){return x}));var d=function(t){var e=t.tags;return e.sort(),e.map((function(t){return a.a.createElement("span",{key:t,className:"tag"},a.a.createElement(o.Link,{to:"/tags/"+i()(t)+"/"},t))}))},p=function(t){var e,n;function r(){return t.apply(this,arguments)||this}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var u=r.prototype;return u.renderBio=function(){var t=this.props,e=t.data;return t.pageContext.currentPage>1?null:a.a.createElement(a.a.Fragment,null,a.a.createElement("p",{style:{fontSize:"36px"}},"👋"),a.a.createElement("p",null,"Hello. I am a software developer in New York City working to reduce friction in healthcare delivery at ",a.a.createElement("a",{href:"https://ro.co"},"Ro"),"."),a.a.createElement("p",null,"I am also working on reducing the friction in design hiring at ",a.a.createElement("a",{href:"https://keming.io"},"Keming.io"),"."),a.a.createElement("p",null,"I write about ",a.a.createElement(l,{allMarkdownRemark:e.allMarkdownRemark}),"."))},u.renderPosts=function(){return this.props.data.allMarkdownRemark.edges.map((function(t){var e=t.node,n=e.fields.slug,r=e.frontmatter,u=r.title,i=r.date,c=r.description,f=r.tags;return a.a.createElement("div",{key:n},a.a.createElement("h3",{style:{marginBottom:Object(s.a)(.25)}},a.a.createElement(o.Link,{style:{boxShadow:"none"},to:n},u||n)),a.a.createElement("small",null,i),a.a.createElement("p",{dangerouslySetInnerHTML:{__html:c||e.excerpt},style:{marginBottom:Object(s.a)(.5)}}),a.a.createElement("div",null,a.a.createElement(d,{tags:f})))}))},u.renderPagination=function(){var t=this.props.pageContext,e=t.currentPage,n=1===e,r=e===t.numPages,u=e-1==1?"/":(e-1).toString(),i=(e+1).toString();return a.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",marginTop:36}},a.a.createElement("div",null,!n&&a.a.createElement(o.Link,{to:u,rel:"prev"},"← Previous Page")),a.a.createElement("div",null,!r&&a.a.createElement(o.Link,{to:i,rel:"next"},"Next Page →")))},u.render=function(){var t=this.props,e=t.data,n=t.location,r=e.site.siteMetadata.title;return a.a.createElement(c.a,{location:n,title:r},a.a.createElement(f.a,{title:"All posts"}),this.renderBio(),this.renderPosts(),this.renderPagination())},r}(a.a.Component),x=(e.default=p,"3744581901")},fo6e:function(t,e){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return n.test(t)}},nmnc:function(t,e,n){var r=n("Kz5y").Symbol;t.exports=r},qRkn:function(t,e,n){var r=n("3cYt")({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});t.exports=r},sgoq:function(t,e,n){n("pIFo"),n("Oyvg");var r=n("asDA"),a=n("TKrE"),o=n("6nK8"),u=RegExp("['’]","g");t.exports=function(t){return function(e){return r(o(a(e).replace(u,"")),t,"")}}},zoYe:function(t,e,n){n("a1Th"),n("h7Nl"),n("Btvt");var r=n("nmnc"),a=n("eUgh"),o=n("Z0cm"),u=n("/9aa"),i=1/0,c=r?r.prototype:void 0,f=c?c.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(o(e))return a(e,t)+"";if(u(e))return f?f.call(e):"";var n=e+"";return"0"==n&&1/e==-i?"-0":n}}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-d60f7390b5a9f5099751.js.map
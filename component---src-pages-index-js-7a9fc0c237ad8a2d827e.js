(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/9aa":function(t,e,n){var r=n("NykK"),o=n("ExA7"),a="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||o(t)&&r(t)==a}},"3cYt":function(t,e){t.exports=function(t){return function(e){return null==t?void 0:t[e]}}},"6nK8":function(t,e,n){n("SRfc");var r=n("dVn5"),o=n("fo6e"),a=n("dt0z"),u=n("9NmV");t.exports=function(t,e,n){return t=a(t),void 0===(e=n?void 0:e)?o(t)?u(t):r(t):t.match(e)||[]}},"9NmV":function(t,e,n){n("SRfc"),n("Oyvg");var r="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="["+r+"]",a="\\d+",u="[\\u2700-\\u27bf]",f="[a-z\\xdf-\\xf6\\xf8-\\xff]",c="[^\\ud800-\\udfff"+r+a+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",i="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",s="[A-Z\\xc0-\\xd6\\xd8-\\xde]",d="(?:"+f+"|"+c+")",p="(?:"+s+"|"+c+")",x="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",v="[\\ufe0e\\ufe0f]?"+x+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",i,l].join("|")+")[\\ufe0e\\ufe0f]?"+x+")*"),m="(?:"+[u,i,l].join("|")+")"+v,g=RegExp([s+"?"+f+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[o,s,"$"].join("|")+")",p+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[o,s+d,"$"].join("|")+")",s+"?"+d+"+(?:['’](?:d|ll|m|re|s|t|ve))?",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a,m].join("|"),"g");t.exports=function(t){return t.match(g)||[]}},AP2z:function(t,e,n){n("a1Th"),n("h7Nl"),n("Btvt");var r=n("nmnc"),o=Object.prototype,a=o.hasOwnProperty,u=o.toString,f=r?r.toStringTag:void 0;t.exports=function(t){var e=a.call(t,f),n=t[f];try{t[f]=void 0;var r=!0}catch(c){}var o=u.call(t);return r&&(e?t[f]=n:delete t[f]),o}},ExA7:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},KfNM:function(t,e,n){n("a1Th"),n("h7Nl"),n("Btvt");var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},Kz5y:function(t,e,n){var r=n("WFqU"),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();t.exports=a},N1om:function(t,e,n){var r=n("sgoq")((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()}));t.exports=r},NykK:function(t,e,n){var r=n("nmnc"),o=n("AP2z"),a=n("KfNM"),u="[object Null]",f="[object Undefined]",c=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?f:u:c&&c in Object(t)?o(t):a(t)}},RXBc:function(t,e,n){"use strict";n.r(e);n("Vd3H");var r=n("q1tI"),o=n.n(r),a=n("Wbzz"),u=n("N1om"),f=n.n(u),c=n("Bl7J"),i=n("vrFN"),l=function(t){var e=function(t){return t.group.map((function(t){return t.tag}))}(t.allMarkdownRemark),n={index:0,tag:e[0]},u=Object(r.useState)(n),c=u[0],i=u[1];return Object(r.useEffect)((function(){var t=setInterval((function(){var t=c.index,r=e[t+1];i(r?{index:t+1,tag:r}:n)}),2500);return function(){return clearInterval(t)}})),o.a.createElement(a.Link,{to:"/tags/"+f()(c.tag)+"/"},c.tag)},s=n("p3AD");n.d(e,"pageQuery",(function(){return x}));var d=function(t){var e=t.tags;return e.sort(),e.map((function(t){return o.a.createElement("span",{key:t,className:"tag"},o.a.createElement(a.Link,{to:"/tags/"+f()(t)+"/"},t))}))},p=function(t){var e,n;function r(){return t.apply(this,arguments)||this}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var u=r.prototype;return u.renderPosts=function(){return this.props.data.allMarkdownRemark.edges.map((function(t){var e=t.node,n=e.fields.slug,r=e.frontmatter,u=r.title,f=r.date,c=r.description,i=r.tags;return o.a.createElement("div",{key:n},o.a.createElement("h3",{style:{marginBottom:Object(s.a)(.25)}},o.a.createElement(a.Link,{style:{boxShadow:"none"},to:n},u||n)),o.a.createElement("small",null,f),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:c||e.excerpt},style:{marginBottom:Object(s.a)(.5)}}),o.a.createElement("div",null,o.a.createElement(d,{tags:i})))}))},u.render=function(){var t=this.props,e=t.data,n=t.location,r=e.allMarkdownRemark,a=e.site.siteMetadata.title;return o.a.createElement(c.a,{location:n,title:a},o.a.createElement(i.a,{title:"All posts"}),o.a.createElement("p",{style:{fontSize:"36px"}},"👋"),o.a.createElement("p",null,"Hello. I am a software developer in New York City working to reduce friction in healthcare delivery at ",o.a.createElement("a",{href:"https://ro.co"},"Ro"),"."),o.a.createElement("p",null,"I am also working on reducing the friction in design hiring at ",o.a.createElement("a",{href:"https://keming.io"},"Keming.io"),"."),o.a.createElement("p",null,"I write about ",o.a.createElement(l,{allMarkdownRemark:r}),"."),this.renderPosts())},r}(o.a.Component),x=(e.default=p,"1018051903")},TKrE:function(t,e,n){n("pIFo"),n("Oyvg");var r=n("qRkn"),o=n("dt0z"),a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,u=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=o(t))&&t.replace(a,r).replace(u,"")}},WFqU:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("yLpj"))},Z0cm:function(t,e,n){n("LK8F");var r=Array.isArray;t.exports=r},asDA:function(t,e){t.exports=function(t,e,n,r){var o=-1,a=null==t?0:t.length;for(r&&a&&(n=t[++o]);++o<a;)n=e(n,t[o],o,t);return n}},dVn5:function(t,e,n){n("SRfc");var r=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(r)||[]}},dt0z:function(t,e,n){var r=n("zoYe");t.exports=function(t){return null==t?"":r(t)}},eUgh:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},fo6e:function(t,e){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return n.test(t)}},nmnc:function(t,e,n){var r=n("Kz5y").Symbol;t.exports=r},qRkn:function(t,e,n){var r=n("3cYt")({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});t.exports=r},sgoq:function(t,e,n){n("pIFo"),n("Oyvg");var r=n("asDA"),o=n("TKrE"),a=n("6nK8"),u=RegExp("['’]","g");t.exports=function(t){return function(e){return r(a(o(e).replace(u,"")),t,"")}}},zoYe:function(t,e,n){n("a1Th"),n("h7Nl"),n("Btvt");var r=n("nmnc"),o=n("eUgh"),a=n("Z0cm"),u=n("/9aa"),f=1/0,c=r?r.prototype:void 0,i=c?c.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(a(e))return o(e,t)+"";if(u(e))return i?i.call(e):"";var n=e+"";return"0"==n&&1/e==-f?"-0":n}}}]);
//# sourceMappingURL=component---src-pages-index-js-7a9fc0c237ad8a2d827e.js.map
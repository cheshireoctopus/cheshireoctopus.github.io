webpackJsonp([0x966f302a5a95],{"./node_modules/json-loader/index.js!./.cache/json/roll-your-own-static-site.json":function(n,s){n.exports={data:{site:{siteMetadata:{title:"Chandler Moisen",author:"Chandler Moisen"}},markdownRemark:{id:"/Users/chandlermoisen/Documents/personal/cheshireoctopus.github.io/gatsby-blog/src/pages/2017-06-12-roll-your-own-static-site/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/7b9825af9580e5374b009e4a28fda8cd-6a116.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 14px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 78.2%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAQABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQAC/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAABRN0bGjUFC//EABoQAAMBAAMAAAAAAAAAAAAAAAACAwESFDP/2gAIAQEAAQUCfynfEOwxSnNWTUMo2H//xAAVEQEBAAAAAAAAAAAAAAAAAAAAIf/aAAgBAwEBPwFH/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oACAECAQE/AWV//8QAGxAAAgIDAQAAAAAAAAAAAAAAAAIBERAhQTL/2gAIAQEABj8CbdFr08wSvGxo/8QAGhABAQEBAQEBAAAAAAAAAAAAAREAITFBgf/aAAgBAQABPyE/JBa5Bknq6nRf3LRTgc3syP0xMfN//9oADAMBAAIAAwAAABBg/wD/xAAYEQADAQEAAAAAAAAAAAAAAAAAARFRYf/aAAgBAwEBPxCNLhcH/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQBhcf/aAAgBAgEBPxAB7b3/xAAbEAEBAQACAwAAAAAAAAAAAAABEQAxQSFRof/aAAgBAQABPxA6IauInvTkMKzz0s70wEeESZ1Q97+4Sh9zTPwibEu//9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="snoop dogg rolling"\n        title=""\n        src="/static/7b9825af9580e5374b009e4a28fda8cd-6a116.png"\n        srcset="/static/7b9825af9580e5374b009e4a28fda8cd-014de.png 148w,\n/static/7b9825af9580e5374b009e4a28fda8cd-3a3fd.png 295w,\n/static/7b9825af9580e5374b009e4a28fda8cd-6a116.png 500w"\n        sizes="(max-width: 14px) 100vw, 14px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Recently I decided to rebuild my long neglected and dilapidated blog - previously powered by <a href="http://octopress.org/">Octopress</a> - using JavaScript.</p>\n<p>As a blog is a perfect use case for a static site generator, I first investigated exisiting solutions, and found, as expected, there are already quite a few available:</p>\n<ul>\n<li><a href="http://www.metalsmith.io/">Metalsmith</a></li>\n<li><a href="https://hexo.io/">Hexo</a></li>\n<li><a href="http://wintersmith.io/">Wintersmith</a></li>\n</ul>\n<p>See <a href="https://www.staticgen.com/">https://www.staticgen.com/</a> for even more.</p>\n<p>While more than sufficient, I found these to be overkill as all I really needed was to <strong>convert some markdown into HTML</strong>.</p>\n<p>Add a pinch of CSS, maybe your favorite frontend view layer, and that’s it - you’re cruising.</p>\n<p>So, as any self-respecting dev would do, I rolled my own with React - check it out <a href="https://github.com/cheshireoctopus/cheshireoctopus.github.io">here</a>.</p>\n<h2>Structure</h2>\n<p>The structure (simplified below) is pretty straight-forward:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>|-- app\n|\t|-- components\n|\t|-- index.js\n|\t|-- posts.json\n|\t|-- projects.json\n|-- bin\n|\t|-- gen\n|-- public\n|\t|-- blog\n|\t\t|-- my_first_post\n|\t\t\t|-- img\n|\t\t\t|-- data.json\n|\t\t\t|-- post.md\n|-- index.html\n|-- webpack.confg.js</code></pre>\n      </div>\n<p><code>app/components/</code> holds all the <code>.jsx</code>, and uses <code>posts.json</code> - created via <code>bin/gen</code> (see below) - to populate the blog posts.</p>\n<p>Blog posts are stored as individual directories in <code>public/blog/</code>; each post directory contains:</p>\n<ul>\n<li><code>data.json</code></li>\n<li><code>post.md</code></li>\n<li><code>img/</code></li>\n</ul>\n<p><code>data.json</code> contains post-specific metadata (<code>title</code>, <code>date</code>, <code>topics</code>), while <code>post.md</code> contains the related markdown content; <code>img/</code> holds the post’s images.</p>\n<p>See an example <a href="https://github.com/cheshireoctopus/cheshireoctopus.github.io/tree/master/public/blog/twilio_on_rails_sms_basics">here</a>.</p>\n<p>Running <code>./bin/gen</code> from root parses through each post directory in <code>public/blog/</code>, transforms the <code>post.md</code> file into HTML, and then adds this string under the key <code>html</code> to the relative <code>data.json</code> object. Each JSON object is then pushed to an array and outputted at <code>app/posts.json</code> for use inside the React app.</p>\n<h2>Markdown to HTML</h2>\n<p>The core of the blog is powered by a single shell script that rips through a bunch of markdown files, converting them into HTML:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>#<span class="token operator">!</span><span class="token operator">/</span>usr<span class="token operator">/</span>bin<span class="token operator">/</span>env node\n\n<span class="token keyword">const</span> Promise <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'bluebird\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> fs <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">promisifyAll</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'fs\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> marked <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'marked\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> highlightjs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'highlight.js\'</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> PATH_TO_ROOT <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'..\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> PATH_TO_APP <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>PATH_TO_ROOT<span class="token punctuation">,</span> <span class="token string">\'app\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> PATH_TO_SRC <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>PATH_TO_ROOT<span class="token punctuation">,</span> <span class="token string">\'public\'</span><span class="token punctuation">,</span> <span class="token string">\'blog\'</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> renderer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">marked<span class="token punctuation">.</span>Renderer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nrenderer<span class="token punctuation">.</span>code <span class="token operator">=</span> <span class="token punctuation">(</span>code<span class="token punctuation">,</span> language<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n\t<span class="token keyword">const</span> validLang <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span><span class="token punctuation">(</span>language <span class="token operator">&amp;&amp;</span> highlightjs<span class="token punctuation">.</span><span class="token function">getLanguage</span><span class="token punctuation">(</span>language<span class="token punctuation">)</span><span class="token punctuation">)</span>\n\t<span class="token keyword">const</span> highlighted <span class="token operator">=</span> validLang <span class="token operator">?</span> highlightjs<span class="token punctuation">.</span><span class="token function">highlight</span><span class="token punctuation">(</span>language<span class="token punctuation">,</span> code<span class="token punctuation">)</span><span class="token punctuation">.</span>value <span class="token punctuation">:</span> code\n\t<span class="token keyword">return</span> <span class="token template-string"><span class="token string">`&lt;pre>&lt;code class="hljs </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>language<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>highlighted<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/code>&lt;/pre>`</span></span>\n<span class="token punctuation">}</span>\nrenderer<span class="token punctuation">.</span>image <span class="token operator">=</span> <span class="token punctuation">(</span>src<span class="token punctuation">,</span> title<span class="token punctuation">,</span> alt<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n\t<span class="token keyword">return</span> <span class="token template-string"><span class="token string">`&lt;div class="post-image-container">&lt;img src="</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>src<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">" alt="</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>alt<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"/>&lt;/div>`</span></span>\n<span class="token punctuation">}</span>\n\nmarked<span class="token punctuation">.</span><span class="token function">setOptions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\trenderer<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nfs<span class="token punctuation">.</span><span class="token function">readdirAsync</span><span class="token punctuation">(</span>PATH_TO_SRC<span class="token punctuation">)</span>\n\t<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>posts <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>posts<span class="token punctuation">,</span> postDir <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n\t\t\t<span class="token keyword">const</span> srcPostDir <span class="token operator">=</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>PATH_TO_SRC<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>postDir<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span>\n\n\t\t\t<span class="token keyword">return</span> fs<span class="token punctuation">.</span><span class="token function">readdirAsync</span><span class="token punctuation">(</span>srcPostDir<span class="token punctuation">)</span>\n\t\t\t\t<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>files <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n\t\t\t\t\t<span class="token keyword">const</span> readJSON <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileAsync</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>srcPostDir<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/data.json`</span></span><span class="token punctuation">,</span> <span class="token string">\'utf8\'</span><span class="token punctuation">)</span>\n\t\t\t\t\t<span class="token keyword">const</span> readMD <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileAsync</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>srcPostDir<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/post.md`</span></span><span class="token punctuation">,</span> <span class="token string">\'utf8\'</span><span class="token punctuation">)</span>\n\n\t\t\t\t\t<span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>readJSON<span class="token punctuation">,</span> readMD<span class="token punctuation">,</span> <span class="token punctuation">(</span>json<span class="token punctuation">,</span> md<span class="token punctuation">,</span> imgs<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n\t\t\t\t\t\t<span class="token keyword">const</span> data <span class="token operator">=</span> JSON<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span>\n\n\t\t\t\t\t\t<span class="token keyword">return</span> <span class="token punctuation">{</span>\n\t\t\t\t\t\t\tdate<span class="token punctuation">:</span> data<span class="token punctuation">.</span>date<span class="token punctuation">,</span>\n\t\t\t\t\t\t\ttopics<span class="token punctuation">:</span> data<span class="token punctuation">.</span>topics<span class="token punctuation">,</span>\n\t\t\t\t\t\t\ttitle<span class="token punctuation">:</span> data<span class="token punctuation">.</span>title<span class="token punctuation">,</span>\n\t\t\t\t\t\t\turlTitle<span class="token punctuation">:</span> postDir<span class="token punctuation">,</span>\n\t\t\t\t\t\t\thtml<span class="token punctuation">:</span> <span class="token function">marked</span><span class="token punctuation">(</span>md<span class="token punctuation">)</span><span class="token punctuation">,</span>\n\t\t\t\t\t\t<span class="token punctuation">}</span>\n\t\t\t\t\t<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\t\t\t\t<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>postCollection<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n\t\tpostCollection <span class="token operator">=</span> postCollection<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n\t\t\t<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>date<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>date<span class="token punctuation">)</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n\t\tfs<span class="token punctuation">.</span><span class="token function">writeFileAsync</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>PATH_TO_APP<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/posts.json`</span></span><span class="token punctuation">,</span> JSON<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>postCollection<span class="token punctuation">)</span><span class="token punctuation">)</span>\n\t\t\t<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`Congratulations - generated </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>postCollection<span class="token punctuation">.</span>length<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> posts.`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<h2>Bluebird’s <code>.promisifyAll</code></h2>\n<p>A quick note: asynchronous file input/output can quickly lead to a labyrinth of callbacks. To help mitigate sphagetti code, you’ll see that I leveraged <code>Bluebird.promisifyAll</code> (<a href="http://bluebirdjs.com/docs/api/promise.promisifyall.html">documentation</a>) by wrapping Node’s <code>fs</code> module:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> Promise <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'bluebird\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> fs <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">promisifyAll</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'fs\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p><code>.promisifyAll</code> parses through an object, “promisifying” the object’s methods. These new promises are accessed via the original method’s name + a suffix of <code>Async</code>.</p>\n<p>For example, to read a directory using <code>fs</code>, one would typically call <code>fs.readdir</code>; when wrapped using <code>promisifyAll</code> one would call <code>fs.readdirAsync</code>.</p>\n<h2>Marked: Custom Parsers</h2>\n<p>To convert markdown into HTML, I relied upon <a href="https://github.com/chjj/marked">marked</a> and <a href="https://highlightjs.org/">highlight.js</a>.</p>\n<p>While marked will convert markdown to HTML out of the box, it does require custom configuration when rendering code blocks and applying syntax highlighting. Thankfully, this process is pretty easy, thanks to hightlight.js.</p>\n<p>The majority of marked’s configuration can be accessed via its <a href="https://github.com/chjj/marked#renderer">marked.Renderer()</a> API. This allows the developer to define functions which are invoked when parsing certain <a href="https://github.com/chjj/marked#block-level-renderer-methods">block</a> or <a href="https://github.com/chjj/marked#inline-level-renderer-methods">inline</a> elements.</p>\n<p>For example, to apply custom markup to an image element, first instantiate a new <code>Renderer()</code> object, define an <code>image</code> method on this object describing what HTML should returned when parsing an image, and finally use <code>.setOptions</code> to apply the custom rendering.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">import</span> marked <span class="token keyword">from</span> <span class="token string">\'marked\'</span>\n\n<span class="token keyword">const</span> renderer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">marked<span class="token punctuation">.</span>Renderer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\nrenderer<span class="token punctuation">.</span>image <span class="token operator">=</span> <span class="token punctuation">(</span>src<span class="token punctuation">,</span> title<span class="token punctuation">,</span> alt<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n\t<span class="token keyword">return</span> <span class="token template-string"><span class="token string">`&lt;div class="post-image-container">&lt;img src="</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>src<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">" alt="</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>alt<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"/>&lt;/div>`</span></span>\n<span class="token punctuation">}</span>\n\nmarked<span class="token punctuation">.</span><span class="token function">setOptions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\trenderer<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Applying custom rendering to a code block would be similar, except you would utilize hightlight.js to apply syntax highlighting. Check out this <a href="http://shuheikagawa.com/blog/2015/09/21/using-highlight-js-with-marked/">post</a> for some more detail.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">import</span> marked <span class="token keyword">from</span> <span class="token string">\'marked\'</span>\n<span class="token keyword">import</span> highlightjs <span class="token keyword">from</span> <span class="token string">\'highlight.js\'</span>\n\n<span class="token keyword">const</span> renderer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">marked<span class="token punctuation">.</span>Renderer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\nrenderer<span class="token punctuation">.</span>code <span class="token operator">=</span> <span class="token punctuation">(</span>code<span class="token punctuation">,</span> language<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n\t<span class="token keyword">const</span> validLang <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span><span class="token punctuation">(</span>language <span class="token operator">&amp;&amp;</span> highlightjs<span class="token punctuation">.</span><span class="token function">getLanguage</span><span class="token punctuation">(</span>language<span class="token punctuation">)</span><span class="token punctuation">)</span>\n\t<span class="token keyword">const</span> highlighted <span class="token operator">=</span> validLang <span class="token operator">?</span> highlightjs<span class="token punctuation">.</span><span class="token function">highlight</span><span class="token punctuation">(</span>language<span class="token punctuation">,</span> code<span class="token punctuation">)</span><span class="token punctuation">.</span>value <span class="token punctuation">:</span> code\n\t<span class="token keyword">return</span> <span class="token template-string"><span class="token string">`&lt;pre>&lt;code class="hljs </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>language<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>highlighted<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/code>&lt;/pre>`</span></span>\n<span class="token punctuation">}</span>\n\nmarked<span class="token punctuation">.</span><span class="token function">setOptions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\trenderer<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>One caveat when hightlight.js - it does not ship with line numbers in code blocks. According to the library’s author(s), this is <a href="http://highlightjs.readthedocs.io/en/latest/line-numbers.html">“not an oversight but a feature”</a>, and it does appear that a <a href="https://github.com/wcoder/highlightjs-line-numbers.js/">plugin</a> was built to add them in.</p>',frontmatter:{title:"Roll Your Own Static Site",date:"June 12, 2017"}}},pathContext:{path:"/roll-your-own-static-site/"}}}});
//# sourceMappingURL=path---roll-your-own-static-site-5ba5526eb3102b10b283.js.map
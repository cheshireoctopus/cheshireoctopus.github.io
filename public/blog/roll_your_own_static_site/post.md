Recently I decided to rebuild my long neglected and dilapidated blog - previously powered by [Octopress](http://octopress.org/) - using JavaScript.

As a blog is a perfect use case for a static site generator, I first investigated exisiting solutions, and found, as expected, there are already quite a few available:

- [Metalsmith](http://www.metalsmith.io/)
- [Hexo](https://hexo.io/)
- [Wintersmith](http://wintersmith.io/)

See [https://www.staticgen.com/](https://www.staticgen.com/) for even more.

While more than sufficient, I found these to be overkill as all I really needed was to __convert some markdown into HTML__.

Add a pinch of CSS, maybe your favorite frontend view layer, and that's it - you're cruising.

So, as any self-respecting dev would do, I rolled my own - check it out [here](https://github.com/cheshireoctopus/cheshireoctopus.github.io).

### Structure

The structure (simplified below) is straight-forward:

```
|-- app
|	|-- components
|	|-- index.js
|	|-- posts.json
|	|-- projects.json
|-- bin
|	|-- gen
|-- public
|	|-- blog
|		|-- my_first_post
|			|-- img
|			|-- data.json
|			|-- post.md
|-- index.html
|-- webpack.confg.js
```

`app/components` holds all the `.jsx`, which uses `posts.json` - created via `bin/gen` (see below) - to populate the blog posts.

Blog posts are stored as individual directories in `public/blog/`; each post directory contains:

- `data.json`
- `post.md`
- `img/`

`data.json` contains post-specific metadata (`title`, `date`, `topics`), while `post.md` contains the related markdown content; `img/` holds the post's images.

See an example [here](https://github.com/cheshireoctopus/cheshireoctopus.github.io/tree/master/public/blog/twilio_on_rails_sms_basics).

Running `./bin/gen` from root parses through each post directory in `public/blog/`, transforms the `post.md` file into HTML, and then adds this string under the key `html` to the relative `data.json` object. Each JSON object is then pushed to an array and is outputted at `app/posts.json` for use inside the React app.

### Markdown to HTML

The core of my blog is powered by a single shell script that rips through a bunch of markdown files, converting them into HTML:

```javascript
#!/usr/bin/env node

const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'))
const path = require('path')
const marked = require('marked')
const highlightjs = require('highlight.js')

const PATH_TO_ROOT = path.join(__dirname, '..')
const PATH_TO_APP = path.join(PATH_TO_ROOT, 'app')
const PATH_TO_SRC = path.join(PATH_TO_ROOT, 'public', 'blog')

const postsCollection = []
const renderer = new marked.Renderer()
renderer.code = (code, language) => {
	const validLang = !!(language && highlightjs.getLanguage(language))
	const highlighted = validLang ? highlightjs.highlight(language, code).value : code
	return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`
}
renderer.image = (src, title, alt) => {
	return `<div class="post-image-container"><img src="${src}" alt="${alt}"/></div>`
}

marked.setOptions({
	renderer,
})

fs.readdirAsync(PATH_TO_SRC)
	.then(posts => {
		return Promise.map(posts, postDir => {
			const srcPostDir = `${PATH_TO_SRC}/${postDir}`

			return fs.readdirAsync(srcPostDir)
				.then(files => {
					const readJSON = fs.readFileAsync(`${srcPostDir}/data.json`, 'utf8')
					const readMD = fs.readFileAsync(`${srcPostDir}/post.md`, 'utf8')

					return Promise.join(readJSON, readMD, (json, md, imgs) => {
						const data = JSON.parse(json)

						postsCollection.push({
							date: data.date,
							topics: data.topics,
							title: data.title,
							urlTitle: postDir,
							html: marked(md),
						})
					})
				})
		})
	})
	.then(() => {
		fs.writeFileAsync(`${PATH_TO_APP}/posts.json`, JSON.stringify(postsCollection))
			.then(() => console.log(`Congratulations - generated posts.`))
	})
```

### Bluebird's `.promisifyAll`

A quick note: asynchronous file input/output can quickly lead to a labyrinth of callbacks. To help mitigate sphagetti code, you'll see that I leveraged `Bluebird.promisifyAll` - [documentation](http://bluebirdjs.com/docs/api/promise.promisifyall.html) - by wrapping Node's `fs` module:

```javascript
const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'))
```

`.promisifyAll` parses through an object, "promisifying" the object's methods. These new promises are accessed via the original method's name + a suffix of `Async`.

For example, to read a directory using `fs`, you would call `fs.readdir`; when wrapped in `promisifyAll`: `fs.readdirAsync`.

### Marked: Custom Parsers

Ywill have to write custom snippets to handle code rending in markdown:
	- docs: https://github.com/chjj/marked#block-level-renderer-methods
	- code/hightlightjs:(http://shuheikagawa.com/blog/2015/09/21/using-highlight-js-with-marked/
	- highlightjs doesn't ship with line numbers...check out: https://github.com/rvagg/node-pygmentize-bundled

### Next Steps + Improvements

- Easier post creation via CLI
- Eventually, `posts.json` might become too large to treat as a single file


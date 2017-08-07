# Personal Website and Blog

A stupid simple static app converting markdown to HTML.

Blog posts are stored as individual directories in `public/blog/`; each post directory contains:

- `data.json`
- `post.md`
- `img/`

`data.json` contains post-specific metadata (`title`, `date`, `topics`), while `post.md` contains the related markdown content; `img/` holds the post's images.

Running `./bin/gen` from root parses through each post directory in `public/blog/`, transforms the `post.md` file into HTML, and then adds this string under the key `html` to the relative `data.json` object. Each JSON object is then pushed to an array and is outputted at `app/posts.json` for use inside the React app.


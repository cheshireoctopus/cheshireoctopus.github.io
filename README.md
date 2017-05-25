# Personal Website and Blog

A stupid simple static app converting markdown to HTML.

Blog posts are stored as individual directories in `src`. each post directory contains two files:

- `data.json`
- `post.md`

`data.json` contains post-specific metadata (`title`, `date`, `topics`), while `post.md` contains the post content.

To convert the markdown files in `src` to HTML, run `./bin/gen` from root - these posts will be written to `blog`.


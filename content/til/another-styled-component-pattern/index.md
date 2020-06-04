---
title: "Another Styled Component Pattern"
date: "2020-05-19"
path: "export-named-components"
is_til: true
---

Today I learned yet another styled-components pattern.

[styled-components](https://styled-components.com/) is an approach to writing CSS within JavaScript. It uses [tagged template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) to enable the following:

```javascript
import styled from 'styled-components'

const Button = styled.button`
  color: #0974EC;

  &:hover {
    color: #EC2509;
  }
`
```

A great feature of styled-components is that you can wrap your application in a global theme provider and each styled component instance has access to:

```javascript
import styled from 'styled-components'

const Button = styled.button`
  color: ${({ theme }) => theme.color.blue};

  &:hover {
    color: ${({ theme }) => theme.color.red};
  }
`
```

While there is a whole debate to be had about the CSS-in-JS approach, I have found working with styled-components to be mostly pleasant save one aspect: having to pollute my components with the interpolated `${({ theme }) =>` in order to access the global theme. I have found that I am often using this interpolation 5+ times for each styled component I build 😱.

That all changed today:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I&#39;ve found you can further simplify this! This is how I write my styled-components now: <a href="https://t.co/LTQJfG96o1">pic.twitter.com/LTQJfG96o1</a></p>&mdash; Drake @ PDX (@Saeris) <a href="https://twitter.com/Saeris/status/1262441528078688256?ref_src=twsrc%5Etfw">May 18, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

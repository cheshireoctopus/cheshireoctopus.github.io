---
title: Curiosity and Why JSX Requires React in Scope
date: "2017-09-09"
path: "/curiosity-and-why-jsx-requires-react-in-scope/"
description: "This week I listened to Tyler McGinnis's podcast interview with Dan Abramov - creator of Redux, educator, and professional open-sourcer at Facebook."
tags: ["JavaScript"]
---

![curious cat](./curious.jpg)

### Curiosity

This week I listened to Tyler McGinnis's [podcast interview](https://tylermcginnis.com/podcast/dan-abramov/) with [Dan Abramov](https://medium.com/@dan_abramov) - creator of [Redux](https://github.com/reactjs/redux), [educator](https://egghead.io/instructors/dan-abramov), and professional open-sourcer at Facebook.

One of my main takeaways was Abramov's level of curiosity and how it lead him to rework [Facebook's Flux](http://facebook.github.io/flux/) into Redux.

Curiosity is an important trait for any developer, but the level of abstraction in modern JavaScript development - the focus on frameworks and libraries vs. the core language -  makes it easy to take functioning code for granted.

It is almost too easy to fall into this way of thinking - taking patterns, frameworks, build tools, etc. at their face value - especially when your primary responsibility as a developer in industry is to ship features. Between management and customer demands, coordination across teams, putting out fires from legacy code, and figuring out how to configure Webpack, you don't always have the energy, or time, to wonder why a library works the way it does - that the library solves your immediate problem is good enough.

Obviously this is not ideal - you should know why your tools behave the way they do.

So, as a challenge, follow Abramov's lead: embrace curiosity and challenge yourself to better understand the tools you take for granted.

I am starting off easy: why do we have to to import React into every component?

### Why JSX Requires React in Scope

If you've worked in React, you've undoubtedly come across the following ESLint error while working in JSX files:


```
'React' must be in scope when using JSX (react/react-in-jsx-scope)
```

This error is easily resolved by importing React into the module:

```jsx
import React from 'react'

const MyComponent = () => (
	<h1 className="title">Hello, World!</h1>
)

export default MyComponent
```

But why import React at all? It's not like we are actually referring to React anywhere inside of this compoent.

Right...?

In fact, we are; running the above component through [Babel's REPL](https://babeljs.io/repl/) returns:

```javascript
React.createElement(
	"h1",
	{ className: "title" },
	"Hello, World!",
)
```

As such, if we fail to import React when using JSX, we end up referring to an object that does not exist in scope: `React.createElement`.

You might be tempted to make React accessible from the global scope. While this will save you a few keystrokes in each React component, it might not be the ideal strategy as the overall JavaScript community appears to be shying away from using global variables in favor of local, explicitly declared dependencies.

Happy JavaScripting.



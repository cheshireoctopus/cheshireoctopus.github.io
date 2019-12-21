---
title: "You Can Filter Like That?"
date: "2019-12-20"
path: "you-can-filter-like-that"
tags: ["Programming", "JavaScript"]
---

One of the joys of programming is stumbling across novel ways to solve common problems.

For example, take the totally banal task of filtering falsy values from an array.

I typically perform this task in one of two ways.

Either, passing a function to JavaScript's `Array.prototype.filter` that simply returns each value in the array and relies on truthiness for filtering:

```javascript
const array = [1, 2, undefined, 4]
const filteredArray = array.filter(value => value)
```

Or, leveraging a utility like LoDash:

```javascript
const array = [1, 2, undefined, 4]
const filteredArray = _.compact(array)
```

While both approaches solve the problem, both feel inelegant. In the first example I dislike the redundancy of `(value => value)`. In the second, I feel guilty reaching for a utility when JavaScript provides native array filtering.

This week, I came across a third approach I find much more appealing:

```javascript
const array = [1, 2, undefined, 4]
const filteredArray = array.filter(Boolean)
```

Native _and_ not redundant!


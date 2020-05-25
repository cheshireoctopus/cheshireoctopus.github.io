---
title: "How to Give Box Shadow a Border Radius"
date: "2020-05-25"
path: "http-archive-file"
tags: ["TIL"]
is_til: true
---

Today I learned how easy it is to apply a border radius to an element's box shadow: just add `border-radius` to the element!

Allan, my co-founder at [Keming](https://keming.io), had recently overhauled the design our sign-up form to include box shadow with a border radius:

![box shadow with border radius](./border-radius-box-shadow.png)

Initially I thought that this would require modifying the `box-shadow` value in some way, but, much to my surprise and delight, an element's box shadow will respect and reflect its `border-radius` with no additional work required.

You can see this in the following CodePen:

https://codepen.io/cheshireoctopus/pen/rNObGRP

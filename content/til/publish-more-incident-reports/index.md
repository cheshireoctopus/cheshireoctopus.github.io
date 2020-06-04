---
title: "Publish More Incident Reports"
date: "2020-05-04"
path: "publish-more-incident-reports"
is_til: true
---

Today I learned that developers should publish more incident reports.

I say this after reading Forbes Lindesay's [post mortem report](https://medium.com/javascript-in-plain-english/is-promise-post-mortem-cab807f18dcc) on how a regression in the [is-promise](https://www.npmjs.com/package/is-promise). package he maintains took down `npm create-react-app` [for a hot second](https://github.com/then/is-promise/issues/13).

Lindesay's report is a must-read for any aspiring open-source maintainer or engineering leader.

It lays out in clear language:

* Mistakes that were made
* An incident timeline
* Context around factors leading to the mistakes
* Steps implemented to prevent future issues

Yes, this incident serves as another warning to developers that our code is built upon the work of open-source maintainers who demonstratively have the power to disrupt our own applications.

That said, the way in which Lindesay handled the situation is impressive and sets a high standard for all developers. We've all broken something - yet how many of us actually take the time to publish (even internally) why it happened and how we are working to prevent it from happening in the future?

It also makes me wonder at what point does a regression demand a public post-mortem? Looking at you, [Shadow Inc](https://en.wikipedia.org/wiki/Shadow_Inc.#IowaReporterApp).

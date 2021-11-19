---
title: 'Mirage.js'
date: '2020-05-12'

redirects:
  - /mirage-js
---

Today I learned about [Mirage.js](https://miragejs.com) while building tooling to support acceptance tests for a new client-side application.

Getting the acceptance test suite up and running was not very challenging thanks to [TestCafe](https://devexpress.github.io/testcafe/). What has proven more difficult is how we plan to handle fixture data.

I was stumped until a few colleagues recommend shimming the API and one suggested I look into Mirage.

Mirage is an API mocking tool that runs in the browser. It was built with frontend developers in mind and, from first glance, appears to provide a great developer experience.

It works by intercepting `XHR` and `fetch` requests and letting the developer mock responses. As it mocks the HTTP boundary, the client code does not need to be modified to tell it speak with Mirage versus your actual server.

Here is a code example lifted from the docs:

```javascript
// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { Server } from 'miragejs'

new Server({
  routes() {
    this.namespace = '/api'

    this.get('/users', () => [
      { id: '1', name: 'Luke' },
      { id: '2', name: 'Leah' },
      { id: '3', name: 'Anakin' },
    ])
  },
})

ReactDOM.render(<App />, document.getElementById('root'))
```

Beyond mocking an API, and what really has me interested, is that Mirage also contains a mock database that stores data and can setup relationships between various data models. Again, lifted from the docs:

```javascript
import { Server, Model, belongsTo } from 'miragejs'

new Server({
  models: {
    blogPost: Model.extend({
      author: belongsTo(),
    }),

    author: Model,
  },
})
```

Curious to see where this leads!

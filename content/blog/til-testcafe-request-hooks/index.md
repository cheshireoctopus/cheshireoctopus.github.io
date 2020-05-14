---
title: "TIL: TestCafe Request Hooks"
date: "2020-05-13"
tags: ["TIL"]
---

Today I learned about intercepting HTTP requests using [TestCafe request hooks](https://devexpress.github.io/testcafe/documentation/guides/advanced-guides/intercept-http-requests.html).

I have recently incorporated writing automated end-to-end tests into my workflow using [TestCafe](https://devexpress.github.io/testcafe/). When writing such tests (or any tests for that matter) you might find yourself in a situation where you need to mock an external service. TestCafe allows mocking of services via its [RequestMock class](https://devexpress.github.io/testcafe/documentation/reference/test-api/requestmock/).

Setting up mocks to run before a series of tests is straight forward. For example, if you are testing a UI that is only accessible to authorized users, you can mock out the authorization request as follows:

```javascript
import { RequestMock, Selector } from 'testcafe'

const authMock = RequestMock()
  .onRequestTo('http://localhost/api/auth')
  .respond({
    token: 'abc123',
  })

fixtures('Profile Page')
  .page('http://localhost:3000/profile')
  .requestHooks(authMock)
```

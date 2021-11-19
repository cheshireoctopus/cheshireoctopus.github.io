---
title: 'HTTP PUT vs PATCH'
date: '2020-06-03'
path: 'put-vs-patch'
---

I so frequently forget the difference between HTTP's `PUT` and `PATCH` methods I figured I'd write it down so that I would have easy access next time I forget.

## Overview

`PUT` and `PATCH` are **similar** in that both are HTTP methods used to update RESTful resources. The methods **differ** in the mechanics of how this updating occurs. In other words, a server will process the request body - the enclosed entity - of a `PUT` request different than that of a `PATCH` request.

## PUT

When processing a `PUT` request against a resource, a server will view the body of this request as the **new** resource, essentially overwriting the existing resource.

Because of this, clients making `PUT` request against a resource must send the **entire** resource to ensure it remains intact.

## PATCH

On the other hand, a server processing a `PATCH` request against a resource, views the body of the request as a **partial** update to the resource. The existing resource is then modified versus being overwritten entirely.

Clients making `PATCH` requests against a resource must only send the data to update as opposed to the entire resource.

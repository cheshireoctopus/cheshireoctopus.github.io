---
title: "HTTP Archive File"
date: "2020-05-01"
path: "http-archive-file"
is_til: true
---

Today I learned about HTTP Archive (HAR) files.

While attempting to replicate a bug, I asked the reporter to share her testing credentials so that I could replicate the bug and investigate the network traffic in my browser.

Another colleague suggested she simply share her network traffic with me by exporting a HAR file.

You can think of a HAR file as a snapshot or record of all network request between a browser and a server. Each time the browser makes an additional request, another entry is appended the HAR file. Each entry contains pertinent information one would need to debug a failed network requests:

* URL
* method
* request/response headers
* cookie values
* response HTTP status code
* response content
* and more

If this list feels familiar that is because the network tab in Chrome developer tools is a UI layer on top of a HAR file!

To export/import a HAR file in Chrome, open developer tools and navigate to the "Network" tab and use the appropriate arrow:

![developer tools har export](./dev-tools-har-export.png)

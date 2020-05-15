/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-b2443116d0a4e9464860.js"
  },
  {
    "url": "styles.428062bbacd6f9cb0e0a.css"
  },
  {
    "url": "styles-2308ca4dc6b4477fbba0.js"
  },
  {
    "url": "commons-d0716cda7b5cb39ba3ef.js"
  },
  {
    "url": "app-5d5688003cc314178238.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-e2650134bc80aeedcea5.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "c667bd96e039c89d4378622770242345"
  },
  {
    "url": "google-fonts/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOUuhp.woff2",
    "revision": "0edb76284a7a0f8db4665b560ee2b48f"
  },
  {
    "url": "google-fonts/s/opensans/v17/mem6YaGs126MiZpBA-UFUK0Zdc0.woff2",
    "revision": "b61a9055d92ac56c15cacf4271d4f072"
  },
  {
    "url": "google-fonts/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0b.woff2",
    "revision": "33543c5cc5d88f5695dd08c87d280dfd"
  },
  {
    "url": "google-fonts/s/yesevaone/v14/OpNJno4ck8vc-xYpwWWxli1VWw.woff2",
    "revision": "7a862e29ede310b5ba103d2a43e1b441"
  },
  {
    "url": "component---src-pages-404-js-a7fe603e83fb856d053f.js"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "3fbf264c16c3ff16b91d43bd061e336b"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "c355c8040c47a63bfb3360e4b7cb6553"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "6326c851b6dd91e2fc9606680201b034"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, workbox.strategies.staleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)
const WHITELIST_KEY = `custom-navigation-whitelist`

const navigationRoute = new workbox.routing.NavigationRoute(({ event }) => {
  const { pathname } = new URL(event.request.url)

  return idbKeyval.get(WHITELIST_KEY).then((customWhitelist = []) => {
    // Respond with the offline shell if we match the custom whitelist
    if (customWhitelist.includes(pathname)) {
      const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
      const cacheName = workbox.core.cacheNames.precache

      return caches.match(offlineShell, { cacheName }).then(cachedResponse => {
        if (cachedResponse) return cachedResponse

        console.error(
          `The offline shell (${offlineShell}) was not found ` +
            `while attempting to serve a response for ${pathname}`
        )

        return fetch(offlineShell).then(response => {
          if (response.ok) {
            return caches.open(cacheName).then(cache =>
              // Clone is needed because put() consumes the response body.
              cache.put(offlineShell, response.clone()).then(() => response)
            )
          } else {
            return fetch(event.request)
          }
        })
      })
    }

    return fetch(event.request)
  })
})

workbox.routing.registerRoute(navigationRoute)

let updatingWhitelist = null

function rawWhitelistPathnames(pathnames) {
  if (updatingWhitelist !== null) {
    // Prevent the whitelist from being updated twice at the same time
    return updatingWhitelist.then(() => rawWhitelistPathnames(pathnames))
  }

  updatingWhitelist = idbKeyval
    .get(WHITELIST_KEY)
    .then((customWhitelist = []) => {
      pathnames.forEach(pathname => {
        if (!customWhitelist.includes(pathname)) customWhitelist.push(pathname)
      })

      return idbKeyval.set(WHITELIST_KEY, customWhitelist)
    })
    .then(() => {
      updatingWhitelist = null
    })

  return updatingWhitelist
}

function rawResetWhitelist() {
  if (updatingWhitelist !== null) {
    return updatingWhitelist.then(() => rawResetWhitelist())
  }

  updatingWhitelist = idbKeyval.set(WHITELIST_KEY, []).then(() => {
    updatingWhitelist = null
  })

  return updatingWhitelist
}

const messageApi = {
  whitelistPathnames(event) {
    let { pathnames } = event.data

    pathnames = pathnames.map(({ pathname, includesPrefix }) => {
      if (!includesPrefix) {
        return `${pathname}`
      } else {
        return pathname
      }
    })

    event.waitUntil(rawWhitelistPathnames(pathnames))
  },

  resetWhitelist(event) {
    event.waitUntil(rawResetWhitelist())
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi } = event.data
  if (gatsbyApi) messageApi[gatsbyApi](event)
})

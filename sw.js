importScripts('/todo-list/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/todo-list/_nuxt/0bfaf41f0da5529d0bd8.js",
    "revision": "ab937b3c58797a382eb5953a8abd57da"
  },
  {
    "url": "/todo-list/_nuxt/13cecee8db25847147bf.js",
    "revision": "12bcdac0574cd4fdb7a02fe270a41229"
  },
  {
    "url": "/todo-list/_nuxt/2c4864f46ab5819abbec.js",
    "revision": "658a2566c8cddb1969740ae0a5489531"
  },
  {
    "url": "/todo-list/_nuxt/3d7c8d4fe0a2c8743b29.js",
    "revision": "71ccf5e8cba236868273fdc17f3a6d5c"
  },
  {
    "url": "/todo-list/_nuxt/8355556096be9623e7bb.js",
    "revision": "742ffb15b263326412131e3534f964d9"
  },
  {
    "url": "/todo-list/_nuxt/9e982ae9beacbabd4c8e.js",
    "revision": "a5930d917c1a893bc91230c085236da4"
  },
  {
    "url": "/todo-list/_nuxt/becf2b6f47fe2a8e1b5c.js",
    "revision": "47dbb753fb5aebb20e0c30f0ebfabb1a"
  }
], {
  "cacheId": "todo-list",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/todo-list/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/todo-list/.*'), workbox.strategies.networkFirst({}), 'GET')

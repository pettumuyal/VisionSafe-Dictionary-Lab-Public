// VisionSafe TRD Engineering Dictionary V2.3 Service Worker
// Version: visionsafe-v23-cache-v1
const CACHE_NAME = 'visionsafe-v23-cache-v1';

const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(APP_SHELL);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name.startsWith('visionsafe-v23-') && name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // STRICT POLICY: Only intercept same-origin requests
  if (url.origin !== self.location.origin) {
    return;
  }

  // STRICT POLICY: Only intercept requests within V2.3 scope
  if (!url.href.startsWith(self.registration.scope)) {
    return;
  }

  // Handle requests with Cache First, Fallback to Network (and fallback to index.html for navigation when offline)
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then(networkResponse => {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
          return networkResponse;
        })
        .catch(() => {
          // Offline fallback for navigation requests
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html').then(fallback => {
              if (fallback) return fallback;
              return caches.match('./');
            });
          }
        });
    })
  );
});

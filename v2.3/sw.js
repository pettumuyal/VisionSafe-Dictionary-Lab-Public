// VisionSafe TRD Engineering Dictionary V2.3 Service Worker
// Internal Incremental Release Cache: visionsafe-v23-009
const CACHE_NAME = 'visionsafe-v23-009';

const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/App_icon.png'
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
          .filter(name => (name.startsWith('visionsafe-v23-') || name.startsWith('visionsafe-v23')) && name !== CACHE_NAME)
          .map(name => {
            console.log('[VisionSafe SW] Retiring obsolete cache:', name);
            return caches.delete(name);
          })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // STRICT SECURITY & ISOLATION: Only intercept same-origin requests
  if (url.origin !== self.location.origin) {
    return;
  }

  // STRICT SCOPE PROTECTION: Only intercept requests within V2.3 scope
  if (!url.href.startsWith(self.registration.scope)) {
    return;
  }

  // Navigation requests (HTML application shell): Network-First with Cache Fallback
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(networkResponse => {
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // Offline fallback for navigation requests
          return caches.match('./index.html').then(fallback => {
            if (fallback) return fallback;
            return caches.match('./');
          });
        })
    );
    return;
  }

  // Static Assets (icons, manifest): Cache-First with Network Fallback
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
        });
    })
  );
});

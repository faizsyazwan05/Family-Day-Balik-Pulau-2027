self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('dashboard-store-v2').then((cache) => cache.addAll([
      './',
      './index.html',
      './manifest.json',
      './logo.png'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});

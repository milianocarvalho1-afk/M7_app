const CACHE_NAME = 'm7-hud-v2';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './manifest.json',
  './css/themes/roxo-neon.css',
  './js/app.js',
  './js/swipe-navigation.js',
  './js/feed-reels.js',
  './js/chat.js',
  './js/gamer.js',
  './js/gravador.js',
  './js/musica.js',
  './js/equalizador.js',
  './js/permissao.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});

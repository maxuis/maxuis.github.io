// Nombre del caché
var CACHE_NAME = 'mi-pwa-cache';

// Lista de archivos a cachear
var urlsToCache = [
  '/',
  '/CodigoMemoGame.js',
  '/EstiloMemoGame.css',
  '/Icono.JU.ME.png',
  '/indexMemoGame.html',
  '/ManifiestMemoGame.json',
  '/MujerAndroide.jpg',
  '/swMemoGame.js'
];

// Evento de instalación
self.addEventListener('install', function(event) {
  // Realizar la instalación del Service Worker
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Caché abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Evento de activación
self.addEventListener('activate', function(event) {
  // Limpiar cachés antiguos
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName !== CACHE_NAME;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

// Evento de fetch (recuperación de recursos)
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Recuperar del caché si está disponible, de lo contrario, recuperar de la red
        return response || fetch(event.request);
      })
  );
});

// Nombre del caché
var CACHE_NAME_PP = 'Cache-PWA-PP';

// Lista de archivos a cachear
var urlsToCache = [
  '/',
  '/Imagenes/Captura 1.png',
  '/Imagenes/Captura 2.png',
  '/Imagenes/Icono.png',
  '/Imagenes/Mujer.Androide.jpg',
  '/Sonidos/Sonido1.mp3',
  '/Sonidos/Sonido2.mp3',
  '/Sonidos/Sonido3.mp3',
  '/Sonidos/Sonido4.mp3',
  '/Sonidos/Sonido5.mp3',
  '/Sonidos/Sonido6.mp3',
  '/CodigoPingPong.js',
  '/EstilosPingPong.css',
  '/IndexPingPong.html',
  '/ManifiestoPP.json',  
  '/swPP.js',  
];

// Evento de instalación
self.addEventListener('install', function(event) {
  // Realizar la instalación del Service Worker
  event.waitUntil(
    caches.open(CACHE_NAME_PP)
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
          return cacheName !== CACHE_NAME_PP;
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

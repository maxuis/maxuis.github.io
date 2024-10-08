// Nombre del caché
var CACHE_NAME_TTT = 'Cache-PWA-P-0';

// Lista de archivos a cachear
var urlsToCache = [
  '/',  
  '/Build/Pong 0.data.br',
  '/Build/Pong 0.framework.js.br',
  '/Build/Pong 0.loader.js',
  '/Build/Pong 0.wasm.br',
  '/Imagenes/Captura 0.png',
  '/Imagenes/Captura 1.png',
  '/Imagenes/Captura 2.png',
  '/Imagenes/Captura 3.png',
  '/Imagenes/Captura 4.png',
  '/Imagenes/Icono.png',
  '/StreamingAssets/UnityServicesProjectConfiguration.json',
  '//TemplateData/favicon.ico',
  '/TemplateData/fullscreen-button.png',
  '/TemplateData/progress-bar-empty-dark.png',
  '/TemplateData/progress-bar-empty-light.png',
  '/TemplateData/progress-bar-full-dark.png',
  '/TemplateData/progress-bar-full-light.png',
  '/TemplateData/style.css',
  '/TemplateData/unity-logo-dark.png',
  '/TemplateData/unity-logo-light.png',
  '/TemplateData/webgl-logo.png',
  '/index.html',
  '/Manifiesto.json',
  '/sw.js'
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

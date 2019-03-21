importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.1.1/workbox-sw.js');

if (workbox) {
  console.log(`Workbox berhasil dimuat`);
  workbox.precaching.precacheAndRoute([
    { url: "/", revision: '1' },
    { url: "/manifest.json", revision: '1' },
    { url: "/nav.html", revision: '1' },
    { url: "/icon.png", revision: '1' },
    { url: "/index.html", revision: '1' },
    { url: "/images/bundes.png", revision: '1' },
    { url: "/images/championleague.jpg", revision: '1' },
    { url: "/pages/home.html", revision: '1' },
    { url: "/pages/liga.html", revision: '1' },
    { url: "/pages/ligabundes.html", revision: '1' },
    { url: "/pages/favorite.html", revision: '1' },
    { url: "/team.html", revision: '1' },
    { url: "/css/materialize.min.css", revision: '1' },
    { url: "/js/materialize.min.js", revision: '1' },
    { url: "/js/nav.js", revision: '1' },
    { url: "/js/api.js", revision: '1' },
    { url: "/js/db_football.js", revision: '1' },
    { url: "/js/idb.js", revision: '1' },
  ]);

workbox.routing.registerRoute(
    new RegExp('/'),
    workbox.strategies.staleWhileRevalidate()
  );

workbox.routing.registerRoute(
    new RegExp('/pages/'),
    workbox.strategies.staleWhileRevalidate()
  );

// Menyimpan cache dari CSS Google Fonts
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })
);

// Menyimpan cache untuk file font selama 1 tahun
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  workbox.strategies.cacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
      }),
    ],
  })
);
  
workbox.routing.registerRoute(
     new RegExp('https://api.football-data.org/v2/'),
     workbox.strategies.staleWhileRevalidate()
   );
 
}

else {
  console.log(`Workbox gagal dimuat`);
}

 self.addEventListener('push', function(event) {
  var body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push message no payload';
  }
  var options = {
    body: body,
    icon: 'images/icon.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});

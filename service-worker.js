self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("app-choco-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "style.css",
        "icone-192.png",
        "icone-512.png",
        "ChatGPT Image 28 de ago. de 2025, 20_25_25.png",
        "chocolate_caindo-removebg-preview.png",
        "chocolate_derretendo.png",
        "chocolateamargo-removebg-preview.png",
        "chocolate-com-pimenta-removebg-preview.png",
        "chocolate-ruby.png",
        "chocolate-ruby-removebg-preview.png",
        "É_mais_que_chocolate__é_prazer_-removebg-preview (1).png",
        "icone-192.png",
        "icone-512.png",
        "png-clipart-white-chocolate-praline-bonbon-flavor-white-chocolate-removebg-preview.png",
        "robloxface.png",
        "robloxnugget.png",
        "Tablete-Chocolate-ao-Leite-removebg-preview.png"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});


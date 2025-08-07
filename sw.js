self.addEventListener("install", (event) => {
  console.log("Almacenando archivos en caché.... ESPE");
  const wu = new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        const addFiles = ""; // Aquí se pueden agregar archivos a cachear
        console.log("Service Worker installed ESPE");
        resolve();
      }, 1000);
      self.skipWaiting(); // Forzar al Service Worker a activarse inmediatamente
    } catch (error) {
      reject(error);
    }
    event.waitUntil(wu);
  });
});
self.addEventListener("activate", (event) => {
  console.log("Service Worker activated.... ESPE");
  event.waitUntil(clients.claim()); // Asegura que el Service Worker tome el control de las páginas abiertas
});
self.addEventListener("fetch", (event) => {
  console.log("Cacheando claims");
  console.log(event.request.url);
});

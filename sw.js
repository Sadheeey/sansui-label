// 【山水】ラベル発行・在庫カウンターの service worker
// Chrome がホーム画面の「アプリ」として扱う（ブラウザのバーを出さない）ための最小限のもの。
// 中身は覚えない（キャッシュしない）：いつも最新の画面と、受付の最新の数を読むため。
// 受付（script.google.com）への呼び出しや POST には触らない（ブラウザにそのまま任せる）。
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(fetch(e.request));
});

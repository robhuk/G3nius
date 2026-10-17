const CACHE_NAME="genius-mobile-xc-v3";
const APP_SHELL=["./","./index.html","./schedule.html","./manifest.webmanifest","./icon-192.png","./icon-512.png","./icon-512-maskable.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(APP_SHELL)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{
 const r=e.request,u=new URL(r.url);
 if(r.method!=="GET"||u.origin!==self.location.origin)return;
 if(r.mode==="navigate"){
  const path=u.pathname.endsWith("/schedule.html")?"./schedule.html":"./index.html";
  e.respondWith(fetch(r).then(res=>{if(res&&res.ok){const c=res.clone();caches.open(CACHE_NAME).then(cache=>cache.put(path,c));}return res;}).catch(()=>caches.match(path).then(c=>c||caches.match("./index.html"))));
  return;
 }
 e.respondWith(caches.match(r).then(c=>c||fetch(r).then(res=>{if(res&&res.ok){const cp=res.clone();caches.open(CACHE_NAME).then(cache=>cache.put(r,cp));}return res;})));
});

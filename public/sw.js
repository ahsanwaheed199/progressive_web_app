
let cashData='AppV1';

this.addEventListener('install',(event)=>{
    event.waitUntil(
        caches.open(cashData).then((cache)=>{
            cache.addAll([
              '/static/js/0.chunk.js',
              '/static/js/main.chunk.js',
              '/index.html',
              '/static/js/bundle.js',
              '/',
              '/users'

            ])
        })
    )
    
})
this.addEventListener('fetch',(event)=>{
    if(!navigator.onLine){
    event.respondWith(
        caches.match(event.request).then((data)=>{
            if(data){
                return data
            }
        })
    )
    }
})
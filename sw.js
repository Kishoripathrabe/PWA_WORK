self.addEventListener('install', (e) => {
    console.log('installing');
    e.waitUntil(new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("done");
        },5000)
    }));
})
self.addEventListener('activate', (e) => {
    console.log('activated')
})
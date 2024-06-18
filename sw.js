self.addEventListener('fetch',(e)=>{
    if (e.request.url.endsWith('camera.html')) {
        console.log("Fetch " + e.request.url)
        e.respondWith(
            fetch(e.request)
            .then((res) => {
                if(res.ok) {
                    return res;
                }
                // fall back msg
                return new Response('Image not available');
        }))
    }
})
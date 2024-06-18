self.addEventListener('fetch',(e)=>{
    if(e.request.url.endsWith('style.css')){
        console.log("Fetch " + e.request.url);
        e.respondWith( fetch('style2.css'));
    }
    if(e.request.url.endsWith('greet')){
        console.log("Fetch " + e.request.url)
        let headers = new Headers({'Content-Type': 'text/html'});
        let customRes = new Response('<h1>Greeting</h1>', { headers });
        e.respondWith(customRes);
    }
})
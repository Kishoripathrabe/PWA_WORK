if (navigator.serviceWorker) {  
    console.log("I am main.js")
    navigator.serviceWorker.register('./sw.js').then((registration)=>{
        console.log("sw registered");
        registration.active?registration.active.postMessage('respond to this'):false;    
})
    navigator.serviceWorker.addEventListener('message',(e)=>{
        console.log("msg listening on main.js",e.data)
    })
}
if (navigator.serviceWorker) {  
    console.log("I am main.js")
    navigator.serviceWorker.register('./sw.js').then((registration)=>{
        console.log("sw registered");
        registration.active?registration.active.postMessage('Hello from main.js'):false;    
})
}
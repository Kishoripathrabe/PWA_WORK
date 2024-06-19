if (navigator.serviceWorker) {  
    console.log("I am main.js")
    navigator.serviceWorker.register('./sw.js').then((registration)=>{
        console.log("sw registered");
        registration.onupdatefound=()=>{
            let newSW=registration.installing;
            newSW.onstatechange=()=>{
                console.log('current state',newSW.state)
            }
            console.log("new sw found");
        }
        
})
}
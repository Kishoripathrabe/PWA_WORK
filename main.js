if (navigator.serviceWorker) {  
    console.log("I am main.js")
    navigator.serviceWorker.register('./sw.js',{scope:'/posts'}).then((registration)=>{
        console.log("sw registered");
    })
}
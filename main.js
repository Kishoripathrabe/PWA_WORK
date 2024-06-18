if (navigator.serviceWorker) {  
    console.log("I am main.js")
    navigator.serviceWorker.register('./sw.js').then((registration)=>{
        console.log("sw registered");
    })
}
fetch('./camera.html').then((res)=>{
    return res.text()
}).then((html)=>{
    document.getElementById('cam').innerHTML=html
})
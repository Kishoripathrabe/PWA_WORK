
console.log("I am sw.js")



self.addEventListener("install", (e) => {
    let installPromise = new Promise(resolve => {
        setTimeout(() => {
            resolve("Completing Async Cache Task")
        }, 5000)
    })
    e.waitUntil(installPromise);
    console.log("Sw:Install");
})
self.addEventListener("activate", (e) => {
    console.log("Sw:Ativated");
})

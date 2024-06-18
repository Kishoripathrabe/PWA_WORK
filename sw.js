
console.log("I am sw.js")



self.addEventListener("install", (e) => {
    console.log("Sw:Install");
})
self.addEventListener("activate", (e) => {
    console.log("Sw:Ativated");
})

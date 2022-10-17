console.log(document.title);
document.title = "Modifying the DOM";
console.log(document.title);
// document.body.style.backgroundColor = "#FF69B4";
document.body.style.backgroundColor = "rgb(134,34,56)";
// console.log(document.body.children)
const n = document.body.children
for (const enfants of n) {
    console.log (enfants)
}



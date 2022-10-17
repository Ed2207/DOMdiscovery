// DOM intro

// console.log(document.title);
// document.title = "Modifying the DOM";
// console.log(document.title);
// // document.body.style.backgroundColor = "#FF69B4";
// let a = Math.floor (Math.random ()* 254)
// let b = Math.floor (Math.random ()* 254)
// let c = Math.floor (Math.random ()* 254)
// document.body.style.backgroundColor = `rgb(${a},${b},${c})`;
// // console.log(document.body.children)
// const n = document.body.children
// for (const enfants of n) {
//     console.log (enfants)
// }

// DOM Selector

// const titres = document.getElementsByClassName("important");
// for (titre of titres){
//     titre.setAttribute ("title","This is an important item")
// }
// console.log (titre)

const images = document.querySelectorAll("img")
for (imgImp of images){
    if ((".important")[0]){
        imgImp.style.display = "block";
    } else {
        imgImp.style.display = "none";
    }
}
console.log(imgImp)

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
const imgclass = (element) => {
    return element.classList.length > 0;
};

const paragraphs = document.querySelectorAll("p");
for(const paragraph of paragraphs) {
    if (imgclass(paragraph)) {
        console.log(paragraph.innerHTML);
        console.log(paragraph.classList.value)
    } else {
        const a = Math.floor(Math.random() * 254);
        const b = Math.floor(Math.random() * 254);
        const c = Math.floor(Math.random() * 254);
        paragraph.style.color = `rgb(${a}, ${b}, ${c})`;
    }
}


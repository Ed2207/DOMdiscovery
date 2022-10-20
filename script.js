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
// const imgclass = (element) => {
//     return element.classList.length > 0;
// };

// const paragraphs = document.querySelectorAll("p");
// for(const paragraph of paragraphs) {
//     if (imgclass(paragraph)) {
//         console.log(paragraph.innerHTML);
//         console.log(paragraph.classList.value)
//     } else {
//         const a = Math.floor(Math.random() * 254);
//         const b = Math.floor(Math.random() * 254);
//         const c = Math.floor(Math.random() * 254);
//         paragraph.style.color = `rgb(${a}, ${b}, ${c})`;
//     }
// }

// DOM Creat

// const learner1 = document.createElement ("section")
// const couleur1 = Math.floor(Math.random()* 254);
// const couleur2 = Math.floor(Math.random()* 254);
// const couleur3 = Math.floor(Math.random()* 254);
// learner1.style.backgroundColor = `rgb(${couleur1}, ${couleur2}, ${couleur3})`

// const learner2 = document.createElement ("section")
// const couleur4 = Math.floor(Math.random()* 254);
// const couleur5 = Math.floor(Math.random()* 254);
// const couleur6 = Math.floor(Math.random()* 254);
// learner2.style.backgroundColor = `rgb(${couleur4}, ${couleur5}, ${couleur6})`

// const learner3 = document.createElement ("section")
// const couleur7 = Math.floor(Math.random()* 254);
// const couleur8 = Math.floor(Math.random()* 254);
// const couleur9 = Math.floor(Math.random()* 254);
// learner3.style.backgroundColor = `rgb(${couleur7}, ${couleur8}, ${couleur9})`

// const learner1txt = document.createElement ("p");
// const learner2txt = document.createElement ("p");
// const learner3txt = document.createElement ("p");

// const contenttxt1 = document.createTextNode ("Leaner number one");
// const contenttxt2 = document.createTextNode ("Leaner number two");
// const contenttxt3 = document.createTextNode ("Leaner number three");

// learner1txt.appendChild (contenttxt1);
// learner2txt.appendChild (contenttxt2);
// learner3txt.appendChild (contenttxt3);
// learner1.appendChild (learner1txt);
// learner2.appendChild (learner2txt);
// learner3.appendChild (learner3txt);

// const learner = document.createElement ("div");
// learner.append (learner1,learner2,learner3);
// const article = document.querySelector ('article');
// article.appendChild (learner);

// DOM Navigate
// const list = document.querySelector ("ol");
// const lastchildol = list.lastElementChild;
// list.prepend(lastchildol);


// const body = document.querySelector ("main");
// const section2 = body.children [2];
// const section3 = body.children [1];
// body.firstElementChild.appendChild (section2);
// body.appendChild (section3);

// body.lastElementChild.remove ();


// DOM Events

const _initTime = Date.now()
const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}
const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
}

const color = e.target.classList[1];
const div = document.createElement ("div");

div.classList.add (color);
div.addEventListener('click',clickOnDisplays);
const firstDiv = document.querySelector ("displayedsquare-wrapper");

firstDiv.append(div);

// event final
const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}
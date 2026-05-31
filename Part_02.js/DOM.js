// DOM HAS 4 pillars

// 1. selection of an element 
// 2. changing HTML 
// 3. changing CSS 
// 4. Event listener 

// 1. selection of an element 
// var a = doucument.querySelector("h2")
// console.log(a);

// ++++++++++++++add or remove Element++++++++++++++++++++++
function addOptionLanguage(langName){
const li = document.createElement('li');
li.appendChild(document.createTextNode(langName))
document.querySelector('.language').appendChild(li)
}
addOptionLanguage('golang')


// 2. changing HTML 
// var a = document.querySelector("h1")
//  a.innerHTML = "hihihihi";

// 3. changing CSS
// var a = document.querySelector("h1")
// a.style.color = "red"
// a.style.backgroundColor = "black"

// 4. Event listener 
var a = document.querySelector("h1")
a. addEventListener("click",function(){  
    a.innerHTML="changed text"
    a.style.color="yellow"
    a.style.backgroundColor="blue"
})


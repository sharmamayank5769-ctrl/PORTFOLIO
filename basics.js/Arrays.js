const myarr = [1,2,3,4,5,6]
// console.log(myarr[3]);

//array method


// myarr.push(6)
// myarr.push(5)
// myarr.pop()
// for starting element 
// myarr.unshift(9)
// myarr.shift(9)

// console.log(myarr.includes(9));
// console.log(myarr.indexOf(3));
// const newarr = myarr.join()
// console.log((newarr));


// console.log(myarr);




// Slice , splice 

console.log("A" , myarr);
const myn1 = myarr.slice(1,3)
console.log(myn1);

console.log("A" , myarr);

console.log("A" , myarr);
const myn2 = myarr.splice(1,3)
console.log(myn2);
console.log("B" , myarr);



// +++++++++++++++++++++++++++++++ARRAY PART 2 ++++++++++++++++++++++++++++++++++++++++++


// spread method in array 


let marvel_heros =["thor" , "ironman" , "spiderman"]
let dc_heros = ["superman" , "flash" , "batman"]


const all_new_heros = [...dc_heros,...marvel_heros]
console.log(all_new_heros);
  

// +++++++++++++++++++++++++flat method +++++++++++++++++++++++++++++++++

const new_array = [1,2,3,[4,5,6],7,[6,7[4,5]]]

const real_array = new_array.flat(Infinity)
console.log(real_array);



// +++++++++++++++++++convert into array +++++++++++++++++++++++++++++++



console.log(Array.isArray("mayank"));
console.log(Array.from("mayank"));
console.log(Array.from({name:"mayank"}));   //important

let score1 = 100
let score2 = 100
let score3= 500
console.log(Array.of(score1,score2,score3));







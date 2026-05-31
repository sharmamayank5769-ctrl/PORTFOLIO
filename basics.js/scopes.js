
// {} => function ke saath ayye toh function declration 
// {} => agr if -else ya kisi ke saath aaye toh scope
// {} iske andar vale ko global scope khate hai
if (true) {
    let a =10
    const b=2
    var c = 2
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "mayank"

function two(){
    const website = "youtube"
    console.log(username);
}
// console.log(website);        //andar vala function bhar vale function ko call kar sakte hai
two()                        // bahar vala function andar vale function ko call nhi kar sakta due to {}.
}
// one()

if (true) {
    const username = "mayank"
    if (username==="mayank") {
        const website = "youtube"
        // console.log(username+website);
        
    }
    // console.log(website);
    // console.log(username);
}
// console.log(username);

//++++++++++++++++++++++++intersesting++++++++++++++++++++++++++++++
console.log(addone(5));

function addone(num) {
    return num+1
}


// ++++++++++++++++ declaring function another method++++++++++++++++
console.log(addTwo(5));

const addTwo = function(num){
    return num +2
}




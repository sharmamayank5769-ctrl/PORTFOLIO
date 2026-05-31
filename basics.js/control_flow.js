// if statement flow
const isUserLoggedIn = true
if (isUserLoggedIn) {
    
}

// type checking with data type '===' use 

// const balance = 1000
// // if (balance>500) console.log("test"), console.log("test2");

// if (balance < 500) {
//     console.log("less than");
    
// }else if (balance <750){
//     console.log("less than 750");
    
// }else if (balance < 900){
//     console.log("less than 750");
    
// }else{
//     console.log("less than 1200");
    
// }


// const UserLoggedIn = true
// const debitCard = true
// const LoggedInfromgoogle = false
// const LoggedInfromemail = true

// if (UserLoggedIn && debitCard && 2==3) {
//     console.log("Allow to buy course");
    
// }
// if (LoggedInfromgoogle || LoggedInfromemail) {   // multiple condition check karne ke liye '||' use it 
//     console.log("user logged in");
    
// }

// ++++++++++++++++++ switch case  ++++++++++++++++++++++++

// const month = 3

// switch (month) {
//     case 1:
//         console.log("january");
        
//         break;
//     case 2:
//         console.log("february");
        
//         break;
//     case 3:
//         console.log("march");
        
//         break;
//     case 4:
//         console.log("april");
        
//         break;

//     default:
//         console.log("default case match");
        
//         break;
// }

// ++++++++++++++truthy or falsy ++++++++++++++++++++++


const useremail = "mayank@.ai"

if (useremail) {
    console.log("got user emai;");

    
}else {
    console.log("don't have user email");
    
}
//  falsy values 
// false , 0 , -0 , BigInt 0n , null , undefined , NaN

// truthy value 
// "0" , 'false', " " , [] , {} , function() {} 

// if (useremail.length === 0) {
//     console.log("array is empty");
    
// }
// const emptyobj = {} 
//  if (Object.keys (emptyobj).length === 0) {
//     console.log("object is empty");
    
//  }


// Nullish coalescing operator (??): null undefined 

let val1;
// val1 = 5??10
// val1 = null??10
// val1 = undefined ?? 15
val1 = null?? 10 ?? 5
console.log(val1);

// terniary operator

// condition ? true : false 
const iceteaprice = 100
iceteaprice <= 80? console.log("lessthan 80") : console.log("more than 80")







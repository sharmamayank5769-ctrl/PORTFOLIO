// let Logged = 1
// let booleanLogged = Boolean(Logged)
// console.log(booleanLogged);
let Look = "5"
let stringLook =String(Look)
console.log( typeof stringLook);



// "5" => 5
// "5abc" =>  NaN  (not a number)
// true => 1, false=> 0
// 1 = > true , 0 = > false
// "" => false 
// "mayank" = > true

/***********************************operations********************** */

let value = 5
let negvalue = -value
console.log(negvalue);
console.log(value+5);


let str1 = "hello"
let str2 = "mayank"
let str3 = str1 + str2;
console.log (str3);
 

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive) , Heap (NON - primitive )

// stack has make copy to change some thhing 
// heap has referce to change something in original value 


  let mayank = "sharma"

let anotheruser = mayank
anotheruser = "mayank sharma"
console.log(mayank);
console.log(anotheruser);



let userone  ={
    email : "use@google.com",
    Upi: "used@blip"
}

let usertwo = userone
    usertwo.email = "mayank@google.com"


console.log(userone.email);
console.log(usertwo.email);



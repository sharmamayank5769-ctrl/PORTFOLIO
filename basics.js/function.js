function saymyname() {
console.log("m");
console.log("a");
console.log("y");
console.log("a");
console.log("n");
console.log("k");
}


// saymyname()


                     //parameters
// function addtwonumbers(number1, number2) {
//     console.log(number1+number2);
    
// }
function addtwonumbers(number1, number2) {
//   let  result = number1 + number2
// console.log("mayank");
//  return result       // return result ke baad kuch bhi print nhi hoga 
    return number1 +number2  // jab bhi retuirn likhenge variable me store karna hoga number 
}
// addtwonumbers(3,3)   //arguments
const result  = addtwonumbers(3,3)
// console.log("Result:",result);

// function loginusermessage(username) {
//     if (username == undefined) {
//         console.log("please enter a username");
//         return
//     }
//     return`${username} just logged in`
// }

// console.log(loginusermessage("mayank"));


function calculatecartprice(val1,val2,...num1){
    return num1
}
    // console.log(calculatecartprice(200,400,500));
    
const user = {
    username: "mayank",
    Price: 199
}

function handleobject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.Price}`);
    
}

// handleobject(user)

handleobject({
    username: "sam",
    Price: 999
})

const mynewarray =[51,4,2,5]
function returnseconvalue(getArray) {
    return getArray[2]
}
console.log(returnseconvalue(mynewarray));

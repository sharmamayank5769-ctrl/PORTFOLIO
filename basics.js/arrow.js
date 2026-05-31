const user = {
    username: "mayank",
    price:99,

    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`);   //current context ko refer karta hai 
        console.log(this);
        
    }

}
// user.welcomemessage()
// user.username = "abhishek"
// user.welcomemessage()
// console.log(this);
// function chai() {
//     let username = "mayank"
//     console.log(this);
    
// }
// chai()


// const  chai = () => {
//     let username = "mayank"
//     console.log(this);
    
// }
// chai()

// +++++++++++++++++arrow function+++++++++++++++++
// const addTwo = (num1 , num2)=> {
//     return num1 +num2
// }
// const addTwo = (num1 , num2) =>  num1 + num2

// const addTwo = (num1 , num2) =>  (num1 + num2)
const addTwo = (num1 , num2) =>  ({username: "mayank"})
console.log(addTwo(3,4));



const myarray =[2,3,4,5,6]
myarray.forEach()


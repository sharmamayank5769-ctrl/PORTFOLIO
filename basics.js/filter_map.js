// const coding =["js" , "ruby" , "java" , "python" , "cpp"]

// const  values =coding.forEach((item) =>{
//     // console.log(item);
//     return item
// })

// console.log(values);


// const myNums = [1,2,3,4,5,6,7,8,9,10]
//  const newnums = myNums.filter( (num) => {
//     return num >4   //filter me scope open karne par return value honi chaiye
//      } )
// console.log(newnums);


// adding values 
const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newnums = myNums.map( (num) => num + 10)

//chaining method filter & map 
const newnums = myNums
.map((num) => num*10)
.map((num) => num+1)
.filter((num) => num>=40)
console.log(newnums);


//Reduse 

const mynumbers = [1,2,3]
// const mytotal = mynumbers.reduce(function (acc, curval){
//     console.log(`acc :${acc} and cuurrval: ${curval}`);
    
//     return acc+ + curval
// },3)

const mytotal = mynumbers.reduce((acc,curr) => acc+curr ,0)
console.log(mytotal);








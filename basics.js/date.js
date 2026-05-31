let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString());


// console.log( typeof myDate);



// let myCreateDate = new Date(2026 , 4 ,2)
// let myCreateDate = new Date(2026 , 4 ,2,6,2)
let myCreateDate = new Date("01-14-2026")
console.log(myCreateDate.toLocaleString());
// console.log(myCreateDate.toDateString());


let mytimestamp = Date.now()
console.log(mytimestamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);


newDate.toLocaleDateString('default' ,{
    weekday: "long",
    timeZone:''
    
    
})




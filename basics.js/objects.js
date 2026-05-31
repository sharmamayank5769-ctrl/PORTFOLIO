// object literals 

const mysym = Symbol("key1")     //symbol ko object ke andar print karana hai

const jsUser = {
    name :"mayank",
    "full name": "mayank sharma",
    age:18,
  [mysym] :"mykey1",
    location: "delhi",
     email: "mayanksharma@gmail.com",
     isLoogedIn: false,
     lastLoggedinDay:("monday" , "saturday")
}

// console.log(jsUser.email)
// console.log(jsUser["email"])   //main merthod to print all type of object     
// console.log(jsUser["full name"]);
// console.log(jsUser[mysym]);

jsUser.email = "mayank@chatgpt.com"     // changing email
// console.log(jsUser);
// Object.freeze(jsUser)        //frezzing the object 
jsUser.email = "mayank@microsoft"
// console.log(jsUser);

jsUser.greeting = function () {
    console.log("hello mayank keep learning js");
    
}
jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


// ++++++++++++++++++++Object in detail ++++++++++++++++++++++



//const tinderUser = new Object()

const tinderUser = {}      //ssingletun object
 tinderUser.id = "123abc"
 tinderUser.name = "mayank"
 tinderUser.isLoogedIn= false
// console.log(tinderUser);


const regularUser = {
    email: "mayank@gmail.com",
    fullname: {
        Userfullname: {
        firstname: "mayank",
        lastname: "sharma"
        
    }
}
}
console.log(regularUser.fullname.Userfullname);

const obj1 = {1: "a", 2:"b"}

const obj2 = {3: "c", 4:"d"}
// const obj3 = Object.assign({},obj1,obj2)    //welldefine print method in object in arry


const obj3 = {...obj1,...obj2}
console.log(obj3);

const User =[
    {
        id: 1,
        email: "mayank@gmail.com"
    },
    {
        id: 1,
        email: "mayank@gmail.com"
    },
    {
        id: 1,
        email: "mayank@gmail.com"
    },
]
User[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLogged'));


// +++++++++++++++destructuring objects ++++++++++++++++++++++++

const course  ={
    coursename: "js in hindi",
    price:"999",
    courseInstructor:"mayank"
}

// course.courseInstructor

const {courseInstructor: instructor} =course
// console.log(courseInstructor);
console.log(instructor);














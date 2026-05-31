
// arrays => forof loop
// objects => forin loop

// for of 

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}


const greetings =" great world"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
    
}

//maps 

const map = new Map()
map.set('IN', "INDIA")
map.set('us',"united state of america")
map.set('fr' , "france")


// console.log(map);

for (const [key ,value] of map) {
    // console.log(key, ':-' , value);
    
}

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift:"swift by apple"
}

for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`);
   
}


// const programming = ["js" , "rb", "py" , "java" ,"cpp"]


// for (const key in programming) {
// console.log(programming[key]);
// }



// for each loop


 const coding =[ "spiderman", "batman" , "flash"]
// coding.forEach( function (item) {
//     console.log(item);
    
// } )


// coding.forEach((item) => {
//     console.log(item);
    
// })

// function printMe (item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach( (item , index, arr)=> {
//     console.log(item ,index,arr);
    
// })


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
]

myCoding.forEach( (item)=> {
    console.log(item.languageName

        
    );
    
})
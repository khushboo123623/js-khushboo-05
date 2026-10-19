//Primitive:


//7 type:String,Number,Boolean,null,undefined,Symbol,BigInt

//Refrence:(Non Primitve):

//Array,Objects,Function.


//Arrays:Datatype=>object

 const heros=["shaktiman","naagraj","doga"]

//object:Datatype=>object
let myObj={
    name:"khusboo",
    age=21,
} 
//functions:Dataype=>function object

const myFunction= function(){
    console.log("Hello world");
}


console.log(typeof myFunction);


/* const score=100
const scoreValue=100.3
const isLoggedIn=false
const outTemprature=null
let userEmail;
let userEmail2=undefined
 */

/* const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId); */



//++++++++++++++++++++++++++++//
//Stack(Primitive).......Heap(Non-Primitive).
//stack:transfer copy to variable
//heap:transfer refrence of the variable
let myYoutubename="khushbooydotcom"

let anothername="myYoutubename"
anothername="khushydotcom"


console.log(myYoutubename);
console.log(anothername);


let userOne={
 email:"kc312@gmail.com",
 upi:"user@ybl"
}


let userTwo=userOne

userTwo.email="kc314@gmail.com"

console.log(userOne)
console.log(userTwo);


/* const name="khushboo"
const repoCount=6

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
 */
const gameName =new String('khushboo-kc')
/* console.log(gameName[0]);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(7));
console.log(gameName.indexOf('o'));

  */
const newString = gameName.substring(0,4)
console.log(newString);


const anotherString= gameName.slice(-8,4)
console.log(anotherString);


const newStringOne="  khushboo  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url="https://khushboo.com/khushboo%20chaudhary"
 

console.log(url.replace('%20','-'));

console.log(url.includes('aman'));


console.log(gameName.split('-'));

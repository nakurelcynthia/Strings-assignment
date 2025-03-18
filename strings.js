let x='extravaganza';
console.log(x.slice(8));

let constFood ='The quick fox jumped over the lazy dog';
let food = constFood.slice(0,4) +'eat ' + constFood.slice(4);
console.log(food);


let constStory= "The quick brown fox jumps over the lazy dog"
function countOccurrences(text, word) {
return text.toLowerCase().split(word.toLowerCase()).length - 1;}
console.log(countOccurrences(constStory, "the"));
console.log(countOccurrences(constStory, "brown"))


let constString1 ='The pupils are reading in the library';
let text1 =constString1.includes('are'? 'are' : 'not included');
console.log(text1);
let constString2 ='The child was sitting at the table before it fell';
let text2 =constString2.includes('sitting'? 'sitting' : 'not included');
console.log(text2);


let a='wonderful';
let b='amazing';
let c='UndERneath';
let d='A wonderful world';
console.log(a.toUpperCase());
console.log(b.toLowerCase());
console.log(c.toLowerCase());
console.log(d.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" "));
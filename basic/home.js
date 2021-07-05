console.log('hello');

alert('hello dear');

//  single line comments

var b = 'Beautiful';

console.log(b);

 var age = prompt('What is your age?');
 document.getElementById('someText').innerHTML = age; 


// Creating function
function fun(){
   console.log('Hello, I am function');
}

//call a function

fun();

function greeting(yourName){
   
   var result = 'Hello'+' '+ yourName; //string concatenation using + 
   console.log(result); 

}
var name =  prompt('What is your name?'); 
greeting(name);

function sumNumber(num1, num2){
    var result = num1 + num2;
    console.log(result);
}
sumNumber('Hello ', 'Abid');


// Loop
var num = 1;
while(num < 100){
    num += 1;
    console.log(num);
}

//new line 

let fruit = 'banana';
let moreFruit = 'Apple, banana, orange, lemon';

console.log(moreFruit.length);
console.log(fruit.indexOf('a'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban','123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase()); 
console.log(fruit.charAt(2));
console.log(fruit.split(''));// split by character
console.log(moreFruit.split(',')); //split by comma


var fruits = ['banana','apple','orange','pineapple','lemon'];
fruits = new Array('banana','apple','orange','pineapple','lemon');

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//array common method
console.log('To String', fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits.pop(), fruits);
console.log(fruits.push('blackberry'), fruits);

fruits.shift();
fruits.unshift();
fruits.slice(1,4);
fruits.reverse();
fruits.sort();

fruits.sort(function(a, b) {return a-b});//ascending order
fruits.sort(function(a, b) {return b-a}); //descending order 


//marge two array
firstArray.concat(secondArray);

let emptyArray = new Array();
for (let num = 0; num < 10; num++) {
    
    emptyArray.push(num);
}
console.log(emptyArray);



 let student = {
      fName : 'Abid',
      lName : 'Hasan',
      age : 25,
      height : 170,
      studentInfo : function(){
          return this.fName+ '\n' +this.lName+ '\n';
      }
  }
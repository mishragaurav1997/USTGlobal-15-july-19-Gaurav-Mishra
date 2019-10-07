//function name
function getSum(num1,num2){
    var sum  =num1+num2;
    return sum;
}
var a  = getSum(10,20);
 console.log("sum="+a);
 
 //another syntax(function expression)
 var getName =function(num1,num2){
      
    var sum = num1 +num2;
    return sum;
 }
 var sumVal=getName(10,20)
 console.log("ans="+sumVal);
 
 
 //anonymous function
( function(a,b){
  var  sum =a+b;
  console.log("sum="+sum)
}(10,40));

//lambda function (Fat Arrow function) one parameter does not require parenthesis no usage of function keyword
var getSum =(a,b)=>{
    var sum =a+b;
    return sum;
}
console.log(getSum(10,20));
var val =getSum(10,20);
console.log("ans="+val);

//Hoisting mein doubt hai ask bsdk
console.log(name);
var name ='Gandhi';
console.log()
// all global variables will be hoist to top,but assignment will be below only
// function will be of high priority
console.log(name1);
 var name1='Gandhi';
 console.log(name1);
 // with function (hoisting)
 function fnname(){
     console.log(name2);
     var name2 = 'dinga';
     //if without using var keyword a variable is declared then it will be global scope and not function scope.
 }
 fnname();
 // incase of named function only declaration will be hoisted to top but not the definition.
function first(callBack){
    setTimeout(function(){
        console.log("First");
        callBack();
    },1000);
    console.log("first");
}
function second(){
    console.log("second");
}
first(second);
//second();
//set timeout is API it will push to web API`s

//for each function



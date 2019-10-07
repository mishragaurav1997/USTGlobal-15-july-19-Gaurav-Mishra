//factorial of number 
// function name
function facto(a){
    var f =1;
    if(a!=0)
    {
        for(var i=1;i<=a;i++){
            f=f*i;
        }
        return f;
    }
    else{
        f=1;
    }
    return f;
    
}
var b = facto(5);
console.log("(function name) factorial="+b);

//factorial of number
//function expression
var facto = function(a){
    var f =1;
    if(a!=0)
    {
        for(var i=1;i<=a;i++){
            f=f*i;
        }
        return f;
    }
    else{
        f=1;
    }
    return f;
    
}
var b = facto(4);
console.log("(function expression) factorial="+b);
//factorial of number
//anonymous function
(function (a){
    var f =1;
    if(a!=0)
    {
        for(var i=1;i<=a;i++){
            f=f*i;
        }
    }
    else{
        f=1;
    }
    console.log("(anonymous function) factorial="+f);  
}(3));
//factorial number
//lambda function
var facto=(a) =>{
    var f =1;
    if(a!=0)
    {
        for(var i=1;i<=a;i++){
            f=f*i;
        }
        return f;
    }
    else{
        f=1;
    }
    return f;
}
var b =facto(6);
console.log("(lambda function) factorial="+b);
console.log("================================");

//Fibonacci Series
// function name
function fibo(num){
    var a = 0,b=1,count=2,c;
    console.log(a);
    console.log(b);
    while(count<num)
    {
        c=a+b;
        a=b;
        b=c;
        console.log(c);
        count++;
          
    }
    return c;
}
var d= fibo(4);
console.log("(function name)fibonacci series="+d);

//Fibonacci Series
//function expression

var fibo = function (num){
    var a = 0,b=1,count=2,c;
    console.log(a);
    console.log(b);
    while(count<num)
    {
        c=a+b;
        a=b;
        b=c;
        console.log(c);
        count++;
          
    }
    return c;
}
var d= fibo(8);
console.log("(function expression)fibonacci series="+d);
//Fibonacci Series
//anonymous function
(function (num){
    var a = 0,b=1,count=2,c;
    console.log(a);
    console.log(b);
    while(count<num)
    {
        c=a+b;
        a=b;
        b=c;
        console.log(c);
        count++;
        
    }
    console.log("(Anonmyous Function) fibonacci series");
 }(8));

//Fibonacci Series
//lambda function
var fibo = (num) =>{
    var a = 0,b=1,count=2,c;
    console.log(a);
    console.log(b);
    while(count<num)
    {
        c=a+b;
        a=b;
        b=c;
        console.log(c);
        count++;
          
    }
    return c;

}
var j= fibo(11);
console.log("(Lambda Function)fibonacci series="+d);

console.log("==================================================");
//circumference of circle
// function name
function circumference(r){
    var c =2*3.14*r;
    return c;
}
var b= circumference(5);
console.log("circumference of circle (function name)="+b);
//circumference of circle
//function expression
var circumference = function (r){
    var c =2*3.14*r;
    return c;
}
var b= circumference(5);
console.log("circumference of circle (function expression)="+b);

//circumference of circle
//anonymous function
(function (r){
    var c =2*3.14*r;
    console.log("circumference of circle (anonymous function)="+c);
}(5));
//circumference of circle
//lambda function
var circumference=(r)=>{
    var c=2*3.14*r;
    return c;
}
var b =circumference(5);
console.log("circumference of circle (lambada function)="+b);
console.log("==========================================");
// Add numbers in array
// function name
  function addition(b){
      var temp = 0;
      for(var i=0;i<=b.length;i++)
      {
          if(isNaN(b[i])){
              continue;
          }
          temp =temp + b[i];
      }
      return temp;
  }
  var ans =[10,20,30,40];
  var getSum = addition(ans)
  console.log("sum of array(function name)  ="+getSum);
// Add numbers in array
//function expression
var addition = function(b){
    var temp = 0;
    for(var i=0;i<=b.length;i++)
    {
        if(isNaN(b[i])){
            continue;
        }
        temp =temp + b[i];
    }
    return temp;
}
var ans =[10,20,30,40];
  var getSum = addition(ans);
  console.log("sumof array(function expression) ="+getSum);

// Add numbers in array
//anonymous function
(function(b){
    b =[10,20,30,40];
    var temp = 0;
    for(var i=0;i<=b.length;i++)
    {
        if(isNaN(b[i])){
            continue;
        }
        temp =temp + b[i];
    }
    console.log("sum of array(anonmyous function)=" +temp);
});

// Add numbers in array
//lambda function
var addition = (b)=>{
    var temp = 0;
    for(var i=0;i<=b.length;i++)
    {
        if(isNaN(b[i])){
            continue;
        }
        temp =temp + b[i];
    }
    return temp;
}
var ans =[10,20,30,40];
  var getSum = addition(ans);
  console.log("sumof array(Fat Arrow) ="+getSum);


console.log("===========================================")


// Prime numbers
// function name
 function prime(num)
{
    var a;
    var c=0;
    for(var i=1;i<=num;i++)
    {
        if(num%i==0)
        {
            c++;
        }
    }
        if(c==2)
        {
            a=true;
        }
        else{
            a =false;
        }
        return a;

}
var b =prime(37);
console.log("(function name)the number is prime no? ="+b);
// Prime numbers
//function expression
var prime =function(num)
{
    var a;
    var c=0;
    for(var i=1;i<=num;i++)
    {
        if(num%i==0)
        {
            c++;
        }
    }
        if(c==2)
        {
            a=true;
        }
        else{
            a =false;
        }
        return a;

}
var b =prime(36);
console.log("(function expression)the number is prime no? ="+b);
// Prime numbers
//anonymous function
(
    function(num){
        var a;
    var c=0;
    for(var i=1;i<=num;i++)
    {
        if(num%i==0)
        {
            c++;
        }
    }
        if(c==2)
        {
            a=true;
        }
        else{
            a =false;
        }
        console.log("(anonymous function)the number is prime no? ="+a);

    }(20));
//Prime numbers
//lambda function
var prime=(num)=>{
    var a;
    var c=0;
    for(var i=1;i<=num;i++)
    {
        if(num%i==0)
        {
            c++;
        }
    }
        if(c==2)
        {
            a=true;
        }
        else{
            a =false;
        }
        return a;
}
var b =prime(31);
console.log("(lambda function )the number is prime no? ="+b);

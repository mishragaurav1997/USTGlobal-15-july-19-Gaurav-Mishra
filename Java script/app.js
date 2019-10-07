// var fruits = ['apple','banana','mango','orange'];
// console.log(fruits);
// for(var i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }
// var vegetables=[];
// for(var j=0;j<vegetables.length;j++)
// {
//     console.log(vegetables[j]);
// }
// var todayDate= new Date();
// console.log('Todays Date='+todayDate);
// var Date = new Date(2018,11,24,10,33,30,0);
// console.log('Date='+Date);
// var month = ['jan','feb','mar','april','may','june','july','aug','sept','oct','nov','dec'];
// var day=['sun','mon','tue','wed','thur','fri','sat'];
// console.log(month[todayDate.getMonth()]);
// console.log(day[todayDate.getDay()]);
// console.log(Math.ceil(4.6));
// console.log(Math.random());
// console.log(Math.floor(4.4));
// console.log(Math.round(7.4));
// console.log(Math.pow(5,5));
// console.log(Math.random()*10+Math.random());    
// //for(var i=10;i<;i++)
// //{
// //console.log(Math.round(i));
// //}
// //primitive type
// var name ='rahul';
// console.log(name);
// var name1 = name;
// console.log(name1);
// name1='gandhi';
// console.log(name);
// console.log(name1);
// //refrence type
// var person ={
//     name: 'tanu'
// };
// console.log(person.name);
// var person1 =person;
// console.log(person1.name);
// person1.name = 'anu';
// console.log(person.name);
// console.log(person1.name);
// // creating object using new as keyword
// var person = new Object();
// person.name ='Amir';
// person.age ='55';
// person.height ='5.4';
// console.log(person.name);
// console.log(person.age);
// console.log(person.height);

// // array using new as keyword
// var fruits = new Array('Apple','orange');
// console.log(fruits);
// console.log("==============================");


// var num1 =10;
// var name = 'my name';
// var num2 ='10';
// if(num1===num2){
//     console.log("equal");
// }
// else{
//     console.log("not equal");
// }
// //if condition in js ternary operator
//  var equals =(num1===num2)?'true':'false';
//  console.log("ans=" +equals);
 
//  //else if in ternary
//  var comp = (num1>11)?'greater':(num1===11)?'equals':'smaller';
//  console.log("op="+comp);
  
// //type of operator
// var myAge =50;
// console.log(typeof myAge);
// var myName ='Gaurav';
// console.log(typeof myName);
// var hobbies =['cricket', 'bike riding','coding', ,];
// console.log(typeof hobbies);
// console.log(Array.isArray(hobbies));

// //complex array
// var library =[
//                   {
//                        author:'Bill Gates',
//                        title:'The Road Ahead',
//                        bookID:1254
//                     },
//                     {
//                      author:'Steve Jobs',
//                       title:'Walter Issacson',
//                       bookID:4264
//                     },

//             { 
//                 author:'Suzanne Collins',
//                 title:'Mockingjay',
//                    bookID:3254
            
//               }];
// for(var i=0;i<library.length;i++)
// {
//     console.log(library[i]);
//     console.log(library[i].author);
//     console.log(library[i].title);
// }
 
// //for of,for in,for each
// for(var index in hobbies)
// {
//     console.log("Hobbies="+hobbies[index]);
// }
// for(var index in person){
//     console.log(person[index]);
// }
// for(var index of hobbies)
// {
//     console.log("Hobbies=" +[index]);
// }
// //break will break only loops not statements.

// //adding value in array
// console.log("==========================");
// hobbies[5]='lan gaming';
// hobbies['name']='jumping;'

// for(var index in hobbies)
// {
//     console.log("Hobbies="+hobbies[index]);
// }
// for(var index of hobbies)
// {
//     console.log("Hobbies=" +[index]);
// }
var str = "How are you doing today?";
var res = str.split("o",2); 
console.log("output ="+res);



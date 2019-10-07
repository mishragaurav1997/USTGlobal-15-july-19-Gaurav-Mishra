function sum(a,b){
    function addSum(){
        return a+b;
    }
return addSum;
}
var addFunc = sum(10,20);
var total =addFunc();
console.log("ans =",total);
console.log("=========================================");
console.log(window); 
console.log(this);
console.log(this===window);
var name ='Rakshith';
console.log(window.name);
console.log(this.name);

var person ={
    name : 'Dulker Salman',
    age : 30,
    getName : function(){
        console.log(this);
        console.log(this.name);
        console.log(window);
        getData();
        function getData(){
            console.log("Get the Data "+this);
        }
        return this.name;
    }
}
var heroName = person.getName();
console.log(heroName);
// whenever to invoke a method using object reference, then your"this" keyword consist of that object...
// let keyword we can only declare only once let name let name
//i case of var re declaration is possible.
for(var i=0;i<=5;i++)
{
    console.log(i);
}
console.log(i);
var hobbies = ['dancing','singing','cricket'];
console.log("hobbies"+hobbies);
var hobbies = ['numismatics'];
console.log('hobbies ='+hobbies);
console.log("======================================================");
let fruits =['orange','Banana'];
console.log("fruits ="+fruits);
 fruits = ['Jackfruit'];
console.log('fruits ='+fruits);
console.log("=====================================================");
//const as keyword
const items =['lipstick','kajal','deo','wallet'];
console.log("items ="+items);
// const items = ['bag','book'];
// console.log("items =" +items);
items [0] =['bag','book'];
console.log("items ="+items);
// we can store array inside array in java script like [10,[20,30],[40,50]]

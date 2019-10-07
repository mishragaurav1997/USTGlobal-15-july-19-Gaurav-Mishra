var hobbies =['coding','dancing','skipping','jumping'];
hobbies.forEach ((value,index) => {
    console.log('hobbies='+value)
});
console.log("=================");
var hobbies =['coding','dancing','skipping','jumping'];
hobbies.forEach (function(value,index)  {
    console.log('hobbies='+value)
});
//push method
       hobbies.push('biking','travelling');
       console.log("pushed hobbies="+hobbies);
//pop to remove element from array
hobbies.pop();
hobbies.pop();
console.log("poped hobbies="+hobbies);
//unshift is used to insert element in start of array
hobbies.unshift('gaming');
console.log("unshifted Hobbies="+hobbies);
//shift is used to remove first element from arrays 
hobbies.shift();
console.log("shifted Hobbies= "+hobbies);
// hobbies.include to find it has element in array or not it returns true or false
// it finds only once for first one without finding second one
var hasHobbies = hobbies.includes('cooking');
console.log(hasHobbies);
console.log("==================================");
hobbies.splice(0,0,'reading','writing');
console.log(hobbies);
//slice method
 var hobbies1 = hobbies.slice(0,2);
console.log("sliced array= "+hobbies1);
//join method it convert the array as string and add separator(-)
var joinHobbies = hobbies.join( );
console.log(joinHobbies);
//indexof('coding') invalid returns -1
var indexHobbies = hobbies.indexOf('jumping');
console.log(indexHobbies);

//map method
var numbers =[10,20,30,40];
newNumbers=numbers.map((value,index) => {
value=value+10;
return value;
});
console.log("old array is= "+numbers);
console.log("Mapped array is= "+newNumbers);

//filter method
number1=numbers.filter(( value,index)=>{
    return value >=30;
});
console.log("filtered array= "+number1);
// map method in complex array
var items=[
    {
        item:'pen',
        price:50
    },
    {
        item:'bag',
        price:500
    },
    {
        item:'laptop',
        price:50000
    },
    {
        item:'mouse',
        price:500
    }];
    //Map items in complex array
    var mapItems =items.map((value) =>{
        value.price=value.price +10;
        return value;
    });
    console.log(mapItems);
    console.log("======================");
    //filter method in complex array
    var filterItems = items.filter((value)=>
    {
        return value.price>100 && value.item.length>3;
    });
    console.log(filterItems);

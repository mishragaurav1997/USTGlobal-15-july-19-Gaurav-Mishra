//for each method
var cloth =['shirt','pant','trouser','t-shirt','jeans'];
cloth.forEach(( value)=>{
// console.log("cloth ="+index);
console.log("cloth ="+value)
});
console.log("============================================================");
// for each method
var transport =['car','bus','truck','bike'];
transport.forEach((value)=>{
    console.log("trans ="+value);
});

//push
      cloth.push('shorts','lower');
      console.log("push method =" +cloth);
      transport.push( 'cruise','flight');
      console.log("pushed ="+transport);
//pop
cloth.pop();
cloth.pop();
console.log("poped ="+cloth);
transport.pop();
transport.pop();
console.log("poped ="+transport);
//unshift
cloth.unshift('blazer');
console.log("unshift ="+cloth);
transport.unshift('bicycle');
console.log("unshifted ="+transport);
//shift
cloth.shift();
console.log("shifted ="+cloth);
transport.shift();
console.log("shift ="+transport);
//includes
var fashion = cloth.includes('jeans');
console.log(fashion);
var a=transport.includes('bus');
console.log(a);
//splice
cloth.splice(1,0,'coat','tie');
console.log(cloth);
transport.splice(0,0,'rickshaw','cabs');
console.log(transport);
//slice
var slice1 = cloth.slice(0,3);
console.log("sliced ="+slice1);
var slice2 = transport.slice(0,2);
console.log("slice2 ="+slice2);
//joins
var hasCloth = cloth.join("-");
console.log("join ="+hasCloth);
var hasTransport = transport.join();
console.log("hasTransport ="+hasTransport);
//indexOf
var indexCloth = cloth.indexOf('trouser');
console.log(indexCloth);
var indexTransport = transport.indexOf('train');
console.log(indexTransport);

//map method
var numbers =[80,70,30,140];
newNumbers=numbers.map((value,index) => {
value=value+100;
return value;
});
console.log("old array is= "+numbers);
console.log("Mapped array is= "+newNumbers);

//filter method
number1=numbers.filter(( value,index)=>{
    return value >=100;
});
console.log("filtered array= "+number1);
console.log("===========================================================================");
//tolowercase
var str ='Banana';
var newString = str.toLowerCase();
console.log("lowercase= "+newString);
// uppercase
var str1 = 'banana';
var newString = str1.toUpperCase();
console.log("uppercase= "+newString);
//charAt
var a =str.charAt(3);
console.log("charat= "+a);
//indexOf will return 1 or -1
var b =str.indexOf('n');
console.log("Indexof= "+b);
//concatination
var c =str.concat('-mango');
console.log("conCat= "+c);
//includes string
var d = str.includes('n',1);
console.log("includes= "+d);
//replace string
var e = str.replace('a','A');
console.log("replace= "+e);
//split string
var f = str.split('p',2);
console.log("split= "+f);
//substr string
var g = str.substr('0','3');
console.log("spilt="+g);
var h = str.search("n");
console.log("search ="+h);
var str2 ='ba na na'
var i = str2.trim(0);
console.log("trim ="+i);

//tolowercase
var str ='Pineapple';
var newString = str.toLowerCase();
console.log("lowercase= "+newString);
// uppercase
var str1 = 'pineapple';
var newString = str1.toUpperCase();
console.log("uppercase= "+newString);
//charAt
var a =str.charAt(2);
console.log("charat= "+a);
//indexOf will return 1 or -1
var b =str.indexOf('e');
console.log("Indexof= "+b);
//concatination
var c =str.concat('-Banana');
console.log("conCat= "+c);
//includes string
var d = str.includes('l',1);
console.log("includes= "+d);
//replace string
var e = str.replace('p','P');
console.log("replace= "+e);
//split string
var f = str.split('p',2);
console.log("split= "+f);

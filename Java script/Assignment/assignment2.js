//create 5 objects using new keyword with a function
var person= new Object();
person.name='Gaurav';
person.age=22;
person.height=6;
person.gender='male';
console.log(person);

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create a Person object
var myFather = new Person("John", "Doe", 50, "blue");
var myMother= new Person("Marry","Doe",49,"Brown");
var myWife= new Person("lily","Doe",22,"Brown");
var mySon= new Person("Max","Doe",1,"Brown");
var myDaughter= new Person("pinki","Doe",0.5,"Blue")

// Display age
console.log(myFather);
console.log(myMother);
console.log(myWife);
console.log(mySon);
console.log(myDaughter);

console.log("===============================================================");

//create 5 objects without using new keyword
var person={
  name:'Gaurav',
  age:21,
  height:6,
 gender:'male',  
}
console.log(person);



(function (){
  var person={
     name:'gaurav',
     age:22,
     height:6,
    gender:'male',
 
     
 }
 console.log(person)

 var person1={
  name:'shreyas',
  age:22,
  height:5.5,
 gender:'male',

  
}
console.log(person1)

var person2={
  name:'vignesh',
  age:22,
  height:6.5,
 gender:'male',

  
}
console.log(person2)

var person3={
  name:'ashutosh',
  age:22,
  height:5.6,
 gender:'male',

  
}
console.log(person3)

var person4={
  name:'shushant',
  age:22,
  height:6.5,
 gender:'male',

  
}
console.log(person4)



}());

console.log("==============================================================================");

//create 5 arrays without using new keyword
var it_companies=['TCS','Infosys','Wipro','Tech Mahindra','Ust Global'
];
console.log(it_companies);
var resp=['trachea','bronchii','lungs','broncheoles','alveoli']
var dig=['mouth','oesaphagus','stomach','pancreas','small intestine','large intestine','rectum']
console.log(resp);
console.log(dig);
var ear=['Eustachian tube','Cochlea','Vestibule','Semi circular canals','Oval Window'];
console.log(ear);
var eye=['Sclera','iris','cornea','pupil','lens']
console.log(eye);



console.log("====================================================================");


//create 5 arrays using new keyword
var fmcg= new Array('Hindustan Unilever Limited', 'Colgate-Palmolive','ITC Limited','Nestle','Parle Agro');
console.log(fmcg);
var carpels=new Array('Scaphoid','Lunate','Triquetrum','Pisiform','Trapezium','Trapezoid','Capitate','Hamate');
console.log(carpels);
var thigh=new Array('femur','Tibia','Fibula','Patela');
console.log(thigh);
var shoulder=new Array('Acromion','Coracnoid Process','Scapular notch','supraglenoid tubercle','Glenoid cavity');
console.log(shoulder);
var virtibrae=new Array('Cervical','Thoracic','Lumbar','Sacral','Coccygeal');
console.log(virtibrae);
console.log("===============================================================================");

//Loop through the arrays created and print the value in console
for (var i=0;i<fmcg.length;i++){
  console.log(fmcg[i]);
}


console.log("=======================================================================");

//engines of different browsers
console.log('V8 from Google is the most used JavaScript engine. Google Chrome and the many other Chromium-based browsers use it, as do applications built with CEF, Electron, or any other framework that embeds Chromium. Other uses include the Node.js runtime system.SpiderMonkey is developed by Mozilla for use in Firefox and its forks. The GNOME Shell uses it for extension support.JavaScriptCore is Apples engine for its Safari browser. Other WebKit-based browsers also use it. KJS from KDE was the starting point for its development.[9]Chakra is the current engine of the Microsoft Edge browser, forked from the same-named engine of Internet Explorer. However, Microsoft is now rebuilding Edge as a Chromium-based browser,[10][11] so it will be using V8 instead of Chakra. Internet Explorer continues to use its version of Chakra.')
let employeeData = new Promise(function(resolve,reject){   
const employee= [
    {
        name: 'shahrukh',
        age: 60
    },
    {
        name:'sundari',
        age:45 
    },
    {
        name:'Akshay',
        age:50
    }
];
    if(10<10){
        reject('Failed');
    }
    else{
        resolve(employee);
    }
});
employeeData.then((data)=>{
return data;    
//console.log('Employee Data =',data);
}).catch((error)=>{
    console.log('Catch block ='+error);
}).then(function(data1){
    console.log('This is then block 2',data1);
});
function validForm(){
    let formData= document.forms[0];
   let name1 = formData.fname.value;
   let name2 = formData.lname.value;
   if(name1.length>4 && name2.length>7)
   {
       console.log("sucesss");
       formData.fname.style.border = '2px solid green';
       formData.lname.style.border = '2px solid green';
    formData.loginSubmit.disabled=false;
    document.getElementById('null').style.display='none'
    document.getElementById('null1').style.display='none'
}
   else{
       formData.fname.style.border = '2px solid red';
       formData.lname.style.border = '2px solid red';
       formData.loginSubmit.disabled = true;
       document.getElementById('null').style.display='inline-block';
       document.getElementById('null').style.color='red'
       document.getElementById('null1').style.display='inline-block';
       document.getElementById('null1').style.color='red';


   }
}
function validForm1(){
    let formData1= document.forms[0];
    let empid = formData1.emp.value;
    if(empid>0 && empid<10001){
        formData1.emp.style.border ='2px solid green';
        formData1.loginSubmit.disabled=false;
    }
    else{
        
        formData1.emp.style.border ='2px solid red';
        formData1.loginSubmit.disabled = true;
    }
}
function validForm2(){
    let formData2 =document.forms[0];
    let doj = formData2.joinDate.value;
    let todayDate = new Date();
    if(doj>todayDate)
    {
        formData2.joinDate.style.border ='2px solid green';
        formData2.loginSubmit.disabled = false;
    }
    else{
        formData2.joinDate.style.border ='2px solid red';
        formData2.loginSubmit.disabled = true;
    


    }
}
function validForm3(){
    let formData2 =document.forms[0];
    let cname = formData2.compName.value;
    if(cname.length<15)
    {
        formData2.compName.style.border ='2px solid green';
        formData2.loginSubmit.disabled = false;
    }
    else{
        formData2.compName.style.border ='2px solid red';
        formData2.loginSubmit.disabled = true;
        
           document.getElementById('ino').innerHTML =
             `<p style="color:red">lorem gcytgjc</p> `;
    }
}
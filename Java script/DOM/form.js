// function validateForm(){
//    let formData = document.forms[0];
//    console.log(formData);
//    //console.log(formData.Username.value);
//    let username= formData.Username.value;
//    if(username.length>4){
//        console.log('Success');
//        formData.Username.style.border = 'none';
//    }
//    else{
//        formData.Username.style.border = '2px solid red';
//        console
//    }
// }
// function validatePass(){
//     let formPass = document.forms[0];
// console.log(formPass);
// let password = formPass.Password.value;
// if(password.length>7){
//     console.log('Password Sucess');
// formPass.Password.style.border ='none';
// }
// else{ 
//     formPass.Password.style.border = '2px solid blue';
      

// } 
// }
function validateForm(){
     let formData= document.forms[0];
    let username = formData.Username.value;
    let password = formData.Password.value;
    if(username.length>4 && password.length>7)
    {
        console.log("sucesss");
        formData.Username.style.border = '4px solid green';
        formData.Password.style.border = '4px solid green';
        formData.loginSubmit.disabled=false;

    }
    else{
        formData.Username.style.border = '4px solid red';
        formData.Password.style.border = '4px solid red';
        formData.loginSubmit.disabled = true;

    }
}
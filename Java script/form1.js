function validate(){
  let employeeData =  document.forms['employeeForm'];
  let empPassword = employeeData.pass.value;
  let empCPassword = employeeData.cpass.value;
  if(empPassword === ' ' && empCPassword === ' '){
      return false;
  }
   if(empPassword === empCPassword){
      alert('Sucess');
      return true;
  }
  else{
      alert('password not matching');
      return false;
  }
}
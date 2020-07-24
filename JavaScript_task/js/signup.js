function formvalididation()
{
  var username=document.register.name;
  var email = document.register.email;
  var mobilenumber =document.register.mobilenumber;
  var gender =document.register.gender;
  var pass1 = document.register.password1;
  var pass2 = document.register.password2;
  if(validateusername(username))
  {
    if(validateemail(email))
    {
      if(validatemobilenumber(mobilenumber))
      {
       if(gender.value!="")
       {
         if(validatepassword(pass1,pass2))
         {
         alert("Successfully account is created");
       }
       else {
            alert("Successfully account is failed");
      }
      }
      else {
             alert("Choose Gender");
             gender.focus();
      }
  }
}
}
}


function validatepassword(pass11,pass21) {
  var pass1 = pass11.value;
  var pass2 = pass21.value;
  if(pass1!= pass2){
    alert("enter the same password in confirm password");
    pass21.focus();
    return false;
  }
  if(pass1==""){
    alert("password cannot be empty");
    pass11.focus();
    return false;
  }
  if(pass2==""){
    alert("password cannot be empty");
    pass21.focus();
    return false;
  }

  if(pass1==pass2){
    return true;
  }
}









function validatemobilenumber(mobilenumber) {
  var num = mobilenumber.value;
  if(num.length!=10)
  {
    alert("Enter Correct Number");
    num1.focus();
    return false;
  }
  var le =  /^[0-9]+$/;
  if(num.match(le))
  {
    return true;
  }
  else{
    alert("Enter Only Numbers ");
    num1.focus();
    return false;
  }
}



function validateusername(username) {
  var name = username.value;
  var l = /^[A-Za-z ]+$/;
  if(name.match(l)){
    return true;
  }
  else{
    alert("Enter Only Alphabets");
    username.focus();
    return false;
  }
}





function validateemail(email) {
  var email1 = email.value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(email1.match(mailformat))
  {
    return true;
  }
  else
  {
    alert("Enter a valid Email and Try Again !");
    email.focus();
    return false;
  }
}
function validateusername(username) {
  var name = username.value;
  var l = /^[A-Za-z ]+$/;
  if(name.match(l)){
    return true;
  }
  else{
    alert("Enter Only Alphabets");
    username.focus();
    return false;
  }
}

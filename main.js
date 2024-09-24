function handleSubmit() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let pwd = document.getElementById("pwd").value;
    let confPwd = document.getElementById("confPwd").value;
  
    let fnameerror = document.getElementById("fname-error");
    let lnameerror = document.getElementById("lname-error");
    let emailerror = document.getElementById("email-error");
    let pwdError = document.getElementById("pwd-error");
    let confPwdError = document.getElementById("confPwd-error");
  
    fnameerror.innerHTML = "";
    lnameerror.innerHTML = "";
    emailerror.innerHTML = "";
    pwdError.innerHTML = "";
    confPwdError.innerHTML = "";
  
    let isValid = true;
  
    if (fname === "") {
      fnameerror.innerHTML = "First name is required";
      isValid = false;
    }
  
    if (lname === "") {
      lnameerror.innerHTML = "Last name is required";
      isValid = false;
    }
  
    if (email === "") {
      emailerror.innerHTML = "Email is required";
      isValid = false;
    }
  
    if (pwd === "") {
      pwdError.innerHTML = "Password is required";
      isValid = false;
    }
  
    if (confPwd === "") {
      confPwdError.innerHTML = "Confirm Password is required";
      isValid = false;
    }
  
    if (pwd !== confPwd) {
      confPwdError.innerHTML = "Passwords do not match";
      isValid = false;
    }
  
    if (isValid) {
      alert("Your form is submitted successfully.");
    }
  
    return isValid;
  }
  
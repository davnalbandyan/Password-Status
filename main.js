let passwordInput = document.getElementById("password");
let statusP = document.getElementById("status");
let message =document.getElementById("message")

passwordInput.addEventListener("input",function(){
    let value = passwordInput.value;
    if(value.length > 0){
      message.style.display = "block";
      passwordInput.style.cssText = "border-color:red";
      message.style.color = "red";
      statusP.innerHTML = "weak"
      }
      else{
        message.style.display = "none";
        passwordInput.style.cssText = "border-color:white";
      };

      if(value.length >= 3 && value.length <= 6){
        passwordInput.style.cssText = "border-color:blue";
        message.style.color = "blue";
        statusP.innerHTML = "medium"
      };

      if(value.length >= 6){
        passwordInput.style.cssText = "border-color:green";
        message.style.color = "green";
        statusP.innerHTML = "hard"
      }
})

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if(email && password){
    alert("Login successful!\nEmail: " + email);
  } else {
    alert("Please enter your email and password.");
  }
});

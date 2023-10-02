function registerValidation() {
    var email = document.getElementById('email')
    var password = document.getElementById('password')
    if (email === "" || password === "") {
      alert("Email and password must be filled out.");
      return false;
    }}

export default registerValidation
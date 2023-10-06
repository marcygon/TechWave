function registerValidation() {
    var email = document.getElementById('email')
    var password = document.getElementById('password')
    var name = document.getElementById('name')
    if (email === "" || password === "" || name === "") {
      alert("Name, email and password must be filled out.");
      return false;
    }}

export default registerValidation
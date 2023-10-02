function emailValidation() {
    var emailField = document.getElementById("email");
    var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    
    if (validEmail.test(emailField.value)) {
      return true;
    } else {
      return false;
    }
  }

export default emailValidation
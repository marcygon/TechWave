function passwordValidation() {
    var password = document.getElementById("password");
    if (password.length >= 8) {
        return false;
    }
    return true;
}

export default passwordValidation
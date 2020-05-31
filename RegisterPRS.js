function validateNumber(a, b) {
    var mobileNumber = document.getElementById(a).value;
    const mobileNumberValue = mobileNumber.trim();
    if (mobileNumberValue == "") {
        document.getElementById(b).innerHTML = "Enter Your Mobile Number";
    }
    else if (mobileNumberValue.length != 10) {
        document.getElementById(b).innerHTML = "Must be of 10 digits";
    }
    else if ((mobileNumberValue.charAt(0) != 9) && (mobileNumberValue.charAt(0) != 8) && (mobileNumberValue.charAt(0) != 7) && (mobileNumberValue.charAt(0) != 6)) {
        document.getElementById(b).innerHTML = "Mobile No.start with 6,7,8,9";

    }
    else {
        document.getElementById(b).innerHTML = "";
        return true;
    }
}
function validateName(a, b) {
    var name = document.getElementById(a).value;
    // const namValue = name.trim();
    var alphabet = /^[A-Za-z]+$/;
    if (name.match(alphabet)) {
        document.getElementById(b).innerHTML = "";
        return true;
    }
    else{
        document.getElementById(b).innerHTML = "Enter Valid Name";
    }
}
function validateAadharNumber(a, b) {
    var aadharNumber = document.getElementById(a).value;
    const aadharNumberValue = aadharNumber.trim();
    if (aadharNumberValue == "") {
        document.getElementById(b).innerHTML = "Enter Your Aadhar Number";
    }
    else if ((aadharNumberValue.charAt(0) != 9) && (aadharNumberValue.charAt(0) != 8) && (aadharNumberValue.charAt(0) != 7) && (aadharNumberValue.charAt(0) != 6) && (aadharNumberValue.charAt(0) != 5) && (aadharNumberValue.charAt(0) != 4) && (aadharNumberValue.charAt(0) != 3) && (aadharNumberValue.charAt(0) != 2) && (aadharNumberValue.charAt(0) != 1)) {
        document.getElementById(b).innerHTML = "Adhar Number Can't Start with 0";
    }
    else if (aadharNumberValue.length != 12){
        document.getElementById(b).innerHTML = "Must Be of 12 Digit";
    }
    else {
        document.getElementById(b).innerHTML = "";
        return true;
    }
}
function validateEmail(a, b) {
    var email = document.getElementById(a).value;
    var emailValue = email.trim();
    var arr = emailValue.split("@");
    var alphabet = /^[A-Za-z0-9@|.]+$/;
    
    if (emailValue.match(alphabet)){
        if (emailValue == "") {
            document.getElementById(b).innerHTML = "Enter Your Email";
        }
        else if ((emailValue.indexOf('@') == 0) || (emailValue.indexOf('.') == 0)) {
            document.getElementById(b).innerHTML = "Email can't start with @ .";
        }
        else if ((emailValue.charAt(0) == 9) || (emailValue.charAt(0) == 8) || (emailValue.charAt(0) == 7) || (emailValue.charAt(0) == 6) || (emailValue.charAt(0) == 5) || (emailValue.charAt(0) == 4) || (emailValue.charAt(0) == 3) || (emailValue.charAt(0) == 2) || (emailValue.charAt(0) == 1) || (emailValue.charAt(0) == 0)) {
            document.getElementById(b).innerHTML = "Email Can't Start With A Number";
        }
        else if (arr.length > 2) {
            document.getElementById(b).innerHTML = "Email cannot have 2 @";
        }
        else if (emailValue.lastIndexOf('.') - emailValue.indexOf('@') < 5) {
            document.getElementById(b).innerHTML = "Enter Valid Email Only";
        }
        else if (emailValue.lastIndexOf('.') >= (emailValue.length - 2)) {
            document.getElementById(b).innerHTML = "Enter Valid Email";
        }
        else if ((emailValue.indexOf('@') == -1) || (emailValue.indexOf('.') == -1)) {
            document.getElementById(b).innerHTML = "Enter Valid Email with {@,.}";
        }
        
        
        else {
            document.getElementById(b).innerHTML = "";
            return true;
        }
    }
    else {
        document.getElementById(b).innerHTML = "Enter valid email";
    }
}

function validateUsername(a,b){
    var username =  document.getElementById(a).value;
    var usernameValue = username.trim();
    
    if (usernameValue == "") {
        document.getElementById(b).innerHTML = "Enter your Username";
    }
    else if ((usernameValue.charAt(0) == 9) || (usernameValue.charAt(0) == 8) || (usernameValue.charAt(0) == 7) || (usernameValue.charAt(0) == 6) || (usernameValue.charAt(0) == 5) || (usernameValue.charAt(0) == 4) || (usernameValue.charAt(0) == 3) || (usernameValue.charAt(0) == 2) || (usernameValue.charAt(0) == 1) || (usernameValue.charAt(0) == 0)) {
        document.getElementById(b).innerHTML = "Username Can't Start With A Number";

    }
    else if (usernameValue.length < 5) {
        document.getElementById(b).innerHTML = "Username Must be of 4 Digits";
    }
    else {
        document.getElementById(b).innerHTML = "";
        return true;
    }
   

} 
function validatePassword(a,b){
    var password = document.getElementById(a).value;
    
    if (password == ""){
        document.getElementById(b).innerHTML = "Enter Your Password";
    }
    else if(password.length < 6 ){
        document.getElementById(b).innerHTML = "Password must be of 6 digits";
    }
    else{
        document.getElementById(b).innerHTML = "";
        return true;
    }

}

function validateCnfPassword(a,b){
    var password = document.getElementById('password').value;
    var cnfPassword = document.getElementById('cnfpassword').value;
    if (cnfPassword == "") {
        document.getElementById(b).innerHTML = "Re-Enter Your Password";
    }
    else if (password != cnfPassword){
        document.getElementById('cnfpassworderror').innerHTML = "Passwords do not match";
    }
    else {
        document.getElementById(b).innerHTML = "";
        return true;
    }
}
//     else if ((Value.charAt(0) == 9) || (Value.charAt(0) == 8) || (Value.charAt(0) == 7) || (Value.charAt(0) == 6) || (Value.charAt(0) == 5) || (Value.charAt(0) == 4) || (Value.charAt(0) == 3) || (Value.charAt(0) == 2) || (Value.charAt(0) == 1) || (Value.charAt(0) == 0)) {
//     document.getElementById(b).innerHTML = "Email Can't Start With A Number";

// }

function onClick() {
    var q = validateDob('dob','doberror');
    var r = validateUsername('username','usernameerror');
    var s = validateName('firstname', 'firstnameerror');
    var t = validateName('lastname', 'lastnameerror');
    var u = validateCnfPassword('cnfpassword','cnfpassworderror')
    var v = validateName('fname', 'fnameerror');
    var w = validateNumber('mobilenumber', 'mobilenumbererror');
    var x = validatePassword('password', 'passworderror')
    var y = validateEmail('email','emailerror');
    var z = validateAadharNumber('aadharnumber','aadharnumbererror');
    if ((q == true) && (r == true) && (s == true) && (t == true) && (u == true) && (v == true) && (w == true) && (x == true) && (y == true) && (z == true)) {
        window.location="LogInPRS.html";    }
    else {
        alert("Fill All Fields Correctly");
    }

}
function validateDob(a,b){
    var dob = document.getElementById(a).value;
    if (dob = "") {
        document.getElementById(b).innerHTML = "Enter your DOB";
    }
    else{
        document.getElementById(b).innerHTML = "";
        return true;
    }
}
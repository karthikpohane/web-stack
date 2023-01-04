//cookies
function setCookie(cname,cvalue){
    const d = new Date();
    d.setTime(d.getTime() + (3*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function storeValues(){
    setCookie("Full Name", document.forms.formid.fullname.value);
    setCookie("Email",document.forms.formid.email.value);
    setCookie("Phone Number", document.forms.formid.phone.value);
    sessionStorage.setItem("Username", document.forms.formid.username.value);
    sessionStorage.setItem("Password", document.forms.formid.password.value);
    localStorage.setItem("Date of Birth", document.forms.formid.dateofbirth.value);
}

  
function changecolor(el){
    document.getElementById("mc").style.backgroundColor = el.value;
    setCookie("background color", document.getElementById("color").value);
}

function getCookie(cname){
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
        c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
    }
    }
    return "";
}

function setColor(){
    let bg = getCookie("background color");
    document.getElementById("mc").style.backgroundColor = bg;

    setCookie("image","grocery_bag.png");
    var src1=getCookie("image");
    var img = document.getElementById("bd");
    document.body.style.backgroundImage = "url('"+src1+"')";
    //img.style.backgroundimage.url = src1;
}


function delete_cookie(name){
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}



//Validate Name
const element = document.getElementById("full-name");
element.addEventListener("keypress", function (e) {
   preventnum(e);
});

function preventnum(e) {
    if (!isNaN(e.key)) {
        e.preventDefault();
    }
  }

//validating the name
function nameValidation(){
    var fullName = document.getElementById("full-name").value;
    var paragraph = document.getElementById("name-message");
    var pattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var message = "";
    if(pattern.test(fullName))
        message= "<span style='color: green;'>Valid Name</span>";
    else
        message = "<span style='color: red;'>Invalid Name</span>";
    paragraph.innerHTML = message;
}

//validating the phone number
function phoneValidation(){
    var regName =  /^[0-9]{10}$/;
    var phone = document.getElementById('phone').value;
    var error = document.getElementById("phone-message");
    if (!regName.test(phone) && phone!=''){
        error.textContent = "Please enter a valid phone number(10 digits)";
        error.style.color = "red";
        document.getElementById("phone").focus();
    }
    
    else 
    {
        error.textContent = ""
    }
}

//validating the email
function emailValidation(){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var name = document.getElementById('email').value;
    var error = document.getElementById("email-message");
    if (!mailformat.test(name) && name!=''){
        error.textContent = "Please enter a valid email ID";
        error.style.color = "red";
        document.getElementById("email").focus();
    }
    
    else{
        error.textContent = ""
    }
}

function passwordValidation(){
    var regexpassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,25}$/;
    var password = document.getElementById('password').value;
    var error = document.getElementById("password-message");
    if (!regexpassword.test(password) && password!=''){
        error.textContent = "Please enter a strong password";
        error.style.color = "red";
        document.getElementById("password").focus();
    }
    else{
        error.textContent = ""
    }
}
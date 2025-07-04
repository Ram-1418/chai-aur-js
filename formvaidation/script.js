document.getElementById("myForm").addEventListener("submit",function(e){
    e.preventDefault()

    const name=document.getElementById("name").value.trim();
    const email=document.getElementById("email").value.trim();
    const password=document.getElementById("password").value;

    let errorMessage=""

    if (name==="") {
        errorMessage+="name is required.<br/>"
    }

    const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        errorMessage+="invalid email format<br/>"
    }

    if (password.length<6) {
        errorMessage += "Password must be at least 6 characters long.<br/>";
    }

    if (errorMessage) {
        document.getElementById("error").innerHTML=errorMessage
    }else{
        document.getElementById("error").style.color="green"
        document.getElementById("error").innerHTML = "Form submitted successfully!";
    }
})
var email =document.getElementById("email");
var pwd =document.getElementById("passworld");
var enregis =document.getElementById("enregistre");


enregis.addEventListener("click", e=>{
    const user= {
        email:email.value,
        pwd:pwd.value,
    },
    var conn= localStorage.getItem("local", user)
    e.preventDefault();

}
)
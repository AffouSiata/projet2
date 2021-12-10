var nom =document.getElementById("nom");
var prenom =document.getElementById("prenom");
var email =document.getElementById("email");
var pwd =document.getElementById("password");
var enregis =document.getElementById("enregistre");
console.log("fgfcfgcgc g ")

enregis.addEventListener("click", e=>{
    alert("bonjour")
    const user= {
        nom:nom.value,
        prenom: prenom.value,
        email:email.value,
        pwd:pwd.value,
    }
    var utilisateur = localStorage.setItem("local", user)
    console.log(user);
    

}
  
       


)
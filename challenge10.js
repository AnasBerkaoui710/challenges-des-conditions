let correctusername = "admin"
let correctpassword = "1234"

username = prompt("entrer your username: ")
password = prompt("entrer your password: ")

if(username == correctusername && password == correctpassword){
    console.log("Bienvenue Admin")
}else if(username == correctusername && password != correctpassword){
    console.log("Mot de passe incorrect")
}else{
    console.log("Utilisateur introuvable")
}
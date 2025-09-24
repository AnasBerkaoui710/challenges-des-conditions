let password = prompt("Entrez un mot de passe :");

  let hasNumber = /\d/.test(password);
  let hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  let a = "";

  if (password.length < 6) {
    a = "Faible";
  } else if (password.length >= 8 && hasNumber && hasSpecial) {
    a = "Fort";
  } else if (password.length >= 6 && hasNumber) {
    a = "Moyen";
  } else {
    a = "Faible";
  }

  console.log("Force du mot de passe : " + a);
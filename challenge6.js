let annee=2015

if(annee % 4 == 0 && annee % 100 !=0){
    console.log("l'annee est bissexile")
}else if( annee % 400 == 0  ){
    console.log("l'annee est bissexile")
}else{
    console.log("l'annee n'est pas bissexile")
}
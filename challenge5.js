let note=90;

switch(true){
    case(note>=90 && note<=100):
    console.log("A");
    break;

    case(note>=80 && note<=89):
    console.log("B");
    break;

    case(note>= 70 && note<=79):
    console.log("C");
    break;

    case(note>= 60 && note<=69):
    console.log("D");
    break;

    case(note>=0 && note<60):
    console.log("F");
    break;

    default:
        console.log("note invalide: note doit etre entre 0 et 100");

}
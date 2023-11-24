let pointure=prompt("saisir votre poiture");
let annéeDeNaissance=prompt("saisir votre date de naissence");

function pointure1(pointure,annéeDeNaissance){
return ((((pointure*2)+5)*50)-annéeDeNaissance)+1766;
}
alert(pointure1( pointure,annéeDeNaissance));
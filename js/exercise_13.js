const nombre=prompt("saisir un nombre");

for(let i=1;i<=nombre;i++){
    let count='';
    for(let j=1 ;j<i;j++){
        count+="*";
        console.log(count);
    }
   
}
// for (let i = 1; i <= 5; i++) {
//     console.log('*'.repeat(i));
// }
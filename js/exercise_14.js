let superHéros=["batman","spider man","zoro","superman"];
let message = "Je suis fan de [";
superHéros.forEach((superHéro, index)=>{
    if(index === superHéros.length-1){
        message += superHéro + ']';
    } else {
        message += superHéro + ', ';
    }  
})
console.log(message);
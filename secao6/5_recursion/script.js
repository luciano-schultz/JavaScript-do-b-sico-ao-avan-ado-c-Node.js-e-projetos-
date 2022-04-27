function returnaNumeroPar(n){
    if(n % 2 == 0){
        console.log("n agora é par: " + n);
    }else{
        console.log(n);
        returnaNumeroPar(n - 1);
    }
}
returnaNumeroPar(33);
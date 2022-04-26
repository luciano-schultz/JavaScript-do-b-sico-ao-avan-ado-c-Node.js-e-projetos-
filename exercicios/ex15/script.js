let numero = Number(prompt('Digite um Numero!'));
let divisões = 0;

for(let i = 1; i <= numero; i++){
    if(numero % i == 0){
        divisões++;
    }
}

if(divisões == 2){
    console.log(`o ${numero} é primo`);
}else{
    console.log(`o ${numero} não é primo`);
}
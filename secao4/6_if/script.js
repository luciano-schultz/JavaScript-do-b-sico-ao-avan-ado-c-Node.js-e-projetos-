let idade = 19;
nome = 'Luciano';

if(idade > 2){
    console.log('Pode Entrar');
}
if(idade < 25){
    console.log('Idade mair que 25');
}

let passaporte = true;
if((nome == 'Luciano' && idade > 30) || passaporte == true){
    console.log('Liberado!');
}

if(nome == 'Lucas'){
    console.log('Seu Nome é Luciano');
}else{
    console.log('O seu nome não é Luciano')
}
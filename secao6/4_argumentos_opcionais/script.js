function nomeComIdade(nome, idade){
    if(idade === undefined){
        console.log("Seu Nome è: " + nome);
    }else{
        console.log("Seu nome é: " + nome + "voce tem " + idade + " anos");
    }
}
nomeComIdade("Luciano");
nomeComIdade("Luciano",28);
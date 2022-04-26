/*function imprimirNoConsole(){
    console.log("Ola Mundo");
}
imprimirNoConsole();

function imprimirNumero(num){
    console.log("O numero é " + num);
}
imprimirNumero(2);

const numeroAleatorio = function(){
    console.log(Math.random());
}
numeroAleatorio();*/

const soma = function(a, b){
    return a + b;
}
console.log(soma(3, 5));

const saudacao = function(nome){
    if(nome == "Luciano"){
        return 'Ola Luciano';
    }
}
console.log(saudacao('Luciano'));
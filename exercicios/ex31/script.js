let nomes = ["Luciano", "Leticia", "Debora", "Bruna", "Schults"];
let carros = ['cruze', 'corolla', 'fusca'];

function verificaElementos(arr) {
    if(arr.length <= 4){
        console.log('Poucos elementos');
    }else{
        console.log('Muitos elementos');
    }
}
console.log(verificaElementos(carros));
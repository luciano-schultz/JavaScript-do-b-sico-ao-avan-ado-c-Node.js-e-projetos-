class Cachorro{
    constructor(raca){
        this.raca = raca;
    }
    latir(){
        console.log("Au au");
    }
    get verRaca(){
        return 'A raça é ' + this.raca;
    }
    set novaRaca(value){
        this.raca = value;
    }
}

Cachorro.prototype.patas = 4;
let cor = Symbol();
Cachorro.prototype[cor] = 'preto';
let labrador = new Cachorro('Labrador');
let golden = new Cachorro('pastor Alemão');
golden.novaRaca = 'Golden';

console.log(golden.verRaca);
console.log(labrador.patas);
console.log(Cachorro.prototype[cor]);
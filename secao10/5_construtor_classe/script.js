class Cachorro{
    constructor(raca){
        this.raca = raca;
    }
    latir(){
        console.log("Au au");
    }
}
Cachorro.prototype.patas = 4;
let cor = Symbol();
Cachorro.prototype[cor] = 'preto';
let labrador = new Cachorro('Labrador');
console.log(labrador.patas);
console.log(Cachorro.prototype[cor]);
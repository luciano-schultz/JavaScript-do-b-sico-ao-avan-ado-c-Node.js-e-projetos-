class Cachorro{
    constructor(raca){
        this.raca = raca;
    }
    latir(){
        console.log("Au au");
    }
}
Cachorro.prototype.patas = 4;
let labrador = new Cachorro('Labrador');
console.log(labrador.patas);
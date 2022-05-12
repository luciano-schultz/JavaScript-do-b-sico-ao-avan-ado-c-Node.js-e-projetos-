class Mamifero{
    constructor(patas){
        this.patas = patas;
    }
}

class Cachorro extends Mamifero{
    constructor(patas, raca){
        super(patas,raca);
        this.raca = raca;
    }
}

let pug = new Cachorro(4,'Pub');
console.log(pug);
let cachorro ={
    raca: 'SRD',
}

let pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = 'Pastor';
console.log(pastorAlemao.raca);
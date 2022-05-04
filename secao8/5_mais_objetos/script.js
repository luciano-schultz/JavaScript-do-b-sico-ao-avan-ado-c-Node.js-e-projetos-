let objetoA = {
    prop1: 'teste',
    prop2: 'testando',
}

let objetoB = {
    prop3: 'propiedade',
}
console.log(Object.keys(objetoA));
Object.assign(objetoA, objetoB);

console.log(objetoA);
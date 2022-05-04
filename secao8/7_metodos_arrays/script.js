let pessoas = ['Luciano', 'Thalis', 'Leticia'];
/*

let pessoaRemovida = pessoas.pop();
console.log(pessoas);
console.log(pessoaRemovida);
pessoas.push('Pedro');
console.log(pessoas);
pessoas.shift();
pessoas.unshift('Schultz');
console.log(pessoas);
console.log(pessoas.indexOf('Thalis'));
console.log(pessoas.lastIndexOf('Leticia'));
console.log(pessoas.slice(2,3));

*/
pessoas.forEach(pessoa => {
    console.log(pessoa);
});

let carros = ['BMW', 'Fiat', 'Audi'];
console.log(carros.includes('Fiat'));
console.log(carros.reverse());
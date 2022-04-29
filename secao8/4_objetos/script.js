let pessoa = {
    nome: 'Luciano',
    profissao: 'Programador',
    idade: 28,
    programar: function(){
        console.log('Ola');
    }
}

pessoa.experiencia = true;
delete pessoa.idade;
console.log(pessoa.experiencia);
console.log(pessoa.nome);
console.log(pessoa.idade);
pessoa.programar();
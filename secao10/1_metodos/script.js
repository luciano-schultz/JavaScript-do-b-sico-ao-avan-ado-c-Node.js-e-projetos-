const cachorro = {
    uivar: function(){
        console.log('Auuuuuuuuuuuuu');
    },
    rosnar: function(){
        console.log('grrrrrr');
    }
}

let pessoa = {
    nome: '',
    setNome: function(novoNome){
        this.nome = novoNome;
    },
    getNome: function(){
        return this.nome;
    }
}

pessoa.setNome('Luciano');
console.log(pessoa.getNome())
cachorro.uivar();
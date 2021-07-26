var pessoa = {
    nome: 'Romário',
    sobrenome: 'Arruda',
    profissao: 'programador',
    getDadosPessoa: function () {
        return {
            fullName: this.nome + " " + this.sobrenome,
            role: this.profissao
        };
    }
};
console.log(pessoa.getDadosPessoa());
console.log('===============================');
var Cliente = /** @class */ (function () {
    function Cliente(nome, sobrenome, profissao) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.profissao = profissao;
    }
    Cliente.prototype.getDadosPessoa = function () {
        return {
            fullName: this.nome + " " + this.sobrenome,
            role: this.profissao
        };
    };
    return Cliente;
}());
var cliente = new Cliente('Romário R.', 'Arruda', 'desenvolvedor');
console.log(cliente.getDadosPessoa());

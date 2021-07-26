interface Pessoa {
    nome: String,
    sobrenome: String,
    [prop: string]: any,
    getDadosPessoa(): Object
}

const pessoa: Pessoa = {
    nome: 'Romário',
    sobrenome: 'Arruda',
    profissao: 'programador',
    getDadosPessoa() {
        return {
            fullName: `${this.nome} ${this.sobrenome}`,
            role: this.profissao
        }
    }
}


console.log(pessoa.getDadosPessoa())
console.log('===============================')

class Cliente implements Pessoa {
    constructor(public nome: String, public sobrenome: String, public profissao: String) {}

    getDadosPessoa() {
        return {
            fullName: `${this.nome} ${this.sobrenome}`,
            role: this.profissao
        }
    }
}

const cliente = new Cliente('Romário R.', 'Arruda', 'desenvolvedor')
console.log(cliente.getDadosPessoa())
function usuario<TIPO>(data: TIPO): TIPO {
    return data
}

console.log(usuario<object>({nome: 'romario'}))
console.log(usuario<Array<any>>(['romario', 26]))
console.log(usuario<string>('romario'))
console.log(usuario<number>(26))
console.log('====================================')

abstract class OperacaoBinaria<TIPO, RETORNO> {
    constructor(public operador1: TIPO, public operador2: TIPO){}

    abstract executar(): RETORNO
}

class SomaBinaria extends OperacaoBinaria<number, number> {
    executar(): number {
        return this.operador1 + this.operador2
    }
}

console.log(new SomaBinaria(3, 4).executar())
console.log('====================================')
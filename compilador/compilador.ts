function saudar(): string {
    let saudacao: string

    const hour = new Date().getHours()

    const isTarde = hour > 12 && hour < 18
    const isNoite = hour >= 18 && hour <= 23

    saudacao = 'Bom dia!'
    if(isTarde) saudacao = 'Boa tarde!'
    if(isNoite) saudacao = 'Boa noite!'

    return saudacao
}

console.log(saudar())
function saudar() {
    var saudacao;
    var hour = new Date().getHours();
    var isTarde = hour > 12 && hour < 18;
    var isNoite = hour >= 18 && hour <= 23;
    saudacao = 'Bom dia!';
    if (isTarde)
        saudacao = 'Boa tarde!';
    if (isNoite)
        saudacao = 'Boa noite!';
    return saudacao;
}
console.log(saudar());

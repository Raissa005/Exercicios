const prompt = require('prompt-sync')();
const calculaPag = require('../Models/calculaPagamento');

function main (){
    var valorH = prompt("Quanto você ganha por hora?>> ");
    var quantidadeH = prompt("Quantas horas trabalhadas?>> ");

    calculaPag(valorH, quantidadeH);
}

main();
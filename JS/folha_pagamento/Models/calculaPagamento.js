const descontoIR = require('../Models/descontoIr').descontoIR;
const desconto = require('../Models/descontoIr').desconto;



function calculaPag(valorH, quantidadeH){
    var salarioB = parseInt(valorH * quantidadeH);

    var FGTS = salarioB * (11/100);
    var INSS = salarioB * (10/100);
    var salarioIr = descontoIR(salarioB);
    var descontos = salarioIr + INSS;
    var salarioL = salarioB - descontos;

    console.log(`Seu salário bruto é de `+ salarioB 
                +`\n (-) IR `+ desconto(salarioB) +`: R$`+salarioIr  
                +`\n (-) FGTS(11%): R$`+ FGTS
                +`\n (-) INSS(10%): R$`+ INSS
                +`\n Total de descontos: R$`+descontos
                +`\n Salário líquido: R$`+salarioL);
}

module.exports = calculaPag;

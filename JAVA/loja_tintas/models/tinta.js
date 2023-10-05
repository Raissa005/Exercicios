var prompt = require("prompt-sync")();
var tamanhoM = prompt("Qual o tamanho em metros da area ser pintada? ");

//1 lata de 18 litron 80,00
function latasTintas(){
    if(tamanhoM <= 54){
        console.log("Você vai precisar de 1 lata de tinta que dará R$80,00 ");
    }else{
        var qtdLatas = Math.round(tamanhoM/54);
        var valor = qtdLatas*80;
        var sobraL = (qtdLatas*18)-(tamanhoM/54);
        console.log(`Você vai precisar de `+qtdLatas +` latas e o valor será de R$ `+valor
                    + `Foi sobrado `+parseFloat(sobraL)+` litros /n`);

    }
}

latasTintas();
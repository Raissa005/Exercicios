function descontoIR(salarioB){
    var salarioL;
   
    if(salarioB <= 900){
        salarioL = salarioB;
    }else if(salarioB <= 1500){
        salarioL = salarioB * (5/100);
    }else if (salarioB <= 2500){
        salarioL = salarioB * (10/100);
    }else{
        salarioL = salarioB * (20/100);
    }
    return salarioL;
}

function desconto(salarioB){
    var desconto;
   
    if(salarioB <= 900){
        desconto = "0%";
    }else if(salarioB <= 1500){
        desconto = "5%";
    }else if (salarioB <= 2500){
        desconto = "10%";
    }else{
        desconto = "20%";
    }
    return desconto;
}

module.exports = {
    descontoIR,
    desconto
};
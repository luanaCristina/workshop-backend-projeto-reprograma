//var 1 = entrada valor do mes
var valorMes = document.querySelector("#ganho-mes");

//var 2 = entrada horas por dia 
var horasDia = document.querySelector("#horas-dia");

//var 3 = quantidade dias por mes
var quantidadeDiasMes = document.querySelector("#dias-mes");

//resultado
var resultado = document.querySelector(".secao-hora .secao__rodape__valor span");
// var valorHora = document.querySelector("#resposta");

//função de cálculo
function calcularValorHora() {  
    console.log("botão funcionando");
    // var valorDiario = valorMes.valueAsNumber / quantidadeDiasMes.valueAsNumber;

    // var valorHora = valorDiario / horasDia.valueAsNumber;

    var valorHora = (valorMes.valueAsNumber / quantidadeDiasMes.valueAsNumber) / horasDia.valueAsNumber;
    
    resultado.textContent = valorHora;
}
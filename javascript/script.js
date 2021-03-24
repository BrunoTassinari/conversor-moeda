function ab(){
    const dolar = 5.49
    const euro = 6.52
    const libra = 7.29
    let valorReal = Number(virgulaPonto(inputReal.value))
    let moeda = document.getElementById('moedas')
    let moedaSelecionada = moeda.options[moeda.selectedIndex].value
    let saida = document.querySelector('#retornaValor')
    let valorConvertido = 0
    let moedaSimbol = "zero"

    if (moedaSelecionada === "false"){
        valorConvertido = "ERRO! Insira um valor válido!"
    }
    else if(moedaSelecionada === "us"){
        moedaSimbol = "$"
        valorConvertido = valorReal / dolar
        valorConvertido = pontoVirgula(valorConvertido.toFixed(2))
    }
    else if(moedaSelecionada === "lb"){
        moedaSimbol = "£"
        valorConvertido = valorReal / libra
        valorConvertido = pontoVirgula(valorConvertido.toFixed(2))
    }
    else if(moedaSelecionada === "eu"){
        moedaSimbol = "€"
        valorConvertido = valorReal / euro
        valorConvertido = pontoVirgula(valorConvertido.toFixed(2))
    }
    saida.innerHTML= `Resultado: ${moedaSimbol} ${valorConvertido}.`
}
function virgulaPonto(number){
    return number.replace(",",".");
 }
 function pontoVirgula(number){
     return number.replace(".",",");
 }
prompt("Qual a operação vc quer realizar? ")
let cont=prompt("1-Adição" + "2-Subtração" + "3-Multiplicação" + "4-Divisão")
cont = Number

let nume1 = Number(prompt("Digite o primeiro numero: "))
let nume2 = Number(prompt("Digite o segundo numero: "))

if(cont == 1){
    let soma = nume1 + nume2
    console.log("O resultado é:" + soma) 
}
if(cont == 2){
    let Subtração = nume1 - nume2
    console.log("O resultado é:" + Subtração) 
}


if(cont == 3){
    if(nume2 == 0)
    console.log("Não pode ser dividir por 0") 
   let Divisão = nume1/nume2
    console.log("O resultado é:" + Divisão) 
}
if(cont == 4){
    let Multiplicação = nume1 * nume2
    console.log("O resultado é:" + Multiplicação) }
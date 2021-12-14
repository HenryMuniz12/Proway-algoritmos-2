
let nome = "Henry Muniz Dionizio" // variavel do tipo string
let idade = 16           // variavel do tipo number
let distanciaProway = 3 // variavel do tipo number 
let qualquer = ""

console.log("Olá meu nome é", nome, "tenho", idade, "anos e moro a", distanciaProway, "km de distancia daqui");

// let bairro=prompt ("Informe o seu bairro")

// alert (bairro)

if (idade >= 18) {
    console.log("Vc é maior de idade");
} else {
    console.log("Vc é de menor");
}


// fazer um if que pergunte é menor de 15 anos 
//uma mensagem para cada caminho do if e else


if (idade >= 15) {
    console.log("Vc é adolescente");
} else {
    console.log("Vc é muito jovem");
}



console.log("Escolha uma opção");
console.log(" 1 - primavera");
console.log(" 2 - verão ");
console.log(" 3 - outono");
console.log(" 4 - inverno");
let opcao = 2


switch (opcao) {
    case 1:
        console.log("Vc escolheu primavera");
        break
    case 2:
        console.log("Vc escolheu verao");
        break
    case 3:
        console.log("Vc escolheu outono");
        break
    case 4:
        console.log("vc escolheu inverno");
        break
    default:
        console.log(" vc escoleu nada");
        break

}

let quantidade = 15

for (let contador = 1; contador <= quantidade; contador++) {
    console.log("Repetindo pela ", contador, "x");
}

for (let variavel = 1; variavel <= 50; variavel += 10) {
    console.log("repetindo dnv ", variavel, "x");
}

// let resposta
// do {
//     resposta = prompt ("tinham 2 dog, pita e repita, pita morreu quem ficou?")

// }while (resposta== "repita");




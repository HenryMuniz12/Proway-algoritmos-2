
/* solicite uma quantidade definida de numeros a serem capturados 
para cada captura deve verificar qual maior numero e o menor numero 

após a captura dos numeros exibir o maior o menor e a media geral desses numero 

*/


let qtd = Number(prompt("Infome quantos numeros vc deseja capturar")
 let menor
 let maior 
 let media 
 let soma

    for (let contador = 1; contador <= qtd; contador++) {
    let numero = Number(prompt("Informe o " + contador + " numero"))

    if (contador == 1) {
        menor = numero
        maior = numero {

        }else {


            if (numero < menor) {
                menor = numero
            }

            if (numero>maior) {
                maior = numero
            }
        }
    }


    media=soma/qtd
    alert ("Menor "+menor)
    alert ("maior  "+menor)
    alert ("Media "+menor)
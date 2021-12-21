//criar uma classe professor com os atributos
// nome string 
// idade number
// qtdAlunos number

//metodos 
//fazerChamada que recebe por parametro o nome e retorna (presença verificada)
//calculaMedia recebe 3 notas e devolve media

//aops criar a classe instanciar 1 obejto da classe Professor para atribuir os valores
//atualizar algum valor de atribudo do professor
//ultilizar os metodos do professor 


class professor {
    nome
    idade
    qtdAlunos


    constructor(nome, idade, qtdAlunos) {
        this.nome = nome
        this.idade = idade
        this.qtdAlunos = qtdAlunos

    }
    fazerChamada(nomeAluno) {
        return " Presença verificada do aluno" + nomeAluno + " marcado na lista"

    }
    calcularMedia(nota1, nota2, nota3) {
        return (nota1 + nota2 + nota3) / 3

    }

}

let professor1 = new professor("Fulano", 60, 30)
professor1.qtdAlunos = 20
console.log(professor1);
console.log(professor1.fazerChamada(" cliclaninho"));

let media = professor1.calcularMedia(5, 7, 10)

console.log(media);

//instaciem e ultilizem  seus atribudos e metodos
//ler valores separatamente 
//atualizar valores e ver ANTES e depois 
// calcular mais de uma media


let professor2 = new professor("Vitor", 55, 30)
console.log(professor2.nome);
console.log(professor2.idade);
console.log("qtd ANTES"professor2.qtdAlunos);

professor2.qtdAlunos = 40
console.log("qtd DEPOIS"professor2.qtdAlunos);

console.log(professor2.fazerChamada(" Henzo"));
console.log(professor2.fazerChamada(" Outra pessoa"));


let = professor2.calcularMedia(10, 10, 8)
let = professor2.calcularMedia(1, 8, 8)
console.log(media);








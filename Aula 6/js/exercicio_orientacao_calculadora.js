//criar uma classe calculadora com os atributos numeroA numeroB
//criar os metodos somar, subtrair, dividir,multiplicar e todos recebem por parametro o valor A e B (com prompr)

//esses metodos serão chamados por botoes no html usando onclick="nome da funcao()"

class Calculadora {

    numeroA
    numeroB

    constructor(numeroA, numeroB) {
        this.numeroA = numeroA
        this.numeroB = numeroB
    }
    capturarNumeros(nA, nB, operacao) {
        this.numeroA = nA
        this.numeroB = nB

        switch (operacao) {
            case "somar":
                return this.somar()
                break;
                case "diminuir":
                   return this.subtrair()
                    break;
        }
    }
    somar() {
        return this.numeroA + this.numeroB
    }
    subtrair() {
        return this.numeroA - this.numeroB
    }

}

let calculadora = new Calculadora(1, 2)
console.log("A é soma " + calculadora.somar());
console.log("A é subtração " + calculadora.subtrair());
console.log("A operação de soma é "+calculadora.capturarNumeros(5,3, "somar"));
console.log("A operação de subtrair é  "+calculadora.capturarNumeros(5,3, "diminuir"));



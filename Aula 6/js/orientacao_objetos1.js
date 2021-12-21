console.log("deu certo");

// aluno 
// atribudos = variaveis (5)
// nome string 
// idade number 
// matricula 
// senha 
// nota number 
//
// metodos = funcoes sem o comando function 
// conversar (ouviu)---> return resposta
// responderChamada (professor)-----> "professor, MEU_NOME presente"
// meApresentar () ------> "Oi meu nome é Nome XX anos minha matricula é XXXX"


class Aluno {
    nome
    idade
    matricula
    senha
    nota

    // declaração do construtor que será chamado de forma externa 
    // para criar um objeto da classe Aluno
    constructor(nome, idade, matricula, senha, nota) {
        //passando os valores dos parametros para os meus atributos diferenciando com (THIS.)
        this.nome = nome
        this.idade = idade
        this.matricula = matricula
        this.senha = senha
        this.nota = nota

    }

    conversar(ouviu) {
        return ouviu + ", Hummm que interessante..."
    }
    chamarProfessor(mensagem) {
        return "Já resolveu era isso (" + mensagem + ")"
    }
    meApresentar() {
        return "Meu nome é " + this.nome + " tenho " + this.idade + " anos, matricula=" + this.matricula + " 001, prefiro não dizer minha senha"
    }
}


let nome = "Henry"

let aluno1 = new Aluno("Henry", 16, "000", "123456", 10)

let alunoX = new Aluno("Miranha", 20, "Minranha3", "tonystark", 10)

console.log(aluno1);
console.log(aluno1.nome);
console.log(aluno1.matricula);

console.log(alunoX.senha);

aluno1.nome = "XXX"
console.log(aluno1);

alunoX.nome = "outro nome"
alunoX.idade = 13
alunoX.matricula = "002"
alunoX.senha = "123"
alunoX.nota = 2

console.log(alunoX);
console.log(alunoX.idade);

let colega = new Aluno("Nathan", 15, "000", "123", 10)

colega.matricula = "1234"
console.log(colega);

console.log(aluno1.conversar("sobre o filme do miranha"));

document.write(aluno1.conversar("sobre o filme do miranha"));

let resposta = aluno1.conversar("sobre o filme do miranha");

console.log(resposta);

console.log(alunoX.conversar("Nada a declarar"));


//como eu crio um objeto da classe aluno
//instancinado um obejto da classe aluno com os valores dos atributos passados no construtor
let aluno10 = new Aluno("Derik", 20, "90909", "euSouDerik", 2)

//como eu acesso cada atributo do objeto? (ver minimo 3)

console.log("Olá meu nome é " + aluno10.nome);
document.writeln("Oi eu tenho " + aluno10.idade + "anos")

let variavel = aluno10.matricula
console.log(aluno10);

aluno10.nome = "Muniz"
aluno10.idade = 14
aluno10.senha = "1234"
console.log(aluno10);

//executando metodos de um objeto da classe Aluno
console.log(aluno10.conversar("Aprendi orientação a objetos"));

console.log(aluno10.chamarProfessor("erro na linha 64"));

console.log(aluno1.meApresentar());




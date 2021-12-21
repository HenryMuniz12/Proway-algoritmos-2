//a classe Pessoa agrega tudo que foi indetificado com  COMUM as classes Aluno,Professor...

class Pessoa {
    //esses atributos não precisam mais ser declarados em cada classe que herde de Pessoa 
    nome
    idade
    altura
    salario 
    //basta repassar os parametros que vem no NEW para construtor da SUPER CLASSE 
    constructor(nome, idade,altura,salario ) {
        this.nome = nome
        this.idade = idade
        this.altura = altura 
        this.salario = salario 
    }

}

class Diretor extends Pessoa {
    //esse atributo só existe na classe Diretor 
    //não preciso informar nome e idade novamente aqui 
    qtdProfessores

    //o construdor tem obejetivo de preencher os valores antes de gerar um obejto do tipo Diretor 
    //por isso preciso informar nome e idade no NEW porém devo repassar esses valores para o contrutor 
    //de super classe ou CLASSE PAI  
    constructor(nome, idade, qtdProfessores) {
        super(nome, idade)
        this.qtdProfessores = qtdProfessores
        //Os atributos herdados repasso para o contrutor da SUPER CLASSE 
    }

}

class Aluno extends Pessoa {
    //atribudutos da classe Aluno
    //nome
    //idade
    matricula

    //Contrutor ultilizado no new que recebe os parametros para inicializar
    //os atributos no novo objeto do tipo aluno 
    constructor(nome, idade, matricula) {
        //para cada paramaetro inicializando respectivamente o atibuto do objeto 
        //o (this.) é ultilzado para respectivamente o atributo do objeto 
        //isso ajuda a não confundir parametro com atributo
        super(nome, idade)
        this.matricula = matricula

    }

    meApresentar() {
        return "Ola meu nome é " + this.nome + " tenho " + this.idade + " anos e minha matricula é " + this.matricula
    }

}

class Professor extends Pessoa {
    qtdAlunos
    constructor(nome, idade, qtdAlunos,altura,salario) {
        //o super deve ser chamado pirmiero para garantir que SUPER CLASSE faça o seu construtor primeiro 
        super(nome, idade,altura,salario)
        //depois inicializando meus atributos especificos da classe Professor 
        this.qtdAlunos = qtdAlunos

    }

    meApresentar() {

        return "Oi meu nome é " + this.nome + " tenho " + this.idade + "anos e dou aula para" + this.qtdAlunos + "alunos"

    }

 }


let prof1=new Professor("Oliota",32,15,1.8,0)
console.log(prof1);
console.log(prof1.nome);
console.log(prof1.idade);
console.log(prof1.qtdAlunos);

let Paulo = new Diretor ("Paulo Y Kano",80,30)
Paulo.altura=1.5
Paulo.salario=25000
console.log(Paulo);



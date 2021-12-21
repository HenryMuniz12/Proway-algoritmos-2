console.log("Criar um vetor de gostos pessoais");
console.log("Pode criar o vetor ja com valores ou não");
console.log("se não tiver valores usar o push para incluir item a item");

console.log("exibir a lista toda LOG");
console.log("percorer a lista parad apresentar cada valor com uma frase");


//criar o push inclui um item na lista
let gostos = [
    "Filmes",
    "Series"

]

//usando push inclui um item na lista
gostos.push ("Comer")

//exibi em log como esta a variavel
console.log(gostos);

//percorrendo o vetor de 0 ate tamanho da lista -1
//de 1 em 1
for (let contador = 0; contador < gostos.length; contador++) {
    console.log("Gosto muito de " + gostos[contador]);
}





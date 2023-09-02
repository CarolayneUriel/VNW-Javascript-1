// 01 - crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite':

let diaOuNoite = "dia";

if(diaOuNoite === "dia"){
    console.log(`Está claro é ${diaOuNoite}, vamos sair!`)
}else if(diaOuNoite === "noite"){
    console.log(`Está escuro é ${diaOuNoite}, quero ficar em casa!`)
}else{
    console.log("os valores aceitos são dia ou noite")
}

// 02 - Crie um loop for() que exiba apenas números pares até o 20 no console.log():

for(i = 2; i <= 20; i += 2){
    console.log(i);
}

// 03 - crie uma função que exiba uma mensagem no console:

function mensagem(){
    console.log("Hello world!")
}
mensagem();

// 04 - crie uma função que receba o seu nome como (parâmetro) e exiba no console:

function nomeDaPessoa(nome){
    return `Olá ${nome}!`
}

console.log(nomeDaPessoa("Anna"));

// 05 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console:

function pessoa( nome, idade, gostoMusical){
    return `Eu sou ${nome}, tenho ${idade} anos e gosto de ${gostoMusical}!`
}

console.log(pessoa("Carolayne", 27, "MPB, POP e Rock"));

// 06 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console:

function gostos(filmeFavorito, músicaFavorita){
    console.log(`Meu filme favorito é ${filmeFavorito}, e minha música favorita é ${músicaFavorita}`)
}

gostos("Questão de Tempo", "Birds-Imagine Dragons");

// 07 - crie uma função que retorne o triplo do número recebido no parâmetro da função:

function triplo(valor){
    return valor * 3
}

console.log(triplo(12));
// 08 - crie uma função que  verifique se uma  variável é true ou false:
let a = true;
let b = false;

let idadeDeVotar = function(idade){
    if(idadeDeVotar >= 18 && idadeDeVotar <= 60){
        console.log(a)
    }else{
        console.log(b)
    }
}
idadeDeVotar(16)

// 09 - Crie um array que receba 5 itens e exiba no console.

let comidas = ["lasanha", "pastel", "bolo", "muse", "salada"]

console.log(comidas);

// 10 - Utilize um método para adicionar um nome ao inicio do array.

comidas.unshift("fejoada");

// 11 - Utilize um método para remover o último nome do array.

comidas.pop();

// 12 - Utilize um método para adicionar dois nomes ao fim do array.

comidas.push("tapioca", "cocada");

// 13 - Utilize um método para remover o primeiro nome do array.

comidas.shift();

// 14 - Utilize um método para organizar em ordem crescente o seguinte array
//  let numbers = [7,5,6,3,8,9,2,1,4]:

let numbers = [7,5,6,3,8,9,2,1,4];
numbers.sort();
console.log(numbers);
// 15 - Crie um objeto que receba ao menos três propriedades sobre você.

let sobreMim = {
    nome: "Carolayne",
    filhos: 2,
    altura: 1.54,
}
console.log(sobreMim);
// 16 - Adicione uma nova propriedade sem alterar seu objeto inicial.
sobreMim.idade = 27;
console.log(sobreMim);

// 17 - Remova uma propriedade desse objeto.
delete sobreMim.altura;
console.log(sobreMim);

// 18 - Mostre no console todas as propriedades desse objeto.
console.log(sobreMim);

// 19 - Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
// Na propriedade amigos, adicione ao menos 4 amigos:

let cadastro = [
    {
        nome: "Anna",
        idade: 25,
        tel: 15852148,
        amigos: ["João", "Nina", "Zorro", "Fuinha"]
    },

    {
        nome: "Pedro",
        idade: 21,
        tel: 15902188,
        amigos: ["Jaque", "Nina", "Zorro", "Kiara"]
    },

    {
        nome: "Ícaro",
        idade: 20,
        tel: 15002188,
        amigos: ["Carla", "Dani", "Zorro", "Thales"]
    },

    {
        nome: "Thales",
        idade: 25,
        tel: 15852100,
        amigos: ["Kiara", "Nina", "Zorro", "Arthemis"]
    },

    {
        nome: "Larissa",
        idade: 25,
        tel: 15852148,
        amigos: ["Carol", "Nina", "Zorro", "Anna"]
    },
];

console.log(cadastro);

// 20 - Mostre no console o nome de um amigo de cada lista.
console.log(cadastro[1].amigos[2]);


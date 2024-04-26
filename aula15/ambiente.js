let num = [5, 'oi', 2, 9, 3, 6 , 11] 

/*
 Um array(vetor)/variável serve para economizar linhas de código sem precisar declarar inúmeras váriaveis.

 Podemos misturar tipos primitivos em uma mesma váriavel composta, ou seja em um mesmo array podemos ter válores de números e string e etc. 
 
 Não é muito organizado misturar tipos primitivos, é melhor declarar um vetor com um nome específico para os tipos de valores que ele irá guardar.
 */

num[5] = 10 // Esse comando serve para colocar um valor na posição desejada 'várivael[posição] = valor' (se a posição que você colocou o valor já estava sendo ocupada por outro valor ele o subistituirá).

num.push(1) // Esse comando serve para adicionar um valor ao vetor, ele automáticamente irá oculpar a última posição/indice(chave).

num.sort()// Esse comando serve para colocar todos os valores do array em ordem crescente .

console.log(num)

console.log(`O vetor tem ${num.length} posições`) // Váriavel.length mostra quantos elementos o array(vetor)/variável composta possui.

console.log(`O primeiro valor do vetor é ${num[0]}`) // Em linguagens de programação o primeiro indice/chave nem sempre será 1 mas sim começará do 0

num.indexOf(5)

/* 
    Esse comando serve para buscar um valor dentro da variavel composta. 

    Ele fala em qual posição elá está. Caso não tenha o valor desejado ele retornará '-1' (significa que o JavaScript procurou e não encontrou).

    nome_várivael.indexOf(valor desejado).
*/

let pos = num.indexOf(2) // Não precisa atribuir esse valor a uma variável, basta colocalo dentro de um console.log.
console.log(`O valor 2 está na posição ${pos}`)





































































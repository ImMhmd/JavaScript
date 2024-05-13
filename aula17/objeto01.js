let amigo = {nome: 'José', 
sexo: 'M' , 
peso: 85.4, 
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

let s = 'Javascript'

amigo.engordar(2)
console.log(amigo.nome)


/*

E possui um identificador(atributo) literal para cada valor(espaço) e não apenas 0,1,2,3... igual os vetores. Sendo mais facil a visualização.

Objetos são váriaveis que além de guardar valores (atributos) os objetos podem guardar funcionalidade que chamamos de métodos.

*/ 
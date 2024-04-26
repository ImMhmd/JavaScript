let valores = [8, 1, 7, 4, 2, 9]
valores.sort()

for(let pos in valores){ // Essa sintaxe do 'for' só funciona para arrays e objetos e a váriavel declarada dentro do for precisa ter o nome 'pos'
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}


//console.log(valores)

/*

for(let pos = 0; pos < valores.length; pos++ ){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/ 
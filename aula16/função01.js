function parimpar(n){
    if (n%2 == 0){
        return 'Par!'
    } else{
        return 'Impar!'
    }
}

let res = parimpar(5) //Não precisa passar o valor para uma váriavel pode apenas colocar dentrode um console.log
console.log(`O valor é ${res}`) 

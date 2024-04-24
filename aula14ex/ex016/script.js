function contar(){
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel contar!'

    } else{
        res.innerHTML = 'Contando: <br>'
        let ini = Number(inicio.value)
        let fin = Number(fim.value)
        let pass = Number(passo.value)
        if (pass <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            pass = 1

        }
        if(ini < fin){
            // Contagem crescente
            for(let c = ini; c <= fin; c += pass){
                res.innerHTML += ` ${c} \u{1F449}` 
            }

        } else {
            // Contagem regressiva
            for(let c = ini; c >= fin; c -= pass){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML +=`\u{1F3C1}`
    }
}
   

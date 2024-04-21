function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')

    }else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')

        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'Homem'
            
            if (idade >=0 && idade < 10){
              //criança  
                img.setAttribute('src', 'imagens/bebemasculino.jpg')

            } else if(idade >= 10 && idade < 25){
                //jovem
                img.setAttribute('src', 'imagens/homemjovem.jpg')

            } else if(idade > 25 && idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/homemadulto.jpg')

            } else{
                //idoso
                img.setAttribute('src', 'imagens/homemidoso.jpg')
            }
        } else{

            genero = 'Mulher'

            if (idade >=0 && idade < 10){
                //criança  
                img.setAttribute('src', 'imagens/mulherbebe.jpg')

              } else if(idade >= 10 && idade < 21){
                  //jovem
                  img.setAttribute('src', 'imagens/mulherjovem.jpg')
  
              } else if(idade < 50){
                  //adulto
                  img.setAttribute('src', 'imagens/mulheradulta.jpg')

              } else{
                  //idoso
                  img.setAttribute('src', 'imagens/mulheridosa.jpg')
              }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `${genero} com ${idade} anos. <br>`
        res.appendChild(img)

       

    }
}
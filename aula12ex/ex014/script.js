function carregar(){
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas!`
    
    if (hora >= 0 && hora < 12){
       
        img.src = 'imagens/imagemmanha.jpg'
        document.body.style.background = ''

    }else if (hora >= 12 && hora < 18){
        
        img.src= 'imagens/imagemtarde.jpg'
        document.body.style.background = '#F07800'
    }else{
        
        img.src= 'imagens/imagemnoite.jpg'
        document.body.style.background = '#5B00F0'
    }
}

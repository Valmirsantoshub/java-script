function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var agora = new Date()
    var data  = new Date()
   
    var hora = data.getHours()
    var minutos = data.getMinutes()
    //var hora = 15
    msg.innerHTML = `agora são ${hora} horas ${minutos} minutos`
    if(hora >= 0 && hora <12){
        img.src = 'foto-manha.png'
        document.body.style.background = '#e2cd9f'

    }else if(hora >=12 && hora <=18){
        img.src = 'foto-tarde.png'
        document.body.style.background = '#b9846f'

    }else if(hora >=19 && hora <=24){
        img.src = 'foto-noite.png'
        document.body.style.background = '#515154'
    }
}
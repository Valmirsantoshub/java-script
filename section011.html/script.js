function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var agora = new Date()
    var data = new Date()
    var hora = data.getHours()
    var minutes = data.getMinutes()
    //var hora = 19
    msg.innerHTML = `agora são ${hora} horas e ${minutes} minutos`
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'foto-manha.png'
        document.body.style.background="#425edd9f"
        
    } else if (hora >=12 && hora <=18){
        //Boa tarde
        img.src = 'foto-tarde.png'
        document.body.style.background="yellow"

        
    } else {
        //Boa noite
        img.src = 'foto-noite.png'
        document.body.style.background="green"
        
    }
    

}

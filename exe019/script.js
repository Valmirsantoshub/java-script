function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var agora = new Date()
    var data = new Date()
    var hora = data.getHours()
    var minutes = data.getMinutes()
    var segundos = data.getSeconds()
    msg.innerHTML=`agora são ${hora} horas  ${minutes} minutos e ${segundos} segundos`
    if(hora >= 0 && hora < 12){
        //Bom Dia
        img.src=''
        

}else if(hora>=12 && hora <=18){
    //boa tarde
    img.src=''
    document.body.style.background="purple"

}else{
    //boa noite
    img.src=''
    document.body.style.background="pink"
}
}
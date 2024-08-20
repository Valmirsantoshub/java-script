function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var agora = new Date()
    var data = new Date()
    var hora = data.getHours()
    var minutes = data.getMinutes()
    var segundos = data.getSeconds()
    msg.innerHTML=` agora são ${hora} horas ${minutes} minutos e ${segundos} segundos`
    if(hora >=0 && hora <12){
        //BOM DIA
        img.src ='foto-timão.png'
        document.body.style.background = "blue"
    }else if(hora >=12 && hora <=18){
        //BOA TARDE
        img.src =''
        document.body.style.background="yellow"
    }else{
        //BOA NOITE
        img.src =''
        document.body.style.background="purple"
    }
    
    
   /* alert('seja Bem Vindo ao meu Teste de Site Sorocaba.')
    confirm('você está gostando da minha companhia?')
    var nome = prompt('qual é o seu nome?')
    alert(` Olá, ${nome} seja Bem Vindo (a), ao meu primeiro projeto é um prazer em ter você aqui conosco! `)*/
}
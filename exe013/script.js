function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formularioano = document.getElementById('txtano')  
    var resultado = document.getElementById('resultado')
    if (formularioano.value.length == 0 || formularioano.value > ano){
        alert('[erro] verifique os dados e tente novamente')

}else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - (formularioano.value)
    var genero = ""
    if(fsex[0].checked){
        var img = document.createElement('img')  //inserindo foto em j.s
        img.setAttribute('id','foto')   //inserindo foto em j.s

        genero = "Homem"
        if(idade >=0 && idade <10){
            //criança
            img.setAttribute('src','foto-criança-homem.png')
        }else if(idade<21){
            //jovem
            img.setAttribute('src','foto-jovem-homem.png')
            
        }else if(idade<50){
            //adulto
            img.setAttribute('src','foto-adulto-homem.png')
            
        }else{
            //idoso
            img.setAttribute('src','foto-idoso-homem.png')
        }

    }else if(fsex[1].checked){
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        
        genero = "Mulher"
        if(idade >=0 && idade <10){
            //criança
            img.setAttribute('src','foto-criança-mulher.png')
        }else if(idade<21){
            //jovem
            img.setAttribute('src','foto-jovem-mulher.png')
            
        }else if(idade<50){
            //adulto
            img.setAttribute('src','foto-adulto-mulher.png')
            
        }else{
            //idoso
            img.setAttribute('src','foto-idoso-mulher.png')
        }

    }
    //res.style.textAlign='center' centralizando por JS
    resultado.innerHTML=`Detectamos ${genero} com ${idade} anos!`
    resultado.appendChild(img)

}
}

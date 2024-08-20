function verificar(){
    var idade = document.getElementById('txtidade')
    var email = document.getElementById('email')
    var nome = document.getElementById('nome')
    var senha = document.getElementById('senha')
    var idade = (txtidade.value)
    if(idade < 39 || idade> 44){
        alert('[ERRO] Verifique os dados informados')
    }else if(idade != 44){
        //alert('idade corretos')
     
    }
    if(email.value != "valmirmoreira31@hotmail.com"){
        alert('email incorreto')
    }else{
       // alert('email correto')
    }
    if(senha.value != "123456"){
        alert('senha incorreta')

}else{
    //alert('senha correta')
}
if(nome.value !="valmir santos"){
    alert('nome incorreto')
}else{
    //alert('nome correto')
}
}






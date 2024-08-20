function entrar(){
    var nome = document.getElementById('nome')
    var password = document.getElementById('password')
    var res = document.getElementById('res')
    if(nome.value == 'valmir' && password.value == '12345'){
      // res.innerHTML=`<strong>olá ${nome.value} seja bem vindo!</strong> `///
//}else if( nome.value !='valmir' || password.value !='12345'){
    //res.innerHTML="<strong>[ERRO] usuario ou senha incorretos por favor Digite novamente!</strong>"//
    alert('Olá valmir seja Bem Vindo')
}else{
    alert('Usuario ou senha incorretos por favor Digite novamente!')
}
    
}
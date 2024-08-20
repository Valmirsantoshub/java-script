function contar(){
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var resultado = document.getElementById('resultado')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML='impossivel contar'
        window.alert('[ERRO]Por favor, preencha todos os dados corretamente')

} else {
    resultado.innerHTML ='Contando:<br>'
    var inicio = Number(inicio.value)//number convertendo strings para numero
    var fim = Number(fim.value)
    var passo = Number(passo.value)
    if(passo<=0){
        window.alert('Passo invalido! Considerando passo 1')
        passo = 1
    }
    if(inicio < fim){
        for(var c =inicio; c <=fim; c += passo){
            resultado.innerHTML += `${c} \u{1F60E}`//https://unicode.org/emoji/charts/full-emoji-list.html
            }

    } else {
        for(var c =inicio; c>= fim; c-=passo){
            resultado.innerHTML += `${c} \u{1F3C1}`
        }
        resultado.innerHTML+=`\u{1F3C1}`
}

    }
    
}






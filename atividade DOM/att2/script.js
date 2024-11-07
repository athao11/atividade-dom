let contador = 0
let adicionar = document.getElementById('adicionar')
adicionar.addEventListener('click', function(){
    console.log(`botao clicado ${contador++} vezes`)

})

let redefinir = document.getElementById('resetar')
redefinir.addEventListener('click', function(){
    console.log(`contador redefinido, contagem: ${contador = 0}`)
})
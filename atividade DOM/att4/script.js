let botao = document.getElementById('botao')
botao.addEventListener('click', function(){
   let batata = prompt("escreva o novo texto")
   document.getElementById('texto').innerText = batata
})
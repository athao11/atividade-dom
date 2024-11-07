let qd1 = document.getElementById('qd1')
qd1.addEventListener('click', function(){ 
    if(qd1.style.backgroundColor == 'red'){
        qd1.style.backgroundColor = 'aquamarine'
    } else{
        qd1.style.backgroundColor = 'red'
    }
})

let qd2 = document.getElementById('qd2')
qd2.addEventListener('click', function(){ 
    if(qd2.style.backgroundColor == 'purple'){
        qd2.style.backgroundColor = 'lightgray'
    } else{
        qd2.style.backgroundColor = 'purple'
    }
})

let qd3 = document.getElementById('qd3')
qd3.addEventListener('click', function(){ 
    if(qd3.style.backgroundColor == 'black'){
        qd3.style.backgroundColor = 'violet'
    } else{
        qd3.style.backgroundColor = 'black'
    }
})
function generator(){
    let numero = document.querySelector('#numero').value
    let lista = document.querySelector('#lista')

    let result = ''
    for (let c =1;c<=numero;c++){
        result+= `<li>Item ${c}</li>`
    }
    
    lista.innerHTML = result
}
let lis = document.querySelector('#lista').value
document.addEventListener('keyup',function(event){
    if (event.key=='Enter'){
        generator()
    }
})
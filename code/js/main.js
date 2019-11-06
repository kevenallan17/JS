function imc(altura,peso,sexo){
    let imc = peso/altura**2
    let result=''
    if (sexo=='masculino'){
        if (imc<20.7){
            result='Abaixo do Peso'
        }else if (imc<26.4){
            result='Peso Normal'
        }else if (imc<27.8){
            result ='Marginalmente Acima do Peso'
        }else if (imc<31.1){
            result='Acima do Peso Ideal'
        }else{
            result='Obeso'
        }
    }else{
        if (imc<19.1){
            result='Abaixo do Peso'
        }else if (imc<25.8){
            result='Peso Normal'
        }else if (imc<27.3){
            result ='Marginalmente Acima do Peso'
        }else if (imc<32.3){
            result='Acima do Peso Ideal'
        }else{
            result='Obeso'
        }
    }
    return result
}
const box ={'Abaixo do Peso':'border border-warning bg-warning text-white','Peso Normal':'border border-sucess bg-success text-white',
'Marginalmente Acima do Peso':'border border-warning bg-warning text-white','Acima do Peso Ideal':'border border-warning bg-warning text-white','Obeso':'border border-danger bg-danger text-white'}

function calculadoraDeIMC(){
    let alt = document.querySelector('#altura').value
    let pes = document.querySelector('#peso').value
    let sex = document.querySelector('input:checked').value
    let res=imc(alt,pes,sex)
    document.querySelector('#imc').value=res
    showbox(res)
}
document.addEventListener('keyup',function(event){
    if (event.key=='Enter'){
        calculadoraDeIMC()

    }else if (event.key=='Escape'){
        let alt = document.querySelector('#altura').value=''
        let pes = document.querySelector('#peso').value=''
        document.querySelector('#imc').value=''
        const imc = document.querySelector('#imc')
        imc.setAttribute('class',`form-control form-control-lg`)
        let sex = document.querySelector('input[id=feminino]').checked=true
    }
})
function showbox(resultado){
    const imc = document.querySelector('#imc')
    imc.setAttribute('class',`form-control form-control-lg ${box[resultado]}`)
}


const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const resultado = document.querySelector('#imc')


function imc(alt,pes,sex){
    let imc = pes.value/(alt.value**2)
    let result =''
    if (sex.value=='masculino'){
        if (imc<20.7){
            result='Abaixo do Peso'
        }else if (imc<26.4){
            result='Peso Normal'
        }else if (imc<27.8){
            result='Marginalmente Acima do Peso'
        }else if (imc<31.1){
            result='Acima do Peso Ideal'
        }else{
            result='Obeso'
        }
    }else if (sex.value=='feminino'){
        if (imc<19.1){
            result='Abaixo do Peso'
        }else if (imc<25.8){
            result='Peso Normal'
        }else if (imc<27.3){
            result='Marginalmente Acima do Peso'
        }else if (imc<32.3){
            result='Acima do Peso Ideal'
        }else{
            result='Obeso'
        }
    }
    return result
}
const box = {'Abaixo do Peso':'border border-warning bg-warning text-white',
'Peso Normal':'border border-sucess bg-success text-white',
'Marginalmente Acima do Peso':'border border-warning bg-warning text-white',
'Acima do Peso Ideal':'border border-warning bg-warning text-white',
'Obeso':'border border-danger bg-danger text-white'}

function calculadoraDeIMC(){
    const sexo = document.querySelector('input:checked')
    let w =imc(altura,peso,sexo)
    resultado.value=w
    resultado.setAttribute('class',`form-control form-control-lg ${box[w]}`)
}

document.addEventListener('keyup',function(){
    if (event.key=='Enter'){
        calculadoraDeIMC()
    }else if (event.key=='Escape'){
        altura.value=''
        peso.value=''
        resultado.value=''
        resultado.setAttribute('class',`form-control form-control-lg`)
    }
})
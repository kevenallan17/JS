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

function calculadoraDeIMC(){
    let alt = document.querySelector('#altura').value
    let pes = document.querySelector('#peso').value
    let sex = document.querySelector('input:checked').value
    let res=imc(alt,pes,sex)
    document.querySelector('#imc').value=res
}



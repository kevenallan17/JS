const cep = document.querySelector('#cep')
const rua = document.querySelector('#street')
const numero = document.querySelector('#number')
const bairro = document.querySelector('#neighborhood')
const estado = document.querySelector('#state')
const cidade = document.querySelector('#city')
const cep_errado = document.querySelector('#cepError')

function GetUrl(url){
    fetch(url)
    .then(result=>result.json())
    .then(json=>print(json))
}

function print(info){
    rua.value=info.logradouro
    numero.value=info.unidade
    bairro.value=info.bairro
    estado.value=info.uf
    cidade.value=info.localidade
 }
function clear(){
    rua.value=''
    numero.value=''
    bairro.value=''
    estado.value=''
    cidade.value=''
}

cep.addEventListener('blur',function(){
    if (cep.value.length==8){
        GetUrl(`https://viacep.com.br/ws/${cep.value}/json/`)
    }else{
        cep_errado.classList.remove('hidden')
        cep.style.background='#ffbfaa'
    }
})
cep.addEventListener('focus',function(){
    clear()
    cep_errado.classList.add('hidden')
    cep.style.background='none'
})
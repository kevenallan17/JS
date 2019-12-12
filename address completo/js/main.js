const cep = document.querySelector('#cep')
const rua = document.querySelector('#rua')
const numero = document.querySelector('#numero')
const bairro = document.querySelector('#bairro')
const estado= document.querySelector('#estado')
const cidade = document.querySelector('#cidade')
const div = document.querySelector('.ceperro')
function GetCep(url){
    fetch(url)
    .then(result=>result.json())
    .then(json=>write_results(json))
}

function write_results(dados){
    rua.value=dados.logradouro
    bairro.value=dados.bairro
    estado.value=dados.uf
    cidade.value=dados.localidade
}
function exibir_erro(){
    div.classList.remove('show_erro')
}
cep.addEventListener('blur',function(event){
    if (cep.value.length<8){
        exibir_erro()
    }else{
        GetCep(`https://viacep.com.br/ws/${cep.value}/json/`)
    }
})
function clearAll(){
    div.classList.add('show_erro')
    rua.value=''
    bairro.value=''
    estado.value=''
    cidade.value=''
}
cep.addEventListener('focus',()=>{
    clearAll()
})
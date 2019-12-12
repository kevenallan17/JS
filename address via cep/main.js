const cep=document.querySelector('#cep')
const local=document.querySelector('#localidade')

function GetCep(url){
    fetch(url)
    .then(res=>res.json())
    .then(json=>write_localidade(json))
}
function write_localidade(cep){
    local.value=cep.localidade
}
cep.addEventListener('blur',function(event){
    GetCep(`https://viacep.com.br/ws/${cep.value}/json/`)
})
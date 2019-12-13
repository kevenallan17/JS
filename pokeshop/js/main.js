const tabela = document.querySelector('#pokemons')
let result=''
for (let poke of pokemons){
    result+=`<div class="pokemon-view">
    <img class="pokemon-view-img" src="${poke.img}" alt="${poke.name}">
    <span class="pokemon-view-name">${poke.name}</span>
    <span class="pokemon-view-price">R$ ${poke.price}</span>
    <button class="pokemon-view-shop">COMPRAR</button>
  </div>`
}
tabela.innerHTML=result

const voltar_topo=document.querySelector('.nav-top')
voltar_topo.addEventListener('click',function(event){
    window.scrollTo({
        behavior: 'smooth',
        top: 0,
        left: 0
      })
})

const carrinho = document.querySelector('.cart-count')
carrinho.style.display='none'

let valor = document.querySelector('.cart-count')

const buttons= document.querySelectorAll('.pokemon-view-shop')
let count=0
for (const button of buttons){
    button.addEventListener('click',function(event){
        count+=1
        carrinho.style.display='inline'
        valor.innerHTML=count
    })
}
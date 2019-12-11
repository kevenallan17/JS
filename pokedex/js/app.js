const pokedex = document.querySelector('section')
const filter_type=document.querySelector('#filter-type')
const filter_name=document.querySelector('#filter-name')
let array
let numero_pokemon
function exibir(array){
  result=''
  for (let pokemon of array){
    if (pokemon.type.length==1){
      pokemon.type[1]=''
    }if (pokemon.id!=0){
      let quantidade
      if (pokemon.id<=9){
        quantidade=2
      }else if (pokemon.id<=99){
        quantidade=1
      }else{
        quantidade=0
      }
      numero_pokemon=''
      for (let c=0;c<quantidade;c++){
        numero_pokemon+=0
      }
     numero_pokemon+=pokemon.id
    }
    result+=`
    <div class="pokemon" data-name="Bulbasaur" data-type="grass,poison" tabindex="1">
      <figure class="pokemon-figure">
        <img src="img/${pokemon.name}.png" alt="Bulbasaur">
      </figure>
      <section class="pokemon-description">
        <span class="pokemon-id">#${numero_pokemon}</span>
        <h1 class="pokemon-name">${pokemon.name}</h1>
        <div class="pokemon-types">
          <span class="pokemon-type background-${pokemon.type[0]}">${pokemon.type[0]}</span>
          <span class="pokemon-type background-${pokemon.type[1]}">${pokemon.type[1]}</span>
        </div>
      </section>
      <section class="pokemon-stats">
        <div class="stat-row">
          <div>hp</div>
          <div class="stat-bar">
            <div class="stat-bar-bg" style="width: 18%">${pokemon.stats.hp}</div>
          </div>
        </div>
        <div class="stat-row">
          <div>attack</div>
          <div class="stat-bar">
            <div class="stat-bar-bg" style="width: 19.6%">${pokemon.stats.attack}</div>
          </div>
        </div>
        <div class="stat-row">
          <div>defense</div>
          <div class="stat-bar">
            <div class="stat-bar-bg" style="width: 19.6%">${pokemon.stats.defense}</div>
          </div>
        </div>
        <div class="stat-row">
          <div>sp-atk</div>
          <div class="stat-bar">
            <div class="stat-bar-bg" style="width: 26%">${pokemon.stats["sp-atk"]}</div>
          </div>
        </div>
        <div class="stat-row">
          <div>sp-def</div>
          <div class="stat-bar">
            <div class="stat-bar-bg" style="width: 26%">${pokemon.stats["sp-def"]}</div>
          </div>
        </div>
        <div class="stat-row">
          <div>speed</div>
          <div class="stat-bar">
            <div class="stat-bar-bg" style="width: 18%">${pokemon.stats.speed}</div>
          </div>
        </div>
      </section>
    </div>`
  }
  pokedex.innerHTML=result
}

exibir(Lista_Pokemons)

filter_type.addEventListener('click',function(){
  if (filter_type.value=='all'){
    exibir(Lista_Pokemons)
  
}else{
    array=Lista_Pokemons.filter(poke=>poke.type.includes(filter_type.value))
    exibir(array)
  }    
})

filter_name.addEventListener('keydown',function(){
  if (filter_name==''){
    exibir(Lista_Pokemons)
  }else{
    array=Lista_Pokemons.filter(poke=>poke.name.includes(filter_name.value))
    if (array.length==0){
      pokedex.innerHTML='<div style="font-size:20px;font-weight:bold">NENHUM POKEMON FOI ENCONTRADO!</div>'
    }else{
    exibir(array)
    }
  }
})

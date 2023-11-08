const BASEURL = "https://pokeapi.co/api/v2/pokemon/"
const BASEURLIMG = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

function getPokemonList(){
    let listaPokemons = []
    fetch(BASEURL + '?limit=251').then( Response => {
        if (Response.status == 200){
            listaPokemons = Response.json().then( json => {json.results.map( pokemon => { console.log(pokemon.name)})
            return json})
            return listaPokemons
        }
    })
}

// function getPokemonId(){
//     fetch(BASEURL + 5 ).then( (Response) => { Response.json()}
// }

function showSixPokemon(){
    let listaPokemons = []
    fetch(BASEURL + '?limit=6').then( Response => {
        if (Response.status == 200){
            listaPokemons = Response.json().then( json => {json.results.map( pokemon => { 
                let liPokemon = document.createElement("li")
                let liPokemonImg = document.createElement("img")
                fetch(pokemon.url).then(Response => { pokemonImg = Response.json().then( (pokemon) => {(liPokemonImg.src = pokemon.sprites.front_default)})})
                liPokemon.innerHTML = pokemon.name
                liPokemon.appendChild(liPokemonImg)
                document.getElementById("ListaPokemons").appendChild(liPokemon)
            })
            return json})
            return listaPokemons
        }
    })
}


function showPokemonList(){
    let listaPokemons = []
    fetch(BASEURL + '?limit=1000').then( Response => {
        if (Response.status == 200){
            listaPokemons = Response.json().then( json => {json.results.map( pokemon => { 
                let liPokemon = document.createElement("li")
                let liPokemonImg = document.createElement("img")
                fetch(pokemon.url).then(Response => { pokemonImg = Response.json().then( (pokemon) => {(liPokemonImg.src = pokemon.sprites.front_default)})})
                liPokemon.innerHTML = pokemon.name
                liPokemon.appendChild(liPokemonImg)
                document.getElementById("ListaPokemons").appendChild(liPokemon)
            })
            return json})
            return listaPokemons
        }
    })
}


/*
async function getData() {
       let res = await fetch(BASEURL+ '?limit=151')
       let result = await res.json()
       let pokemon = result.results
       console.log(pokemon)       
       return(pokemon)
 }*/

 // PROJETOS DE FIXAÇÃO
 // 1. Criar um site em conjunto com DESIGN 
 // 2. Criar um projeto Pokedex, criar um site que possa listar 150 pokemons em cards contendo o nome do pokemon, número e o nome.
 // 3. Quando vc clicar no pokemon, vai aparecer um +, vc clica no + e captura o pokemon, maximo de 6. ( LISTA )

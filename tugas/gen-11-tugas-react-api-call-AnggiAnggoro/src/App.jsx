import axios from "axios"
import { useState } from "react"


function App() {

  const [jokes, setJokes] = useState('')
  const [punchline, setPunchline] = useState('')
  const [pokemon, setPokemon] = useState([])


  async function getApiAsyncAwait () {
    const jokes = await axios.get('https://official-joke-api.appspot.com/random_joke')
    const poke = await axios.get('https://pokeapi.co/api/v2/pokemon/')
    setJokes(jokes.data.setup)
    setPunchline(jokes.data.punchline)

  }



  function getApiThenCatch () {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then(function (result) {
        let pkmn = pokemon
        for(let i = 0; i <5; i++) {
          const data = result.data.results[i].name
          pkmn = [...pkmn,data]
       }
       setPokemon(pkmn)

      })
      .catch((err) => {
        alert('Terjadi kesalahan')
        console.log(err)
      })
  }


  return (
    <>
    <button onClick={getApiAsyncAwait}>
      Get Joke
    </button>
    <br /><br />
    <p>Tell Me joke: {jokes}</p>
    <p>What: {punchline}</p>
    <button onClick={getApiThenCatch}>
      Get Pokemon
    </button>
    <p>Pokemon:</p>
    <ol>
       {pokemon.map((item,index) =>{
        return <li key={index}>{item}</li>
       }
     
      )}
      </ol>
  </>
  )
}

export default App

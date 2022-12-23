
// fetch("https://swapi.dev/api/people/1")
//   .then((res)=> {
//     console.log("RESOLVED!", res)
//     return res.json()
//   })
//   .then(data => {
//     console.log("JSON DONE", data)
//     return fetch("https://swapi.dev/api/people/2")
//   })
//   .then(res => {{
//     console.log('SECOND REQUEST RESOLVED!', res)
//     return res.json();
//   }})
//   .then (data => {
//     console.log("SECOND JSON DONE!", data)
//     return fetch ("https://swapi.dev/api/people/2")
//   })
//   .catch((error)=>{
//     console.log("ERROR!", error)
//   })

// const loadStarWarsPeople = async() => {
//   try {
//     const res = await fetch("https://swapi.dev/api/people/1")
//     const data = await res.json()
//     console.log("REQUEST 1", data)
//     const res2 = await fetch("https://swapi.dev/api/people/2")
//     const data2 = await res2.json()
//     console.log("REQUEST 2", data2)
//   } catch (error) {
//     console.log("ERROR!", error)
//   }
// }

// loadStarWarsPeople()

// AXIOS built on top of javascript...is a library for making HTTP requests

// axios.get("https://swapi.dev/api/people/1").then((res)=> {
//   console.log("RESPONSE: ", res)
// })


// const getStarWarsPerson = async(id) => {
//   try {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}`)
//     console.log(`Star Wars Person ${id} is: `, res.data)
//   } catch (error) {
//     console.log("ERROR, bummer", error)
//   }
// }

// getStarWarsPerson(10)


// const getDadJoke = async () => {
  //   const config = { headers: { Accept: 'application/json' } }
  //   const res = await axios.get('https://icanhazdadjoke.com', config)
  //   // console.log(res.data.joke)
  //   const newLI = document.createElement('li')
  //   newLI.append(res.data.jokes)
  //   jokes.append(newLI)
  // }

//! Completed Dad Joke API code below

// const getNewJoke = async () => {
  
//   const jokeText = await getDadJoke()
//   console.log('this is jokeText:', jokeText)
  
//   const newLI = document.createElement('LI')
//   newLI.append(jokeText)
//   console.log('this is newLI:', newLI)
  
//   const jokes = document.getElementById('jokes')
//   jokes.append(newLI)
// }

// const getDadJoke = async () => {
//   try {
//     const config = { headers: { Accept: 'application/json' } }
//     const res = await axios.get('https://icanhazdadjoke.com', config)
//     // console.log(res.data.joke)
//     return res.data.joke
//   } catch (error) {
//     console.log('ERROR!: ', error)
//     return "No jokes for you, sorry!"
//   }
// }

// window.addEventListener('DOMContentLoaded', (event) => {
//   console.log('DOM is loaded')
//   console.log('this is event', event)
//   const button = document.getElementById('button')
//   button.addEventListener('click', getNewJoke)
// })

//* TV MAZE API Search Form & Update


window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM is loaded')
  console.log('this is event', event)
  const form = document.querySelector('#searchForm')
  form.addEventListener('submit', function(event){
    event.preventDefault()
    console.log('Submitted')
  })
})

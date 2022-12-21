
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

axios.get("https://swapi.dev/api/people/1").then((res)=> {
  console.log("RESPONSE: ", res)
})


const getStarWarsPerson = async(id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}`)
    console.log(`Star Wars Person ${id} is: `, res.data)
  } catch (error) {
    console.log("ERROR, bummer", error)
  }
}

getStarWarsPerson(10)
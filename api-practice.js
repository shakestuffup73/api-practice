
fetch("https://swapi.dev/api/people/1")
  .then((res)=> {
    console.log("RESOLVED!", res)
    return res.json()
  })
  .then(data => {
    console.log("JSON DONE", data)
    return fetch("https://swapi.dev/api/people/2")
  })
  .then(res => {{
    console.log('SECOND REQUEST RESOLVED!', res)
    return res.json();
  }})
  .then (data => {
    console.log("SECOND JSON DONE!", data)
    return fetch ("https://swapi.dev/api/people/2")
  })
  .catch((error)=>{
    console.log("ERROR!", error)
  })
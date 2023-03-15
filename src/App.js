import { useEffect, useState } from 'react';
import './App.css';
const App = () =>{
   const [joke , getJoke] = useState([])
   const [type , newType] = useState()
   const [line , newLine] = useState()
   const [setup , newSetup] = useState()
  const getData = async()=>{
  const res = await fetch('https://official-joke-api.appspot.com/random_joke')
  const data = await res.json()
    getJoke(data)
    let type = "Type : "
   newType(type)
   let line = "Punchline : "
   newLine(line)
   let setup = "Setup : "
   newSetup(setup)
   }
   useEffect(()=>{
     getData()
   },[])
  return (
     <div className="App">
      <div className='Center_div'>
       <h1 className='heading'>Jokes 2023 😝</h1>
       <h2 className='title'>Keep Smiling 😄</h2>
       <div className='jokes'>
     <span>{type } </span><p> {joke.type}</p>
     <br/>
     <span>{setup}</span><p> {joke.setup}</p>
     <br/>
    <span>{line}</span><p>{joke.punchline}</p>
     </div>
      <button className='btn'
       onClick={()=>{
         getData() 
            }}
      >Get Jokes</button>
      </div>
     </div>
  );
}

export default App;

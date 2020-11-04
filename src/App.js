import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData]= useState([])
  const [search, setSearch] = useState("")
  const getData = async()=> {
    await axios.get('https://bhamilton1000.github.io/SampleData/Web-Question-001/UnitedStatesWithCounties.json')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
    
  }
useEffect(()=> {
 getData()
},[])

const containsSearch =
  data.filter(state => (
    state.StateName.toLowerCase().includes(search.toLowerCase()) 
  ))
;

console.log(data)
  return (
    <div className="App">
      <h1>Select State:</h1>
      <input type="text" placeholder="Enter State Name..." onChange={(e)=> setSearch(e.target.value)}/>
      {containsSearch.map(curr=>(
        <div className="state">
          {curr.StateName}
        </div>
      ))}
    </div>
  );
}

export default App
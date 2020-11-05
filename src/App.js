import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData]= useState([])
  const [search, setSearch] = useState("")
  const [toggle, setToggle] = useState(true)
  const getData = async()=> {
    await axios.get('https://bhamilton1000.github.io/SampleData/Web-Question-001/UnitedStatesWithCounties.json')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
    
  }
useEffect(()=> {
 getData()
},[])


const handleToggle =(value)=> {
  setToggle(value)
}

const containsSearch =
  data.filter(state => (
    state.StateName.toLowerCase().includes(search.toLowerCase()) 
  ));

const startsWithSearch =
  data.filter(state => (
    state.StateName.toLowerCase().startsWith(search.toLowerCase()) 
  ));
  return (
    <div className="App">
      <div className='container'>
        <h1 className="main-title">Select State:</h1>
        <input type="text" placeholder="Enter State Name..." onChange={(e)=> setSearch(e.target.value)}/>
        
        <div className="radio_container">
          Start with: <input type="radio" name="search" onClick={()=> handleToggle(false)}/>
          Contains <input type="radio" name="search" onClick={()=> handleToggle(true)}/>
        </div>
        {toggle? containsSearch.map((curr, i)=>(
          <div className="state" key={i}>
            <p>{curr.StateName}</p>
          </div>
        )): startsWithSearch.map((curr, i)=>(
          <div className="state" key={i}>
            <p>{curr.StateName}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default App
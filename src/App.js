import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Info from './components/Info';
import Genres from './components/Genres';
import {BrowserRouter as Router,Route,useParams} from 'react-router-dom';
function App() {
const [data,setData] = useState([]);

useEffect(()=>{
  for(let i=0;i<5;i++){
    axios('https://anime5311.herokuapp.com/api/popular/'+i)
    .then((res)=>{
      // console.log(res.data);
      res.data.results.forEach((item)=>{
        setData(prev=>[...prev,item]);
      })
      
      // console.log(data)
    })
  }
},[])
  return (
    <div className="App">
      <Router>
        <Navbar
        data={data}
        setData={setData}/>
      <Genres 
        setData={setData}/>
     <Route path='/' exact >
     <Main 
        data={data}/>
     </Route>
     <Route path='/info/:id' exact>
        <Info/>
     </Route>
      </Router>
    </div>  

  );
}

export default App;
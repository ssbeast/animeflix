import React, { useRef } from 'react'
import './Navbar.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import SearchIcon from '@material-ui/icons/Search';
function Navbar({data,setData}) {
    const ref = useRef();
    
    const history = useHistory();
    function searchAnime(value){
        if(value.length!==0){
            setData([]);
            axios(`https://anime5311.herokuapp.com/api/search/${value}/1`)
            .then((res)=>{
                setData(res.data.results);
                console.log(res.data)
                 history.push('/');  //this will take us back to the main page and show search results


            })
        }
    }
    return (
        <div className='navabar' id='navabar'>
            
            <h1 onClick={()=>{
                history.push('/')
                setData([]);
                for(let i=1;i<7;i++){
                    axios(`https://anime5311.herokuapp.com/api/popular/${i}`)
                    .then((res)=>{
                      // console.log(res.data);
                      res.data.results.forEach((item)=>{
                          setData(prev=>[...prev,item]);
                        })
                      
                      // console.log(data)
                    })
                  }
            }}>
                Anime Home
                </h1>
            <span id='search'>
            <input type="text"
            placeholder="search your favourite anime"
             ref={ref} 
             onKeyPress={(e)=>{
                console.log('hello')
                if(e.key === 'Enter'){ 
                    console.log('pressed')   
                    searchAnime(e.target.value);
                }
            }}/>
            <button onClick={()=>{
                searchAnime(ref.current.value);
            }}>
           
                <SearchIcon id='icon'/>
            </button>
            </span>
        </div>
    )
}

export default Navbar;
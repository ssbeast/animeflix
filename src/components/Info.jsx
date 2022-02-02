import React from 'react'
import './Info.css';
import {useParams} from 'react-router-dom';

import axios from 'axios';
function Info() {
    const [ep,addep] = React.useState();
    const [data,setData] = React.useState([]);
    const {id} = useParams();
    React.useEffect(()=>{
        axios('https://anime5311.herokuapp.com/api/details/'+id)
        .then((res)=>{
            console.log(res.data);
            setData(res.data.results);
        })
    },[])

    
    return (
        
        <div className='info'>
        {
            ep!=null && 
            <iframe src={ep} width="100%" height="500px"  frameborder="0" allowFullScreen title='stream'></iframe>
        }
            {
                data.map(item=>{
                    return(
                        <>
                        <div id='info-div'>
                        <img src={item.image} alt="" />
                        <br />
                        <h3><strong>{item.title}</strong></h3>    
                        <p>{item.summary}</p>
                        <p>Genres : {item.genres}</p>
                        <br />
                       
                        </div>
                        <div id='episodes'>
                        {
                            [...Array(parseInt(item.totalepisode))].map((x,i)=>{
                                var index = i+1
                                return(
                                    
                                    <button onClick={()=>{
                                        axios(`https://anime5311.herokuapp.com/api/watching/${id}/${index}`)
                                        .then(res=>{
                                            // console.log(res.data.link)
                                            // window.location.href = res.data.link
                                            addep(res.data.link)
                                        })
                                        
                                    }}> ep: {index} </button>
                                    )
                            })
                            
                        }
                        </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Info
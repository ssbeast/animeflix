// import React from 'react'
// import { useState } from 'react';
// import { useHistory } from 'react-router';
// function MainBody({setidx,data,ep,idx,getEp,getInfo}) {
//    const history = useHistory();
//     const callGetEp = (idxx)=>{
//         getEp(idxx);
//     }
  
//     return (
       
//          <div className="card-body">
//              {data.map(anime =>{
//                  return(

                        
//                      <div className="cards" > 
//                        <img src={anime.image} alt="img"/>
//                        <button onClick={()=>{
//                              history.push('/info/'+anime.id)
//                             setidx(anime.id);
//                            console.log(idx,"idx");
//                         //   callGetEp(anime.id);
//                         getInfo(anime.id);
//                        }}>Click</button>
//                      </div>
                      
                     
//                  )
//              })}
            

//          </div>
            
       
     
//     )
// }

// export default MainBody

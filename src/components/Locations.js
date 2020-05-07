import React from 'react';


const Locations =({location}) =>{
    console.log('hi')
  
   return (
       <div className="locations">
           
           <h1>{location.name}</h1>
            <h2>{location}</h2>

       </div>
   )


}


export default Locations
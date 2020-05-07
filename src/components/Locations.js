import React from 'react';


const Locations =({location, id}) =>{
    console.log(id)
  
   return (
       <div className="locations">
           
           {/* <h3>{location.name}</h3> */}
            <h2>{location}</h2>
            <h2>{id}</h2>

       </div>
   )


}


export default Locations
import React, {useState, useEffect} from 'react'
import Search from './components/Search'
import styles from './App.modules.css'
import { Container } from '@material-ui/core';
import Locations from './components/Locations'



const url = 'https://covid-19-testing.github.io/locations/:state/complete.json'



const App =() => {
       
    
    const [loading, setLoading] = useState(true);
    const[locations, setLocations] = useState([]);
    console.log(locations)

    // useEffect(() => {
    //     fetch("{url}/phones/?format=json")
    //     // .then(response => console.log(response))
        
    //     .then(jsonResponse => {
    //         setLocations(jsonResponse.Search);
    //     })    
        
    // }, [])

    const search = searchValue =>{
        setLoading(true);
        //setErrorMessage(null);

        fetch(`https://covid-19-testing.github.io/locations/${searchValue}/complete.json`)
        .then(response => response.json())
       // .then(result => console.log(result))
        .then(jsonResponse => {
            
                setLocations(jsonResponse)
            
            
        },[])
        
      

        // var requestOptions = {
        //     method: 'GET',
        //     redirect: 'follow'
        //   };
          
        //   fetch("{{url}}/phones/?format=json", requestOptions)
        //     .then(response => response.text())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));
        
    }

   


    return(
        
        <div className='hero-image'>
            <Search className={styles.heroContent} search={search}/>
                
           <div>
               {locations.map(location =>
               
               <Locations location={location.name}/>
               
                 )}
           </div>
           <p>{locations.map((location)=>
                location.name)}</p>
        </div>
    
    )
    
             
    }
    


export  default App;
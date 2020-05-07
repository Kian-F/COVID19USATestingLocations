import React, {useState, useEffect} from 'react'
import Search from './components/Search'
import styles from './App.modules.css'

import { Container } from '@material-ui/core';



const url = 'https://covid-19-testing.github.io/locations/Arizona/complete.json'



const App =() => {
    const [loading, setLoading] = useState(true);

    const search = searchValue =>{
        setLoading(true);
        //setErrorMessage(null);

        fetch(`https://covid-19-testing.github.io/locations/${searchValue}/complete.json`)
        .then(response => response.json())
        .then(result => console.log(result))

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
        </div>
    
    )
             
    }
    


export  default App;
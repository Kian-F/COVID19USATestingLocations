import React, {useState, useEffect} from 'react'
import Search from './components/Search'



const url = 'https://covid-19-testing.github.io/locations/?s=/complete.json'



const App =() => {
    const [loading, setLoading] = useState(true);

    const search = searchValue =>{
        setLoading(true);
        //setErrorMessage(null);

        fetch(`https://covid-19-testing.github.io/locations/${searchValue}/complete.json`)
        .then(response => console.log(response.json())) 
        
    }

   


    return(
    <div>
        <Search search={search}/>
     </div>)
        
             
    }
    


export  default App;
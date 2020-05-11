import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styles from "../components/Search.modules.css";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  console.log(props)

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
    console.log(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  const style = {
    color: "white",
  };

  return (
    <div>
      <div className="mainHeder">
        <h1>COVID-19 USA Testing Locations</h1>
        <p style={{color:'white'}}>Find By State</p>
      </div>

      <form className="heroContent">
          
        {/* <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        /> */}

        {/* <input onClick={callSearchFunction} type="submit" value="SEARCH" /> */}

        <TextField
          style={style}
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
          id="outlined-search"
          label="STATE"
          type="text"
          variant="outlined"
        />
        <div className="searchButton">
        <Button
          onClick={callSearchFunction}
          variant="contained"
          color="primary"
        >
          Search
        </Button>
        </div>
      
      </form>
    
    </div>
  );
};

export default Search;

import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import styles from "./App.modules.css";
import { Container } from "@material-ui/core";
import Locations from "./components/Locations";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const url = "https://covid-19-testing.github.io/locations/:state/complete.json";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [locations, setLocations] = useState([]);
  console.log(locations);

  // useEffect(() => {
  //     fetch("{url}/phones/?format=json")
  //     // .then(response => console.log(response))

  //     .then(jsonResponse => {
  //         setLocations(jsonResponse.Search);
  //     })

  // }, [])

  const d = new Date();
  var weekday = new Array(7);

  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  weekday[7] = "Sunday";
  var day = weekday[d.getDay()];
  console.log(day);

  const search = (searchValue) => {
    setLoading(true);
    //setErrorMessage(null);
    searchValue = searchValue.trim().replace(/ /g, "-").toLowerCase();
    fetch(
      `https://covid-19-testing.github.io/locations/${searchValue}/complete.json`
    )
      .then((response) => response.json())
      // .then(result => console.log(result))
      .then((jsonResponse) => {
        setLocations(jsonResponse);
      }, []);

    // var requestOptions = {
    //     method: 'GET',
    //     redirect: 'follow'
    //   };

    //   fetch("{{url}}/phones/?format=json", requestOptions)
    //     .then(response => response.text())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));
  };

  return (
    <React.Fragment>
      <div className={styles.container}>
      <div className="hero-image">
        <Search className={styles.heroContent} search={search} />
      </div>
      <Grid item xs={2}>
        <div className="box">
          {locations.map((location, index) => (
            <Card className={styles.root}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  <span style={{ fontSize: 28 }}>{location.name}</span>
                </Typography>
                <p className="lastUpdated">Last Updated: {location.updated}</p>
                <Typography variant="body2" component="p">
                  {location.description}
                  <br />
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs>
                    {location.regular_schedule.map((day) => (
                      <Paper className={styles.paper}>
                        {weekday[day.weekday]}
                        <br />
                        <br />
                        Oppen: {day.opens_at}
                        <br />
                        <br />
                        Close:{day.closes_at}
                      </Paper>
                    ))}
                  </Grid>
                </Grid>
                <Grid>
                  {location.physical_address.map((address) => (
                    <p>
                      {" "}
                      <span style={{ color: "blue" }}>Address:</span> <br />
                      {address.address_1}
                      <br />
                      {address.city}, {address.state_province}{" "}
                      {address.postal_code}
                    </p>
                  ))}
                </Grid>
                <Grid>
                  {location.phones.map((phone) => (
                    <p>
                      <span style={{ color: "blue" }}>Phone Number:</span>
                      {phone.number}
                      <br />
                      Type: {phone.type}
                      <br />
                      Language: {phone.language}
                    </p>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          ))}
        </div>
      </Grid>
      </div>
    </React.Fragment>
  );
};

export default App;

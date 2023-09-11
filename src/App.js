import logo from './logo.svg';
import './App.css';
import Card from './Components/Card'
import Grid from '@mui/material/Grid';
import { Component } from 'react';
import NavBar from './Components/NavBar';
import Search from './Components/Search';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Grid container spacing={2}>

      <Grid item xs={2}> 
       
      </Grid>
     
      {/* Card occupying 8 columns on the right */}

      
      <Grid item xs={10}>
        <Card />
        < Search/>
      </Grid>


      </Grid>

    </div>
  );
}

export default App;

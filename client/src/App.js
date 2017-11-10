import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from './components/jumbotron';
import Main from './Main';


const App = () =>{
  return(
  <div className="App">
                  
          <Jumbotron /> 
          <div className="container-fluid" >       
          <Main />
          </div>          
          <footer>
              <h5>New Your Times Scrapper</h5>
              
          </footer>

           
        
  </div>
  )


}

export default App;

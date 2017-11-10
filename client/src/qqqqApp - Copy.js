import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from './components/jumbotron';
import Form from './Sections/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">            
              <Jumbotron />
            </div>            
          </div>
          <div className="row">
            <div className="col-lg-2">
              
            </div>
            <div className="col-lg-8 search">

            <hr/>
              <div id="seach-title">
                  <h3>Search</h3>
              </div>
              <Form />

            </div>
            <div className="col-lg-2">
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

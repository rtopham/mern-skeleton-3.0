import logo from '.././logo.svg';
import React, {Component} from 'react'
import '.././App.css';
import './Core.css'

class Home extends Component {

    state = {
        response: ''
      };

  render() {
    return (
        <div className="globalCore">
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>MERN Skeleton App with Authentication and User CRUD API</p>
          <p>
              This is the Public Home Page.
          </p>
          
          <p>
            Edit <code>src/core/Home.js</code> and save to reload me.
          </p>

        </header>
      </div>
          </div>
        
    )
  }
}


export default Home

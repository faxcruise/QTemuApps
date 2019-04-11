import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar.js';
import Register from './Components/Register.js';
import Home from './Components/Home.js';
import {  BrowserRouter, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import storex from './Redux/store';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      namaApps: 'QTemu',
      menu: [
        {
          id: '1',
          name: 'Create Meetup',
          location: '#'
        },
        {
          id: '2',
          name: 'Explore',
          location: '#'
        }
      ]
    }
  }
  
  

  render() {
    let { namaApps, menu, contentHeader, isiContent, members, pastmeetups, people } = this.state

    return (
      <Provider store={storex}>
          <BrowserRouter>
            <React.Fragment>
              <NavBar namaApps={namaApps} menu={menu}/>
              
              <Switch>
                <Route path="/register" component={Register} />
                <Route path="/register/:nama" component={Register} /> 
                <Route path="/" component={Home} />           
              </Switch>
              {/* <ul>
                    {
                      people.map(orang => {
                        return (
                          <li>name: {orang.name}</li>
                        )
                      })
                    }
                  </ul> */}
            </React.Fragment>
          </BrowserRouter>
      </Provider>      
    );
  }
}

export default App;

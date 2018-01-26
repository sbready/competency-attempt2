import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Page2 from './components/Page2'


class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>

          <Route path='/page2/:id' component={ Page2 }/>

          </Switch>
        </HashRouter> 
      </div>
    );
  }
}

export default App;

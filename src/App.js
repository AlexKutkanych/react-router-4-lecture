import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './App.css';

import Basic from './1.basic';
import Params from './2.urlParams';
import Redirects from './3.redirects';
import TransitionPreventing from './5.TransitionPreventing';
import NoMatch from './6.NoMatch';
import Recursive from './7.Recursive';
import Bundle from "./Bundle/Bundle";

const Ambiguous = (props) => (
  <Bundle load={() => import('./AmbiguousMatches')}>
    {(Ambiguous) => (<Ambiguous {...props} />)}
  </Bundle>
);

class App extends Component {
  render() {
    return (
      <Router className="App">
        <div>
          <div className="App-header">
            <h2>React Router v4</h2>
            <ul className="App-links">
              <li><Link to="/">Index</Link></li>
              <li><Link to="/basic">Basic</Link></li>
              <li><Link to="/params">Params</Link></li>
              <li><Link to="/redirects">Redirects</Link></li>
              <li><Link to="/transitionPreventing">Preventing transition</Link></li>
              <li><Link to="/noMatch">No match</Link></li>
              <li><Link to="/recursive">Recursive</Link></li>
              <li><Link to="/ambiguous">Ambiguous</Link></li>
            </ul>
          </div>

          <div className="App-content">
            <Route exact path="/" component={() => (<div>Welcome to React Router lecture)</div>)}/>
            <Route path="/basic" component={Basic}/>
            <Route path="/params" component={Params}/>
            <Route path="/redirects" component={Redirects}/>
            <Route path="/transitionPreventing" component={TransitionPreventing}/>
            <Route path="/noMatch" component={NoMatch}/>
            <Route path="/recursive" component={Recursive}/>
            <Route path="/ambiguous" component={Ambiguous}/>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;

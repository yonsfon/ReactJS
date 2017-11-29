import React, { Component } from 'react';
import List from "./List";
import ConstructorDetail from "./ConstructorDetail";
import Standings from "./Standings";

import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="panel panel-panel-default">
            <div className="panel-heading">
              <h1>Formula 1</h1>
            </div>
            <div className="panel-body">
              <Switch>
                <Route exact path='/' component={List} />
                <Route path='/item/:member' component={ConstructorDetail} />
                <Route path='/standings' component={Standings} />
                {/* <Route component={PageNotFound} /> */}
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

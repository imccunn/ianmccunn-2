import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
const customHistory = createBrowserHistory()

import Main from './Main.jsx';
import Main2 from './Main2.jsx';

export default class Index extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <Router history={customHistory}>
          <div>
            <ul>
              <Link to="/">index</Link>
              <Link to="/two">two</Link>
            </ul>
            <Route exact path="/" component={Main} />
            <Route path="/two" component={Main2} />
          </div>
        </Router>
      );
    }
}

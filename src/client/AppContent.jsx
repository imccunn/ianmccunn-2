import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';

import Main from './Main.jsx';
import Main2 from './Main2.jsx';

export default class AppContent extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>
          <ul>
            <Link to="/">index</Link>
            <Link to="/two">two</Link>
          </ul>
          <Route path="/" component={Main} />
          <Route path="/two" component={Main2} />
        </div>
      );
    }
}

import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';

import Main from './Main.jsx';
import Code from './Code.jsx';

export default class AppContent extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>
          <div style={{width: '100%', height: '40px', backgroundColor: '#4E342E'}}></div>
          <ul>
            <Link to="/">index</Link>
            <Link to="/code">code</Link>
            <Link to="/docs">docs</Link>
          </ul>
          <Route path="/" component={Main} />
          <Route path="/code" component={Code} />
        </div>
      );
    }
}
